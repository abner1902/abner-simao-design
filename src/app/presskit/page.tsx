import { Metadata } from 'next';
import Image from 'next/image';
import PresskitHero from '@/components/PresskitSection/PresskitHero';
import PresskitFeatures from '@/components/PresskitSection/PresskitFeatures';
import PresskitCases from '@/components/PresskitSection/PresskitCases';
import PresskitStyles from '@/components/PresskitSection/PresskitStyles';
import PresskitWhyUse from '@/components/PresskitSection/PresskitWhyUse';
import PresskitHowItWorks from '@/components/PresskitSection/PresskitHowItWorks';
import PresskitPricingFaq from '@/components/PresskitSection/PresskitPricingFaq';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Press Kit Digital Musical | Abner Simão Design',
  description: 'Crie seu Press Kit musical personalizado com link vitalício, sem mensalidade. Para DJs, bandas e cantores.',
};

export default function PresskitPage() {
  return (
    <main className="min-h-screen relative bg-slate-950 overflow-hidden">
      {/* Background Orgânico Global */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/presskit/BG/press-kit-BG.webp"
          alt="Background Textura Orgânica"
          fill
          className="object-cover opacity-75 dark:opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/80" />
      </div>

      {/* Seções na Ordem EXATA do Figma */}
      <div className="relative z-10">
        <PresskitHero />
        <PresskitFeatures />
        <PresskitCases />
        <PresskitStyles />
        <PresskitWhyUse />
        <PresskitHowItWorks />
        <PresskitPricingFaq />
        <Footer />
      </div>
    </main>
  );
}