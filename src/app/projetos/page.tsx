import { Navbar, EventosArtistasSection, LogotiposIdentidadeSection, WebDesignSection, Footer } from '@/components';

export default function ProjetosPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* Camada da imagem com 70% de opacidade */}
      <div 
        className="fixed inset-0 -z-10 h-full w-full bg-cover bg-center bg-no-repeat opacity-70"
        style={{ backgroundImage: "url('/assets/images/projects/bg/projects-bg.jpg')" }}
      />

      <Navbar />

      <div className="relative">
        <EventosArtistasSection />
        <LogotiposIdentidadeSection />
        <WebDesignSection />
      </div>

      <Footer />
    </main>
  );
}