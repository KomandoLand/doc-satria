---
sidebar_position: 3
---

# Riwayat Jabatan

Modul Riwayat Jabatan mencatat seluruh jabatan yang pernah diemban seorang prajurit selama masa dinas.

---

## Data yang Dicatat

| Field | Keterangan |
| :--- | :--- |
| **Nama Jabatan** | Nama jabatan yang diemban |
| **Satuan** | Satuan/unit tempat menjabat |
| **TMT Jabatan** | Terhitung Mulai Tanggal menjabat |
| **Tanggal Selesai** | Tanggal berakhir jabatan (kosong jika masih aktif) |
| **Nomor SK** | Nomor Surat Keputusan pengangkatan jabatan |
| **Tanggal SK** | Tanggal penerbitan SK jabatan |
| **Keterangan** | Catatan tambahan (opsional) |

---

## Cara Menambah Riwayat Jabatan

1. Buka halaman **Detail Prajurit** (`/prajurit/detail/{NRP}`).
2. Klik tab **Riwayat Jabatan**.
3. Klik tombol **Tambah Riwayat Jabatan**.
4. Isi form modal yang muncul.
5. Untuk jabatan yang **masih aktif**, kosongkan field **Tanggal Selesai**.
6. Klik **Simpan**.

---

## Endpoint AJAX

```
GET  /prajurit/ajaxGetFormData/jabatan     → Load form tambah riwayat jabatan
POST /prajurit/ajaxStoreRiwayat/jabatan    → Simpan riwayat jabatan baru
```

---

## Tabel Database

```sql
CREATE TABLE riwayat_jabatan (
    id           SERIAL PRIMARY KEY,
    prajurit_id  INTEGER NOT NULL REFERENCES prajurit(id),
    nama_jabatan VARCHAR(200) NOT NULL,
    satuan       VARCHAR(200),
    tmt_jabatan  DATE NOT NULL,
    tgl_selesai  DATE,
    nomor_sk     VARCHAR(100),
    tanggal_sk   DATE,
    keterangan   TEXT,
    created_at   TIMESTAMP DEFAULT NOW(),
    updated_at   TIMESTAMP DEFAULT NOW()
);
```
