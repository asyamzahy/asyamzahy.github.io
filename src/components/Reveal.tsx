import { useEffect, useRef, useState } from 'react';
import type { ElementType, ReactNode } from 'react';

interface RevealProps {
  as?: ElementType;
  className?: string;
  /** Jeda dalam ms, dipakai hanya bila perlu (mis. kolom isi setelah judul). */
  delay?: number;
  children: ReactNode;
}

/* Fade + naik pendek saat elemen pertama kali masuk viewport. Hanya sekali:
   setelah terlihat, observer dilepas sehingga tidak menghilang lagi saat scroll naik. */
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        // Elemen yang sudah terlewati (di atas viewport) langsung ditampilkan
        if (entries.some((e) => e.isIntersecting || e.boundingClientRect.top < 0)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
