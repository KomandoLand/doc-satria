# Dokumentasi Komando Satria

Situs web dokumentasi resmi aplikasi **Komando Satria Apps (Sistem Informasi Manajemen Prajurit & Satuan Militer)** yang dibangun menggunakan [Docusaurus](https://docusaurus.io/).

---

## 🚀 Cakupan Dokumentasi

- **Panduan Teknis & Instalasi**: Langkah instalasi CodeIgniter 4, koneksi PostgreSQL, kontainerisasi Docker + Caddy, migrasi database, dan perintah CLI `php spark`.
- **Sistem RBAC Militer**: Arsitektur hak akses hierarki komando militer 11 role (Brigif, Denma, Yonif, Kompi, Seksi, Koramil, Staf), matriks wewenang, dan panduan ujicoba via seeder.
- **Modul Prajurit**: Manajemen biodata personel, riwayat kepangkatan, jabatan, keluarga, pendidikan umum & militer, operasi tugas LN / tahorneg, dan penilaian kemampuan (garjas, renang, menembak, beladiri).
- **Modul Militer**: Manajemen data organisasi satuan, inventaris alutsista & mutasi senjata, program latihan satuan, serta pembinaan teritorial (Binter) Koramil.
- **Modul Admin**: Dashboard analitik militer real-time dengan Chart.js, manajemen pengguna, konfigurasi role-permission, dan audit log.
- **Pencarian Lokal**: Fitur pencarian instan luring berbasis `@cmfcmf/docusaurus-search-local`.

---

## 💻 Menjalankan Dokumentasi Secara Lokal

### Instalasi Dependensi

```bash
npm install
```

### Menjalankan Server Development

```bash
npm run start
```

Server lokal akan berjalan di `http://localhost:3000`.

### Membangun Berkas Statis Produksi

```bash
npm run build
```

Berkas keluaran statis HTML/CSS/JS akan dihasilkan di dalam direktori `build/` dan siap dideploy ke GitHub Pages, Vercel, Netlify, atau web server statis lainnya.
