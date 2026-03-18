'use client';
import Image from 'next/image';

const services = [
  {
    title: "Design Engineer\n(UI/UX + Front-end)",
    description: "Web Design especializado em criação de interfaces modernas no Figma e desenvolvimento com Next.js, React e Tailwind. Foco em performance, SEO e fidelidade visual.",
    image: "/assets/images/services/ui-ux.png",
    gridClass: "lg:col-span-4 lg:row-span-2",
    type: "tall",
    imgW: 240,
    imgH: 240,
  },
  {
    title: "Branding e Identidade Visual",
    description: "Criação de logotipos, manuais de marca e diretrizes visuais estratégicas para empresas de diversos segmentos e mercados corporativos, além de identidades exclusivas para DJs, artistas e grandes eventos de música eletrônica.",
    image: "/assets/images/services/branding.png",
    gridClass: "lg:col-span-8",
    type: "grid",
    imgW: 200,
    imgH: 200,
  },
  {
    title: "Motion Design e Edição de Vídeo",
    description: "Produção de conteúdo dinâmico, edição de vídeo, stop motion e motion graphics em After Effects e Premiere.",
    image: "/assets/images/services/video.png",
    gridClass: "lg:col-span-4",
    type: "grid",
    imgW: 160,
    imgH: 160,
  },
  {
    title: "Diagramação e Design Editorial",
    description: "Projeto gráfico e diagramação de catálogos, revistas e materiais institucionais complexos (InDesign/Adobe Suite).",
    image: "/assets/images/services/editorial.png",
    gridClass: "lg:col-span-4",
    type: "grid",
    imgW: 140,
    imgH: 140,
  },
  {
    title: "Design Visual e Artes Psicodélicas",
    description: "Ilustrações autorais e design lúdico para capas de EP, festivais de música eletrônica (Psytrance) e projetos que exigem uma estética única e imersiva.",
    image: "/assets/images/services/illustration.png",
    gridClass: "lg:col-span-8",
    type: "grid",
    imgW: 220,
    imgH: 220,
  },
  {
    title: "Estratégia, SEO e Tráfego Pago",
    description: "Otimização de conversão, gestão de campanhas de tráfego e visibilidade orgânica para produtos digitais.",
    image: "/assets/images/services/seo.png",
    gridClass: "lg:col-span-4",
    type: "grid",
    imgW: 160,
    imgH: 160,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="serviços"
      aria-label="Serviços oferecidos por Abner Simão"
      className="relative py-24 px-6 md:px-12 lg:px-20 min-h-screen"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'url(/assets/images/services/bg-services.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-[5] bg-white/40 dark:bg-slate-950/70" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <h2 className="font-gotham font-ultra text-sky-900 dark:text-sky-300 text-3xl sm:text-4xl uppercase tracking-wide">
            Soluções criativas que impulsionam seu negócio
          </h2>
          <p className="font-gotham text-stone-800 dark:text-stone-300 text-lg sm:text-2xl leading-9 max-w-[982px]">
            Logotipos, sites, vídeos e estratégias digitais feitas sob medida. Sem modelos prontos, foco total em criar uma presença única e profissional para sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-auto">
          {services.map((s, i) => (
            <article
              key={i}
              className={`relative rounded-3xl p-5 lg:p-6 overflow-hidden shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] ${s.gridClass}`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-sky-100/80 to-sky-50/80 dark:from-slate-900/60 dark:to-slate-800/60 rounded-3xl" aria-hidden="true" />
              <div className="absolute inset-0 top-2 opacity-30 bg-gradient-to-b from-sky-100/80 to-sky-50/80 dark:from-slate-900/60 dark:to-slate-800/60 rounded-3xl" aria-hidden="true" />

              <div className="relative z-10 h-full flex flex-col">

                {s.type === "tall" ? (
                  <div className="flex flex-col h-full">
                    <div>
                      <h3 className="text-sky-800 dark:text-sky-300 text-2xl font-black uppercase tracking-tighter mb-4 whitespace-pre-line">
                        {s.title}
                      </h3>
                      <p className="text-stone-900 dark:text-stone-300 text-sm md:text-base font-medium">
                        {s.description}
                      </p>
                    </div>
                    <div className="hidden lg:flex justify-center mt-8" aria-hidden="true">
                      <Image
                        src={s.image}
                        alt=""
                        width={s.imgW}
                        height={s.imgH}
                        className="object-contain"
                        sizes={`${s.imgW}px`}
                        priority
                      />
                    </div>
                  </div>

                ) : (
                  <div className="flex flex-col lg:flex-row items-center gap-4 h-full">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sky-800 dark:text-sky-300 text-2xl font-black uppercase tracking-tighter mb-2">
                        {s.title}
                      </h3>
                      <p className="text-stone-900 dark:text-stone-300 text-sm font-medium leading-snug">
                        {s.description}
                      </p>
                    </div>
                    <div className="hidden lg:flex flex-shrink-0" aria-hidden="true">
                      <Image
                        src={s.image}
                        alt=""
                        width={s.imgW}
                        height={s.imgH}
                        className="object-contain"
                        sizes={`${s.imgW}px`}
                      />
                    </div>
                  </div>
                )}

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}