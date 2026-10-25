import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import SmartImage from '../components/SmartImage';

function go(e: React.MouseEvent, target: string) {
  e.preventDefault();
  document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="pb-24 pt-36 sm:pb-32 sm:pt-44">
      {/* Satu-satunya animasi masuk di halaman ini */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto grid max-w-5xl items-end gap-14 px-6 sm:px-10 lg:grid-cols-[1fr_17rem] lg:gap-20"
      >
        <div>
          <p className="mb-5 text-base text-faint">{t.hero.greeting}</p>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.5rem]">
            {t.hero.name}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">{t.hero.headline}</p>
          <p className="mt-4 text-sm text-faint">{t.hero.subtitle}</p>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {t.hero.fields.map((field) => (
              <li key={field}>{field}</li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#projects"
              onClick={(e) => go(e, '#projects')}
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity duration-200 hover:opacity-85"
              id="cta-projects"
            >
              {t.hero.cta1}
            </a>
            <a
              href="#contact"
              onClick={(e) => go(e, '#contact')}
              className="text-sm text-ink underline decoration-line decoration-1 underline-offset-[6px] transition-colors duration-200 hover:decoration-accent"
              id="cta-contact"
            >
              {t.hero.cta2}
            </a>
          </div>
        </div>

        {/* Foto profil: taruh file di public/images/avatar.jpg */}
        <div className="w-full max-w-[17rem] lg:max-w-none">
          <div className="aspect-[4/5] overflow-hidden rounded-md bg-surface">
            <SmartImage
              src="/images/avatar.jpg"
              alt={t.hero.name}
              className="h-full w-full object-cover"
              fallback={
                <div className="flex h-full w-full items-center justify-center font-serif text-6xl text-faint/60">
                  AZ
                </div>
              }
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
