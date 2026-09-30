import type { ReactNode } from "react"
import { useReveal } from "../hooks"

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  as?: "div" | "section" | "li" | "article" | "header"
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`.trim()}
      data-visible={visible}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
