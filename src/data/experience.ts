export type Domain = {
  id: string
  title: string
  description: string
  icon: 'cart' | 'register' | 'laptop' | 'grad' | 'diagram' | 'saas'
  wide?: boolean
}

export type TimelineItem = {
  id: string
  type: 'experience' | 'education'
  title: string
  org: string
  period: string
  description: string
}

/** Domain cards — preserved from original HTML */
export const domains: Domain[] = [
  {
    id: 'ecommerce',
    title: 'E-commerce',
    description:
      'Custom online stores with payment gateways, inventory management, and admin dashboards.',
    icon: 'cart',
  },
  {
    id: 'pos',
    title: 'POS Systems',
    description:
      'Desktop and web-based Point of Sale solutions for retail and restaurant management.',
    icon: 'register',
  },
  {
    id: 'agency',
    title: 'Agency Websites',
    description:
      'High-performance portfolio and corporate websites designed for user conversion.',
    icon: 'laptop',
  },
  {
    id: 'lms',
    title: 'LMS Platforms',
    description:
      'Learning Management Systems featuring video courses, quizzes, and student progress tracking.',
    icon: 'grad',
  },
  {
    id: 'management',
    title: 'Management Software',
    description:
      'Comprehensive ERP/CRM solutions to streamline business operations, HR, and data analytics.',
    icon: 'diagram',
  },
  {
    id: 'saas',
    title: 'SaaS Products',
    description:
      'Multi-tenant SaaS apps with subscriptions, billing, role-based access, and scalable cloud architecture.',
    icon: 'saas',
  },
]

/**
 * Employment / education timeline (newest first).
 */
export const timeline: TimelineItem[] = [
  {
    id: 'exp-spinner',
    type: 'experience',
    title: 'Full Stack Developer',
    org: 'Spinner Tech',
    period: 'Jan 2025 — Present',
    description:
      'Building E-commerce platforms, POS systems, real-estate management, shopping & task sites, fantasy games, and social-media marketing CMS products.',
  },
  {
    id: 'exp-freelance',
    type: 'experience',
    title: 'Freelance Developer',
    org: 'Freelance',
    period: 'Nov 2024 — Dec 2024',
    description:
      'Small university and personal builds — a security guard management app and an NID encryption project.',
  },
  {
    id: 'exp-webarts',
    type: 'experience',
    title: 'Full Stack Developer',
    org: 'Web Arts Factory',
    period: 'Mar 2023 — Nov 2024',
    description:
      'Delivered POS systems, agency websites, and a bank document management application for clients.',
  },
  {
    id: 'edu-1',
    type: 'education',
    title: 'Computer Science & Engineering',
    org: 'Mymensingh Engineering College',
    period: '2019 — 2024',
    description:
      'Focused on CS fundamentals, software engineering, databases, AI, and web application development.',
  },
]
