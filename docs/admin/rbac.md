---
sidebar_position: 3
---

# RBAC — Konfigurasi Hak Akses

Panduan konfigurasi sistem RBAC (Role-Based Access Control) melalui antarmuka admin Komando Satria Apps.

---

## Akses Menu RBAC

Menu konfigurasi RBAC tersedia di bawah grup **Builtin** di sidebar. Hanya role `admin`, `brigif`, dan `denma` yang dapat mengakses menu ini.

---

## Alur Konfigurasi RBAC (End-to-End)

Berikut urutan lengkap untuk menyiapkan RBAC dari awal:

```
1. Buat/verifikasi Role (Builtin → Role)
2. Buat/verifikasi Module (Builtin → Module)
3. Assign Permission ke Module (Builtin → Module Permission)
4. Assign Permission ke Role per Module (Builtin → Role Permission)
5. Buat/verifikasi Menu (Builtin → Menu)
6. Assign Menu ke Role (Builtin → Menu Role)
7. Buat User (Builtin → User)
8. Assign Role ke User (Builtin → User Role)
```

---

## Module Permission (`/builtin/permission`)

Mendefinisikan **permission apa saja yang tersedia** untuk setiap modul.

### Default Permission yang Tersedia

| Permission | Deskripsi |
|------------|-----------|
| `create` | Tambah data baru |
| `read_all` | Lihat semua data |
| `read_own` | Lihat data milik sendiri |
| `update_all` | Ubah semua data |
| `update_own` | Ubah data milik sendiri |
| `delete_all` | Hapus semua data |
| `delete_own` | Hapus data milik sendiri |

### Menambah Permission ke Modul
1. Buka **Builtin → Module Permission**.
2. Pilih modul dari dropdown.
3. Pilih jenis permission dari dropdown.
4. Klik **Simpan**.

---

## Role Module Permission (`/builtin/role-permission`)

Mengontrol **permission mana yang dimiliki role tertentu** untuk setiap modul.

### Cara Assign Permission
1. Buka **Builtin → Role Permission**.
2. Pilih **Role** dari dropdown.
3. Pilih **Modul** yang ingin dikonfigurasi.
4. Centang permission yang diizinkan.
5. Klik **Simpan**.

---

## Menu Role (`/builtin/menu-role`)

Mengontrol **item menu sidebar mana yang terlihat** oleh role tertentu.

### Assign Menu ke Role
1. Buka **Builtin → Menu Role**.
2. Pilih **Role** yang ingin dikonfigurasi.
3. Centang menu-menu yang diizinkan untuk role tersebut.
4. Klik **Simpan**.

---

## Reset RBAC via Seeder

Jika ingin mereset konfigurasi RBAC ke kondisi awal (sesuai desain militer), jalankan:

```bash
# Reset penuh RBAC (hapus & buat ulang semua user test, permission, dan menu role)
php spark db:seed RbacTestSeeder

# Hanya reset permission
php spark db:seed RbacRolePermissionSeeder

# Hanya reset menu role
php spark db:seed RbacMenuRoleSeeder
```

:::warning Data akan ditimpa
Menjalankan seeder di atas akan menimpa konfigurasi RBAC yang ada. Pastikan sudah mem-backup konfigurasi kustom sebelum menjalankannya.
:::

---

## Implementasi di Controller

Gunakan method berikut di controller untuk mengontrol akses berdasarkan permission:

```php
class ContohController extends BaseController
{
    public function index()
    {
        // Wajib punya permission read (read_all atau read_own)
        $this->hasPermissionPrefix('read');

        // Tentukan scope data berdasarkan permission
        $scope = $this->userCan('read'); // 'all' atau 'own'
        $whereClause = $this->whereOwn('prajurit.id_user');

        // Load data berdasarkan scope
        // ...
    }

    public function store()
    {
        // Wajib punya permission create
        $this->hasPermissionPrefix('create');
        // ...
    }

    public function update($id)
    {
        // Cek update_all atau update_own
        $canUpdateAll = $this->hasPermissionPrefix('update', true);
        if (!$canUpdateAll) {
            // Hanya boleh update milik sendiri
            $this->mustHavePermission('update_own');
            // Tambah validasi kepemilikan data...
        }
        // ...
    }

    public function destroy($id)
    {
        // AJAX version untuk return JSON error
        $this->hasPermissionPrefixAjax('delete');
        // ...
    }
}
```
