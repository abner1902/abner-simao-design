'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  EventosArtistasSection,
  LogotiposIdentidadeSection,
  WebDesignSection,
  VideosSection,
  DesignImpressosSection,
  DesignEmpresasSection,
  Footer
} from '@/components';
import FilterBar, { CategoryID } from '@/components/ui/FilterBar';

const layoutStyles = `
  .projetos-flow-container {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .projetos-page-wrapper section {
    position: relative;
    width: 100%;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  /* Primeira seção colada no filtro — mobile */
  .projetos-flow-container > div:first-of-type section {
    padding-top: 1rem !important;
  }

  @media (min-width: 768px) {
    .projetos-flow-container {
      gap: 2rem;
    }
    .projetos-page-wrapper section {
      padding-top: 6rem;
      padding-bottom: 6rem;
    }
    /* Desktop: pequeno respiro na primeira seção */
    .projetos-flow-container > div:first-of-type section {
      padding-top: 3rem !important;
    }
  }
`;

function ProjetosPageContent() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<CategoryID>('all');

  useEffect(() => {
    const category = searchParams.get('category');
    const validCategories: CategoryID[] = ['all', 'web', 'branding', 'corporate', 'audiovisual'];
    if (validCategories.includes(category as CategoryID)) {
      setActiveCategory(category as CategoryID);
    }
  }, [searchParams]);

  const isVisible = (category: CategoryID) =>
    activeCategory === 'all' || activeCategory === category;

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: layoutStyles }} />

      {/* Background Fixo */}
      <div
        className="fixed inset-0 -z-20 h-full w-full bg-cover bg-center bg-no-repeat opacity-70"
        style={{ backgroundImage: "url('/assets/images/projects/bg/projects-bg.webp')" }}
      />
      <div className="fixed inset-0 -z-10 backdrop-blur-lg pointer-events-none bg-black/5 dark:bg-black/20" />

      {/*
        pt-20 = altura da Navbar fixa (80px)
        Em mobile o FilterBar é um dock flutuante no bottom,
        então não precisa de espaço extra no topo.
        md:pt-24 dá respiro extra no desktop abaixo da Navbar + FilterBar estático.
      */}
      <div className="relative pt-20 md:pt-28 pb-32 projetos-page-wrapper">

        <FilterBar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

        {/* mt-4 md:mt-6 cola o conteúdo no FilterBar desktop */}
        <div className="projetos-flow-container mt-4 md:mt-6">
          <AnimatePresence mode="popLayout">

            {isVisible('audiovisual') && (
              <motion.div key="av-arts" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} layout>
                <EventosArtistasSection />
              </motion.div>
            )}

            {isVisible('branding') && (
              <motion.div key="branding-sec" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} layout>
                <LogotiposIdentidadeSection />
              </motion.div>
            )}

            {isVisible('web') && (
              <motion.div key="web-sec" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} layout>
                <WebDesignSection />
              </motion.div>
            )}

            {isVisible('audiovisual') && (
              <motion.div key="av-videos" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} layout>
                <VideosSection />
              </motion.div>
            )}

            {isVisible('corporate') && (
              <motion.div key="corp-print" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} layout>
                <DesignImpressosSection />
              </motion.div>
            )}

            {isVisible('corporate') && (
              <motion.div key="corp-biz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} layout>
                <DesignEmpresasSection />
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default function ProjetosPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen w-full flex items-center justify-center bg-black">
        <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white animate-spin" />
      </div>
    }>
      <ProjetosPageContent />
    </Suspense>
  );
}