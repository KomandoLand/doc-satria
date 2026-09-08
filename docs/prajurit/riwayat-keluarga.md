---
sidebar_position: 4
---

# Riwayat Keluarga

Modul Riwayat Keluarga mencatat data anggota keluarga dari setiap prajurit, termasuk suami/istri dan anak-anak.

---

## Data yang Dicatat

| Field | Keterangan |
| :--- | :--- |
| **Nama** | Nama lengkap anggota keluarga |
| **Hubungan Keluarga** | Jenis hubungan (Istri, Suami, Anak, dll) — dari tabel `m_hub_keluarga` |
| **Tempat Lahir** | Kota tempat lahir |
| **Tanggal Lahir** | Tanggal lahir anggota keluarga |
| **Pekerjaan** | Pekerjaan saat ini |
| **Keterangan** | Catatan tambahan (opsional) |

---

## Cara Menambah Riwayat Keluarga

1. Buka halaman **Detail Prajurit** (`/prajurit/detail/{NRP}`).
2. Klik tab **Riwayat Keluarga**.
3. Klik tombol **Tambah Anggota Keluarga**.
4. Pilih **Hubungan Keluarga** dari dropdown.
5. Isi data anggota keluarga.
6. Klik **Simpan**.

---

## Data Referensi Hubungan Keluarga

Hubungan keluarga tersedia dari tabel `m_hub_keluarga`, di-seed oleh `HubKeluargaSeeder`:

| Kode | Hubungan |
|------|----------|
| `istri` | Istri |
| `suami` | Suami |
| `anak` | Anak |
| `ayah` | Ayah |
| `ibu` | Ibu |
| `saudara` | Saudara Kandung |

---

## Endpoint AJAX

```
GET  /prajurit/ajaxGetFormData/keluarga     → Load form (termasuk dropdown hubungan)
POST /prajurit/ajaxStoreRiwayat/keluarga    → Simpan data keluarga baru
```
