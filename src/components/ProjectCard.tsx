import { Link } from "react-router-dom"
import type { Project } from "../data/portfolio"
import { ProjectVisual } from "./ProjectVisual"
import { ArrowUpRight } from "./icons"

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/works/${project.slug}`}
      className="group block focus-visible:outline-2 focus-visible:outline-accent"
    >
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-[10px]">
        <ProjectVisual project={project} />
        <div className="tile-veil" />
        <span className="absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-full bg-chalk px-3 py-1.5 text-[11px] font-medium tracking-[0.1em] text-ink uppercase">
          {project.index}
        </span>
      </div>

      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <h3 className="text-2xl font-medium tracking-[-0.03em] text-chalk transition-colors duration-300 group-hover:text-accent">
            {project.name}
          </h3>
          <p className="mt-1.5 text-sm text-chalk/55">{project.role}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-chalk/70 text-pretty">
            {project.summary}
          </p>
        </div>

        <span className="mt-1 shrink-0 text-chalk/40 transition-all duration-400 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent">
          <ArrowUpRight className="h-6 w-6" />
        </span>
      </div>

      <ul className="mt-5 flex flex-wrap gap-2 border-t border-chalk/10 pt-4">
        {project.tech.map((t) => (
          <li key={t} className="chip">
            {t}
          </li>
        ))}
      </ul>
    </Link>
  )
}
