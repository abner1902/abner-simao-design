import type { Metadata } from 'next';
import { Navbar } from '@/components';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Abner Simão | Designer & Front-end Developer',
  description: 'Designer gráfico com 15+ anos de experiência em branding, UI/UX e front-end development. Especialista em identidade visual, UI/UX e desenvolvimento front-end moderno.',
  keywords: ['designer gráfico', 'front-end', 'UI/UX', 'branding', 'Next.js', 'React', 'São Paulo'],
  authors: [{ name: 'Abner Simão' }],
  creator: 'Abner Simão',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001'),
  openGraph: {
    title: 'Abner Simão | Designer & Front-end Developer',
    description: 'Designer gráfico com 15+ anos de experiência em branding, UI/UX e front-end development.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001',
    siteName: 'Abner Simão Design',
    images: [
      {
        url: '/assets/images/Favicon/og_image.jpg',
        width: 1200,
        height: 630,
        alt: 'Abner Simão - Designer Gráfico e Front-end Developer',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abner Simão | Designer & Front-end Developer',
    description: 'Designer gráfico com 15+ anos de experiência em branding, UI/UX e front-end development.',
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
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}