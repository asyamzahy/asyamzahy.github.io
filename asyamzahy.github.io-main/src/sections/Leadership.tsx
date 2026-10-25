import { useLanguage } from '../context/LanguageContext';
import type { Lang } from '../context/LanguageContext';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { experiences } from '../data/experiences';

export default function Leadership() {
  const { t, lang } = useLanguage();
  const l = lang as Lang;

  return (
    <Section id="leadership" title={t.leadership.title} subtitle={t.leadership.subtitle} revealContent={false}>
      <div className="space-y-16">
        {experiences.map((exp) => (
          <Reveal as="article" key={exp.id}>
            <h3 className="font-serif text-2xl leading-snug tracking-tight text-ink">
              {exp.organization}
            </h3>
            <p className="mt-2 text-sm text-faint">
              {exp.role[l]}, {exp.period}
            </p>

            <p className="mt-6 max-w-xl leading-relaxed text-muted">{exp.description[l]}</p>

            <ul className="mt-6 max-w-xl list-disc space-y-2.5 pl-5 text-muted marker:text-faint">
              {exp.activities[l].map((activity, j) => (
                <li key={j} className="pl-1 leading-relaxed">
                  {activity}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
