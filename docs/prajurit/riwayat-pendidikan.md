---
sidebar_position: 5
---

# Riwayat Pendidikan

Modul Riwayat Pendidikan mencatat seluruh latar belakang pendidikan prajurit, baik pendidikan umum maupun pendidikan militer kejuruan.

---

## Dua Jenis Pendidikan

### 1. Pendidikan Umum (`pendidikan-umum`)
Pendidikan formal non-militer yang pernah ditempuh:
- SD, SMP, SMA/SMK
- D3, S1, S2, S3

### 2. Pendidikan Militer (`pendidikan-militer`)
Pendidikan kejuruan dan kursus militer:
- Secaba (Sekolah Calon Bintara)
- Secapa (Sekolah Calon Perwira)
- Dikjur (Pendidikan Kejuruan)
- Kursus-kursus militer lainnya

Jenis pendidikan tersedia dari tabel `m_jenis_pendidikan`, di-seed oleh `JenisPendidikanSeeder`.

---

## Data yang Dicatat

| Field | Keterangan |
| :--- | :--- |
| **Jenis Pendidikan** | Pilih dari dropdown sesuai kategori (umum/militer) |
| **Nama Institusi** | Nama sekolah/lembaga pendidikan |
| **Jurusan/Spesialisasi** | Program studi atau spesialisasi (opsional) |
| **Tahun Masuk** | Tahun mulai pendidikan |
| **Tahun Lulus** | Tahun selesai pendidikan |
| **Lokasi** | Kota/kabupaten institusi |
| **Keterangan** | Catatan tambahan (opsional) |

---

## Cara Menambah Riwayat Pendidikan

### Pendidikan Umum
1. Buka halaman **Detail Prajurit**.
2. Klik tab **Riwayat Pendidikan**.
3. Klik **Tambah Pendidikan Umum**.
4. Pilih jenis pendidikan dari dropdown (kategori: **umum**).
5. Isi data institusi dan tahun.
6. Klik **Simpan**.

### Pendidikan Militer
1. Klik **Tambah Pendidikan Militer**.
2. Pilih jenis pendidikan dari dropdown (kategori: **militer**).
3. Isi data institusi dan tahun.
4. Klik **Simpan**.

---

## Endpoint AJAX

```
GET  /prajurit/ajaxGetFormData/pendidikan-umum      → Load form pendidikan umum
POST /prajurit/ajaxStoreRiwayat/pendidikan-umum     → Simpan pendidikan umum

GET  /prajurit/ajaxGetFormData/pendidikan-militer   → Load form pendidikan militer
POST /prajurit/ajaxStoreRiwayat/pendidikan-militer  → Simpan pendidikan militer
```
