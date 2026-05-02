'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Navbar, 
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
    gap: 0; /* Removemos o gap global para controlar via padding das seções */
  }
  
  .projetos-page-wrapper section {
    position: relative;
    width: 100%;
    /* Padding padrão das seções para respiro interno */
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  /* ✅ REMOVE O VÁCUO DA PRIMEIRA SEÇÃO ATIVA */
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
    /* No desktop, o primeiro título sobe mais ainda */
    .projetos-flow-container > div:first-of-type section {
      padding-top: 2rem !important;
    }
  }
`;

export default function ProjetosPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryID>('all');

  const isVisible = (category: CategoryID) => activeCategory === 'all' || activeCategory === category;

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: layoutStyles }} />

      {/* Background Fixo */}
      <div 
        className="fixed inset-0 -z-20 h-full w-full bg-cover bg-center bg-no-repeat opacity-70"
        style={{ backgroundImage: "url('/assets/images/projects/bg/projects-bg.jpg')" }}
      />
      <div className="fixed inset-0 -z-10 backdrop-blur-lg pointer-events-none bg-black/5 dark:bg-black/20" />

      <Navbar />

      {/* ✅ Wrapper ajustado: pt-2 md:pt-4 cola o filtro na Navbar */}
      <div className="relative pt-2 md:pt-4 pb-32 projetos-page-wrapper">
        
        <FilterBar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

        {/* ✅ mt-2 md:mt-4 cola o conteúdo no Filtro */}
        <div className="projetos-flow-container mt-2 md:mt-4">
          <AnimatePresence mode="popLayout">
            
            {isVisible('audiovisual') && (
              <motion.div key="av-arts" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} layout>
                <EventosArtistasSection />
              </motion.div>
            )}

            {isVisible('branding') && (
              <motion.div key="branding-sec" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} layout>
                <LogotiposIdentidadeSection />
              </motion.div>
            )}

            {isVisible('web') && (
              <motion.div key="web-sec" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} layout>
                <WebDesignSection />
              </motion.div>
            )}

            {isVisible('audiovisual') && (
              <motion.div key="av-videos" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} layout>
                <VideosSection />
              </motion.div>
            )}

            {isVisible('corporate') && (
              <motion.div key="corp-print" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} layout>
                <DesignImpressosSection />
              </motion.div>
            )}

            {isVisible('corporate') && (
              <motion.div key="corp-biz" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} layout>
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