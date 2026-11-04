'use client';

import { motion } from 'framer-motion';
import { TbClipboardList, TbPencil, TbEyeCheck, TbRocket } from 'react-icons/tb';

const steps = [
  {
    title: '1 - BRIEFING',
    desc: 'Briefing completo: carreira, estilo musical, referências visuais, logotipo, fotos em alta e links de músicas e vídeos.',
    icon: TbClipboardList,
  },
  {
    title: '2 - CRIAÇÃO',
    desc: 'Com seu material, crio o design personalizado, trato as fotos, organizo os links, players e crio o fundo exclusivo do seu press kit.',
    icon: TbPencil,
  },
  {
    title: '3 - APROVAÇÃO',
    desc: 'Te mando o site pra testar. Você tem 7 dias de revisão grátis pra ajustar textos, fotos e músicas. Após isso, ajustes com taxa.',
    icon: TbEyeCheck,
  },
  {
    title: '4 - NO AR',
    desc: 'Aprovado, seu press kit digital vai pro ar com link vitalício. Contratante te fecha em 1 clique, fã conhece sua história em segundos. Pronto pra bio do Instagram.',
    icon: TbRocket,
  },
];

export default function PresskitHowItWorks() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-transparent relative z-10">
      <div className="max-w-[1280px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-gotham font-ultra text-sky-900 dark:text-sky-300 text-2xl sm:text-4xl text-center uppercase mb-14 drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
        >
          Como Funciona
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-slate-100/70 dark:bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-xl border border-teal-400 dark:border-teal-500/30 relative"
        >
          {/* Linha Horizontal exclusiva para Desktop */}
          <div className="hidden lg:block absolute top-[100px] left-[12%] right-[12%] h-1 bg-teal-500 pointer-events-none z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 sm:gap-10 relative z-10">
            {steps.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex flex-col items-center text-center group relative z-10"
                >
                  <div className="w-24 h-24 rounded-full bg-sky-100 dark:bg-slate-800 border-4 border-teal-500 flex items-center justify-center mb-6 shadow-md transition-transform transform group-hover:scale-110 relative z-10">
                    <IconComponent className="text-sky-800 dark:text-sky-300 w-10 h-10 stroke-[1.8]" />
                  </div>

                  <div className="relative z-10 max-w-[280px]">
                    <h3 className="font-gotham font-ultra text-sky-900 dark:text-sky-300 text-lg sm:text-xl uppercase mb-3">
                      {item.title}
                    </h3>
                    <p className="font-gotham font-medium text-stone-800 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}