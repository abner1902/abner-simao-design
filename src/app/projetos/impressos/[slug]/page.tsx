'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import QuickFactsTable from '@/components/project/QuickFactsTable';
import { impressosData } from '@/data/impressos';

export default function ProjectPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;

  const project = impressosData.find((p) => p.id === slug);

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
            style={{ backgroundImage: "url('/assets/images/projects/bg/projects-bg.webp')" }}
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
      {/* BACKGROUND ORIGINAL PRESERVADO */}
      <div className="fixed inset-0 -z-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/projects/bg/projects-bg.webp')" }}
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

        {/* HERO IMAGE */}
        <section className="relative w-full max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/50 dark:border-white/10 bg-slate-200 dark:bg-slate-800">
          <Image
            src={project.image}
            alt={`${project.title} - Portfólio Abner Simão Design`}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1024px"
          />
        </section>

        {/* HEADER SEO OTIMIZADO */}
        <header className="text-center space-y-2 w-full">
          <h1 className="font-gotham font-black text-[#075985] dark:text-sky-300 text-3xl md:text-5xl uppercase tracking-tighter leading-tight drop-shadow-sm">
            {project.title}
          </h1>
          <p className="font-gotham text-stone-700 dark:text-stone-200 text-body-lg font-medium italic">
            Design para Impressos • {project.category}
          </p>
        </header>

        {/* FICHA TÉCNICA - AGORA COM O ÚNICO BOTÃO DE ORÇAMENTO DENTRO DELA */}
        <div className="w-full max-w-5xl mx-auto">
          <QuickFactsTable
            role="Design & Direção de Arte" 
            stack={project.tools} 
            year={project.year}
            methodology="Produção Gráfica CMYK / Arte-Finalização" 
            status="Produção Finalizada"
          />
        </div>

        {/* CONTEXTO DO PROJETO - TEXTOS TÉCNICOS POR NICHO */}
        <section className="relative p-6 sm:p-8 rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-lg w-full max-w-5xl mx-auto">
          <h2 className="font-gotham font-bold text-sky-800 dark:text-sky-400 text-label-lg uppercase tracking-widest mb-4">
            {project.id === 'duque-carnes-caixa' ? 'Engenharia de Embalagem & Faca de Corte' : 
             project.id === 'pizza-cardapio' ? 'Engenharia de Menu & Design Editorial' : 
             'Estratégia e Solução Visual'}
          </h2>
          <p className="font-gotham text-stone-800 dark:text-stone-200 text-body-md sm:text-body-lg leading-relaxed whitespace-pre-line">
            {project.challenge}
          </p>
        </section>

        {/* SEÇÃO FINAL: MANTIDO APENAS O LINK EXTERNO SE HOUVER */}
        {project.behanceUrl && (
          <section className="flex items-center justify-center w-full mt-4">
            <a
              href={project.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border-2 border-[#075985] text-[#075985] dark:text-sky-300 dark:border-sky-300 hover:bg-[#075985] hover:text-white font-gotham font-black px-12 py-6 rounded-full transition-all uppercase text-[11px] tracking-[0.25em]"
            >
              <ExternalLink size={20} />
              Ver Case no Behance
            </a>
          </section>
        )}
      </div>
    </main>
  );
}