import { useState, type ChangeEvent, type FormEvent } from 'react'
import { site } from '../data/site'
import { ScrollReveal } from '../hooks/useScrollReveal'
import { IconGithub, IconLinkedIn, IconMail, IconSend } from './Icons'
import { Toast } from './Toast'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

type FieldErrors = Partial<Record<keyof FormState, string>>

const initial: FormState = { name: '', email: '', subject: '', message: '' }

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

export function Contact() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [sending, setSending] = useState(false)
  const [toast, setToast] = useState('')

  const showToast = (msg: string) => {
    setToast(msg)
    window.setTimeout(() => setToast(''), 4000)
  }

  const validate = (): FieldErrors => {
    const next: FieldErrors = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim()) next.email = 'Email is required'
    else if (!emailOk(form.email.trim())) next.email = 'Enter a valid email'
    if (!form.message.trim()) next.message = 'Message is required'
    return next
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length) {
      showToast('Please fill in all required fields.')
      return
    }

    setSending(true)

    // mailto fallback — no backend / EmailJS keys configured
    const subject = encodeURIComponent(form.subject.trim() || `Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`,
    )
    const mailto = `mailto:${site.email}?subject=${subject}&body=${body}`

    window.setTimeout(() => {
      window.location.href = mailto
      setSending(false)
      setForm(initial)
      setErrors({})
      showToast("Opening your email client — I'll respond soon.")
    }, 600)
  }

  const field = (key: keyof FormState) => ({
    value: form[key],
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value })),
    className: `form-input bg-navy/50 border border-cool/20 text-accent w-full px-4 py-3 rounded-lg text-sm focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan transition-colors${
      errors[key] ? ' error' : ''
    }`,
    'aria-invalid': Boolean(errors[key]) || undefined,
    'aria-describedby': errors[key] ? `${key}-error` : undefined,
  })

  return (
    <section id="contact" className="py-24 lg:py-32" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <ScrollReveal className="lg:col-span-5">
            <div className="category-label mb-4">Contact</div>
            <h2 id="contact-heading" className="text-3xl lg:text-4xl font-bold text-accent tracking-tight leading-tight mb-4">
              Let&apos;s work together.
            </h2>
            <div className="section-line mt-2 mb-8" aria-hidden />
            <p className="text-cool leading-relaxed mb-10">
              Have a project in mind? Whether it&apos;s an E-commerce platform, a POS system, or a management tool, I&apos;m
              ready to help you build it.
            </p>

            <div className="flex gap-3">
              <a
                href={site.social.github}
                className="social-link w-11 h-11 rounded-lg flex items-center justify-center"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconGithub />
              </a>
              <a
                href={site.social.linkedin}
                className="social-link w-11 h-11 rounded-lg flex items-center justify-center"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconLinkedIn />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="social-link w-11 h-11 rounded-lg flex items-center justify-center"
                aria-label="Email"
              >
                <IconMail />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-7" delay={0.1}>
            <form className="space-y-5" onSubmit={onSubmit} noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-cool text-xs font-medium uppercase tracking-widest mb-2">
                    Name
                  </label>
                  <input id="name" name="name" type="text" required placeholder="Your name" {...field('name')} />
                  {errors.name && (
                    <p id="name-error" className="text-xs text-red-400 mt-1.5">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-cool text-xs font-medium uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    autoComplete="email"
                    {...field('email')}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-red-400 mt-1.5">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-cool text-xs font-medium uppercase tracking-widest mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project inquiry, consultation, etc."
                  {...field('subject')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-cool text-xs font-medium uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project requirements..."
                  className={`${field('message').className} resize-none`}
                  value={form.message}
                  onChange={field('message').onChange}
                  aria-invalid={field('message')['aria-invalid']}
                  aria-describedby={field('message')['aria-describedby']}
                />
                {errors.message && (
                  <p id="message-error" className="text-xs text-red-400 mt-1.5">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between gap-4">
                <button type="submit" className="btn-glow px-7 py-3 rounded-lg text-sm inline-flex items-center gap-2" disabled={sending}>
                  {sending ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden>
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <IconSend />
                    </>
                  )}
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>

      <Toast message={toast} />
    </section>
  )
}
