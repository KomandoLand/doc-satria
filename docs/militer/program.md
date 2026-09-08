---
sidebar_position: 3
---

# Program Satuan

Modul Program mengelola perencanaan dan pelaksanaan program latihan, kegiatan, atau proyek satuan militer dengan sistem fase dan submission laporan.

---

## Konsep Program

Sebuah **Program** terdiri dari:
- **Header Program**: Informasi utama (nama, kategori, lokasi, tahun).
- **Fase Program**: Tahapan-tahapan pelaksanaan program.
- **Submission**: Laporan pelaksanaan yang diajukan per fase.

```
Program
  └── Fase 1: Persiapan
        └── Submission: Laporan Persiapan
  └── Fase 2: Pelaksanaan
        └── Submission: Laporan Pelaksanaan
  └── Fase 3: Evaluasi
        └── Submission: Laporan Evaluasi
```

---

## Data Program (`programs`)

| Field | Keterangan |
| :--- | :--- |
| **Nama Program** | Nama lengkap program |
| **Kategori** | Latihan, Operasi, Pembinaan, Administrasi, dll |
| **Lokasi** | Tempat pelaksanaan program |
| **Tahun** | Tahun pelaksanaan |
| **Tanggal Mulai** | Tanggal efektif program dimulai |
| **Tanggal Selesai** | Tanggal program berakhir |
| **Status** | Aktif / Selesai / Dibatalkan |
| **Penanggung Jawab** | PIC program (user yang bertanggung jawab) |
| **Deskripsi** | Penjelasan detail program |

---

## Fase Program (`program_phases`)

| Field | Keterangan |
| :--- | :--- |
| **Program** | Referensi ke program induk |
| **Nama Fase** | Nama tahapan (contoh: Persiapan, Pelaksanaan, Pelaporan) |
| **Urutan** | Nomor urut fase |
| **Tanggal Mulai Fase** | Kapan fase ini dimulai |
| **Tanggal Selesai Fase** | Target selesai fase |
| **Status** | Belum Mulai / Berjalan / Selesai |

---

## Submission Program (`program_submissions`)

| Field | Keterangan |
| :--- | :--- |
| **Fase** | Fase yang dilaporkan |
| **Judul Submission** | Judul laporan |
| **Tanggal Laporan** | Tanggal pengajuan submission |
| **Deskripsi** | Isi laporan pelaksanaan |
| **File Lampiran** | Dokumen pendukung (PDF, gambar) |
| **Status** | Draft / Diajukan / Disetujui |

---

## Cara Mengelola Program

### Membuat Program Baru
1. Buka menu **Program**.
2. Klik **Tambah Program**.
3. Isi data header program (nama, kategori, lokasi, tahun, tanggal).
4. Klik **Simpan**.

### Menambah Fase Program
1. Buka detail program.
2. Di bagian **Daftar Fase**, klik **Tambah Fase**.
3. Isi nama fase, urutan, dan tanggal target.
4. Klik **Simpan Fase**.

### Mengajukan Submission
1. Pilih fase yang ingin dilaporkan.
2. Klik **Tambah Submission**.
3. Isi judul, deskripsi, dan upload lampiran jika ada.
4. Klik **Ajukan**.

---

## Program Renang Detail (`program_renang_detail`)

Khusus program latihan renang, sistem menyediakan tabel detail untuk mencatat hasil renang individual prajurit yang terhubung dengan program:

| Field | Keterangan |
|-------|-----------|
| **Program** | Program latihan renang |
| **Prajurit** | Prajurit yang dinilai |
| **Gaya** | Gaya renang |
| **Jarak** | Jarak yang ditempuh (meter) |
| **Waktu** | Waktu tempuh |
| **Nilai** | Skor penilaian |

---

## Integrasi dengan Dashboard

- **Kartu Program Aktif**: Jumlah program yang sedang berjalan.
- **Grafik Program per Kategori**: Visualisasi distribusi program aktif vs selesai.
- **Tabel Submission Terbaru**: 10 submission program terkini.
