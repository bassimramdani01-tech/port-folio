export interface EducationRecord {
  id: string;
  institution: string;
  qualification: string;
  program: string;
}

export const education = [
  {
    id: 'bachelor-3iasd',
    institution: 'EST Essaouira',
    qualification: 'Bachelor',
    program: '3IASD',
  },
  {
    id: 'dut-idsd',
    institution: 'EST Essaouira',
    qualification: 'DUT',
    program: 'IDSD',
  },
  {
    id: 'shandong-language-year',
    institution: 'Shandong University of Aeronautics',
    qualification: 'Chinese-language year',
    program: '',
  },
] as const satisfies readonly EducationRecord[];
