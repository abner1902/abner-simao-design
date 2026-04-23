'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { eventosArtistas } from '@/data/eventosArtistas';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function EventosArtistasSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    containScroll: false,
    skipSnaps: false,      // Evita pular snaps quando clica rápido
    duration: 15,          // Transição mais rápida para cliques seguidos
    dragFree: false,       // Mantém o snap centralizado
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="relative w-full min-h-screen pt-16 pb-20 overflow-hidden bg-white/10 backdrop-blur-md border border-white/40 shadow-[0px_4px_24px_0px_rgba(0,0,0,0.25)] transition-all duration-500">
      {/* HEADER */}
      <div className="flex flex-col items-center gap-4 text-center px-6 mb-16">
        <h2 className="font-gotham font-black text-[#075985] dark:text-sky-300 text-4xl sm:text-5xl uppercase tracking-tight">
          ARTES PARA EVENTOS E ARTISTAS
        </h2>
        <p className="font-gotham font-medium text-stone-800 dark:text-stone-300 text-lg sm:text-xl max-w-3xl leading-relaxed text-center">
          Flyers, capas de álbum e motion design para shows, festivais e lançamentos.
          Artes que vendem mais ingresso e engajam mais o seu&nbsp;público.
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="relative w-full">
        {/* Botões */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 md:left-4 top-[40%] -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/50 hover:bg-white/50 transition-all active:scale-95"
          aria-label="Anterior"
        >
          <ChevronLeft className="text-[#075985] dark:text-sky-300" size={24} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 md:right-4 top-[40%] -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/50 hover:bg-white/50 transition-all active:scale-95"
          aria-label="Próximo"
        >
          <ChevronRight className="text-[#075985] dark:text-sky-300" size={24} />
        </button>

        {/* Gradientes opcionais para fade nas laterais */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white/20 dark:from-slate-900/20 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white/20 dark:from-slate-900/20 to-transparent z-10" />

        {/* Viewport Embla */}
        <div ref={emblaRef} className="overflow-hidden w-full">
          <div className="flex touch-pan-y py-8">
            {eventosArtistas.map((item, index) => {
              const isActive = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  className="flex-[0_0_260px] sm:flex-[0_0_340px] md:flex-[0_0_380px] min-w-0 px-2 md:px-3 transition-all duration-300 ease-out will-change-transform"
                  style={{
                    transform: isActive ? 'scale(1.02)' : 'scale(0.96)',
                    opacity: isActive ? 1 : 0.7,
                  }}
                >
                  <article className="flex flex-col rounded-3xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg border border-white/40 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] overflow-hidden h-full">
                    <div className="relative w-full aspect-square overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        priority={index < 3}
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 md:p-5 flex flex-col gap-1">
                      <h3 className="font-gotham font-bold text-[#075985] dark:text-sky-300 text-xs sm:text-sm uppercase tracking-wide leading-snug">
                        {item.title}
                      </h3>
                      <p className="font-gotham font-bold text-[#0369a1] dark:text-sky-400 text-xs sm:text-sm leading-snug">
                        {item.category}
                      </p>
                      <p className="font-gotham text-stone-700 dark:text-stone-300 text-xs leading-relaxed mt-1 line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}