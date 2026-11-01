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
    organization: 'TAQA Morocco',
    startDate: '2025-04-01',
    endDate: '2025-05-14',
    work: 'Cleaned databases using SQL and created visualizations with Power BI.',
  },
] as const satisfies readonly ExperienceRecord[];
