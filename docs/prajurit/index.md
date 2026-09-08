---
sidebar_position: 1
---

# Modul Prajurit

Modul Prajurit adalah inti dari sistem Komando Satria Apps. Modul ini mengelola seluruh data biodata dan riwayat lengkap setiap prajurit dalam satuan.

---

## Daftar Prajurit (`/prajurit`)

Halaman utama menampilkan tabel daftar prajurit dengan informasi singkat:

| Kolom | Keterangan |
| :--- | :--- |
| **NRP** | Nomor Registrasi Prajurit (identifikasi unik) |
| **Nama** | Nama lengkap prajurit |
| **Pangkat** | Pangkat militer saat ini |
| **Jabatan** | Jabatan yang sedang diemban |
| **Satuan** | Satuan/unit penugasan |
| **Corps** | Korps/kecabangan militer |

### Fitur Pencarian & Filter
- Pencarian real-time berdasarkan NRP atau nama prajurit.
- Filter berdasarkan satuan, pangkat, dan corps.
- Sorting kolom secara ascending/descending.

---

## Detail Prajurit (`/prajurit/detail/{NRP}`)

Halaman detail menampilkan profil lengkap seorang prajurit dalam format **tab-based layout**:

### Tab: Biodata Utama
Informasi dasar prajurit:
- NRP, nama, tempat & tanggal lahir
- Agama, status pernikahan
- Pangkat & TMT (Terhitung Mulai Tanggal)
- Jabatan & satuan saat ini
- Corps (kecabangan)
- Foto profil

### Tab: Riwayat Pangkat
Riwayat seluruh kenaikan pangkat sejak masuk dinas. Lihat [Riwayat Pangkat](/docs/prajurit/riwayat-pangkat).

### Tab: Riwayat Jabatan
Daftar jabatan yang pernah diemban. Lihat [Riwayat Jabatan](/docs/prajurit/riwayat-jabatan).

### Tab: Riwayat Keluarga
Data anggota keluarga (suami/istri, anak). Lihat [Riwayat Keluarga](/docs/prajurit/riwayat-keluarga).

### Tab: Riwayat Pendidikan
Pendidikan umum dan militer yang pernah ditempuh. Lihat [Riwayat Pendidikan](/docs/prajurit/riwayat-pendidikan).

### Tab: Riwayat Operasi & Tugas
Operasi dan penugasan luar negeri (tahorneg). Lihat [Riwayat Operasi & Tugas](/docs/prajurit/riwayat-operasi).

### Tab: Nilai Kemampuan
Nilai menembak, jasmil, garjas, renang, dan beladiri. Lihat [Nilai Kemampuan](/docs/prajurit/nilai-kemampuan).

### Tab: Kapor Lapangan
Data perlengkapan lapangan yang diterima prajurit.

---

## Menambah Data Prajurit Baru

:::info Hak Akses
Hanya role dengan permission `create` yang dapat menambah prajurit baru: `admin`, `brigif`, `staff_brigif`, `denma`, `batalyon`, `staff_batalyon`, `seksi`, `unit_staf`.
:::

1. Buka halaman **Prajurit** (`/prajurit`).
2. Klik tombol **Tambah Prajurit**.
3. Isi form biodata prajurit:
   - **NRP** (wajib, unik)
   - **Nama Lengkap** (wajib)
   - **Pangkat** — pilih dari daftar pangkat militer
   - **Satuan** — pilih dari daftar satuan yang tersedia
   - **Corps** — pilih kecabangan militer
   - Data pribadi lainnya
4. Upload foto profil (opsional, format JPG/PNG, maks 2MB).
5. Klik **Simpan**.

---

## Mengedit Data Prajurit

:::info Hak Akses Edit
- `update_all` → dapat mengedit data semua prajurit.
- `update_own` → hanya dapat mengedit data prajurit yang terhubung dengan akun sendiri.
:::

1. Buka halaman **Detail Prajurit**.
2. Klik tombol **Edit** di pojok kanan atas.
3. Ubah data yang diperlukan.
4. Klik **Simpan Perubahan**.

---

## Menambah Data Riwayat (via AJAX)

Penambahan data riwayat dilakukan langsung dari halaman **Detail Prajurit** tanpa berpindah halaman:

1. Buka tab riwayat yang ingin ditambahkan (contoh: **Tab Riwayat Pangkat**).
2. Klik tombol **Tambah Riwayat**.
3. Form akan muncul dalam modal dialog.
4. Isi data riwayat dan klik **Simpan**.

Sistem menggunakan endpoint AJAX:
- `GET /prajurit/ajaxGetFormData/{jenis}` — memuat form
- `POST /prajurit/ajaxStoreRiwayat/{jenis}` — menyimpan data

Nilai `{jenis}` yang tersedia: `pangkat`, `jabatan`, `keluarga`, `operasi`, `pendidikan-umum`, `pendidikan-militer`, `tahorneg`, `tugas`, `bahasa`, `kaporlap`.

---

## Data Referensi Militer

Modul prajurit menggunakan beberapa tabel referensi yang perlu diisi terlebih dahulu:

| Tabel | Seeder | Keterangan |
|-------|--------|-----------|
| `military_ranks` | `MilitaryRankSeeder` | Daftar pangkat militer |
| `military_corps` | `MilitaryCorpsSeeder` | Daftar kecabangan/corps |
| `military_units` | `MilitaryUnitSeeder` | Daftar satuan militer |
| `military_unit_types` | `MilitaryUnitTypeSeeder` | Tipe satuan (Brigif, Batalyon, dll) |

```bash
# Jalankan seeder referensi militer
php spark db:seed MilitaryRankSeeder
php spark db:seed MilitaryCorpsSeeder
php spark db:seed MilitaryUnitTypeSeeder
php spark db:seed MilitaryUnitSeeder
```
