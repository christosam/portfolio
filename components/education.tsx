import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Education
          </h2>
        </Reveal>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {education.map((e, i) => (
            <Reveal as="li" key={e.degree} delay={i * 0.05}>
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background text-accent">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {e.degree}
                  </p>
                  <p className="text-sm text-muted-foreground">{e.school}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {e.period}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
