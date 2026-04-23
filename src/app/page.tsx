import { 
  Navbar, 
  HeroSection, 
  ToolsCarousel, 
  ServicesSection, 
  ProjectsSection, 
  AboutSection, 
  Footer 
} from '@/components';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ToolsCarousel />
      <ServicesSection />
      <section id="projetos">
        <ProjectsSection />
      </section>
      <AboutSection />
      <Footer />
    </main>
  );
}
