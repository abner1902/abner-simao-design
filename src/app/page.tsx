'use client';

import { useEffect } from 'react';
import {
  HeroSection,
  ToolsCarousel,
  ServicesSection,
  ProjectsSection,
  AboutSection,
  Footer,
} from '@/components';

export default function Home() {

  useEffect(() => {
    const savedScroll = sessionStorage.getItem('homeScrollY');

    if (savedScroll) {
      window.scrollTo({
        top: Number(savedScroll),
        behavior: 'instant' as ScrollBehavior,
      });

      sessionStorage.removeItem('homeScrollY');
    }
  }, []);

  return (
    /* Removido pt-20 md:pt-24 para eliminar a linha branca no topo */
    <main id="main-content" className="relative min-h-screen page-transition">
      <section id="início">
        <HeroSection />
      </section>

      <ToolsCarousel />

      <section id="serviços">
        <ServicesSection />
      </section>

      <section id="projetos">
        <ProjectsSection />
      </section>

      <section id="sobre">
        <AboutSection />
      </section>

      <Footer />
    </main>
  );
}