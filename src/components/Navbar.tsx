import { useEffect, useState } from 'react'
import { navLinks, site } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../hooks/useTheme'
import { IconMoon, IconSun } from './Icons'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeId = useActiveSection()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      className="glass-nav fixed top-0 left-0 right-0 z-50"
      style={{
        borderBottomColor: scrolled
          ? 'rgba(100, 116, 139, 0.2)'
          : 'rgba(100, 116, 139, 0.15)',
      }}
      aria-label="Primary"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5 group" aria-label={`${site.brand} home`}>
            <span className="relative w-9 h-9 rounded-lg flex items-center justify-center group-hover:shadow-[0_0_18px_rgba(34,211,238,0.2)] transition-all duration-200">
              <img
                src="/terminal-96.png"
                alt=""
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
                aria-hidden
              />
            </span>
            <span className="text-accent font-semibold text-sm tracking-tight">{site.brand}</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-medium${activeId === link.href.slice(1) ? ' active' : ''}`}
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-cool/20 hover:border-cyan/30 text-cool hover:text-cyan transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <IconSun /> : <IconMoon />}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-cool/20 hover:border-cyan/30 text-cool transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <IconSun /> : <IconMoon />}
            </button>
            <button
              type="button"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-cool/20 hover:border-cyan/30 transition-colors"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobileMenu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                <svg className="w-4 h-4 text-cool" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-cool" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div id="mobileMenu" className={`mobile-menu md:hidden${menuOpen ? ' open' : ''}`}>
          <div className="pb-4 pt-1 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block px-4 py-2.5 text-sm font-medium text-cool hover:text-cyan hover:bg-cyan/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
