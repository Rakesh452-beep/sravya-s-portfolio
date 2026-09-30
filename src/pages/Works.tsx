import { Link } from "react-router-dom"
import { ProjectVisual } from "../components/ProjectVisual"
import { Reveal } from "../components/Reveal"
import { ArrowUpRight } from "../components/icons"
import { projects } from "../data/portfolio"

export function Works() {
  return (
    <section className="shell pt-32 pb-24 md:pt-44">
      <header>
        <p className="section-title animate-fade-up">
          Works · {projects.length} projects
        </p>
        <h1 className="display mt-6 max-w-[10ch] animate-fade-up [animation-delay:80ms]">
          Selected works
        </h1>
        <p className="lede measure mt-8 animate-fade-up [animation-delay:160ms] text-pretty">
          Everything I&apos;ve designed and built so far — solo web applications,
          full-stack MERN work, and applied machine-learning projects.
        </p>
      </header>

      <div className="mt-16">
        {projects.map((project) => (
          <Reveal key={project.slug}>
            <Link
              to={`/works/${project.slug}`}
              className="group grid items-center gap-6 border-t border-chalk/12 py-10 transition-colors duration-500 hover:bg-chalk/[0.03] md:grid-cols-12 md:gap-10"
            >
              {/* name + role */}
              <div className="order-1 md:order-2 md:col-span-5">
                <div className="flex items-baseline gap-4">
                  <span className="row-index">{project.index}</span>
                  <h2 className="text-[clamp(1.5rem,3.4vw,2.75rem)] font-medium tracking-[-0.035em] text-chalk transition-colors duration-300 group-hover:text-accent">
                    {project.name}
                  </h2>
                </div>
                <p className="mt-2 pl-9 text-sm text-chalk/55">{project.role}</p>
                <p className="mt-4 max-w-md pl-9 text-sm leading-relaxed text-chalk/70 text-pretty">
                  {project.summary}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2 pl-9">
                  {project.tech.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* picture */}
              <div className="order-2 md:order-1 md:col-span-7">
                <div className="relative aspect-16/9 w-full overflow-hidden rounded-[10px]">
                  <ProjectVisual project={project} />
                  <div className="tile-veil" />
                  <span className="absolute bottom-4 right-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-chalk text-ink opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
