export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  type?: 'image' | 'video';
}

export interface EmpresaProject {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  description: string;
  behance?: string;
  gallery?: GalleryItem[];
}

export const empresasData: EmpresaProject[] = [
  {
    id: 1,
    slug: 'e-commerce-varejo',
    title: 'Design para E-commerce e Varejo',
    category: 'Graphic Design',
    image: '/assets/images/projects/06-empresas/ecommerce/lenoxx-fotos.webp',
    imageAlt: 'Campanha de E-commerce e Varejo Digital para marcas Lenoxx e Gradiente',
    description: 'Desenvolvimento de ecossistemas visuais e artes promocionais de alta conversão para marcas como Lenoxx e Gradiente. Projetos focados em performance para grandes players do varejo nacional, incluindo Magazine Luiza e Casas Bahia.',
    behance: 'https://www.behance.net/gallery/75504923/Gradiente-Marketing-2019',
    gallery: [
      { src: '/assets/images/projects/06-empresas/ecommerce/meu-primeiro-gradiente.webp', alt: 'Campanha Gradiente Meu Primeiro', caption: 'Gradiente — Meu Primeiro' },
      { src: '/assets/images/projects/06-empresas/ecommerce/gril-emaik-mkt.webp', alt: 'E-mail Marketing Promocional Linha Grill Lenoxx', caption: 'Lenoxx — Email Marketing' },
      { src: '/assets/images/projects/06-empresas/ecommerce/cafeteira-lenoxx-email-mkt.webp', alt: 'Design de E-mail Marketing para Cafeteira Lenoxx', caption: 'Lenoxx — Cafeteira' },
      { src: '/assets/images/projects/06-empresas/ecommerce/gradient-aqua-boombox.webp', alt: 'Anúncio Digital Boombox Gradiente Aqua', caption: 'Gradiente — Boombox Aqua' },
      { src: '/assets/images/projects/06-empresas/ecommerce/speaker-aqua-waterphone.webp', alt: 'Campanha Speaker Aqua Waterphone Gradiente', caption: 'Gradiente — Speaker Aqua' },
      { src: '/assets/images/projects/06-empresas/ecommerce/boombox-anuncio-digital.webp', alt: 'Social Media e Anúncio Digital Boombox Gradiente', caption: 'Gradiente — Anúncio Digital' },
      { src: '/assets/images/projects/06-empresas/ecommerce/tartaruga-speaker-aqua.webp', alt: 'Design de Produto Tartaruga Speaker Gradiente Aqua', caption: 'Gradiente — Speaker Aqua Promo' }
    ]
  },
  {
    id: 2,
    slug: 'saude-bem-estar',
    title: 'Design para Saúde e Bem-Estar',
    category: 'Marketing Digital',
    image: '/assets/images/projects/06-empresas/saude/design-para-saude-cover.webp',
    imageAlt: 'Ecossistema Visual para Grupo Equilibrium - Health Marketing',
    description: 'Comunicação estratégica para o Grupo Equilibrium (Health Marketing). Produção audiovisual e design de performance para BHB Food e Academia da Nutrição. Gestão técnica de campanhas de Ads e produção de podcasts semanais para o mercado de nutrição.',
    gallery: [
      // --- GRUPO BHB FOOD ---
      { src: 'https://res.cloudinary.com/dq3qu3lv0/video/upload/q_auto/f_auto/v1777650879/BHB_FOOD_-_ONLINE_EDITION_VIDEO_PRINCIPAL_Behance_v1no0p.mp4', alt: 'BHB Food Online Edition Vídeo Principal', caption: 'BHB Food — Principal', type: 'video' },
      { src: 'https://res.cloudinary.com/dq3qu3lv0/video/upload/q_auto/f_auto/v1777650869/BHB_FOODCAST-_SOCIAL_EDITADO_MIDIA_DESIGN_Behance_tf56dd.mp4', alt: 'BHB Foodcast Social Media Design', caption: 'BHB Foodcast — Social', type: 'video' },
      { src: '/assets/images/projects/06-empresas/saude/bhb-thumbnail.webp', alt: 'BHB Food Marketing Digital Podcast', caption: 'BHB Food — Podcast' },
      // --- GRUPO ACADEMIA DA NUTRIÇÃO ---
      { src: 'https://res.cloudinary.com/dq3qu3lv0/video/upload/q_auto/f_auto/v1777650979/FORUMACADEMIA_DA_NUTRIAO_2021_-_ONLINE_WEBINAR_EVENT_Behance_zfiol3.mp4', alt: 'Fórum Academia da Nutrição 2021 Webinar', caption: 'Academia — Fórum Webinar', type: 'video' },
      { src: '/assets/images/projects/06-empresas/saude/academia-emagrecimento.webp', alt: 'Ebook Academia da Nutrição Emagrecimento', caption: 'Academia — Emagrecimento' },
      { src: '/assets/images/projects/06-empresas/saude/academia-forum-02.webp', alt: 'Interface Digital Academia da Nutrição Fórum', caption: 'Academia — Fórum 02' },
      { src: '/assets/images/projects/06-empresas/saude/academia-forum-03.webp', alt: 'Comunicação Visual Evento Saúde e Nutrição', caption: 'Academia — Fórum 03' }
    ]
  },
  {
    id: 3,
    slug: 'branding-esportivo',
    title: 'Branding e Design Esportivo',
    category: 'Branding',
    image: '/assets/images/projects/06-empresas/esportivo/esportivo-cover.webp',
    imageAlt: 'Branding e Ilustração para Marketing Esportivo e Times Oficiais',
    description: 'Atuação estratégica na ESM (2022) desenvolvendo ativos de branding e ilustrações vetoriais complexas via Wacom. Destaque para as ilustrações oficiais das camisetas comemorativas de 1992 do SPFC, Palmeiras, Vasco, Internacional e broadcasting para LBF e Vôlei Renata.',
    behance: 'https://www.behance.net/gallery/147477893/Ilustracao-Camisetas-Comemorativas-Oficiais-1992-SPFC',
    gallery: [
      { src: '/assets/images/projects/06-empresas/esportivo/spfc-camisetas-01.webp', alt: 'Ilustração Oficial SPFC 1992 Wacom', caption: 'SPFC — Ilustração 01' },
      { src: '/assets/images/projects/06-empresas/esportivo/spfc-camisetas-02.webp', alt: 'Vetor Camiseta SPFC 1992', caption: 'SPFC — Ilustração 02' },
      { src: '/assets/images/projects/06-empresas/esportivo/spfc-camisetas-03.webp', alt: 'Detalhe Ilustração Camiseta SPFC', caption: 'SPFC — Ilustração 03' },
      { src: '/assets/images/projects/06-empresas/esportivo/camiseta-spfc-loja-online.webp', alt: 'Loja Online SPFC Camisetas 1992', caption: 'SPFC — Loja Online' },
      { src: '/assets/images/projects/06-empresas/esportivo/liga-basquete-feminina-01.webp', alt: 'LBF Liga de Basquete Feminina Branding', caption: 'LBF — Branding 01' },
      { src: '/assets/images/projects/06-empresas/esportivo/liga-basquete-feminina-02.webp', alt: 'LBF Marketing Digital Social', caption: 'LBF — Branding 02' },
      { src: '/assets/images/projects/06-empresas/esportivo/liga-basquete-feminina-03.webp', alt: 'LBF Story Design Atletas', caption: 'LBF — Branding 03' },
      { src: '/assets/images/projects/06-empresas/esportivo/parabens-junior-vasco-story.webp', alt: 'Vasco da Gama Story Design Premium', caption: 'Vasco — Story' },
      { src: '/assets/images/projects/06-empresas/esportivo/internacional-club-01.webp', alt: 'S.C. Internacional Branding Marketing', caption: 'Inter — Branding 01' },
      { src: '/assets/images/projects/06-empresas/esportivo/internacional-club-02.webp', alt: 'Internacional Campanha 113 anos', caption: 'Inter — Branding 02' },
      { src: '/assets/images/projects/06-empresas/esportivo/volei-renata-01.webp', alt: 'Vôlei Renata Arena Design', caption: 'Vôlei Renata — 01' },
      { src: '/assets/images/projects/06-empresas/esportivo/volei-renata-02.webp', alt: 'Vôlei Renata Broadcasting Kit', caption: 'Vôlei Renata — 02' },
      { src: '/assets/images/projects/06-empresas/esportivo/volei-renata-03.webp', alt: 'Vôlei Renata Story Vertical', caption: 'Vôlei Renata — 03' }
    ]
  },
  {
  id: 4,
  slug: 'identidade-fonoaudiologia',
  title: 'Identidade Visual para Fonoaudiologia',
  category: 'Branding · Identidade Visual',
  image: '/assets/images/projects/06-empresas/fonoaudiologia/girafala-cover-mockup.webp',
  imageAlt: 'Branding GiraFala — Identidade Visual para Clínica de Fonoaudiologia Infantil',
  description: 'A GiraFala chegou com nome e conceito definidos — minha missão foi dar vida à marca. O desafio era traduzir fonoaudiologia infantil em uma linguagem visual que fosse ao mesmo tempo acolhedora para as famílias e confiável para os responsáveis. O resultado é uma identidade delicada e lúdica, com a girafa como símbolo natural do desenvolvimento da fala — longa, que alcança alturas, que cresce. Hoje o consultório está em plena expansão, e a marca acompanha esse crescimento com consistência.',
  behance: undefined,
  gallery: [
    { src: '/assets/images/projects/06-empresas/fonoaudiologia/girafala-cover-mockup.webp', alt: 'Mockup papelaria GiraFala — Cartão e Identidade Visual', caption: 'GiraFala — Mockup Identidade' },
    { src: '/assets/images/projects/06-empresas/fonoaudiologia/logo-oficial-girafala-01.webp', alt: 'Logo oficial GiraFala fundo colorido', caption: 'Logo — Versão Principal' },
    { src: '/assets/images/projects/06-empresas/fonoaudiologia/logo-oficial-girafala-02.webp', alt: 'Logo oficial GiraFala fundo preto', caption: 'Logo — Versão Dark' },
    { src: '/assets/images/projects/06-empresas/fonoaudiologia/logo-oficial-girafala-03.webp', alt: 'Logo oficial GiraFala fundo branco', caption: 'Logo — Versão Light' },
    { src: '/assets/images/projects/06-empresas/fonoaudiologia/cartao-girafala.webp', alt: 'Cartão de visita GiraFala Fonoaudiologia', caption: 'Cartão de Visita' },
    { src: '/assets/images/projects/06-empresas/fonoaudiologia/guia-de-cores-girafala.webp', alt: 'Guia de cores e tipografia GiraFala', caption: 'Guia de Cores & Tipografia' },
  ]
},
  {
  id: 5,
  slug: 'evento-estande',
  title: 'Design para Evento e Estande',
  category: 'Graphic Design',
  image: '/assets/images/projects/06-empresas/stande-evento-portal-v2.webp',
  imageAlt: 'Ambientação e Design Gráfico para Estandes Corporativos',
  description: 'Criação completa da comunicação visual do estande da Portal Telemedicina para o Global Summit 2022, traduzindo o posicionamento da marca no encontro entre saúde e tecnologia. Fui responsável pelo desenvolvimento das artes vetorizadas e das peças em alta resolução para impressão em adesivos, além do folder institucional com três dobras, vinco, frente e verso, e do bloco de anotações alinhado à identidade visual da empresa. O resultado foi um sistema visual coeso, pensado para reforçar presença de marca, clareza de comunicação e percepção de inovação no ambiente expositivo.',
  gallery: [
    {
      src: '/assets/images/projects/06-empresas/eventos/global-summit-2022-thumb.webp',
      alt: 'Global Summit 2022 thumb do projeto de evento e estande',
      caption: 'Global Summit — Thumb'
    },
    {
      src: '/assets/images/projects/06-empresas/eventos/global-summit-photo-stand.webp',
      alt: 'Vista geral do estande no evento Global Summit',
      caption: 'Global Summit — Estande 01'
    },
    {
      src: '/assets/images/projects/06-empresas/eventos/global-summit-photo-stand-02.webp',
      alt: 'Estande corporativo Global Summit vista 02',
      caption: 'Global Summit — Estande 02'
    },
    {
      src: '/assets/images/projects/06-empresas/eventos/global-summit-photo-stand-03.webp',
      alt: 'Estande corporativo Global Summit vista 03',
      caption: 'Global Summit — Estande 03'
    },
    {
      src: '/assets/images/projects/06-empresas/eventos/global-summit-photo-stand-04.webp',
      alt: 'Estande corporativo Global Summit vista 04',
      caption: 'Global Summit — Estande 04'
    },
    {
      src: '/assets/images/projects/06-empresas/eventos/global-summit-photo-stand-05.webp',
      alt: 'Estande corporativo Global Summit vista 05',
      caption: 'Global Summit — Estande 05'
    },
    {
      src: '/assets/images/projects/06-empresas/eventos/global-summit-photo-stand-06.webp',
      alt: 'Estande corporativo Global Summit vista 06',
      caption: 'Global Summit — Estande 06'
    },
    {
      src: '/assets/images/projects/06-empresas/eventos/global-summit-photo-07-bloco-de-notas.webp',
      alt: 'Material gráfico bloco de notas do Global Summit',
      caption: 'Global Summit — Bloco de Notas'
    },
    {
      src: '/assets/images/projects/06-empresas/eventos/global-summit-photo-08-folder-cmyk-impressao-3-dobras.webp',
      alt: 'Folder impresso CMYK de três dobras do Global Summit',
      caption: 'Global Summit — Folder'
    },
    {
      src: '/assets/images/projects/06-empresas/eventos/global-summit-photo-09-global-summit-photo-08-folder-cmyk-impressao-3-dobras-capa.webp',
      alt: 'Capa do folder impresso do Global Summit',
      caption: 'Global Summit — Folder Capa'
    },
    {
      src: '/assets/images/projects/06-empresas/eventos/global-summit-photo-10-stand-folders-view.webp',
      alt: 'Vista do estande com folders do Global Summit',
      caption: 'Global Summit — Materiais no Estande'
    }
  ]
},
  { id: 6, slug: 'branding-odontologico', title: 'Branding para Clínica Odontológica', category: 'Branding', image: '/assets/images/projects/06-empresas/valbao-dentista-cover.webp', imageAlt: 'Identidade Visual Premium para Valbão Odontologia', description: 'Posicionamento de marca premium para consultórios odontológicos, unindo sofisticação e tecnologia.' }
];