'use client';

import React from 'react';
import Link from 'next/link';
import { Code, Calendar, Briefcase, ArrowRight, Palette, Target, Building2, ExternalLink } from 'lucide-react';

interface QuickFactsProps {
  role: string;
  stack: string[];
  year: string;
  methodology?: string;
  status?: string;
  liveLink?: string;
}

export default function QuickFactsTable({ role, stack, year, methodology, status, liveLink }: QuickFactsProps) {
  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-3xl bg-white/25 dark:bg-slate-900/40 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-[0px_4px_24px_0px_rgba(0,0,0,0.25)] overflow-hidden">
      
      <div className="p-6 sm:p-8 flex flex-col gap-6">
        {/* Header */}
        <h3 className="font-gotham font-black text-[#075985] dark:text-sky-300 text-heading-md uppercase tracking-tight flex items-center gap-2">
          <Briefcase size={20} aria-hidden="true" />
          Ficha Técnica
        </h3>

        {/* Info Rows */}
        <div className="flex flex-col gap-5">
          
          {/* Role */}
          <div className="flex items-start gap-4">
            <div className="mt-1 p-2.5 bg-sky-100 dark:bg-sky-900/50 rounded-xl text-sky-700 dark:text-sky-300 shadow-sm">
              <Code size={20} aria-hidden="true" />
            </div>
            <div>
              <p className="font-gotham font-bold text-stone-500 dark:text-stone-400 text-label-sm uppercase tracking-widest mb-1">Papel</p>
              <p className="font-gotham font-black text-stone-800 dark:text-stone-100 text-body-lg">{role}</p>
            </div>
          </div>

          {/* Stack / Design Ecosystem */}
          <div className="flex items-start gap-4">
            <div className="mt-1 p-2.5 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl text-emerald-700 dark:text-emerald-300 shadow-sm">
              <Palette size={20} aria-hidden="true" />
            </div>
            <div className="flex-grow">
              <p className="font-gotham font-bold text-stone-500 dark:text-stone-400 text-label-sm uppercase tracking-widest mb-2">Design Ecosystem</p>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-white/60 dark:bg-white/10 rounded-lg text-stone-700 dark:text-stone-200 font-gotham font-medium text-body-sm border border-white/40 dark:border-white/10 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Status Profissional */}
          <div className="flex items-start gap-4">
            <div className="mt-1 p-2.5 bg-amber-100 dark:bg-amber-900/50 rounded-xl text-amber-700 dark:text-amber-300 shadow-sm">
              <Building2 size={20} aria-hidden="true" />
            </div>
            <div>
              <p className="font-gotham font-bold text-stone-500 dark:text-stone-400 text-label-sm uppercase tracking-widest mb-1">Status Profissional</p>
              <p className="font-gotham font-black text-stone-800 dark:text-stone-100 text-body-lg">{status}</p>
            </div>
          </div>

          {/* Metodologia */}
          <div className="flex items-start gap-4">
            <div className="mt-1 p-2.5 bg-purple-100 dark:bg-purple-900/50 rounded-xl text-purple-700 dark:text-purple-300 shadow-sm">
              <Target size={20} aria-hidden="true" />
            </div>
            <div>
              <p className="font-gotham font-bold text-stone-500 dark:text-stone-400 text-label-sm uppercase tracking-widest mb-1">Metodologia</p>
              <p className="font-gotham font-black text-stone-800 dark:text-stone-100 text-body-lg">{methodology}</p>
            </div>
          </div>

          {/* Ano */}
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-purple-100 dark:bg-purple-900/50 rounded-xl text-purple-700 dark:text-purple-300 shadow-sm">
              <Calendar size={20} aria-hidden="true" />
            </div>
            <div>
              <p className="font-gotham font-bold text-stone-500 dark:text-stone-400 text-label-sm uppercase tracking-widest mb-1">Ano</p>
              <p className="font-gotham font-black text-stone-800 dark:text-stone-100 text-body-lg">{year}</p>
            </div>
          </div>

          {/* Live Link */}
          {liveLink && (
            <div className="flex items-start gap-4">
              <div className="mt-1 p-2.5 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl text-emerald-700 dark:text-emerald-300 shadow-sm">
                <ExternalLink size={20} aria-hidden="true" />
              </div>
              <div className="flex-grow">
                <p className="font-gotham font-bold text-stone-500 dark:text-stone-400 text-label-sm uppercase tracking-widest mb-2">Projeto Online</p>
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir projeto em nova aba"
                  className="inline-flex items-center gap-2 text-sky-700 dark:text-sky-300 hover:text-sky-900 dark:hover:text-white font-gotham font-bold text-body-md transition-colors border-b-2 border-sky-300 dark:border-sky-700 hover:border-sky-900 dark:hover:border-white pb-0.5"
                >
                  Acesse e veja o projeto <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          )}

        </div>

        {/* CTA Button */}
        <Link 
          href="/contato"
          className="mt-2 flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-sky-600 to-cyan-500 hover:from-sky-500 hover:to-cyan-400 text-white rounded-2xl font-gotham font-black text-body-md uppercase tracking-tight shadow-lg shadow-sky-500/20 transition-all duration-300 hover:shadow-sky-500/40 active:scale-[0.98]"
        >
          Solicitar Orçamento
          <ArrowRight size={20} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}