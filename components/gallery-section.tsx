'use client';

import { useState, useRef, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, ImageIcon, Video, X, ZoomIn, Filter } from 'lucide-react';

type MediaType = 'video' | 'image';
type Category = 'all' | 'videos' | 'fotos';

type GalleryItem = {
  type: MediaType;
  src: string;
  title: string;
  subtitle: string;
};

const items: GalleryItem[] = [
  // ── Videos ──────────────────────────────────────────────────────────
  {
    type: 'video',
    src: '/media/Cliente nuevo, cambios desde el primer día con nosotros.mp4',
    title: 'Cliente nuevo',
    subtitle: 'Cambios desde el primer día con nosotros',
  },
  {
    type: 'video',
    src: '/media/HAZ TU PEDIDO.mp4',
    title: 'Haz tu pedido',
    subtitle: 'Fácil, rápido y seguro',
  },
  {
    type: 'video',
    src: '/media/Conexión hidráulica y eléctrica.mp4',
    title: 'Conexión hidráulica y eléctrica',
    subtitle: 'Instalación profesional',
  },
  {
    type: 'video',
    src: '/media/Instalación de blower.mp4',
    title: 'Instalación de blower',
    subtitle: 'Equipamiento de alta calidad',
  },
  {
    type: 'video',
    src: '/media/La bitácora mantiene un control sobre los parámetros importantes para la salud del agua y los bañist.mp4',
    title: 'Bitácora de parámetros',
    subtitle: 'Control de salud del agua',
  },
  {
    type: 'video',
    src: '/media/Material filtrante y suavizante.mp4',
    title: 'Material filtrante y suavizante',
    subtitle: 'Tecnología de filtrado avanzada',
  },
  {
    type: 'video',
    src: '/media/materiales filtrantes.mp4',
    title: 'Materiales filtrantes',
    subtitle: 'Sistemas de filtración premium',
  },
  {
    type: 'video',
    src: '/media/Nuestros servicios.mp4',
    title: 'Nuestros servicios',
    subtitle: 'Todo lo que necesita su piscina',
  },
  {
    type: 'video',
    src: '/media/SUMINISTRO DE PRODUCTOS QUIMICOS.mp4',
    title: 'Suministro de productos químicos',
    subtitle: 'Tratamiento del agua de calidad',
  },
  {
    type: 'video',
    src: '/media/Video.mp4',
    title: 'Proyecto destacado',
    subtitle: 'Resultados que impresionan',
  },
  {
    type: 'video',
    src: '/media/Video(1).mp4',
    title: 'Nuestro trabajo',
    subtitle: 'Calidad y profesionalismo',
  },
  {
    type: 'video',
    src: '/media/Video(2).mp4',
    title: 'Proceso de construcción',
    subtitle: 'De la idea a la realidad',
  },
  {
    type: 'video',
    src: '/media/Video(3).mp4',
    title: 'Servicio integral',
    subtitle: 'Soluciones completas para su piscina',
  },
  {
    type: 'video',
    src: '/media/af30ce09a09b4478b724f516672b780a.mov',
    title: 'Instalación en proceso',
    subtitle: 'Trabajo de calidad en cada detalle',
  },
  {
    type: 'video',
    src: '/media/b90e66ff20b3414da75c695cb45b1954.mov',
    title: 'Resultados finales',
    subtitle: 'Piscinas impecables',
  },
  {
    type: 'video',
    src: '/media/copy_24799CB1-E4A5-4485-ADBD-E285001F0A5C.mov',
    title: 'Proyecto residencial',
    subtitle: 'Diseño personalizado',
  },
  {
    type: 'video',
    src: '/media/copy_3E3E920C-ECF4-45CD-846C-141994D0B1FD.mov',
    title: 'Mantenimiento preventivo',
    subtitle: 'Cuidado y limpieza profesional',
  },
  {
    type: 'video',
    src: '/media/copy_44DF654F-B6DB-4B84-90BD-72E85627C0B0.mov',
    title: 'Equipamiento',
    subtitle: 'Sistemas de última generación',
  },
  {
    type: 'video',
    src: '/media/copy_689E996E-3067-4A21-8EB0-45998050248E.mov',
    title: 'Tratamiento del agua',
    subtitle: 'Agua cristalina garantizada',
  },
  {
    type: 'video',
    src: '/media/export_1758569975329.mov',
    title: 'Proyecto completo',
    subtitle: 'Desde el diseño hasta la entrega',
  },
  {
    type: 'video',
    src: '/media/v14044g50000d30amm7og65kn621uak0.mp4',
    title: 'Servicio a domicilio',
    subtitle: 'Atención donde nos necesite',
  },
  {
    type: 'video',
    src: '/media/v14044g50000d3asv3nog65ts6h9tsh0.mp4',
    title: 'Construcción profesional',
    subtitle: 'Expertos con amplia experiencia',
  },
  {
    type: 'video',
    src: '/media/v14044g50000d3ddd7nog65ijng7uvig.mp4',
    title: 'Instalación completa',
    subtitle: 'Todos los sistemas integrados',
  },
  // ── Images ──────────────────────────────────────────────────────────
  {
    type: 'image',
    src: '/media/9d37490c-d948-4869-b6ca-3b77d86ae4df.jpg',
    title: 'Nuestras instalaciones',
    subtitle: 'Piscinas diseñadas con calidad',
  },
  {
    type: 'image',
    src: '/media/29f967cc-7bf8-4f28-ba2b-0b87506a64f7.jpg',
    title: 'Proyecto realizado',
    subtitle: 'Acabados de alto nivel',
  },
];

