export interface Achievement {
  id: string;
  type: 'competition' | 'certification';
  year: number;
  title: { id: string; en: string };
  description: { id: string; en: string };
  issuer?: { id: string; en: string };
}

export const achievements: Achievement[] = [
  {
    id: 'kmipn-viii-2026',
    type: 'competition',
    year: 2026,
    title: {
      id: 'Juara 1 Kategori Cipta Inovasi — KMIPN VIII 2026',
      en: '1st Place Innovation Category — KMIPN VIII 2026',
    },
    description: {
      id: 'Juara pertama kategori Cipta Inovasi pada Kompetisi Mahasiswa Informatika Politeknik Nasional. Bersyukur atas hasil ini, dan terima kasih untuk semua yang membantu.',
      en: 'First place in the Innovation category at the National Polytechnic Informatics Student Competition. Grateful for this result, and thankful to everyone who helped.',
    },
  },
  {
    id: 'kmipn-vii-2025',
    type: 'competition',
    year: 2025,
    title: {
      id: 'Juara 3 Umum — KMIPN VII 2025',
      en: '3rd Place Overall — KMIPN VII 2025',
    },
    description: {
      id: 'Juara tiga umum pada Kompetisi Mahasiswa Informatika Politeknik Nasional. Pengalaman yang banyak mengajarkan hal baru.',
      en: 'Third place overall at the National Polytechnic Informatics Student Competition. An experience that taught me a lot.',
    },
  },
  {
    id: 'apjc-netriders-2026',
    type: 'competition',
    year: 2026,
    title: {
      id: 'Silver Medalist — APJC NetAcad Riders 2026',
      en: 'Silver Medalist — APJC NetAcad Riders 2026',
    },
    description: {
      id: 'Medali perak pada kompetisi APJC NetAcad Riders. Jadi motivasi untuk terus memperdalam jaringan.',
      en: 'Silver medal at the APJC NetAcad Riders competition. A motivation to keep deepening my networking knowledge.',
    },
  },
  {
    id: 'itechnocup-2026',
    type: 'competition',
    year: 2026,
    title: {
      id: 'Finalist — ITECHNOCUP PNJ 2026',
      en: 'Finalist — ITECHNOCUP PNJ 2026',
    },
    description: {
      id: 'Finalis ITECHNOCUP yang diselenggarakan Politeknik Negeri Jakarta. Kesempatan berharga untuk belajar dari peserta lain.',
      en: 'Finalist at ITECHNOCUP, organized by Politeknik Negeri Jakarta. A valuable chance to learn from other participants.',
    },
  },
  {
    id: 'mtcna-2026',
    type: 'certification',
    year: 2026,
    title: {
      id: 'MikroTik Certified Network Associate (MTCNA)',
      en: 'MikroTik Certified Network Associate (MTCNA)',
    },
    description: {
      id: 'Sertifikasi dari MikroTik untuk kemampuan dasar jaringan menggunakan perangkat MikroTik.',
      en: 'Certification from MikroTik for foundational networking skills using MikroTik devices.',
    },
    issuer: {
      id: 'MikroTik',
      en: 'MikroTik',
    },
  },
];
