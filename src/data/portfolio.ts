export type NavItem = {
  label: string
  to: string
}

export type TimelineItem = {
  title: string
  org: string
  period: string
  score?: string
  points?: string[]
}

export type Project = {
  slug: string
  index: string
  name: string
  year: string
  category: string
  role: string
  summary: string
  description: string[]
  tech: string[]
  links: { label: string; href: string }[]
  accent: "accent" | "forest" | "ink" | "forest-soft"
  metric?: { value: string; label: string }
}

export type Capability = {
  index: string
  title: string
  body: string
}

export type Certification = {
  title: string
  issuer: string
  tag?: string
}

export const navItems: NavItem[] = [
  { label: "Work", to: "/works" },
  { label: "About", to: "/" },
  { label: "Contact", to: "/contact" },
]

export const profile = {
  name: "Sravya Puttamraju",
  firstName: "Sravya",
  lastName: "Puttamraju",
  initials: "SP",
  role: "Computer Science & Engineering · MERN Stack Developer",
  status: "Open to internships & full-time roles",
  location: "Visakhapatnam, Andhra Pradesh, India",
  email: "sravyaputtamraju6106@gmail.com",
  phone: "+91 93926 80641",
  phoneHref: "tel:+919392680641",
  photo: "/sravya-photo.png",
  resume: "/Sravya_CV.pdf",
  resumeFileName: "Sravya_CV.pdf",
  emailDraft: {
    subject: "Let's talk — Sravya Puttamraju (MERN)",
    body: [
      "Hi,",
      "",
      "I came across your portfolio and I'd love to talk about a role on your team.",
      "",
      "A few quick things about me:",
      "• Computer Science undergraduate, B.Tech 2023–2027",
      "• MERN stack (React, Node, Express, MongoDB) with AWS exposure",
      "• Two internships — Codec Technologies and the Infosys Pragati track",
      "",
      "My resume: {resume}",
      "",
      "Would a quick call this week work?",
      "",
      "Best,",
      "Sravya Puttamraju",
      "MERN Stack Developer · Visakhapatnam, India",
    ].join("\n"),
  },
  objective:
    "Computer Science undergraduate building reliable, well-designed web products. I care about clean interfaces, honest engineering, and shipping things that actually hold up in production.",
  rotating: [
    "MERN Stack Developer",
    "Full Stack Engineer",
    "Problem Solver",
    "DSA & Algorithms",
    "Cloud Learner",
  ],
  links: {
    github: "https://github.com/Sravya6106",
    linkedin: "https://www.linkedin.com/in/sravya-puttamraju-694258347",
    codechef: "https://www.codechef.com/users/rag_23981a05a9",
  },
}

export const socials = [
  { label: "GitHub", handle: "@Sravya6106", href: profile.links.github, icon: "github" as const },
  { label: "LinkedIn", handle: "sravya-puttamraju", href: profile.links.linkedin, icon: "linkedin" as const },
  { label: "CodeChef", handle: "rag_23981a05a9", href: profile.links.codechef, icon: "code" as const },
]

export const stats = [
  { value: "9.56", suffix: "/10", label: "CGPA" },
  { value: "40", suffix: "+", label: "Students mentored" },
  { value: "2", suffix: "", label: "Internships" },
  { value: "5", suffix: "+", label: "Certifications" },
]

export const marqueeItems = [
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "TypeScript",
  "Python",
  "Java",
  "JavaScript",
  "PostgreSQL",
  "AWS",
  "Tailwind CSS",
  "REST APIs",
  "Git",
  "Data Structures",
  "Algorithms",
  "OOP",
]

