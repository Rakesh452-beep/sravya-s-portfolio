import { profile } from "../data/portfolio"

export function HeroPhoto() {
  return (
    <div className="relative">
      {/* Cut-out portrait: the background-removed PNG is shown as-is, so the
          frame is dropped and a soft lime halo separates the figure from the
          forest canvas. */}
      <div className="hero-portrait">
        <div className="hero-portrait-halo" aria-hidden />
        <img
          src={profile.photo}
          alt={`${profile.name}, ${profile.role}`}
          className="relative z-10 h-full w-full object-contain object-bottom"
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-chalk/12 pt-4 text-center">
        <span className="row-index">{profile.location}</span>
        <span aria-hidden className="h-px w-4 bg-chalk/25" />
        <span className="meta !opacity-60">{profile.role}</span>
      </div>
    </div>
  )
}
