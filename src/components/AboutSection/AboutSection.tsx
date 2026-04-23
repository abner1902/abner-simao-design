'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section
      id="sobre"
      aria-label="Sobre Abner Simão"
      className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/about/geometric-about-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-100"
          aria-hidden="true"
        />
        <div className="absolute inset-0 opacity-50 mix-blend-multiply bg-gradient-to-r from-lime-300/70 via-lime-300/70 via-[5%] to-purple-400/70" />
        <div className="absolute inset-0 bg-white/30 dark:bg-slate-950/70" />
      </div>

      <div className="max-w-[1317px] mx-auto relative z-10 flex flex-col items-center gap-16">

        {/* HEADER */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-gotham font-ultra text-sky-900 dark:text-sky-300 text-3xl sm:text-5xl uppercase tracking-wide">
            SOBRE MIM
          </h2>
          <p className="font-gotham font-normal text-stone-900 dark:text-stone-300 text-xl sm:text-3xl leading-9 max-w-[1277px]">
            Tudo o que o seu projeto precisa, do design visual ao site completo.
          </p>
        </div>

        {/* GRID 3 CARDS */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

          {/* CARD 1 — DESIGN 360º & BRANDING */}
          <article className="h-full flex flex-col items-center gap-6 rounded-[34px] bg-blue-100/70 dark:bg-slate-900/60 backdrop-blur-md border border-white/60 dark:border-white/10 shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] p-8 text-center">
            <h3 className="font-gotham font-ultra text-sky-800 dark:text-sky-300 text-3xl uppercase tracking-wide leading-tight">
              DESIGN 360º<br />& BRANDING
            </h3>
            <div className="flex flex-col gap-4 font-gotham text-stone-900 dark:text-stone-300 text-lg leading-8">
              <p>Crio marcas que passam <strong>confiança imediata</strong>. Do branding estratégico ao design impresso <strong>(banners, flyers e folders)</strong>, entrego soluções completas.</p>
              <p>Comigo você resolve tudo: <strong>da papelaria técnica aos vídeos para redes sociais</strong>. <strong>Tire sua ideia do zero</strong> com menos burocracia e mais resultado.</p>
              <p>Trabalhos para <strong>Gradiente</strong>, <strong>Confirp Contabilidade</strong> e <strong>Governo do Piauí</strong>.</p>
            </div>
          </article>

          {/* CARD 2 — CENTRAL com foto */}
          <article className="h-full flex flex-col items-center gap-6 rounded-[34px] bg-blue-100/70 dark:bg-slate-900/60 backdrop-blur-md border border-white/60 dark:border-white/10 shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] p-8 text-center">
            <div className="relative w-48 h-48 rounded-3xl overflow-hidden">
              <Image
                src="/assets/images/profile/abner-vector.jpg"
                alt="Abner Simão — Designer e Desenvolvedor Front-end"
                fill
                className="object-cover object-top"
              />
            </div>
            <h3 className="font-gotham font-ultra text-sky-800 dark:text-sky-300 text-3xl uppercase tracking-wide">
              DESIGN + CÓDIGO
            </h3>
            <div className="flex flex-col gap-4 font-gotham text-stone-900 dark:text-stone-300 text-lg leading-8">
              <p>Crio <strong>sites exclusivos que não usam modelos prontos</strong>. Desenvolvo cada página do zero para ser rápida, segura e aparecer no Google.</p>
              <p><strong>+15 anos de design</strong> unidos à <strong>tecnologia mais moderna</strong> — React, Next.js e Tailwind.</p>
              <p>Experiência em projetos para eventos e artistas <strong>nacionais e internacionais</strong>.</p>
            </div>
          </article>

          {/* CARD 3 — FORMAÇÃO & EXPERIÊNCIA */}
          <article className="h-full flex flex-col items-center gap-6 rounded-[34px] bg-blue-100/70 dark:bg-slate-900/60 backdrop-blur-md border border-white/60 dark:border-white/10 shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] p-8 text-center">
            <h3 className="font-gotham font-ultra text-sky-800 dark:text-sky-300 text-3xl uppercase tracking-wide leading-tight">
              FORMAÇÃO &<br />EXPERIÊNCIA
            </h3>
            <div className="flex flex-col gap-4 font-gotham text-stone-900 dark:text-stone-300 text-lg leading-8">
              <p>Graduado pelo <strong>Mackenzie</strong> SP (2011–2015), com especializações no <strong>Senac e Impacta</strong>.</p>
              <p>Sou um <strong>designer criativo por essência</strong>, mestre em Adobe e Figma.</p>
              <p>Com passagens por <strong>Lenoxx</strong>, <strong>Equilibrium</strong>, <strong>Portal Telemedicina</strong> e <strong>Grupo Fróes</strong>, acumulo experiência em agências, multinacionais e atuo como <strong>freelancer</strong> para clientes nacionais e internacionais.</p>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}