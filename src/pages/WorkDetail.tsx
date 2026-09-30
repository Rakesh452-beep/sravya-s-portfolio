import { useMemo } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { ProjectVisual } from "../components/ProjectVisual"
import { Reveal } from "../components/Reveal"
import { ArrowLeft, ArrowUpRight } from "../components/icons"
import { projects } from "../data/portfolio"

export function WorkDetail() {
  const { slug } = useParams<{ slug: string }>()
  const index = projects.findIndex((p) => p.slug === slug)
  const others = useMemo(
    () => (index === -1 ? [] : projects.filter((p) => p.slug !== slug)),
    [index, slug],
  )

  if (index === -1) return <Navigate to="/works" replace />

  const project = projects[index]
  const next = projects[(index + 1) % projects.length]

  return (
    <article className="shell pt-32 pb-24 md:pt-40">
      <Link
        to="/works"
        className="group inline-flex items-center gap-2 text-sm text-chalk/60 transition-colors duration-300 hover:text-accent"
      >
        <ArrowLeft className="h-4 w-4 transition-transform duration-400 group-hover:-translate-x-1" />
        All work
      </Link>

      <header className="mt-10 flex flex-col gap-6 border-b border-chalk/12 pb-10">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="row-index">{project.index}</span>
          <span className="text-sm text-chalk/70">{project.category}</span>
          <span aria-hidden className="h-px w-5 bg-chalk/25" />
          <span className="text-sm text-chalk/70">{project.year}</span>
        </div>

        <h1 className="display max-w-[16ch] text-balance">{project.name}</h1>

        <p className="lede measure text-pretty">{project.summary}</p>
      </header>

      <div className="mt-10 aspect-16/9 w-full overflow-hidden rounded-[10px]">
        <ProjectVisual project={project} />
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <div className="flex flex-col gap-8">
            <div>
              <p className="meta">Role</p>
              <p className="mt-2.5 text-sm text-chalk">{project.role}</p>
            </div>

            {project.metric && (
              <div>
                <p className="meta">Highlight</p>
                <p className="mt-2.5 text-2xl font-medium tracking-[-0.02em] text-accent">
                  {project.metric.value}
                </p>
                <p className="mt-1 text-sm text-chalk/60">{project.metric.label}</p>
              </div>
            )}

            <div>
              <p className="meta">Stack</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal className="md:col-span-8" delay={100}>
          <div>
            <p className="meta">Overview</p>
            <ul className="mt-6 flex flex-col gap-5">
              {project.description.map((line) => (
                <li
                  key={line}
                  className="flex gap-4 text-[0.9375rem] leading-relaxed text-chalk/75"
                >
                  <span
                    aria-hidden
                    className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                  />
                  <span className="text-pretty">{line}</span>
                </li>
              ))}
            </ul>

            {project.links.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-3">
                {project.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="pill"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </div>

      <div className="mt-20 border-t border-chalk/12 pt-10">
        <p className="meta">Next project</p>
        <Link
          to={`/works/${next.slug}`}
          className="group mt-4 flex flex-wrap items-baseline justify-between gap-4"
        >
          <span className="display-sm transition-colors duration-300 group-hover:text-accent">
            {next.name}
          </span>
          <span className="flex items-center gap-2 text-sm text-chalk/50">
            {next.index}
            <ArrowUpRight className="h-5 w-5 transition-transform duration-400 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </Link>
      </div>

      <div className="mt-16 grid gap-10 border-t border-chalk/12 pt-10 sm:grid-cols-3">
        {others.map((p) => (
          <Link
            key={p.slug}
            to={`/works/${p.slug}`}
            className="group flex flex-col gap-3"
          >
            <div className="aspect-4/3 overflow-hidden rounded-[10px]">
              <ProjectVisual project={p} />
            </div>
            <p className="text-base font-medium tracking-[-0.02em] text-chalk transition-colors duration-300 group-hover:text-accent">
              {p.name}
            </p>
            <p className="text-xs text-chalk/50">{p.role}</p>
          </Link>
        ))}
      </div>
    </article>
  )
}
