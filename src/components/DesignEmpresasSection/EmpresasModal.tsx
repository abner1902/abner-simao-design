'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { EmpresaProject, GalleryItem } from '@/data/empresas';

interface EmpresasModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: EmpresaProject | null;
}

export default function EmpresasModal({
  isOpen,
  onClose,
  project,
}: EmpresasModalProps) {
  
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  // ESC: fecha lightbox primeiro, depois o modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightbox) setLightbox(null);
        else onClose();
      }
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose, lightbox]);

  // Reset lightbox ao fechar o modal
  useEffect(() => {
    if (!isOpen) setLightbox(null);
  }, [isOpen]);

  // Adicionar entrada no histórico quando modal abrir
  useEffect(() => {
    if (isOpen) {
      window.history.pushState({ modalOpen: true }, '');
    }

    const handlePopState = () => {
      if (isOpen) onClose();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white/40 dark:bg-black/80 backdrop-blur-3xl p-4 md:p-8 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="relative max-w-5xl w-full flex flex-col gap-6 my-auto bg-white/95 dark:bg-zinc-900/90 backdrop-blur-md border border-white dark:border-white/10 rounded-3xl p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Header ── */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <h3 className="font-gotham font-black text-zinc-900 dark:text-white text-heading-lg uppercase tracking-tighter leading-none">
                  {project.title}
                </h3>
                <p className="font-gotham text-sky-600 dark:text-sky-400 text-label-sm uppercase tracking-widest font-bold">
                  Design Estratégico · Case Study
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 bg-zinc-900/5 hover:bg-zinc-900/10 dark:bg-white/5 dark:hover:bg-white/20 text-zinc-900 dark:text-white rounded-full transition-all shrink-0"
              >
                <X size={24} />
              </button>
            </div>

            {/* ── Descrição ── */}
            {project.description && (
              <p className="font-gotham text-zinc-600 dark:text-white/70 text-body-sm leading-relaxed tracking-tight max-w-3xl">
                {project.description}
              </p>
            )}

            {/* ── Masonry Gallery ── */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="columns-2 sm:columns-3 gap-4 space-y-4 py-4">
                {project.gallery.map((item: GalleryItem, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.1 + index * 0.05, 
                      duration: 0.5, 
                      ease: [0.19, 1, 0.22, 1] 
                    }}
                    className="break-inside-avoid rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/5 group cursor-zoom-in"
                    onClick={(e) => { e.stopPropagation(); if (item.type !== 'video') setLightbox(item); }}
                  >
                    <div className="relative w-full">
                      {item.type === 'video' ? (
                        <video src={item.src} autoPlay muted loop playsInline className="w-full h-auto object-cover" />
                      ) : (
                        <div className="relative w-full">
                          <Image
                            src={item.src}
                            alt={item.alt}
                            width={600}
                            height={900}
                            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                            <span className="text-white text-2xl">🔍</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-3 bg-white/80 dark:bg-black/60 backdrop-blur-md border-t border-zinc-200 dark:border-white/5">
                      <p className="font-gotham text-zinc-500 dark:text-white/40 text-label-sm uppercase tracking-widest leading-none">
                        {item.caption}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* ── Footer ── */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-zinc-200 dark:border-white/10">
              <p className="text-zinc-400 dark:text-white/30 font-gotham text-label-sm uppercase tracking-tighter">
                © {new Date().getFullYear()} Abner Simão · Design Engineer
              </p>
              
              {project.behance && (
                <a href={project.behance} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-sky-600 dark:hover:bg-sky-400 transition-all group shadow-lg">
                  <span className="font-gotham font-black text-label-lg uppercase tracking-widest">Ver no Behance</span>
                  <ArrowUpRight size={18} />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botão X */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors"
                aria-label="Fechar imagem"
              >
                <X size={28} />
              </button>

              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={1200}
                height={900}
                className="w-full h-auto rounded-2xl object-contain shadow-2xl"
              />

              {/* Caption */}
              <p className="mt-3 text-center font-gotham text-white/50 text-label-sm uppercase tracking-widest">
                {lightbox.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}