'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

// ─── Dados das opções do select ───────────────────────────────────────────
const SELECT_OPTIONS = [
  {
    group: '🎨 Serviços de Design',
    items: [
      { value: 'logotipos', label: 'Criação de Logotipos' },
      { value: 'identidade-visual', label: 'Identidade Visual' },
      { value: 'ilustracao', label: 'Ilustração e Vetores' },
      { value: 'impressao', label: 'Artes para Impressão' },
      { value: 'video-reels', label: 'Edição de Vídeo e Reels' },
    ],
  },
  {
    group: '🚀 Desenvolvimento & Marketing',
    items: [
      { value: 'sites-nextjs', label: 'Sites em React e Next.js' },
      { value: 'landing-pages', label: 'Criação de Landing Pages' },
      { value: 'uiux-design', label: 'UI/UX Design' },
      { value: 'seo-performance', label: 'SEO e Performance' },
      { value: 'trafego-marketing', label: 'Tráfego Pago e Marketing Digital' },
    ],
  },
];

// ─── CustomSelect — substitui o <select> nativo do Android ───────────────
interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
}

function CustomSelect({ value, onChange }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLabel = SELECT_OPTIONS
    .flatMap((g) => g.items)
    .find((item) => item.value === value)?.label;

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`
          w-full px-4 py-3 rounded-xl text-sm text-left flex items-center justify-between
          bg-slate-100 dark:bg-white/5 border transition
          ${isOpen ? 'border-cyan-500 dark:border-emerald-400/50' : 'border-slate-200 dark:border-white/10'}
          ${value ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-white/30'}
        `}
      >
        <span>{selectedLabel ?? 'Selecione uma opção...'}</span>
        <svg
          className={`w-4 h-4 shrink-0 transition-transform duration-200 text-slate-400 dark:text-white/40 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-72 overflow-y-auto">
          {SELECT_OPTIONS.map((group) => (
            <div key={group.group}>
              <div className="px-4 pt-3 pb-1 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-white/30">
                {group.group}
              </div>
              {group.items.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => { onChange(item.value); setIsOpen(false); }}
                  className={`
                    w-full text-left px-4 py-2.5 text-sm transition-colors
                    ${value === item.value
                      ? 'bg-cyan-500/10 dark:bg-emerald-400/10 text-cyan-600 dark:text-emerald-400 font-semibold'
                      : 'text-slate-700 dark:text-white/70 hover:bg-slate-100 dark:hover:bg-white/5'
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────
export default function ContatoSection() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    interesse: '',
    mensagem: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, interesse: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('enviando');

    try {
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Erro ao enviar');

      setStatus('sucesso');
      setFormData({ nome: '', email: '', telefone: '', interesse: '', mensagem: '' });
      setTimeout(() => setStatus(''), 4000);
    } catch (err) {
      console.error(err);
      setStatus('erro');
      setTimeout(() => setStatus(''), 4000);
    }
  };

  return (
    <section
      id="contato"
      className="relative min-h-screen flex items-center pt-24 pb-24 sm:pt-32 sm:pb-32 px-4 md:px-8 overflow-visible bg-white dark:bg-slate-950 transition-colors duration-500"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/contact/bg-contact-page.webp"
          alt="" fill
          className="object-cover object-center opacity-70 dark:opacity-100 transition-opacity duration-500"
          quality={90} priority
        />
        <div className="absolute inset-0 bg-white/40 dark:bg-slate-950/60 backdrop-blur-xl transition-colors duration-500" />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20 dark:from-emerald-500/20 dark:to-cyan-500/20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="text-center mb-14">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-600 dark:text-emerald-400 mb-3">
            Vamos trabalhar juntos
          </p>
          <h2 className="font-gotham font-black text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tighter leading-[1.1] py-2">
            Fale com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-emerald-400 dark:to-cyan-400">
              Abner Simão
            </span>
          </h2>
          <p className="mt-4 text-slate-800 dark:text-white/90 text-lg max-w-4xl mx-auto leading-relaxed font-medium">
            Direção criativa, branding, UI/UX e desenvolvimento front-end para marcas que precisam de uma presença digital forte, moderna e estratégica. Do conceito ao lançamento: identidade visual, social media, websites, vídeos e experiências digitais criadas com visão integrada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Card Info */}
          <div className="flex flex-col h-full bg-white/40 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden transition-all">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/assets/images/contact/abner-photo-contato.webp"
                alt="Abner Simão" fill
                className="object-cover object-center"
                quality={90}
              />
            </div>
            <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-gotham font-black text-2xl text-slate-900 dark:text-white tracking-tight">Criatividade, performance e tecnologia</h3>
                <p className="mt-2 text-slate-800 dark:text-white/80 text-base leading-relaxed">
                  Mais do que um designer ou desenvolvedor isolado, atuo como parceiro criativo para projetos que precisam unir estratégia, estética e execução. Há 16 anos desenvolvo marcas, interfaces e experiências digitais para empresas, artistas e agências — conectando branding, conteúdo, motion, front-end e direção visual em um único fluxo criativo.
                </p>
              </div>
              <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-white/10">
                <a href="https://wa.me/5511996670948" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 rounded-2xl border border-[#25D366]/30 hover:border-[#25D366]/60 bg-[#25D366]/5 hover:bg-[#25D366]/10 shadow-[0_0_16px_rgba(37,211,102,0.1)] hover:shadow-[0_0_24px_rgba(37,211,102,0.2)] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center transition-transform group-hover:scale-110">
                    <svg className="w-6 h-6 fill-[#25D366]" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.347.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.434 5.63 1.434h.006c6.558 0 11.897-5.335 11.9-11.894a11.856 11.856 0 00-3.486-8.412z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-slate-400 dark:text-white/40 font-bold mb-0.5">WhatsApp</span>
                    <span className="text-sm font-medium text-slate-700 dark:text-white/80">Falar agora pelo WhatsApp</span>
                  </div>
                </a>
                <a href="mailto:abnersimaodesign@gmail.com" // NOVA
className="group flex items-center gap-4 p-4 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/60 bg-cyan-500/5 hover:bg-cyan-500/10 shadow-[0_0_16px_rgba(6,182,212,0.1)] hover:shadow-[0_0_24px_rgba(6,182,212,0.2)] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 dark:bg-white/10 flex items-center justify-center transition-transform group-hover:scale-110">
                    <svg className="w-5 h-5 text-cyan-600 dark:text-white/70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-slate-400 dark:text-white/40 font-bold mb-0.5">E-mail</span>
                    <span className="text-sm font-medium text-slate-700 dark:text-white/80">Enviar e-mail direto</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Card Formulário */}
          <div className="flex flex-col h-full bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl p-8 transition-all">
            <h3 className="font-gotham font-black text-2xl text-slate-900 dark:text-white tracking-tight mb-6">Envie sua mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-4 flex-grow flex flex-col">
              <div className="space-y-4 flex-grow">
                <div>
                  <label className="block text-slate-700 dark:text-white/80 text-xs font-black uppercase tracking-widest mb-2">Nome completo *</label>
                  <input type="text" name="nome" value={formData.nome} onChange={handleChange} required placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/20 focus:outline-none focus:border-cyan-500 dark:focus:border-emerald-400/50 transition text-sm"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 dark:text-white/80 text-xs font-black uppercase tracking-widest mb-2">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="voce@exemplo.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/20 focus:outline-none focus:border-cyan-500 dark:focus:border-emerald-400/50 transition text-sm"
                  />
                </div>

                {/* ✅ CustomSelect — sem dialog nativo do Android */}
                <div>
                  <label className="block text-slate-700 dark:text-white/80 text-xs font-black uppercase tracking-widest mb-2">Como posso te ajudar? *</label>
                  <CustomSelect value={formData.interesse} onChange={handleSelectChange} />
                  {/* Input invisível mantém o required do HTML funcionando */}
                  <input
                    type="text" required value={formData.interesse} onChange={() => {}}
                    className="sr-only" aria-hidden="true" tabIndex={-1}
                  />
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-white/80 text-xs font-black uppercase tracking-widest mb-2">Mensagem *</label>
                  <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} rows={4} required placeholder="Conta seu projeto..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/20 focus:outline-none focus:border-cyan-500 dark:focus:border-emerald-400/50 transition text-sm resize-y"
                  />
                </div>
              </div>

              {/* ✅ Mensagens de feedback */}
              {status === 'sucesso' && (
                <p className="text-center text-sm font-semibold text-emerald-500 dark:text-emerald-400 py-2">
                  ✅ Mensagem enviada! Entrarei em contato em breve.
                </p>
              )}
              {status === 'erro' && (
                <p className="text-center text-sm font-semibold text-red-500 py-2">
                  ❌ Erro ao enviar. Tente pelo WhatsApp.
                </p>
              )}

              <button type="submit" disabled={status === 'enviando'}
                className="w-full py-3 mt-6 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-emerald-500 dark:to-cyan-500 text-white font-black uppercase tracking-widest text-sm hover:opacity-90 transition-all duration-300 shadow-lg disabled:opacity-40"
              >
                {status === 'enviando' ? 'Enviando...' : 'Enviar mensagem'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}