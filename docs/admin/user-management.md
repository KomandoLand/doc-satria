---
sidebar_position: 2
---

# Manajemen User & Role

Modul manajemen user dan role berada di bawah menu **Builtin** dan hanya dapat diakses oleh role dengan hak akses tinggi (`admin`, `brigif`, `denma`).

---

## Manajemen User (`/builtin/user`)

### Daftar User
Menampilkan semua user yang terdaftar dalam sistem beserta role yang dimiliki, status aktif, dan informasi login terakhir.

### Menambah User Baru
1. Buka menu **Builtin → User**.
2. Klik tombol **Tambah User**.
3. Isi form: nama lengkap, username, email, password, dan konfirmasi password.
4. Pilih **Role** yang akan diberikan kepada user.
5. Klik **Simpan**.

### Mengedit User
1. Klik ikon **Edit** pada baris user.
2. Ubah data yang diperlukan (nama, email, dll).
3. Untuk mengganti password, isi field password baru. Kosongkan jika tidak ingin mengubah password.
4. Klik **Simpan**.

:::caution Ubah Password
Saat mengedit user, pastikan field password dikosongkan jika tidak ingin mengganti password. Mengisi field password akan langsung memperbarui password user tersebut.
:::

### Reset Password User
Admin dapat mereset password user lain melalui halaman edit user. Masukkan password baru dan konfirmasinya.

### Nonaktifkan User
Untuk menonaktifkan user tanpa menghapusnya, ubah status user menjadi **Tidak Aktif** melalui halaman edit.

---

## Manajemen Role (`/builtin/role`)

### Daftar Role
Menampilkan semua role yang tersedia dalam sistem beserta jumlah user yang memegang role tersebut.

### Menambah Role Baru
1. Buka menu **Builtin → Role**.
2. Klik **Tambah Role**.
3. Isi: nama role (lowercase, tanpa spasi), judul role (tampilan di UI), dan deskripsi.
4. Klik **Simpan**.

### Mengedit Role
1. Klik ikon **Edit** pada baris role.
2. Ubah judul atau deskripsi.
3. Klik **Simpan**.

:::warning Nama Role
Nama role (`name`) bersifat immutable setelah digunakan dalam permission mapping. Ubah hanya jika benar-benar diperlukan dan tidak ada user yang menggunakan role tersebut.
:::

---

## Manajemen User Role (`/builtin/user-role`)

Halaman untuk mengelola **mapping antara user dan role**. Satu user dapat memiliki lebih dari satu role.

### Assign Role ke User
1. Pilih user dari dropdown.
2. Pilih role yang akan diberikan.
3. Klik **Simpan**.

### Hapus Role dari User
1. Cari baris user-role yang ingin dihapus.
2. Klik ikon **Hapus** pada baris tersebut.

---

## Manajemen Modul (`/builtin/module`)

Modul merepresentasikan **halaman atau fitur** dalam sistem yang dapat dikontrol aksesnya.

### Daftar Modul
Menampilkan semua modul yang terdaftar beserta path URL-nya.

### Menambah Modul
1. Isi nama modul (human-readable) dan path URL.
2. Pilih status aktif/nonaktif.
3. Klik **Simpan**.

---

## Manajemen Menu (`/builtin/menu`)

Mengatur item-item yang tampil di sidebar navigasi.

### Struktur Menu
Menu memiliki hierarki dua level:
- **Menu Kategori** (parent) — header grup di sidebar.
- **Menu Item** (child) — link navigasi ke halaman tertentu.

### Menambah Menu Item
1. Pilih **Kategori Parent**.
2. Isi nama menu, icon (Material Icons), dan URL tujuan.
3. Atur urutan tampil (order).
4. Klik **Simpan**.

---

## Manajemen Role Permission (`/builtin/role-permission`)

Mengatur **permission apa saja yang dimiliki oleh setiap role** untuk setiap modul.

### Matriks Permission
Halaman ini menampilkan grid role vs permission untuk memudahkan konfigurasi massal.

### Assign Permission ke Role
1. Pilih role dari dropdown.
2. Pilih modul.
3. Centang permission yang diizinkan (`create`, `read_all`, `read_own`, `update_all`, `update_own`, `delete_all`, `delete_own`).
4. Klik **Simpan**.

:::info Cara Cepat Setup Permission
Gunakan `RbacRolePermissionSeeder` untuk setup permission semua role militer sekaligus via CLI:
```bash
php spark db:seed RbacRolePermissionSeeder
```
:::
