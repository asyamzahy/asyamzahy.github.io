import type { ReactNode } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Section from '../components/Section';
import { InstagramIcon, YoutubeIcon, FacebookIcon } from '../components/SocialIcons';

interface ContactItem {
  icon: ReactNode;
  /** Teks utama: username atau email */
  name: string;
  /** Keterangan kecil di bawahnya */
  label: { id: string; en: string };
  url: string;
  external?: boolean;
}

/* Tambah, ubah, atau hapus baris di sini. Baris dengan url kosong tidak ditampilkan. */
const items: ContactItem[] = [
  {
    icon: <Mail className="h-5 w-5" strokeWidth={1.6} />,
    name: 'asyamzahypratamawidodo@gmail.com',
    label: { id: 'Email', en: 'Email' },
    url: 'mailto:asyamzahypratamawidodo@gmail.com',
    external: false,
  },
  {
    icon: <InstagramIcon />,
    name: '@asyamzahypratamawidodo',
    label: { id: 'Instagram', en: 'Instagram' },
    url: 'https://www.instagram.com/asyamzahypratamawidodo',
  },
  {
    icon: <YoutubeIcon />,
    name: '@ASYAMZAHYPRATAMAWIDODO-b2d',
    label: { id: 'YouTube Kampus', en: 'YouTube (Campus)' },
    url: 'https://www.youtube.com/@ASYAMZAHYPRATAMAWIDODO-b2d',
  },
  {
    icon: <YoutubeIcon />,
    name: '@asyamzahypratamawidodo7397',
    label: { id: 'YouTube Pribadi', en: 'YouTube (Personal)' },
    url: 'https://www.youtube.com/@asyamzahypratamawidodo7397',
  },
  {
    icon: <FacebookIcon />,
    name: 'Asyam Zahy Pratama Widodo',
    label: { id: 'Facebook', en: 'Facebook' },
    url: 'https://www.facebook.com/share/19jgV9ztLR/',
  },
];

export default function Contact() {
  const { t, lang } = useLanguage();
  const l = lang as 'id' | 'en';

  return (
    <Section id="contact" title={t.contact.title} subtitle={t.contact.subtitle}>
      <ul className="border-b border-line">
        {items
          .filter((item) => item.url)
          .map((item) => (
            <li key={item.url} className="border-t border-line">
              <a
                href={item.url}
                {...(item.external === false
                  ? {}
                  : { target: '_blank', rel: 'noopener noreferrer' })}
                className="group flex items-center gap-5 py-5"
              >
                <span className="shrink-0 text-faint transition-colors duration-200 group-hover:text-accent">
                  {item.icon}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block break-all text-[0.82rem] leading-snug text-ink min-[430px]:text-[0.9rem] sm:text-base">{item.name}</span>
                  <span className="block text-sm text-faint">{item.label[l]}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-faint transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </a>
            </li>
          ))}
      </ul>
    </Section>
  );
}
