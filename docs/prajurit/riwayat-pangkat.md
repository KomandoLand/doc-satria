---
sidebar_position: 2
---

# Riwayat Pangkat

Modul Riwayat Pangkat mencatat seluruh riwayat kenaikan pangkat seorang prajurit sejak masuk dinas hingga pangkat saat ini.

---

## Data yang Dicatat

| Field | Keterangan |
| :--- | :--- |
| **Pangkat** | Pangkat yang diterima (dari tabel `military_ranks`) |
| **TMT Pangkat** | Terhitung Mulai Tanggal kenaikan pangkat |
| **Nomor SK** | Nomor Surat Keputusan kenaikan pangkat |
| **Tanggal SK** | Tanggal terbit Surat Keputusan |
| **Keterangan** | Catatan tambahan (opsional) |

---

## Cara Menambah Riwayat Pangkat

1. Buka halaman **Detail Prajurit** (`/prajurit/detail/{NRP}`).
2. Klik tab **Riwayat Pangkat**.
3. Klik tombol **Tambah Riwayat Pangkat**.
4. Form modal akan muncul, isi:
   - **Pangkat** — pilih dari dropdown daftar pangkat militer.
   - **TMT Pangkat** — tanggal efektif kenaikan pangkat.
   - **Nomor SK** — nomor surat keputusan.
   - **Tanggal SK** — tanggal penerbitan SK.
   - **Keterangan** — catatan tambahan (opsional).
5. Klik **Simpan**.

---

## Daftar Pangkat Militer

Pangkat tersedia dari tabel `military_ranks` yang di-seed oleh `MilitaryRankSeeder`. Urutan pangkat dari terendah ke tertinggi:

**Tamtama:**
Prajurit Dua → Prajurit Satu → Prajurit Kepala → Kopral Dua → Kopral Satu → Kopral Kepala

**Bintara:**
Sersan Dua → Sersan Satu → Sersan Kepala → Sersan Mayor → Pembantu Letnan Dua → Pembantu Letnan Satu

**Perwira Pertama:**
Letnan Dua → Letnan Satu → Kapten

**Perwira Menengah:**
Mayor → Letnan Kolonel → Kolonel

**Perwira Tinggi:**
Brigadir Jenderal → Mayor Jenderal → Letnan Jenderal → Jenderal

---

## Tabel Database

Riwayat pangkat disimpan di tabel `riwayat_pangkat`:

```sql
CREATE TABLE riwayat_pangkat (
    id          SERIAL PRIMARY KEY,
    prajurit_id INTEGER NOT NULL REFERENCES prajurit(id),
    pangkat_id  INTEGER NOT NULL REFERENCES military_ranks(id),
    tmt_pangkat DATE NOT NULL,
    nomor_sk    VARCHAR(100),
    tanggal_sk  DATE,
    keterangan  TEXT,
    created_at  TIMESTAMP DEFAULT NOW(),
    updated_at  TIMESTAMP DEFAULT NOW()
);
```

---

## Endpoint AJAX

```
GET  /prajurit/ajaxGetFormData/pangkat     → Load form tambah riwayat pangkat
POST /prajurit/ajaxStoreRiwayat/pangkat    → Simpan riwayat pangkat baru
```
