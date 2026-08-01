type Props = {
  className?: string
  title?: string
}

/** Stacked platform mark — SVG version of your brand icon. */
export function BrandLogo({ className = 'w-8 h-8', title = 'shraban.dev' }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      {/* Connecting edges */}
      <path
        d="M18 22 L18 36 M46 22 L46 36 M22 20 L22 38 M42 20 L42 38"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="1"
        strokeDasharray="2 3"
      />
      {/* Top slab — outline */}
      <rect
        x="14"
        y="12"
        width="36"
        height="12"
        rx="3"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M14 18 H50" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
      {/* Bottom slab — solid with cyan glow edge */}
      <rect x="14" y="38" width="36" height="14" rx="3" fill="#0F172A" stroke="#22D3EE" strokeOpacity="0.45" strokeWidth="1.25" />
      <path d="M15.5 49.5 H48.5" stroke="#22D3EE" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" />
      <path d="M15 41.5 V49.5" stroke="#22D3EE" strokeOpacity="0.35" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M49 41.5 V49.5" stroke="#22D3EE" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round" />
      {/* Soft cyan fill on bottom face edge */}
      <rect x="16" y="48" width="32" height="2.5" rx="1" fill="#22D3EE" fillOpacity="0.35" />
    </svg>
  )
}

export function LiveDot({ className = 'w-2 h-2' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 8 8" aria-hidden>
      <circle cx="4" cy="4" r="3.5" fill="#22D3EE" opacity="0.25" />
      <circle cx="4" cy="4" r="2" fill="#22D3EE" />
    </svg>
  )
}

export function TerminalChrome({ className = 'w-full' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 12" fill="none" aria-hidden>
      <circle cx="6" cy="6" r="3" fill="#F87171" />
      <circle cx="18" cy="6" r="3" fill="#FBBF24" />
      <circle cx="30" cy="6" r="3" fill="#34D399" />
    </svg>
  )
}
