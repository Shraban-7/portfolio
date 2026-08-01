import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { LiveDot } from './BrandLogo'

const LINES = [
  { prompt: true, text: 'php artisan serve' },
  { prompt: false, text: 'INFO  Server running on [http://127.0.0.1:8000].' },
  { prompt: true, text: 'npm run build' },
  { prompt: false, text: '✓ built in 1.24s — shipping.' },
]

export function LiveTerminal() {
  const reduce = useReducedMotion()
  const [visible, setVisible] = useState(reduce ? LINES.length : 0)
  const [typed, setTyped] = useState(reduce ? LINES[LINES.length - 1]?.text.length ?? 0 : 0)

  useEffect(() => {
    if (reduce) return

    if (visible >= LINES.length) {
      const reset = window.setTimeout(() => {
        setVisible(0)
        setTyped(0)
      }, 2800)
      return () => window.clearTimeout(reset)
    }

    const line = LINES[visible]
    if (typed < line.text.length) {
      const id = window.setTimeout(() => setTyped((t) => t + 1), 28 + Math.random() * 36)
      return () => window.clearTimeout(id)
    }

    const id = window.setTimeout(() => {
      setVisible((v) => v + 1)
      setTyped(0)
    }, 520)
    return () => window.clearTimeout(id)
  }, [visible, typed, reduce])

  return (
    <motion.div
      className="w-full max-w-lg mx-auto mt-12 text-left rounded-xl border border-cool/15 bg-navy/70 backdrop-blur-md overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.06)]"
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Live terminal demo"
    >
      <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-cool/10 bg-navy/50">
        <div className="flex items-center gap-2 min-w-0">
          <img src="/terminal-64.png" alt="" width={20} height={20} className="w-5 h-5 shrink-0 object-contain" aria-hidden />
          <span className="text-[10px] font-mono text-cool/70 truncate">shraban@dev:~</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-cyan">
          <motion.span
            animate={reduce ? undefined : { opacity: [1, 0.35, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="inline-flex"
          >
            <LiveDot className="w-2.5 h-2.5" />
          </motion.span>
          live
        </div>
      </div>

      <div className="px-4 py-3 font-mono text-[11px] sm:text-xs leading-relaxed min-h-[7.5rem]">
        {LINES.slice(0, visible).map((line, i) => (
          <p key={`${line.text}-${i}`} className="text-cool mb-1.5">
            {line.prompt ? <span className="text-cyan mr-2">❯</span> : <span className="text-cool/40 mr-2">·</span>}
            <span className={line.prompt ? 'text-accent' : 'text-cool'}>{line.text}</span>
          </p>
        ))}

        {visible < LINES.length && (
          <p className="text-cool mb-1.5">
            {LINES[visible].prompt ? (
              <span className="text-cyan mr-2">❯</span>
            ) : (
              <span className="text-cool/40 mr-2">·</span>
            )}
            <span className={LINES[visible].prompt ? 'text-accent' : 'text-cool'}>
              {LINES[visible].text.slice(0, typed)}
            </span>
            <motion.span
              className="inline-block w-1.5 h-3.5 ml-0.5 align-middle bg-cyan"
              animate={reduce ? undefined : { opacity: [1, 0] }}
              transition={{ duration: 0.7, repeat: Infinity }}
              aria-hidden
            />
          </p>
        )}
      </div>
    </motion.div>
  )
}
