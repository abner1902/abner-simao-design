'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const casesData = [
  {
    title: 'PRESS KIT SPIRITUAL GEOMETRY',
    desc: 'Press kit digital (EPK) para Produtor e DJ de Psytrance com biografia, galeria de fotos em alta, players do Spotify, vídeos e botão para download do material de imprensa.',
    image: '/assets/images/presskit/cases/spiritual-geometry-mockup.webp',
    link: 'https://spiritual-geometry-epk.vercel.app/',
  },
  {
    title: 'PRESS KIT KOUGUI',
    desc: 'Press kit digital (EPK) para DJ e Produtor de Psytrance com visual psicodélico exclusivo, galeria de fotos em alta resolução, agenda e canal direto para contratantes via WhatsApp.',
    image: '/assets/images/presskit/cases/kougui-mockup.webp',
    link: 'https://presskit-kougui.vercel.app/?v=2',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
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

export default function PresskitCases() {
  return (
    <section id="cases" className="py-20 px-6 md:px-12 lg:px-20 bg-transparent relative z-10">
      <div className="max-w-[1280px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-gotham font-ultra text-sky-900 dark:text-sky-300 text-2xl sm:text-4xl text-center uppercase mb-12 drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
        >
          Projetos Recentes Entregues
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {casesData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-xl border border-white dark:border-white/10 flex flex-col justify-between transition-shadow hover:shadow-2xl"
            >
              <div>
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-[280px] sm:h-[320px] mb-6 rounded-2xl overflow-hidden cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <h3 className="font-gotham font-ultra text-sky-900 dark:text-sky-300 text-xl sm:text-2xl uppercase mb-3">
                  {item.title}
                </h3>
                <p className="font-gotham font-medium text-stone-800 dark:text-slate-300 text-base leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-4 rounded-xl bg-gradient-to-r from-sky-600 to-sky-800 hover:from-sky-500 hover:to-sky-700 text-white font-gotham font-bold text-base uppercase tracking-wider shadow-md transition-all transform active:scale-[0.98]"
              >
                Ver Projeto Online ↗
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}