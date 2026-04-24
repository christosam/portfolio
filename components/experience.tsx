import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-border bg-muted/40 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <SectionHeading eyebrow="Experience" title="Where I've worked." />
        </Reveal>

        <ol className="mt-10 space-y-6">
          {experience.map((role, i) => (
            <Reveal as="li" key={`${role.company}-${role.period}`} delay={i * 0.05}>
              <article className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {role.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      <span className="text-foreground">{role.company}</span>
                      <span className="mx-1.5 text-muted-foreground/60">·</span>
                      {role.location}
                      {role.freelance ? (
                        <span className="ml-2 rounded-full border border-border bg-background px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                          Freelance
                        </span>
                      ) : null}
                    </p>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground">
                    {role.period}
                  </p>
                </div>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {role.bullets.map((b) => (
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
        </ol>
      </div>
    </section>
  );
}
