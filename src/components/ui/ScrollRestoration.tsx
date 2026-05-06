'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    const saveScroll = () => {
      sessionStorage.setItem(`scroll-${pathname}`, String(window.scrollY));
    };

    const saved = sessionStorage.getItem(`scroll-${pathname}`);
    if (saved) {
      setTimeout(() => window.scrollTo(0, parseInt(saved)), 50);
    }

    window.addEventListener('beforeunload', saveScroll);
    return () => window.removeEventListener('beforeunload', saveScroll);
  }, [pathname]);

  return null;
}