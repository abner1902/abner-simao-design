'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="início" className="relative pt-4 lg:pt-16 pb-16 overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/backgrounds/bg-liquid-forms.jpg"
          alt=""
          fill
          priority
          quality={75}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/50 to-cyan-50/40 dark:from-slate-950/50 dark:via-slate-900/50 dark:to-blue-950/30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-white/10 dark:bg-slate-900/40 backdrop-blur-[24px] border border-white/40 dark:border-white/10 shadow-[0px_8px_32px_0px_rgba(0,0,0,0.3)] p-8 sm:p-12 lg:p-10 animate-in fade-in duration-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Coluna de texto */}
            <div className="flex flex-col justify-center items-center lg:items-start space-y-6 text-center lg:text-left order-1">
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both">
                <h1 className="font-black text-4xl sm:text-6xl lg:text-5xl xl:text-6xl leading-tight tracking-tighter font-gotham text-blue-900 dark:text-blue-300">
                  Oi, eu sou Abner
                </h1>
              </div>

              <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
                Eu crio marcas e construo experiências digitais modernas.
              </p>

              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both">
                Designer com trajetória desde 2011 em branding, UI/UX e design digital,
                combinando criatividade, estratégia e desenvolvimento front-end.
              </p>

              {/* Foto mobile - Onde aplicamos o Zoom de "5px" (scale-110) */}
              <div className="flex justify-center lg:hidden w-full animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 fill-mode-both py-4">
                <div className="relative w-full max-w-[280px] aspect-square rounded-3xl overflow-hidden border border-white/20 shadow-xl bg-white/5">
                  <Image
                    src="/assets/images/profile/abner-hero-photo.png"
                    alt="Abner Simão"
                    fill
                    className="object-cover object-top scale-[1.10]" 
                    priority
                    quality={100}
                  />
                </div>
              </div>

              {/* Botões */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000 fill-mode-both">
                <button className="px-8 py-3 rounded-xl border-2 border-blue-900 dark:border-blue-400 text-blue-900 dark:text-blue-300 font-bold uppercase tracking-tight transition-all hover:bg-blue-900 hover:text-white text-sm">
                  Ver Projetos
                </button>
                <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-white/40 to-emerald-400/50 dark:from-slate-800/60 dark:to-emerald-600/50 border border-emerald-500 text-slate-900 dark:text-white font-bold uppercase tracking-tight transition-all hover:shadow-lg backdrop-blur-sm text-sm">
                  Solicitar Orçamento
                </button>
              </div>
            </div>

            {/* Foto desktop - Aplicado o mesmo Zoom de "5px" (scale-110) */}
            <div className="hidden lg:flex justify-center items-center animate-in fade-in zoom-in-95 duration-1000 delay-500 fill-mode-both order-2">
              <div className="relative w-full aspect-square max-w-[360px] rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-white/5">
                <Image
                  src="/assets/images/profile/abner-hero-photo.png"
                  alt="Abner Simão"
                  fill
                  className="object-cover object-top scale-[1.10]" // <- Atualizado aqui tbm
                  priority
                  quality={100}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}