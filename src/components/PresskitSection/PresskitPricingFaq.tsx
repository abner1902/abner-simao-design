"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string | React.ReactNode;
}

const faqData: FaqItem[] = [
  {
    question: "Preciso pagar mensalidade?",
    answer:
      "Não! O pagamento é único e o seu link é vitalício, sem mensalidades ou taxas escondidas. Você só paga se solicitar alterações estruturais após os 7 dias de revisão grátis.",
  },
  {
    question: "Funciona na bio do Instagram?",
    answer:
      "Sim. Link curto, carrega em 1 segundo. Pronto pra bio, contratantes e fãs.",
  },
  {
    question: "E as revisões?",
    answer:
      "7 dias de revisão grátis inclusos pra ajustar textos, fotos e músicas.",
  },
  {
    question: "E se eu quiser fazer atualizações depois?",
    answer: (
      <>
        Após os 7 dias de revisão grátis, atualizações pontuais a partir de R$ 30 por alteração.{" "}
        <span className="block mt-1 text-xs text-slate-500 dark:text-slate-400 font-normal">
          *Reúna todas as alterações de uma vez para economizar.
        </span>
      </>
    ),
  },
  {
    question: "E se eu precisar de um site completo?",
    answer:
      "Com certeza! O Press Kit Digital é focado na experiência rápida de link para bio. Também desenvolvo websites institucionais completos, e-commerce e portfólios sob consulta.",
  },
];

export default function PresskitPricingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="investimento-faq" className="py-16 px-4 md:px-8 max-w-[1240px] mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* COLUNA ESQUERDA: INVESTIMENTO */}
        <div className="lg:col-span-5 bg-gradient-to-b from-sky-100/90 to-sky-50/90 dark:from-slate-900/90 dark:to-slate-950/90 rounded-3xl p-7 shadow-lg border border-sky-200/60 dark:border-slate-800/80 backdrop-blur-md flex flex-col justify-between">
          <div>
            <h2 className="text-sky-900 dark:text-sky-300 text-lg font-bold font-['Gotham'] uppercase tracking-wider text-center">
              Investimento
            </h2>

            <div className="text-center my-4">
              <span className="text-sky-900 dark:text-sky-100 text-5xl font-medium font-['Gotham'] uppercase block tracking-tight">
                R$ 500,00
              </span>
              <span className="text-sky-800 dark:text-sky-300 text-sm font-bold font-['Gotham'] uppercase block mt-1">
                (À vista via PIX)
              </span>
            </div>

            <div className="text-center mb-6 text-sky-900 dark:text-sky-200 font-['Gotham'] uppercase">
              <p className="text-xs font-semibold tracking-wide">
                ou <span className="font-bold">2x</span> de{" "}
                <span className="font-bold">R$ 275,00</span> via PIX
              </p>
              <p className="text-xl font-bold mt-0.5 tracking-tight">
                Total R$ 550,00
              </p>
            </div>

            <div className="mb-6">
              <p className="text-sky-900 dark:text-sky-300 font-bold font-['Gotham'] uppercase mb-3 text-sm tracking-wider">
                Incluso:
              </p>
              <ul className="space-y-2.5 text-sky-900/90 dark:text-sky-100/90 text-lg font-['Gotham'] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-600 dark:text-teal-400">✓</span> Design 100% personalizado;
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-600 dark:text-teal-400">✓</span> Link vitalício - sem mensalidade;
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-600 dark:text-teal-400">✓</span> Hospedagem inclusa;
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-600 dark:text-teal-400">✓</span> 7 dias de revisão grátis;
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-600 dark:text-teal-400">✓</span> Pronto pra bio do Instagram.
                </li>
              </ul>
            </div>
          </div>

          <a
            href="https://wa.me/5511996670948?text=Olá%21%20Quero%20criar%20meu%20Press%20Kit%20Digital."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-slate-950 border border-teal-400 shadow-md flex items-center justify-center gap-2 text-sm font-bold font-['Gotham'] uppercase tracking-widest rounded-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Criar meu Press Kit</span>
          </a>
        </div>

        {/* COLUNA DIREITA: FAQ */}
        <div className="lg:col-span-7 bg-gradient-to-b from-sky-100/90 to-sky-50/90 dark:from-slate-900/90 dark:to-slate-950/90 rounded-3xl p-7 shadow-lg border border-sky-200/60 dark:border-slate-800/80 backdrop-blur-md flex flex-col justify-start">
          <h2 className="text-sky-900 dark:text-sky-300 text-4xl font-medium font-['Gotham'] uppercase mb-6 text-center tracking-tight">
            FAQ
          </h2>

          <div className="space-y-3">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-slate-900/80 rounded-2xl border border-white/80 dark:border-slate-800 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-5 py-4 flex justify-between items-center gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sky-900 dark:text-sky-200 text-base font-bold font-['Gotham'] leading-snug">
                      {item.question}
                    </span>
                    <span className="text-sky-800 dark:text-sky-400 transform transition-transform duration-200 flex-shrink-0">
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto" },
                          collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{ duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-5 pb-4 text-slate-700 dark:text-slate-300 text-xs font-['Gotham'] border-t border-sky-100 dark:border-slate-800 pt-2.5 leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}