# Presensi UKL

Deskripsi
Presensi UKL adalah sistem sederhana untuk manajemen presensi pengguna berbasis Node.js dan Express dengan database MySQL.  
Program ini dibuat untuk memenuhi tugas UKL, dengan fitur autentikasi, pengelolaan pengguna, pencatatan presensi, rekap bulanan, dan analisis tingkat kehadiran.  

Aplikasi ini memungkinkan manajemen untuk:
- Menambahkan, mengubah, dan melihat data pengguna (siswa/petugas)
- Melakukan login dengan autentikasi JWT
- Mencatat presensi harian
- Melihat riwayat presensi per pengguna
- Menghitung rekap bulanan kehadiran
- Melakukan analisis presensi berdasarkan periode dan kelompok (misal kelas atau jabatan)

# Cara Kerja Program
1. Autentikasi dan Otorisasi
   - Endpoint: `POST /api/auth/login`
   - Pengguna mengirimkan username dan password.
   - Server memverifikasi password (MD5 hash) dan menghasilkan token JWT.
   - Token digunakan untuk otorisasi akses endpoint lain.

2. Pengelolaan Data Pengguna
   - Tambah Pengguna: `POST /api/users`
   - Ubah Pengguna: `PUT /api/users/:id`
   - Lihat Pengguna: `GET /api/users/:id`
   - Password disimpan dalam bentuk MD5 hash agar aman.

3. Pencatatan Presensi
   - Tambah Presensi: `POST /api/attendance`
   - Data presensi mencakup user_id, tanggal, dan status (`hadir`, `izin`, `sakit`, `alpa`).

4. Rekap Kehadiran
   - Riwayat Presensi: `GET /api/attendance/history/:user_id` = menampilkan semua presensi pengguna
   - Rekap Bulanan: `GET /api/attendance/summary/:user_id` = menampilkan jumlah `hadir`, `izin`, `sakit`, `alpa` dalam bulan tertentu

5. Analisis Tingkat Kehadiran
   - Endpoint: `POST /api/attendance/analysis`
   - Mengambil data presensi dalam rentang tanggal tertentu dan mengelompokkan berdasarkan kategori (`kelas` atau `jabatan`)
   - Menghitung persentase kehadiran dan total kehadiran per kelompok
   - Output berupa JSON yang menunjukkan attendance_rate dan total_attendance per grup

- Password disimpan menggunakan MD5 hash agar tidak tersimpan dalam plain text.
- Autentikasi menggunakan JWT (JSON Web Token).
- Endpoint /api/attendance/analysis menggunakan POST karena membutuhkan parameter start_date, end_date, dan group_by.
- Pastikan struktur tabel MySQL sesuai dengan model Sequelize, terutama kolom date pada tabel presensi/attendance.
- Semua response JSON mengikuti format { status, message, data } untuk konsistensi.

![Login](path/ke/gambar.jp<img width="1920" height="1080" alt="1Login" src="https://github.com/user-attachments/assets/f5fde1d9-dc38-4403-938d-b2d2f3e2e730" />
)
![Penambahan Pengguna](path/ke/gambar.png<img width="1920" height="1080" alt="2PenambahanPengguna" src="https://github.com/user-attachments/assets/12550a8c-d873-4a4c-9b63-95ccf514394b" />
)
![Mengubah Data](path/ke/gambar.pn<img width="1920" height="1080" alt="3MengubahDataPegguna" src="https://github.com/user-attachments/assets/aa56a12c-087d-4fdf-b32d-dafaba1a47aa" />
g)
![Pengambilan Data](path/ke/gambar.<img width="1920" height="1080" alt="4MengambilDataPengguna" src="https://github.com/user-attachments/assets/92c8b5af-9aba-430f-bf10-934f30107bf5" />
png)
![Presensi](path/ke/gambar.p<img width="1920" height="1080" alt="5Presensi" src="https://github.com/user-attachments/assets/29d5f610-1c41-4b02-9300-929e1bae62db" />
ng)
![Riwayat Presensi](path/ke/gambar<img width="1920" height="1080" alt="6RiwayatPresensi" src="https://github.com/user-attachments/assets/4e53a3b8-b11b-471b-a70a-9f6dcfc4147a" />
.png)
![Rekap Kehadiran](path/ke/gambar<img width="1920" height="1080" alt="7Rekapkehadiran" src="https://github.com/user-attachments/assets/7947adc1-f2b2-4f41-9056-b1beb4dacb86" />
.png)
![Analisis Kehadiran](path/ke/gambar.<img width="1920" height="1080" alt="8AnalisisKehadiran" src="https://github.com/user-attachments/assets/310b6580-05a0-4d45-ac44-57199858335d" />
png)

