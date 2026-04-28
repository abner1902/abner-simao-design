'use client';

import React from 'react';
import Image from 'next/image';
import { logotiposIdentidade } from '@/data/logotiposIdentidade';

export default function LogotiposIdentidadeSection() {
  const half = Math.ceil(logotiposIdentidade.length / 2);
  const row1Data = logotiposIdentidade.slice(0, half);
  const row2Data = logotiposIdentidade.slice(half);

  // Triplicamos os dados para o efeito de loop infinito
  const row1 = [...row1Data, ...row1Data, ...row1Data];
  const row2 = [...row2Data, ...row2Data, ...row2Data];

  return (
    <section className="relative w-full py-20 overflow-hidden" aria-labelledby="section-logos-title">
      <div className="flex flex-col items-center gap-2 text-center px-6 mb-16">
        <h2 id="section-logos-title" className="font-gotham font-black text-[#075985] dark:text-sky-300 text-3xl sm:text-4xl uppercase tracking-tighter">
          Logotipos & Identidade Visual
        </h2>
        <p className="font-gotham font-medium text-stone-800 dark:text-stone-300 text-base lg:text-lg max-w-3xl leading-relaxed mt-4">
          Criação de logotipos e identidade visual para empresas, DJs, gravadoras e eventos. Do conceito à arte final vetorizada, pronta para impressão e uso digital.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {/* LINHA 1 */}
        <div className="flex w-fit gap-8 animate-marquee-fast hover:[animation-play-state:paused]" role="list">
          {row1.map((item, index) => (
            <article
              key={`row1-${item.id}-${index}`}
              role="listitem"
              className="flex-shrink-0 w-[471px] h-32 flex items-center bg-gradient-to-b from-sky-100/70 to-sky-50/70 rounded-3xl border border-white/60 shadow-sm"
            >
              <div className="relative w-56 h-28 ml-6 flex-shrink-0 flex items-center justify-center bg-white/20 rounded-2xl overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.imageAlt} 
                  fill 
                  className="object-contain p-1" 
                  sizes="224px"
                  // Prioridade apenas para os primeiros itens da primeira linha para melhorar o LCP
                  priority={index < 3}
                />
              </div>
              <div className="flex flex-col justify-center px-6 overflow-hidden">
                <h3 className="font-gotham font-medium text-sky-800 text-lg uppercase leading-none tracking-tight truncate">
                  {item.title}
                </h3>
                <p className="font-gotham font-light text-black text-sm mt-2 leading-tight tracking-[0.1em]">
                  {item.category}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* LINHA 2 */}
        <div className="flex w-fit gap-8 animate-marquee-slow hover:[animation-play-state:paused] ml-[-300px]" role="list">
          {row2.map((item, index) => (
            <article
              key={`row2-${item.id}-${index}`}
              role="listitem"
              className="flex-shrink-0 w-[471px] h-32 flex items-center bg-gradient-to-b from-sky-100/70 to-sky-50/70 rounded-3xl border border-white/60 shadow-sm"
            >
              <div className="relative w-56 h-28 ml-6 flex-shrink-0 flex items-center justify-center bg-white/20 rounded-2xl overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.imageAlt} 
                  fill 
                  className="object-contain p-1" 
                  sizes="224px"
                />
              </div>
              <div className="flex flex-col justify-center px-6 overflow-hidden">
                <h3 className="font-gotham font-medium text-sky-800 text-lg uppercase leading-none tracking-tight truncate">
                  {item.title}
                </h3>
                <p className="font-gotham font-light text-black text-sm mt-2 leading-tight tracking-[0.1em]">
                  {item.category}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}