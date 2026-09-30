import { Link } from "react-router-dom"
import { navItems, profile, socials } from "../data/portfolio"
import { ArrowUpRight } from "./icons"
import { socialIcons } from "./socialIcons"

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-chalk/12">
      <div className="shell">
        <div className="grid gap-10 py-14 md:grid-cols-3 md:py-20">
          <div>
            <p className="text-lg font-medium tracking-[-0.02em] text-chalk">
              {profile.name}
            </p>
            <p className="meta mt-3">{profile.role}</p>
            <p className="mt-6 flex items-center gap-2 text-sm text-chalk/60">
              <span className="live-dot" />
              {profile.status}
            </p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Footer">
            <p className="meta mb-1">Index</p>
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="link-underline w-fit text-sm text-chalk/60 transition-colors duration-300 hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="meta mb-1">Elsewhere</p>
            {socials.map((s) => {
              const Icon = socialIcons[s.icon]
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2.5 text-sm text-chalk/60 transition-colors duration-300 hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                  {s.label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-chalk/12 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-chalk/45">
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-chalk/45">
            Built with React, Vite &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
