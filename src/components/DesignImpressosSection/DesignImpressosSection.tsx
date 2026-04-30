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

        {/* Mobile: 2x2 grid */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          {impressosData.map((item, index) => (
            <motion.figure
              key={item.id}
              onClick={() => router.push(`/projetos/impressos/${item.id}`)}
              whileHover={{ y: -8 }}
              className="relative w-full aspect-square bg-sky-100/70 rounded-3xl overflow-hidden shadow-lg border border-white/20 cursor-pointer hover:shadow-sky-500/20 transition-shadow duration-300 group"
            >
              <Image src={item.thumb} alt={item.imageAlt} fill className="object-cover"
                sizes="50vw" priority={index < 2} loading={index < 2 ? 'eager' : 'lazy'} />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-10">
                <div className="flex flex-col items-center gap-2 text-white">
                  <ZoomIn size={40} className="drop-shadow-lg" />
                  <span className="font-gotham font-bold text-xs uppercase tracking-wider drop-shadow-lg">Ver detalhes</span>
                </div>
              </div>
            </motion.figure>
          ))}
        </div>

        {/* Desktop: Bento Grid */}
        <div className="hidden lg:flex lg:gap-6">
          <div className="flex flex-col gap-6 w-1/4">
            <motion.figure onClick={() => router.push(`/projetos/impressos/${impressosData[0].id}`)} whileHover={{ y: -8 }}
              className="relative w-full h-64 bg-sky-100/70 rounded-3xl overflow-hidden shadow-lg border border-white/20 cursor-pointer hover:shadow-sky-500/20 transition-shadow duration-300 group">
              <Image src={impressosData[0].thumb} alt={impressosData[0].imageAlt} fill className="object-cover" sizes="25vw" priority />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-10">
                <div className="flex flex-col items-center gap-2 text-white">
                  <ZoomIn size={40} className="drop-shadow-lg" />
                  <span className="font-gotham font-bold text-xs uppercase tracking-wider drop-shadow-lg">Ver detalhes</span>
                </div>
              </div>
            </motion.figure>

            <motion.figure onClick={() => router.push(`/projetos/impressos/${impressosData[2].id}`)} whileHover={{ y: -8 }}
              className="relative w-full flex-1 bg-sky-100/70 rounded-3xl overflow-hidden shadow-lg border border-white/20 cursor-pointer hover:shadow-sky-500/20 transition-shadow duration-300 group">
              <Image src={impressosData[2].thumb} alt={impressosData[2].imageAlt} fill className="object-cover" sizes="25vw" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-10">
                <div className="flex flex-col items-center gap-2 text-white">
                  <ZoomIn size={40} className="drop-shadow-lg" />
                  <span className="font-gotham font-bold text-xs uppercase tracking-wider drop-shadow-lg">Ver detalhes</span>
                </div>
              </div>
            </motion.figure>
          </div>

          <motion.figure onClick={() => router.push(`/projetos/impressos/${impressosData[3].id}`)} whileHover={{ y: -8 }}
            className="relative w-[37.5%] h-[600px] bg-sky-100/70 rounded-3xl overflow-hidden shadow-lg border border-white/20 cursor-pointer hover:shadow-sky-500/20 transition-shadow duration-300 group">
            <Image src={impressosData[3].thumb} alt={impressosData[3].imageAlt} fill className="object-cover" priority sizes="37.5vw" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-10">
              <div className="flex flex-col items-center gap-2 text-white">
                <ZoomIn size={40} className="drop-shadow-lg" />
                <span className="font-gotham font-bold text-xs uppercase tracking-wider drop-shadow-lg">Ver detalhes</span>
              </div>
            </div>
          </motion.figure>

          <motion.figure onClick={() => router.push(`/projetos/impressos/${impressosData[1].id}`)} whileHover={{ y: -8 }}
            className="relative w-[37.5%] h-[600px] bg-sky-100/70 rounded-3xl overflow-hidden shadow-lg border border-white/20 cursor-pointer hover:shadow-sky-500/20 transition-shadow duration-300 group">
            <Image src={impressosData[1].thumb} alt={impressosData[1].imageAlt} fill className="object-cover" sizes="37.5vw" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-10">
              <div className="flex flex-col items-center gap-2 text-white">
                <ZoomIn size={40} className="drop-shadow-lg" />
                <span className="font-gotham font-bold text-xs uppercase tracking-wider drop-shadow-lg">Ver detalhes</span>
              </div>
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
