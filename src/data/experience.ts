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
 * NEW: employment / education timeline.
 * FLAG: replace placeholder entries with your real roles and schools.
 */
export const timeline: TimelineItem[] = [
  {
    id: 'exp-1',
    type: 'experience',
    title: 'Full Stack Developer',
    org: 'Freelance / Client Projects',
    period: '2022 — Present',
    description:
      'Building E-commerce platforms, POS systems, SaaS inventory, HRM, and school/LMS tools with Laravel and modern frontends.',
  },
  {
    id: 'edu-1',
    type: 'education',
    title: 'Computer Science / Software Engineering',
    org: 'Your University',
    period: '2018 — 2022',
    description:
      'Focused on software engineering, databases, and web application development.',
  },
]
