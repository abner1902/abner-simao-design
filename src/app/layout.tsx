import type { Metadata } from 'next';
import { Navbar } from '@/components';
import NextTopLoader from 'nextjs-toploader';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Abner Simão | Design Engineer & Art Director',
  description: 'Designer gráfico com 16 anos de experiência em branding, UI/UX e Design Engineering. Especialista em identidade visual e desenvolvimento front-end moderno.',
  keywords: ['designer gráfico', 'front-end', 'UI/UX', 'branding', 'Next.js', 'React', 'São Paulo', 'Design Engineer'],
  authors: [{ name: 'Abner Simão' }],
  creator: 'Abner Simão',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.abnersimao.com.br'),
  verification: {
    google: '_07SQRl96xFM371el9hoCG0SbJTIgb71xJzdV4BRY6g',
  },
  openGraph: {
    title: 'Abner Simão | Design Engineer & Art Director',
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
    title: 'Abner Simão | Design Engineer',
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
  '@type': 'Person',
  name: 'Abner Simão',
  jobTitle: 'Design Engineer & Art Director',
  description: 'Designer gráfico com 16 anos de experiência em branding, UI/UX e Design Engineering. Especialista em identidade visual e desenvolvimento front-end moderno.',
  url: 'https://www.abnersimao.com.br',
  image: 'https://www.abnersimao.com.br/assets/images/Favicon/og_image.webp',
  email: 'abnersimaodesign@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  sameAs: [
    'https://www.behance.net/abnersimao',
    'https://www.linkedin.com/in/abner-simao-design/',
    'https://www.instagram.com/abnersimao.design',
    'https://www.facebook.com/abnersimaodesign',
  ],
  knowsAbout: [
    'Branding',
    'Identidade Visual',
    'UI/UX Design',
    'Design Engineering',
    'Next.js',
    'React',
    'Tailwind CSS',
    'Figma',
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