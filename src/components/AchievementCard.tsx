import type { Achievement } from '../data/achievements';
import type { Lang } from '../context/LanguageContext';
import { useLanguage } from '../context/LanguageContext';

export default function AchievementCard({ achievement }: { achievement: Achievement }) {
  const { lang } = useLanguage();
  const l = lang as Lang;

  return (
    <li className="grid gap-1 border-t border-line py-6 sm:grid-cols-[4.5rem_1fr] sm:gap-6">
      <span className="text-sm tabular-nums text-faint">{achievement.year}</span>
      <div>
        <h4 className="font-medium text-ink">{achievement.title[l]}</h4>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{achievement.description[l]}</p>
      </div>
    </li>
  );
}
