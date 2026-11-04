'use client';

import { motion } from 'framer-motion';
import { TbBusinessplan, TbClockCheck, TbLink, TbShieldCheck } from 'react-icons/tb';

const whyUseData = [
  {
    icon: TbBusinessplan,
    title: 'ECONÔMICO E DURADOURO',
    desc: 'Pagamento único. Sem mensalidade e sem cobranças recorrentes.',
  },
  {
    icon: TbClockCheck,
    title: 'RÁPIDO E PROFISSIONAL',
    desc: 'Entrega em 5 a 7 dias úteis. Link pronto para mandar para contratantes.',
  },
  {
    icon: TbLink,
    title: 'LINK VITALÍCIO DE VERDADE',
    desc: 'Seu link no ar para sempre. Sem taxa anual, sem expirar.',
  },
  {
    icon: TbShieldCheck,
    title: 'TECNOLOGIA DE PONTA',
    desc: 'Seu press kit digital com a mesma tecnologia usada por Netflix, TikTok e Uber. Carrega em 1 segundo, sem travar.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function PresskitWhyUse() {
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
          Por que usar Presskit Digital?
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {whyUseData.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-b from-sky-100/90 to-sky-50/80 dark:from-slate-900/80 dark:to-slate-800/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-white/80 dark:border-white/10 flex flex-col items-center text-center justify-between transition-shadow hover:shadow-2xl"
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-6 text-teal-500 dark:text-teal-400">
                    <IconComponent size={42} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-gotham font-ultra text-sky-900 dark:text-sky-300 text-lg uppercase mb-4 leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="font-gotham font-medium text-stone-800 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
