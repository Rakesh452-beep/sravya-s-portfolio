import { useEffect, useRef, useState } from "react"

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === "undefined",
  )

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === "undefined") return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

export function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState<string>("")

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const onScroll = () => {
      const offset = window.innerHeight * 0.32
      let current = ""

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= offset) {
          current = section.id
        }
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 80

      setActive(atBottom ? ids[ids.length - 1] : current || ids[0])
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [ids])

  return active
}

export function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [threshold])

  return scrolled
}

export function useTypewriter(words: string[], hold = 1800) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [erasing, setErasing] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]

    if (!erasing) {
      if (text.length < current.length) {
        const timer = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          65,
        )
        return () => clearTimeout(timer)
      }
      const timer = setTimeout(() => setErasing(true), hold)
      return () => clearTimeout(timer)
    }

    if (text.length > 0) {
      const timer = setTimeout(() => setText(text.slice(0, -1)), 32)
      return () => clearTimeout(timer)
    }

    const timer = setTimeout(() => {
      setErasing(false)
      setIndex((i) => i + 1)
    }, 120)
    return () => clearTimeout(timer)
  }, [text, erasing, index, words, hold])

  return text
}
