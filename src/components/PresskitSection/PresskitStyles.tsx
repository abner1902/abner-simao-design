'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const stylesData = [
  {
    title: 'BANDA DE REGGAE',
    desc: 'Press kit com fotos de palco, agenda de shows e Spotify.',
    image: '/assets/images/presskit/cases/banda-de-reggae.webp',
  },
  {
    title: 'CANTORA POP',
    desc: 'Press kit delicado com galeria, YouTube, Instagram e release bilíngue.',
    image: '/assets/images/presskit/cases/pop-singer.webp',
  },
  {
    title: 'BANDA DE ROCK',
    desc: 'Press kit musical com vídeos, com design personalizado.',
    image: '/assets/images/presskit/cases/rock-band.webp',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function PresskitStyles() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-transparent relative z-10">
      <div className="max-w-[1280px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-gotham font-ultra text-sky-900 dark:text-sky-300 text-2xl sm:text-4xl text-center uppercase mb-12 drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
        >
          Como Ficaria o Seu Press Kit?
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stylesData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white dark:border-white/10 flex flex-col items-center text-center transition-shadow hover:shadow-2xl"
            >
              <div className="relative w-full h-[200px] mb-6 rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-gotham font-bold text-sky-900 dark:text-sky-300 text-xl uppercase mb-3">
                {item.title}
              </h3>
              <p className="font-gotham font-medium text-stone-800 dark:text-slate-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
