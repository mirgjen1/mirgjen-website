import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "2023 — Present",
    role: "Senior Software Engineer",
    company: "Acme Corp",
    description:
      "Lead frontend architecture for the core product platform. Drove migration to Next.js and improved performance metrics by 40%. Mentor junior engineers and define technical standards.",
    skills: ["React", "Next.js", "TypeScript", "AWS"],
  },
  {
    period: "2021 — 2023",
    role: "Software Engineer",
    company: "StartupCo",
    description:
      "Built and maintained full-stack features for a SaaS platform serving 50k+ users. Designed RESTful APIs and implemented real-time collaboration features.",
    skills: ["Node.js", "React", "PostgreSQL", "Redis"],
  },
  {
    period: "2019 — 2021",
    role: "Frontend Developer",
    company: "Digital Agency",
    description:
      "Developed responsive web applications for enterprise clients. Created component libraries and design systems used across multiple projects.",
    skills: ["JavaScript", "Vue.js", "Sass", "Webpack"],
  },
  {
    period: "2017 — 2019",
    role: "Junior Developer",
    company: "TechStart",
    description:
      "Contributed to open-source projects and built internal tooling. Wrote automated tests and CI/CD pipelines for the engineering team.",
    skills: ["Python", "Django", "Docker", "Git"],
  },
]

const skillCategories = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Django", "PostgreSQL", "Redis"],
  },
  {
    category: "DevOps & Tools",
    items: ["AWS", "Docker", "Git", "CI/CD", "Vercel"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <h2 className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">
        Experience
      </h2>
      <p className="mb-12 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        Where I&apos;ve worked
      </p>

      {/* Timeline */}
      <div className="relative space-y-0">
        {experiences.map((exp, i) => (
          <div
            key={exp.role}
            className="group relative grid gap-4 pb-12 md:grid-cols-[180px_1fr] md:gap-8"
          >
            {/* Timeline line */}
            {i < experiences.length - 1 && (
              <div className="absolute left-[7px] top-[22px] hidden h-full w-px bg-border md:left-[187px] md:block" />
            )}

            {/* Period */}
            <p className="pt-0.5 text-sm text-muted-foreground md:text-right">
              {exp.period}
            </p>

            {/* Content */}
            <div className="relative">
              {/* Dot */}
              <div className="absolute -left-[23px] top-[7px] hidden size-2.5 rounded-full border-2 border-accent bg-background md:block" />
              <h3 className="text-base font-semibold text-foreground">
                {exp.role}{" "}
                <span className="text-accent">
                  {"· "}
                  {exp.company}
                </span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs font-normal text-muted-foreground"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills grid */}
      <div className="mt-16 border-t border-border pt-12">
        <h3 className="mb-8 text-lg font-semibold text-foreground">
          Skills & Technologies
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {skillCategories.map((cat) => (
            <div key={cat.category}>
              <p className="mb-3 text-sm font-medium text-foreground">
                {cat.category}
              </p>
              <ul className="flex flex-col gap-1.5">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
