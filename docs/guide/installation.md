---
sidebar_position: 1
---

# Instalasi & Setup

Panduan langkah demi langkah untuk menginstal, mengonfigurasi, dan menjalankan **Komando Satria Apps** di lingkungan pengembangan lokal maupun server.

---

## Persyaratan Sistem

Pastikan perangkat Anda memenuhi spesifikasi kebutuhan sistem berikut:

- **PHP**: Versi **8.1** atau lebih baru.
  - Ekstensi PHP wajib aktif: `intl`, `mbstring`, `curl`, `json`, `pgsql`, `pdo_pgsql`.
- **Composer**: Composer versi 2.x ([getcomposer.org](https://getcomposer.org/)).
- **Database Server**: **PostgreSQL 14** atau lebih baru.
- **Node.js**: Versi 18+ (opsional, untuk kebutuhan frontend build tool).

:::warning Versi PHP
End of life PHP 8.1 adalah **31 Desember 2025**. Sangat disarankan menggunakan PHP **8.2** atau **8.3** untuk deployment baru.
:::

---

## Metode 1: Instalasi Manual (Composer)

### 1. Clone Repository

Unduh kode sumber aplikasi dari repository:

```bash
git clone https://github.com/KomandoLand/apps.git komando-apps
cd komando-apps
```

### 2. Install Dependensi Composer

Jalankan composer untuk mengunduh seluruh library PHP (CodeIgniter 4, Shield, Grocery CRUD, Guzzle, TCPDF, PhpSpreadsheet, dll):

```bash
composer install
```

### 3. Konfigurasi Environment (`.env`)

Salin berkas template konfigurasi `env` menjadi `.env`:

```bash
cp env .env
```

Buka berkas `.env` lalu sesuaikan konfigurasi URL dan koneksi database **PostgreSQL**:

```env
CI_ENVIRONMENT = development

app.baseURL = 'http://localhost:8080/'

database.default.hostname = 127.0.0.1
database.default.database = komandolite
database.default.username = postgres
database.default.password = your_password
database.default.DBDriver = Postgre
database.default.port     = 5432
database.default.charset  = utf8
```

:::info Driver PostgreSQL
Komando Satria menggunakan **PostgreSQL** sebagai database utama (bukan MySQL). Pastikan ekstensi `pgsql` dan `pdo_pgsql` aktif di `php.ini`.
:::

### 4. Buat Database PostgreSQL

Buat basis data baru melalui psql CLI atau pgAdmin:

```sql
CREATE DATABASE komandolite
    WITH OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.UTF-8'
    LC_CTYPE = 'en_US.UTF-8'
    TEMPLATE = template0;
```

Atau via psql:
```bash
psql -U postgres -c "CREATE DATABASE komandolite;"
```

### 5. Jalankan Database Migration

Jalankan perintah Spark untuk membuat seluruh struktur tabel sistem:

```bash
php spark migrate
```

:::info Tabel yang Dibuat
Sistem akan membuat 66+ tabel termasuk:
- Tabel sistem: `role`, `module`, `module_permission`, `role_module_permission`, `user_role`, `menu`, `menu_role`, `setting`
- Tabel militer: `military_ranks`, `military_corps`, `military_units`, `military_unit_types`
- Tabel prajurit: `prajurit`, `riwayat_pangkat`, `riwayat_jabatan`, `riwayat_keluarga`, `riwayat_pendidikan_umum`, `riwayat_pendidikan_militer`, `riwayat_operasi`, `riwayat_tugas_luar_negeri`, `riwayat_tahorneg`, `riwayat_bahasa`, `riwayat_kapor_lap`
- Tabel alutsista: `weapons`, `weapon_movements`
- Tabel program: `programs`, `program_phases`, `program_submissions`
- Tabel kegiatan: `territorial_activities`
- Tabel Shield (autentikasi): `users`, `auth_identities`, `auth_groups_users`
:::

### 6. Jalankan Database Seeder

Isi data master awal sistem (role, menu, modul, setting, user admin, dan data referensi militer):

```bash
php spark db:seed DatabaseSeeder
```

Untuk ujicoba RBAC dengan 11 role militer dan akun test:

```bash
php spark db:seed RbacTestSeeder
```

### 7. Jalankan Server Aplikasi

Gunakan built-in development server CodeIgniter 4:

```bash
php spark serve
```

Aplikasi kini dapat diakses di browser pada alamat **`http://localhost:8080`**.

---

## Metode 2: Menggunakan Docker

Untuk lingkungan terisolasi dan deployment yang konsisten, gunakan Docker:

```bash
docker-compose up -d --build
```

Setelah container berjalan:
- **Aplikasi**: `http://localhost:8081`
- **Database** (PostgreSQL): port `5432`

Lihat panduan lengkap di [Instalasi Docker](/docs/guide/docker).

---

## Akun Default Administrator

Setelah proses seeder berhasil, gunakan akun default berikut untuk login pertama kali:

- **Username**: `admin`
- **Password**: `admin`

:::caution Keamanan Sistem
Segera perbarui password akun `admin` setelah berhasil login pertama kali melalui menu **Manajemen User** → edit profil!
:::

---

## Akses Endpoint Utama

Setelah server berjalan, endpoint-endpoint utama yang tersedia:

| URL | Keterangan |
| :--- | :--- |
| `http://localhost:8080/login` | Halaman login utama |
| `http://localhost:8080/dashboard` | Dashboard utama (setelah login) |
| `http://localhost:8080/prajurit` | Modul data prajurit |
| `http://localhost:8080/builtin/user` | Manajemen user (admin only) |
| `http://localhost:8080/builtin/role` | Manajemen role (admin only) |
