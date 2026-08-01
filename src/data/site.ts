export const site = {
  name: 'Shraban',
  brand: 'shraban.dev',
  role: 'Full Stack Developer',
  status: 'Open to work',
  tagline:
    'Full Stack Developer building E-commerce, POS, SaaS, LMS, and management systems with Laravel, PHP, and modern frontends (Next.js, Vue, Livewire).',
  email: 'shakuatshraban@gmail.com',
  resumeUrl: '/resume.pdf', // FLAG: add your resume to public/resume.pdf
  social: {
    github: 'https://github.com/Shraban-7',
    linkedin: 'https://linkedin.com/in/', // FLAG: replace with your LinkedIn URL
  },
  footerLine: 'Building scalable solutions with Laravel, Next.js, and Vue.',
} as const

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
] as const