// ─── VideoCard ────────────────────────────────────────────────────────────────
function VideoCard({ item }: { item: GalleryItem & { type: 'video' } }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
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
      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0A1F3C] shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[#0EA5E9]/20 hover:shadow-2xl w-full aspect-video"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={item.src}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
        onEnded={() => setPlaying(false)}
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F3C]/90 via-transparent to-transparent pointer-events-none" />

      {/* Video badge */}
      <div className="absolute top-3 left-3">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/15">
          <Video className="w-3 h-3 text-[#38BDF8]" />
          <span className="text-[10px] text-white font-bold tracking-wider uppercase">Video</span>
        </div>
      </div>

      {/* Play/Pause */}
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:bg-[#0EA5E9]/70">
            <Play className="w-6 h-6 text-white fill-white translate-x-0.5" />
          </div>
        </div>
      )}
      {playing && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
            <Pause className="w-6 h-6 text-white fill-white" />
          </div>
        </div>
      )}

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between pointer-events-none">
        <div className="flex-1 min-w-0 pr-3">
          <p className="text-white font-black text-sm sm:text-base leading-tight truncate">{item.title}</p>
          <p className="text-white/65 text-xs mt-0.5 truncate">{item.subtitle}</p>
        </div>
        <button
          onClick={toggleMute}
          className="pointer-events-auto flex-shrink-0 w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          aria-label={muted ? 'Activar sonido' : 'Silenciar'}
        >
          {muted ? <VolumeX className="w-3.5 h-3.5 text-white" /> : <Volume2 className="w-3.5 h-3.5 text-white" />}
        </button>
      </div>

      {/* Playing indicator */}
      {playing && (
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0EA5E9]/80 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-[10px] text-white font-bold tracking-wider uppercase">Live</span>
        </div>
      )}
    </div>
  );
}

// ─── ImageCard ────────────────────────────────────────────────────────────────
function ImageCard({
  item,
  onOpen,
}: {
  item: GalleryItem & { type: 'image' };
  onOpen: (src: string, title: string) => void;
}) {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden border border-white/10 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[#0EA5E9]/20 hover:shadow-2xl w-full aspect-video cursor-zoom-in"
      onClick={() => onOpen(item.src, item.title)}
    >
      <img
        src={item.src}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F3C]/90 via-transparent to-transparent" />

      {/* Image badge */}
      <div className="absolute top-3 left-3">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/15">
          <ImageIcon className="w-3 h-3 text-[#38BDF8]" />
          <span className="text-[10px] text-white font-bold tracking-wider uppercase">Foto</span>
        </div>
      </div>

      {/* Zoom */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
          <ZoomIn className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-white font-black text-sm sm:text-base leading-tight truncate">{item.title}</p>
        <p className="text-white/65 text-xs mt-0.5 truncate">{item.subtitle}</p>
      </div>
    </div>
  );
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({ src, title, onClose }: { src: string; title: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/92 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center transition-colors"
        aria-label="Cerrar"
      >
        <X className="w-5 h-5 text-white" />
      </button>

      <div
        className="relative max-w-5xl max-h-[88vh] w-full mx-4 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={src} alt={title} className="w-full h-auto max-h-[88vh] object-contain" />
        {title && (
          <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-black/75 to-transparent">
            <p className="text-white font-black text-lg">{title}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function GallerySection() {
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const filtered = items.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'videos') return item.type === 'video';
    if (activeFilter === 'fotos') return item.type === 'image';
    return true;
  });

  const openLightbox = useCallback((src: string, title: string) => {
    setLightbox({ src, title });
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = '';
  }, []);

  const videoCount = items.filter((i) => i.type === 'video').length;
  const imageCount = items.filter((i) => i.type === 'image').length;

  const filters: { key: Category; label: string; count: number }[] = [
    { key: 'all', label: 'Todo', count: items.length },
    { key: 'videos', label: 'Videos', count: videoCount },
    { key: 'fotos', label: 'Fotos', count: imageCount },
  ];

  return (
    <section id="galeria" className="py-20 sm:py-24 bg-[#0A1F3C] relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0EA5E9]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#38BDF8]/6 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-0 w-48 h-48 bg-[#0EA5E9]/5 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#38BDF8] mb-3">
            Galería
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Nuestro trabajo{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#7DD3FC]">
                  en acción
                </span>
              </h2>
              <p className="text-white/50 mt-3 max-w-lg text-sm sm:text-base">
                Conoce de cerca los resultados que logramos para nuestros clientes.
              </p>
            </div>
            <div className="text-white/40 text-sm hidden sm:block">
              {filtered.length} {filtered.length === 1 ? 'elemento' : 'elementos'}
            </div>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <Filter className="w-4 h-4 text-white/40 flex-shrink-0" />
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-200 ${
                activeFilter === f.key
                  ? 'bg-[#0EA5E9] text-white shadow-lg shadow-[#0EA5E9]/30'
                  : 'bg-white/8 text-white/60 border border-white/10 hover:bg-white/15 hover:text-white'
              }`}
            >
              {f.label}
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full font-black ${
                  activeFilter === f.key ? 'bg-white/25 text-white' : 'bg-white/10 text-white/50'
                }`}
              >
                {f.count}
              </span>
            </button>
          ))}
        </div>

        {/* Responsive Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((item) => (
            <div key={item.src} className="break-inside-avoid">
              {item.type === 'video' ? (
                <VideoCard item={item as GalleryItem & { type: 'video' }} />
              ) : (
                <ImageCard
                  item={item as GalleryItem & { type: 'image' }}
                  onOpen={openLightbox}
                />
              )}
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-white/40">
            <ImageIcon className="w-12 h-12 mx-auto mb-4 opacity-40" />
            <p className="text-lg font-semibold">No hay elementos en esta categoría</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox src={lightbox.src} title={lightbox.title} onClose={closeLightbox} />
      )}
    </section>
  );
}
