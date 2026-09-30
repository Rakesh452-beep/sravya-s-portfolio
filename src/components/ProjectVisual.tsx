import type { Project } from "../data/portfolio"

/* Mockup tints — contrast-safe versions of the project accents so the
   light app screens stay readable. */
const tints = {
  accent: "#a8c522",
  forest: "#1a5241",
  ink: "#367d68",
  "forest-soft": "#5c5c5c",
} as const

const UI = {
  surface: "#fafafa",
  surfaceAlt: "#f1f4f2",
  border: "#e4e7e4",
  borderSoft: "#eef1ee",
  ink: "#18231d",
  muted: "#7b847d",
  faint: "#c3c9c4",
  white: "#ffffff",
} as const

const sans = "Inter, ui-sans-serif, system-ui, sans-serif"
const mono = "'JetBrains Mono', ui-monospace, SFMono-Regular, monospace"

type MockProps = {
  tint: string
  /** unique id prefix so <defs> never collide between cards */
  uid: string
}

function Bar({
  x,
  y,
  w,
  h = 8,
  fill = UI.faint,
  rx = 4,
  opacity = 1,
}: {
  x: number
  y: number
  w: number
  h?: number
  fill?: string
  rx?: number
  opacity?: number
}) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={rx}
      fill={fill}
      opacity={opacity}
    />
  )
}

