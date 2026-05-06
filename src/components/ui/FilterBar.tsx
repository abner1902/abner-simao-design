'use client';

import { motion } from 'framer-motion';
import { LayoutGrid, Monitor, Palette, Briefcase, Video, type LucideIcon } from 'lucide-react';

export type CategoryID = 'all' | 'web' | 'branding' | 'corporate' | 'audiovisual';

interface FilterBarProps {
  activeCategory: CategoryID;
  setActiveCategory: (id: CategoryID) => void;
}

const categories: { id: CategoryID; label: string; icon: LucideIcon }[] = [
  { id: 'all', label: 'Todos', icon: LayoutGrid },
  { id: 'web', label: 'Web', icon: Monitor },
  { id: 'branding', label: 'Branding', icon: Palette },
  { id: 'corporate', label: 'B2B', icon: Briefcase },
  { id: 'audiovisual', label: 'Audiovisual', icon: Video },
];

export default function FilterBar({ activeCategory, setActiveCategory }: FilterBarProps) {
  return (
    <>
      {/* ── DESKTOP: Pill bar no topo ── */}
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
                <span className={`relative z-10 font-gotham font-black text- lg:text-label-lg uppercase tracking-widest ${isActive? 'text-white' : 'text-zinc-600 dark:text-zinc-400'}`}>
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* ── MOBILE: Bottom Dock Liquid Glass iOS 26 ── */}
      <nav
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] w-[92%] max-w-"
        aria-label="Filtros de categoria"
      >
        <div
          className="
            relative flex items-center justify-between
            bg-white/60 dark:bg-zinc-800/60
            backdrop-blur-2xl backdrop-saturate-150
            border border-white/30 dark:border-white/10
            p-1
            rounded-xl
            shadow-[0_8px_32px_rgba(0,0,0,0.12)]
            before:absolute before:inset-0 before:rounded-xl 
            before:bg-gradient-to-b before:from-white/20 before:to-transparent 
            before:pointer-events-none
          "
        >
          <span
            className="absolute top-0 left-3 right-3 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const Icon = cat.icon;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                aria-pressed={isActive}
                aria-label={`Filtrar por ${cat.label}`}
                className="relative flex-1 flex flex-col items-center justify-center gap-0.5 py-2 px-0.5 rounded-lg transition-transform duration-200 active:scale-95 focus:outline-none"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterMobile"
                    className="
                      absolute inset-y-1 inset-x-0 rounded-lg
                      bg-blue-900/10 dark:bg-white/10
                      shadow-[inset_0_1px_0_rgba(0,91,128,0.1)]
                    "
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.45 }}
                  />
                )}

                <Icon
                  size={16}
                  strokeWidth={isActive? 2 : 1.5}
                  className={`relative z-10 transition-colors duration-200 ${
                    isActive? 'text-blue-900 dark:text-white' : 'text-zinc-500 dark:text-zinc-400'
                  }`}
                  aria-hidden="true"
                />
                <span
                  className={`relative z-10 text-[6.5px] font-bold uppercase tracking-tighter leading-none transition-colors duration-200 ${
                    isActive? 'text-blue-900 dark:text-white' : 'text-zinc-500 dark:text-zinc-400'
                  }`}
                >
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