import { useLanguage } from '../context/LanguageContext';
import Section from '../components/Section';

export default function About() {
  const { t } = useLanguage();

  return (
    <Section id="about" title={t.about.title}>
      <div className="max-w-2xl space-y-6 font-serif text-lg leading-[1.75] text-ink sm:text-xl">
        {t.about.description.split('\n\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <dl className="mt-14 max-w-2xl">
        <Fact label={t.about.education}>
          <p className="text-ink">{t.about.degree}</p>
          <p className="text-muted">{t.about.institution}</p>
          <p className="mt-1 text-sm text-faint">{t.about.background}</p>
        </Fact>
        <Fact label={t.about.gpaLabel}>
          <p className="text-ink">{t.about.gpa}</p>
        </Fact>
        <Fact label={t.about.focus}>
          <p className="text-ink">{t.about.focusValue}</p>
        </Fact>
      </dl>
    </Section>
  );
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 border-t border-line py-5 sm:grid-cols-[10rem_1fr] sm:gap-6 last:border-b">
      <dt className="text-sm text-faint">{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}
