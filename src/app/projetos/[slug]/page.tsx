'use client';

import { useEffect, useMemo } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import QuickFactsTable from '@/components/project/QuickFactsTable';

// Importação das duas fontes de dados
import { webDesignProjects } from '@/data/webDesign';
import { empresasData } from '@/data/empresas';

export default function ProjectPage() {
  const router = useRouter();
  const params = useParams();
  
  // Garantimos que o slug seja tratado corretamente como string
  const slug = typeof params?.slug === 'string' ? params.slug : '';

  // ✅ UNIFICAÇÃO SENIOR: Criamos uma lista única para busca
  const project = useMemo(() => {
    const allProjects = [...webDesignProjects, ...empresasData];
    return allProjects.find((p) => p.slug === slug);
  }, [slug]);

  // Navegação por teclado (ESC para voltar)
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') router.back();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [router]);

  // ✅ FALLBACK: Se não encontrar o projeto
  if (!project) {
    return (
      <main className="relative min-h-screen w-full pt-32 px-4 text-center">
        <div className="fixed inset-0 -z-20 bg-slate-50 dark:bg-slate-950" />
        <h1 className="font-gotham font-black text-[#075985] text-3xl uppercase tracking-tighter">
          Projeto não encontrado
        </h1>
        <p className="text-stone-500 mt-2 font-gotham text-sm uppercase tracking-widest">
          Slug: {slug}
        </p>
        <button
          onClick={() => router.back()}
          className="mt-8 inline-flex items-center gap-2 text-[#075985] font-gotham font-bold text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-all"
        >
          <ArrowLeft size={16} /> Voltar para Projetos
        </button>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden pt-24 pb-20 px-4 sm:px-8">
      {/* BACKGROUND GLASSMORPHISM */}
      <div className="fixed inset-0 -z-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/projects/bg/projects-bg.jpg')" }}
        />
        <div className="absolute inset-0 backdrop-blur-2xl bg-white/40 dark:bg-slate-900/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-10">
        {/* BOTÃO VOLTAR */}
        <button
          onClick={() => router.back()}
          className="self-start group flex items-center gap-2 text-stone-600 dark:text-stone-300 hover:text-[#075985] dark:hover:text-sky-300 transition-colors font-gotham text-xs font-bold uppercase tracking-widest"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Voltar para Projetos
        </button>

        {/* 1. HERO — Imagem principal do Case */}
        <section className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/50 dark:border-white/10 bg-slate-200 dark:bg-slate-800">
          <Image
            src={('caseImage' in project && project.caseImage) ? project.caseImage : project.image}
            alt={project.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1024px"
          />
        </section>

        {/* 2. HEADER */}
        <header className="text-center space-y-2 w-full">
          <h1 className="font-gotham font-black text-[#075985] dark:text-sky-300 text-3xl sm:text-5xl uppercase tracking-tighter leading-tight">
            {project.title}
          </h1>
          <p className="font-gotham text-stone-700 dark:text-stone-200 text-body-md md:text-body-lg font-medium uppercase tracking-widest opacity-80">
            {project.category}
          </p>
        </header>

        {/* 3. FICHA TÉCNICA (QuickFactsTable) */}
        <div className="w-full">
          <QuickFactsTable
            role={'role' in project ? project.role : "Design Engineer"}
            stack={'stack' in project ? project.stack : ["Figma", "Illustrator"]}
            year={'year' in project ? project.year : "2022"}
            methodology={'methodology' in project ? project.methodology : "Agile Design System"}
            status={'status' in project ? project.status : "Case Study"}
            liveLink={'liveLink' in project ? project.liveLink : undefined}
          />
        </div>

        {/* 4. O DESAFIO / DESCRIÇÃO */}
        <section className="relative p-6 sm:p-10 rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-lg">
          <h2 className="font-gotham font-bold text-emerald-700 dark:text-emerald-400 text-label-lg uppercase tracking-[0.2em] mb-6">
            Estratégia & Solução Visual
          </h2>
          <p className="font-gotham text-stone-800 dark:text-stone-100 text-body-md sm:text-body-lg leading-relaxed whitespace-pre-line">
            {project.description || ('challenge' in project ? project.challenge : '')}
          </p>
        </section>

        {/* 5. GALERIA (MASONRY/GRID) - Se existir */}
        {'gallery' in project && project.gallery && project.gallery.length > 0 && (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {project.gallery.map((item, index) => (
              <div key={index} className="relative aspect-video rounded-2xl overflow-hidden border border-white/30 shadow-md">
                <Image 
                  src={item.src} 
                  alt={item.alt} 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
            ))}
          </section>
        )}

        {/* 6. CTA BEHANCE - Se existir */}
        {'behance' in project && project.behance && (
          <div className="flex justify-center mt-6">
            <a
              href={project.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-[#075985] text-white px-10 py-5 rounded-full font-gotham font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-sky-600 transition-all shadow-xl"
            >
              <span>Ver Case Completo no Behance</span>
              <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        )}
      </div>
    </main>
  );
}