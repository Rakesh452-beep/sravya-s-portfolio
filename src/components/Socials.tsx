import { socials } from "../data/portfolio"
import { ArrowUpRight } from "./icons"
import { socialIcons } from "./socialIcons"

export function Socials() {
  return (
    <section className="border-t border-chalk/12 py-16 md:py-20">
      <p className="meta">Elsewhere</p>
      <ul className="mt-8 grid gap-px overflow-hidden rounded-[10px] bg-chalk/12 sm:grid-cols-3">
        {socials.map((s) => {
          const Icon = socialIcons[s.icon]
          return (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col justify-between gap-8 bg-forest p-7 transition-colors duration-500 hover:bg-forest-deep"
              >
                <div className="flex items-start justify-between">
                  <Icon className="h-5 w-5 text-chalk" />
                  <ArrowUpRight className="h-4 w-4 text-chalk/40 transition-all duration-400 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
                </div>
                <div>
                  <h3 className="text-base font-medium tracking-[-0.01em] text-chalk">
                    {s.label}
                  </h3>
                  <p className="mt-1 text-sm text-chalk/55">{s.handle}</p>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
