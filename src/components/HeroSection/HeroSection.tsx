'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      aria-label="Hero section"
      className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/backgrounds/bg-liquid-forms.webp"
          alt="Background abstrato com formas fluidas"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/50 to-cyan-50/40 dark:from-slate-950/60 dark:via-slate-900/50 dark:to-blue-950/30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/10 p-8 shadow-[0px_8px_32px_0px_rgba(0,0,0,0.25)] backdrop-blur-[24px] animate-in fade-in duration-700 dark:border-white/10 dark:bg-slate-900/40 sm:p-10 lg:p-10">

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-10">

            {/* Conteúdo */}
            <div className="order-1 flex flex-col items-center justify-center space-y-6 text-center lg:items-start lg:text-left">

              {/* Headline */}
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both">

                <h1 className="max-w-[640px] font-gotham text-[1.5rem] font-black leading-[1.02] tracking-tight text-blue-900 dark:text-blue-300 sm:text-[1.7rem] lg:text-[1.72rem] xl:text-[1.85rem]">

                  Designer UI/UX &<span className="block lg:inline"> Creative Developer</span>

                  {/* Subtitle removido para melhor leitura no mobile */}

                </h1>

              </div>

              {/* Subheadline */}
              <p className="max-w-2xl text-base font-semibold leading-relaxed text-emerald-600 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both dark:text-emerald-400 sm:text-lg">

                Direção de arte e front-end com React/Next.js

              </p>

              {/* Texto institucional */}
              <p className="max-w-xl text-sm leading-relaxed text-slate-700 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both dark:text-slate-300 sm:text-base">

                Para marcas e projetos digitais.
Identidades visuais, landing pages e experiências autorais desde 2011.

                <span className="mt-4 block text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                  Branding • Motion Design • Sites • Vetorização
                </span>

              </p>

              {/* Foto mobile */}
              <div className="flex w-full justify-center py-4 lg:hidden animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 fill-mode-both">

                <div className="relative aspect-square w-full max-w-[208px] overflow-hidden rounded-3xl border border-white/20 bg-white/5 shadow-xl">

                  <Image
                    src="/assets/images/profile/abner-hero-photo.webp"
                    alt="Abner Simão — Designer UI/UX & Creative Developer"
                    fill
                    priority
                    quality={100}
                    sizes="208px"
                    className="object-cover object-top scale-[1.08]"
                  />

                </div>

              </div>

              {/* CTA */}
              <div className="flex w-full flex-col gap-3 pt-4 sm:flex-row animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000 fill-mode-both">

                <Link
                  href="/projetos"
                  aria-label="Ver projetos de branding, UI UX e desenvolvimento criativo"
                  className="flex-1 rounded-xl border-2 border-blue-900 px-8 py-3 text-center text-sm font-bold uppercase tracking-tight text-blue-900 transition-all hover:bg-blue-900 hover:text-white dark:border-blue-400 dark:text-blue-300"
                >
                  Ver Projetos
                </Link>

                <Link
                  href="/contato"
                  aria-label="Solicitar orçamento para UI UX, branding e desenvolvimento front-end"
                  className="flex-1 rounded-xl border border-emerald-500 bg-gradient-to-r from-white/40 to-emerald-400/50 px-8 py-3 text-center text-sm font-bold uppercase tracking-tight text-slate-900 transition-all hover:shadow-lg dark:from-slate-800/60 dark:to-emerald-600/50 dark:text-white"
                >
                  Solicitar Orçamento
                </Link>

              </div>

            </div>

            {/* Foto desktop */}
            <div className="order-2 hidden items-center justify-center lg:flex animate-in fade-in zoom-in-95 duration-1000 delay-500 fill-mode-both">

              <div className="relative aspect-square w-full max-w-[288px] overflow-hidden rounded-3xl border border-white/20 bg-white/5 shadow-2xl">

                <Image
                  src="/assets/images/profile/abner-hero-photo.webp"
                  alt="Abner Simão"
                  fill
                  priority
                  quality={100}
                  sizes="288px"
                  className="object-cover object-top scale-[1.08]"
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}