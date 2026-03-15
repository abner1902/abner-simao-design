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

  const doubled = [...tools, ...tools];

  return (
    <section className="py-12 overflow-hidden">
      <h2 className="text-center text-2xl lg:text-3xl font-black font-gotham uppercase text-sky-800 dark:text-sky-300 tracking-tight mb-10">
        Ferramentas e tecnologias que utilizo
      </h2>
      <div className="relative w-full bg-sky-50/20 shadow-[0px_4px_44px_0px_rgba(0,0,0,0.25)] py-6">
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee gap-12 w-max">
          {doubled.map((tool, index) => (
            <div key={index} className="relative w-20 h-20 shrink-0">
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