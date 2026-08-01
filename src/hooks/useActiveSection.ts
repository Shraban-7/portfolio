import { useEffect, useState } from 'react'

const SECTION_IDS = ['about', 'skills', 'experience', 'projects', 'contact'] as const

/** Tracks which section is currently in view for navbar active-link highlighting. */
export function useActiveSection() {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 120
      let current = ''

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.offsetTop
        const height = el.offsetHeight
        if (scrollY >= top && scrollY < top + height) {
          current = id
          break
        }
      }

      setActiveId(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return activeId
}
