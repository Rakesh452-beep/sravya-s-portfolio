import { profile } from "../data/portfolio"
import { ArrowUpRight, FileText, Mail } from "./icons"

function absoluteResume() {
  if (typeof window === "undefined") return profile.resume
  return `${window.location.origin}${profile.resume}`
}

function draft() {
  return {
    subject: profile.emailDraft.subject,
    body: profile.emailDraft.body.replace("{resume}", absoluteResume()),
  }
}

/** mailto: — handled by the OS default client (Outlook on most machines). */
function mailtoHref() {
  const { subject, body } = draft()
  return `mailto:${profile.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`
}

/** Gmail web compose — opens straight in the Gmail inbox. */
function gmailHref() {
  const { subject, body } = draft()
  return `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
    profile.email,
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

/** Outlook web compose — opens straight in Outlook on the web. */
function outlookHref() {
  const { subject, body } = draft()
  return `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(
    profile.email,
  )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

type ActionsProps = {
  className?: string
  /** "compact" is the pinned nav cluster; "full" is the hero/contact row. */
  variant?: "compact" | "full"
  onNavigate?: () => void
}

export function Actions({
  className = "",
  variant = "full",
  onNavigate,
}: ActionsProps) {
  const isCompact = variant === "compact"

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`.trim()}>
      <a
        href={profile.resume}
        target="_blank"
        rel="noreferrer"
        onClick={onNavigate}
        className={isCompact ? "pill !px-3.5 !py-2" : "pill"}
        aria-label={`Open ${profile.resumeFileName} in a new tab`}
      >
        <FileText className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Resume</span>
        <span className="sm:hidden">CV</span>
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>

      <a
        href={mailtoHref()}
        onClick={onNavigate}
        className={isCompact ? "pill pill-ghost !px-3.5 !py-2" : "pill pill-ghost"}
      >
        <Mail className="h-3.5 w-3.5" />
        Email in Outlook
      </a>

      <a
        href={gmailHref()}
        target="_blank"
        rel="noreferrer"
        onClick={onNavigate}
        className={isCompact ? "pill pill-ghost !px-3.5 !py-2" : "pill pill-ghost"}
      >
        Email in Gmail
      </a>

      {!isCompact && (
        <a
          href={outlookHref()}
          target="_blank"
          rel="noreferrer"
          onClick={onNavigate}
          className="pill pill-ghost"
        >
          Email on Outlook web
        </a>
      )}
    </div>
  )
}
