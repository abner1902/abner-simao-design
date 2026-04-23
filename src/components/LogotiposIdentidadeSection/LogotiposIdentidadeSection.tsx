'use client';

import React from 'react';
import Image from 'next/image';
import { logotiposIdentidade } from '@/data/logotiposIdentidade';

export default function LogotiposIdentidadeSection() {
  // Distribuindo os logos reais para evitar repetição imediata
  const row1Data = logotiposIdentidade.slice(0, 4);
  const row2Data = logotiposIdentidade.slice(4);

  // Triplicamos para garantir que o loop seja infinito e fluido em qualquer tela
  const row1 = [...row1Data, ...row1Data, ...row1Data];
  const row2 = [...row2Data, ...row2Data, ...row2Data];

  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className="flex flex-col items-center gap-2 text-center px-6 mb-16">
        <h2 className="font-gotham font-black text-[#005B80] dark:text-sky-300 text-3xl sm:text-4xl uppercase tracking-tighter">
          LOGOTIPOS & IDENTIDADE VISUAL
        </h2>
      </div>

      <div className="flex flex-col gap-10">
        
        {/* LINHA 1 - Movimento contínuo para a esquerda */}
        <div className="flex w-fit gap-8 animate-marquee-fast hover:[animation-play-state:paused]">
          {row1.map((item, index) => (
            <article 
              key={`row1-${item.id}-${index}`}
              className="flex-shrink-0 w-[471px] h-32 flex items-center bg-gradient-to-b from-sky-100/70 to-sky-50/70 rounded-3xl border border-white/60 shadow-sm"
            >
              {/* Logotipo à Esquerda */}
              <div className="relative w-40 h-24 ml-6 flex-shrink-0 flex items-center justify-center bg-white/20 rounded-2xl overflow-hidden">
                <Image src={item.image} alt={item.imageAlt} fill className="object-contain p-3 mix-blend-multiply" />
              </div>
              
              {/* Texto à Direita */}
              <div className="flex flex-col justify-center px-8 overflow-hidden">
                <h3 className="font-gotham font-medium text-sky-800 text-2xl uppercase leading-none tracking-tight truncate">
                  {item.title}
                </h3>
                <p className="font-gotham font-light text-black text-sm uppercase mt-2 leading-tight tracking-[0.1em]">
                  {item.category}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* LINHA 2 - Movimento contínuo inverso, mas layout idêntico */}
        <div className="flex w-fit gap-8 animate-marquee-slow hover:[animation-play-state:paused] ml-[-300px]">
          {row2.map((item, index) => (
            <article 
              key={`row2-${item.id}-${index}`}
              className="flex-shrink-0 w-[471px] h-32 flex items-center bg-gradient-to-b from-sky-100/70 to-sky-50/70 rounded-3xl border border-white/60 shadow-sm"
            >
              {/* Logotipo à Esquerda (Padronizado) */}
              <div className="relative w-40 h-24 ml-6 flex-shrink-0 flex items-center justify-center bg-white/20 rounded-2xl overflow-hidden">
                <Image src={item.image} alt={item.imageAlt} fill className="object-contain p-3 mix-blend-multiply" />
              </div>
              
              {/* Texto à Direita (Padronizado) */}
              <div className="flex flex-col justify-center px-8 overflow-hidden">
                <h3 className="font-gotham font-medium text-sky-800 text-2xl uppercase leading-none tracking-tight truncate">
                  {item.title}
                </h3>
                <p className="font-gotham font-light text-black text-sm uppercase mt-2 leading-tight tracking-[0.1em]">
                  {item.category}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Fade laterais para acabamento premium */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10" />
    </section>
  );
}