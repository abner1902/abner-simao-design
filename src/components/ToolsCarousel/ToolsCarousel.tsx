import Image from 'next/image';

export default function ToolsCarousel() {
  const tools = [
    { src: '/assets/images/logos/Illustrator.png', alt: 'Adobe Illustrator' },
    { src: '/assets/images/logos/Photoshop.png', alt: 'Adobe Photoshop' },
    { src: '/assets/images/logos/Indesign.png', alt: 'Adobe InDesign' },
    { src: '/assets/images/logos/Premiere-pro-logo.png', alt: 'Adobe Premiere Pro' },
    { src: '/assets/images/logos/After-effects-logo.png', alt: 'Adobe After Effects' },
    { src: '/assets/images/logos/Figma-logo.png', alt: 'Figma' },
    { src: '/assets/images/logos/vscode.png', alt: 'VS Code' },
    { src: '/assets/images/logos/react-logotipo.png', alt: 'React' },
    { src: '/assets/images/logos/next-logotipo.png', alt: 'Next.js' },
    { src: '/assets/images/logos/tailwind-logo.png', alt: 'Tailwind CSS' },
    { src: '/assets/images/logos/vercel-logotipo.png', alt: 'Vercel' },
  ];

  // Triplicamos para garantir que nunca falte ícone na tela durante a transição
  const items = [...tools, ...tools, ...tools];

  return (
    <section className="py-12 overflow-hidden">
      <h2 className="text-center text-2xl lg:text-3xl font-black font-gotham uppercase text-[#005B80] dark:text-sky-300 tracking-tight mb-10">
        Ferramentas e tecnologias que utilizo
      </h2>
      
      {/* Container com sombra e blur conforme seu print */}
      <div className="relative w-full bg-white/10 backdrop-blur-sm shadow-[0px_4px_44px_0px_rgba(0,0,0,0.15)] py-8 border-y border-white/20">
        
        {/* Gradientes laterais para o efeito de sumir nas pontas */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />

        {/* AQUI ESTAVA O ERRO: 
            Alterado de 'animate-marquee' para 'animate-marquee-fast' (conforme seu tailwind.config)
        */}
        <div className="flex animate-marquee-fast gap-16 w-max">
          {items.map((tool, index) => (
            <div key={index} className="relative w-16 h-16 shrink-0 transition-transform hover:scale-110">
              <Image
                src={tool.src}
                alt={tool.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}