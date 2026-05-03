'use client';

import React, { useCallback, useEffect, useState, type MouseEvent } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { eventosArtistas } from '@/data/eventosArtistas';
import { ChevronLeft, ChevronRight, ExternalLink, X, ZoomIn } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

// ✅ Tipo explícito para os itens do carousel
interface EventoArtista {
  id: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
}

export default function EventosArtistasSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    duration: 40,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<EventoArtista | null>(null);

  // ✅ Link resolver memoizado
  const getProjectLink = useCallback((title: string): string | null => {
    const t = title.toUpperCase();
    if (t.includes('MARRAKECH EXPRESS')) return "https://dreamcrewrecords.bandcamp.com/album/va-marrakech-express";
    if (t.includes('ASTRAL LABYRINTH')) return "https://naturaizrecords.bandcamp.com/album/astral-labyrinth-lunar-pareidolia";
    if (t.includes('NOOPSYBOT') || t.includes('ETERNAL LIE')) return "https://visionaryshamanics.bandcamp.com/album/that-is-not-dead-which-can-eternal-lie-ep";
    return null;
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // ✅ Handler tipado + type guard
  const handleCardClick = useCallback((item: unknown, isActive: boolean) => {
    if (!isActive || typeof item !== 'object' || item === null) return;
    setActiveProject(item as EventoArtista);
    setIsModalOpen(true);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  // ✅ Fecha modal com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isModalOpen]);

  // ✅ Navegação por setas no carousel
  useEffect(() => {
    const handleNav = (e: KeyboardEvent) => {
      if (isModalOpen) return;
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowLeft') { e.preventDefault(); emblaApi?.scrollPrev(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); emblaApi?.scrollNext(); }
    };
    document.addEventListener('keydown', handleNav);
    return () => document.removeEventListener('keydown', handleNav);
  }, [emblaApi, isModalOpen]);

  // ✅ Bloqueia scroll do body quando modal está aberto
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isModalOpen]);

  return (
    <section 
      className="relative w-full pt-2 pb-24 md:py-24 overflow-hidden bg-transparent" 
      aria-labelledby="eventos-artistas-heading"
    >
      {/* ✅ HEADER UNIFICADO */}
      <SectionHeader 
        title="ARTES PARA EVENTOS E ARTISTAS" 
        description="Flyers, capas de álbum e motion design para shows, festivais e lançamentos. Artes que vendem mais ingresso e engajam mais o seu público." 
        className="mb-4 sm:mb-16"
      />

      <div className="relative w-full">
        <div ref={emblaRef} className="overflow-hidden px-4 sm:px-0">
          <div className="flex touch-pan-y pt-6 pb-10 md:py-10" role="list">
            {eventosArtistas.map((item, index) => {
              const isActive = index === selectedIndex;
              
              return (
                <div
                  key={item.id}
                  className="flex-[0_0_72%] sm:flex-[0_0_450px] min-w-0 px-3"
                  style={{ perspective: '1200px' }}
                  role="listitem"
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.05 : 0.85,
                      opacity: isActive ? 1 : 0.35,
                      rotateY: isActive ? 0 : (index < selectedIndex ? 15 : -15),
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => handleCardClick(item, isActive)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleCardClick(item, isActive);
                      }
                    }}
                    tabIndex={isActive ? 0 : -1}
                    role="button"
                    aria-label={`${item.title} - ${item.category}. Clique para ampliar.`}
                    className={`relative w-full bg-gradient-to-b from-sky-100/70 to-white/60 dark:from-sky-900/40 dark:to-slate-900/50 backdrop-blur-xl rounded-[2.5rem] p-4 shadow-2xl border border-white/40 dark:border-white/10 transition-shadow duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${isActive ? 'cursor-zoom-in hover:shadow-sky-500/20' : 'cursor-default'}`}
                  >
                    <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-lg mb-6">
                      <Image
                        src={item.image}
                        alt={`${item.title} - Design por Abner Simão`}
                        fill
                        className="object-cover"
                        priority={index < 3}
                        sizes="(max-width: 768px) 85vw, 450px"
                        loading={index < 3 ? 'eager' : 'lazy'}
                      />
                    </div>

                    <div className="px-4 pb-4 flex flex-col items-center justify-center flex-grow text-center">
                      <h3 className="font-gotham font-black text-[#075985] dark:text-sky-200 text-lg sm:text-xl uppercase tracking-tighter leading-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="font-gotham font-bold text-emerald-600 dark:text-emerald-400 text-[10px] sm:text-xs uppercase tracking-widest mb-3">
                        {item.category}
                      </p>
                      {isActive && <ZoomIn size={18} className="text-sky-600 dark:text-sky-400 opacity-70 mx-auto" aria-hidden="true" />}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Controles de navegação */}
        <button 
          onClick={() => emblaApi?.scrollPrev()} 
          className="absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sky-900 dark:text-white hidden sm:flex hover:bg-white/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          aria-label="Projeto anterior"
        >
          <ChevronLeft size={24} aria-hidden="true" />
        </button>
        <button 
          onClick={() => emblaApi?.scrollNext()} 
          className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sky-900 dark:text-white hidden sm:flex hover:bg-white/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          aria-label="Próximo projeto"
        >
          <ChevronRight size={24} aria-hidden="true" />
        </button>
      </div>

      {/* Modal Lightbox - Acessível */}
      <AnimatePresence>
        {isModalOpen && activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-10 cursor-zoom-out"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative max-w-4xl w-full flex flex-col gap-6"
              onClick={(e: MouseEvent) => e.stopPropagation()}
            >
              {/* Header do Modal */}
              <div className="flex items-center justify-between px-2">
                <div className="text-left">
                  <h4 id="modal-title" className="font-gotham font-black text-white text-xl sm:text-2xl uppercase tracking-tighter leading-none">
                    {activeProject.title}
                  </h4>
                  <p className="font-gotham font-bold text-emerald-400 text-xs uppercase tracking-widest mt-1">
                    Visual Design & Art Direction
                  </p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 bg-white/5 hover:bg-white/20 text-white rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                  aria-label="Fechar visualização"
                >
                  <X size={24} aria-hidden="true" />
                </button>
              </div>

              {/* Imagem em alta qualidade */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900">
                <Image
                  src={activeProject.image}
                  alt={activeProject.imageAlt}
                  fill
                  className="object-contain"
                  quality={100}
                  priority
                />
              </div>

              {/* Footer com link externo */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
                <p className="text-white/40 font-gotham text-[10px] uppercase tracking-tighter">
                  © {new Date().getFullYear()} Abner Simão Design Studio
                </p>
                {getProjectLink(activeProject.title) && (
                  <a
                    href={getProjectLink(activeProject.title) ?? undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sky-400 hover:text-white transition-colors font-gotham font-black text-[11px] uppercase tracking-widest border-b border-sky-400/30 pb-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
                  >
                    Ver projeto publicado <ExternalLink size={12} aria-hidden="true" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Paginação mobile com ARIA */}
      <div className="flex items-center justify-center gap-2 mt-8 sm:hidden" role="tablist" aria-label="Navegação entre projetos">
        {eventosArtistas.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Ir para projeto ${index + 1}`}
            aria-selected={index === selectedIndex}
            role="tab"
            className={`transition-all duration-300 rounded-full ${
              index === selectedIndex ? 'w-6 h-2 bg-sky-500' : 'w-2 h-2 bg-sky-300/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}