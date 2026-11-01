import type { LocalePath } from './types';

const publicGithubUrl = import.meta.env.PUBLIC_GITHUB_URL?.trim();
const publicWechatId = import.meta.env.PUBLIC_WECHAT_ID?.trim();
const publicWechatUrl = import.meta.env.PUBLIC_WECHAT_URL?.trim();

export const site = {
  name: 'Bassim Ramdani',
  field: 'AI Engineering and Data Science',
  chineseName: '',
  portrait: '',
  contact: {
    email: 'bassimramdani01@gmail.com',
    wechat: {
      id: publicWechatId || '',
      url: publicWechatUrl || '',
    },
  },
  socials: {
    github: publicGithubUrl || '',
  },
  cv: {
    path: 'files/Bassim-Ramdani-CV.pdf',
    localeOverrides: {} satisfies Partial<Record<LocalePath, string>>,
  },
} as const;

export type SiteConfig = typeof site;
