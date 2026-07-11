import type { Locale } from "@/i18n/utils";

export const TODO_CONTENT = "TODO_CONTENT" as const;

export type SiteLink = {
  label: Record<Locale, string>;
  href?: string;
  email?: string;
  external?: boolean;
};

export type NavItem = {
  id: string;
  label: Record<Locale, string>;
  href: Record<Locale, string>;
};

export const siteMeta = {
  name: "Gabriel Zurmely",
  title: {
    pt: "Gabriel Zurmely | Design e UX",
    en: "Gabriel Zurmely | Design and UX",
  },
  description: {
    pt: "Portfolio e currículo de Gabriel Zurmely, designer de UX formado pela UFMG e atuando no Inter.",
    en: "Portfolio and CV for Gabriel Zurmely, a UX designer graduated from UFMG and working at Inter.",
  },
  canonicalDomain: "https://zurmely.com",
  email: TODO_CONTENT,
  location: {
    pt: "Belo Horizonte, Brasil",
    en: "Belo Horizonte, Brazil",
  },
  ogImage: "/images/og-placeholder.svg",
};

export const profile = {
  headline: {
    pt: "Designer de UX construindo produtos digitais claros, úteis e bem pensados.",
    en: "UX designer building clear, useful, and well-crafted digital products.",
  },
  intro: {
    pt: "Sou Gabriel Zurmely, recém-formado em Design pela UFMG e atuo no Inter, um dos principais fintechs do Brasil. Este site reúne meu trabalho, experiência e formas de contato.",
    en: "I am Gabriel Zurmely, a recent Design graduate from UFMG and currently working at Inter, one of Brazil's leading fintechs. This site brings together my work, experience, and ways to get in touch.",
  },
  capabilities: {
    pt: [
      {
        title: "Pesquisa e estratégia",
        description:
          "Entrevistas, mapeamento de jornada, definição de problemas e alinhamento entre negócio e usuário.",
      },
      {
        title: "Interface e sistemas",
        description:
          "Wireframes, protótipos, fluxos, componentes e documentação para times de produto e engenharia.",
      },
      {
        title: "Colaboração em produto",
        description:
          "Trabalho próximo a PMs, devs e stakeholders para transformar descobertas em entregas consistentes.",
      },
    ],
    en: [
      {
        title: "Research and strategy",
        description:
          "Interviews, journey mapping, problem framing, and alignment between business and user needs.",
      },
      {
        title: "Interface and systems",
        description:
          "Wireframes, prototypes, flows, components, and documentation for product and engineering teams.",
      },
      {
        title: "Product collaboration",
        description:
          "Close work with PMs, developers, and stakeholders to turn discovery into consistent delivery.",
      },
    ],
  },
};

export const navigation: NavItem[] = [
  {
    id: "home",
    label: { pt: "Início", en: "Home" },
    href: { pt: "/pt/", en: "/en/" },
  },
  {
    id: "work",
    label: { pt: "Trabalhos", en: "Work" },
    href: { pt: "/pt/#work", en: "/en/#work" },
  },
  {
    id: "contact",
    label: { pt: "Contato", en: "Contact" },
    href: { pt: "/pt/contact/", en: "/en/contact/" },
  },
];

export const contactLinks: SiteLink[] = [
  {
    label: { pt: "E-mail", en: "Email" },
    email: TODO_CONTENT,
  },
  {
    label: { pt: "LinkedIn", en: "LinkedIn" },
    href: TODO_CONTENT,
    external: true,
  },
  {
    label: { pt: "GitHub", en: "GitHub" },
    href: "https://github.com/Zurmely",
    external: true,
  },
  {
    label: { pt: "Behance", en: "Behance" },
    href: TODO_CONTENT,
    external: true,
  },
];

export const ui = {
  localeGateway: {
    title: {
      pt: "Escolha o idioma",
      en: "Choose your language",
    },
    subtitle: {
      pt: "Este portfólio está disponível em português e inglês.",
      en: "This portfolio is available in Portuguese and English.",
    },
    continuePt: "Continuar em português",
    continueEn: "Continue in English",
  },
  sections: {
    selectedWork: { pt: "Trabalhos selecionados", en: "Selected work" },
    experience: { pt: "Experiência", en: "Experience" },
    capabilities: { pt: "Capacidades", en: "Capabilities" },
    contact: { pt: "Contato", en: "Contact" },
    relatedWork: { pt: "Trabalhos relacionados", en: "Related work" },
    viewProject: { pt: "Ver projeto", en: "View project" },
    backToWork: { pt: "Voltar aos trabalhos", en: "Back to work" },
    getInTouch: { pt: "Entrar em contato", en: "Get in touch" },
    currentRole: { pt: "Atual", en: "Current" },
    present: { pt: "Atual", en: "Present" },
    readCaseStudy: { pt: "Ler estudo de caso", en: "Read case study" },
    externalLink: { pt: "Link externo", en: "External link" },
    notFoundTitle: { pt: "Página não encontrada", en: "Page not found" },
    notFoundBody: {
      pt: "A página que você procura não existe ou foi movida.",
      en: "The page you are looking for does not exist or has moved.",
    },
    returnHome: { pt: "Voltar ao início", en: "Return home" },
  },
  contactPage: {
    title: { pt: "Contato", en: "Contact" },
    intro: {
      pt: "Quer conversar sobre design, produto ou oportunidades? Use os canais abaixo.",
      en: "Want to talk about design, product, or opportunities? Use the channels below.",
    },
    note: {
      pt: "Este site é totalmente estático. Não há formulário nem backend de envio.",
      en: "This site is fully static. There is no form or submission backend.",
    },
  },
  workMeta: {
    role: { pt: "Papel", en: "Role" },
    client: { pt: "Cliente", en: "Client" },
    context: { pt: "Contexto", en: "Context" },
    duration: { pt: "Duração", en: "Duration" },
    tools: { pt: "Ferramentas", en: "Tools" },
    disciplines: { pt: "Disciplinas", en: "Disciplines" },
    collaborators: { pt: "Colaboradores", en: "Collaborators" },
  },
};

export function getSiteUrl(path = "/"): string {
  return new URL(path, siteMeta.canonicalDomain).toString();
}

export function isRenderableLink(link: SiteLink): boolean {
  if (link.email && link.email !== TODO_CONTENT) return true;
  if (link.href && link.href !== TODO_CONTENT) return true;
  return false;
}

export function resolveLinkHref(link: SiteLink): string {
  if (link.email) return `mailto:${link.email}`;
  return link.href ?? "#";
}
