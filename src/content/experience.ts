export interface ExperienceRecord {
  id: string;
  organization: string;
  startDate: string;
  endDate: string;
  work: string;
}

export const experience = [
  {
    id: 'ocp-group-2024',
    organization: 'OCP Group',
    startDate: '2024-07-09',
    endDate: '2024-08-08',
    work: 'Network architecture project using Cisco Packet Tracer.',
  },
  {
    id: 'taqa-2025',
    organization: 'TAQA',
    startDate: '2025-04-01',
    endDate: '2025-05-14',
    work: 'Cleaned databases using SQL and created visualizations with Power BI.',
  },
  {
    id: 'argana-artisan-cooperative-2026',
    organization: 'Argana Artisan Cooperative, Essaouira',
    startDate: '2026-04-15',
    endDate: '2026-06-01',
    work: 'Frontend and backend development for an official website.',
  },
] as const satisfies readonly ExperienceRecord[];

export const pendingExperienceDetails =
  '[ADD_INTERNSHIP_TITLES_AND_VERIFIED_OUTCOMES]';
