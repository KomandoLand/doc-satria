---
sidebar_position: 2
---

# Tata Cara Penggunaan

Panduan operasional awal untuk masuk, menavigasi modul, dan menggunakan sistem **Komando Satria** sesuai peran pengguna dalam hierarki komando militer.

---

## 1. Alur Masuk (Login)

Untuk mengakses dashboard sistem, pengguna harus masuk melalui halaman autentikasi terpadu.

1. Buka halaman utama aplikasi atau kunjungi alamat `/login`.
2. Masukkan **Username** dan **Kata Sandi**.
3. Klik tombol **Masuk (Login)**.

### Pengalihan Otomatis Berdasarkan Role

Sistem secara cerdas mengenali role akun dan mengarahkan pengguna ke dashboard yang relevan:

- Akun `admin` diarahkan ke **Dashboard Admin** (`/dashboard`).
- Akun `brigif` atau `denma` diarahkan ke **Dashboard** dengan akses penuh menu sistem.
- Akun `batalyon` hingga `unit_staf` diarahkan ke **Dashboard** dengan menu aplikasi sesuai permission.
- Akun `kompi`, `peleton`, `regu` diarahkan ke **Dashboard** dengan akses terbatas (read only).

---

## 2. Mengenal Dashboard Utama

Setelah login, halaman dashboard menyajikan ikhtisar kondisi satuan secara komprehensif dengan data real-time.

### Elemen-Elemen Utama Dashboard:

- **Kartu Statistik Header**:
  - 🪖 **Total Prajurit**: Jumlah seluruh prajurit yang terdaftar dalam sistem.
  - 🔫 **Total Senjata**: Jumlah alutsista/senjata yang tercatat.
  - 📋 **Program Aktif**: Jumlah program satuan yang sedang berjalan.
  - 📅 **Kegiatan Bulan Ini**: Total kegiatan teritorial pada bulan berjalan.

- **Grafik Kenaikan Pangkat per Bulan**: Line chart interaktif menampilkan tren riwayat kenaikan pangkat prajurit per bulan, dengan filter tahun.

- **Grafik Status Senjata (Doughnut)**: Visualisasi kondisi alutsista (baik, rusak ringan, rusak berat, dll).

- **Grafik Program per Kategori**: Bar chart distribusi program berdasarkan kategori (aktif vs selesai), dengan filter tahun.

- **Grafik Kegiatan Teritorial per Bulan**: Visualisasi frekuensi dan jumlah personel terlibat dalam kegiatan teritorial.

- **Tabel Mutasi Senjata Terbaru**: Daftar 10 mutasi senjata terkini dengan DataTables server-side.

- **Tabel Submission Program Terbaru**: Daftar 10 submission program terkini.

- **Tabel Prajurit Terbaru**: Daftar 5 prajurit yang baru diinput.

---

## 3. Navigasi Menu Sidebar

Menu sidebar tampil sesuai role yang dimiliki. Berikut pemetaan akses menu:

| Menu | admin | brigif / denma | staff_brigif ~ unit_staf | kompi ~ regu |
| :--- | :---: | :---: | :---: | :---: |
| **Dashboard** | ✅ | ✅ | ✅ | ✅ |
| **Prajurit** | ✅ | ✅ | ✅ | ✅ |
| **Satuan Militer** | ✅ | ✅ | ✅ | ✅ |
| **Senjata & Mutasi** | ✅ | ✅ | ✅ | ✅ |
| **Program & Kegiatan** | ✅ | ✅ | ✅ | ✅ |
| **Menu Sistem** (User, Role, Module, Menu) | ✅ | ✅ | ❌ | ❌ |
| **Pengaturan Aplikasi** | ✅ | ❌ | ❌ | ❌ |

---

## 4. Panduan Penggunaan Modul Prajurit

### A. Melihat Daftar Prajurit
1. Klik menu **Prajurit** di sidebar.
2. Gunakan fitur pencarian dan filter untuk mempersempit hasil.
3. Klik nama prajurit untuk melihat **Detail Profil Lengkap**.

### B. Menambah Data Prajurit Baru
1. Klik tombol **Tambah Prajurit** di halaman daftar.
2. Isi form biodata: NRP, nama, pangkat, satuan, corps, dan data pribadi.
3. Klik **Simpan** untuk menyimpan data.

:::info Riwayat Prajurit
Setelah data prajurit tersimpan, Anda dapat menambahkan data riwayat melalui tab-tab yang tersedia di halaman **Detail Prajurit**:
- **Riwayat Pangkat** — kenaikan pangkat beserta tanggal TMT
- **Riwayat Jabatan** — jabatan yang pernah diemban
- **Riwayat Keluarga** — data suami/istri dan anak
- **Riwayat Pendidikan** — pendidikan umum dan militer
- **Riwayat Operasi** — operasi & tugas luar negeri (tahorneg)
- **Kapor Lapangan** — data perlengkapan yang diterima
:::

### C. Mengedit Data Prajurit
1. Buka halaman **Detail Prajurit**.
2. Klik tombol **Edit** pada bagian yang ingin diubah.
3. Sesuaikan data lalu klik **Simpan**.

:::caution Batasan Akses Edit
- Role `kompi`, `peleton`, dan `regu` hanya dapat mengedit data **milik sendiri** (`update_own`).
- Role `brigif`, `batalyon`, dan `admin` dapat mengedit **semua data** (`update_all`).
:::

---

## 5. Panduan Penggunaan Modul Senjata

### A. Melihat Daftar Senjata
1. Klik menu **Senjata** di sidebar.
2. Daftar menampilkan nomor seri, jenis, kondisi, dan lokasi senjata saat ini.

### B. Mencatat Mutasi Senjata
1. Pilih senjata yang akan dimutasi.
2. Klik **Catat Mutasi**.
3. Isi form: satuan tujuan, tanggal, dan keterangan.
4. Mutasi akan tercatat dalam riwayat perpindahan alutsista.

---

## 6. Panduan Penggunaan Modul Program

### A. Membuat Program Baru
1. Klik menu **Program** di sidebar.
2. Klik tombol **Tambah Program**.
3. Isi nama program, kategori, lokasi, dan tanggal pelaksanaan.
4. Tambahkan **fase-fase program** secara berurutan.

### B. Submission Program
1. Buka detail program.
2. Klik **Tambah Submission** untuk mencatat laporan pelaksanaan.
3. Upload bukti dokumen jika diperlukan.

---

## 7. Keamanan & Logout

- Sesi login memiliki batas waktu aktif sesuai konfigurasi sistem.
- Untuk keluar, klik **nama pengguna** di pojok kanan atas → pilih **Logout**.
- Jangan meninggalkan sesi aktif di perangkat publik atau bersama.
