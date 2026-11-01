import type { TranslationTree } from './utils';
import type { en } from './en';

export const fr = {
  meta: {
    title: 'Bassim Ramdani | Ingénierie de l’IA et science des données',
    description:
      'Parcours académique, stages et intérêts de recherche de Bassim Ramdani en ingénierie de l’IA et science des données.',
    openGraphLocale: 'fr_FR',
  },
  accessibility: {
    skipToContent: 'Aller au contenu',
    mainContent: 'Contenu principal',
    primaryNavigation: 'Navigation principale',
    openNavigation: 'Ouvrir le menu de navigation',
    closeNavigation: 'Fermer le menu de navigation',
    chooseLanguage: 'Choisir la langue',
    externalLink: 'S’ouvre dans un nouvel onglet',
    themeToggle: 'Changer le thème de couleurs',
  },
  header: {
    homeLink: 'Accueil de Bassim Ramdani',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
  },
  navigation: {
    about: 'À propos',
    education: 'Formation',
    internships: 'Stages',
    researchProjects: 'Recherche et projets',
    skillsInterests: 'Compétences',
    languages: 'Langues',
    contact: 'Contact',
  },
  languageSwitcher: {
    label: 'Choisir la langue',
    names: {
      en: 'Anglais',
      fr: 'Français',
      zh: 'Chinois simplifié',
    },
  },
  hero: {
    title: 'Bassim Ramdani',
    location: 'Essaouira · Maroc',
    field: 'Ingénierie de l’intelligence artificielle et science des données',
    summary: 'Un parcours marocain entre données, réseaux et modèles de langage.',
    portraitNote: 'Emplacement du portrait',
    highlightsAction: 'Voir les temps forts',
    fullStoryAction: 'Suivre le parcours complet',
    contactAction: 'M’écrire',
    cvAction: 'Télécharger le CV',
  },
  about: {
    title: 'À propos',
    paragraphs: {
      background:
        'J’ai étudié l’ingénierie de l’IA et la science des données à l’EST Essaouira, avec un Bachelor en 3IASD et un DUT en IDSD.',
      experience:
        'Mes stages chez OCP Group et TAQA Morocco m’ont permis de travailler sur l’architecture réseau, SQL et Power BI.',
      researchDirection:
        'Mes projets comprennent necto, NetGuard et un projet de fin d’études sur l’analyse de logiciels malveillants avec des grands modèles de langage.',
    },
  },
  education: {
    title: 'Formation',
    records: {
      'bachelor-3iasd': 'Bachelor · 3IASD',
      'dut-idsd': 'DUT · IDSD',
      'shandong-language-year': 'Année de langue chinoise',
    },
  },
  experience: {
    title: 'Stages',
    recordLabel: 'Stage',
    descriptions: {
      'ocp-group-2024': 'Architecture réseau avec Cisco Packet Tracer.',
      'taqa-2025': 'Nettoyage de bases de données avec SQL et visualisations avec Power BI.',
    },
  },
  researchProjects: {
    title: 'Recherche et projets',
    capstoneLabel: 'Projet de fin d’études',
    projectLabel: 'Projet',
    descriptions: {
      'ai-antivirus-capstone':
        'Projet de fin d’études consacré à l’analyse de logiciels malveillants avec des grands modèles de langage.',
    },
    records: {
      'ai-antivirus-capstone': 'Analyse de logiciels malveillants par LLM',
      necto: 'necto',
      netguard: 'NetGuard',
    },
    projectLink: 'Voir le projet',
  },
  skillsInterests: {
    title: 'Compétences',
    skillsLabel: 'Outils utilisés',
  },
  languages: {
    title: 'Langues',
    names: {
      french: 'Français',
      english: 'Anglais',
      chinese: 'Chinois',
    },
  },
  socialLinks: {
    label: 'Réseaux sociaux',
    github: 'GitHub',
    wechat: 'WeChat',
  },
  contact: {
    title: 'Contact',
    introduction: 'Pour les demandes académiques ou liées à mes projets, contactez-moi via les liens ci-dessous.',
    emailLabel: 'E-mail',
    githubLabel: 'GitHub',
    wechatLabel: 'WeChat',
    wechatIdLabel: 'Identifiant WeChat',
    cvLabel: 'Curriculum vitæ',
    externalLink: 'S’ouvre dans un nouvel onglet',
    portraitLabel: 'Portrait de Bassim Ramdani',
  },
  theme: {
    lightLabel: 'Passer au thème clair',
    darkLabel: 'Passer au thème sombre',
  },
  footer: {
    backToTop: 'Retour en haut',
    copyright: '© {year} Bassim Ramdani',
  },
  notFound: {
    title: 'Page introuvable',
    message: 'La page demandée est introuvable.',
    homeLink: 'Accéder au portfolio en anglais',
  },
} satisfies TranslationTree<typeof en>;
