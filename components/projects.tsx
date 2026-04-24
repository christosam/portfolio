import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work."
            description="A mix of consumer mobile, embedded integrations, and device-control platforms."
          />
        </Reveal>

        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal as="li" key={project.name} delay={i * 0.06}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:border-accent/60 hover:shadow-lg">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(14,165,233,0.18),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.tagline}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-border bg-background/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {project.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