export const capabilities: Capability[] = [
  {
    index: "01",
    title: "Full-stack builds",
    body: "Schema to screen. I design the data model, wire the API, then build a front end that stays fast as the data grows.",
  },
  {
    index: "02",
    title: "Interfaces with restraint",
    body: "Layout, type scale, and spacing carried through one system. Fewer surprises between a mockup and what ships.",
  },
  {
    index: "03",
    title: "Algorithms that hold up",
    body: "Comfortable in DSA and competitive programming. Choosing the right complexity up front saves weeks later.",
  },
  {
    index: "04",
    title: "Cloud & deployment",
    body: "EC2, S3, Lambda and VPC. Getting a project from a local branch to a real URL without drama.",
  },
]

export const process: Capability[] = [
  {
    index: "01",
    title: "Listen before building",
    body: "Every project starts the same way — understanding what the thing actually needs to do, who it is for, and what already exists. Most bad outcomes are decided in this step, not the code.",
  },
  {
    index: "02",
    title: "Structure before surface",
    body: "Data model, routes and component boundaries come before any styling. Getting the shape right early means the interface has something solid to sit on.",
  },
  {
    index: "03",
    title: "Build it thin, then thicken",
    body: "Ship the smallest thing that works end to end, then add weight. It keeps the risky assumptions at the front where they're cheap to change.",
  },
  {
    index: "04",
    title: "Design as a system",
    body: "A type scale, a spacing rhythm, a small set of components. Consistency is what makes an interface feel intentional rather than assembled.",
  },
  {
    index: "05",
    title: "Test the awkward cases",
    body: "Empty states, long names, slow connections, 375px screens. The edge cases are where the quality is, and they're the first thing a user hits.",
  },
  {
    index: "06",
    title: "Ship, then measure",
    body: "Deployed, monitored, and iterated. A site that is never measured is just an opinion with a URL attached.",
  },
]

export const principles = [
  "I design with care.",
  "No templates, no shortcuts.",
  "Ship it, then measure it.",
]

export const experience: TimelineItem[] = [
  {
    title: "AI Student Intern",
    org: "Infosys Pragati · Cohort 6",
    period: "May 2026 – July 2026",
    points: [
      "Hands-on exposure to Artificial Intelligence concepts and tooling through a structured internship program.",
      "Completed assigned learning modules and tasks, strengthening Python and problem-solving skills.",
    ],
  },
  {
    title: "MERN Stack Developer",
    org: "Codec Technologies",
    period: "May 2025 – July 2025",
    points: [
      "Developed full stack web application features using MongoDB, Express.js, React.js and Node.js.",
      "Built RESTful APIs and integrated them with responsive React front-end components.",
      "Used Git and GitHub for version control and collaborated with team members on project tasks.",
    ],
  },
]

export const leadership = {
  title: "Programming Lead",
  org: "Computer Society of India (CSI)",
  period: "2025 – 2026",
  highlight: "40+",
  highlightLabel: "students mentored",
  points: [
    "Mentored 40+ students through technical workshops and collaborative activities.",
    "Coordinated technical events and worked with teams to ensure smooth execution.",
  ],
}

export const education: TimelineItem[] = [
  {
    title: "B.Tech — Computer Science & Engineering",
    org: "Raghu Engineering College, Visakhapatnam",
    period: "2023 – 2027",
    score: "CGPA 9.56 / 10",
    points: [
      "Core coursework across data structures, algorithms, DBMS, operating systems and computer networks.",
      "Active programming practice with a focus on competitive problem solving.",
    ],
  },
  {
    title: "Intermediate — Mathematics, Physics, Chemistry",
    org: "Bhashyam Junior College, Guntur",
    period: "2021 – 2023",
    score: "98%",
  },
  {
    title: "Secondary School Certificate (SSC)",
    org: "Government Girls High School, Addanki",
    period: "2020 – 2021",
    score: "CGPA 10 / 10",
  },
]

