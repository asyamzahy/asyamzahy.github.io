import { useLanguage } from '../context/LanguageContext';
import Section from '../components/Section';

export default function About() {
  const { t } = useLanguage();

  return (
    <Section id="about" title={t.about.title}>
      <p className="max-w-2xl font-serif text-xl leading-[1.7] text-ink sm:text-[1.375rem]">
        {t.about.description}
      </p>

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

      <p className="mt-10 max-w-2xl border-l border-line pl-5 font-serif text-base italic leading-relaxed text-faint">
        {t.about.note}
      </p>
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
