---
sidebar_position: 1
---

# Satuan Militer

Modul Satuan Militer mengelola data organisasi satuan dalam hierarki komando TNI — dari tingkat Brigif hingga Regu.

---

## Hierarki Satuan

Sistem Komando Satria menggunakan hierarki satuan militer sesuai struktur TNI-AD:

```
BRIGIF (Brigade Infanteri)
  └── DENMA (Detasemen Markas)
  └── BATALYON (Batalyon Infanteri)
        └── STAFF_BATALYON (Staf Batalyon)
        └── SEKSI (Kepala Seksi)
        └── KOMPI (Kompi)
              └── PELETON (Peleton)
                    └── REGU (Regu)
  └── UNIT_STAF (Unit Staf)
```

Data tipe satuan disimpan di tabel `military_unit_types`, di-seed oleh `MilitaryUnitTypeSeeder`.

---

## Data Satuan (`military_units`)

Setiap satuan militer memiliki data:

| Field | Keterangan |
| :--- | :--- |
| **Nama Satuan** | Nama resmi satuan (contoh: Yonif 201/Jaya Yuda) |
| **Singkatan** | Singkatan satuan |
| **Tipe Satuan** | Jenis satuan (Brigif, Batalyon, Kompi, dll) |
| **Satuan Induk** | Satuan atasan (parent unit) |
| **Lokasi/Garnisun** | Wilayah penempatan satuan |
| **Kodim/Koramil** | Kode teritorial terkait |

---

## Tipe Satuan (`military_unit_types`)

| Kode | Nama Tipe | Keterangan |
|------|-----------|-----------|
| `BRIGIF` | Brigade Infanteri | Tingkat Brigade |
| `STAFF_BRIGIF` | Staff Brigif | Staf Brigade |
| `DENMA` | Detasemen Markas | Detasemen Markas Brigade |
| `BATALYON` | Batalyon | Tingkat Batalyon |
| `STAFF_BATALYON` | Staff Batalyon | Staf Batalyon |
| `SEKSI` | Seksi | Tingkat Seksi |
| `KOMPI` | Kompi | Tingkat Kompi |
| `PELETON` | Peleton | Tingkat Peleton |
| `REGU` | Regu | Tingkat Regu |
| `UNIT_STAF` | Unit Staf | Unit fungsional Staf |

---

## Pangkat Militer (`military_ranks`)

Tabel referensi pangkat militer dikelola oleh `MilitaryRankSeeder`:

| Golongan | Rentang Pangkat |
|----------|----------------|
| **Tamtama** | Prada — Kopka |
| **Bintara** | Serda — Peltu |
| **Perwira Pertama** | Letda — Kapten |
| **Perwira Menengah** | Mayor — Kolonel |
| **Perwira Tinggi** | Brigjen — Jenderal |

---

## Corps / Kecabangan (`military_corps`)

Tabel referensi kecabangan militer dikelola oleh `MilitaryCorpsSeeder`:

| Singkatan | Nama Kecabangan |
|-----------|----------------|
| **INF** | Infanteri |
| **ARM** | Kavaleri (Armor) |
| **ARH** | Artileri Medan |
| **ARU** | Artileri Pertahanan Udara |
| **CZI** | Zeni |
| **HUB** | Perhubungan |
| **POM** | Polisi Militer |
| **CKM** | Kesehatan Militer |
| **ADJ** | Ajudan Jenderal |
| **CPL** | Peralatan |
| **CBA** | Pembekalan dan Angkutan |
| **CPM** | Corps Pemberitaan Militer |

---

## Koramil (`koramil`)

Data Komando Rayon Militer dikelola oleh `KoramilSeeder` dan tabel `koramil`.

| Field | Keterangan |
|-------|-----------|
| **Kode Koramil** | Kode identifikasi Koramil |
| **Nama Koramil** | Nama Koramil |
| **Kodim** | Kode Distrik Militer induk |
| **Wilayah** | Kecamatan/wilayah yang dinaungi |

---

## Mengelola Data Satuan

### Menambah Satuan Baru
1. Buka menu **Militer → Satuan**.
2. Klik **Tambah Satuan**.
3. Isi form: nama, singkatan, tipe, satuan induk (parent), dan lokasi.
4. Klik **Simpan**.

### Setup Awal via Seeder
```bash
# Isi semua data referensi militer
php spark db:seed MilitaryUnitTypeSeeder
php spark db:seed MilitaryRankSeeder
php spark db:seed MilitaryCorpsSeeder
php spark db:seed MilitaryUnitSeeder
php spark db:seed KoramilSeeder
```
