'use client';

import { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';

// ─── Dados dos vídeos (7 vídeos = equilíbrio 3-1-3) ───────────────────────────
const VIDEOS = [
  {
    id: 'ENt1oyB45Rw',
    title: 'Vajrapani',
    label: 'Cover Animada para EP',
  },
  {
    id: '9R3Nyco7vbU',
    title: 'Absycho',
    label: 'Release Animado para Lançamento',
  },
  {
    id: '2-_BK99qF4c',
    title: 'Astral Labyrinth EP',
    label: 'Cover Animada para EP',
  },
  {
    id: 'l5VvkC5kaT0',
    title: 'Agya Sounds Label Party',
    label: 'Identidade Audiovisual — Open Air',
  },
  {
    id: 'T5BR6dGwMGs',
    title: 'Agya Effect',
    label: 'Cover Animado para Evento - Nekrópolis',
  },
  {
    id: '3LkczcVHpoY',
    title: 'Obscure Crew - Indoor',
    label: 'Flyer Animado para Evento',
  },
  {
    id: 'ku6VhdKyBv8',
    title: 'Khandroma EP',
    label: 'Cover Animada para EP',
  },
];

// ─── Transform 3D com Proporção Áurea (φ = 1.618) ─────────────────────────────
function getTransform(position: number): string {
  const phi = 1.618;
  const baseX = 160;
  
  const transforms: Record<number, string> = {
    0: `translateX(-${baseX * phi * 3}px) translateZ(-${baseX * phi * 2}px) rotateY(50deg) scale(0.5)`,
    1: `translateX(-${baseX * phi * 2}px) translateZ(-${baseX * phi}px) rotateY(30deg) scale(0.7)`,
    2: `translateX(-${baseX * phi}px) translateZ(-${baseX * 0.3}px) rotateY(10deg) scale(0.9)`,
    3: `translateX(0px) translateZ(${baseX}px) rotateY(0deg) scale(1.2)`,
    4: `translateX(${baseX * phi}px) translateZ(-${baseX * 0.3}px) rotateY(-10deg) scale(0.9)`,
    5: `translateX(${baseX * phi * 2}px) translateZ(-${baseX * phi}px) rotateY(-30deg) scale(0.7)`,
    6: `translateX(${baseX * phi * 3}px) translateZ(-${baseX * phi * 2}px) rotateY(-50deg) scale(0.5)`,
  };
  return transforms[position] ?? '';
}

function getOpacity(position: number): number {
  return { 
    0: 0.15, 1: 0.35, 2: 0.65, 3: 1, 4: 0.65, 5: 0.35, 6: 0.15 
  }[position] ?? 1;
}

function getZIndex(position: number): number {
  return { 
    0: 5, 1: 10, 2: 20, 3: 50, 4: 20, 5: 10, 6: 5 
  }[position] ?? 10;
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
  const isClickable = position !== 3;

  return (
    <div
      onClick={isClickable ? onClick : undefined}
      className={`absolute rounded-[2rem] overflow-hidden ${isClickable ? 'cursor-pointer hover:brightness-110' : ''}`}
      style={{
        transform: getTransform(position),
        opacity: getOpacity(position),
        zIndex: getZIndex(position),
        transition: 'all 0.7s cubic-bezier(0.19, 1, 0.22, 1)',
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
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${videoId}`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          allow="autoplay; fullscreen"
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
  const [activeIndex, setActiveIndex] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVideoId, setModalVideoId] = useState<string | null>(null);
  const total = VIDEOS.length;

  const prev = useCallback(() => setActiveIndex((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setActiveIndex((i) => (i + 1) % total), [total]);

  // Navegação por teclado (setas)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen) return;
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [prev, next, isModalOpen]);

  // Fecha modal com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isModalOpen]);

  // Bloqueia scroll quando modal está aberto
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isModalOpen]);

  const openModal = useCallback((videoId: string) => {
    setModalVideoId(videoId);
    setIsModalOpen(true);
  }, []);

  // getPosition otimizado para 7 vídeos
  function getPosition(videoIndex: number): number {
    const diff = (videoIndex - activeIndex + total) % total;
    if (diff === 0) return 3;
    if (diff === 1) return 4;
    if (diff === 2) return 5;
    if (diff === 3) return 6;
    if (diff === total - 1) return 2;
    if (diff === total - 2) return 1;
    if (diff === total - 3) return 0;
    return 5;
  }

  const currentVideo = modalVideoId ? VIDEOS.find(v => v.id === modalVideoId) : null;

  return (
    <section className="relative w-full py-32 overflow-visible">
      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <SectionHeader 
          title="VÍDEOS PARA EVENTOS E LANÇAMENTOS" 
          description="Ampla experiência criando impacto visual através de stop motion, aftermovies e covers animadas para eventos, artistas e lançamentos." 
          className="mb-20 sm:mb-28"
        />

        <div className="hidden md:block relative">
          <button 
            onClick={prev} 
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            aria-label="Vídeo anterior"
          >
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
                  isCenter={pos === 3}
                  onClick={() => openModal(video.id)}
                />
              );
            })}
          </div>

          <button 
            onClick={next} 
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            aria-label="Próximo vídeo"
          >
            <ChevronRight size={28} className="text-white" />
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory px-4" style={{ scrollbarWidth: 'none' }}>
          {VIDEOS.map((video) => (
            <div 
              key={video.id} 
              className="snap-center shrink-0 relative w-[220px] h-[390px] rounded-[2rem] overflow-hidden border border-white/10 cursor-pointer"
              onClick={() => openModal(video.id)}
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${video.id}`}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                allow="autoplay; fullscreen"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <p className="text-white font-medium">{video.title}</p>
                <p className="text-white/50 text-[10px] uppercase tracking-widest">{video.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL - Vídeo em Tela Cheia */}
      <AnimatePresence>
        {isModalOpen && currentVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative max-w-6xl w-full flex flex-col gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header do Modal */}
              <div className="flex items-center justify-between px-2">
                <div className="text-left">
                  <h3 id="video-modal-title" className="font-gotham font-black text-white text-xl sm:text-2xl uppercase tracking-tighter leading-none">
                    {currentVideo.title}
                  </h3>
                  <p className="font-gotham font-bold text-sky-400 text-xs uppercase tracking-widest mt-1">
                    {currentVideo.label}
                  </p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 bg-white/5 hover:bg-white/20 text-white rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                  aria-label="Fechar vídeo"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Player de Vídeo */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1&rel=0`}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-center px-2">
                <p className="text-white/40 font-gotham text-[10px] uppercase tracking-tighter">
                  © {new Date().getFullYear()} Abner Simão Design Studio
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}