import { useState, type ReactNode } from 'react';

interface SmartImageProps {
  src?: string;
  alt: string;
  className?: string;
  /** Ditampilkan selama gambar belum ada. Kalau kosong, tidak render apa-apa. */
  fallback?: ReactNode;
}

/* Gambar dengan placeholder otomatis: cukup taruh file di public/images/. */
export default function SmartImage({ src, alt, className = '', fallback = null }: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) return <>{fallback}</>;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
