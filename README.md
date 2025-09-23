# Aplikasi Dashboard Next.js

Ini adalah repositori untuk aplikasi dashboard yang dibuat dengan mengikuti tutorial resmi dari [Next.js Learn](https://nextjs.org/learn). Aplikasi ini adalah aplikasi full-stack yang mencakup berbagai fitur modern Next.js, mulai dari pengambilan data, autentikasi, hingga manajemen data interaktif.
## versi yang telah dideploy
(https://take-home-puce.vercel.app/)

### Kredensial Login 🔑
Gunakan akun ini untuk masuk:

- Email: user@nextmail.com
- Password: 123456
---

## Fitur Utama ✨

- **Halaman Dashboard yang Terlindungi**: Hanya pengguna yang sudah login yang dapat mengakses halaman dashboard.
- **Autentikasi Pengguna**: Sistem login dan logout menggunakan NextAuth.js dengan provider Kredensial (email dan password).
- **Manajemen Invoices (CRUD)**:
  - Membuat, Membaca, Mengedit, dan Menghapus data invoice.
  - Validasi form menggunakan Zod.
- **Pencarian dan Paginasi**: Fitur pencarian dan paginasi di sisi server untuk data invoices.
- **Visualisasi Data**: Menampilkan data agregat seperti total pendapatan dan jumlah invoice.
- **UI Modern & Responsif**: Dibangun dengan Tailwind CSS untuk tampilan yang bersih dan responsif di berbagai perangkat.
- **Optimasi**: Menggunakan fitur-fitur optimasi Next.js seperti Server Components, Streaming UI dengan Suspense, dan optimasi font.

---

## Teknologi yang Digunakan 🛠️

- **Framework**: [Next.js 14+](https://nextjs.org/) (dengan App Router)
- **Bahasa**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI & Ikon**: [Heroicons](https://heroicons.com/)
- **Validasi**: [Zod](https://zod.dev/)
- **Database**: [Vercel Postgres](https://vercel.com/storage/postgres)
- **Autentikasi**: [NextAuth.js](https://next-auth.js.org/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## Cara Instalasi dan Pakai 🚀

Untuk menjalankan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah di bawah ini.

### 1. Prasyarat

Pastikan Anda sudah menginstal perangkat lunak berikut di komputer Anda:

- [Node.js](https://nodejs.org/en) (versi 18.17.0 atau lebih baru)
- [Git](https://git-scm.com/)
- Akses ke database PostgreSQL

### 2. Instalasi Proyek

Buka terminal Anda dan jalankan perintah-perintah berikut:

```bash
# Clone repositori ini ke komputer Anda
https://github.com/efendi7/TakeHome.git

# Masuk ke direktori proyek
cd TakeHome

# Instal semua dependensi yang dibutuhkan
npm install
```
### 3. Konfigurasi Environment Variables

Aplikasi ini membutuhkan beberapa "kunci rahasia" untuk berjalan (database, NextAuth secret, dll):

```bash
# Salin file contoh .env.example menjadi file .env.local
cp .env.example .env.local
```
Buka File .env.local
```bash
# URL koneksi ke database PostgreSQL
POSTGRES_URL="postgres://user:password@host:port/database"

# Secret key untuk NextAuth.js (buat dengan `openssl rand -base64 32`)
AUTH_SECRET="..."
```
### 4. Seed Database
Jalankan skrip untuk membuat tabel dan data awal:
```bash
npm run seed
```
### 5. Jalankan Aplikasi
Jalankan server development:
```bash
npm run dev
```
Buka (http://localhost:3000) di browser untuk melihat aplikasi berjalan.

### Pelajari Lebih Lanjut

- [Tutorial Next.js Learn](https://nextjs.org/learn) Tutorial resmi yang menjadi dasar proyek ini

- [Dokumentasi Next.js](https://nextjs.org/docs) Fitur dan API Next.js
