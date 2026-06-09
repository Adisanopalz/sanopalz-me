💻 Dokumentasi Developer

Dokumen ini berisi informasi teknis tentang bagaimana me.sanopalz.my.id dibangun, dijalankan, dan di-deploy ke server.

1. Tech Stack (Teknologi yang Digunakan)

Untuk menjaga performa tetap optimal dan tidak over-engineered untuk sebuah landing page personal, kita menggunakan stack yang ringan:

HTML5: Struktur dasar halaman.

CSS3 / Tailwind CSS: Untuk styling. (Sangat disarankan menggunakan Tailwind via CDN atau build proses sederhana agar responsif dan modifikasi lebih cepat).

JavaScript (Vanilla): Hanya jika diperlukan untuk interaktivitas ringan (misal: animasi klik, share button, atau toggle dark mode manual).

Git & GitHub: Untuk version control dan manajemen kode.

2. Struktur Direktori

me.sanopalz.my.id/
├── index.html          # File HTML utama
├── css/
│   └── style.css       # File CSS kustom (jika tidak pakai Tailwind)
├── assets/
│   ├── avatar.jpg      # Foto profil
│   └── icons/          # File SVG ikon (jika ada)
├── design.md           # Dokumentasi desain
├── developer.md        # Dokumentasi developer
└── readme.md           # Dokumentasi utama proyek


3. Cara Menjalankan di Lokal (Local Development)

Karena ini menggunakan HTML dan CSS statis, kamu tidak memerlukan server yang kompleks.

Clone repositori ini.

Buka folder proyek di teks editor (misal: VS Code).

Gunakan ekstensi seperti Live Server di VS Code.

Klik Go Live, dan halaman akan terbuka di http://localhost:5500.

4. Panduan Deployment (Hosting)

Direkomendasikan menggunakan layanan hosting situs statis yang gratis, cepat, dan mudah diintegrasikan dengan GitHub, seperti GitHub Pages, Vercel, atau Cloudflare Pages.

Langkah Umum (Contoh Vercel / Cloudflare Pages):

Push kode terbaru ke repositori GitHub.

Login ke dashboard Vercel / Cloudflare Pages.

Buat proyek baru dan hubungkan (import) dari repositori GitHub proyek ini.

Framework Preset: Pilih Other atau biarkan kosong (karena ini file statis).

Klik Deploy.

5. Konfigurasi Domain Kustom (me.sanopalz.my.id)

Setelah aplikasi di-deploy (misalnya mendapat URL sanopalz-me.vercel.app), langkah selanjutnya adalah menghubungkan subdomain.

Buka dashboard panel DNS dari registrar domain sanopalz.my.id (misal: Cloudflare, Niagahoster, Rumahweb, dll).

Tambahkan DNS Record baru:

Type: CNAME

Name: me

Target / Value: sanopalz-me.vercel.app (Ganti dengan URL target hosting kamu).

TTL: Auto

Simpan pengaturan. Tunggu propagasi DNS (biasanya beberapa menit hingga 1x24 jam).

Di dashboard hosting (Vercel/Cloudflare), tambahkan me.sanopalz.my.id pada bagian Custom Domains.