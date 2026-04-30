'use client';



import { useEffect } from 'react';

import { useRouter, useParams } from 'next/navigation';

import Image from 'next/image';

import { ArrowLeft } from 'lucide-react';

import QuickFactsTable from '@/components/project/QuickFactsTable';

import { webDesignProjects } from '@/data/webDesign';



export default function ProjectPage() {

const router = useRouter();

const params = useParams();

const slug = params.slug as string;


const project = webDesignProjects.find((p) => p.slug === slug);



// ✅ Navegação por teclado (ESC para voltar)

useEffect(() => {

const handleEsc = (e: KeyboardEvent) => {

if (e.key === 'Escape') router.back();

};

window.addEventListener('keydown', handleEsc);

return () => window.removeEventListener('keydown', handleEsc);

}, [router]);



// ✅ Página 404 personalizada

if (!project) {

return (

<main className="relative min-h-screen w-full overflow-hidden pt-24 pb-20 px-4 sm:px-8">

{/* Fundo para 404 (mantendo padrão) */}

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


{/* ✅ FUNDO: Mesma imagem da seção projetos + Glassmorphism Intenso */}

<div className="fixed inset-0 -z-20">

{/* Imagem Base (Idêntica à página /projetos) */}

<div

className="absolute inset-0 bg-cover bg-center bg-no-repeat"

style={{ backgroundImage: "url('/assets/images/projects/bg/projects-bg.jpg')" }}

/>

{/* Overlay Blur + Glass (Mais intenso para legibilidade premium) */}

<div className="absolute inset-0 backdrop-blur-2xl bg-white/40 dark:bg-slate-900/60" />

</div>



{/* Container centralizado (Fica acima do fundo) */}

<div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-10">


{/* Botão Voltar */}

<button

onClick={() => router.back()}

className="self-start group flex items-center gap-2 text-stone-600 dark:text-stone-300 hover:text-[#075985] dark:hover:text-sky-300 transition-colors font-gotham text-body-sm uppercase tracking-widest"

aria-label="Voltar para página de projetos"

>

<ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />

Voltar para Projetos

</button>



{/* 1. HERO — Imagem GRANDE (Guia de largura) */}

<section className="relative w-full max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/50 dark:border-white/10 bg-slate-200 dark:bg-slate-800">

<Image

src={project.caseImage || project.image}

alt={project.imageAlt}

fill

priority

className="object-cover"

sizes="(max-width: 768px) 100vw, 1024px"

loading="eager"

/>

</section>



{/* 2. HEADER — Título centralizado */}

<header className="text-center space-y-2 w-full">

<h1 className="font-gotham font-black text-[#075985] dark:text-sky-300 text-3xl sm:text-4xl uppercase tracking-tighter leading-tight drop-shadow-sm">

{project.title}

</h1>

<p className="font-gotham text-stone-700 dark:text-stone-200 text-body-lg font-medium">

{project.category}

</p>

</header>



{/* 3. FICHA TÉCNICA (Alinhada) */}

<div className="w-full max-w-5xl mx-auto">

<QuickFactsTable

role={project.role}

stack={project.stack}

year={project.year}

methodology={project.methodology}

status={project.status}

liveLink={project.liveLink}

/>

</div>



{/* 4. O DESAFIO (Alinhado) */}

<section className="relative p-6 sm:p-8 rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-lg w-full max-w-5xl mx-auto">

<h2 className="font-gotham font-bold text-emerald-700 dark:text-emerald-400 text-label-lg uppercase tracking-widest mb-4">

O Desafio

</h2>

<p className="font-gotham text-stone-800 dark:text-stone-200 text-body-md sm:text-body-lg leading-relaxed whitespace-pre-line">

{project.challenge}

</p>

</section>



</div>

</main>

);

}