import { motion, useReducedMotion } from 'framer-motion'
import { about } from '../data/about'
import { FadeIn, Stagger, StaggerItem } from './Motion'

export function About() {
  const reduce = useReducedMotion()

  return (
    <section id="about" className="py-24 lg:py-32" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <FadeIn className="lg:col-span-4">
            <div className="category-label mb-4">{about.label}</div>
            <h2 id="about-heading" className="text-3xl lg:text-4xl font-bold text-accent tracking-tight leading-tight">
              {about.heading[0]}
              <br />
              {about.heading[1]}
            </h2>
            <motion.div
              className="section-line mt-6 origin-left"
              aria-hidden
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            />
          </FadeIn>

          <FadeIn className="lg:col-span-8 space-y-6" delay={0.1}>
            <p className="text-cool leading-relaxed text-base lg:text-lg">{about.intro}</p>
            <p className="text-cool leading-relaxed text-base lg:text-lg">
              With a strong command of <span className="text-cyan">{about.stackHighlight}</span>
              {about.bodyAfter}
            </p>

            <Stagger className="grid sm:grid-cols-3 gap-4 pt-4" delay={0.15}>
              {about.highlights.map((item) => (
                <StaggerItem key={item.title}>
                  <motion.div
                    className="p-4 rounded-lg border border-cool/10 bg-navy/40 h-full"
                    whileHover={
                      reduce
                        ? undefined
                        : { borderColor: 'rgba(34, 211, 238, 0.35)', y: -3 }
                    }
                    transition={{ type: 'spring', stiffness: 360, damping: 22 }}
                  >
                    <div className="text-cyan text-xs font-semibold uppercase tracking-widest mb-2">{item.title}</div>
                    <p className="text-cool text-sm leading-relaxed">{item.text}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </Stagger>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
