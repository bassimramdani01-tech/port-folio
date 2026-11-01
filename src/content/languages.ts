export interface LanguageRecord {
  id: string;
  name: string;
  level?: string;
}

export const languages = [
  {
    id: 'french',
    name: 'French',
    level: 'C1',
  },
  {
    id: 'english',
    name: 'English',
  },
  {
    id: 'chinese',
    name: 'Chinese',
  },
] as const satisfies readonly LanguageRecord[];
