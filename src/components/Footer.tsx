import { site } from '../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-cool/10 py-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-cool text-xs">
          &copy; {year} {site.name} — {site.role}.
        </p>
        <p className="text-cool/50 text-xs">{site.footerLine}</p>
      </div>
    </footer>
  )
}
