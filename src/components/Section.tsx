import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  /* false bila isi section sudah memakai <Reveal> sendiri per blok */
  revealContent?: boolean;
}

/* Judul di kolom kiri, isi di kolom kanan. Dipakai semua section kecuali hero. */
export default function Section({ id, title, subtitle, children, revealContent = true }: SectionProps) {
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[15rem_1fr] lg:gap-16">
        <Reveal as="header" className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-serif text-3xl tracking-tight text-ink sm:text-[2rem] sm:leading-tight">
            {title}
          </h2>
          {subtitle && <p className="mt-3 text-sm leading-relaxed text-faint">{subtitle}</p>}
        </Reveal>
        {revealContent ? (
          <Reveal className="min-w-0" delay={80}>
            {children}
          </Reveal>
        ) : (
          <div className="min-w-0">{children}</div>
        )}
      </div>
    </section>
  );
}
