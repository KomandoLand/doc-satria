---
sidebar_position: 3
---

# Panduan Testing RBAC

Panduan lengkap untuk menjalankan ujicoba sistem RBAC Komando Satria Apps menggunakan seeder yang telah disediakan.

---

## Persiapan: Jalankan Seeder RBAC

Untuk membuat semua role militer, akun test, dan assignment permission secara otomatis:

```bash
php spark db:seed RbacTestSeeder
```

### Output yang Diharapkan

```
========================================
 RBAC Test Seeder - Komando Apps
 Berdasarkan MilitaryUnitTypeSeeder
========================================

[1/5] Menjalankan RoleSeeder (extend dengan role militer)...
      Seeded: App\Database\Seeds\RoleSeeder

[2/5] Menjalankan RbacUserSeeder (buat user per role)...
      RbacUserSeeder: 10 user RBAC berhasil dibuat.
      Seeded: App\Database\Seeds\RbacUserSeeder

[3/5] Menjalankan RbacUserRoleSeeder (assign user ke role)...
      RbacUserRoleSeeder: 10 user-role assignment berhasil.
      Seeded: App\Database\Seeds\RbacUserRoleSeeder

[4/5] Menjalankan RbacRolePermissionSeeder (assign permission ke role)...
      RbacRolePermissionSeeder: 894 permission berhasil di-assign ke role militer.
      Seeded: App\Database\Seeds\RbacRolePermissionSeeder

[5/5] Menjalankan RbacMenuRoleSeeder (assign menu ke role)...
      RbacMenuRoleSeeder: 62 menu-role assignment berhasil.
        Menu Sistem  : 11 menu
        Menu Aplikasi: 4 menu
      Seeded: App\Database\Seeds\RbacMenuRoleSeeder

========================================
 ✅ RBAC Test Seeder SELESAI!
========================================
```

---

## Akun Test yang Tersedia

> **URL Login:** `http://localhost:8081/login`

| # | Username | Password | Role | Level Akses |
|---|----------|----------|------|-------------|
| 1 | `admin` | `admin` | Administrator | 🔴 FULL ACCESS |
| 2 | `brigif` | `brigif123` | Komandan Brigif | 🟠 Tinggi |
| 3 | `staff_brigif` | `staffbrigif123` | Staff Brigif | 🟠 Tinggi |
| 4 | `denma` | `denma123` | Detasemen Markas | 🟠 Tinggi |
| 5 | `batalyon` | `batalyon123` | Komandan Batalyon | 🟡 Menengah |
| 6 | `staff_batalyon` | `staffbatalyon123` | Staff Batalyon | 🟡 Menengah |
| 7 | `seksi` | `seksi123` | Kepala Seksi | 🟡 Menengah |
| 8 | `kompi` | `kompi123` | Komandan Kompi | 🟢 Terbatas |
| 9 | `peleton` | `peleton123` | Komandan Peleton | 🔵 Minimal |
| 10 | `regu` | `regu123` | Komandan Regu | 🔵 Minimal |
| 11 | `unit_staf` | `unitstaf123` | Unit Staf | 🟡 Menengah |

---

## Skenario Ujicoba per Role

### Test 1: `admin` — Full Access
1. Login dengan `admin` / `admin`
2. ✅ Harus bisa akses semua menu sidebar (termasuk menu sistem)
3. ✅ Harus bisa tambah, ubah, dan hapus semua data
4. ✅ Bisa akses `/builtin/user`, `/builtin/role`, `/builtin/permission`

### Test 2: `brigif` — Akses Tinggi dengan Menu Sistem
1. Login dengan `brigif` / `brigif123`
2. ✅ Harus bisa lihat menu sistem (User, Role, Module, Menu)
3. ✅ Bisa create, read all, update all, delete own
4. ❌ Tidak bisa `delete_all` (hapus data milik user lain)

