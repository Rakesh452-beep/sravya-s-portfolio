import { useEffect, useState } from "react"
import { Check, Copy } from "./icons"

type CopyEmailProps = {
  email: string
  className?: string
  label?: string
}

export function CopyEmail({
  email,
  className = "",
  label = "Copy email",
}: CopyEmailProps) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(t)
  }, [copied])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
    } catch {
      const ta = document.createElement("textarea")
      ta.value = email
      ta.setAttribute("readonly", "")
      ta.style.position = "fixed"
      ta.style.opacity = "0"
      document.body.appendChild(ta)
      ta.select()
      document.execCommand("copy")
      document.body.removeChild(ta)
    }
    setCopied(true)
  }

  return (
    <button
      type="button"
      onClick={copy}
      data-copied={copied}
      aria-live="polite"
      className={`copy-btn pill ${className}`.trim()}
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" />
          Copied
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          {label}
        </>
      )}
    </button>
  )
}
