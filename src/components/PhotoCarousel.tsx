import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PhotoCarouselProps {
  photos: string[];
  alt: string;
}

/* Foto bisa digeser dengan swipe (HP) atau tombol/titik (desktop). Memakai scroll-snap bawaan browser. */
export default function PhotoCarousel({ photos, alt }: PhotoCarouselProps) {
  const { t } = useLanguage();
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setIndex(Math.round(el.scrollLeft / el.clientWidth));
      });
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      el.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const goTo = useCallback((i: number) => {
    const el = track.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: 'auto' });
  }, []);

  if (photos.length === 0) return null;
  const many = photos.length > 1;

  return (
    <div className="mt-6 max-w-xl" role="group" aria-roledescription="carousel" aria-label={alt}>
      <div className="relative">
        <div
          ref={track}
          className="flex snap-x snap-mandatory overflow-x-auto rounded-md bg-surface motion-safe:scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {photos.map((src, i) => (
            <div key={src} className="aspect-[4/3] w-full shrink-0 snap-center">
              <img
                src={src}
                alt={`${alt} (${i + 1}/${photos.length})`}
                loading="lazy"
                draggable={false}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {many && (
          <>
            <button
              onClick={() => goTo(index - 1)}
              disabled={index === 0}
              aria-label={t.activities.prevPhoto}
              className="absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-paper/85 p-1.5 text-ink backdrop-blur-sm transition-opacity duration-200 hover:bg-paper disabled:pointer-events-none disabled:opacity-0 sm:block"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => goTo(index + 1)}
              disabled={index === photos.length - 1}
              aria-label={t.activities.nextPhoto}
              className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-paper/85 p-1.5 text-ink backdrop-blur-sm transition-opacity duration-200 hover:bg-paper disabled:pointer-events-none disabled:opacity-0 sm:block"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}
      </div>

      {many && (
        <div className="mt-3 flex items-center gap-3">
          <div className="flex gap-1.5">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`${i + 1} / ${photos.length}`}
                aria-current={i === index ? 'true' : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-4 bg-ink' : 'w-1.5 bg-line hover:bg-faint'
                }`}
              />
            ))}
          </div>
          <span className="text-xs tabular-nums text-faint">
            {index + 1} / {photos.length}
          </span>
        </div>
      )}
    </div>
  );
}
