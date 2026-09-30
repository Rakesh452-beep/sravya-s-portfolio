import { Link } from "react-router-dom"
import { Actions } from "../components/Actions"
import { ContactBlock } from "../components/ContactBlock"
import { HeroPhoto } from "../components/HeroPhoto"
import { Marquee } from "../components/Marquee"
import { Reveal } from "../components/Reveal"
import { Socials } from "../components/Socials"
import { useOverlay } from "../overlayContext"
import { ArrowRight, Play } from "../components/icons"
import {
  capabilities,
  certifications,
  education,
  experience,
  leadership,
  marqueeItems,
  principles,
  process,
  profile,
  skillGroups,
  stats,
} from "../data/portfolio"
import { useTypewriter } from "../hooks"

function Section({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <Reveal
      as="section"
      className="section-flow relative grid gap-10 py-16 md:grid-cols-12 md:py-20"
    >
      <div className="md:col-span-3">
        <p className="section-title md:sticky md:top-28">{label}</p>
      </div>
      <div className="md:col-span-9">{children}</div>
    </Reveal>
  )
}

export function About() {
  const { openReel } = useOverlay()
  const typed = useTypewriter(profile.rotating)

  return (
    <div className="pb-24">
      {/* Hero -------------------------------------------------- */}
      <section className="shell pt-32 md:pt-40">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <div className="flex flex-wrap items-center gap-3 animate-fade-up">
              <span className="live-dot" />
              <p className="meta !opacity-60">{profile.status}</p>
            </div>

            <h1 className="mt-6 text-[clamp(2.5rem,7vw,5.25rem)] font-medium tracking-[-0.045em] leading-[0.9]">
              <span className="block animate-fade-up">Creative</span>
              <span className="block animate-fade-up [animation-delay:80ms]">
                full-stack
              </span>
              <span
                className="shine block animate-fade-up [animation-delay:160ms]"
                style={{ animationDuration: "0.9s" }}
              >
                developer
              </span>
            </h1>

            <p className="lede measure mt-6 max-w-xl animate-fade-up text-pretty [animation-delay:240ms] !text-[clamp(0.95rem,1.15vw,1.125rem)]">
              {profile.objective}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 animate-fade-up [animation-delay:300ms]">
              <span className="text-sm text-chalk/70">
                <span className="text-accent">{typed}</span>
                <span className="ml-0.5 inline-block animate-blink">|</span>
              </span>
              <div className="flex flex-wrap gap-2">
                <Link to="/works" className="pill">
                  See the work
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <button type="button" onClick={openReel} className="pill pill-ghost">
                  <Play className="h-3 w-3" />
                  Play reel
                </button>
              </div>
            </div>

            <Actions className="mt-4 animate-fade-up [animation-delay:360ms]" />
          </div>

          {/* Portrait sits beside the status line, not below it */}
          <div className="md:col-span-5">
            <Reveal>
              <HeroPhoto />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Marquee ----------------------------------------------- */}
      <div className="mt-20 border-y border-chalk/12 py-6 md:mt-28 md:py-8">
        <Marquee items={marqueeItems} />
      </div>

      {/* Principles -------------------------------------------- */}
      <Reveal as="section" className="section-flow relative shell py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="section-title">Approach</p>
          </div>
          <div className="md:col-span-9">
            <ul>
              {principles.map((line, i) => (
                <Reveal as="li" key={line} delay={i * 90}>
                  <p className="display-sm border-b border-chalk/12 py-7 text-balance first:border-0 first:pt-0 last:border-0">
                    {line}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      {/* Bio + stats ------------------------------------------- */}
      <Reveal className="section-flow relative shell pb-4">
        <div className="grid gap-10 pt-16 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="flex flex-col gap-5 text-[0.9375rem] leading-relaxed text-chalk/75">
              <p className="lede !text-chalk/85">
                I&apos;m {profile.firstName} — a Computer Science undergraduate
                at Raghu Engineering College, working out of Visakhapatnam. Most
                of my time goes into full-stack JavaScript, but the part I enjoy
                most is the interface: getting a layout, type scale and
                interaction model to hold together across every screen size.
              </p>
              <p>
                Two internships in — one building MERN features with a team at
                Codec Technologies, one working through applied AI modules on the
                Infosys Pragati track. Alongside that I lead programming for the
                Computer Society of India, where I&apos;ve mentored over 40
                students through technical workshops and events.
              </p>
              <p>
                I care about clean code and honest engineering. No copy-pasted
                tutorial projects dressed up as portfolios, no layouts that break
                at 375px, no UI that only works on a 1440px monitor.
              </p>
              <p>
                Outside of coursework you&apos;ll usually find me solving
                problems on CodeChef, reading through design write-ups, or
                explaining recursion to someone who really doesn&apos;t want to
                hear about recursion.
              </p>
            </div>
          </Reveal>

          <Reveal className="md:col-span-5" delay={100}>
            <div className="grid gap-px overflow-hidden rounded-[10px] bg-chalk/12 sm:grid-cols-2">
              {stats.map((s) => (
                <div key={s.label} className="bg-forest p-7">
                  <p className="display-sm tabular-nums text-chalk">
                    {s.value}
                    <span className="text-accent">{s.suffix}</span>
                  </p>
                  <p className="meta mt-2">{s.label}</p>
                </div>
              ))}
            </div>

            <dl className="mt-8 flex flex-col gap-4 border-t border-chalk/12 pt-6">
              {[
                ["Currently", profile.status],
                ["Studying", "B.Tech CSE, 2023 – 2027"],
                ["Stack", "React · Node.js · MongoDB · AWS"],
                ["Languages", "English · Telugu · Hindi"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline gap-4">
                  <dt className="meta w-24 shrink-0 !opacity-50">{k}</dt>
                  <dd className="text-sm text-chalk/75">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Reveal>

      {/* Numbered process steps -------------------------------- */}
      <Section label="Process">
        <div className="flex flex-col">
          {process.map((step, i) => (
            <Reveal key={step.index} delay={i * 80}>
              <div className="step-row md:grid-cols-12 md:gap-8">
                <span className="row-index md:col-span-1">{step.index}</span>
                <h2 className="text-[clamp(1.5rem,3.2vw,2.5rem)] font-medium tracking-[-0.03em] text-chalk md:col-span-5">
                  {step.title}
                </h2>
                <p className="body-copy md:col-span-6 md:text-pretty">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Capabilities ------------------------------------------ */}
      <Section label="Capabilities">
        <div className="grid gap-px overflow-hidden rounded-[10px] bg-chalk/12 sm:grid-cols-2">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.index} delay={i * 80}>
              <div className="h-full bg-forest p-8 transition-colors duration-500 hover:bg-forest-deep md:p-10">
                <div className="flex items-center justify-between">
                  <span className="row-index">{cap.index}</span>
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-accent"
                  />
                </div>
                <h3 className="mt-12 text-xl font-medium tracking-[-0.02em] text-chalk">
                  {cap.title}
                </h3>
                <p className="body-copy mt-3 max-w-sm text-pretty">{cap.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Experience -------------------------------------------- */}
      <Section label="Experience">
        <ul className="flex flex-col">
          {experience.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 90}>
              <div className="grid gap-4 border-b border-chalk/12 py-8 first:pt-0 md:grid-cols-12">
                <div className="md:col-span-4">
                  <h3 className="text-lg font-medium tracking-[-0.02em] text-chalk">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-chalk/55">{item.org}</p>
                </div>
                <div className="md:col-span-3">
                  <p className="row-index">{item.period}</p>
                </div>
                <div className="md:col-span-5">
                  <ul className="flex flex-col gap-2.5">
                    {item.points?.map((p) => (
                      <li
                        key={p}
                        className="flex gap-3 text-sm leading-relaxed text-chalk/70"
                      >
                        <span
                          aria-hidden
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                        />
                        <span className="text-pretty">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal as="li" delay={180}>
            <div className="grid gap-4 border-b border-chalk/12 py-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <h3 className="text-lg font-medium tracking-[-0.02em] text-chalk">
                  {leadership.title}
                </h3>
                <p className="mt-1.5 text-sm text-chalk/55">{leadership.org}</p>
              </div>
              <div className="md:col-span-3">
                <p className="row-index">{leadership.period}</p>
              </div>
              <div className="md:col-span-5">
                <p className="text-3xl font-medium tracking-[-0.03em] text-accent">
                  {leadership.highlight}
                  <span className="ml-2 text-base font-normal text-chalk/55">
                    {leadership.highlightLabel}
                  </span>
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {leadership.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-sm leading-relaxed text-chalk/70"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      <span className="text-pretty">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </ul>
      </Section>

      {/* Education --------------------------------------------- */}
      <Section label="Education">
        <ul className="flex flex-col">
          {education.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 90}>
              <div className="grid gap-4 border-b border-chalk/12 py-8 first:pt-0 md:grid-cols-12">
                <div className="md:col-span-5">
                  <h3 className="text-lg font-medium tracking-[-0.02em] text-chalk">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-chalk/55">{item.org}</p>
                </div>
                <div className="flex items-start gap-4 md:col-span-3">
                  <p className="row-index">{item.period}</p>
                  {item.score && (
                    <p className="text-sm text-accent">{item.score}</p>
                  )}
                </div>
                <div className="md:col-span-4">
                  <ul className="flex flex-col gap-2.5">
                    {item.points?.map((p) => (
                      <li
                        key={p}
                        className="flex gap-3 text-sm leading-relaxed text-chalk/70"
                      >
                        <span
                          aria-hidden
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                        />
                        <span className="text-pretty">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Skills ------------------------------------------------ */}
      <Section label="Skills">
        <div className="grid gap-px overflow-hidden rounded-[10px] bg-chalk/12">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 70}>
              <div className="grid gap-4 bg-forest p-7 sm:grid-cols-12 md:p-8">
                <div className="flex items-baseline gap-3 sm:col-span-4">
                  <span className="row-index">{group.index}</span>
                  <h3 className="text-base font-medium tracking-[-0.01em] text-chalk">
                    {group.title}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2 sm:col-span-8">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Certifications ---------------------------------------- */}
      <Section label="Certifications">
        <ul className="grid gap-px overflow-hidden rounded-[10px] bg-chalk/12 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 60}>
              <div className="flex h-full items-start justify-between gap-4 bg-forest p-7">
                <div>
                  <h3 className="text-base font-medium tracking-[-0.01em] text-chalk">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-chalk/55">{c.issuer}</p>
                </div>
                {c.tag && (
                  <span className="shrink-0 rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold tracking-[0.08em] text-forest uppercase">
                    {c.tag}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Reveal className="section-flow relative shell pt-16 md:pt-20">
        <ContactBlock heading="Open to internships & full-time roles." />
      </Reveal>

      <Reveal className="shell">
        <Socials />
      </Reveal>
    </div>
  )
}
