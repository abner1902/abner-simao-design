'use client';

import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FiSun, FiMoon } from 'react-icons/fi';
import { SiBehance } from 'react-icons/si';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDark(isDarkMode);
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, []);

  const toggleTheme = () => {
    if (typeof window === 'undefined') return;
    const newState = !isDark;
    setIsDark(newState);
    localStorage.setItem('theme', newState ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  const links = ['Início', 'Serviços', 'Projetos', 'Sobre', 'Contato'];

  const labels: Record<string, string> = {
    'Início': 'Início',
    'Serviços': 'Serviços',
    'Projetos': 'Projetos',
    'Sobre': 'Sobre',
    'Contato': 'Contato',
  };

  const getSectionId = (item: string) => {
    const maps: Record<string, string> = {
      'Início': 'início',
      'Serviços': 'serviços',
      'Sobre': 'sobre',
      'Projetos': 'projetos'
    };
    return maps[item] || item.toLowerCase();
  };

  const getHref = (item: string) => {
    if (item === 'Contato') return '/contato';
    if (item === 'Projetos') return '/projetos';
    return `/#${getSectionId(item)}`;
  };


  return (
    <>
      <nav className="fixed top-0 left-0 z-[60] w-full bg-blue-900/80 dark:bg-slate-950/90 backdrop-blur-md border-b border-white/20 dark:border-white/10 shadow-lg">
        <div className="flex h-16 md:h-20 w-full items-center px-6 md:px-12 lg:px-20">
          {/* COLUNA 1: Logo */}
          <div className="flex flex-1 items-center">
            <Link href="/" className="transition-transform hover:scale-105">
              <Image
                src="/assets/images/logos/logotipo-abnersimao-branco.webp"
                alt="Abner Simão"
                width={160}
                height={40}
                className="h-10 w-auto lg:h-12"
                priority
              />
            </Link>
          </div>

          {/* COLUNA 2: Menu Desktop */}
          <ul className="hidden items-center justify-center gap-8 lg:flex flex-1">
              {links.map((item) => (
                <li key={item}>
                  <Link
                    href={getHref(item)}
                    className="text-sm font-black uppercase tracking-tight text-white/80 transition-colors hover:text-emerald-400 dark:text-white/70 dark:hover:text-emerald-300"
                  >
                    {labels[item]}
                  </Link>
                </li>
              ))}
            </ul>

          {/* COLUNA 3: Ícones */}
          <div className="flex flex-1 items-center justify-end gap-5">
              <a
                href="https://www.behance.net/abnersimao"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
                className="text-2xl text-white/70 transition-colors hover:text-emerald-400"
              >
                <SiBehance />
              </a>

              <button
                onClick={toggleTheme}
                aria-label="Alternar tema"
                className="hidden text-2xl text-white/70 transition-colors hover:text-emerald-400 md:block"
              >
                {isDark ? <FiSun size={22} /> : <FiMoon size={22} />}
              </button>

              <button
                onClick={() => setOpen(!open)}
                aria-label="Menu"
                className="text-2xl text-white/70 transition-colors hover:text-emerald-400 lg:hidden"
              >
                {open ? <FiX /> : <FiMenu />}
              </button>
            </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={open}
        links={links}
        labels={labels}
        getHref={getHref}
        onClose={() => setOpen(false)}
      />
    </>
  );
}