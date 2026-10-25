import { useLanguage } from '../context/LanguageContext';
import Section from '../components/Section';

const EMAIL = 'asyamzahypratamawidodo@gmail.com';

/* Isi url untuk menampilkan tautan. Yang masih kosong otomatis disembunyikan. */
const socials = [
  { label: 'GitHub', url: '' },
  { label: 'LinkedIn', url: '' },
  { label: 'Instagram', url: '' },
];

export default function Contact() {
  const { t } = useLanguage();
  const visibleSocials = socials.filter((s) => s.url);

  return (
    <Section id="contact" title={t.contact.title} subtitle={t.contact.subtitle}>
      <a
        href={`mailto:${EMAIL}`}
        className="break-all font-serif text-2xl leading-snug tracking-tight text-ink underline decoration-line decoration-1 underline-offset-[10px] transition-colors duration-200 hover:decoration-accent sm:text-4xl"
        id="contact-email-btn"
      >
        {EMAIL}
      </a>

      {visibleSocials.length > 0 && (
        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          {visibleSocials.map((s) => (
            <li key={s.label}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted underline decoration-line underline-offset-[6px] transition-colors hover:text-ink hover:decoration-accent"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
