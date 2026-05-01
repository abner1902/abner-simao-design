export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export interface EmpresaProject {
  id: number;
  title: string;
  image: string;
  imageAlt: string;
  description?: string;
  behance?: string;
  gallery?: GalleryItem[];
}

export const empresasData: EmpresaProject[] = [
  {
    id: 1,
    title: 'Design para E-commerce e Varejo',
    image: '/assets/images/projects/06-empresas/ecommerce/lenoxx-fotos.webp',
    imageAlt: 'Campanha de E-commerce e Varejo Digital para Lenoxx e Gradiente',
    description: 'Desenvolvimento de campanhas digitais e artes promocionais de alto impacto para a Lenoxx (Gradiente). Projetos focados em conversão para grandes varejistas como Casas Bahia e Magazine Luiza.',
    behance: 'https://www.behance.net/gallery/75504923/Gradiente-Marketing-2019',
    gallery: [
      {
        src: '/assets/images/projects/06-empresas/ecommerce/meu-primeiro-gradiente.webp',
        alt: 'Campanha Gradiente Meu Primeiro - Design de Produto e Marketing',
        caption: 'Gradiente — Meu Primeiro'
      },
      {
        src: '/assets/images/projects/06-empresas/ecommerce/gril-emaik-mkt.webp',
        alt: 'E-mail Marketing Promocional para Linha Grill Lenoxx',
        caption: 'Lenoxx — Email Marketing'
      },
      {
        src: '/assets/images/projects/06-empresas/ecommerce/cafeteira-lenoxx-email-mkt.webp',
        alt: 'Design de E-mail Marketing para Cafeteira Lenoxx',
        caption: 'Lenoxx — Cafeteira'
      },
      {
        src: '/assets/images/projects/06-empresas/ecommerce/gradient-aqua-boombox.webp',
        alt: 'Anúncio Digital Boombox Gradiente Aqua',
        caption: 'Gradiente Aqua — Boombox'
      },
      {
        src: '/assets/images/projects/06-empresas/ecommerce/speaker-aqua-waterphone.webp',
        alt: 'Campanha de Lançamento Speaker Aqua Waterphone Gradiente',
        caption: 'Gradiente Aqua — Speaker'
      },
      {
        src: '/assets/images/projects/06-empresas/ecommerce/boombox-anuncio-digital.webp',
        alt: 'Social Media e Anúncio Digital para Boombox Gradiente',
        caption: 'Gradiente — Anúncio Digital'
      },
      {
        src: '/assets/images/projects/06-empresas/ecommerce/tartaruga-speaker-aqua.webp',
        alt: 'Design de Produto Gradiente Aqua Tartaruga Speaker',
        caption: 'Gradiente Aqua — Promocional'
      }
    ]
  },
  {
    id: 2,
    title: 'Design para Saúde e Bem-Estar',
    image: '/assets/images/projects/06-empresas/saude/design-para-saude-cover.webp',
    imageAlt: 'Design de Interface e Identidade para setor de Saúde e Bem-Estar',
    description: 'Projetos de design estratégico focados em clínicas e profissionais da saúde, unindo sobriedade e confiança visual.'
  },
  {
    id: 3,
    title: 'Branding e Design Esportivo',
    image: '/assets/images/projects/06-empresas/esportivo/esportivo-cover.webp',
    imageAlt: 'Criação de Marca e Identidade Visual para o Setor Esportivo',
    description: 'Identidades dinâmicas e materiais promocionais para atletas, times e eventos esportivos.'
  },
  {
    id: 4,
    title: 'Identidade Visual para Fonoaudiologia',
    image: '/assets/images/projects/06-empresas/fonoaudiologia/girafala-cover-mockup.webp',
    imageAlt: 'Projeto de Branding Girafala - Fonoaudiologia Infantil',
    description: 'Desenvolvimento de marca lúdica e acolhedora para clínica especializada em fonoaudiologia infantil.'
  },
  {
    id: 5,
    title: 'Design para Eventos e Estandes',
    image: '/assets/images/projects/06-empresas/stande-evento-portal.webp',
    imageAlt: 'Ambientação e Design Gráfico para Estandes de Eventos Corporativos',
    description: 'Projetos de sinalização, ambientação e comunicação visual para eventos de grande porte.'
  },
  {
    id: 6,
    title: 'Branding para Clínicas Odontológicas',
    image: '/assets/images/projects/06-empresas/valbao-dentista-cover.webp',
    imageAlt: 'Identidade Visual Premium para Valbão Dentista',
    description: 'Posicionamento de marca premium para consultórios odontológicos, focando em sofisticação e tecnologia.'
  }
];