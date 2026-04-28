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

export default function ProjetosPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* Background */}
      <div 
        className="fixed inset-0 -z-10 h-full w-full bg-cover bg-center bg-no-repeat opacity-70"
        style={{ backgroundImage: "url('/assets/images/projects/bg/projects-bg.jpg')" }}
      />

      <Navbar />

      <div className="relative">
        <EventosArtistasSection />
        <LogotiposIdentidadeSection />
        <WebDesignSection />
        <VideosSection />
        <DesignImpressosSection />
        
        {/* Nova Seção Adicionada */}
        <DesignEmpresasSection />
      </div>

      <Footer />
    </main>
  );
}