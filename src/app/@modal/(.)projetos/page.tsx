'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { empresasData, EmpresaProject } from '@/data/empresas';

export default function ProjetoModal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [project, setProject] = useState<EmpresaProject | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const slug = searchParams.get('project');
    if (slug) {
      const found = empresasData.find((p: EmpresaProject) => p.slug === slug);
      if (found) {
        setProject(found);
        setIsOpen(true);
      }
    }
  }, [searchParams]);

  const handleClose = () => {
    setIsOpen(false);
    router.back();
  };

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl w-full bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl"
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="relative aspect-video">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="p-6">
            <h2 className="font-gotham font-black text-2xl uppercase">{project.title}</h2>
            <p className="mt-4 text-stone-600 dark:text-stone-300">{project.description}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}