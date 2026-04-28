'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { eventosArtistas } from '@/data/eventosArtistas';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function EventosArtistasSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    duration: 40,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full py-24 overflow-hidden bg-transparent">
      
      {/* HEADER UNIFICADO - Ajustado para linha única */}
      <div className="flex flex-col items-center gap-4 text-center px-6 mb-16">
        <h2 className="font-gotham font-black text-[#075985] dark:text-sky-300 text-2xl sm:text-4xl uppercase tracking-tighter leading-tight whitespace-nowrap">
          ARTES PARA EVENTOS E ARTISTAS
        </h2>
        <p className="font-gotham font-medium text-stone-800 dark:text-stone-300 text-base lg:text-lg max-w-3xl leading-relaxed">
          Flyers, capas de álbum e motion design para shows, festivais e lançamentos. 
          Artes que vendem mais ingresso e engajam mais o seu público.
        </p>
      </div>

      <div className="relative w-full">
        {/* VIEWPORT - Ajuste de padding para mobile espiar lateralmente */}
        <div ref={emblaRef} className="overflow-hidden px-4 sm:px-0">
          <div className="flex touch-pan-y py-10">
            {eventosArtistas.map((item, index) => {
              const isActive = index === selectedIndex;
              
              return (
                <div
                  key={item.id}
                  className="flex-[0_0_75%] sm:flex-[0_0_450px] min-w-0 px-2 sm:px-4"
                  style={{ perspective: '1200px' }}
                >
                  <motion.article
                    animate={{
                      scale: isActive ? 1.05 : 0.85,
                      opacity: isActive ? 1 : 0.35,
                      rotateY: isActive ? 0 : (index < selectedIndex ? 15 : -15),
                      z: isActive ? 0 : -100
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-slate-900"
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                      priority={isActive}
                    />
                    
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-10"
                        >
                          <motion.h3 
                            initial={{ y: 10 }} 
                            animate={{ y: 0 }}
                            className="font-gotham font-black text-white text-lg sm:text-2xl uppercase tracking-tight leading-none mb-2"
                          >
                            {item.title}
                          </motion.h3>
                          <motion.p 
                            initial={{ y: 10 }} 
                            animate={{ y: 0 }}
                            className="font-gotham font-bold text-emerald-400 text-[10px] sm:text-xs uppercase tracking-[0.2em]"
                          >
                            {item.category}
                          </motion.p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                </div>
              );
            })}
          </div>
        </div>

        {/* INDICADORES (DOTS) */}
        <div className="flex justify-center gap-2 mt-4 sm:hidden">
          {eventosArtistas.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                index === selectedIndex 
                ? 'w-6 bg-[#075985]' 
                : 'w-1.5 bg-stone-300 dark:bg-stone-600'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CONTROLES DESKTOP */}
        <button 
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all active:scale-90 hidden sm:flex"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => emblaApi?.scrollNext()}
          className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all active:scale-90 hidden sm:flex"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}