import { 
  Navbar, 
  HeroSection, 
  ToolsCarousel, 
  ServicesSection, 
  ProjectsSection, 
  AboutSection, 
  Footer,
  DesignImpressosSection
} from '@/components';

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

      <AboutSection />
      <Footer />
    </main>
  );
}
