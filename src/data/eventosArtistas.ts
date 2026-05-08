export type EventoArtista = {
  id: string;
  slug?: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  videoCloudinaryId?: string;
  role?: string;
  stack?: string[];
  year?: string;
  methodology?: string;
  status?: string;
  challenge?: string;
};

export const eventosArtistas: EventoArtista[] = [
  {
    id: 'obscure-crew',
    title: 'FLYER DE EVENTO | OBSCURE CREW',
    category: 'Festa psytrance | Paraná, Brasil',
    description: 'Flyer e identidade visual para evento private open air.',
    image: '/assets/images/projects/01-eventos-artistas/obscure-crew-open-air.webp',
    imageAlt: 'Flyer Obscure Crew',
  },
  {
    id: 'marrakech-express',
    title: 'CAPA DE ÁLBUM | MARRAKECH EXPRESS',
    category: 'V/A psytrance | Dream Crew Records',
    description: 'Capa de álbum para compilação internacional de psytrance.',
    image: '/assets/images/projects/01-eventos-artistas/marrakech-express-dream-crew-recs.webp',
    imageAlt: 'Capa Marrakech Express',
  },
  {
    id: 'under-effect',
    title: 'FLYER DE EVENTO | UNDER EFFECT',
    category: 'Festa psytrance | São Paulo',
    description: 'Flyer para evento gratuito de música eletrônica.',
    image: '/assets/images/projects/01-eventos-artistas/under-effect-party.webp',
    imageAlt: 'Flyer Under Effect',
  },
  {
    id: 'agya-effect',
    title: 'FLYER DE EVENTO | AGYA EFFECT',
    category: 'Festival psytrance | Guarulhos, SP',
    description: 'Flyer e identidade visual para evento indoor na Nekropolis.',
    image: '/assets/images/projects/01-eventos-artistas/agya-effect-flyer.webp',
    imageAlt: 'Flyer Agya Effect',
  },
  {
    id: 'astral-labyrinth',
    slug: 'astral-labyrinth',
    title: 'CAPA DE ÁLBUM | ASTRAL LABYRINTH',
    category: 'EP de High Bpm | Naturaíz Records',
    description: 'Direção de arte completa para o lançamento do EP Lunar Pareidolia, integrando criação de capa oficial e produção em Stop Motion biomecânica e sombria.',
    image: '/assets/images/projects/01-eventos-artistas/lunar-pareidolia.webp',
    imageAlt: 'Capa Astral Labyrinth — Naturaíz Records',
    videoCloudinaryId: 'snapinsta.com.br-69f33eea614a4_yrgrbo',
    role: 'Art Director & Motion Designer',
    stack: ['Photoshop', 'Illustrator', 'After Effects', 'MidJourney'],
    year: '2024',
    methodology: 'Art Direction + Stop Motion',
    status: 'Publicado',
    challenge: 'Criar uma identidade visual que traduzisse a sonoridade densa e psicodélica do EP Lunar Pareidolia. O projeto integrou criação da capa oficial com uma produção em Stop Motion biomecânica — unindo design lúdico e psicodelia para o cenário de festivais.',
  },
  {
    id: 'that-is-not-dead',
    title: 'CAPA DE ÁLBUM | THAT IS NOT DEAD',
    category: 'EP psytrance | Visionary Shamanics Recs',
    description: 'Ilustração e design conceitual dark.',
    image: '/assets/images/projects/01-eventos-artistas/noobpsybot-ep.webp',
    imageAlt: 'Capa That Is Not Dead',
  }
];