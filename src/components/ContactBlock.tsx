import { CopyEmail } from "./CopyEmail"
import { ArrowUpRight, FileText, Mail, Phone, Pin } from "./icons"
import { profile } from "../data/portfolio"

type ContactBlockProps = {
  heading?: string
  compact?: boolean
}

export function ContactBlock({
  heading = "Let's build something together.",
  compact = false,
}: ContactBlockProps) {
  return (
    <div className="border-t border-chalk/12 pt-12 md:pt-16">
      <p className="section-title">Contact</p>
      <h2
        className={`display-sm mt-5 max-w-3xl text-balance ${
          compact ? "" : "md:max-w-4xl"
        }`}
      >
        {heading}
      </h2>

      <a
        href={`mailto:${profile.email}`}
        className="group mt-8 inline-flex items-center gap-3 border-b border-chalk/30 pb-1.5 text-[clamp(1.125rem,3vw,2.25rem)] font-medium tracking-[-0.03em] text-chalk transition-colors duration-300 hover:border-accent hover:text-accent"
      >
        {profile.email}
        <ArrowUpRight className="h-6 w-6 transition-transform duration-400 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>

      <div className="mt-12 grid gap-8 border-t border-chalk/12 pt-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="meta">Email</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-2.5 block text-sm text-chalk/70 transition-colors duration-300 hover:text-accent"
          >
            {profile.email}
          </a>
        </div>

        <div>
          <p className="meta">Phone</p>
          <a
            href={profile.phoneHref}
            className="mt-2.5 block text-sm text-chalk/70 transition-colors duration-300 hover:text-accent"
          >
            {profile.phone}
          </a>
        </div>

        <div>
          <p className="meta">Based in</p>
          <p className="mt-2.5 flex items-start gap-2 text-sm text-chalk/70">
            <Pin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            {profile.location}
          </p>
        </div>

        <div>
          <p className="meta">Availability</p>
          <p className="mt-2.5 flex items-center gap-2 text-sm text-chalk/70">
            <span className="live-dot" />
            {profile.status}
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <a href={`mailto:${profile.email}`} className="pill">
          <Mail className="h-3.5 w-3.5" />
          Send an email
        </a>
        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          className="pill pill-ghost"
        >
          <FileText className="h-3.5 w-3.5" />
          Resume
        </a>
        <a href={profile.phoneHref} className="pill pill-ghost">
          <Phone className="h-3.5 w-3.5" />
          Call me
        </a>
        <CopyEmail email={profile.email} label="Copy address" />
      </div>
    </div>
  )
}
