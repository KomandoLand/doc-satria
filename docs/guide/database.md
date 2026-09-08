---
sidebar_position: 2
---

# Setup PostgreSQL

Panduan instalasi dan konfigurasi **PostgreSQL** sebagai database utama **Komando Satria Apps**.

---

## Mengapa PostgreSQL?

Komando Satria Apps menggunakan PostgreSQL karena:
- **Keandalan & Integritas Data**: ACID-compliant dengan foreign key yang ketat.
- **Performa Skala Besar**: Optimal untuk data prajurit, riwayat, dan laporan dengan volume tinggi.
- **Fitur Lanjutan**: Dukungan JSON, full-text search, dan window functions yang digunakan sistem.
- **Kompatibilitas CodeIgniter 4**: Driver `Postgre` bawaan CI4 mendukung PostgreSQL secara native.

---

## Instalasi PostgreSQL

### Windows

1. Unduh installer dari [postgresql.org/download/windows](https://www.postgresql.org/download/windows/)
2. Jalankan installer, pilih komponen:
   - ✅ PostgreSQL Server
   - ✅ pgAdmin 4
   - ✅ Command Line Tools
3. Set password untuk user `postgres`
4. Port default: **5432**
5. Tambahkan path bin PostgreSQL ke **Environment Variable PATH**:
   ```
   C:\Program Files\PostgreSQL\16\bin
   ```

### Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib

# Mulai service
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Masuk sebagai user postgres
sudo -u postgres psql
```

### macOS (via Homebrew)

```bash
brew install postgresql@16
brew services start postgresql@16
```

---

## Konfigurasi Database

### Membuat Database & User

```sql
-- Masuk ke psql
psql -U postgres

-- Buat database
CREATE DATABASE komandolite
    WITH OWNER = postgres
    ENCODING = 'UTF8'
    TEMPLATE = template0;

-- (Opsional) Buat user khusus aplikasi
CREATE USER komando_user WITH PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE komandolite TO komando_user;

-- Keluar
\q
```

### Konfigurasi di `.env`

Sesuaikan file `.env` project dengan koneksi PostgreSQL:

```env
database.default.hostname = 127.0.0.1
database.default.database = komandolite
database.default.username = postgres
database.default.password = your_password
database.default.DBDriver = Postgre
database.default.port     = 5432
database.default.charset  = utf8
```

---

## Mengaktifkan Ekstensi PHP PostgreSQL

Pastikan ekstensi PHP berikut aktif di `php.ini`:

```ini
extension=pdo_pgsql
extension=pgsql
```

Cek apakah ekstensi sudah aktif:
```bash
php -m | grep pgsql
```

Output yang diharapkan:
```
pdo_pgsql
pgsql
```

---

## Perintah psql yang Berguna

```bash
# Masuk ke psql
psql -U postgres

# List semua database
\l

# Pindah ke database komandolite
\c komandolite

# List semua tabel
\dt

# Describe struktur tabel
\d nama_tabel

# Lihat 10 data teratas
SELECT * FROM prajurit LIMIT 10;

# Keluar dari psql
\q
```

---

## Backup & Restore Database

```bash
# Backup database ke file SQL
pg_dump -U postgres -d komandolite -f backup_komandolite.sql

# Backup dalam format custom (lebih efisien)
pg_dump -U postgres -Fc komandolite > backup_komandolite.dump

# Restore dari file SQL
psql -U postgres -d komandolite < backup_komandolite.sql

# Restore dari format custom
pg_restore -U postgres -d komandolite backup_komandolite.dump
```

---

## Optimasi PostgreSQL (Development)

Untuk pengembangan lokal, tambahkan konfigurasi berikut di `postgresql.conf`:

```conf
# Lokasi file: C:\Program Files\PostgreSQL\16\data\postgresql.conf (Windows)
# atau: /etc/postgresql/16/main/postgresql.conf (Linux)

max_connections = 100
shared_buffers = 256MB
effective_cache_size = 768MB
work_mem = 4MB
```

Restart PostgreSQL setelah mengubah konfigurasi:
```bash
# Linux
sudo systemctl restart postgresql

# Windows
net stop postgresql-x64-16 && net start postgresql-x64-16
```

---

## Troubleshooting

### Error: `could not connect to server`
- Pastikan service PostgreSQL berjalan: `pg_isready`
- Cek firewall tidak memblokir port 5432
- Pastikan `hostname` di `.env` adalah `127.0.0.1` (bukan `localhost` untuk menghindari IPv6 issue di Windows)

### Error: `role "postgres" does not exist`
```bash
# Linux: inisialisasi dengan user sistem postgres
sudo -u postgres createuser --superuser postgres
sudo -u postgres psql -c "ALTER USER postgres PASSWORD 'your_password';"
```

### Error: `permission denied for table`
```sql
-- Grant permissions ke user aplikasi
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO komando_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO komando_user;
```
