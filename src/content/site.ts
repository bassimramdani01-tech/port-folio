import type { LocalePath } from './types';

const publicFormEndpoint = import.meta.env.PUBLIC_FORM_ENDPOINT?.trim();

export const site = {
  name: 'Bassim Ramdani',
  field: 'AI Engineering and Data Science',
  contact: {
    email: 'bassimramdani01@gmail.com',
    phone: {
      display: '+212 6 19 27 17 02',
      href: '+212619271702',
      verified: false,
      confirmation: '[CONFIRM_PHONE_INTERNATIONAL_FORMAT]',
    },
    wechat: {
      id: '[ADD_WECHAT_ID_OR_QR_ASSET]',
      qrAsset: '[ADD_WECHAT_ID_OR_QR_ASSET]',
    },
  },
  socials: {
    github: '[ADD_GITHUB_URL]',
    linkedin: '[ADD_LINKEDIN_URL]',
  },
  cv: {
    path: '[ADD_CV_PDF]',
    defaultPath: 'public/files/Bassim-Ramdani-CV.pdf',
    localeOverrides: {} satisfies Partial<Record<LocalePath, string>>,
  },
  formEndpoint: publicFormEndpoint || '[ADD_FORM_ENDPOINT]',
  optionalChineseName: '[ADD_CHINESE_NAME_OPTIONAL]',
  flags: {
    showGrade: true,
  },
} as const;

export type SiteConfig = typeof site;
