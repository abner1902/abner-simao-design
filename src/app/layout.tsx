import type { Metadata } from 'next';
import { Navbar } from '@/components';
import NextTopLoader from 'nextjs-toploader';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Identidade Visual, Branding e Sites para Empresas e Artistas | Abner Simão',
  description: 'Criação de identidade visual, branding e sites profissionais em React. +15 anos de experiência. Atendo empresas e artistas em São Paulo e online.',
  keywords: ['designer gráfico', 'front-end', 'UI/UX', 'branding', 'Next.js', 'React', 'São Paulo', 'Design Engineer'],
  authors: [{ name: 'Abner Simão' }],
  creator: 'Abner Simão',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.abnersimao.com.br'),
  verification: {
    google: '_07SQRl96xFM371el9hoCG0SbJTIgb71xJzdV4BRY6g',
  },
  openGraph: {
    title: 'Identidade Visual, Branding e Sites para Empresas e Artistas | Abner Simão',
    description: '16 anos de experiência unindo design estratégico e código de alta performance.',
    url: '/',
    siteName: 'Abner Simão Design',
    images: [
      {
        url: '/assets/images/Favicon/og_image.webp',
        width: 1200,
        height: 630,
        alt: 'Abner Simão - Portfolio',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Identidade Visual e Branding | Abner Simão',
    description: 'Branding, UI/UX e Front-end Development.',
    images: ['/assets/images/Favicon/og_image.webp'],
  },
  icons: {
    icon: '/assets/images/Favicon/fav-icon-abner-design.webp',
    apple: '/assets/images/Favicon/fav-icon-abner-design.webp',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Abner Simão',
      jobTitle: 'Design Engineer & Art Director',
      description: 'Criação de identidade visual, branding e sites profissionais em React. +15 anos de experiência. Atendo empresas e artistas em São Paulo e online.',
      url: 'https://www.abnersimao.com.br',
      image: 'https://www.abnersimao.com.br/assets/images/Favicon/og_image.webp',
      email: 'abnersimaodesign@gmail.com',
      sameAs: [
        'https://www.behance.net/abnersimao',
        'https://www.linkedin.com/in/abner-simao-design/',
        'https://www.instagram.com/abnersimao.design',
        'https://www.facebook.com/abnersimaodesign',
      ],
      knowsAbout: [
        'Criação de Sites',
        'Criação de Logotipos',
        'Criação de Logos',
        'Desenvolvimento Web',
        'Web Design Figma',
        'Identidade Visual Corporativa',
        'Branding',
        'UI/UX Design',
        'Design Engineering',
        'Next.js',
        'React',
        'Tailwind CSS',
        'SEO e Performance',
      ],
    },
    {
      '@type': 'ProfessionalService',
      name: 'Abner Simão Design',
      description: 'Design gráfico, branding e desenvolvimento de sites em React/Next.js para empresas e artistas.',
      url: 'https://www.abnersimao.com.br',
      image: 'https://www.abnersimao.com.br/assets/images/Favicon/og_image.webp',
      email: 'abnersimaodesign@gmail.com',
      telephone: '+5511996670948',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
      areaServed: [
        { '@type': 'City', name: 'São Paulo' },
        { '@type': 'Country', name: 'Brasil' },
      ],
      sameAs: [
        'https://www.behance.net/abnersimao',
        'https://www.linkedin.com/in/abner-simao-design/',
        'https://www.instagram.com/abnersimao.design',
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextTopLoader color="#8B5CF6" height={3} showSpinner={false} />
        <Navbar />
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}