'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { empresasData, EmpresaProject } from '@/data/empresas';
import SectionHeader from '@/components/ui/SectionHeader';
import EmpresasModal from './EmpresasModal';

export default function DesignEmpresasSection() {
  const [selectedProject, setSelectedProject] = useState<EmpresaProject | null>(null);
  const isModalOpen = !!selectedProject;

  // Protocolo de Scroll Lock
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <>
      <section
        aria-labelledby="empresas-section-title"
        className="relative w-full py-24 bg-transparent flex flex-col items-center overflow-hidden"
      >
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
                whileTap={{ scale: 0.98 }}
                onClick={() => item.gallery ? setSelectedProject(item) : null}
                className={`flex flex-col rounded-3xl overflow-hidden shadow-[0px_20px_40px_rgba(0,0,0,0.1)] border border-white/80 bg-white/70 dark:bg-white/10 backdrop-blur-2xl ${item.gallery ? 'cursor-zoom-in' : ''}`}
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
                <div className="px-4 py-4 flex items-center justify-center min-h-[70px]">
                  <p className="font-gotham font-black text-[#075985] dark:text-white text-body-sm uppercase tracking-tight leading-tight text-center">
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
                onClick={() => item.gallery ? setSelectedProject(item) : null}
                className={`flex flex-col rounded-3xl overflow-hidden shadow-[0px_20px_40px_rgba(0,0,0,0.1)] border border-white/80 bg-white/70 dark:bg-white/10 backdrop-blur-2xl transition-all hover:scale-[1.02] hover:bg-white/90 dark:hover:bg-white/20 hover:border-white ${item.gallery ? 'cursor-zoom-in' : ''}`}
              >
                <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="33vw"
                    priority={index < 3}
                  />
                </div>
                <div className="px-6 py-6 flex items-center justify-center min-h-[90px]">
                  <p className="font-gotham font-black text-[#075985] dark:text-white text-body-lg uppercase tracking-tight leading-tight text-center">
                    {item.title}
                  </p>
                </div>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Renderização do Modal ── */}
      <EmpresasModal 
        isOpen={isModalOpen}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </>
  );
}