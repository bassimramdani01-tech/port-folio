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
    formErrors: '请更正表单中的错误。',
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
    skillsInterests: '技能与兴趣',
    certificates: '证书',
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
    eyebrow: '个人作品集',
    field: '人工智能工程与数据科学',
    goalLabel: '研究生学习目标',
    goal: '计划在中国一流大学攻读硕士学位',
    contactAction: '联系我',
    cvAction: '下载简历',
  },
  about: {
    title: '关于',
    paragraphs: {
      background:
        '我的专业背景是人工智能工程与数据科学。我在 École Supérieure de Technologie (EST) 完成了为期三年的课程。',
      experience:
        '实习期间，我参与了网络架构项目、数据库清理和数据可视化，也从事过官方网站的前端与后端开发。',
      researchDirection:
        '我正在准备申请中国一流大学的硕士项目，希望探索人工智能智能体架构、智能体开发、提示工程、自然语言处理和数据工程，并在研究生阶段逐步形成研究方向。',
    },
  },
  education: {
    title: '教育经历',
    labels: {
      institution: '院校',
      location: '地点',
      program: '课程',
      field: '领域',
      completion: '完成时间',
      overallGrade: '总成绩',
      finalProjectRanking: '毕业项目排名',
      officialDegreeTitle: '官方学位名称',
      toConfirm: '待确认',
    },
    programDuration: '为期 {years} 年的课程',
    completionValue: '毕业学年：{year}',
    gradeValue: '约 {value}/20',
    finalProjectRankingValue: '最终项目中排名第 {rank} / {total}',
    locationValue: '摩洛哥索维拉',
    firstCohortClaim: '是摩洛哥首届本科生中的一员',
  },
  experience: {
    title: '实习经历',
    recordLabel: '实习',
    descriptions: {
      'ocp-group-2024': '使用 Cisco Packet Tracer 参与网络架构项目。',
      'taqa-2025': '使用 SQL 清理数据库，并使用 Power BI 创建数据可视化。',
      'argana-artisan-cooperative-2026': '参与官方网站的前端与后端开发。',
    },
  },
  researchProjects: {
    title: '研究与项目',
    capstoneLabel: '学术毕业项目',
    priorAcademicWork: '此前的学术工作',
    descriptions: {
      'ai-antivirus-capstone':
        '一个人工智能杀毒软件概念，可扫描文件中的恶意内容，并利用人工智能提供诊断信息。',
    },
    projectLink: '查看项目',
  },
  skillsInterests: {
    title: '技能与兴趣',
    skillsLabel: '工具',
    interestsLabel: '兴趣',
    interestNames: {
      'ai-agent-architecture': '智能体架构',
      'building-ai-agents': '智能体开发',
      'prompt-engineering': '提示工程',
      nlp: '自然语言处理',
      'data-engineering': '数据工程',
    },
  },
  certificates: {
    title: '证书',
    issuerLabel: '颁发机构',
    dateLabel: '日期',
    certificateLink: '查看证书',
  },
  languages: {
    title: '语言',
    names: {
      french: '法语',
      english: '英语',
      chinese: '中文',
    },
    notes: {
      english: '计划参加考试，尚未参加',
      chinese: '我在 {year} 学年学习中文。',
    },
  },
  socialLinks: {
    label: '社交链接',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    wechat: '微信',
    wechatQr: '微信二维码',
  },
  contact: {
    title: '联系方式',
    introduction: '如需了解我的学术背景或研究生学习兴趣，欢迎通过电子邮件或电话联系我。',
    emailLabel: '给 Bassim 发邮件',
    phoneLabel: '致电 Bassim',
    phoneToConfirm: '电话号码待确认',
    fallbackExplanation: '联系表单尚未配置。您可以通过电子邮件或电话直接联系我。',
    form: {
      nameLabel: '姓名',
      emailLabel: '电子邮箱',
      messageLabel: '留言',
      submit: '发送留言',
      submitting: '正在发送…',
      success: '留言已发送。',
      failure: '留言发送失败。请重试，或通过电子邮件联系我。',
      nameRequired: '请输入姓名。',
      emailRequired: '请输入电子邮箱地址。',
      emailInvalid: '请输入有效的电子邮箱地址。',
      messageRequired: '请输入留言内容。',
      honeypotLabel: '请将此字段留空',
    },
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
