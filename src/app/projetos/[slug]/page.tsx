'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { empresasData } from '@/data/empresas';

export default function ProjectPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;

  const project = empresasData.find((p) => p.slug === slug);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') router.back(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [router]);

  if (!project) {
    return (
      <main className="relative min-h-screen w-full pt-24 pb-20 px-4">
        <div className="fixed inset-0 -z-20">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/projects/bg/projects-bg.jpg')" }} />
          <div className="absolute inset-0 backdrop-blur-2xl bg-white/40 dark:bg-slate-900/60" />
        </div>
        <div className="text-center pt-20">
          <h1 className="font-gotham font-black text-[#075985] text-3xl uppercase mb-4">Projeto não encontrado</h1>
          <button onClick={() => router.back()} className="inline-flex items-center gap-2 text-stone-600 font-gotham text-body-sm uppercase tracking-widest"><ArrowLeft size={16} /> Voltar</button>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen w-full pt-24 pb-20 px-4 sm:px-8 overflow-x-hidden">
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/projects/bg/projects-bg.jpg')" }} />
        <div className="absolute inset-0 backdrop-blur-2xl bg-white/40 dark:bg-slate-900/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-10">
        <button onClick={() => router.back()} className="self-start group flex items-center gap-2 text-stone-600 dark:text-stone-300 hover:text-[#075985] font-gotham text-body-sm uppercase tracking-widest">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Voltar para Projetos
        </button>

        <section className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/50">
          <Image src={project.image} alt={project.title} fill priority className="object-cover" />
        </section>

        <header className="text-center space-y-2">
          <h1 className="font-gotham font-black text-[#075985] dark:text-sky-300 text-3xl md:text-5xl uppercase tracking-tighter leading-tight">{project.title}</h1>
          <p className="font-gotham text-stone-700 dark:text-stone-200 text-body-lg font-medium italic uppercase tracking-widest">{project.category}</p>
        </header>

        <section className="p-6 sm:p-8 rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/50">
          <p className="font-gotham text-sky-900 dark:text-sky-100 text-body-md leading-relaxed">{project.description}</p>
        </section>

        {project.gallery && (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.gallery.map((item, index) => (
              <div key={index} className="relative aspect-video overflow-hidden rounded-2xl shadow-md border border-white/30">
                {item.type === 'video' ? (
                   <video src={item.src} autoPlay muted loop playsInline className="object-cover w-full h-full" />
                ) : (
                  <Image src={item.src} alt={item.alt} fill className="object-cover" />
                )}
              </div>
            ))}
          </section>
        )}

        {project.behance && (
          <div className="flex justify-center mt-4">
            <a href={project.behance} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border-2 border-[#075985] text-[#075985] hover:bg-[#075985] hover:text-white font-gotham font-black px-12 py-6 rounded-full transition-all uppercase text-[11px] tracking-[0.25em]">
              <ExternalLink size={20} /> Ver Case no Behance
            </a>
          </div>
        )}
      </div>
    </main>
  );
}