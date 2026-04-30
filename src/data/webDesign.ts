export interface WebDesignProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  caseImage?: string;
  role: string;
  stack: string[];
  year: string;
  liveLink?: string; // ✅ Link externo (opcional)
  methodology?: string;
  status?: string;
  description: string;
  challenge: string;
}

export const webDesignProjects: WebDesignProject[] = [
  {
    id: 'portal-telemedicina',
    slug: 'portal-telemedicina-cursos',
    title: 'PORTAL TELEMEDICINA',
    category: 'Plataforma de cursos para médicos',
    image: '/assets/images/projects/03-web-design/portal-telemedicina-mockup.webp',
    imageAlt: 'Portal Telemedicina — Thumbnail do projeto',
    caseImage: '/assets/images/projects/03-web-design/portal-telemedicina-cursos-tabela/mockup-portal-cursos-slug.webp',
    role: 'Senior Product Designer (Lead Visual & UI)',
    stack: ['Adobe XD', 'Photoshop'],
    methodology: 'Mobile-First, User-Centered Design',
    status: 'Atuação In-house (CLT) + Agência Externa',
    year: '2024',
    liveLink: 'https://cursos.portaltelemedicina.com.br/', // ✅ Link adicionado
    description: 'Design estratégico para plataforma de telemedicina, resolvendo gargalos de comunicação entre diretoria e agência.',
challenge: 'O desafio era duplo: a equipe de desenvolvimento da agência externa não tinha expertise em design, gerando inconsistências visuais, e a diretoria exigia uma interface que convertesse em vendas.\n\nComo designer interno, assumi a liderança técnica e criativa, atuando como ponte entre o design e o código. Desenvolvi o sistema completo no Adobe XD (paleta, tipografia, ícones e hierarquia) e fiz a tradução direta para o front-end, alinhando diariamente com o programador para garantir implementação fiel. Entreguei um blueprint mobile-first focado em reduzir atrito na jornada de compra. A nova interface não só padronizou a marca no WordPress, mas foi decisiva para o aumento nas vendas dos cursos médicos.'  },
        {
    id: 'psychedelic-lab',
    slug: 'psychedelic-lab-cursos',
    title: 'PSYCHEDELIC LAB',
    category: 'Plataforma de cursos de Psytrance',
    image: '/assets/images/projects/03-web-design/psychedelic-lab-mockup.webp',
    imageAlt: 'Psychedelic Lab — Thumbnail do projeto',
    caseImage: '/assets/images/projects/03-web-design/psychedelic-lab-tutoriais-tabela/psychedelic-lab-mockup-premium.webp',
    role: 'Design Engineer',
    stack: ['Figma', 'Next.js', 'React', 'styled-components', 'JSS', 'YouTube API'],
    methodology: 'Plataforma Educacional, Curadoria de Conteúdo Multimídia, Integração YouTube + Downloads',
    status: 'Projeto Autoral / Educacional',
    year: '2021',
    liveLink: 'https://www.psychedeliclab.com.br/',
    description: 'Primeira plataforma brasileira de ensino profissional de Darkpsy, com tutoriais em vídeo, downloads gratuitos (drums, presets, wavetables) e comunidade ativa.',
challenge: 'A Psychedelic Lab é a primeira plataforma do Brasil dedicada ao ensino de Darkpsy. O desafio era organizar tutoriais, downloads e a estrutura do curso em uma interface limpa, sem poluir a navegação.\n\nCriei uma curadoria visual com cards de vídeos (YouTube), área de free downloads (drums, kicks, presets) e integração com a comunidade. Os módulos do curso são gerenciados via Hotmart, com checkout otimizado. Implementei o Facebook Pixel diretamente no código para rastreamento avançado, criação de públicos customizados e remarketing, deixando a base técnica pronta para campanhas de tráfego pago.\n\nResultado: O site ranqueia em 1º lugar no Google para "Curso de Darkpsy", atraindo produtores organicamente, enquanto a infraestrutura suporta estratégias de conversão e vendas escaláveis.'  },
    {
    id: 'agya-sounds',
    slug: 'agya-sounds-store',
    title: 'AGYA SOUNDS',
    category: 'Site para gravadora de música eletrônica',
    image: '/assets/images/projects/03-web-design/agya-sounds-mockup.webp',
    imageAlt: 'Agya Sounds — Thumbnail do projeto',
    caseImage: '/assets/images/projects/03-web-design/agya-sounds-site-tabela/agya-sounds-label-site-mockup-premium.webp',
    role: 'Design Engineer',
    stack: ['Next.js', 'React', 'Tailwind', 'Framer Motion', 'Figma'],
    methodology: 'Figma Design System, DOM-based Lazy Loading, Slug-based Routing',
    status: 'Freelance',
    year: '2026',
    liveLink: 'https://agyasounds.com.br/',
    description: 'E-commerce imersivo para gravadora de música eletrônica com 44 artistas, unindo estética psicodélica com performance técnica.',
    challenge: 'O projeto exigia catalogar 44 artistas com dados estruturados (slugs, datas, metadados) sem comprometer a performance inicial do site.\n\nCriei todo o design system no Figma antes da implementação. No front-end, utilizei manipulação direta do DOM para carregar o conteúdo de cada artista apenas sob demanda (on-click), reduzindo drasticamente o bundle inicial e garantindo LCP otimizado mesmo com grande volume de dados.'
  }
];