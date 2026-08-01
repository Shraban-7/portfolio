export type SkillCategory = {
  id: string
  title: string
  icon: 'code' | 'beaker' | 'database' | 'cog'
  skills: string[]
}

/** Stack aligned to real GitHub projects (Laravel-first + modern frontends). */
export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Core Languages',
    icon: 'code',
    skills: ['PHP', 'JavaScript', 'TypeScript'],
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    icon: 'beaker',
    skills: ['Laravel', 'Next.js', 'Vue 3', 'Inertia.js', 'Livewire', 'Alpine.js', 'Tailwind CSS'],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'database',
    skills: ['MySQL', 'PostgreSQL', 'SQLite', 'Redis'],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: 'cog',
    skills: ['Git / GitHub', 'Docker', 'Vite', 'Sanctum', 'Pest / PHPUnit'],
  },
]
