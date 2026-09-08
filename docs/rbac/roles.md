---
sidebar_position: 2
---

# Daftar Role & Hierarki Akses

Dokumentasi lengkap 11 role yang tersedia dalam sistem RBAC Komando Satria Apps beserta matriks permission masing-masing.

---

## Daftar Role Militer

| ID Role | Nama Role | Judul Role | Level | Keterangan |
|---------|-----------|------------|-------|------------|
| 1 | `admin` | Administrator | 🔴 FULL | Super Administrator — akses tanpa batas |
| 2 | `user` | User | ⚪ Basic | Pengguna umum (reserved) |
| 3 | `brigif` | Komandan Brigif | 🟠 Tinggi | Akses level Brigade Infanteri |
| 4 | `staff_brigif` | Staff Brigif | 🟠 Tinggi | Akses level Staff Brigade Infanteri |
| 5 | `denma` | Detasemen Markas | 🟠 Tinggi | Akses level Detasemen Markas |
| 6 | `batalyon` | Komandan Batalyon | 🟡 Menengah | Akses level Batalyon |
| 7 | `staff_batalyon` | Staff Batalyon | 🟡 Menengah | Akses level Staff Batalyon |
| 8 | `seksi` | Kepala Seksi | 🟡 Menengah | Akses level Seksi |
| 9 | `kompi` | Komandan Kompi | 🟢 Terbatas | Akses level Kompi |
| 10 | `peleton` | Komandan Peleton | 🔵 Minimal | Akses level Peleton |
| 11 | `regu` | Komandan Regu | 🔵 Minimal | Akses level Regu |
| 12 | `unit_staf` | Unit Staf | 🟡 Menengah | Akses level Unit Staf |

---

## Matriks Hak Akses (Permission)

| Permission | admin | brigif | staff_brigif | denma | batalyon | staff_batalyon | seksi | kompi | peleton | regu | unit_staf |
|:-----------|:-----:|:------:|:------------:|:-----:|:--------:|:--------------:|:-----:|:-----:|:-------:|:----:|:---------:|
| `create` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ |
| `read_all` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ |
| `read_own` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `update_all` | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `update_own` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `delete_all` | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `delete_own` | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |

---

## Detail per Role

### 🔴 Administrator (`admin`)
- **Wewenang**: Full access — dapat melakukan semua operasi tanpa batasan.
- **Menu Sistem**: ✅ Semua menu termasuk pengaturan aplikasi.
- **Permission**: `create`, `read_all`, `read_own`, `update_all`, `update_own`, `delete_all`, `delete_own`.

### 🟠 Komandan Brigif (`brigif`)
- **Wewenang**: Tingkat komando tertinggi di bawah admin. Bisa create, read semua, update semua, dan hapus data miliknya.
- **Menu Sistem**: ✅ Termasuk menu User, Role, Module, Menu.
- **Permission**: `create`, `read_all`, `read_own`, `update_all`, `update_own`, `delete_own`.

### 🟠 Detasemen Markas (`denma`)
- **Wewenang**: Serupa brigif, namun **tidak bisa menghapus** data apapun.
- **Menu Sistem**: ✅ Termasuk menu User, Role, Module, Menu.
- **Permission**: `create`, `read_all`, `read_own`, `update_all`, `update_own`.

### 🟠 Staff Brigif (`staff_brigif`)
- **Wewenang**: Bisa create dan read semua, namun hanya bisa update dan delete data miliknya sendiri.
- **Menu Sistem**: ❌ Hanya menu aplikasi.
- **Permission**: `create`, `read_all`, `read_own`, `update_own`, `delete_own`.

### 🟡 Komandan Batalyon (`batalyon`)
- **Wewenang**: Sama dengan brigif dalam hal create & update all, namun tidak dapat akses menu sistem.
- **Menu Sistem**: ❌ Hanya menu aplikasi.
- **Permission**: `create`, `read_all`, `read_own`, `update_all`, `update_own`, `delete_own`.

### 🟡 Staff Batalyon (`staff_batalyon`)
- **Wewenang**: Bisa create dan read semua, update dan delete data miliknya sendiri.
- **Menu Sistem**: ❌ Hanya menu aplikasi.
- **Permission**: `create`, `read_all`, `read_own`, `update_own`, `delete_own`.

### 🟡 Kepala Seksi (`seksi`)
- **Wewenang**: Bisa create dan read semua data, namun hanya update data sendiri. Tidak bisa hapus.
- **Menu Sistem**: ❌ Hanya menu aplikasi.
- **Permission**: `create`, `read_all`, `read_own`, `update_own`.

### 🟡 Unit Staf (`unit_staf`)
- **Wewenang**: Identik dengan `seksi` — bisa create, read all, update own, tanpa hapus.
- **Menu Sistem**: ❌ Hanya menu aplikasi.
- **Permission**: `create`, `read_all`, `read_own`, `update_own`.

### 🟢 Komandan Kompi (`kompi`)
- **Wewenang**: Hanya bisa **membaca** (all dan own) dan **mengubah** data miliknya. Tidak bisa menambah data baru atau menghapus.
- **Menu Sistem**: ❌ Hanya menu aplikasi.
- **Permission**: `read_all`, `read_own`, `update_own`.

### 🔵 Komandan Peleton (`peleton`)
- **Wewenang**: Sangat terbatas — hanya bisa melihat dan mengubah **data milik sendiri**.
- **Menu Sistem**: ❌ Hanya menu aplikasi.
- **Permission**: `read_own`, `update_own`.

### 🔵 Komandan Regu (`regu`)
- **Wewenang**: Identik dengan `peleton` — hanya bisa melihat dan ubah data milik sendiri.
- **Menu Sistem**: ❌ Hanya menu aplikasi.
- **Permission**: `read_own`, `update_own`.

---

## Akses Menu Sidebar per Role

| Role | Menu Sistem (builtin) | Menu Aplikasi |
|------|-----------------------|---------------|
| `admin` | ✅ Semua menu | ✅ Semua menu |
| `brigif` | ✅ Ya (User, Role, Module, dll) | ✅ Ya |
| `denma` | ✅ Ya | ✅ Ya |
| `staff_brigif` | ❌ Tidak | ✅ Ya |
| `batalyon` | ❌ Tidak | ✅ Ya |
| `staff_batalyon` | ❌ Tidak | ✅ Ya |
| `seksi` | ❌ Tidak | ✅ Ya |
| `kompi` | ❌ Tidak | ✅ Ya |
| `peleton` | ❌ Tidak | ✅ Ya |
| `regu` | ❌ Tidak | ✅ Ya |
| `unit_staf` | ❌ Tidak | ✅ Ya |

> **Catatan:** "Menu Sistem" mencakup: User, User Role, Module, Menu, Menu Role, Role, Setting Aplikasi, Setting Layout, Setting Registrasi, Module Permission, Role Permission.
