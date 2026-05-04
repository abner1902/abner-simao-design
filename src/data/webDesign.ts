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
role: 'Senior Design Engineer & Lead Visual Strategy',
stack:['Adobe XD', 'Photoshop', 'Design Tokens', 'CSS Specs'],
methodology: 'Mobile-First, User-Centered Design',
status: 'Technical Leadership & Handoff',
year: '2024',
liveLink: 'https://cursos.portaltelemedicina.com.br/',
description: 'Orquestração estratégica de UI/UX e handoff técnico, alinhando a visão da diretoria à implementação precisa da agência externa.',
challenge: 'O projeto apresentava um gargalo crítico: forte desalinhamento entre a visão estratégica da diretoria e a execução técnica da agência externa, resultando em inconsistências visuais na plataforma.\n\nAssumindo a posição de Lead Visual Strategy, idealizei de ponta a ponta a arquitetura de interface e UI/UX no Adobe XD, com foco em conversão e usabilidade mobile-first. Para garantir uma implementação impecável, atuei como Design Engineer estruturando um handoff técnico rigoroso. Forneci à agência não apenas os assets mastigados, mas o suporte direto com especificações de CSS, mapeamento de cores e tokens. Essa liderança garantiu que o ambiente desenvolvido no WordPress refletisse fielmente o Design System, reduzindo atritos na jornada de compra e impactando positivamente as vendas.'
},
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