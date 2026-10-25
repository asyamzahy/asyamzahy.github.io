import { useLanguage } from '../context/LanguageContext';
import Section from '../components/Section';

export default function Interests() {
  const { t } = useLanguage();

  return (
    <Section id="interests" title={t.interests.title} subtitle={t.interests.subtitle}>
      <ul className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {t.interests.items.map((item) => (
          <li key={item.title}>
            <h3 className="font-medium text-ink">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
