import { motion, useReducedMotion } from 'framer-motion'
import { domains, timeline } from '../data/experience'
import { FadeIn, Stagger, StaggerItem } from './Motion'
import { IconCart, IconDiagram, IconGrad, IconLaptop, IconRegister, IconSaas } from './Icons'

const domainIcons = {
  cart: IconCart,
  register: IconRegister,
  laptop: IconLaptop,
  grad: IconGrad,
  diagram: IconDiagram,
  saas: IconSaas,
} as const

export function Experience() {
  const reduce = useReducedMotion()

  return (
    <section id="experience" className="py-24 lg:py-32" aria-labelledby="experience-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <FadeIn className="mb-16">
          <div className="category-label mb-4">Experience</div>
          <h2 id="experience-heading" className="text-3xl lg:text-4xl font-bold text-accent tracking-tight">
            Domains I&apos;ve Built.
          </h2>
          <div className="section-line mt-6" aria-hidden />
        </FadeIn>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {domains.map((domain) => {
            const Icon = domainIcons[domain.icon]
            return (
              <StaggerItem
                key={domain.id}
                className={domain.wide ? 'md:col-span-2 lg:col-span-2' : undefined}
              >
                <motion.div
                  className="p-6 rounded-xl border border-cool/10 bg-navy/30 h-full"
                  whileHover={
                    reduce
                      ? undefined
                      : { borderColor: 'rgba(34, 211, 238, 0.35)', y: -4 }
                  }
                  transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                >
                  <motion.div
                    className="text-cyan mb-3 inline-flex"
                    whileHover={reduce ? undefined : { scale: 1.12, rotate: -6 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 16 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-accent mb-2">{domain.title}</h3>
                  <p className="text-cool text-sm leading-relaxed">{domain.description}</p>
                </motion.div>
              </StaggerItem>
            )
          })}
        </Stagger>

        <FadeIn className="mb-10">
          <h3 className="text-xl lg:text-2xl font-bold text-accent tracking-tight">Path &amp; Education.</h3>
          <p className="text-cool text-sm mt-2 max-w-xl">
            Roles and study that shaped how I ship production software.
          </p>
        </FadeIn>

        <ol className="timeline-rail space-y-8 pl-1">
          {timeline.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.08}>
              <li className="relative flex gap-5 list-none">
                <motion.div
                  className="relative z-10 mt-1.5 w-6 h-6 shrink-0 rounded-full border border-cyan/40 bg-navy flex items-center justify-center"
                  aria-hidden
                  whileInView={reduce ? undefined : { scale: [0.6, 1.15, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 }}
                >
                  <span className="w-2 h-2 rounded-full bg-cyan" />
                </motion.div>
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                    <h4 className="text-accent font-semibold">{item.title}</h4>
                    <span className="text-xs font-mono text-cyan/80 uppercase tracking-wider">
                      {item.type === 'education' ? 'Education' : 'Experience'}
                    </span>
                  </div>
                  <p className="text-cool text-sm mb-1">
                    {item.org} · {item.period}
                  </p>
                  <p className="text-cool text-sm leading-relaxed max-w-2xl">{item.description}</p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  )
}
