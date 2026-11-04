'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PresskitHero() {
  const whatsappUrl = "https://wa.me/5511996670948?text=Ol%C3%A1%20Abner!%20Vim%20pelo%20site%20e%20quero%20criar%20meu%20Press%20Kit%20Digital!";

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-6 md:px-12 lg:px-20 overflow-hidden bg-slate-100 dark:bg-slate-950 transition-colors">
      {/* Background Image da Multidão/Show & Overlay Dinâmico */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/presskit/BG/hero-show-bg.webp"
          alt="Show Background"
          fill
          className="object-cover opacity-75 dark:opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-400/30 via-sky-200/20 to-slate-100 dark:from-sky-950/80 dark:via-slate-900/60 dark:to-slate-950" />
      </div>

      <div className="max-w-[1180px] mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Card Principal - Glassmorphism Fiel ao Figma (Day / Night Shift) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-slate-100/70 dark:bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 sm:p-12 md:p-14 shadow-[0_15px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)] border border-white/80 dark:border-white/10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="font-gotham font-ultra text-sky-800 dark:text-sky-300 text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight mb-4"
          >
            Press Kit Musical Personalizado
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
            className="font-gotham font-bold text-emerald-600 dark:text-emerald-400 text-xl sm:text-3xl lg:text-4xl uppercase mb-8"
          >
            Link Vitalício, Sem Mensalidade!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
            className="font-gotham font-bold text-stone-900 dark:text-slate-100 text-base sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-10"
          >
            Crie seu link vitalício com design exclusivo e fundo personalizado. Para DJs, bandas de rock, reggae, pop e cantores. Sem mensalidade, sem template.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.65, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {/* Botão Ver Projeto Real (Figma Style) */}
            <a
              href="#cases"
              onClick={(e) => handleScroll(e, 'cases')}
              className="w-full sm:w-auto min-w-[280px] py-4 px-8 rounded-2xl font-gotham font-bold text-stone-900 dark:text-white text-lg sm:text-xl uppercase tracking-wider text-center bg-gradient-to-r from-white/70 to-blue-200/80 dark:from-slate-800/80 dark:to-blue-900/60 border border-sky-500 shadow-[0px_4px_24px_0px_rgba(0,0,0,0.25)] transition-all transform hover:scale-[1.02] active:scale-100"
            >
              Ver Projeto Real
            </a>

            {/* Botão Crie o Seu Press Kit (Figma Style) */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-w-[280px] py-4 px-8 rounded-2xl font-gotham font-bold text-stone-900 dark:text-white text-lg sm:text-xl uppercase tracking-wider text-center bg-gradient-to-r from-white/40 to-teal-500/80 dark:from-slate-800/80 dark:to-teal-700/60 border border-teal-500 shadow-[0px_4px_24px_0px_rgba(0,0,0,0.25)] transition-all transform hover:scale-[1.02] active:scale-100"
            >
              Crie o Seu Press Kit
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}