---
sidebar_position: 7
---

# Nilai Kemampuan

Modul Nilai Kemampuan mencatat penilaian kemampuan fisik dan teknis setiap prajurit dalam beberapa kategori uji kemampuan militer.

---

## 5 Kategori Penilaian

### 1. Nilai Menembak

Penilaian kemampuan menembak prajurit berdasarkan standar militer.

| Field | Keterangan |
|-------|-----------|
| **Jenis Senjata** | Jenis senjata yang digunakan saat penilaian |
| **Nilai** | Skor penilaian menembak |
| **Predikat** | Sangat Baik / Baik / Cukup / Kurang |
| **Tanggal Uji** | Tanggal pelaksanaan uji menembak |
| **Keterangan** | Catatan tambahan |

**Tabel database:** `nilai_menembak`

---

### 2. Nilai Progbinjasmil (Pembinaan Jasmani Militer)

Penilaian program pembinaan jasmani militer — tes fisik standar TNI.

| Field | Keterangan |
|-------|-----------|
| **Jenis Kegiatan** | Push-up, Sit-up, Pull-up, Lari 12 menit, dll |
| **Hasil** | Jumlah repetisi atau waktu tempuh |
| **Nilai** | Skor konversi standar |
| **Tanggal Uji** | Tanggal pelaksanaan |

**Tabel database:** `nilai_progbinjasmil`

---

### 3. Nilai Garjas (Gerakan Jasmani)

Penilaian kemampuan gerakan jasmani standar militer.

| Field | Keterangan |
|-------|-----------|
| **Golongan** | Golongan umur untuk standar penilaian |
| **Nilai Push-up** | Skor push-up |
| **Nilai Sit-up** | Skor sit-up |
| **Nilai Pull-up** | Skor pull-up |
| **Nilai Lari** | Skor lari 12 menit |
| **Total Nilai** | Akumulasi nilai garjas |
| **Predikat** | Sangat Baik / Baik / Cukup / Kurang |
| **Tanggal Uji** | Tanggal pelaksanaan |

**Tabel database:** `nilai_garjas`

---

### 4. Nilai Renang

Penilaian kemampuan renang militer.

| Field | Keterangan |
|-------|-----------|
| **Jenis Gaya** | Gaya bebas, dada, punggung, dll |
| **Jarak** | Jarak renang dalam meter |
| **Waktu** | Waktu tempuh |
| **Nilai** | Skor penilaian |
| **Tanggal Uji** | Tanggal pelaksanaan |

**Tabel database:** `nilai_renang`

---

### 5. Nilai Beladiri

Penilaian kemampuan beladiri militer (Yong Moodo, dll).

| Field | Keterangan |
|-------|-----------|
| **Jenis Beladiri** | Jenis beladiri yang dinilai |
| **Tingkat** | Tingkat keahlian (Pemula, Madya, Utama) |
| **Nilai** | Skor penilaian |
| **Tanggal Uji** | Tanggal pelaksanaan |

**Tabel database:** `nilai_beladiri`

---

## Mengakses Modul Nilai Kemampuan

Data nilai kemampuan dapat diakses dan dikelola dari dua tempat:

1. **Tab di Detail Prajurit** — untuk melihat dan menambah nilai individual.
2. **Menu Master Data Nilai** — untuk manajemen massal nilai seluruh prajurit.

---

## Program Renang Detail

Selain nilai individual, sistem juga mencatat detail program renang satuan melalui tabel `program_renang_detail` yang terhubung dengan modul **Program** (lihat [Modul Program](/docs/militer/program)).
