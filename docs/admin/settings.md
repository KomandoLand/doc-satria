---
sidebar_position: 4
---

# Pengaturan Aplikasi

Modul pengaturan memungkinkan administrator mengkonfigurasi tampilan, perilaku, dan parameter sistem Komando Satria Apps tanpa perlu mengubah kode.

---

## Pengaturan Aplikasi (`/builtin/setting-app`)

Konfigurasi umum aplikasi:

| Parameter | Deskripsi |
| :--- | :--- |
| **Nama Aplikasi** | Nama yang tampil di navbar dan title browser |
| **Nama Satuan** | Nama satuan militer yang menggunakan sistem |
| **Logo Aplikasi** | Upload logo satuan (format PNG/SVG, maks 2MB) |
| **Favicon** | Icon yang tampil di tab browser |
| **Footer Text** | Teks copyright di bagian bawah halaman |
| **Timezone** | Zona waktu aplikasi (default: Asia/Jakarta) |

---

## Pengaturan Layout (`/builtin/setting-layout`)

Konfigurasi tampilan antarmuka:

| Parameter | Deskripsi |
| :--- | :--- |
| **Theme** | Pilihan tema warna aplikasi |
| **Sidebar Position** | Posisi sidebar: kiri atau kanan |
| **Menu Collapsed** | Default sidebar terlipat atau terbuka |
| **Dark Mode** | Aktifkan/nonaktifkan dark mode default |

---

## Pengaturan Registrasi (`/builtin/setting-registrasi`)

Konfigurasi pendaftaran user baru:

| Parameter | Deskripsi |
| :--- | :--- |
| **Registrasi Terbuka** | Izinkan pendaftaran akun baru secara mandiri |
| **Role Default** | Role yang otomatis diberikan pada user baru |
| **Perlu Approval** | Akun baru perlu disetujui admin sebelum aktif |
| **Email Verifikasi** | Kirim email verifikasi saat registrasi |

:::warning Keamanan
Untuk sistem militer, sangat disarankan **menonaktifkan registrasi terbuka** dan hanya membuat akun user melalui panel admin.
:::

---

## Backup & Restore Database

Fitur backup database tersedia melalui menu **Builtin → Database**:

### Backup Database
1. Buka menu **Builtin → Database**.
2. Klik tombol **Backup Database**.
3. Sistem akan mengekspor seluruh data ke file SQL.
4. File akan otomatis terunduh ke komputer Anda.

### Restore Database
1. Buka menu **Builtin → Database**.
2. Klik **Restore Database**.
3. Upload file SQL backup.
4. Konfirmasi proses restore.

:::caution Peringatan Restore
Proses restore akan **menimpa semua data yang ada** di database. Pastikan Anda sudah mem-backup data terkini sebelum melakukan restore.
:::

---

## Audit Log

Sistem mencatat semua aktivitas penting pengguna dalam tabel `audit_logs`:

- Login & logout
- Penambahan, perubahan, dan penghapusan data
- Perubahan konfigurasi sistem
- Akses ke modul sensitif

Lihat log aktivitas melalui menu **Builtin → Audit Log**.
