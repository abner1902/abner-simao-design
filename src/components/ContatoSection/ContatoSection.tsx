'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ContatoSection() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    interesse: '',
    mensagem: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('enviando');
    setTimeout(() => {
      setStatus('sucesso');
      setFormData({ nome: '', email: '', telefone: '', interesse: '', mensagem: '' });
      setTimeout(() => setStatus(''), 4000);
    }, 1200);
  };

  return (
    <section 
      id="contato" 
      className="relative min-h-screen flex items-center pt-24 pb-24 sm:pt-32 sm:pb-32 px-4 md:px-8 overflow-visible bg-white dark:bg-slate-950 transition-colors duration-500"
    >
      {/* Background Adaptativo com Glassmorphism Total */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/images/contact/bg-contact-page.webp" 
          alt="" 
          fill 
          className="object-cover object-center opacity-70 dark:opacity-100 transition-opacity duration-500" 
          quality={90} 
          priority 
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
            Fale com <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-emerald-400 dark:to-cyan-400">Abner Simão</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-white/60 text-base max-w-xl mx-auto leading-relaxed">
            Branding, sites, UI/UX e desenvolvimento front-end. Conte seu projeto e vamos criar algo que converte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Card Info */}
          <div className="flex flex-col h-full bg-white/40 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden transition-all">
            <div className="relative w-full aspect-[4/3]">
              <Image 
                src="/assets/images/contact/abner-photo-contato.webp" 
                alt="Abner Simão" 
                fill 
                className="object-cover object-center" 
                quality={90} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-100/80 dark:from-blue-950/80 via-transparent to-transparent" />
            </div>
            <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-gotham font-black text-xl text-slate-900 dark:text-white tracking-tight">Direto ao ponto</h3>
                <p className="mt-2 text-slate-600 dark:text-white/60 text-sm leading-relaxed">
                  16 anos criando marcas, interfaces e experiências digitais. Atendo empresas, artistas e agências que buscam resultado de verdade.
                </p>
              </div>
              
              <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-white/10">
                <a href="https://wa.me/5511996670948" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-900/5 dark:hover:bg-white/5 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center transition-transform group-hover:scale-110">
                    <svg className="w-6 h-6 fill-[#25D366]" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.347.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.434 5.63 1.434h.006c6.558 0 11.897-5.335 11.9-11.894a11.856 11.856 0 00-3.486-8.412z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-slate-400 dark:text-white/40 font-bold mb-0.5">WhatsApp</span>
                    <span className="text-sm font-medium text-slate-700 dark:text-white/80">Resposta rápida</span>
                  </div>
                </a>

                <a href="mailto:abnersimao91@gmail.com" className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-900/5 dark:hover:bg-white/5 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 dark:bg-white/10 flex items-center justify-center transition-transform group-hover:scale-110">
                    <svg className="w-5 h-5 text-cyan-600 dark:text-white/70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-slate-400 dark:text-white/40 font-bold mb-0.5">E-mail</span>
                    <span className="text-sm font-medium text-slate-700 dark:text-white/80">abnersimao91@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Card Formulário */}
          <div className="flex flex-col h-full bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl p-8 transition-all">
            <h3 className="font-gotham font-black text-xl text-slate-900 dark:text-white tracking-tight mb-6">Envie sua mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-4 flex-grow flex flex-col">
              <div className="space-y-4 flex-grow">
                <div>
                  <label className="block text-slate-500 dark:text-white/50 text-xs uppercase tracking-widest mb-2">Nome completo *</label>
                  <input type="text" name="nome" value={formData.nome} onChange={handleChange} required placeholder="Seu nome" className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/20 focus:outline-none focus:border-cyan-500 dark:focus:border-emerald-400/50 transition text-sm" />
                </div>
                <div>
                  <label className="block text-slate-500 dark:text-white/50 text-xs uppercase tracking-widest mb-2">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="voce@exemplo.com" className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/20 focus:outline-none focus:border-cyan-500 dark:focus:border-emerald-400/50 transition text-sm" />
                </div>
                <div>
                  <label className="block text-slate-500 dark:text-white/50 text-xs uppercase tracking-widest mb-2">Como posso te ajudar? *</label>
                  <select 
                    name="interesse" 
                    value={formData.interesse} 
                    onChange={handleChange} 
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-blue-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white/80 focus:outline-none focus:border-cyan-500 dark:focus:border-emerald-400/50 transition text-sm cursor-pointer"
                  >
                    <option value="" disabled>Selecione uma opção...</option>
                    <optgroup label="🎨 Serviços de Design">
                      <option value="logotipos">Criação de Logotipos</option>
                      <option value="identidade-visual">Identidade Visual</option>
                      <option value="ilustracao">Ilustração e Vetores</option>
                      <option value="impressao">Artes para Impressão</option>
                      <option value="video-reels">Edição de Vídeo e Reels</option>
                    </optgroup>
                    <optgroup label="🚀 Desenvolvimento & Marketing">
                      <option value="sites-nextjs">Sites em React e Next.js</option>
                      <option value="landing-pages">Criação de Landing Pages</option>
                      <option value="uiux-design">UI/UX Design</option>
                      <option value="seo-performance">SEO e Performance</option>
                      <option value="trafego-marketing">Tráfego Pago e Marketing Digital</option>
                    </optgroup>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-500 dark:text-white/50 text-xs uppercase tracking-widest mb-2">Mensagem *</label>
                  <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} rows={4} required placeholder="Conta seu projeto..." className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/20 focus:outline-none focus:border-cyan-500 dark:focus:border-emerald-400/50 transition text-sm resize-none" />
                </div>
              </div>
              <button type="submit" disabled={status === 'enviando'} className="w-full py-3 mt-6 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-emerald-500 dark:to-cyan-500 text-white font-black uppercase tracking-widest text-sm hover:opacity-90 transition-all duration-300 shadow-lg disabled:opacity-40">
                {status === 'enviando' ? 'Enviando...' : 'Enviar mensagem'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
   );
}
