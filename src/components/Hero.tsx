import { useRef, type MouseEvent } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion'
import { site } from '../data/site'
import { FadeIn, MagneticLink } from './Motion'
import { IconArrowRight, IconDownload } from './Icons'
import { LiveDot } from './BrandLogo'
import { LiveTerminal } from './LiveTerminal'

export function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 })

  const glowX = useMotionTemplate`calc(${springX} * 100%)`
  const glowY = useMotionTemplate`calc(${springY} * 100%)`

  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="relative min-h-screen flex items-center justify-center hero-grid overflow-hidden pt-16"
      aria-label="Introduction"
    >
      {!reduce && (
        <motion.div
          className="pointer-events-none absolute w-[420px] h-[420px] rounded-full blur-3xl opacity-40"
          style={{
            left: glowX,
            top: glowY,
            x: '-50%',
            y: '-50%',
            background:
              'radial-gradient(circle, rgba(34,211,238,0.22) 0%, rgba(34,211,238,0.05) 45%, transparent 70%)',
          }}
          aria-hidden
        />
      )}
      <div className="hero-ambient-glow hero-ambient-glow--center" aria-hidden />
      <div className="hero-ambient-glow-2 hero-ambient-glow-2--center" aria-hidden />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8 py-24 w-full text-center">
        <FadeIn>
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cool/15 bg-navy/50 mb-8"
            animate={reduce ? undefined : { boxShadow: ['0 0 0 rgba(34,211,238,0)', '0 0 18px rgba(34,211,238,0.18)', '0 0 0 rgba(34,211,238,0)'] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.span
              className="inline-flex"
              animate={reduce ? undefined : { scale: [1, 1.15, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              aria-hidden
            >
              <LiveDot className="w-2.5 h-2.5" />
            </motion.span>
            <span className="text-cool text-xs font-medium tracking-wide">{site.status}</span>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="text-cyan text-sm font-semibold tracking-[0.2em] uppercase mb-5">{site.brand}</p>
        </FadeIn>

        <FadeIn delay={0.14}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-accent mb-6">
            Hello, I&apos;m{' '}
            <motion.span
              className="text-cyan inline-block"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {site.name}
            </motion.span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-cool text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">{site.tagline}</p>
        </FadeIn>

        <FadeIn delay={0.28}>
          <div className="flex flex-wrap justify-center gap-4">
            <MagneticLink href="#projects" className="btn-glow px-6 py-3 rounded-lg text-sm inline-flex items-center gap-2">
              View My Work
              <motion.span
                aria-hidden
                animate={reduce ? undefined : { x: [0, 4, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <IconArrowRight />
              </motion.span>
            </MagneticLink>
            <MagneticLink href="#contact" className="btn-outline px-6 py-3 rounded-lg text-sm">
              Contact Me
            </MagneticLink>
            <MagneticLink
              href={site.resumeUrl}
              download={site.resumeFileName}
              className="btn-outline px-6 py-3 rounded-lg text-sm inline-flex items-center gap-2"
              aria-label="Download resume PDF"
            >
              <IconDownload />
              Resume
            </MagneticLink>
          </div>
        </FadeIn>

        <LiveTerminal />
      </div>
    </section>
  )
}
