'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

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
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -300 }}
      transition={{ duration: 0.3 }}
      className={`fixed left-0 top-[80px] z-50 h-screen w-64 bg-blue-900/95 dark:bg-slate-900/95 backdrop-blur-xl border-r border-white/20 dark:border-white/10 overflow-y-auto ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
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
              className="block px-6 py-4 text-sm font-bold uppercase tracking-widest text-white/80 transition-colors hover:bg-white/10 dark:hover:bg-white/5 hover:text-emerald-400 dark:hover:text-emerald-300 border-b border-white/5 dark:border-white/3"
            >
              {labels[item]}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
