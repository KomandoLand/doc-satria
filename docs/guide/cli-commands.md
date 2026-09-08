---
sidebar_position: 4
---

# Perintah CLI (Spark)

Kumpulan perintah `php spark` yang sering digunakan untuk pengembangan dan administrasi **Komando Satria Apps**.

---

## Development Server

```bash
# Jalankan development server (default port 8080)
php spark serve

# Jalankan di port tertentu
php spark serve --port 8081
```

---

## Database Migration

```bash
# Jalankan semua migrasi yang belum dijalankan
php spark migrate

# Jalankan file migrasi spesifik
php spark migrate:file "app/Database/Migrations/2026-07-06-100400_CreatePrajuritTable.php"

# Rollback migrasi terakhir
php spark migrate:rollback

# Cek status migrasi
php spark migrate:status

# Refresh semua migrasi (rollback semua lalu migrate ulang)
php spark migrate:refresh
```

---

## Database Seeder

```bash
# Jalankan seeder utama (semua data master)
php spark db:seed DatabaseSeeder

# Ujicoba RBAC militer (11 role + 10 user test)
php spark db:seed RbacTestSeeder

# Seeder individual
php spark db:seed RoleSeeder
php spark db:seed MenuSeeder
php spark db:seed ModuleSeeder
php spark db:seed MilitaryRankSeeder
php spark db:seed MilitaryCorpsSeeder
php spark db:seed MilitaryUnitTypeSeeder
php spark db:seed MilitaryUnitSeeder

# Seeder RBAC step by step
php spark db:seed RbacUserSeeder
php spark db:seed RbacUserRoleSeeder
php spark db:seed RbacRolePermissionSeeder
php spark db:seed RbacMenuRoleSeeder
```

:::info Urutan Seeder
Jalankan seeder sesuai urutan dependency. `RbacTestSeeder` sudah mengatur urutan yang benar secara otomatis.
:::

---

## Membuat File Baru (Scaffolding)

```bash
# Buat controller baru
php spark make:controller NamaController

# Buat model baru
php spark make:model NamaModel

# Buat migrasi baru
php spark make:migration CreateNamaTable

# Buat seeder baru
php spark make:seeder NamaSeeder

# Buat filter baru
php spark make:filter NamaFilter

# Buat entity baru
php spark make:entity NamaEntity
```

---

## Routing & Cache

```bash
# Tampilkan semua route yang terdaftar
php spark routes

# Bersihkan cache sistem
php spark cache:clear
```

---

## Shield (Autentikasi)

```bash
# Setup tabel Shield (jika belum via migrate)
php spark shield:setup

# Buat user admin via CLI
php spark shield:user create
```

---

## Contoh Workflow Development

Berikut urutan perintah untuk memulai dari awal:

```bash
# 1. Clone & install
git clone https://github.com/KomandoLand/apps.git komando-apps
cd komando-apps
composer install

# 2. Setup environment
cp env .env
# Edit .env sesuai konfigurasi database PostgreSQL

# 3. Buat database & jalankan migrasi
psql -U postgres -c "CREATE DATABASE komandolite;"
php spark migrate

# 4. Isi data awal
php spark db:seed DatabaseSeeder

# 5. (Opsional) Ujicoba RBAC
php spark db:seed RbacTestSeeder

# 6. Jalankan server
php spark serve
```
