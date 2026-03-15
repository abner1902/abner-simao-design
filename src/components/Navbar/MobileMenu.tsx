'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  links: string[];
  labels: Record<string, string>;
  getHref: (item: string) => string;
  handleClick: (e: React.MouseEvent, item: string) => void;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  links,
  labels,
  getHref,
  handleClick,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay - Fecha o menu ao clicar fora */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden"
          />

          {/* Menu Lateral com Gesto de Arraste e Correção da Foto */}
          <motion.div
            drag="x"
            dragConstraints={{ left: -300, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(e, info) => {
              // Se arrastar mais de 80px para a esquerda (fechar), dispara o onClose
              if (info.offset.x < -80) {
                onClose();
              }
            }}
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 z-50 h-screen w-64 bg-blue-900/95 dark:bg-slate-900/95 backdrop-blur-xl border-r border-white/20 dark:border-white/10 overflow-y-auto pt-24 shadow-2xl lg:hidden"
          >
            {/* O Pulo do Gato para a foto Mobile */}
            <div className="flex flex-col gap-6 px-6">
              
              <ul className="flex flex-col gap-0">
                {links.map((item) => (
                  <li key={item}>
                    <Link
                      href={getHref(item)}
                      target={item === 'Tutoriais' ? '_blank' : '_self'}
                      onClick={(e) => {
                        handleClick(e, item);
                        onClose();
                      }}
                      className="block py-5 text-sm font-black uppercase tracking-widest text-white/80 transition-colors hover:bg-white/10 dark:hover:bg-white/5 hover:text-emerald-400 dark:hover:text-emerald-300 border-b border-white/5 dark:border-white/5"
                    >
                      {labels[item]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Indicador visual de gesto */}
            <div className="mt-auto p-6 text-white/20 text-[10px] uppercase tracking-widest text-center">
              ← Arraste para fechar
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}