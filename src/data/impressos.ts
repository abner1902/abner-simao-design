export interface Impresso {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  tools: string[];
  thumb: string;
  image: string;
  imageAlt: string;
  // Novos campos técnicos
  paperType: string;           // Tipo de papel
  finishing: string[];         // Acabamentos
  cmyk: boolean;               // Fechamento CMYK
  dieCut?: string;             // Faca de corte (opcional)
  challenge: string;           // Descrição do projeto/desafio
}

export const impressosData: Impresso[] = [
  {
    id: 'duque-caixas',
    title: 'Caixa Personalizada para Carnes Nobres',
    category: 'Embalagem Premium',
    client: 'Center Caixas / Duque Carnes',
    year: '2022',
    tools: ['Illustrator'],
    thumb: '/assets/images/projects/05-impressos/thumbs/caixa-churrasco-impresso.webp',
    image: '/assets/images/projects/05-impressos/full/caixa-churrasco-impresso.webp',
    imageAlt: 'Caixa personalizada para carnes nobres - Duque Carnes',
    paperType: 'Cartão Triplex 300g',
    finishing: ['Laminação Fosca', 'Verniz UV Localizado', 'Hot Stamping Dourado'],
    cmyk: true,
    dieCut: 'Faca especial para estrutura de caixa com encaixe',
    challenge: 'Criar embalagem premium que transmitisse qualidade e sofisticação para carnes nobres. Desenvolvimento de faca personalizada e arte final pronta para gráfica com fechamento CMYK e sangria adequada.'
  },
  {
    id: 'gradiente-flyer',
    title: 'Flyer Institucional para Equipamentos de Som',
    category: 'Material Promocional',
    client: 'Gradiente',
    year: '2019',
    tools: ['Photoshop', 'Illustrator'],
    thumb: '/assets/images/projects/05-impressos/thumbs/gradiente-speaker-mockup.webp',
    image: '/assets/images/projects/05-impressos/full/gradiente-speaker-mockup.webp',
    imageAlt: 'Flyer institucional Gradiente equipamentos de som',
    paperType: 'Couchê Brilho 150g',
    finishing: ['Verniz Total UV'],
    cmyk: true,
    challenge: 'Material promocional institucional para linha de speakers aquáticos. Foco em destacar resistência à água e qualidade sonora com layout moderno e técnico.'
  },
  {
    id: 'patacones-banner',
    title: 'Banner para Restaurante Colombiano',
    category: 'Identidade Visual Completa',
    client: 'Patacones Gastronomia',
    year: '2020',
    tools: ['Photoshop', 'Illustrator'],
    thumb: '/assets/images/projects/05-impressos/thumbs/patacones-impresso-mockup.webp',
    image: '/assets/images/projects/05-impressos/full/patacones-impresso-mockup.webp',
    imageAlt: 'Banner restaurante colombiano Patacones',
    paperType: 'Lona Microperfurada 350g',
    finishing: ['Impressão Digital UV'],
    cmyk: true,
    challenge: 'Banner institucional para restaurante de gastronomia colombiana. Integração com identidade visual completa (logotipo já desenvolvido), destacando cultura e autenticidade da culinária.'
  },
  {
    id: 'pizza-cardapio',
    title: 'Cardápio Completo para Rede de Pizzaria',
    category: 'Design Editorial',
    client: 'Melhor Fatia da Pizza',
    year: '2017',
    tools: ['InDesign', 'Illustrator'],
    thumb: '/assets/images/projects/05-impressos/thumbs/cardapio-mockup-melhor-fatia-pizza.webp',
    image: '/assets/images/projects/05-impressos/full/cardapio-mockup-melhor-fatia-pizza.webp',
    imageAlt: 'Cardápio completo pizzaria Melhor Fatia',
    paperType: 'Couchê Fosco 200g (capa) + 150g (miolo)',
    finishing: ['Laminação Fosca', 'Espiral Wire-O'],
    cmyk: true,
    challenge: 'Cardápio completo para rede de pizzaria de shopping. Organização de mais de 80 itens, fotos profissionais, descrições apetitosas e hierarquia visual clara. Fechamento profissional para gráfica rápida.'
  }
];