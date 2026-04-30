'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { 
  ArrowLeft, 
  User, 
  Calendar, 
  Wrench, 
  Layers, 
  Target 
} from 'lucide-react';
// Importando os dados corretos de impressos
import { impressosData } from '@/data/impressos';

export default function ProjectPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;
  
  // Buscando o projeto no data de impressos
  const project = impressosData.find((p) => p.id === slug);

  // ✅ Navegação por teclado (ESC para voltar)
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') router.back();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [router]);

  if (!project) {
    return (
      <main className="relative min-h-screen w-full overflow-hidden pt-24 pb-20 px-4 sm:px-8">
        <div className="fixed inset-0 -z-20">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/assets/images/projects/bg/projects-bg.jpg')" }}
          />
          <div className="absolute inset-0 backdrop-blur-2xl bg-white/50 dark:bg-slate-900/70" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center pt-20">
          <h1 className="font-gotham font-black text-[#075985] dark:text-sky-300 text-3xl sm:text-4xl uppercase tracking-tighter mb-4">
            Projeto não encontrado
          </h1>
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-stone-600 dark:text-stone-300 hover:text-[#075985] dark:hover:text-sky-300 font-gotham text-body-sm uppercase tracking-widest transition-colors"
          >
            <ArrowLeft size={16} /> Voltar para Projetos
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden pt-24 pb-20 px-4 sm:px-8">
      
      {/* ✅ FUNDO: Mantendo exatamente sua base de Glassmorphism */}
      <div className="fixed inset-0 -z-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/projects/bg/projects-bg.jpg')" }}
        />
        <div className="absolute inset-0 backdrop-blur-2xl bg-white/40 dark:bg-slate-900/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-10">
        
        <button
          onClick={() => router.back()}
          className="self-start group flex items-center gap-2 text-stone-600 dark:text-stone-300 hover:text-[#075985] dark:hover:text-sky-300 transition-colors font-gotham text-body-sm uppercase tracking-widest"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Voltar para Projetos
        </button>

        {/* ✅ HERO — FIT Centralizado com Borda na Imagem e Blur no Background do box */}
        <section className="relative w-full max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/50 dark:border-white/10 bg-slate-200 dark:bg-slate-800">
          {/* Camada de Blur de fundo */}
          <div className="absolute inset-0 z-0">
            <Image
              src={project.image}
              alt=""
              fill
              className="object-cover blur-3xl opacity-50 scale-110"
            />
          </div>
          {/* Camada Principal com a Borda na Arte */}
          <div className="relative z-10 w-full h-full flex items-center justify-center p-6 md:p-10">
            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                priority
                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] border-4 border-white/20 dark:border-white/10 rounded-lg"
                sizes="(max-width: 768px) 100vw, 1024px"
              />
            </div>
          </div>
        </section>

        <header className="text-center space-y-2 w-full">
          <h1 className="font-gotham font-black text-[#075985] dark:text-sky-300 text-3xl sm:text-4xl uppercase tracking-tighter leading-tight drop-shadow-sm">
            {project.title}
          </h1>
          <p className="font-gotham text-stone-700 dark:text-stone-200 text-body-lg font-medium">
            {project.category}
          </p>
        </header>

        {/* ✅ FICHA TÉCNICA — Sem Box, com Ícones e Tipografia original */}
        <section className="w-full max-w-5xl mx-auto px-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-[#075985] dark:text-sky-400 opacity-80">
                <User size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">Cliente</span>
              </div>
              <span className="font-gotham font-bold text-stone-800 dark:text-stone-200">{project.client}</span>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-[#075985] dark:text-sky-400 opacity-80">
                <Calendar size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">Ano</span>
              </div>
              <span className="font-gotham font-bold text-stone-800 dark:text-stone-200">{project.year}</span>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-[#075985] dark:text-sky-400 opacity-80">
                <Wrench size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">Softwares</span>
              </div>
              <span className="font-gotham font-bold text-stone-800 dark:text-stone-200">{project.tools.join(' + ')}</span>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-[#075985] dark:text-sky-400 opacity-80">
                <Layers size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">Material</span>
              </div>
              <span className="font-gotham font-bold text-stone-800 dark:text-stone-200">{project.paperType}</span>
            </div>

          </div>
        </section>

        {/* ✅ DESAFIO — Box com Blur e Ícone */}
        <section className="relative p-6 sm:p-8 rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-lg w-full max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Target size={20} className="text-emerald-700 dark:text-emerald-400" />
            <h2 className="font-gotham font-bold text-emerald-700 dark:text-emerald-400 text-label-lg uppercase tracking-widest">
              O Desafio
            </h2>
          </div>
          <p className="font-gotham text-stone-800 dark:text-stone-200 text-body-md sm:text-body-lg leading-relaxed whitespace-pre-line">
            {project.challenge}
          </p>
        </section>

      </div>
    </main>
  );
}