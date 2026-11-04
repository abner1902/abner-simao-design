'use client';

import { motion } from 'framer-motion';

export default function PresskitPricing() {
  return (
    <section id="pricing" className="py-20 px-6 md:px-12 lg:px-20 bg-transparent relative z-10">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-xl p-8 sm:p-12 rounded-3xl shadow-2xl border border-sky-200 dark:border-white/10"
        >
          {/* BLOCO DE PREÇO E TÍTULO */}
          <div className="text-center space-y-4 mb-8">
            <span className="font-gotham font-bold text-sky-900 dark:text-sky-300 text-xl sm:text-2xl uppercase tracking-wider block">
              Investimento
            </span>
            <div className="font-gotham font-ultra text-sky-900 dark:text-sky-400 text-5xl sm:text-6xl uppercase drop-shadow-sm">
              R$ 500,00
            </div>
            <span className="font-gotham font-bold text-sky-900 dark:text-sky-300 text-lg sm:text-xl uppercase block">
              (À vista via PIX)
            </span>
            <div className="text-sky-900 dark:text-slate-300 font-gotham text-lg sm:text-xl uppercase mt-2">
              ou <strong className="font-bold text-sky-900 dark:text-sky-300">2x de R$ 275,00</strong> via PIX <span className="block sm:inline font-ultra">(Total R$ 550,00)</span>
            </div>
          </div>

          {/* LISTA DE ITENS INCLUSOS */}
          <div className="bg-white/90 dark:bg-slate-950/70 p-6 sm:p-8 rounded-2xl mb-8 border border-white dark:border-white/10 shadow-inner">
            <h4 className="font-gotham font-ultra text-sky-900 dark:text-sky-400 text-lg uppercase mb-4">
              Incluso:
            </h4>
            <ul className="space-y-3 font-gotham font-medium text-stone-800 dark:text-slate-200 text-base sm:text-lg">
              <li className="flex items-center gap-2">✓ Design 100% personalizado;</li>
              <li className="flex items-center gap-2">✓ Link vitalício - sem mensalidade;</li>
              <li className="flex items-center gap-2">✓ Hospedagem inclusa;</li>
              <li className="flex items-center gap-2">✓ 7 dias de revisão grátis;</li>
              <li className="flex items-center gap-2">✓ Pronto pra bio do Instagram.</li>
            </ul>
          </div>

          {/* BOTÃO CTA WHATSAPP */}
          <div className="text-center">
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%20Abner!%20Quero%20criar%20meu%20Press%20Kit%20Digital"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto px-10 py-5 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white font-gotham font-ultra text-lg sm:text-xl uppercase tracking-widest shadow-xl transition-all transform active:scale-[0.98]"
            >
              Criar Meu Press Kit
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}