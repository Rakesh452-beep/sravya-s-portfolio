import { Link } from "react-router-dom"
import { ArrowLeft } from "./icons"

type NotFoundProps = {
  title?: string
  body?: string
}

export function NotFound({
  title = "Page not found",
  body = "That link doesn't resolve to anything. Try the work index or head back home.",
}: NotFoundProps) {
  return (
    <section className="shell flex min-h-[70vh] flex-col justify-center py-32">
      <p className="meta">Error 404</p>
      <h1 className="display mt-6">{title}</h1>
      <p className="lede measure mt-6">{body}</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link to="/" className="pill">
          <ArrowLeft className="h-3.5 w-3.5" />
          Back home
        </Link>
        <Link to="/works" className="pill pill-ghost">
          See the work
        </Link>
      </div>
    </section>
  )
}
