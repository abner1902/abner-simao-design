'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
  {
    icon: '/assets/images/presskit/icons/bio-icon.webp',
    title: 'BIO E FOTOS',
    desc: 'Sua biografia, fotos de perfil e galeria de imagens em um só lugar.',
  },
  {
    icon: '/assets/images/presskit/icons/music-icon.webp',
    title: 'PLAYERS DE MÚSICA',
    desc: 'Seus lançamentos do Spotify integrados.',
  },
  {
    icon: '/assets/images/presskit/icons/video-icon.webp',
    title: 'VÍDEOS',
    desc: 'Seus clipes, sets e conteúdos do YouTube.',
  },
  {
    icon: '/assets/images/presskit/icons/download-icon.webp',
    title: 'BOTÃO DOWNLOAD',
    desc: 'Seu material de imprensa sempre à mão, com um clique.',
  },
  {
    icon: '/assets/images/presskit/icons/Link-forever.webp',
    title: 'LINK VITALÍCIO',
    desc: 'Seu link exclusivo no ar para sempre, sem mensalidade, pronto para enviar.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function PresskitFeatures() {
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
          Seu Press Kit Digital Completo
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -6,
                transition: { duration: 0.25, ease: 'easeOut' },
              }}
              className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white dark:border-white/10 flex flex-col items-center text-center cursor-pointer transition-shadow hover:shadow-2xl"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.2 }}
                className="w-20 h-20 relative mb-4 flex items-center justify-center"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="object-contain drop-shadow-md"
                />
              </motion.div>
              <h3 className="font-gotham font-bold text-sky-800 dark:text-sky-400 text-lg uppercase mb-2 min-h-[48px] flex items-center justify-center">
                {item.title}
              </h3>
              <p className="font-gotham font-medium text-stone-800 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}