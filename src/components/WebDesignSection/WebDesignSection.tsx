'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { webDesignProjects } from '@/data/WebDesign';
import SectionHeader from '@/components/ui/SectionHeader';  

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
    <section 
      className="relative w-full py-16 md:py-24 overflow-hidden bg-white/10 backdrop-blur-md border-y border-white/30 shadow-2xl rounded-none" 
      aria-label="Projetos de Web Design e Desenvolvimento"
    >
      
      {/* HEADER UNIFICADO */}
      <div className="mb-12 md:mb-16">
        <SectionHeader 
          title="WEB DESIGN & DESENVOLVIMENTO" 
          description="Criação de sites, lojas online e plataformas digitais com foco em UI/UX e performance. Projetos em React, Next.js e Tailwind para conversão." 
        />
      </div>

      {/* CAROUSEL */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 md:px-12">
        {/* Botões de navegação */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-[40%] -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/50 hover:bg-white/50 transition-all active:scale-95 lg:hidden"
          aria-label="Projeto anterior"
        >
          <ChevronLeft className="text-[#075985] dark:text-sky-300" size={24} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-[40%] -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/50 hover:bg-white/50 transition-all active:scale-95 lg:hidden"
          aria-label="Próximo projeto"
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
                <Link 
                  href={`/projetos/${item.slug}`} 
                  className="block h-full group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 rounded-3xl"
                  aria-label={`Ver detalhes do projeto ${item.title}`}
                >
                  <motion.article 
                    whileHover={{ y: -12 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative flex flex-col h-full rounded-3xl bg-gradient-to-b from-sky-100/70 to-sky-50/70 dark:from-slate-800/60 dark:to-slate-700/60 backdrop-blur-lg border border-white/60 dark:border-white/10 shadow-lg overflow-hidden cursor-pointer"
                  >
                    
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

                    <div className="p-6 flex flex-col gap-3 text-center flex-grow justify-between relative z-20">
                      <div>
                        <h3 className="font-gotham font-bold text-sky-900 dark:text-sky-300 text-body-lg sm:text-heading-md uppercase tracking-tight leading-snug group-hover:text-emerald-600 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="font-gotham font-medium text-sky-800/80 dark:text-sky-400/80 text-body-md sm:text-body-lg leading-snug mt-1">
                          {item.category}
                        </p>
                      </div>

                      <div className="flex items-center justify-center gap-2 mt-2 text-sky-600 dark:text-sky-400 font-gotham font-bold text-[11px] sm:text-xs uppercase tracking-widest group-hover:gap-3 transition-all duration-300">
                        <span>Ver detalhes</span>
                        <ArrowUpRight 
                          size={14} 
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                  </motion.article>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}