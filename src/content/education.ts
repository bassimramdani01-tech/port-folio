import type { VerifiedFact } from './types';

export interface EducationRecord {
  id: string;
  institution: VerifiedFact;
  location: VerifiedFact;
  program: VerifiedFact;
  field: VerifiedFact;
  completion: VerifiedFact;
  overallGrade: VerifiedFact;
  finalProjectRanking: VerifiedFact;
  officialDegreeTitle: VerifiedFact;
  firstCohortClaim: VerifiedFact;
}

export const education = {
  id: 'est-essaouira-2025-2026',
  institution: {
    value: 'École Supérieure de Technologie (EST)',
    verified: true,
  },
  location: {
    value: 'Essaouira, Morocco',
    verified: false,
    confirmation: '[CONFIRM_LOCATION_PUBLICATION]',
  },
  program: {
    value: 'Three-year program',
    verified: true,
  },
  field: {
    value: 'AI Engineering and Data Science',
    verified: true,
  },
  completion: {
    value: 'Graduated academic year 2025/2026',
    verified: true,
  },
  overallGrade: {
    value: 'approximately 12.5/20',
    verified: true,
  },
  finalProjectRanking: {
    value: 'Ranked 18 of 71 in the final project',
    verified: true,
  },
  officialDegreeTitle: {
    value: '[CONFIRM_OFFICIAL_DEGREE_TITLE]',
    verified: false,
    published: false,
  },
  firstCohortClaim: {
    value: 'Part of the first bachelor cohort in Morocco',
    verified: false,
    published: false,
    confirmation: '[CONFIRM_FIRST_BACHELOR_COHORT_CLAIM]',
  },
} satisfies EducationRecord;
