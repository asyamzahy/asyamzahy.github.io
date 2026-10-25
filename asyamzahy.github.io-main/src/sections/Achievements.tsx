import { useLanguage } from '../context/LanguageContext';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import AchievementCard from '../components/AchievementCard';
import { achievements } from '../data/achievements';

export default function Achievements() {
  const { t } = useLanguage();

  // Terbaru di atas; urutan asli dipertahankan untuk tahun yang sama
  const byYear = (a: { year: number }, b: { year: number }) => b.year - a.year;
  const competitions = achievements.filter((a) => a.type === 'competition').sort(byYear);
  const certifications = achievements.filter((a) => a.type === 'certification').sort(byYear);

  return (
    <Section id="achievements" title={t.achievements.title} subtitle={t.achievements.subtitle} revealContent={false}>
      <div className="space-y-16">
        <Reveal>
          <h3 className="mb-4 font-serif text-xl text-ink">{t.achievements.competitions}</h3>
          <ul className="border-b border-line">
            {competitions.map((a) => (
              <AchievementCard key={a.id} achievement={a} />
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <h3 className="mb-4 font-serif text-xl text-ink">{t.achievements.certifications}</h3>
          <ul className="border-b border-line">
            {certifications.map((a) => (
              <AchievementCard key={a.id} achievement={a} />
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
