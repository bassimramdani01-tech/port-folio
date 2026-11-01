export type LocalePath = 'en' | 'fr' | 'zh';

export interface PublishedRecord {
  id: string;
  published: boolean;
}

export interface PortfolioViewModel {
  profile: {
    name: string;
    chineseName?: string;
    field: string;
    portrait?: string;
  };
  education: {
    id: string;
    institution: string;
    qualification: string;
    program?: string;
  }[];
  experience: {
    id: string;
    organization: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  projects: {
    id: string;
    title: string;
    kind: 'capstone' | 'project';
    description?: string;
  }[];
  skills: string[];
  languages: {
    name: string;
    level?: string;
    note?: string;
  }[];
  contact: {
    email?: string;
    wechatId?: string;
    wechatUrl?: string;
    githubUrl?: string;
    cvPath?: string;
  };
}
