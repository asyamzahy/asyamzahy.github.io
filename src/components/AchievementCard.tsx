import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import type { Achievement } from '../data/achievements';
import type { Lang } from '../context/LanguageContext';
import { useLanguage } from '../context/LanguageContext';

/* Gambar sertifikat dicari di public/images/sertifikat/<id>.jpg (atau .png / .webp).
   Selama file belum ada, tidak ada yang tampil. */
const EXTENSIONS = ['jpg', 'png', 'webp'];

export default function AchievementCard({ achievement }: { achievement: Achievement }) {
  const { lang, t } = useLanguage();
  const l = lang as Lang;
  const [extIndex, setExtIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);

  const src =
    extIndex < EXTENSIONS.length
      ? `/images/sertifikat/${achievement.id}.${EXTENSIONS[extIndex]}`
      : null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <li className="grid gap-1 border-t border-line py-6 sm:grid-cols-[4.5rem_1fr_auto] sm:gap-6">
      <span className="text-sm tabular-nums text-faint">{achievement.year}</span>
      <div>
        <h4 className="font-medium text-ink">{achievement.title[l]}</h4>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{achievement.description[l]}</p>
      </div>

      {src && (
        <button
          onClick={() => setOpen(true)}
          aria-label={`${t.achievements.viewCertificate}: ${achievement.title[l]}`}
          className={`mt-3 h-20 w-28 overflow-hidden rounded border border-line bg-surface transition-colors duration-200 hover:border-accent sm:mt-0 ${
            loaded ? 'block' : 'hidden'
          }`}
        >
          <img
            src={src}
            alt=""
            className="h-full w-full object-cover"
            onLoad={() => setLoaded(true)}
            onError={() => setExtIndex((i) => i + 1)}
          />
        </button>
      )}

      <AnimatePresence>
        {open && src && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm sm:p-10"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={achievement.title[l]}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-paper/90 p-2 text-ink transition-opacity hover:opacity-80 sm:right-8 sm:top-8"
              aria-label={t.achievements.closeCertificate}
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={src}
              alt={achievement.title[l]}
              className="max-h-[88vh] max-w-full rounded-md bg-paper object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
