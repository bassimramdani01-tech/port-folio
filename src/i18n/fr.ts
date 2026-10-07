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
    formErrors: 'Veuillez corriger les erreurs du formulaire.',
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
    skillsInterests: 'Compétences et intérêts',
    certificates: 'Certificats',
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
    eyebrow: 'Portfolio',
    field: 'Ingénierie de l’intelligence artificielle et science des données',
    goalLabel: 'Projet d’études supérieures',
    goal: 'Préparer un master dans une université de premier plan en Chine',
    contactAction: 'Me contacter',
    cvAction: 'Télécharger le CV',
  },
  about: {
    title: 'À propos',
    paragraphs: {
      background:
        'Mon parcours porte sur l’ingénierie de l’IA et la science des données. J’ai suivi un cursus de trois ans à l’École Supérieure de Technologie (EST).',
      experience:
        'Pendant mes stages, j’ai travaillé sur un projet d’architecture réseau, le nettoyage de bases de données, la création de visualisations ainsi que le développement front-end et back-end d’un site officiel.',
      researchDirection:
        'Je me prépare à poursuivre un master dans une université de premier plan en Chine. Je souhaite explorer l’architecture des agents d’IA, la création d’agents, l’ingénierie des prompts, le traitement automatique du langage naturel et l’ingénierie des données, puis développer un axe de recherche pendant mes études supérieures.',
    },
  },
  education: {
    title: 'Formation',
    labels: {
      institution: 'Établissement',
      location: 'Lieu',
      program: 'Cursus',
      field: 'Domaine',
      completion: 'Fin du cursus',
      overallGrade: 'Moyenne générale',
      finalProjectRanking: 'Classement du projet final',
      officialDegreeTitle: 'Intitulé officiel du diplôme',
      toConfirm: 'À confirmer',
    },
    programDuration: 'Cursus de {years} ans',
    completionValue: 'Diplômé pendant l’année universitaire {year}',
    gradeValue: 'Environ {value}/20',
    finalProjectRankingValue: 'Classé au rang {rank} sur {total} pour le projet final',
    locationValue: 'Essaouira, Maroc',
    firstCohortClaim: 'J’ai fait partie de la première promotion de licence au Maroc',
  },
  experience: {
    title: 'Stages',
    recordLabel: 'Stage',
    descriptions: {
      'ocp-group-2024':
        'Travail sur un projet d’architecture réseau avec Cisco Packet Tracer.',
      'taqa-2025':
        'Nettoyage de bases de données avec SQL et création de visualisations avec Power BI.',
      'argana-artisan-cooperative-2026':
        'Développement front-end et back-end d’un site officiel.',
    },
  },
  researchProjects: {
    title: 'Recherche et projets',
    capstoneLabel: 'Projet de fin d’études',
    priorAcademicWork: 'Travail académique antérieur',
    descriptions: {
      'ai-antivirus-capstone':
        'Concept d’antivirus assisté par l’IA qui analyse les fichiers à la recherche de contenus malveillants et utilise l’IA pour fournir des diagnostics.',
    },
    projectLink: 'Voir le projet',
  },
  skillsInterests: {
    title: 'Compétences et intérêts',
    skillsLabel: 'Outils utilisés',
    interestsLabel: 'Centres d’intérêt',
    interestNames: {
      'ai-agent-architecture': 'Architecture des agents d’IA',
      'building-ai-agents': 'Création d’agents d’IA',
      'prompt-engineering': 'Ingénierie des prompts',
      nlp: 'Traitement automatique du langage naturel',
      'data-engineering': 'Ingénierie des données',
    },
  },
  certificates: {
    title: 'Certificats',
    issuerLabel: 'Organisme émetteur',
    dateLabel: 'Date',
    certificateLink: 'Voir le certificat',
  },
  languages: {
    title: 'Langues',
    names: {
      french: 'Français',
      english: 'Anglais',
      chinese: 'Chinois',
    },
    notes: {
      english: 'Examen prévu, pas encore passé',
      chinese: 'J’apprends le chinois pendant l’année universitaire {year}',
    },
  },
  socialLinks: {
    label: 'Réseaux sociaux',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    wechat: 'WeChat',
    wechatQr: 'Code QR WeChat',
  },
  contact: {
    title: 'Contact',
    introduction:
      'Pour toute question sur mon parcours académique ou mes projets d’études supérieures, vous pouvez me joindre par e-mail ou par téléphone.',
    emailLabel: 'Écrire à Bassim',
    phoneLabel: 'Appeler Bassim',
    phoneToConfirm: 'Numéro de téléphone à confirmer',
    fallbackExplanation:
      'Le formulaire de contact n’est pas configuré. Vous pouvez me joindre directement par e-mail ou par téléphone.',
    form: {
      nameLabel: 'Nom',
      emailLabel: 'Adresse e-mail',
      messageLabel: 'Message',
      submit: 'Envoyer le message',
      submitting: 'Envoi en cours…',
      success: 'Votre message a été envoyé.',
      failure:
        'Votre message n’a pas pu être envoyé. Réessayez ou contactez-moi par e-mail.',
      nameRequired: 'Veuillez saisir votre nom.',
      emailRequired: 'Veuillez saisir votre adresse e-mail.',
      emailInvalid: 'Veuillez saisir une adresse e-mail valide.',
      messageRequired: 'Veuillez saisir un message.',
      honeypotLabel: 'Laissez ce champ vide',
    },
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
