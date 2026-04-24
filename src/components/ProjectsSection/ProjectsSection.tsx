'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 'valbao-odontologia',
    title: 'VALBÃO ODONTOLOGIA',
    category: 'Branding & Identidade Visual',
    description:
      'Projeto de modernização de marca para o setor de saúde, unindo minimalismo e confiança para criar uma presença visual autoritária no mercado odontológico.',
    image: '/assets/images/projects/valbao-photo.jpg',
    imageAlt: 'Identidade visual Valbão Odontologia — logo e paleta de cores',
    slug: 'valbao-odontologia',
  },
  {
    id: 'global-summit',
    title: 'GLOBAL SUMMIT 2022 – PORTAL TELEMEDICINA',
    category: 'Design de Experiência e Eventos',
    description:
      'Comunicação visual estratégica para estande em evento de tecnologia de escala global, garantindo unidade visual e impacto de marca em grandes formatos.',
    image: '/assets/images/projects/global-summit-photo.jpg',
    imageAlt: 'Estande Global Summit 2022 — Portal Telemedicina',
    slug: 'global-summit',
  },
  {
    id: 'agya-sounds',
    title: 'AGYA SOUNDS RECS WEBSITE',
    category: 'Ui/Ux React & Next.js',
    description:
      'Desenvolvimento de plataforma digital para gravadora de música eletrônica, focando em performance, SEO e uma interface imersiva que reflete a identidade psicodélica da marca.',
    image: '/assets/images/projects/03-web-design/agya-sounds-mockup.jpg',
    imageAlt: 'Website Agya Sounds Recs — interface dark psicodélica',
    slug: 'agya-sounds',
  },
  {
    id: 'naturaiz-records',
    title: 'NATURAÍZ RECORDS',
    category: 'Cover Art, Motion & Stop Motion',
    description:
      'Direção de arte completa para o lançamento do EP Lunar Pareidolia, integrando a criação da capa oficial com uma produção em Stop Motion biomecânica e sombria. Um projeto autoral que une design lúdico e psicodelia densa para o cenário de festivais.',
    image: '/assets/images/projects/naturaiz-ep-photo.jpg',
    imageAlt: 'Cover Art EP Lunar Pareidolia — Naturaíz Records',
    slug: 'naturaiz-records',
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="w-full bg-gradient-to-b from-green-500/30 via-sky-500/30 via-[43%] to-purple-500/30 py-20 px-4 sm:px-8"
    >
      <div className="mx-auto max-w-[1317px] flex flex-col items-center gap-16">

        {/* HEADER */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-gotham font-ultra text-sky-900 dark:text-sky-300 text-3xl sm:text-4xl uppercase tracking-wide">
            PROJETOS RECENTES
          </h2>
          <p className="font-gotham text-stone-800 dark:text-stone-300 text-lg sm:text-2xl leading-9 max-w-[982px]">
            Uma curadoria de trabalhos recentes que unem estratégia, design de
            interface e desenvolvimento de alta performance.
          </p>
        </div>

        {/* LISTA DE CARDS */}
        <ul className="w-full flex flex-col gap-6 list-none p-0 m-0">
          {projects.map((project) => (
            <li key={project.id}>
              <article className="group flex flex-col sm:flex-row gap-6 rounded-3xl bg-gradient-to-b from-sky-100/80 to-sky-50/80 dark:from-slate-900/60 dark:to-slate-800/60 backdrop-blur-md border border-white/60 dark:border-white/10 shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)]">

                <div className="relative w-full sm:w-[370px] h-56 sm:h-auto shrink-0 overflow-hidden rounded-2xl bg-zinc-200">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 370px"
                    className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-col justify-center gap-3">
                  <h3 className="font-gotham font-bold text-sky-900 dark:text-sky-300 text-xl sm:text-2xl uppercase tracking-wide leading-tight">
                    {project.title}
                  </h3>

                  <p className="font-gotham text-sky-900 dark:text-sky-400 text-lg sm:text-xl leading-snug">
                    {project.category}
                  </p>

                  <p className="font-gotham text-stone-800 dark:text-stone-300 text-base sm:text-lg leading-8 max-w-[735px]">
                    {project.description}
                  </p>

                  <Link
                    href={`/projetos/${project.slug}`}
                    className="mt-2 inline-flex items-center gap-2 self-start px-6 py-3 rounded-xl font-gotham font-medium text-stone-900 dark:text-white text-sm uppercase tracking-widest bg-gradient-to-r from-white/70 to-blue-200 dark:from-slate-800/60 dark:to-blue-900/50 border border-sky-500 dark:border-sky-400 shadow-[0px_4px_24px_0px_rgba(0,0,0,0.25)] transition-all duration-300 hover:brightness-95 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500"
                  >
                    VER DETALHES
                    <ArrowUpRight size={16} strokeWidth={2} />
                  </Link>
                </div>

              </article>
            </li>
          ))}
        </ul>

        {/* BOTÃO VER MAIS PROJETOS */}
        <Link
          href="/projetos"
          className="inline-flex items-center justify-center w-full max-w-sm h-16 rounded-2xl font-gotham font-bold text-stone-900 dark:text-white text-xl uppercase tracking-widest bg-gradient-to-r from-white/70 to-blue-200 dark:from-slate-800/60 dark:to-blue-900/50 border border-sky-500 dark:border-sky-400 shadow-[0px_4px_24px_0px_rgba(0,0,0,0.25)] transition-all duration-300 hover:brightness-95 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500"
        >
          VER MAIS PROJETOS
        </Link>

      </div>
    </section>
  );
}