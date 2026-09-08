# Dokumentasi SIKU - Sistem Informasi Sekolah Khoiru Ummah

Situs web dokumentasi resmi aplikasi **SIKU (Sistem Informasi dan Presensi Multi-Metode Sekolah Khoiru Ummah)** yang dibangun menggunakan [Docusaurus](https://docusaurus.io/).

---

## 🚀 Fitur Dokumentasi

- **Panduan Teknis Lengkap**: Langkah instalasi, database migration, seeding, environment `.env`, konfigurasi Nginx production, dan Docker setup.
- **Modul Presensi 3-in-1**: Dokumentasi pemindaian QR Code, integrasi RFID card USB reader, dan deteksi wajah (Face Recognition) serta Audio Announcer Text-To-Speech (TTS).
- **Notifikasi WhatsApp**: Panduan konfigurasi 5 gateway WhatsApp (Fonnte, OpenWA, ApiMe, Evolution API, wuzapi) beserta mode rotasi otomatis (*Auto*).
- **Progressive Web App (PWA)**: Panduan instalasi aplikasi native standalone di mobile dan desktop serta generator ikon via CLI (`php spark pwa:icons`).
- **7 Role-Based Dashboard**: Panduan operasional untuk Superadmin, Admin, Kepala Sekolah, Wali Kelas, Orang Tua, Alumni, dan Petugas Scanner.
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
