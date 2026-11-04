'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Preciso pagar mensalidade?',
    a: 'Não. Com seu material, crio o design personalizado, trato as fotos, organizo os links, players e crio o fundo exclusivo do seu press kit com link vitalício.',
  },
  {
    q: 'Funciona na bio do Instagram?',
    a: 'Sim. Link curto, carrega em 1 segundo. Pronto pra bio, contratantes e fãs.',
  },
  {
    q: 'E as revisões?',
    a: '7 dias de revisão grátis inclusos pra ajustar textos, fotos e músicas.',
  },
  {
    q: 'E se eu quiser fazer atualizações depois?',
    a: 'Após os 7 dias de revisão grátis, atualizações pontuais a partir de R$30 por alteração. *Reúna todas as alterações de uma vez para economizar.',
  },
];

export default function PresskitFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-slate-100 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-gotham font-ultra text-sky-800 dark:text-sky-300 text-4xl sm:text-5xl text-center uppercase mb-12">
          FAQ
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white/90 dark:bg-slate-900 rounded-2xl border border-sky-100 dark:border-slate-800 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left p-6 flex items-center justify-between font-gotham font-bold text-sky-800 dark:text-sky-300 text-lg sm:text-xl uppercase"
              >
                <span>{faq.q}</span>
                <span className="text-2xl text-sky-800 dark:text-sky-400">
                  {openIndex === idx ? '−' : '+'}
                </span>
              </button>

              {openIndex === idx && (
                <div className="p-6 pt-0 font-gotham text-neutral-600 dark:text-slate-300 text-base border-t border-slate-100 dark:border-slate-800/60 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
