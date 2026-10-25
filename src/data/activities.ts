export interface Activity {
  /** Dipakai juga sebagai awalan nama file foto: src/assets/kegiatan/<id>-1.jpg, <id>-2.jpg, ... */
  id: string;
  group: 'org' | 'community';
  title: { id: string; en: string };
  /** Keterangan singkat di bawah judul (jenis kegiatan atau tempat) */
  meta?: { id: string; en: string };
  description: { id: string; en: string };
}

export const organization = {
  name: 'UKM Cisco NetRiders Community, Politeknik Caltex Riau',
  role: { id: 'Ketua Umum', en: 'President' },
  period: '2025/2026',
};

export const activities: Activity[] = [
  {
    id: 'imac',
    group: 'org',
    title: {
      id: 'IMAC — Introduce More About Cisco',
      en: 'IMAC — Introduce More About Cisco',
    },
    meta: {
      id: 'Workshop dan edukasi teknologi Cisco',
      en: 'Cisco technology workshop and education',
    },
    description: {
      id: 'Berperan sebagai pemateri dalam workshop edukasi mengenai penggunaan perangkat Cisco, untuk memperkenalkan teknologi jaringan dan meningkatkan pemahaman peserta tentang perangkat networking.',
      en: 'Served as a speaker in an educational workshop on using Cisco devices, to introduce networking technology and help participants better understand networking equipment.',
    },
  },
  {
    id: 'sharing-session',
    group: 'org',
    title: {
      id: 'Cisco Networking Sharing Session',
      en: 'Cisco Networking Sharing Session',
    },
    description: {
      id: 'Berkontribusi dalam kegiatan berbagi pengetahuan dan pembelajaran mengenai jaringan komputer serta teknologi Cisco di lingkungan UKM.',
      en: 'Contributed to knowledge-sharing and learning activities about computer networking and Cisco technology within the student organization.',
    },
  },
  {
    id: 'netacad-riders-2026',
    group: 'org',
    title: {
      id: 'APJC NetAcad Riders Round 1 — 2026',
      en: 'APJC NetAcad Riders Round 1 — 2026',
    },
    description: {
      id: 'Mendukung partisipasi anggota UKM dalam kompetisi networking. Anggota berhasil meraih predikat Gold, Silver, dan Bronze Medalist.',
      en: 'Supported member participation in a networking competition. Members earned Gold, Silver, and Bronze Medalist titles.',
    },
  },
  {
    id: 'snc-ix-2026',
    group: 'org',
    title: {
      id: 'Sumatera Networking Competition (SNC) IX — 2026',
      en: 'Sumatera Networking Competition (SNC) IX — 2026',
    },
    description: {
      id: 'Terlibat dalam penyelenggaraan kompetisi networking bagi siswa SMK se-Sumatera, dengan tahapan kompetisi teori dan praktik menggunakan perangkat Cisco.',
      en: 'Involved in organizing a networking competition for vocational high school students across Sumatra, with theory and practical stages using Cisco devices.',
    },
  },
  {
    id: 'iot-esp32-smkn5',
    group: 'community',
    title: {
      id: 'Edukasi Internet of Things (IoT) Menggunakan ESP32',
      en: 'Internet of Things (IoT) Education Using ESP32',
    },
    meta: { id: 'SMK Negeri 5 Pekanbaru', en: 'SMK Negeri 5 Pekanbaru' },
    description: {
      id: 'Mengajarkan dasar IoT melalui praktik pengendalian LED menggunakan ESP32.',
      en: 'Taught IoT basics through a hands-on LED control exercise using the ESP32.',
    },
  },
  {
    id: 'hidroponik-zalaponic',
    group: 'community',
    title: {
      id: 'Edukasi Sistem Hidroponik Otomatis Berbasis IoT',
      en: 'Education on IoT-Based Automated Hydroponic Systems',
    },
    meta: { id: 'PT Zalaponic', en: 'PT Zalaponic' },
    description: {
      id: 'Memberikan edukasi mengenai penerapan teknologi IoT dalam pemantauan dan pengelolaan sistem hidroponik otomatis.',
      en: 'Gave education on applying IoT technology to monitor and manage automated hydroponic systems.',
    },
  },
];

/* Foto ditemukan otomatis saat build dari src/assets/kegiatan/<id>-<nomor>.<ext> */
const files = import.meta.glob('../assets/kegiatan/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

export function getActivityPhotos(id: string): string[] {
  const pattern = new RegExp(`/${id}-(\\d+)\\.[A-Za-z]+$`);
  return Object.entries(files)
    .map(([path, url]) => ({ n: Number(path.match(pattern)?.[1]), url }))
    .filter((f) => !Number.isNaN(f.n))
    .sort((a, b) => a.n - b.n)
    .map((f) => f.url);
}
