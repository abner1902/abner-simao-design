export interface ImpressoProject {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  tools: string[];
  paperType: string;
  challenge: string;
  image: string;
  thumb: string;
  imageAlt: string;
  behanceUrl: string;
}

export const impressosData: ImpressoProject[] = [
  {
    id: 'patacones-banner',
    title: 'Banner para Restaurante Colombiano',
    category: 'Identidade Visual Completa',
    client: 'Patacones Gastronomia',
    year: '2020',
    tools: ['Photoshop', 'Illustrator'],
    paperType: 'Lona Microperfurada 350g',
    challenge: 'Banner institucional para restaurante de gastronomia colombiana. Integração com identidade visual e foco em legibilidade externa.',
    image: '/assets/images/projects/05-impressos/full/patacones-alta-aprovada.webp',
    thumb: '/assets/images/projects/05-impressos/thumbs/patacones-impresso-mockup.webp',
    imageAlt: 'Banner Patacones',
    behanceUrl: 'https://www.behance.net/gallery/SEU_LINK_AQUI'
  },
  {
    id: 'pizza-cardapio',
    title: 'Cardápio Completo para Rede de Pizzaria',
    category: 'Design Editorial',
    client: 'Melhor Fatia da Pizza',
    year: '2017',
    tools: ['InDesign', 'Illustrator'],
    paperType: 'Couchê Fosco 200g (capa) + 150g (miolo)',
    challenge: 'Desenvolvimento de cardápio focado em engenharia de menu e experiência do usuário no PDV.',
    image: '/assets/images/projects/05-impressos/full/pizza-alta-aprovada.webp',
    thumb: '/assets/images/projects/05-impressos/thumbs/cardapio-mockup-melhor-fatia-pizza.webp',
    imageAlt: 'Cardápio Melhor Fatia da Pizza',
    behanceUrl: 'https://www.behance.net/gallery/SEU_LINK_AQUI'
  },
  {
    id: 'duque-carnes-caixa',
    title: 'Caixa Personalizada para Delivery',
    category: 'Embalagem Premium',
    client: 'Duque Carnes',
    year: '2024',
    tools: ['Illustrator', 'Photoshop'],
    paperType: 'Papelão Kraft 350g com verniz local',
    challenge: 'Desenvolvimento de arte em vetor para faca de corte, garantindo encaixe perfeito e alta qualidade na impressão para açougue delivery.',
    image: '/assets/images/projects/05-impressos/full/caixa-duque-alta-aprovada.webp',
    thumb: '/assets/images/projects/05-impressos/thumbs/caixa-churrasco-impresso.webp',
    imageAlt: 'Caixa Duque Carnes',
    behanceUrl: ''
  },
  {
    id: 'gradiente-speaker',
    title: 'Identidade Visual para Speaker Bluetooth',
    category: 'Branding + Embalagem',
    client: 'Gradiente',
    year: '2023',
    tools: ['Illustrator', 'Photoshop'],
    paperType: 'Papel Couchê 250g com laminação fosca',
    challenge: 'Criação de identidade visual e embalagem para linha de speakers, unindo design retrô com tecnologia moderna.',
    image: '/assets/images/projects/05-impressos/full/speaker-alta-aprovada.webp',
    thumb: '/assets/images/projects/05-impressos/thumbs/gradiente-speaker-mockup.webp',
    imageAlt: 'Speaker Gradiente',
    behanceUrl: ''
  }
];