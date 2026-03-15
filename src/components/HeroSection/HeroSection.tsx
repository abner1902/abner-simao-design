'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="início" className="relative pt-4 lg:pt-16 pb-16 overflow-hidden">
      {/* Background */}
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

      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.div
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/25 to-cyan-100/25 dark:from-slate-800/50 dark:to-blue-900/50 backdrop-blur-xl border border-white/60 dark:border-white/20 shadow-[0px_4px_24px_0px_rgba(0,0,0,0.25)] p-8 sm:p-12 lg:p-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">

            {/* Coluna de texto */}
            <motion.div className="flex flex-col justify-center items-center lg:items-start space-y-6 text-center lg:text-left">

              <motion.div variants={itemVariants}>
                <h1 className="font-black text-4xl sm:text-6xl md:text-6xl lg:text-5xl xl:text-6xl leading-tight tracking-tighter font-gotham">
                  <span className="text-blue-900 dark:text-blue-300">Oi, eu sou Abner</span>
                </h1>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold text-emerald-600 dark:text-emerald-400 leading-tight"
              >
                Eu crio marcas e construo experiências digitais modernas.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg md:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-lg"
              >
                Designer com trajetória desde 2011 em branding, UI/UX e design digital,
                combinando criatividade, estratégia e desenvolvimento front-end.
              </motion.p>

              {/* Foto mobile */}
              <motion.div variants={itemVariants} className="flex justify-center lg:hidden w-full">
                <div className="relative w-full max-w-xs sm:max-w-sm rounded-3xl overflow-hidden">
                  <Image
                    src="/assets/images/profile/abner-hero-photo.png"
                    alt="Abner Simão - Designer Gráfico e Desenvolvedor Front-end"
                    width={469}
                    height={469}
                    className="w-full h-full object-cover"
                    priority
                    quality={85}
                  />
                </div>
              </motion.div>

              {/* Botões */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4 w-full justify-center lg:justify-start">
                <button className="px-8 py-3 rounded-xl border-2 border-blue-900 dark:border-blue-400 text-blue-900 dark:text-blue-300 font-bold uppercase tracking-tight transition-all hover:bg-blue-900 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-950 text-sm md:text-base">
                  Ver Projetos
                </button>
                <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-white/40 to-emerald-400/50 dark:from-slate-800/60 dark:to-emerald-600/50 border border-emerald-500 dark:border-emerald-400 text-slate-900 dark:text-white font-bold uppercase tracking-tight transition-all hover:shadow-lg hover:from-white/60 dark:hover:from-slate-700/80 backdrop-blur-sm text-sm md:text-base">
                  Solicitar Orçamento
                </button>
              </motion.div>

            </motion.div>

            {/* Foto desktop */}
            <motion.div variants={itemVariants} className="hidden lg:flex justify-center items-center">
              <div className="relative w-full max-w-sm lg:max-h-[380px] rounded-3xl overflow-hidden">
                <Image
                  src="/assets/images/profile/abner-hero-photo.png"
                  alt="Abner Simão - Designer Gráfico e Desenvolvedor Front-end"
                  width={469}
                  height={469}
                  className="w-full h-full object-cover object-top"
                  priority
                  quality={85}
                />
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}