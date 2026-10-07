import type { PublishedRecord } from './types';

export interface CapstoneRecord extends PublishedRecord {
  kind: 'capstone';
  description: string;
  context: string;
}

export interface ProjectRecord extends PublishedRecord {
  kind: 'project';
  title: string;
  description: string;
  links?: readonly { label: string; href: string }[];
}

export type ProjectEntry = CapstoneRecord | ProjectRecord;

export const projects = [
  {
    id: 'ai-antivirus-capstone',
    kind: 'capstone',
    published: true,
    description:
      'AI-powered antivirus concept that scans files for malicious content and uses AI to provide diagnostics.',
    context: 'Prior academic work',
  },
] as const satisfies readonly ProjectEntry[];
