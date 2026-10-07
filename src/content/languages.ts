export interface LanguageRecord {
  id: string;
  name: string;
  level?: string;
  note?: string;
  pendingDetail?: string;
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
    note: 'Exam planned, not yet taken',
    pendingDetail: '[ADD_ENGLISH_TEST_AND_SCORE_WHEN_AVAILABLE]',
  },
  {
    id: 'chinese',
    name: 'Chinese',
    note: 'Learning during academic year 2026/2027',
    level: '[ADD_CHINESE_LEVEL_WHEN_KNOWN]',
  },
] as const satisfies readonly LanguageRecord[];
