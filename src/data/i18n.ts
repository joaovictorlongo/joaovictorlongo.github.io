export type Locale = 'en-US' | 'pt-BR';

export const DEFAULT_LOCALE: Locale = 'en-US';

export const routes = {
  'en-US': {
    home: '/',
    about: '/about',
    projects: '/projects',
    blog: '/blog',
    projectBase: '/project',
  },
  'pt-BR': {
    home: '/pt-br',
    about: '/sobre',
    projects: '/projetos',
    blog: '/pt-br/blog',
    projectBase: '/projeto',
  },
} as const satisfies Record<Locale, {
  home: string;
  about: string;
  projects: string;
  blog: string;
  projectBase: string;
}>;

export const copy = {
  'en-US': {
    headerBadge: 'AI Engineer',
    nav: {
      about: 'About',
      projects: 'Projects',
      blog: 'Blog',
    },
    hero: {
      eyebrow: 'AI Engineer • Fullstack • Product-minded',
      role: 'Building AI-first products, premium interfaces, and systems that stay fast in production.',
      tagline: 'I design and ship software from backend to UI — with automation, AI workflows, and performance in mind.',
      primaryCta: 'View projects',
      secondaryCta: 'GitHub',
      selectedWork: 'Selected work',
      highlights: [
        {
          label: 'Focus',
          text: 'AI product experiences that feel native, useful, and intentional instead of bolted on.',
        },
        {
          label: 'Systems',
          text: 'Cloud-backed apps, APIs, and data flows designed to stay observable, stable, and maintainable.',
        },
        {
          label: 'Delivery',
          text: 'Tasteful execution from concept to interface polish, with strong attention to performance.',
        },
      ],
    },
    about: {
      sectionLabel: 'About',
      title: 'Who I am',
      location: 'Location',
      email: 'Email',
      copy: 'Copy',
      copied: 'Copied!',
      stack: 'Stack',
      bio: [
        'I have worked as a fullstack developer since 2016. I build with JavaScript, TypeScript, and AI engineering practices to ship end-to-end solutions — from backend logic to interface polish — in close collaboration with product teams and clients.',
        'I started my career in desktop ERP systems, where I spent about five years on development, deployment, and technical support for a base of 50 to 200 clients and roughly 1,000 active users. That period gave me a complete view of the software lifecycle — from code to the people using it every day.',
        'For the last four years I have been working on a field services management app with more than 5,000 clients and 40,000 users. I work with distributed systems and AWS cloud infrastructure, using Node.js, Nest.js, GraphQL, Angular, and PostgreSQL. Backend, cloud, and intelligent automation are the areas I care about most right now.',
      ],
      skills: [
        'TypeScript',
        'JavaScript',
        'Node.js',
        'Angular',
        'NestJS',
        'React',
        'PostgreSQL',
        'Docker',
        'Git',
        'Bun',
        'Elysia',
        'NativeScript',
        'Puppeteer',
        'HTML & CSS',
        'LLMs',
        'AI Products',
        'Automation',
      ],
    },
    projects: {
      sectionLabel: 'Selected work',
      title: 'Projects in focus',
      subtitle: 'A curated slice of the systems, automations, and tools that show how I think about product, backend, and AI in practice.',
      cta: 'View all projects',
      pageTitle: 'Projects',
      pageSubtitle: 'Selected public repositories from my GitHub',
      detailBack: 'Projects',
      detailAbout: 'About',
      detailLanguages: 'Languages',
      detailTechnologies: 'Technologies',
      detailGithub: 'View on GitHub',
      detailDemo: 'Open demo',
      detailUpdated: 'Updated on',
      detailToc: 'Table of contents',
      detailStars: 'stars',
      detailForks: 'forks',
    },
    blog: {
      sectionLabel: 'Writing',
      title: 'Notes & articles',
      subtitle: 'Short technical notes, ideas, and references when I have something worth keeping.',
      emptyTitle: 'No posts yet',
      emptyBody: 'The blog is available, but there is nothing published yet.',
      pageTitle: 'Blog',
      pageDescription: 'Notes and technical articles by João Victor Longo',
      backHome: 'Back home',
    },
    notFound: {
      title: 'Page not found',
      body: 'The page you are looking for does not exist or has been moved.',
      cta: 'Back home',
    },
    footer: {
      rights: 'All rights reserved',
    },
    localeSwitch: 'PT-BR',
  },
  'pt-BR': {
    headerBadge: 'Engenheiro de IA',
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      blog: 'Blog',
    },
    hero: {
      eyebrow: 'Engenheiro de IA • Fullstack • Foco em produto',
      role: 'Construindo produtos com IA, interfaces premium e sistemas que continuam rápidos em produção.',
      tagline: 'Desenho e entrego software do backend à interface — com automação, fluxos de IA e performance como prioridade.',
      primaryCta: 'Ver projetos',
      secondaryCta: 'GitHub',
      selectedWork: 'Trabalhos selecionados',
      highlights: [
        {
          label: 'Foco',
          text: 'Experiências de produto com IA que parecem nativas, úteis e intencionais — não enxertadas.',
        },
        {
          label: 'Sistemas',
          text: 'Apps, APIs e fluxos de dados em cloud pensados para serem observáveis, estáveis e fáceis de manter.',
        },
        {
          label: 'Entrega',
          text: 'Execução cuidadosa do conceito ao polimento visual, com atenção real a performance.',
        },
      ],
    },
    about: {
      sectionLabel: 'Sobre',
      title: 'Quem sou',
      location: 'Localização',
      email: 'E-mail',
      copy: 'Copiar',
      copied: 'Copiado!',
      stack: 'Stack',
      bio: [
        'Atuo como desenvolvedor fullstack desde 2016. Trabalho com JavaScript, TypeScript e práticas de AI engineering para construir soluções de ponta a ponta — da lógica de backend ao polimento da interface — em colaboração direta com clientes e equipes de produto.',
        'Comecei minha carreira em sistemas ERP desktop, onde atuei por cerca de cinco anos no desenvolvimento, implantação e suporte técnico para uma base de 50 a 200 clientes e aproximadamente 1 mil usuários ativos. Essa fase me deu visão completa do ciclo de vida do software — do código às pessoas que usam o sistema no dia a dia.',
        'Nos últimos quatro anos trabalho em um aplicativo de gestão de serviços externos com mais de 5 mil clientes e 40 mil usuários. Atuo com sistemas distribuídos e infraestrutura em cloud AWS, usando Node.js, Nest.js, GraphQL, Angular e PostgreSQL. Backend, cloud e automação inteligente são as áreas que mais me interessam hoje.',
      ],
      skills: [
        'TypeScript',
        'JavaScript',
        'Node.js',
        'Angular',
        'NestJS',
        'React',
        'PostgreSQL',
        'Docker',
        'Git',
        'Bun',
        'Elysia',
        'NativeScript',
        'Puppeteer',
        'HTML & CSS',
        'LLMs',
        'AI Products',
        'Automation',
      ],
    },
    projects: {
      sectionLabel: 'Trabalhos selecionados',
      title: 'Projetos em destaque',
      subtitle: 'Um recorte dos sistemas, automações e ferramentas que mostram como penso produto, backend e IA na prática.',
      cta: 'Ver todos os projetos',
      pageTitle: 'Projetos',
      pageSubtitle: 'Repositórios públicos em destaque no meu GitHub',
      detailBack: 'Projetos',
      detailAbout: 'Sobre',
      detailLanguages: 'Linguagens',
      detailTechnologies: 'Tecnologias',
      detailGithub: 'Ver no GitHub',
      detailDemo: 'Abrir demo',
      detailUpdated: 'Atualizado em',
      detailToc: 'Índice',
      detailStars: 'estrelas',
      detailForks: 'forks',
    },
    blog: {
      sectionLabel: 'Escrita',
      title: 'Notas & artigos',
      subtitle: 'Notas técnicas curtas, ideias e referências quando vale a pena guardar.',
      emptyTitle: 'Ainda sem posts',
      emptyBody: 'O blog está disponível, mas ainda não há nada publicado.',
      pageTitle: 'Blog',
      pageDescription: 'Notas e artigos técnicos de João Victor Longo',
      backHome: 'Voltar ao início',
    },
    notFound: {
      title: 'Página não encontrada',
      body: 'A página que você procura não existe ou foi movida.',
      cta: 'Voltar ao início',
    },
    footer: {
      rights: 'Todos os direitos reservados',
    },
    localeSwitch: 'EN-US',
  },
} as const;

export function getLocale(pathname: string): Locale {
  if (pathname.startsWith('/pt-br')) return 'pt-BR';
  if (pathname === '/sobre' || pathname === '/projetos' || pathname.startsWith('/projeto/')) return 'pt-BR';
  return 'en-US';
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'en-US' ? 'pt-BR' : 'en-US';
}

export function projectPath(locale: Locale, slug: string): string {
  return `${routes[locale].projectBase}/${slug}`;
}

export function alternatePath(pathname: string, locale: Locale): string {
  const next = otherLocale(locale);
  const slug = pathname.match(/^\/(?:pt-br\/)?(?:project|projeto)\/([^/]+)\/?$/)?.[1];

  if (slug) {
    return projectPath(next, slug);
  }

  if (pathname === '/' || pathname === '/pt-br') return routes[next].home;
  if (pathname === '/about' || pathname === '/sobre') return routes[next].about;
  if (pathname === '/projects' || pathname === '/projetos') return routes[next].projects;
  if (pathname === '/blog' || pathname === '/pt-br/blog') return routes[next].blog;

  return routes[next].home;
}
