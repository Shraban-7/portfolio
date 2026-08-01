import { motion, useReducedMotion } from 'framer-motion'
import { skillCategories } from '../data/skills'
import { FadeIn, Stagger, StaggerItem } from './Motion'
import { IconBeaker, IconCode, IconCog, IconDatabase } from './Icons'

const icons = {
  code: IconCode,
  beaker: IconBeaker,
  database: IconDatabase,
  cog: IconCog,
} as const

export function Skills() {
  const reduce = useReducedMotion()

  return (
    <section id="skills" className="py-24 lg:py-32" aria-labelledby="skills-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <FadeIn className="mb-16">
          <div className="category-label mb-4">Stack</div>
          <h2 id="skills-heading" className="text-3xl lg:text-4xl font-bold text-accent tracking-tight">
            Technical Expertise.
          </h2>
          <div className="section-line mt-6" aria-hidden />
        </FadeIn>

        <Stagger className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category) => {
            const Icon = icons[category.icon]
            return (
              <StaggerItem key={category.id}>
                <div className="flex items-center gap-3 mb-5">
                  <motion.span
                    className="text-cyan inline-flex"
                    whileHover={reduce ? undefined : { rotate: 12, scale: 1.15 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 16 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.span>
                  <h3 className="text-accent text-sm font-semibold uppercase tracking-widest">{category.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2.5" aria-label={category.title}>
                  {category.skills.map((skill) => (
                    <li key={skill}>
                      <motion.button
                        type="button"
                        className="skill-tag px-3.5 py-2 rounded-lg text-sm font-medium inline-block cursor-default"
                        whileHover={reduce ? undefined : { y: -3, scale: 1.05 }}
                        whileTap={reduce ? undefined : { scale: 0.96 }}
                        transition={{ type: 'spring', stiffness: 450, damping: 18 }}
                      >
                        {skill}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
