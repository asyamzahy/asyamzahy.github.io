import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Section from '../components/Section';

const EMAIL = 'asyamzahypratamawidodo@gmail.com';

/* Isi url untuk menampilkan tautan. Yang url-nya kosong otomatis disembunyikan. */
const socials = [
  {
    label: { id: 'Instagram', en: 'Instagram' },
    handle: { id: '@asyamzahypratamawidodo', en: '@asyamzahypratamawidodo' },
    url: 'https://www.instagram.com/asyamzahypratamawidodo',
  },
  {
    label: { id: 'YouTube Kampus', en: 'YouTube (Campus)' },
    handle: { id: '@ASYAMZAHYPRATAMAWIDODO-b2d', en: '@ASYAMZAHYPRATAMAWIDODO-b2d' },
    url: 'https://www.youtube.com/@ASYAMZAHYPRATAMAWIDODO-b2d',
  },
  {
    label: { id: 'YouTube Pribadi', en: 'YouTube (Personal)' },
    handle: { id: '@asyamzahypratamawidodo7397', en: '@asyamzahypratamawidodo7397' },
    url: 'https://www.youtube.com/@asyamzahypratamawidodo7397',
  },
  {
    label: { id: 'Facebook', en: 'Facebook' },
    handle: { id: 'Lihat profil', en: 'View profile' },
    url: 'https://www.facebook.com/share/19jgV9ztLR/',
  },
  { label: { id: 'GitHub', en: 'GitHub' }, handle: { id: '', en: '' }, url: '' },
  { label: { id: 'LinkedIn', en: 'LinkedIn' }, handle: { id: '', en: '' }, url: '' },
];

export default function Contact() {
  const { t, lang } = useLanguage();
  const l = lang as 'id' | 'en';
  const visibleSocials = socials.filter((s) => s.url);

  return (
    <Section id="contact" title={t.contact.title} subtitle={t.contact.subtitle}>
      <a
        href={`mailto:${EMAIL}`}
        className="break-words font-serif text-[1.1rem] leading-snug tracking-tight text-ink underline decoration-line decoration-1 underline-offset-[10px] transition-colors duration-200 hover:decoration-accent min-[400px]:text-xl sm:text-3xl lg:text-4xl"
        id="contact-email-btn"
      >
        {EMAIL}
      </a>

      {visibleSocials.length > 0 && (
        <div className="mt-16">
          <h3 className="mb-4 text-sm text-faint">{l === 'id' ? 'Media sosial' : 'Social media'}</h3>
          <ul className="border-b border-line">
            {visibleSocials.map((s) => (
              <li key={s.label.id} className="border-t border-line">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-6 py-5"
                >
                  <span className="whitespace-nowrap font-medium text-ink">{s.label[l]}</span>
                  <span className="flex min-w-0 items-center gap-3 text-sm text-muted transition-colors duration-200 group-hover:text-ink">
                    <span className="hidden truncate sm:inline">{s.handle[l]}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-faint transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
