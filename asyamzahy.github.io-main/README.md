# Portfolio — Asyam Zahy Pratama Widodo

React 19 + TypeScript + Vite + Tailwind CSS v4 + Motion. Dua bahasa (ID / EN), otomatis mengikuti mode terang/gelap perangkat.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # hasil di folder dist/
```

## Menambah gambar

Taruh file di `public/images/` dengan nama persis seperti ini (lihat juga `public/images/README.txt`):

| File | Dipakai untuk |
| --- | --- |
| `avatar.jpg` | Foto profil di bagian atas (rasio 4:5) |
| `zalasmart.jpg` | Kartu dan detail proyek ZalaSmart (rasio 4:3) |
| `benihnusa.jpg` | BenihNusa |
| `adaptive-traffic.jpg` | Adaptive Traffic Light System |
| `hydroponic-anomaly.jpg` | Hydroponic Anomaly Detection |

Selama file belum ada, tampil placeholder polos.

## Mengisi tautan sosial

Buka `src/sections/Contact.tsx`, isi `url` pada daftar `socials`. Yang masih kosong otomatis disembunyikan.

## Warna dan font

Semua ada di `src/index.css` (bagian `:root`). Font: Newsreader (judul) dan Geist (teks).
