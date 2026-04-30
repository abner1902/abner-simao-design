'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { empresasData } from '@/data/empresas';
import SectionHeader from '@/components/ui/SectionHeader';

export default function DesignEmpresasSection() {
  return (
    <section
      aria-labelledby="empresas-section-title"
      className="relative w-full py-24 bg-transparent flex flex-col items-center overflow-hidden"
    >
      {/* ✅ HEADER UNIFICADO */}
      <SectionHeader 
        title="DESIGN PARA EMPRESAS" 
        description="Soluções de design para empresas: branding, e-commerce, eventos, saúde e esporte. Projetos para clínicas, indústrias, times e negócios B2B que querem crescer com design estratégico." 
      />

      <div className="max-w-[1280px] mx-auto w-full px-6">

        {/* ── Mobile: grid 2x3 ── */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          {empresasData.map((item) => (
            <motion.figure
              key={item.id}
              whileHover={{ y: -8 }}
              className="relative w-full aspect-square bg-gradient-to-b from-sky-100/70 to-sky-50/70 rounded-3xl overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-white/20"
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover"
                sizes="50vw"
              />
              {/* Overlay com título */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="font-gotham font-black text-white text-xs uppercase tracking-tight leading-tight">
                  {item.title}
                </p>
              </div>
            </motion.figure>
          ))}
        </div>

        {/* ── Desktop: grid 3x2 ── */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {empresasData.map((item, index) => (
            <motion.figure
              key={item.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full bg-gradient-to-b from-sky-100/70 to-sky-50/70 rounded-3xl overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-white/20"
              style={{ aspectRatio: '4/3' }}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover"
                sizes="33vw"
                priority={index < 3}
              />
              {/* Overlay com título */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-gotham font-black text-white text-sm uppercase tracking-tight leading-tight">
                  {item.title}
                </p>
              </div>
            </motion.figure>
          ))}
        </div>

      </div>
    </section>
  );
}