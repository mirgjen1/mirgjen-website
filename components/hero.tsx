import { Github, Linkedin, Mail, User } from "lucide-react"

export function Hero() {
  return (
    <section
      id="about"
      className="mx-auto flex max-w-5xl flex-col justify-center px-6 pb-24 pt-32 md:pb-32 md:pt-44"
    >
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:items-start md:justify-between md:gap-16">
        {/* Text content */}
        <div className="flex-1">
          <p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
            Software Engineer
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {"Hi, I'm [Name]. I build technical solutions, clean software, and engaging digital experiences."}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Full-stack engineer focused on building performant, accessible web applications with modern technologies and thoughtful design.
          </p>
          <div className="mt-10 flex items-center gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent"
              aria-label="GitHub profile"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-muted-foreground transition-colors hover:text-accent"
              aria-label="Send email"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>

        {/* Photo placeholder */}
        <div className="relative flex-shrink-0">
          <div className="flex size-48 items-center justify-center overflow-hidden rounded-full border-2 border-border bg-secondary md:size-56 lg:size-64">
            {/* Replace this div with your image:
                <img 
                  src="/your-photo.jpg" 
                  alt="Your name" 
                  className="size-full object-cover"
                />
            */}
            <User className="size-20 text-muted-foreground md:size-24 lg:size-28" />
          </div>
          {/* Decorative accent ring */}
          <div className="absolute -inset-2 -z-10 rounded-full border border-accent/20" />
        </div>
      </div>
    </section>
  )
}
