---
sidebar_position: 3
---

# Instalasi Docker

Panduan menjalankan **Komando Satria Apps** menggunakan Docker untuk lingkungan pengembangan maupun production yang terisolasi dan konsisten.

---

## Prasyarat

Pastikan Docker dan Docker Compose telah terinstal di sistem Anda:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Windows/macOS)
- [Docker Engine + Compose](https://docs.docker.com/engine/install/) (Linux)

Cek versi yang terinstal:
```bash
docker --version
docker compose version
```

---

## Struktur File Docker

Project Komando Satria telah dilengkapi file konfigurasi Docker berikut:

```
komando-apps/
├── Dockerfile              # Image aplikasi PHP
├── docker-compose.yml      # Production stack
├── docker-compose.dev.yml  # Development stack
├── Caddyfile               # Konfigurasi web server Caddy
└── docker_conf/            # Konfigurasi tambahan container
```

---

## Development Mode

Untuk pengembangan lokal menggunakan stack development:

```bash
docker-compose -f docker-compose.dev.yml up -d --build
```

Aplikasi tersedia di:
- **App**: `http://localhost:8081`
- **Database (PostgreSQL)**: `localhost:5432`

### Menjalankan Migrasi di dalam Container

```bash
# Masuk ke container PHP
docker exec -it komando_app bash

# Jalankan migrasi
php spark migrate

# Jalankan seeder
php spark db:seed DatabaseSeeder

# Ujicoba RBAC
php spark db:seed RbacTestSeeder
```

---

## Production Mode

Untuk deployment production dengan Caddy sebagai web server:

```bash
# Salin konfigurasi environment production
cp .env.production .env

# Edit .env sesuaikan dengan konfigurasi production
nano .env

# Build dan jalankan semua container
docker-compose up -d --build
```

:::warning Konfigurasi Production
Sebelum deployment production, pastikan:
- `CI_ENVIRONMENT` di `.env` diset ke `production`
- Ganti semua password default dengan yang aman
- Konfigurasi SSL/TLS di `Caddyfile`
:::

---

## Manajemen Container

```bash
# Lihat status container yang berjalan
docker compose ps

# Lihat log aplikasi
docker compose logs -f app

# Stop semua container
docker compose down

# Stop dan hapus volume (HATI-HATI: menghapus data database!)
docker compose down -v

# Restart container tertentu
docker compose restart app

# Rebuild image tanpa cache
docker compose build --no-cache
```

---

## Konfigurasi Environment Docker

Berkas `.env` utama yang digunakan container:

```env
CI_ENVIRONMENT = production

app.baseURL = 'https://yourdomain.com/'

# PostgreSQL - sesuaikan dengan nama service di docker-compose.yml
database.default.hostname = db
database.default.database = komandolite
database.default.username = postgres
database.default.password = your_secure_password
database.default.DBDriver = Postgre
database.default.port     = 5432
database.default.charset  = utf8
```

---

## Troubleshooting

### Container gagal start
```bash
# Cek error log
docker compose logs app

# Pastikan port tidak bentrok
netstat -ano | findstr :8081
```

### Database tidak bisa terhubung
- Pastikan hostname di `.env` menggunakan **nama service Docker** (misal: `db`), bukan `127.0.0.1`
- Cek container database sudah running: `docker compose ps`

### Permission error pada `writable/`
```bash
docker exec -it komando_app bash -c "chmod -R 777 writable/"
```
