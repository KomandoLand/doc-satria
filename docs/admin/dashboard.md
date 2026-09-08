---
sidebar_position: 1
---

# Dashboard

Modul Dashboard (`Dashboard.php`) adalah pusat komando dan analitik satuan bagi seluruh pengguna Komando Satria Apps. Halaman ini menyajikan visualisasi data secara langsung (*live*) dengan grafik interaktif berbasis **Chart.js** tanpa perlu memuat ulang seluruh halaman (AJAX-based).

---

## Kartu Statistik Utama

Bagian atas dashboard menampilkan 4 kartu ringkasan satuan:

| Kartu | Deskripsi |
| :--- | :--- |
| 🪖 **Total Prajurit** | Jumlah seluruh prajurit yang terdaftar aktif dalam sistem |
| 🔫 **Total Senjata** | Jumlah seluruh alutsista/senjata yang tercatat |
| 📋 **Program Aktif** | Jumlah program satuan dengan status aktif/berjalan |
| 📅 **Kegiatan Bulan Ini** | Total kegiatan teritorial pada bulan kalender berjalan |

---

## Grafik Interaktif

### 1. Grafik Kenaikan Pangkat per Bulan (Line Chart)
- Menampilkan tren kenaikan pangkat prajurit per bulan secara multi-tahun.
- Dilengkapi **dropdown filter tahun** untuk memilih rentang tahun yang ingin ditampilkan.
- Data dimuat ulang via AJAX (`/dashboard/ajaxGetPangkatPerBulan?tahun=YYYY`).

### 2. Grafik Status Senjata (Doughnut Chart)
- Visualisasi distribusi kondisi senjata: baik, rusak ringan, rusak berat, dll.
- Data dimuat via AJAX (`/dashboard/ajaxGetStatusSenjata`).

### 3. Grafik Program per Kategori (Bar Chart)
- Menampilkan jumlah program berdasarkan kategori, dibagi antara **aktif** dan **selesai**.
- Dilengkapi filter tahun.
- Data dimuat via AJAX (`/dashboard/ajaxGetProgramPerKategori?tahun=YYYY`).

### 4. Grafik Kegiatan Teritorial per Bulan (Bar Chart)
- Dua seri data: **jumlah kegiatan** dan **total personel terlibat** per bulan.
- Dilengkapi filter tahun.
- Data dimuat via AJAX (`/dashboard/ajaxGetKegiatanPerBulan?tahun=YYYY`).

---

## Tabel Detail Terbaru

### Tabel Mutasi Senjata Terbaru
- Menampilkan 10 mutasi senjata terkini dengan DataTables server-side.
- Kolom: No. Seri, Jenis, Dari Satuan, Ke Satuan, Tanggal Mutasi.
- Mendukung pencarian, sorting, dan pagination.

### Tabel Submission Program Terbaru
- Daftar 10 submission laporan program terkini.
- Kolom: Nama Program, Kategori, Tanggal Submit, Status.

### Tabel Prajurit Terbaru
- Daftar 5 prajurit yang paling baru diinput.
- Kolom: NRP, Nama, Pangkat, Satuan.

---

## Hak Akses Dashboard

Semua role dapat mengakses halaman dashboard. Namun, data yang ditampilkan disesuaikan dengan scope permission:

- Role dengan `read_all` → melihat data statistik seluruh satuan.
- Role dengan `read_own` saja → data terbatas pada satuan/unit yang bersangkutan.

---

## Endpoint AJAX Dashboard

| Endpoint | Method | Keterangan |
| :--- | :---: | :--- |
| `/dashboard/ajaxGetPangkatPerBulan` | GET | Data kenaikan pangkat per bulan (filter tahun) |
| `/dashboard/ajaxGetStatusSenjata` | GET | Data kondisi/status senjata |
| `/dashboard/ajaxGetProgramPerKategori` | GET | Data program per kategori (filter tahun) |
| `/dashboard/ajaxGetKegiatanPerBulan` | GET | Data kegiatan teritorial per bulan (filter tahun) |
| `/dashboard/getDataDTMutasiSenjata` | POST | DataTables server-side mutasi senjata |
