import { createContext, useContext } from "react"

export type OverlayContextValue = {
  openReel: () => void
}

export const OverlayContext = createContext<OverlayContextValue | null>(null)

export function useOverlay() {
  const ctx = useContext(OverlayContext)
  if (!ctx) throw new Error("useOverlay must be used inside <App>")
  return ctx
}
