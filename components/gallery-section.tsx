'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Volume2, VolumeX, ImageIcon, X, ZoomIn } from 'lucide-react';

type GalleryItem =
  | { type: 'video'; src: string; title: string; subtitle: string; span: number }
  | { type: 'image'; src: string; title: string; subtitle: string; span: number };

const items: GalleryItem[] = [
  {
    type: 'video',
    src: '/Cliente nuevo, cambios desde el primer día con nosotros.mp4',
    title: 'Cliente nuevo',
    subtitle: 'Cambios desde el primer día con nosotros',
    span: 3,
  },
  {
    type: 'image',
    src: '/9d37490c-d948-4869-b6ca-3b77d86ae4df.jpg',
    title: 'Nuestras instalaciones',
    subtitle: 'Albercas diseñadas con calidad',
    span: 2,
  },
  {
    type: 'video',
    src: '/HAZ TU PEDIDO.mp4',
    title: 'Haz tu pedido',
    subtitle: 'Fácil, rápido y seguro',
    span: 5,
  },
];

function VideoCard({ item }: { item: Extract<GalleryItem, { type: 'video' }> }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const handlePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <div
      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0A1F3C] shadow-2xl cursor-pointer transition-transform duration-300 hover:-translate-y-1 aspect-video"
      style={{ gridColumn: `span ${item.span}` }}
      onClick={handlePlay}
    >
      <video
        ref={videoRef}
        src={item.src}
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        onEnded={() => setPlaying(false)}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F3C]/80 via-transparent to-transparent pointer-events-none" />

      {/* Play / Pause button */}
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:bg-[#0EA5E9]/70">
            <Play className="w-7 h-7 text-white fill-white translate-x-0.5" />
          </div>
        </div>
      )}

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between pointer-events-none">
        <div>
          <p className="text-white font-black text-lg leading-tight">{item.title}</p>
          <p className="text-white/70 text-sm mt-0.5">{item.subtitle}</p>
        </div>
        <button
          onClick={toggleMute}
          className="pointer-events-auto w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          aria-label={muted ? 'Activar sonido' : 'Silenciar'}
        >
          {muted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
        </button>
      </div>

      {/* Playing indicator */}
      {playing && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0EA5E9]/80 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-xs text-white font-bold tracking-wider uppercase">Reproduciendo</span>
        </div>
      )}
    </div>
  );
}

function ImageCard({
  item,
  onOpen,
}: {
  item: Extract<GalleryItem, { type: 'image' }>;
  onOpen: (src: string, title: string) => void;
}) {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-300 hover:-translate-y-1 aspect-video cursor-zoom-in"
      style={{ gridColumn: `span ${item.span}` }}
      onClick={() => onOpen(item.src, item.title)}
    >
      <img
        src={item.src}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F3C]/80 via-transparent to-transparent" />

      {/* Badges */}
      <div className="absolute top-4 left-4">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
          <ImageIcon className="w-3 h-3 text-white" />
          <span className="text-xs text-white font-bold tracking-wider uppercase">Foto</span>
        </div>
      </div>
      {/* Zoom hint on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
          <ZoomIn className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-white font-black text-lg leading-tight">{item.title}</p>
        <p className="text-white/70 text-sm mt-0.5">{item.subtitle}</p>
      </div>
    </div>
  );
}

function Lightbox({ src, title, onClose }: { src: string; title: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center transition-colors"
        aria-label="Cerrar"
      >
        <X className="w-5 h-5 text-white" />
      </button>

      {/* Image */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full mx-6 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={title}
          className="w-full h-auto max-h-[85vh] object-contain"
        />
        {title && (
          <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-black/70 to-transparent">
            <p className="text-white font-black text-lg">{title}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);

  return (
    <section id="galeria" className="py-24 bg-[#0A1F3C] relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0EA5E9]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#38BDF8]/6 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#38BDF8] mb-3">
            Galería
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Nuestro trabajo{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#7DD3FC]">
              en acción
            </span>
          </h2>
          <p className="text-white/50 mt-3 max-w-lg">
            Conoce de cerca los resultados que logramos para nuestros clientes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {items.map((item) =>
            item.type === 'video' ? (
              <VideoCard key={item.src} item={item} />
            ) : (
              <ImageCard
                key={item.src}
                item={item}
                onOpen={(src, title) => setLightbox({ src, title })}
              />
            )
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          title={lightbox.title}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
