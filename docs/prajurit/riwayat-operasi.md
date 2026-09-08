---
sidebar_position: 6
---

# Riwayat Operasi & Tugas

Modul ini mencatat dua jenis penugasan penting: **Riwayat Operasi** (operasi militer dalam negeri) dan **Tugas Luar Negeri / Tahorneg** (penugasan internasional dan tanda kehormatan negara asing).

---

## Riwayat Operasi (`operasi`)

Mencatat partisipasi prajurit dalam operasi militer.

### Data yang Dicatat

| Field | Keterangan |
| :--- | :--- |
| **Nama Operasi** | Nama operasi militer yang diikuti |
| **Lokasi** | Wilayah pelaksanaan operasi |
| **Tanggal Mulai** | Tanggal awal penugasan operasi |
| **Tanggal Selesai** | Tanggal akhir penugasan |
| **Jabatan dalam Operasi** | Peran/jabatan selama operasi |
| **Keterangan** | Catatan tambahan, termasuk penghargaan yang diterima |

### Cara Menambah Riwayat Operasi
1. Buka tab **Riwayat Operasi** di halaman detail prajurit.
2. Klik **Tambah Riwayat Operasi**.
3. Isi form dan klik **Simpan**.

---

## Tugas Luar Negeri / Tahorneg (`tahorneg` & `tugas`)

### Tahorneg — Tanda Kehormatan Negara Asing (`tahorneg`)

Mencatat tanda kehormatan (dekorasi/medal) yang diterima dari negara asing.

| Field | Keterangan |
| :--- | :--- |
| **Nama Tahorneg** | Nama tanda kehormatan asing (dari tabel `m_tahorneg`) |
| **Negara Pemberi** | Negara yang memberikan tanda kehormatan |
| **Tanggal Terima** | Tanggal penerimaan |
| **Keterangan** | Catatan tambahan |

```
GET  /prajurit/ajaxGetFormData/tahorneg
POST /prajurit/ajaxStoreRiwayat/tahorneg
```

### Tugas Luar Negeri (`tugas`)

Mencatat penugasan resmi ke luar negeri (misi perdamaian, pelatihan internasional, dll).

| Field | Keterangan |
| :--- | :--- |
| **Jenis Tugas** | Misi PBB, Pelatihan, Kunjungan, dll |
| **Negara Tujuan** | Negara tempat penugasan |
| **Tanggal Berangkat** | Tanggal keberangkatan |
| **Tanggal Pulang** | Tanggal kepulangan |
| **Keterangan** | Deskripsi tugas |

```
GET  /prajurit/ajaxGetFormData/tugas
POST /prajurit/ajaxStoreRiwayat/tugas
```

---

## Riwayat Bahasa (`bahasa`)

Mencatat kemampuan berbahasa asing prajurit.

| Field | Keterangan |
| :--- | :--- |
| **Bahasa** | Nama bahasa yang dikuasai |
| **Tingkat Kemampuan** | Speaking, Reading, Writing (dari `RiwayatBahasaModel::getTingkatList()`) |
| **Keterangan** | Catatan tambahan |

```
GET  /prajurit/ajaxGetFormData/bahasa
POST /prajurit/ajaxStoreRiwayat/bahasa
```
