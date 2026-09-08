---
sidebar_position: 2
---

# Senjata & Mutasi Senjata

Modul Senjata mengelola inventaris alutsista (alat utama sistem persenjataan) satuan beserta pencatatan setiap mutasi/perpindahan senjata antar satuan.

---

## Data Senjata (`weapons`)

Setiap senjata/alutsista yang terdaftar dalam sistem memiliki data:

| Field | Keterangan |
| :--- | :--- |
| **Nomor Seri** | Nomor seri unik senjata |
| **Nama Senjata** | Nama/tipe senjata (contoh: SS2-V1, Pistol FN, dll) |
| **Jenis Senjata** | Kategori (Senjata Ringan, Senjata Berat, Kendaraan, dll) |
| **Kondisi** | Status kondisi saat ini (Baik, Rusak Ringan, Rusak Berat) |
| **Satuan Pemegang** | Satuan yang saat ini memegang senjata |
| **Tanggal Perolehan** | Tanggal senjata diterima satuan |
| **Keterangan** | Catatan tambahan |

---

## Status Kondisi Senjata

| Status | Keterangan |
|--------|-----------|
| **Baik** | Senjata dalam kondisi prima, siap pakai |
| **Rusak Ringan** | Kerusakan minor, masih bisa dioperasikan dengan terbatas |
| **Rusak Berat** | Kerusakan mayor, perlu perbaikan sebelum digunakan |
| **Perlu Overhaul** | Butuh pemeliharaan menyeluruh |

---

## Mutasi Senjata (`weapon_movements`)

Setiap perpindahan senjata dari satu satuan ke satuan lain harus dicatat sebagai mutasi.

### Data Mutasi

| Field | Keterangan |
| :--- | :--- |
| **Senjata** | Referensi ke data senjata |
| **Satuan Asal** | Satuan yang menyerahkan senjata |
| **Satuan Tujuan** | Satuan yang menerima senjata |
| **Tanggal Mutasi** | Tanggal efektif perpindahan |
| **Jenis Mutasi** | Pemindahan, Pinjam Pakai, Servis, dll |
| **Nomor Surat** | Nomor surat perintah mutasi |
| **Keterangan** | Alasan atau catatan mutasi |

---

## Cara Mengelola Senjata

### Mendaftarkan Senjata Baru
1. Buka menu **Militer → Senjata**.
2. Klik **Tambah Senjata**.
3. Isi nomor seri, nama, jenis, kondisi, dan satuan pemegang.
4. Klik **Simpan**.

### Mencatat Mutasi Senjata
1. Dari daftar senjata, klik senjata yang akan dimutasi.
2. Klik **Catat Mutasi**.
3. Isi form mutasi: satuan tujuan, tanggal, jenis mutasi, dan nomor surat.
4. Klik **Simpan Mutasi**.

### Melihat Riwayat Mutasi
1. Klik senjata dari daftar.
2. Scroll ke bagian **Riwayat Mutasi** untuk melihat histori lengkap perpindahan.

---

## Integrasi dengan Dashboard

Statistik senjata tampil di dashboard:
- **Kartu Total Senjata**: jumlah keseluruhan senjata terdaftar.
- **Grafik Status Senjata** (Doughnut Chart): distribusi kondisi senjata.
- **Tabel Mutasi Terbaru**: 10 mutasi senjata terkini (DataTables server-side).

---

## Tabel Database

```sql
-- Inventaris senjata
CREATE TABLE weapons (
    id              SERIAL PRIMARY KEY,
    nomor_seri      VARCHAR(100) UNIQUE NOT NULL,
    nama_senjata    VARCHAR(200) NOT NULL,
    jenis_senjata   VARCHAR(100),
    kondisi         VARCHAR(50) DEFAULT 'baik',
    satuan_id       INTEGER REFERENCES military_units(id),
    tgl_perolehan   DATE,
    keterangan      TEXT,
    created_at      TIMESTAMP DEFAULT NOW(),
    updated_at      TIMESTAMP DEFAULT NOW()
);

-- Riwayat mutasi senjata
CREATE TABLE weapon_movements (
    id              SERIAL PRIMARY KEY,
    weapon_id       INTEGER NOT NULL REFERENCES weapons(id),
    satuan_asal_id  INTEGER REFERENCES military_units(id),
    satuan_tujuan_id INTEGER REFERENCES military_units(id),
    tanggal_mutasi  DATE NOT NULL,
    jenis_mutasi    VARCHAR(100),
    nomor_surat     VARCHAR(100),
    keterangan      TEXT,
    created_at      TIMESTAMP DEFAULT NOW()
);
```
