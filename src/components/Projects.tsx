import { motion, useReducedMotion } from 'framer-motion'
import projectsData from '../data/projects.json'
import { FadeIn, Stagger, StaggerItem } from './Motion'
import { LiveDot } from './BrandLogo'
import { IconExternal, IconGithub } from './Icons'

export type Project = {
  id: string
  number: string
  title: string
  description: string
  tech: string[]
  image: string
  github: string
  live?: string
}

/** Selected Work reads from src/data/projects.json — edit that file to update the grid. */
const projects = projectsData as Project[]

export function Projects() {
  const reduce = useReducedMotion()

  return (
    <section id="projects" className="py-24 lg:py-32" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <FadeIn className="mb-16">
          <div className="category-label mb-4">Projects</div>
          <h2 id="projects-heading" className="text-3xl lg:text-4xl font-bold text-accent tracking-tight">
            Selected Work.
          </h2>
          <div className="section-line mt-6" aria-hidden />
        </FadeIn>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => {
            const live = project.live?.trim()
            const primaryHref = live || project.github

            return (
              <StaggerItem key={project.id} className="h-full">
                <motion.article
                  className="project-card rounded-xl overflow-hidden flex flex-col h-full"
                  whileHover={reduce ? undefined : { y: -6 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                >
                  <a
                    href={primaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-shot relative aspect-[16/10] overflow-hidden border-b border-cool/10 block focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-inset"
                    aria-label={`Open ${project.title}`}
                  >
                    <motion.img
                      src={project.image}
                      alt={`${project.title} showcase`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      width={800}
                      height={500}
                      whileHover={reduce ? undefined : { scale: 1.06 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <span className="absolute top-3 right-3 text-cool text-xs font-mono bg-navy/70 backdrop-blur-sm px-2 py-1 rounded-md border border-cool/15">
                      {project.number}
                    </span>
                  </a>

                  <div className="p-6 lg:p-7 flex flex-col flex-1">
                    <h3 className="text-accent text-lg font-semibold mb-3 tracking-tight">{project.title}</h3>
                    <p className="text-cool text-sm leading-relaxed mb-6 flex-1">{project.description}</p>

                    <ul className="flex flex-wrap gap-2 mb-6" aria-label="Tech stack">
                      {project.tech.map((t) => (
                        <li key={t}>
                          <motion.span
                            className="tech-badge px-2.5 py-1 rounded-md inline-block"
                            whileHover={reduce ? undefined : { scale: 1.06, color: '#22D3EE' }}
                            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                          >
                            {t}
                          </motion.span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-wrap items-center gap-3">
                      {live ? (
                        <motion.a
                          href={live}
                          className="inline-flex items-center gap-2 text-xs font-mono px-3 py-2 rounded-lg border border-cyan/25 bg-cyan/5 text-cyan hover:bg-cyan/10 hover:border-cyan/40 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live demo`}
                          whileHover={reduce ? undefined : { scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                        >
                          <LiveDot className="w-2.5 h-2.5" />
                          Live
                        </motion.a>
                      ) : (
                        <span
                          className="inline-flex items-center gap-2 text-xs font-mono px-3 py-2 rounded-lg border border-cool/15 text-cool/45 cursor-not-allowed"
                          title="Set the live URL in src/data/projects.json"
                          aria-disabled="true"
                        >
                          <IconExternal className="w-3.5 h-3.5" />
                          Live
                        </span>
                      )}
                      <motion.a
                        href={project.github}
                        className="inline-flex items-center gap-2 text-xs font-mono px-3 py-2 rounded-lg border border-cool/20 text-cool hover:text-cyan hover:border-cyan/30 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        whileHover={reduce ? undefined : { scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                      >
                        <IconGithub className="w-3.5 h-3.5" />
                        GitHub
                      </motion.a>
                    </div>
                  </div>
                </motion.article>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
