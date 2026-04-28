'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { impressosData } from '@/data/impressos';

export default function DesignImpressosSection() {
  return (
    <section className="relative w-full py-24 bg-transparent flex flex-col items-center overflow-hidden">
      
      <header className="flex flex-col items-center mb-16 px-6 text-center">
        <h2 className="w-full max-w-[1029px] text-[#075985] dark:text-sky-300 text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-6">
          Design para Impressos
        </h2>
        <p className="w-full max-w-[1084px] text-stone-900 dark:text-stone-300 text-xl lg:text-2xl font-medium leading-relaxed">
          Criação de folders, flyers, banners, adesivos, cardápios e embalagens personalizadas. 
          <br className="hidden lg:block" />
          Arte final pronta para gráfica em alta qualidade e fechamento de arquivo profissional.
        </p>
      </header>

      <div className="max-w-[1280px] mx-auto w-full px-6">
        {/* 
          MOBILE: Grid 2x2 simples com aspect-square
          DESKTOP: Bento grid com auto-rows + grid-auto-flow-dense 
          Fonte: https://dev.to/velox-web/how-to-build-a-responsive-bento-grid-with-tailwind-css-no-masonryjs-3f2c
        */}
        
        {/* Mobile: 2x2 grid, todos quadrados */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          {impressosData.map((item) => (
            <motion.figure
              key={item.id}
              whileHover={{ y: -8 }}
              className="relative w-full aspect-square bg-sky-100/70 rounded-3xl overflow-hidden shadow-lg border border-white/20"
            >
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className="object-cover"
                sizes="50vw"
              />
            </motion.figure>
          ))}
        </div>

        {/* Desktop: Bento Grid com Flexbox - Proporção Áurea */}
        <div className="hidden lg:flex lg:gap-6">
          {/* Coluna 1: 25% - Caixa + Speaker empilhados */}
          <div className="flex flex-col gap-6 w-1/4">
            <motion.figure
              className="relative w-full h-64 bg-sky-100/70 rounded-3xl overflow-hidden shadow-lg border border-white/20"
              whileHover={{ y: -8 }}
            >
              <Image 
                src={impressosData[0].image} 
                alt={impressosData[0].title} 
                fill 
                className="object-cover"
                sizes="25vw"
              />
            </motion.figure>
            <motion.figure
              className="relative w-full flex-1 bg-sky-100/70 rounded-3xl overflow-hidden shadow-lg border border-white/20"
              whileHover={{ y: -8 }}
            >
              <Image 
                src={impressosData[2].image} 
                alt={impressosData[2].title} 
                fill 
                className="object-cover"
                sizes="25vw"
              />
            </motion.figure>
          </div>

          {/* Coluna 2: 37.5% - Patacones (destaque principal) */}
          <motion.figure
            className="relative w-[37.5%] h-[600px] bg-sky-100/70 rounded-3xl overflow-hidden shadow-lg border border-white/20"
            whileHover={{ y: -8 }}
          >
            <Image 
              src={impressosData[3].image} 
              alt={impressosData[3].title} 
              fill 
              className="object-cover"
              priority
              sizes="37.5vw"
            />
          </motion.figure>

          {/* Coluna 3: 37.5% - Cardápio Pizza */}
          <motion.figure
            className="relative w-[37.5%] h-[600px] bg-sky-100/70 rounded-3xl overflow-hidden shadow-lg border border-white/20"
            whileHover={{ y: -8 }}
          >
            <Image 
              src={impressosData[1].image} 
              alt={impressosData[1].title} 
              fill 
              className="object-cover"
              sizes="37.5vw"
            />
          </motion.figure>
        </div>
      </div>
    </section>
  );
}