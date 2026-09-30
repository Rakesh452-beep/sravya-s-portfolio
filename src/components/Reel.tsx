import { useEffect, useRef, useState } from "react"
import { Close, Play } from "./icons"

type ReelProps = {
  open: boolean
  onClose: () => void
  src?: string
}

export function Reel({ open, onClose, src = "/reel.mp4" }: ReelProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    const v = videoRef.current
    if (v && !failed) void v.play().catch(() => undefined)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose, failed])

  useEffect(() => {
    if (!open) {
      const v = videoRef.current
      if (v) {
        v.pause()
        v.currentTime = 0
      }
    }
  }, [open])

  return (
    <div
      className={`fixed inset-0 z-[70] flex items-center justify-center bg-forest-deep/92 p-4 backdrop-blur-md transition-opacity duration-500 md:p-10 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Showreel"
      aria-hidden={!open}
    >
      <button
        type="button"
        onClick={onClose}
        tabIndex={open ? 0 : -1}
        aria-label="Close showreel"
        className="absolute inset-0 cursor-default"
      />

      <div className="relative w-full max-w-5xl">
        <button
          type="button"
          onClick={onClose}
          tabIndex={open ? 0 : -1}
          aria-label="Close showreel"
          className="absolute -top-14 right-0 grid h-10 w-10 place-items-center rounded-full bg-chalk text-ink transition-colors duration-300 hover:bg-accent"
        >
          <Close className="h-4 w-4" />
        </button>

        <div className="relative aspect-video w-full overflow-hidden rounded-[10px] bg-forest-deep ring-1 ring-chalk/15">
          {failed ? (
            <div className="flex h-full w-full flex-col items-center justify-center gap-5 px-6 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-full border border-chalk/25 text-accent">
                <Play className="h-5 w-5" />
              </span>
              <p className="text-sm text-chalk/70">
                Drop your showreel at{" "}
                <code className="rounded bg-chalk/10 px-1.5 py-0.5 text-accent">
                  public/reel.mp4
                </code>{" "}
                and it will play here.
              </p>
            </div>
          ) : (
            <video
              ref={videoRef}
              src={src}
              loop
              muted
              playsInline
              preload="metadata"
              tabIndex={open ? 0 : -1}
              onError={() => setFailed(true)}
              className="h-full w-full object-cover"
            />
          )}
        </div>

        <p className="meta mt-5 !opacity-40">Showreel · 2026</p>
      </div>
    </div>
  )
}