### Test 3: `denma` — Akses Tinggi Tanpa Delete
1. Login dengan `denma` / `denma123`
2. ✅ Harus bisa lihat menu sistem
3. ✅ Bisa create, read all, update all
4. ❌ Tidak bisa menghapus data apapun (`delete_own` pun tidak)

### Test 4: `kompi` — Akses Terbatas (Read Only + Update Own)
1. Login dengan `kompi` / `kompi123`
2. ❌ Tidak bisa lihat menu sistem
3. ❌ Tidak bisa menambah data baru (`create`)
4. ✅ Bisa read all (lihat semua data)
5. ✅ Bisa update data milik sendiri saja

### Test 5: `peleton` / `regu` — Akses Minimal
1. Login dengan `peleton` / `peleton123`
2. ❌ Tidak bisa lihat menu sistem
3. ❌ Tidak bisa menambah data baru
4. ❌ Tidak bisa read_all (tidak bisa lihat data milik orang lain)
5. ✅ Hanya bisa lihat dan ubah data milik sendiri

---

## Verifikasi URL

| URL | Role yang Bisa Akses |
|-----|---------------------|
| `http://localhost:8081/dashboard` | Semua role |
| `http://localhost:8081/prajurit` | Semua role (dengan batasan data) |
| `http://localhost:8081/builtin/user` | admin, brigif, denma |
| `http://localhost:8081/builtin/role` | admin, brigif, denma |
| `http://localhost:8081/builtin/permission` | admin, brigif, denma |

---

## File Seeder RBAC

| File | Fungsi |
|------|--------|
| `app/Database/Seeds/RoleSeeder.php` | Definisi semua role (sistem + militer) |
| `app/Database/Seeds/RbacUserSeeder.php` | Buat 10 user test per role militer |
| `app/Database/Seeds/RbacUserRoleSeeder.php` | Assign user ke role masing-masing |
| `app/Database/Seeds/RbacRolePermissionSeeder.php` | Assign permission ke setiap role |
| `app/Database/Seeds/RbacMenuRoleSeeder.php` | Assign akses menu ke setiap role |
| `app/Database/Seeds/RbacTestSeeder.php` | **Orchestrator utama** — panggil semua seeder |

---

## Statistik Seeder

| Kategori | Jumlah |
|----------|--------|
| Total role (sistem + militer) | 12 role |
| Role militer baru | 10 role |
| User test dibuat | 10 user |
| User-Role assignment | 10 mapping |
| Permission di-assign ke role militer | 894 records |
| Menu-Role assignment | 62 records |

---

## Jalankan Seeder Individual (Step by Step)

```bash
# 1. Update role (extend dengan militer)
php spark db:seed RoleSeeder

# 2. Buat user test
php spark db:seed RbacUserSeeder

# 3. Assign user ke role
php spark db:seed RbacUserRoleSeeder

# 4. Assign permission ke role
php spark db:seed RbacRolePermissionSeeder

# 5. Assign menu ke role
php spark db:seed RbacMenuRoleSeeder
```

:::warning Urutan Seeder
Jalankan sesuai urutan di atas karena ada dependency foreign key antar tabel. Gunakan `RbacTestSeeder` untuk menjalankan semua sekaligus dengan urutan yang benar.
:::

---

## Catatan & Known Issues

### ⚠️ Parent Menu Kosong
Parent menu seperti **"Akses User & Role"** dan **"Pengaturan"** masih tampil sebagai placeholder kosong untuk role bawah (`peleton`, `regu`) karena tidak ada child menu yang visible untuk role tersebut.

**Solusi:** Filter parent menu tanpa child di `RbacMenuRoleSeeder.php` atau di query sidebar menu di `BaseController.php`.

### ✅ Idempotent
Seeder ini aman dijalankan berulang kali tanpa menyebabkan duplikasi data (menggunakan `INSERT IGNORE` / `ON CONFLICT DO NOTHING`).
