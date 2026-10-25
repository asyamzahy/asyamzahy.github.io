export type ProjectCategory = 'IoT' | 'Blockchain' | 'AI/ML' | 'Networking';

export interface Project {
  id: string;
  category: ProjectCategory;
  technologies: string[];
  image?: string;
  videoUrl?: string;
  team?: string[];
  githubUrl?: string;
  liveUrl?: string;
  title: { id: string; en: string };
  description: { id: string; en: string };
  overview: { id: string; en: string };
  problem: { id: string; en: string };
  solution: { id: string; en: string };
  contribution: { id: string; en: string };
  implementation: { id: string; en: string };
  status: { id: string; en: string };
}

export const projects: Project[] = [
  {
    id: 'zalasmart',
    videoUrl: 'https://youtu.be/APVYVnX7juI',
    team: ['Asyam Zahy Pratama Widodo', 'Muhamad Zakky', 'Tashya Aulia'],
    category: 'IoT',
    technologies: ['ESP32', 'TDS Sensor', 'MQTT', 'Firebase Realtime Database', 'Actuators'],

    title: {
      id: 'ZalaSmart — Smart Hydroponics',
      en: 'ZalaSmart — Smart Hydroponics',
    },
    description: {
      id: 'Sistem hidroponik pintar untuk pemantauan dan pengendalian kondisi budidaya tanaman.',
      en: 'Smart hydroponic system for monitoring and controlling plant cultivation conditions.',
    },
    overview: {
      id: 'ZalaSmart adalah sistem hidroponik pintar yang mengintegrasikan sensor, komunikasi data, dan aktuator untuk memantau serta mengendalikan kondisi budidaya tanaman secara otomatis.',
      en: 'ZalaSmart is a smart hydroponic system that integrates sensors, data communication, and actuators to monitor and control plant cultivation conditions automatically.',
    },
    problem: {
      id: 'Pemantauan manual pada sistem hidroponik membutuhkan waktu dan tenaga, serta rawan terhadap kesalahan pembacaan yang dapat memengaruhi kualitas tanaman.',
      en: 'Manual monitoring of hydroponic systems is time-consuming and error-prone, potentially affecting plant quality.',
    },
    solution: {
      id: 'Membangun sistem berbasis ESP32 yang menggunakan sensor TDS dan sensor lainnya untuk membaca kondisi nutrisi tanaman, mengirimkan data melalui MQTT ke Firebase Realtime Database, dan mengaktifkan aktuator secara otomatis berdasarkan parameter yang telah ditentukan.',
      en: 'Building an ESP32-based system that uses TDS and other sensors to read plant nutrient conditions, sends data via MQTT to Firebase Realtime Database, and activates actuators automatically based on predefined parameters.',
    },
    contribution: {
      id: 'Terlibat dalam pengembangan integrasi sensor, komunikasi data melalui MQTT, dan pengaturan aktuator berdasarkan pembacaan sensor.',
      en: 'Involved in the development of sensor integration, MQTT data communication, and actuator control based on sensor readings.',
    },
    implementation: {
      id: 'Sistem menggunakan mikrokontroler ESP32 yang terhubung dengan sensor TDS untuk mengukur konsentrasi nutrisi. Data dikirim melalui protokol MQTT ke Firebase Realtime Database untuk penyimpanan dan pemantauan. Aktuator dikendalikan secara otomatis berdasarkan ambang batas parameter yang telah dikonfigurasi.',
      en: 'The system uses an ESP32 microcontroller connected to TDS sensors for measuring nutrient concentration. Data is sent via MQTT protocol to Firebase Realtime Database for storage and monitoring. Actuators are controlled automatically based on configured parameter thresholds.',
    },
    status: {
      id: 'Dalam pengembangan',
      en: 'In development',
    },
  },
  {
    id: 'benihnusa',
    videoUrl: 'https://youtu.be/BEHFmz51890',
    team: ['Asyam Zahy Pratama Widodo', 'Khalifa Maulana', 'Tashya Aulia'],
    category: 'Blockchain',
    technologies: ['Hyperledger Fabric', 'Digital Passport', 'QR Code', 'Blockchain'],

    title: {
      id: 'BenihNusa — Sertifikasi & Traceability Bibit Sawit',
      en: 'BenihNusa — Palm Oil Seed Certification & Traceability',
    },
    description: {
      id: 'Rancang bangun sistem sertifikasi dan traceability bibit sawit berbasis Hyperledger Fabric.',
      en: 'Design and development of a Hyperledger Fabric-based palm oil seed certification and traceability system.',
    },
    overview: {
      id: 'BenihNusa merupakan rancang bangun sistem sertifikasi dan traceability bibit sawit yang menggunakan teknologi Hyperledger Fabric untuk mencatat alur persetujuan antarpihak, digital passport, QR code, dan pencatatan traceability secara transparan.',
      en: 'BenihNusa is a palm oil seed certification and traceability system design that uses Hyperledger Fabric technology to record inter-party approval flows, digital passports, QR codes, and traceability records transparently.',
    },
    problem: {
      id: 'Rantai pasok bibit sawit memerlukan transparansi dan akuntabilitas dalam proses sertifikasi serta pelacakan asal-usul bibit untuk menjaga kualitas dan kepercayaan antarpihak.',
      en: 'The palm oil seed supply chain requires transparency and accountability in the certification process and seed origin tracking to maintain quality and inter-party trust.',
    },
    solution: {
      id: 'Merancang sistem berbasis Hyperledger Fabric yang mendukung alur persetujuan antarpihak, pencatatan digital passport untuk setiap bibit, pelacakan melalui QR code, serta pencatatan traceability yang tidak dapat diubah pada blockchain.',
      en: 'Designing a Hyperledger Fabric-based system supporting inter-party approval workflows, digital passport records for each seed, QR code tracking, and immutable traceability records on the blockchain.',
    },
    contribution: {
      id: 'Merancang arsitektur sistem, alur persetujuan antarpihak, dan mekanisme pencatatan traceability pada blockchain.',
      en: 'Designing the system architecture, inter-party approval workflows, and blockchain traceability recording mechanisms.',
    },
    implementation: {
      id: 'Sistem dirancang dengan menggunakan Hyperledger Fabric sebagai platform blockchain. Setiap bibit sawit memiliki digital passport yang mencatat informasi sertifikasi. QR code digunakan untuk memudahkan pelacakan. Alur persetujuan melibatkan beberapa pihak yang berperan dalam rantai pasok, dengan semua pencatatan tersimpan secara transparan dan tidak dapat diubah pada blockchain.',
      en: 'The system is designed using Hyperledger Fabric as the blockchain platform. Each palm oil seed has a digital passport recording certification information. QR codes are used for easy tracking. The approval flow involves multiple parties in the supply chain, with all records stored transparently and immutably on the blockchain.',
    },
    status: {
      id: 'Rancang bangun (desain sistem)',
      en: 'System design phase',
    },
  },
  {
    id: 'adaptive-traffic',
    videoUrl: 'https://youtu.be/WdU8SicieGI',
    team: ['Asyam Zahy Pratama Widodo', 'Muhamad Zakky', 'Tashya Aulia'],
    category: 'AI/ML',
    technologies: ['Reinforcement Learning', 'Python', 'Simulation', 'Traffic Control'],

    title: {
      id: 'Adaptive Traffic Light System',
      en: 'Adaptive Traffic Light System',
    },
    description: {
      id: 'Sistem lampu lalu lintas adaptif berbasis Reinforcement Learning untuk pengaturan kendaraan searah secara bergantian.',
      en: 'An adaptive traffic light system based on Reinforcement Learning for alternate one-way vehicle flow control.',
    },
    overview: {
      id: 'Proyek ini mengembangkan sistem lampu lalu lintas adaptif yang menggunakan pendekatan Reinforcement Learning untuk mengoptimalkan pengaturan durasi lampu lalu lintas pada alur kendaraan searah secara bergantian.',
      en: 'This project develops an adaptive traffic light system using a Reinforcement Learning approach to optimize traffic light duration for alternate one-way vehicle flow.',
    },
    problem: {
      id: 'Sistem lampu lalu lintas konvensional menggunakan durasi tetap yang tidak mempertimbangkan kepadatan kendaraan secara real-time, sehingga kurang efisien dalam mengelola arus lalu lintas.',
      en: 'Conventional traffic light systems use fixed durations that do not consider real-time vehicle density, making them less efficient in managing traffic flow.',
    },
    solution: {
      id: 'Menerapkan algoritma Reinforcement Learning yang memungkinkan sistem belajar mengoptimalkan durasi lampu lalu lintas berdasarkan kondisi arus kendaraan yang diamati melalui simulasi.',
      en: 'Implementing a Reinforcement Learning algorithm that enables the system to learn and optimize traffic light durations based on observed vehicle flow conditions through simulation.',
    },
    contribution: {
      id: 'Terlibat dalam pengembangan model Reinforcement Learning, perancangan simulasi, dan analisis hasil pengujian.',
      en: 'Involved in the development of the Reinforcement Learning model, simulation design, and test result analysis.',
    },
    implementation: {
      id: 'Model Reinforcement Learning dilatih menggunakan lingkungan simulasi lalu lintas. Agen mempelajari pola kepadatan kendaraan dan mengoptimalkan durasi fase lampu lalu lintas untuk meminimalkan waktu tunggu kendaraan.',
      en: 'The Reinforcement Learning model is trained using a traffic simulation environment. The agent learns vehicle density patterns and optimizes traffic light phase durations to minimize vehicle waiting time.',
    },
    status: {
      id: 'Selesai (simulasi)',
      en: 'Completed (simulation)',
    },
  },
  {
    id: 'hydroponic-anomaly',
    videoUrl: 'https://youtu.be/JAjv9ic-E_k',
    team: ['Asyam Zahy Pratama Widodo', 'Muhamad Zakky', 'M. Ridho Saputra'],
    category: 'AI/ML',
    technologies: ['YOLO', 'MQTT', 'Computer Vision', 'Python', 'Precision Farming'],

    title: {
      id: 'Hydroponic Anomaly Detection',
      en: 'Hydroponic Anomaly Detection',
    },
    description: {
      id: 'Deteksi anomali tanaman hidroponik berbasis YOLO dan MQTT untuk mendukung precision farming.',
      en: 'Hydroponic plant anomaly detection based on YOLO and MQTT to support precision farming.',
    },
    overview: {
      id: 'Proyek ini mengembangkan sistem deteksi anomali pada tanaman hidroponik menggunakan model computer vision YOLO yang terintegrasi dengan MQTT untuk pengiriman data, mendukung pemantauan otomatis dalam precision farming.',
      en: 'This project develops an anomaly detection system for hydroponic plants using the YOLO computer vision model integrated with MQTT for data transmission, supporting automated monitoring in precision farming.',
    },
    problem: {
      id: 'Deteksi dini anomali pada tanaman hidroponik secara manual sulit dilakukan secara konsisten dan membutuhkan waktu yang banyak, sehingga perlu pendekatan otomatis.',
      en: 'Early detection of anomalies in hydroponic plants is difficult to perform consistently manually and requires significant time, necessitating an automated approach.',
    },
    solution: {
      id: 'Menggunakan model YOLO untuk mendeteksi anomali visual pada tanaman hidroponik secara otomatis, dengan data hasil deteksi dikirimkan melalui protokol MQTT untuk pemantauan jarak jauh.',
      en: 'Using the YOLO model to automatically detect visual anomalies in hydroponic plants, with detection results sent via MQTT protocol for remote monitoring.',
    },
    contribution: {
      id: 'Terlibat dalam implementasi model computer vision, integrasi MQTT, dan pengujian sistem deteksi.',
      en: 'Involved in the implementation of the computer vision model, MQTT integration, and detection system testing.',
    },
    implementation: {
      id: 'Sistem menggunakan kamera untuk menangkap gambar tanaman secara berkala. Model YOLO memproses gambar untuk mengidentifikasi anomali visual. Hasil deteksi dikirimkan melalui protokol MQTT ke dashboard pemantauan untuk tindakan lebih lanjut.',
      en: 'The system uses cameras to capture plant images periodically. The YOLO model processes images to identify visual anomalies. Detection results are sent via MQTT protocol to a monitoring dashboard for further action.',
    },
    status: {
      id: 'Dalam pengembangan',
      en: 'In development',
    },
  },
];

export const projectCategories: ProjectCategory[] = ['IoT', 'Blockchain', 'AI/ML', 'Networking'];

/** Ambil ID video dari link youtu.be atau youtube.com/watch?v= */
export function getYoutubeId(url?: string): string | null {
  if (!url) return null;
  const m = url.match(/(?:youtu\.be\/|[?&]v=|embed\/)([\w-]{11})/);
  return m ? m[1] : null;
}

/** Dosen pembimbing, tampil di semua proyek.
 *  Ganti url dengan alamat profil beliau di pcr.ac.id jika berbeda. */
export const SUPERVISOR = {
  name: 'Dr. Eng. Yoanda Alim Syahbana ST, M.Sc.',
  url: 'https://pcr.ac.id',
};
