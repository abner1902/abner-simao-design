import { 
  Navbar, 
  HeroSection, 
  ToolsCarousel, 
  ServicesSection, 
  ProjectsSection, 
  AboutSection, 
  Footer,
} from '@/components';
import DesignImpressosSection from '@/components/DesignImpressosSection/DesignImpressosSection';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <ToolsCarousel />
      <ServicesSection />
      <section id="projetos" className="relative">
        <ProjectsSection />
      </section>
      {/* SEÇÃO DE DESIGN PARA IMPRESSOS */}
      <DesignImpressosSection />
      <AboutSection />
      <Footer />
    </main>
  );
}