import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"
import { useLocation } from "react-router-dom"

type Phase = "idle" | "cover" | "reveal"

const COVER_MS = 420
const REVEAL_MS = 640

export function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const [phase, setPhase] = useState<Phase>("idle")
  const mounted = useRef(false)

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }

    setPhase("cover")

    const swap = window.setTimeout(() => {
      // Reset scroll while the veil is fully closed, so the jump is never seen.
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior })
      setPhase("reveal")
    }, COVER_MS)

    const done = window.setTimeout(() => setPhase("idle"), COVER_MS + REVEAL_MS)

    return () => {
      window.clearTimeout(swap)
      window.clearTimeout(done)
    }
  }, [pathname])

  return (
    <>
      <div
        data-phase={phase}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[80] flex flex-col"
      >
        <div data-layer="down" className="page-veil flex-1 bg-forest-deep" />
        <div data-layer="accent" className="page-veil h-1.5 shrink-0 bg-accent" />
        <div data-layer="up" className="page-veil flex-1 bg-forest-deep" />
      </div>

      {/*
        Deliberately NOT keyed on pathname: remounting would reset every
        scroll-reveal inside the page and play a second, conflicting animation.
        The entrance is driven purely by the data-phase attribute.
      */}
      <div data-phase={phase} className="page-content">
        {children}
      </div>
    </>
  )
}
