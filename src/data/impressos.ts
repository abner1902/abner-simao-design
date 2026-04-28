export interface ImpressoItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const impressosData: ImpressoItem[] = [
  {
    id: '1',
    title: 'Embalagem Nobres Churrasco',
    category: 'Branding & Packaging',
    image: '/assets/images/projects/05-impressos/caixa-churrasco-impresso.webp',
  },
  {
    id: '2',
    title: 'Cardápio Melhor Fatia de Pizza',
    category: 'Gastronomia',
    image: '/assets/images/projects/05-impressos/cardapio-mockup-melhor-fatia-pizza.webp',
  },
  {
    id: '3',
    title: 'Speaker Aqua Gradiente',
    category: 'Arte Final & PDV',
    image: '/assets/images/projects/05-impressos/gradiente-speaker-mockup.webp',
  },
  {
    id: '4',
    title: 'Patacones Colombiana',
    category: 'Design Editorial & Campanha',
    image: '/assets/images/projects/05-impressos/patacones-impresso-mockup.webp',
  }
];