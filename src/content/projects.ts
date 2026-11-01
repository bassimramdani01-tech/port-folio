import type { PublishedRecord } from './types';

export interface CapstoneRecord extends PublishedRecord {
  kind: 'capstone';
  title: string;
  description: string;
}

export interface ProjectRecord extends PublishedRecord {
  kind: 'project';
  title: string;
  description?: string;
  links?: readonly { label: string; href: string }[];
}

export type ProjectEntry = CapstoneRecord | ProjectRecord;

export const projects = [
  {
    id: 'ai-antivirus-capstone',
    kind: 'capstone',
    published: true,
    title: 'LLM malware analysis',
    description: 'Capstone project on malware analysis with large language models.',
  },
  {
    id: 'necto',
    kind: 'project',
    published: true,
    title: 'necto',
    description: '',
  },
  {
    id: 'netguard',
    kind: 'project',
    published: true,
    title: 'NetGuard',
    description: '',
  },
] as const satisfies readonly ProjectEntry[];
