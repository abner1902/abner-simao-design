'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { impressosData } from '@/data/impressos';
import { ZoomIn } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

export default function DesignImpressosSection() {
  const router = useRouter();

  return (
    <section className="relative w-full py-24 bg-transparent flex flex-col items-center overflow-hidden">
      <SectionHeader
        title="DESIGN PARA IMPRESSOS"
        description="Criação de folders, flyers, banners, adesivos, cardápios e embalagens personalizadas. Arte final pronta para gráfica em alta qualidade e fechamento de arquivo profissional."
      />

      <div className="max-w-[1280px] mx-auto w-full px-6">
        
        {/* Layout Desktop: 3 Colunas (Inalterado) */}
        <div className="hidden lg:flex lg:gap-6 justify-center items-start">
          
          {/* COLUNA 1: Quadrados Pequenos (Esquerda) */}
          <div className="flex flex-col gap-6 w-[280px]">
            {impressosData[2] && (
              <motion.figure
                onClick={() => router.push(`/projetos/impressos/${impressosData[2].id}`)}
                whileHover={{ y: -8 }}
                className="relative w-full h-[318px] bg-sky-100/70 rounded-3xl overflow-hidden shadow-lg border border-white/20 cursor-pointer group"
              >
                <Image src={impressosData[2].thumb} alt={impressosData[2].imageAlt} fill className="object-cover" sizes="280px" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white gap-2">
                  <ZoomIn size={32} />
                  <span className="font-gotham font-bold text-[10px] uppercase tracking-widest">Ver detalhes</span>
                </div>
              </motion.figure>
            )}

            {impressosData[0] && (
              <motion.figure
                onClick={() => router.push(`/projetos/impressos/${impressosData[0].id}`)}
                whileHover={{ y: -8 }}
                className="relative w-full h-[260px] bg-sky-100/70 rounded-3xl overflow-hidden shadow-lg border border-white/20 cursor-pointer group"
              >
                <Image src={impressosData[0].thumb} alt={impressosData[0].imageAlt} fill className="object-cover" sizes="280px" priority />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white gap-2">
                  <ZoomIn size={32} />
                  <span className="font-gotham font-bold text-[10px] uppercase tracking-widest">Ver detalhes</span>
                </div>
              </motion.figure>
            )}
          </div>

          {/* COLUNA 2: Cardápio Pizza (Meio) */}
          <div className="w-[420px]">
            {impressosData[1] && (
              <motion.figure
                onClick={() => router.push(`/projetos/impressos/${impressosData[1].id}`)}
                whileHover={{ y: -8 }}
                className="relative w-full h-[602px] bg-sky-100/70 rounded-3xl overflow-hidden shadow-lg border border-white/20 cursor-pointer group"
              >
                <Image src={impressosData[1].thumb} alt={impressosData[1].imageAlt} fill className="object-cover" sizes="420px" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white gap-2">
                  <ZoomIn size={48} />
                  <span className="font-gotham font-bold text-xs uppercase tracking-widest">Ver detalhes</span>
                </div>
              </motion.figure>
            )}
          </div>

          {/* COLUNA 3: Gradiente Speaker (Direita) */}
          <div className="w-[420px]">
            {impressosData[3] && (
              <motion.figure
                onClick={() => router.push(`/projetos/impressos/${impressosData[3].id}`)}
                whileHover={{ y: -8 }}
                className="relative w-full h-[602px] bg-sky-100/70 rounded-3xl overflow-hidden shadow-lg border border-white/20 cursor-pointer group"
              >
                <Image src={impressosData[3].thumb} alt={impressosData[3].imageAlt} fill className="object-cover" sizes="420px" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white gap-2">
                  <ZoomIn size={48} />
                  <span className="font-gotham font-bold text-xs uppercase tracking-widest">Ver detalhes</span>
                </div>
              </motion.figure>
            )}
          </div>
        </div>

        {/* Mobile: Corrigido para 2 Colunas Fixas (Ajuste solicitado) */}
        <div className="grid grid-cols-2 gap-3 lg:hidden">
          {impressosData.map((item) => (
            <motion.figure
              key={item.id}
              onClick={() => router.push(`/projetos/impressos/${item.id}`)}
              className="relative w-full aspect-square bg-sky-100/70 rounded-2xl overflow-hidden shadow-md border border-white/20"
            >
              <Image 
                src={item.thumb} 
                alt={item.imageAlt} 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 50vw"
              />
            </motion.figure>
          ))}
        </div>

      </div>
    </section>
  );
}