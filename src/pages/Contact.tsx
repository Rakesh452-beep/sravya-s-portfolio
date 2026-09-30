import { Actions } from "../components/Actions"
import { ContactBlock } from "../components/ContactBlock"
import { Socials } from "../components/Socials"
import { capabilities, profile } from "../data/portfolio"

export function Contact() {
  return (
    <div className="shell pt-32 pb-24 md:pt-44">
      <header>
        <p className="section-title animate-fade-up">Contact</p>
        <h1 className="display mt-6 animate-fade-up [animation-delay:80ms]">
          Let&apos;s work together
        </h1>
        <p className="lede measure mt-8 animate-fade-up [animation-delay:160ms] text-pretty">
          I&apos;m currently looking for internship and full-time frontend or
          full-stack roles. If you&apos;re hiring, or you just want to compare
          notes on a build — the inbox is open.
        </p>
      </header>

      <div className="mt-16 grid gap-px overflow-hidden rounded-[10px] bg-chalk/12 sm:grid-cols-2">
        {capabilities.slice(0, 4).map((c) => (
          <div key={c.index} className="bg-forest p-7 md:p-9">
            <div className="flex items-center justify-between">
              <span className="row-index">{c.index}</span>
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
            </div>
            <h2 className="mt-10 text-lg font-medium tracking-[-0.02em] text-chalk">
              {c.title}
            </h2>
            <p className="body-copy mt-2.5 max-w-sm text-pretty">{c.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <Actions className="animate-fade-up" />
      </div>

      <div className="mt-20">
        <ContactBlock heading="Tell me what you're building." />
      </div>

      <Socials />

      <p className="mt-12 text-sm text-chalk/50">
        Prefer a quick call? {profile.phone} · Mon–Fri, 9am–6pm IST
      </p>
    </div>
  )
}