/* 01 — Weather Forecast Web App: a phone screen ------------------- */
function WeatherMock({ tint, uid }: MockProps) {
  return (
    <g>
      <defs>
        <linearGradient id={`sky-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dff0f2" />
          <stop offset="100%" stopColor={UI.surface} />
        </linearGradient>
      </defs>

      {/* device */}
      <rect x="252" y="46" width="296" height="512" rx="30" fill={UI.ink} opacity="0.35" />
      <rect
        x="246"
        y="38"
        width="296"
        height="512"
        rx="30"
        fill={UI.surface}
        stroke={UI.border}
        strokeWidth="2"
      />
      <rect x="366" y="48" width="56" height="10" rx="5" fill={UI.ink} opacity="0.25" />
      <rect
        x="252"
        y="64"
        width="284"
        height="480"
        rx="24"
        fill={`url(#sky-${uid})`}
      />

      {/* search + location */}
      <rect x="272" y="86" width="176" height="34" rx="17" fill={UI.white} stroke={UI.border} />
      <circle cx="290" cy="103" r="6" fill="none" stroke={UI.muted} strokeWidth="2" />
      <line x1="294" y1="107" x2="300" y2="113" stroke={UI.muted} strokeWidth="2" strokeLinecap="round" />
      <Bar x={308} y={99} w={86} h={7} fill={UI.faint} />
      <circle cx="492" cy="103" r="15" fill={UI.white} stroke={UI.border} />
      <path
        d="M492 96a5 5 0 0 1 5 5c0 4-5 9-5 9s-5-5-5-9a5 5 0 0 1 5-5Z"
        fill={tint}
      />

      {/* current */}
      <text x="272" y="168" fontFamily={sans} fontSize="22" fontWeight="600" fill={UI.ink}>
        Visakhapatnam
      </text>
      <text x="272" y="190" fontFamily={sans} fontSize="13" fill={UI.muted}>
        Tue, 24 Jun · 14:20
      </text>

      <circle cx="304" cy="262" r="34" fill={UI.white} opacity="0.9" />
      <circle cx="304" cy="256" r="15" fill="#f4c64a" />
      <path
        d="M278 282a15 15 0 0 1 15-21 21 21 0 0 1 39 5 13 13 0 0 1-1 26h-52a10 10 0 0 1-1-10Z"
        fill={UI.white}
        stroke={UI.border}
        strokeWidth="1.5"
      />

      <text
        x="512"
        y="284"
        fontFamily={sans}
        fontSize="76"
        fontWeight="500"
        fill={UI.ink}
        textAnchor="end"
        letterSpacing="-3"
      >
        29°
      </text>
      <text
        x="512"
        y="312"
        fontFamily={sans}
        fontSize="14"
        fill={UI.muted}
        textAnchor="end"
      >
        Partly cloudy
      </text>

      <line x1="272" y1="344" x2="516" y2="344" stroke={UI.border} />

      {/* hourly strip */}
      {[
        ["Now", "29", 22],
        ["15:00", "30", 30],
        ["16:00", "31", 38],
        ["17:00", "29", 26],
        ["18:00", "27", 18],
      ].map(([time, temp, bar], i) => (
        <g key={String(time)}>
          <text
            x={292 + i * 48}
            y="372"
            fontFamily={sans}
            fontSize="11"
            fill={UI.muted}
            textAnchor="middle"
          >
            {time}
          </text>
          <circle cx={292 + i * 48} cy="396" r="4" fill={i === 2 ? "#f4c64a" : UI.faint} />
          <text
            x={292 + i * 48}
            y="424"
            fontFamily={sans}
            fontSize="14"
            fontWeight="600"
            fill={UI.ink}
            textAnchor="middle"
          >
            {temp}°
          </text>
          <Bar
            x={284 + i * 48}
            y={438}
            w={16}
            h={Number(bar)}
            rx={8}
            fill={i === 2 ? tint : UI.faint}
          />
        </g>
      ))}

      {/* week row */}
      <line x1="272" y1="488" x2="516" y2="488" stroke={UI.border} />
      {["Wed", "Thu", "Fri", "Sat"].map((d, i) => (
        <text
          key={d}
          x={292 + i * 56}
          y="514"
          fontFamily={sans}
          fontSize="12"
          fill={UI.muted}
          textAnchor="middle"
        >
          {d}
        </text>
      ))}
    </g>
  )
}

/* 02 — Portfolio Website: a desktop page ------------------------- */
function PortfolioMock({ tint, uid }: MockProps) {
  return (
    <g>
      <defs>
        <filter id={`sh-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#0a1f17" floodOpacity="0.5" />
        </filter>
      </defs>

      <rect
        x="60"
        y="76"
        width="680"
        height="448"
        rx="16"
        fill={UI.surface}
        stroke={UI.border}
        filter={`url(#sh-${uid})`}
      />
      <line x1="60" y1="128" x2="740" y2="128" stroke={UI.border} />
      {[88, 108, 128].map((cx) => (
        <circle key={cx} cx={cx} cy="102" r="6" fill={UI.faint} />
      ))}
      <Bar x={170} y={98} w={190} h={9} fill={UI.faint} />

      {/* nav */}
      <text x="92" y="168" fontFamily={sans} fontSize="14" fontWeight="600" fill={UI.ink}>
        Sravya Puttamraju
      </text>
      {["Work", "About", "Contact"].map((l, i) => (
        <text
          key={l}
          x={556 + i * 62}
          y="168"
          fontFamily={sans}
          fontSize="12"
          fill={i === 0 ? tint : UI.muted}
          fontWeight={i === 0 ? 600 : 400}
        >
          {l}
        </text>
      ))}

      {/* hero type */}
      <rect x="92" y="204" width="330" height="26" rx="6" fill={UI.ink} />
      <rect x="92" y="242" width="252" height="26" rx="6" fill={UI.ink} />
      <rect x="92" y="280" width="288" height="26" rx="6" fill={tint} />
      <Bar x={92} y={330} w={300} h={8} />
      <Bar x={92} y={348} w={262} h={8} />
      <Bar x={92} y={366} w={212} h={8} />

      <rect x="92" y="396" width="112" height="32" rx="16" fill={UI.ink} />
      <rect x="92" y="400" width="72" height="8" rx="4" fill={UI.white} opacity="0.85" />
      <rect
        x="216"
        y="396"
        width="104"
        height="32"
        rx="16"
        fill="none"
        stroke={UI.faint}
        strokeWidth="1.5"
      />
      <rect x="236" y="408" width="64" height="8" rx="4" fill={UI.faint} />

      {/* project cards */}
      {[0, 1].map((row) =>
        [0, 1].map((col) => (
          <g key={`${row}-${col}`}>
            <rect
              x={452 + col * 148}
              y={204 + row * 132}
              width="132"
              height="116"
              rx="10"
              fill={UI.surfaceAlt}
              stroke={UI.border}
            />
            <path
              d={`M${452 + col * 148} ${292 + row * 132} l40 -34 30 24 24 -20 38 30 Z`}
              fill={col === 0 && row === 0 ? tint : UI.faint}
              opacity={col === 0 && row === 0 ? 0.5 : 0.35}
            />
            <Bar x={464 + col * 148} y={330 + row * 132} w={92} h={7} />
            <Bar x={464 + col * 148} y={345 + row * 132} w={60} h={6} fill={UI.border} />
          </g>
        )),
      )}

      {/* footer rule */}
      <line x1="92" y1="482" x2="708" y2="482" stroke={UI.borderSoft} />
      <Bar x={92} y={496} w={150} h={6} />
    </g>
  )
}

/* 03 — Full-stack MERN: an admin console ------------------------- */
function StackMock({ tint, uid }: MockProps) {
  return (
    <g>
      <defs>
        <filter id={`sh-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#0a1f17" floodOpacity="0.5" />
        </filter>
      </defs>

      <rect
        x="60"
        y="76"
        width="680"
        height="448"
        rx="16"
        fill={UI.surface}
        stroke={UI.border}
        filter={`url(#sh-${uid})`}
      />

      {/* sidebar */}
      <path
        d="M76 76 h116 v448 h-116 a16 16 0 0 1 -16 -16 v-416 a16 16 0 0 1 16 -16 Z"
        fill={UI.surfaceAlt}
      />
      <line x1="192" y1="76" x2="192" y2="524" stroke={UI.border} />

      <circle cx="100" cy="110" r="12" fill={tint} />
      <Bar x={120} y={106} w={54} h={8} fill={UI.faint} />

      {["Overview", "Records", "Accounts", "Reports", "Settings"].map((l, i) => (
        <g key={l}>
          {i === 1 && <rect x="76" y={152 + i * 40} width="100" height="30" rx="8" fill={tint} opacity="0.18" />}
          <rect
            x="88"
            y={162 + i * 40}
            width="12"
            height="12"
            rx="3"
            fill={i === 1 ? tint : UI.faint}
          />
          <text
            x="110"
            y={173 + i * 40}
            fontFamily={sans}
            fontSize="12"
            fontWeight={i === 1 ? 600 : 400}
            fill={i === 1 ? UI.ink : UI.muted}
          >
            {l}
          </text>
        </g>
      ))}

      {/* header */}
      <text x="224" y="124" fontFamily={sans} fontSize="18" fontWeight="600" fill={UI.ink}>
        Records
      </text>
      <rect x="248" y="140" width="120" height="8" rx="4" fill={UI.faint} />
      <rect x="632" y="108" width="88" height="30" rx="15" fill={tint} />
      <rect x="656" y="120" width="40" height="8" rx="4" fill={UI.white} opacity="0.9" />

      {/* chart */}
      <rect x="224" y="176" width="264" height="140" rx="10" fill={UI.surfaceAlt} stroke={UI.border} />
      <polyline
        points="248,286 288,262 328,270 368,236 408,222 448,206"
        fill="none"
        stroke={tint}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="248,292 288,282 328,268 368,258 408,244 448,232"
        fill="none"
        stroke={UI.faint}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="448" cy="206" r="5" fill={tint} />

      {/* stat cards */}
      {[
        ["Total", "1,284"],
        ["Active", "932"],
        ["Pending", "47"],
      ].map(([l, v], i) => (
        <g key={l}>
          <rect
            x={504 + i * 74}
            y="176"
            width="66"
            height="140"
            rx="10"
            fill={UI.surfaceAlt}
            stroke={UI.border}
          />
          <text
            x={537 + i * 74}
            y={252}
            fontFamily={sans}
            fontSize="17"
            fontWeight="600"
            fill={UI.ink}
            textAnchor="middle"
          >
            {v}
          </text>
          <text
            x={537 + i * 74}
            y={272}
            fontFamily={sans}
            fontSize="10"
            fill={UI.muted}
            textAnchor="middle"
          >
            {l}
          </text>
        </g>
      ))}

      {/* table */}
      <rect x="224" y="336" width="496" height="168" rx="10" fill={UI.surface} stroke={UI.border} />
      <line x1="224" y1="370" x2="720" y2="370" stroke={UI.border} />
      {["ID", "Name", "Status", "Updated"].map((h, i) => (
        <text
          key={h}
          x={[244, 316, 470, 596][i]}
          y="358"
          fontFamily={sans}
          fontSize="10"
          letterSpacing="1"
          fill={UI.muted}
        >
          {h.toUpperCase()}
        </text>
      ))}

      {[
        ["#4021", "A. Kumar", "Active", "#3f9c6d"],
        ["#4022", "R. Sharma", "Active", "#3f9c6d"],
        ["#4023", "P. Naidu", "Pending", "#d8a33a"],
        ["#4024", "S. Iyer", "Active", "#3f9c6d"],
      ].map(([id, name, status, dot], i) => (
        <g key={id}>
          {i > 0 && (
            <line
              x1="224"
              y1={370 + i * 32}
              x2="720"
              y2={370 + i * 32}
              stroke={UI.borderSoft}
            />
          )}
          <text x="244" y={390 + i * 32} fontFamily={mono} fontSize="11" fill={UI.muted}>
            {id}
          </text>
          <text x="316" y={390 + i * 32} fontFamily={sans} fontSize="12" fill={UI.ink}>
            {name}
          </text>
          <circle cx="474" cy={386 + i * 32} r="4" fill={dot} />
          <text x="486" y={390 + i * 32} fontFamily={sans} fontSize="11" fill={UI.muted}>
            {status}
          </text>
          <text x="596" y={390 + i * 32} fontFamily={sans} fontSize="11" fill={UI.faint}>
            2h ago
          </text>
        </g>
      ))}
    </g>
  )
}

/* 04 — AI Lab Work: a notebook ----------------------------------- */
function AiMock({ tint, uid }: MockProps) {
  return (
    <g>
      <defs>
        <filter id={`sh-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#0a1f17" floodOpacity="0.5" />
        </filter>
      </defs>

      <rect
        x="60"
        y="76"
        width="680"
        height="448"
        rx="16"
        fill={UI.surface}
        stroke={UI.border}
        filter={`url(#sh-${uid})`}
      />

      {/* toolbar */}
      <path
        d="M76 76 h648 a16 16 0 0 1 16 16 v28 h-680 v-28 a16 16 0 0 1 16 -16 Z"
        fill={UI.surfaceAlt}
      />
      <line x1="60" y1="120" x2="740" y2="120" stroke={UI.border} />
      {[88, 108, 128].map((cx) => (
        <circle key={cx} cx={cx} cy="98" r="6" fill={UI.faint} />
      ))}
      <text x="158" y="102" fontFamily={mono} fontSize="12" fill={UI.muted}>
        lab-6 · model-eval.ipynb
      </text>
      <rect x="612" y="88" width="102" height="20" rx="10" fill={UI.white} stroke={UI.border} />
      <text x="663" y="102" fontFamily={sans} fontSize="10" fill={UI.muted} textAnchor="middle">
        Restart kernel
      </text>

      {/* cell 1 — code */}
      <rect x="92" y="146" width="616" height="96" rx="8" fill={UI.surfaceAlt} stroke={UI.border} />
      {[0, 1, 2].map((i) => (
        <text
          key={i}
          x="112"
          y={170 + i * 24}
          fontFamily={mono}
          fontSize="10"
          fill={UI.faint}
        >
          {`[${i + 1}]:`}
        </text>
      ))}
      <g fontFamily={mono} fontSize="12">
        <text x="150" y="170">
          <tspan fill="#8250df">from</tspan>
          <tspan fill={UI.ink}> sklearn </tspan>
          <tspan fill="#8250df">import</tspan>
          <tspan fill={UI.ink}> train_test_split </tspan>
        </text>
        <text x="150" y="194" fill={UI.ink}>
          X_train, X_test, y_train, y_test = train_test_split(
        </text>
        <text x="150" y="218" fill={UI.ink}>
          X, y, test_size=<tspan fill="#0550ae">0.2</tspan>, random_state=
          <tspan fill="#0550ae">42</tspan>)
        </text>
      </g>

      {/* cell 2 — output */}
      <rect x="92" y="258" width="308" height="150" rx="8" fill={UI.white} stroke={UI.border} />
      <text x="112" y="284" fontFamily={mono} fontSize="11" fill={UI.muted}>
        In [8]:
      </text>
      <text x="112" y="312" fontFamily={mono} fontSize="12" fill={UI.ink}>
        scores = cross_val_score(model, X, y, cv=5)
      </text>
      <text x="112" y="336" fontFamily={mono} fontSize="12" fill={UI.ink}>
        print(scores.mean().round(3))
      </text>
      <text x="112" y="372" fontFamily={mono} fontSize="12" fill={UI.ink}>
        0.94
      </text>

      {/* cell 3 — plot */}
      <rect x="420" y="258" width="288" height="150" rx="8" fill={UI.white} stroke={UI.border} />
      <line x1="452" y1="376" x2="676" y2="376" stroke={UI.faint} strokeWidth="1.5" />
      <line x1="452" y1="286" x2="452" y2="376" stroke={UI.faint} strokeWidth="1.5" />
      {[0, 1, 2, 3].map((i) => (
        <text
          key={i}
          x="446"
          y={372 - i * 28}
          fontFamily={sans}
          fontSize="9"
          fill={UI.faint}
          textAnchor="end"
        >
          {`${1 - i * 0.25}`}
        </text>
      ))}
      <polyline
        points="464,300 508,326 552,344 596,358 640,368"
        fill="none"
        stroke={tint}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[
        [464, 300],
        [508, 326],
        [552, 344],
        [596, 358],
        [640, 368],
      ].map(([cx, cy]) => (
        <circle key={`${cx}`} cx={cx} cy={cy} r="3.5" fill={tint} />
      ))}
      <text x="564" y="398" fontFamily={sans} fontSize="9" fill={UI.muted} textAnchor="middle">
        epoch
      </text>

      {/* cell 4 — metrics */}
      <rect x="92" y="424" width="616" height="76" rx="8" fill={UI.surfaceAlt} stroke={UI.border} />
      {[
        ["accuracy", "0.94"],
        ["loss", "0.081"],
        ["f1", "0.93"],
        ["epochs", "50"],
      ].map(([k, v], i) => (
        <g key={k}>
          <text
            x={120 + i * 152}
            y={452}
            fontFamily={sans}
            fontSize="10"
            fill={UI.muted}
          >
            {k}
          </text>
          <text
            x={120 + i * 152}
            y={478}
            fontFamily={sans}
            fontSize="20"
            fontWeight="600"
            fill={i === 0 ? tint : UI.ink}
          >
            {v}
          </text>
        </g>
      ))}
    </g>
  )
}

const mockBySlug: Record<string, (props: MockProps) => React.ReactElement> = {
  "weather-forecast-web-app": WeatherMock,
  "portfolio-website": PortfolioMock,
  "full-stack-mern-projects": StackMock,
  "ai-pragati-labwork": AiMock,
}

type ProjectVisualProps = {
  project: Project
  className?: string
}

export function ProjectVisual({ project, className = "" }: ProjectVisualProps) {
  const Mock = mockBySlug[project.slug] ?? PortfolioMock
  const tint = tints[project.accent]

  return (
    <div className={`tile h-full w-full ${className}`.trim()}>
      <svg
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid meet"
        className="tile-media h-full w-full"
        role="img"
        aria-label={`${project.name} — interface preview`}
      >
        <defs>
          <radialGradient id={`glow-${project.slug}`} cx="0.5" cy="0.4" r="0.7">
            <stop offset="0%" stopColor={tint} stopOpacity="0.22" />
            <stop offset="100%" stopColor={tint} stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="800" height="600" fill="var(--color-forest-deep)" />
        <rect width="800" height="600" fill={`url(#glow-${project.slug})`} />

        {/* faint construction grid */}
        <g stroke="var(--color-chalk)" strokeWidth="1" opacity="0.06">
          {Array.from({ length: 13 }, (_, i) => (
            <line key={`v${i}`} x1={i * 64 + 32} y1="0" x2={i * 64 + 32} y2="600" />
          ))}
          {Array.from({ length: 10 }, (_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 64 + 32} x2="800" y2={i * 64 + 32} />
          ))}
        </g>

        <Mock tint={tint} uid={project.slug} />

        {/* category tag */}
        <g transform="translate(44 40)">
          <rect
            x="-14"
            y="-16"
            width={project.category.length * 7.4 + 34}
            height="26"
            rx="13"
            fill="var(--color-forest-deep)"
            stroke="var(--color-chalk)"
            strokeOpacity="0.25"
          />
          <text
            x="0"
            y="1"
            fontFamily={sans}
            fontSize="11"
            letterSpacing="1.6"
            fill="var(--color-chalk)"
            opacity="0.75"
          >
            {project.category.toUpperCase()}
          </text>
        </g>

        <text
          x="756"
          y="556"
          fill="var(--color-chalk)"
          fontSize="20"
          fontWeight="500"
          letterSpacing="2"
          fontFamily={sans}
          textAnchor="end"
          opacity="0.5"
        >
          {project.year}
        </text>
      </svg>
    </div>
  )
}
