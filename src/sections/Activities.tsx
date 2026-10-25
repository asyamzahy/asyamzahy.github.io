import { useLanguage } from '../context/LanguageContext';
import type { Lang } from '../context/LanguageContext';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import PhotoCarousel from '../components/PhotoCarousel';
import { activities, organization, getActivityPhotos } from '../data/activities';
import type { Activity } from '../data/activities';

function ActivityItem({ activity }: { activity: Activity }) {
  const { lang } = useLanguage();
  const l = lang as Lang;
  const photos = getActivityPhotos(activity.id);

  return (
    <Reveal as="article" className="border-t border-line py-8 first:border-t-0 first:pt-0">
      <h4 className="font-medium leading-snug text-ink">{activity.title[l]}</h4>
      {activity.meta && <p className="mt-1.5 text-sm text-faint">{activity.meta[l]}</p>}
      <p className="mt-4 max-w-xl leading-relaxed text-muted">{activity.description[l]}</p>
      <PhotoCarousel photos={photos} alt={activity.title[l]} />
    </Reveal>
  );
}

export default function Activities() {
  const { t, lang } = useLanguage();
  const l = lang as Lang;

  return (
    <Section id="activities" title={t.activities.title} subtitle={t.activities.subtitle} revealContent={false}>
      <div className="space-y-16">
        <div>
          <Reveal>
            <h3 className="font-serif text-xl text-ink">{t.activities.groupOrg}</h3>
            <p className="mb-6 mt-2 text-sm text-faint">
              {organization.name} · {organization.role[l]}, {organization.period}
            </p>
          </Reveal>
          {activities
            .filter((a) => a.group === 'org')
            .map((a) => (
              <ActivityItem key={a.id} activity={a} />
            ))}
        </div>

        <div>
          <Reveal>
            <h3 className="mb-6 font-serif text-xl text-ink">{t.activities.groupCommunity}</h3>
          </Reveal>
          {activities
            .filter((a) => a.group === 'community')
            .map((a) => (
              <ActivityItem key={a.id} activity={a} />
            ))}
        </div>
      </div>
    </Section>
  );
}
