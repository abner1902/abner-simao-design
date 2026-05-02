'use client';

import { motion } from 'framer-motion';
import { LayoutGrid, Monitor, Palette, Briefcase, Video } from 'lucide-react';

export type CategoryID = 'all' | 'web' | 'branding' | 'corporate' | 'audiovisual';

interface FilterBarProps {
  activeCategory: CategoryID;
  setActiveCategory: (id: CategoryID) => void;
}

const categories: { id: CategoryID; label: string; icon: any }[] = [
  { id: 'all', label: 'Todos', icon: LayoutGrid },
  { id: 'web', label: 'Web', icon: Monitor },
  { id: 'branding', label: 'Branding', icon: Palette },
  { id: 'corporate', label: 'B2B', icon: Briefcase },
  { id: 'audiovisual', label: 'Audiovisual', icon: Video },
];

export default function FilterBar({ activeCategory, setActiveCategory }: FilterBarProps) {
  return (
    <>
      {/* ── TABLET & DESKTOP: Barra no Topo (Visível de 768px para cima) ── */}
      <nav className="hidden md:flex w-full mb-8 justify-center px-6">
        <div className="flex bg-white/20 dark:bg-white/5 backdrop-blur-2xl border border-white/40 dark:border-white/10 p-1.5 rounded-full shadow-lg">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="relative px-5 lg:px-6 py-2.5 rounded-full transition-all focus:outline-none"
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeFilter" 
                    className="absolute inset-0 bg-sky-600 shadow-md rounded-full"
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <span className={`relative z-10 font-gotham font-black text-[10px] lg:text-label-lg uppercase tracking-widest ${isActive ? 'text-white' : 'text-zinc-600 dark:text-zinc-400'}`}>
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* ── MOBILE: Bottom Dock Flutuante (Apenas telas menores que 768px) ── */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] w-[92%] max-w-[400px]">
        <div className="flex items-center justify-between bg-white/80 dark:bg-black/60 backdrop-blur-3xl border border-white dark:border-white/20 p-2 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const Icon = cat.icon;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="relative flex-1 flex flex-col items-center justify-center py-3 rounded-full transition-all"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterMobile"
                    className="absolute inset-0 bg-sky-600 shadow-[0_0_15px_rgba(2,132,199,0.5)] rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Icon size={18} className={`relative z-10 ${isActive ? 'text-white' : 'text-zinc-800 dark:text-zinc-400'}`} />
                <span className={`relative z-10 text-[8px] font-black uppercase tracking-tighter mt-1 ${isActive ? 'text-white' : 'text-zinc-800 dark:text-zinc-400'}`}>
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}