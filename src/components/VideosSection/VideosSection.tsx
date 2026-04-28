'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ─── Dados dos vídeos ─────────────────────────────────────────────────────────
const VIDEOS = [
  {
    id: 'obscure_wvkern',
    title: 'Obscure Crew',
    label: 'Flyer Animado para Evento',
  },
  {
    id: 'khandroma-introspection-ep-video_evjbot',
    title: 'Khandroma',
    label: 'Cover Animada para EP',
  },
  {
    id: 'agya-sounds-aquarius-edition_jfuqz7',
    title: 'Agya Sounds',
    label: 'Identidade Audiovisual — Open Air',
  },
  {
    id: 'vajrapani-naturaiz_xz2dkb',
    title: 'Vajrapani',
    label: 'Cover Animada para EP',
  },
  {
    id: 'spectral_effects-com-musica_a32py0',
    title: 'Bio Connection Festival',
    label: 'Avatar Animado para DJ',
  },
];

const CLOUDINARY_BASE = 'https://res.cloudinary.com/dq3qu3lv0/video/upload/w_500,h_889,c_fill,g_center';

// ─── Transform 3D Reajustado (Escala Fibonacci) ──────────────────────────────
function getTransform(position: number): string {
  const transforms: Record<number, string> = {
    0: 'translateX(-420px) translateZ(-120px) rotateY(40deg)  scale(0.8)',
    1: 'translateX(-220px) translateZ(-40px) rotateY(20deg)  scale(0.9)',
    2: 'translateX(0px)    translateZ(100px) rotateY(0deg)   scale(1.1)', // Boost no centro
    3: 'translateX(220px)  translateZ(-40px) rotateY(-20deg) scale(0.9)',
    4: 'translateX(420px)  translateZ(-120px) rotateY(-40deg) scale(0.8)',
  };
  return transforms[position] ?? '';
}

function getOpacity(position: number): number {
  return { 0: 0.15, 1: 0.5, 2: 1, 3: 0.5, 4: 0.15 }[position] ?? 1;
}

function getZIndex(position: number): number {
  return { 0: 10, 1: 20, 2: 30, 3: 20, 4: 10 }[position] ?? 10;
}

interface VideoCardProps {
  videoId: string;
  title: string;
  label: string;
  position: number;
  isCenter: boolean;
  onClick: () => void;
}

function VideoCard({ videoId, title, label, position, isCenter, onClick }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.3 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const isClickable = position !== 2;

  return (
    <div
      onClick={isClickable ? onClick : undefined}
      className={`absolute rounded-[2rem] overflow-hidden ${isClickable ? 'cursor-pointer hover:brightness-110' : ''}`}
      style={{
        transform: getTransform(position),
        opacity: getOpacity(position),
        zIndex: getZIndex(position),
        transition: 'all 0.7s cubic-bezier(0.19, 1, 0.22, 1)', // Easing super fluído
      }}
    >
      <div
        className={`
          relative overflow-hidden rounded-[2rem]
          border border-white/10
          bg-gradient-to-b from-white/10 to-white/0
          ${isCenter
            ? 'w-[258px] h-[458px] shadow-[0_0_80px_rgba(56,189,248,0.2)]'
            : 'w-[180px] h-[320px]'
          }
        `}
      >
        <video
          ref={videoRef}
          src={`${CLOUDINARY_BASE}/${videoId}.mp4`}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        
        {isCenter && (
          <div className="absolute top-4 left-4">
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold px-3 py-1.5 rounded-full bg-sky-500/20 backdrop-blur-md border border-sky-400/30 text-sky-400">
              Destaque
            </span>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-white font-medium text-lg tracking-tight leading-tight mb-1">
            {title}
          </p>
          <p className="text-white/40 text-xs tracking-[0.1em] uppercase font-normal">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function VideosSection() {
  const [activeIndex, setActiveIndex] = useState(2);
  const total = VIDEOS.length;

  const prev = useCallback(() => setActiveIndex((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setActiveIndex((i) => (i + 1) % total), [total]);

  function getPosition(videoIndex: number): number {
    const diff = (videoIndex - activeIndex + total) % total;
    if (diff === 0) return 2;
    if (diff === 1) return 3;
    if (diff === 2) return 4;
    if (diff === total - 1) return 1;
    if (diff === total - 2) return 0;
    return 4;
  }

  return (
    <section className="relative w-full py-32 overflow-visible">
      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* HEADER - UNIFICADO COM WEB DESIGN */}
      <div className="flex flex-col items-center gap-4 text-center px-6 mb-16 lg:mb-24">
        <h2 className="font-gotham font-black text-[#075985] dark:text-sky-300 text-[19px] sm:text-4xl uppercase tracking-tighter leading-tight whitespace-nowrap">
  Vídeos para Eventos e Lançamentos
</h2>
        <p className="font-gotham font-medium text-stone-800 dark:text-stone-300 text-base lg:text-lg max-w-3xl leading-relaxed">
          Mais de 10 anos criando impacto visual com motion design, aftermovies 
          e covers animadas para a cena eletrônica e grandes marcas.
        </p>
      </div>

        <div className="hidden md:block relative">
          <button onClick={prev} className="absolute -left-4 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
            <ChevronLeft size={28} className="text-white" />
          </button>

          <div className="flex justify-center items-center relative h-[520px]" style={{ perspective: '1200px' }}>
            {VIDEOS.map((video, index) => {
              const pos = getPosition(index);
              return (
                <VideoCard
                  key={video.id}
                  videoId={video.id}
                  title={video.title}
                  label={video.label}
                  position={pos}
                  isCenter={pos === 2}
                  onClick={() => setActiveIndex(index)}
                />
              );
            })}
          </div>

          <button onClick={next} className="absolute -right-4 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
            <ChevronRight size={28} className="text-white" />
          </button>
        </div>

        {/* Mobile permanece prático e funcional */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory px-4" style={{ scrollbarWidth: 'none' }}>
          {VIDEOS.map((video) => (
            <div key={video.id} className="snap-center shrink-0 relative w-[220px] h-[390px] rounded-[2rem] overflow-hidden border border-white/10">
              <video src={`${CLOUDINARY_BASE}/${video.id}.mp4`} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <p className="text-white font-medium">{video.title}</p>
                <p className="text-white/50 text-[10px] uppercase tracking-widest">{video.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}