export const projects: Project[] = [
  {
    slug: "weather-forecast-web-app",
    index: "01",
    name: "Weather Forecast Web App",
    year: "2025",
    category: "Web Application",
    role: "Solo build",
    summary: "A responsive weather app that resolves any city to a current, readable forecast.",
    description: [
      "Built a responsive web application that displays real-time weather information for any city the user types.",
      "Integrated a weather API to fetch and normalise live conditions, then rendered them through a component set that stays readable on a phone.",
      "Added dynamic updates so the forecast refreshes without a full page reload.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Weather API"],
    links: [
      { label: "Source", href: profile.links.github },
    ],
    accent: "accent",
    metric: { value: "Live API", label: "data source" },
  },
  {
    slug: "portfolio-website",
    index: "02",
    name: "Portfolio Website",
    year: "2026",
    category: "Web Design",
    role: "Design & development",
    summary: "A personal portfolio built on a strict grid, with scroll reveals and a fully accessible mobile menu.",
    description: [
      "Designed and developed a responsive personal portfolio website showcasing projects, skills and contact details.",
      "Built on a React + Vite + Tailwind stack with a strict type scale and a single spacing rhythm carried across every breakpoint.",
      "Added scroll reveals, hover interactions and a keyboard-accessible mobile navigation.",
    ],
    tech: ["React", "Vite", "Tailwind CSS", "TypeScript"],
    links: [
      { label: "Source", href: profile.links.github },
    ],
    accent: "forest",
    metric: { value: "0", label: "layout shift" },
  },
  {
    slug: "full-stack-mern-projects",
    index: "03",
    name: "Full-stack MERN Projects",
    year: "2025",
    category: "Engineering",
    role: "Developer",
    summary: "REST APIs and React front ends built during the Codec Technologies internship.",
    description: [
      "Designed MongoDB schemas, exposed them through Express routers, and consumed the same endpoints from React components.",
      "Handled validation and error states at the API boundary so the UI never renders a half-loaded record.",
      "Versioned everything through Git branches reviewed by the team before merge.",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js"],
    links: [
      { label: "Source", href: profile.links.github },
    ],
    accent: "ink",
    metric: { value: "3", label: "months shipping" },
  },
  {
    slug: "ai-pragati-labwork",
    index: "04",
    name: "AI Lab Work",
    year: "2026",
    category: "Machine Learning",
    role: "Infosys Pragati · Cohort 6",
    summary: "Applied ML fundamentals and tooling through the Infosys Pragati internship track.",
    description: [
      "Worked through structured AI modules covering data preparation, model basics and evaluation.",
      "Implemented notebooks end to end and documented the reasoning behind each modelling choice.",
      "Strengthened Python fluency and the habit of reading results before trusting them.",
    ],
    tech: ["Python", "NumPy", "Pandas", "Jupyter"],
    links: [
      { label: "Source", href: profile.links.github },
    ],
    accent: "forest-soft",
    metric: { value: "C6", label: "cohort" },
  },
]

export const skillGroups = [
  {
    index: "01",
    title: "Languages",
    items: ["Python", "Java", "C", "JavaScript", "SQL"],
  },
  {
    index: "02",
    title: "Front end",
    items: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    index: "03",
    title: "Back end",
    items: ["Node.js", "Express.js", "REST APIs", "MongoDB", "DBMS"],
  },
  {
    index: "04",
    title: "Computer science",
    items: ["Data Structures & Algorithms", "OOP", "Operating Systems", "Computer Networks"],
  },
  {
    index: "05",
    title: "Cloud & tools",
    items: ["AWS · EC2", "AWS · S3", "AWS · Lambda", "AWS · VPC", "Git", "GitHub", "VS Code"],
  },
]

export const certifications: Certification[] = [
  { title: "Java and DBMS", issuer: "NPTEL", tag: "Elite" },
  { title: "Responsive Web Design", issuer: "freeCodeCamp" },
  { title: "Generative AI", issuer: "Infosys Springboard" },
  { title: "Software Engineering Job Simulation", issuer: "Accenture · Forage" },
  { title: "Python Programming", issuer: "Reliance Foundation" },
]
