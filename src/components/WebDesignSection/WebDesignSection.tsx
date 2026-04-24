'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { webDesignProjects } from '@/data/webDesign';

export default function WebDesignSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    containScroll: 'trimSnaps',
    skipSnaps: false,
    duration: 15,
    dragFree: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="relative w-full py-20 overflow-hidden bg-white/10 backdrop-blur-md border border-white/40 shadow-[0px_4px_24px_0px_rgba(0,0,0,0.25)]">
      
      {/* HEADER */}
      <div className="flex flex-col items-center gap-4 text-center px-6 mb-16">
        <h2 className="font-gotham font-black text-[#075985] dark:text-sky-300 text-4xl sm:text-5xl uppercase tracking-tight">
          WEB DESIGN & DESENVOLVIMENTO
        </h2>
        <p className="font-gotham font-medium text-stone-800 dark:text-stone-300 text-lg sm:text-xl max-w-3xl leading-relaxed">
          Criação de sites, lojas online e plataformas digitais com foco em UI/UX e performance.
          Projetos em React, Next.js e Tailwind para conversão.
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 md:px-12">
        {/* Botões de navegação - Ocultos no desktop via lg:hidden */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-[40%] -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/50 hover:bg-white/50 transition-all active:scale-95 lg:hidden"
          aria-label="Anterior"
        >
          <ChevronLeft className="text-[#075985] dark:text-sky-300" size={24} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-[40%] -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/50 hover:bg-white/50 transition-all active:scale-95 lg:hidden"
          aria-label="Próximo"
        >
          <ChevronRight className="text-[#075985] dark:text-sky-300" size={24} />
        </button>

        {/* Viewport Embla */}
        <div ref={emblaRef} className="overflow-hidden w-full">
          <div className="flex touch-pan-y py-8">
            {webDesignProjects.map((item, index) => (
              <div
                key={item.id}
                className="flex-[0_0_85%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-3"
              >
                <motion.article 
                  whileHover={{ y: -12 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="group relative flex flex-col h-full rounded-3xl bg-gradient-to-b from-sky-100/70 to-sky-50/70 dark:from-slate-800/60 dark:to-slate-700/60 backdrop-blur-lg border border-white/60 dark:border-white/10 shadow-lg overflow-hidden cursor-pointer"
                >
                  
                  {/* Imagem no topo com Zoom Interno */}
                  <div className="relative w-full aspect-video overflow-hidden rounded-t-3xl bg-slate-200 dark:bg-slate-900">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      priority={index === 0} 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>

                  {/* Texto embaixo */}
                  <div className="p-8 flex flex-col gap-2 text-center flex-grow justify-center relative z-20">
                    <h3 className="font-gotham font-black text-sky-900 dark:text-sky-300 text-xl sm:text-2xl uppercase tracking-tighter leading-snug group-hover:text-emerald-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="font-gotham font-medium text-sky-800/80 dark:text-sky-400/80 text-base sm:text-lg leading-snug">
                      {item.category}
                    </p>
                  </div>

                </motion.article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}