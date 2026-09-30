type MarqueeProps = {
  items: string[]
  reverse?: boolean
  className?: string
}

export function Marquee({
  items,
  reverse = false,
  className = "",
}: MarqueeProps) {
  const track = [...items, ...items]

  return (
    <div className={`edge-mask overflow-hidden ${className}`.trim()}>
      <div
        className={`flex w-max ${
          reverse ? "animate-marquee-rev" : "animate-marquee"
        }`}
      >
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-8 pr-8 text-[clamp(1.5rem,3.4vw,3rem)] font-medium tracking-[-0.03em] whitespace-nowrap text-chalk/30"
          >
            {item}
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  )
}
