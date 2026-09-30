import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { navItems, profile } from "../data/portfolio"
import { useScrolled } from "../hooks"
import { Actions } from "./Actions"
import { Close, Menu } from "./icons"

export function Nav() {
  const { pathname } = useLocation()
  const [menu, setMenu] = useState({ open: false, path: pathname })
  const open = menu.open && menu.path === pathname
  const scrolled = useScrolled(16)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu({ open: false, path: pathname })
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled && !open
          ? "border-b border-chalk/10 bg-forest/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="shell">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link
            to="/"
            className="flex items-center gap-2.5 text-sm font-medium tracking-[-0.01em] text-chalk"
            aria-label="Sravya Puttamraju — home"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-chalk text-[10px] font-semibold tracking-wide text-ink">
              SP
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
            <span className="sm:hidden">{profile.firstName}</span>
          </Link>

          <div className="flex items-center gap-6">
            <nav
              className="hidden items-center gap-7 md:flex"
              aria-label="Primary"
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `link-underline text-sm transition-colors duration-300 ${
                      isActive
                        ? "text-accent"
                        : "text-chalk/70 hover:text-chalk"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Pinned pill cluster */}
            <div className="flex items-center gap-2">
              <Actions
                variant="compact"
                onNavigate={() => setMenu({ open: false, path: pathname })}
              />

              <button
                type="button"
                onClick={() => setMenu({ open: !open, path: pathname })}
                className="grid h-10 w-10 place-items-center text-chalk md:hidden"
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? (
                  <Close className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-chalk/10 bg-forest md:hidden"
      >
        <nav className="shell flex flex-col py-6" aria-label="Mobile">
          {navItems.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenu({ open: false, path: pathname })}
              className="flex items-baseline gap-4 border-b border-chalk/10 py-4 text-3xl font-medium tracking-[-0.03em] text-chalk"
            >
              <span className="row-index">{String(i + 1).padStart(2, "0")}</span>
              {item.label}
            </NavLink>
          ))}
          <Actions
            className="mt-6"
            onNavigate={() => setMenu({ open: false, path: pathname })}
          />
          <p className="meta mt-6 flex items-center gap-2">
            <span className="live-dot" />
            {profile.status}
          </p>
        </nav>
      </div>
    </header>
  )
}
