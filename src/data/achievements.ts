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
      id: 'Meraih juara pertama pada Kompetisi Mahasiswa Informatika Politeknik Nasional kategori Cipta Inovasi.',
      en: 'Won first place in the National Polytechnic Informatics Student Competition in the Innovation category.',
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
      id: 'Meraih juara tiga umum pada Kompetisi Mahasiswa Informatika Politeknik Nasional.',
      en: 'Won third place overall in the National Polytechnic Informatics Student Competition.',
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
      id: 'Meraih medali perak pada kompetisi APJC NetAcad Riders.',
      en: 'Won a silver medal at the APJC NetAcad Riders competition.',
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
      id: 'Lolos hingga tahap final pada kompetisi ITECHNOCUP yang diselenggarakan oleh Politeknik Negeri Jakarta.',
      en: 'Advanced to the final stage of the ITECHNOCUP competition organized by Politeknik Negeri Jakarta.',
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
      id: 'Sertifikasi profesional dari MikroTik untuk kemampuan dasar jaringan menggunakan perangkat MikroTik.',
      en: 'Professional certification from MikroTik for foundational networking skills using MikroTik devices.',
    },
    issuer: {
      id: 'MikroTik',
      en: 'MikroTik',
    },
  },
];
