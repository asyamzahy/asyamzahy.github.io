import { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoThumbProps {
  videoId: string;
  alt: string;
  className?: string;
}

/* Thumbnail otomatis dari YouTube + tombol play. Dibungkus link oleh pemanggil. */
export default function VideoThumb({ videoId, alt, className = '' }: VideoThumbProps) {
  // maxresdefault = 16:9 tajam. Kalau tidak tersedia, pakai hqdefault (ada bar hitam, jadi di-zoom).
  const [quality, setQuality] = useState<'maxres' | 'hq' | 'none'>('maxres');

  return (
    <div className={`relative aspect-video w-full overflow-hidden bg-surface ${className}`}>
      {quality !== 'none' && (
        <img
          src={`https://i.ytimg.com/vi/${videoId}/${quality === 'maxres' ? 'maxresdefault' : 'hqdefault'}.jpg`}
          alt={alt}
          loading="lazy"
          onError={() => setQuality(quality === 'maxres' ? 'hq' : 'none')}
          onLoad={(e) => {
            // YouTube mengirim gambar 120x90 sebagai "tidak ada" untuk maxres
            if (quality === 'maxres' && e.currentTarget.naturalWidth <= 120) setQuality('hq');
          }}
          className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
            quality === 'hq' ? 'scale-[1.34] group-hover:scale-[1.38]' : ''
          }`}
        />
      )}
      <span className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/15">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-paper/90 text-ink shadow-sm transition-transform duration-300 group-hover:scale-105">
          <Play className="ml-0.5 h-5 w-5 fill-current" />
        </span>
      </span>
    </div>
  );
}
