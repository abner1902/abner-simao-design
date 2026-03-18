'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';
import { FaInstagram, FaFacebook, FaLinkedin, FaBehance, FaGithub, FaWhatsapp, FaFilePdf } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" aria-label="Contato e rodapé">

      {/* SEÇÃO PRINCIPAL */}
      <div className="relative py-20 px-6 md:px-12 lg:px-20 overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/assets/images/backgrounds/geometric-liquid-bg-footer.jpg"
            alt=""
            fill
            className="object-cover opacity-100"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-white/40 dark:bg-slate-950/80" />
        </div>

        <div className="max-w-[1317px] mx-auto flex flex-col items-center gap-12">

          {/* HEADER */}
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="font-gotham font-ultra text-sky-900 dark:text-sky-300 text-3xl sm:text-5xl uppercase tracking-wide">
              Vamos criar algo incrível juntos!
            </h2>
            <p className="font-gotham text-sky-800 dark:text-sky-400 text-xl sm:text-2xl leading-9 max-w-[1042px]">
              Designer gráfico desde 2011 e desenvolvedor front-end em São Paulo
              especializado em branding, UI/UX e desenvolvimento de sites em React e Next.js.
            </p>
          </div>

          {/* BOX LINKS */}
          <div className="w-full rounded-3xl bg-gradient-to-b from-sky-100/70 to-sky-50/70 dark:from-slate-900/60 dark:to-slate-800/60 backdrop-blur-md border border-white/60 dark:border-white/10 shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

              {/* COLUNA 1 — SERVIÇOS DE DESIGN */}
              <div className="flex flex-col gap-4">
                <h3 className="font-gotham font-ultra text-sky-800 dark:text-sky-300 text-lg uppercase tracking-wide">
                  Serviços de Design
                </h3>
                <ul className="flex flex-col gap-2 font-gotham font-medium text-stone-900 dark:text-stone-300 text-lg leading-8">
                  <li>• Criação de Logotipos</li>
                  <li>• Identidade Visual</li>
                  <li>• Direção de Arte</li>
                  <li>• Motion Design</li>
                </ul>
              </div>

              {/* COLUNA 2 — DESENVOLVIMENTO WEB */}
              <div className="flex flex-col gap-4">
                <h3 className="font-gotham font-ultra text-sky-800 dark:text-sky-300 text-lg uppercase tracking-wide">
                  Desenvolvimento Web
                </h3>
                <ul className="flex flex-col gap-2 font-gotham font-medium text-stone-900 dark:text-stone-300 text-lg leading-8">
                  <li>• Desenvolvimento React e Next.js</li>
                  <li>• Criação de Landing Pages</li>
                  <li>• UI/UX Design</li>
                  <li>• Otimização de SEO</li>
                </ul>
              </div>

              {/* COLUNA 3 — CONTATO */}
              <div className="flex flex-col gap-4">
                <h3 className="font-gotham font-ultra text-sky-800 dark:text-sky-300 text-lg uppercase tracking-wide">
                  Contato
                </h3>
                <ul className="flex flex-col gap-3 font-gotham font-medium text-stone-900 dark:text-stone-300 text-lg">
                  <li>
                    <Link href="#" className="flex items-center gap-2 hover:text-sky-700 dark:hover:text-sky-400 transition-colors">
                      <FaFilePdf className="text-red-500 shrink-0" size={18} />
                      Baixar Currículo
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.behance.net/AbnerSimao" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-sky-700 dark:hover:text-sky-400 transition-colors">
                      <FaBehance className="text-sky-600 shrink-0" size={18} />
                      Veja mais no Behance
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/abnersimao.design/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-sky-700 dark:hover:text-sky-400 transition-colors">
                      <FaInstagram className="text-pink-500 shrink-0" size={18} />
                      Siga no Instagram
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/in/abner-simao-design/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-sky-700 dark:hover:text-sky-400 transition-colors">
                      <FaLinkedin className="text-blue-600 shrink-0" size={18} />
                      Conecte-se no LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link href="https://wa.me/5511996670948?text=Olá%20Abner!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-sky-700 dark:hover:text-sky-400 transition-colors">
                      <FaWhatsapp className="text-green-500 shrink-0" size={18} />
                      Contato via WhatsApp
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:abnersimao91@gmail.com" className="flex items-center gap-2 hover:text-sky-700 dark:hover:text-sky-400 transition-colors">
                      <Mail className="text-sky-500 shrink-0" size={18} />
                      abnersimao91@gmail.com
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* LOCALIZAÇÃO */}
          <p className="font-gotham font-bold text-sky-800 dark:text-sky-400 text-lg text-center">
            <MapPin size={18} className="inline-block mr-2 shrink-0 align-middle" />
            Atuando em São Paulo e atendendo clientes no Brasil e internacionalmente.
          </p>

          {/* BOTÕES CTA */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[1100px]">
            <Link
              href="#"
              className="flex-1 inline-flex items-center justify-center gap-3 min-h-[5rem] py-4 px-6 rounded-2xl font-gotham font-bold text-stone-900 dark:text-white text-lg uppercase tracking-widest text-center bg-gradient-to-r from-white/40 to-blue-200/60 dark:from-slate-800/60 dark:to-blue-900/50 border border-sky-500 dark:border-sky-400 shadow-[0px_4px_24px_0px_rgba(0,0,0,0.25)] transition-all duration-300 hover:brightness-95 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500"
            >
              <FaFilePdf className="text-red-500 shrink-0" size={24} />
              Baixar Currículo Designer & Front End
            </Link>

            <Link
              href="https://wa.me/5511996670948"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-3 min-h-[5rem] py-4 px-6 rounded-2xl font-gotham font-bold text-stone-900 dark:text-white text-lg uppercase tracking-widest text-center bg-gradient-to-r from-white/60 to-teal-500/90 dark:from-slate-800/60 dark:to-teal-700/50 border border-teal-500 shadow-[0px_4px_24px_0px_rgba(0,0,0,0.25)] transition-all duration-300 hover:brightness-95 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-500"
            >
              <FaWhatsapp className="text-green-600 shrink-0" size={24} />
              Orçamentos para Sites & Design
            </Link>
          </div>

          {/* ÍCONES SOCIAIS */}
          <div className="flex items-center gap-6">
            <Link href="https://www.instagram.com/abnersimao.design/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Abner Simão" className="text-sky-800 dark:text-sky-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
              <FaInstagram size={36} />
            </Link>
            <Link href="https://www.facebook.com/abnersimaodesign" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Abner Simão" className="text-sky-800 dark:text-sky-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FaFacebook size={36} />
            </Link>
            <Link href="https://www.linkedin.com/in/abner-simao-design/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Abner Simão" className="text-sky-800 dark:text-sky-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors">
              <FaLinkedin size={36} />
            </Link>
            <Link href="https://www.behance.net/AbnerSimao" target="_blank" rel="noopener noreferrer" aria-label="Behance de Abner Simão" className="text-sky-800 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors">
              <FaBehance size={36} />
            </Link>
            <Link href="https://github.com/abner1902" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Abner Simão" className="text-sky-800 dark:text-sky-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              <FaGithub size={36} />
            </Link>
          </div>

        </div>
      </div>

      {/* BARRA FINAL */}
      <div className="w-full bg-green-200 dark:bg-slate-900 py-6 px-6">
        <p className="font-gotham text-sky-800 dark:text-sky-400 text-sm text-center leading-9">
          © {currentYear} Abner Simão Design. Built with Next.js, React, and Tailwind CSS. | UI/UX Design | Front-end Developer | Branding | Motion Design | São Paulo, Brazil.
        </p>
      </div>

    </footer>
  );
}