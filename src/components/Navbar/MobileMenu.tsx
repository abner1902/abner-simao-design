'use client';

import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  links: string[];
  labels: Record<string, string>;
  getHref: (item: string) => string;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  links,
  labels,
  getHref,
  onClose,
}: MobileMenuProps) {
  const router = useRouter();

  const handleNav = (href: string) => {
    onClose();
    setTimeout(() => router.push(href), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden"
          />

          <motion.div
            drag="x"
            dragConstraints={{ left: -300, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(e, info) => {
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
            <div className="flex flex-col gap-6 px-6">
              <ul className="flex flex-col gap-0">
                {links.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => handleNav(getHref(item))}
                      className="block w-full text-left py-5 text-sm font-black uppercase tracking-widest text-white/80 transition-colors hover:bg-white/10 dark:hover:bg-white/5 hover:text-emerald-400 dark:hover:text-emerald-300 border-b border-white/5 dark:border-white/5"
                    >
                      {labels[item]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto p-6 text-white/20 text-[10px] uppercase tracking-widest text-center">
              ← Arraste para fechar
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}