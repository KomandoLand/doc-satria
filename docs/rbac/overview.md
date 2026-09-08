---
sidebar_position: 1
---

# Overview RBAC Militer

Sistem **RBAC (Role-Based Access Control)** pada Komando Satria Apps dirancang mengikuti **hierarki komando militer** secara langsung. Setiap pengguna mendapatkan akses sesuai tingkatan jabatannya dalam struktur organisasi satuan.

---

## Filosofi Desain

Sistem RBAC Komando Satria tidak menggunakan RBAC generik, melainkan mereplikasi struktur komando nyata:

```
LEVEL AKSES TERTINGGI
        │
        ▼
   🔴  ADMIN          → Full Access (semua permission + semua menu)
        │
        ▼
   🟠  BRIGIF         → create, read_all, update_all, delete_own + menu sistem
   🟠  DENMA          → create, read_all, update_all (tanpa delete) + menu sistem
   🟠  STAFF_BRIGIF   → create, read_all, update_own, delete_own
        │
        ▼
   🟡  BATALYON       → create, read_all, update_all, delete_own
   🟡  STAFF_BATALYON → create, read_all, update_own, delete_own
   🟡  SEKSI          → create, read_all, update_own
   🟡  UNIT_STAF      → create, read_all, update_own
        │
        ▼
   🟢  KOMPI          → read_all, read_own, update_own
        │
        ▼
   🔵  PELETON        → read_own, update_own ONLY
   🔵  REGU           → read_own, update_own ONLY
        │
        ▼
LEVEL AKSES TERENDAH
```

---

## Struktur Database RBAC

```
user
 └── user_role ──────────────── role
                                  └── role_module_permission
                                        └── module_permission
                                               └── module
menu
 └── menu_role ──────────────── role
```

### Tabel yang Terlibat

| Tabel | Fungsi |
|-------|--------|
| `role` | Daftar role sistem & militer |
| `module` | Modul/halaman yang bisa diakses |
| `module_permission` | Daftar permission per modul |
| `role_module_permission` | Mapping role → permission modul |
| `user_role` | Mapping user → role |
| `menu` | Daftar item menu sidebar |
| `menu_role` | Mapping menu → role (visibilitas sidebar) |

---

## 7 Jenis Permission

| Kode Permission | Deskripsi |
|----------------|-----------|
| `create` | Menambah data baru |
| `read_all` | Membaca/melihat semua data (milik semua user) |
| `read_own` | Membaca/melihat hanya data milik sendiri |
| `update_all` | Mengubah semua data (milik semua user) |
| `update_own` | Mengubah hanya data milik sendiri |
| `delete_all` | Menghapus semua data — **hanya admin** |
| `delete_own` | Menghapus hanya data milik sendiri |

---

## Pengecekan Permission di Controller

Sistem menggunakan method helper di `BaseController.php` untuk memeriksa hak akses:

```php
// Cek permission dan exit jika tidak punya (untuk halaman)
$this->hasPermissionPrefix('create');
$this->hasPermissionPrefix('read');
$this->hasPermissionPrefix('update');
$this->hasPermissionPrefix('delete');

// Cek permission tanpa exit (untuk logika kondisional)
$canCreate = $this->hasPermissionPrefix('create', true);
$canDelete = $this->hasPermissionPrefix('delete', true);

// Cek permission spesifik (bukan prefix)
$this->mustHavePermission('read_all');

// Cek scope data (all/own) untuk filtering query
$scope = $this->userCan('read');   // return 'all', 'own', atau ''
$where = $this->whereOwn('id_user'); // return SQL where clause

// Versi AJAX (return JSON error bukan redirect)
$this->hasPermissionPrefixAjax('create');
```

---

## Visibilitas Menu Sidebar

Role dengan akses tinggi mendapatkan menu sistem (manajemen user, role, modul, menu), sementara role lebih rendah hanya mendapat menu aplikasi:

| Kategori Menu | Role yang Punya Akses |
|--------------|----------------------|
| **Menu Sistem** (User, Role, Module, Menu, Permission) | `admin`, `brigif`, `denma` |
| **Menu Aplikasi** (Prajurit, Senjata, Program, Kegiatan) | Semua role |

---

## Cara Menjalankan Ujicoba RBAC

```bash
# Jalankan semua seeder RBAC sekaligus (paling mudah)
php spark db:seed RbacTestSeeder
```

Lihat panduan lengkap ujicoba di [Panduan Testing RBAC](/docs/rbac/testing).
