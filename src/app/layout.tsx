import type { Metadata } from 'next';
import { Navbar } from '@/components';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Abner Simão | Design Engineer & Art Director',
  description: 'Designer gráfico com 16 anos de experiência em branding, UI/UX e Design Engineering. Especialista em identidade visual e desenvolvimento front-end moderno.',
  keywords: ['designer gráfico', 'front-end', 'UI/UX', 'branding', 'Next.js', 'React', 'São Paulo', 'Design Engineer'],
  authors: [{ name: 'Abner Simão' }],
  creator: 'Abner Simão',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://abner-simao-design.vercel.app'),
  openGraph: {
    title: 'Abner Simão | Design Engineer & Art Director',
    description: '16 anos de experiência unindo design estratégico e código de alta performance.',
    url: '/',
    siteName: 'Abner Simão Design',
    images: [
      {
        url: '/assets/images/Favicon/og_image.jpg',
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
    images: ['/assets/images/Favicon/og_image.jpg'],
  },
  icons: {
    icon: '/assets/images/Favicon/fav-icon-abner-design.png',
    apple: '/assets/images/Favicon/fav-icon-abner-design.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors antialiased">
        <Navbar />
        <main id="main-content" className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}