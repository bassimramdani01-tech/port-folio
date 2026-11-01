import type { TranslationTree } from './utils';
import type { en } from './en';

export const zh = {
  meta: {
    title: 'Bassim Ramdani | 人工智能工程与数据科学',
    description: 'Bassim Ramdani 在人工智能工程与数据科学领域的学术背景、实习经历和研究兴趣。',
    openGraphLocale: 'zh_CN',
  },
  accessibility: {
    skipToContent: '跳转到正文',
    mainContent: '主要内容',
    primaryNavigation: '主导航',
    openNavigation: '打开导航菜单',
    closeNavigation: '关闭导航菜单',
    chooseLanguage: '选择语言',
    externalLink: '在新标签页中打开',
    themeToggle: '切换颜色主题',
  },
  header: {
    homeLink: 'Bassim Ramdani 首页',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
  },
  navigation: {
    about: '关于',
    education: '教育经历',
    internships: '实习经历',
    researchProjects: '研究与项目',
    skillsInterests: '技能',
    languages: '语言',
    contact: '联系方式',
  },
  languageSwitcher: {
    label: '选择语言',
    names: {
      en: '英语',
      fr: '法语',
      zh: '简体中文',
    },
  },
  hero: {
    title: 'Bassim Ramdani',
    location: '索维拉 · 摩洛哥',
    field: '人工智能工程与数据科学',
    summary: '一段连接摩洛哥、数据、网络与语言模型的经历。',
    portraitNote: '肖像位置',
    highlightsAction: '查看重点',
    fullStoryAction: '浏览完整经历',
    contactAction: '发送邮件',
    cvAction: '下载简历',
  },
  about: {
    title: '关于',
    paragraphs: {
      background:
        '我在索维拉高等技术学院学习人工智能工程与数据科学，完成了 3IASD 本科学位和 IDSD DUT。',
      experience:
        '我在 OCP Group 和 TAQA Morocco 的实习中接触了网络架构、SQL 和 Power BI。',
      researchDirection:
        '我的项目包括 necto、NetGuard，以及一个探索使用大型语言模型分析恶意软件的毕业项目。',
    },
  },
  education: {
    title: '教育经历',
    records: {
      'bachelor-3iasd': 'Bachelor · 3IASD',
      'dut-idsd': 'DUT · IDSD',
      'shandong-language-year': '中文学习年度',
    },
  },
  experience: {
    title: '实习经历',
    recordLabel: '实习',
    descriptions: {
      'ocp-group-2024': '使用 Cisco Packet Tracer 进行网络架构工作。',
      'taqa-2025': '使用 SQL 清理数据库，并使用 Power BI 创建数据可视化。',
    },
  },
  researchProjects: {
    title: '研究与项目',
    capstoneLabel: '学术毕业项目',
    projectLabel: '项目',
    descriptions: {
      'ai-antivirus-capstone':
        '使用大型语言模型开展恶意软件分析的毕业项目。',
    },
    records: {
      'ai-antivirus-capstone': 'LLM 恶意软件分析',
      necto: 'necto',
      netguard: 'NetGuard',
    },
    projectLink: '查看项目',
  },
  skillsInterests: {
    title: '技能',
    skillsLabel: '工具',
  },
  languages: {
    title: '语言',
    names: {
      french: '法语',
      english: '英语',
      chinese: '中文',
    },
  },
  socialLinks: {
    label: '社交链接',
    github: 'GitHub',
    wechat: '微信',
  },
  contact: {
    title: '联系方式',
    introduction: '如有学术或项目相关咨询，欢迎通过以下链接联系我。',
    emailLabel: '电子邮件',
    githubLabel: 'GitHub',
    wechatLabel: '微信',
    wechatIdLabel: '微信号',
    cvLabel: '个人简历',
    externalLink: '在新标签页中打开',
    portraitLabel: 'Bassim Ramdani 的肖像',
  },
  theme: {
    lightLabel: '切换到浅色主题',
    darkLabel: '切换到深色主题',
  },
  footer: {
    backToTop: '返回顶部',
    copyright: '© {year} Bassim Ramdani',
  },
  notFound: {
    title: '页面未找到',
    message: '找不到您请求的页面。',
    homeLink: '前往英文作品集',
  },
} satisfies TranslationTree<typeof en>;
