import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Cloud Dashboard",
    description:
      "A real-time monitoring dashboard for cloud infrastructure with interactive charts and alerting.",
    tech: ["React", "TypeScript", "D3.js", "Node.js"],
    demo: "https://example.com",
    repo: "https://github.com",
  },
  {
    title: "TaskFlow",
    description:
      "A collaborative project management tool with drag-and-drop boards, real-time sync, and team workspaces.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    demo: "https://example.com",
    repo: "https://github.com",
  },
  {
    title: "SecureVault",
    description:
      "End-to-end encrypted password manager with zero-knowledge architecture and cross-device sync.",
    tech: ["Go", "React", "WebCrypto", "SQLite"],
    demo: null,
    repo: "https://github.com",
  },
  {
    title: "DevBlog Engine",
    description:
      "A blazing-fast static blog engine built for developers with MDX support and full-text search.",
    tech: ["Astro", "MDX", "Fuse.js", "Vercel"],
    demo: "https://example.com",
    repo: "https://github.com",
  },
]

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <h2 className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">
        Projects
      </h2>
      <p className="mb-12 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        Featured work
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/40"
          >
            <h3 className="text-lg font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge
                  key={t}
                  variant="secondary"
                  className="text-xs font-normal text-muted-foreground"
                >
                  {t}
                </Badge>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <ExternalLink className="size-3.5" />
                  Live Demo
                </a>
              )}
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                <Github className="size-3.5" />
                Source
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
