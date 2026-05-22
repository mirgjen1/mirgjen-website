import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <h2 className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">
        Contact
      </h2>
      <p className="mb-8 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        {"Let's connect"}
      </p>
      <p className="mb-10 max-w-lg text-base leading-relaxed text-muted-foreground">
        {"I'm always open to new opportunities, interesting projects, and conversations about technology. Feel free to reach out."}
      </p>

      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
        <a
          href="mailto:hello@example.com"
          className="group flex items-center gap-2 text-sm text-foreground transition-colors hover:text-accent"
        >
          <Mail className="size-4 text-muted-foreground group-hover:text-accent" />
          hello@example.com
          <ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-sm text-foreground transition-colors hover:text-accent"
        >
          <Github className="size-4 text-muted-foreground group-hover:text-accent" />
          GitHub
          <ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-sm text-foreground transition-colors hover:text-accent"
        >
          <Linkedin className="size-4 text-muted-foreground group-hover:text-accent" />
          LinkedIn
          <ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
        </a>
      </div>
    </section>
  )
}
