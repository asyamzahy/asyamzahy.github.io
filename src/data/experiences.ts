export interface Experience {
  id: string;
  organization: string;
  role: { id: string; en: string };
  period: string;
  description: { id: string; en: string };
  activities: { id: string[]; en: string[] };
}

export const experiences: Experience[] = [
  {
    id: 'cisco-netriders',
    organization: 'UKM Cisco NetRiders Community — Politeknik Caltex Riau',
    role: {
      id: 'Ketua Umum',
      en: 'President',
    },
    period: '2025/2026',
    description: {
      id: 'Memimpin UKM Cisco NetRiders Community di Politeknik Caltex Riau, komunitas yang berfokus pada Cisco dan networking.',
      en: 'Leading the Cisco NetRiders Community student organization at Politeknik Caltex Riau, a community focused on Cisco and networking.',
    },
    activities: {
      id: [
        'Menyelenggarakan kegiatan berbagi pengetahuan Cisco dan networking.',
        'Mengembangkan komunitas dan meningkatkan partisipasi anggota.',
        'Terlibat dalam penyelenggaraan SNC IX 2026.',
        'Mendukung kegiatan kompetisi dan pembelajaran teknologi.',
      ],
      en: [
        'Organizing Cisco and networking knowledge-sharing activities.',
        'Developing the community and increasing member participation.',
        'Involved in the organization of SNC IX 2026.',
        'Supporting technology competition and learning activities.',
      ],
    },
  },
];
