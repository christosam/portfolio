import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-border bg-muted/40 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Tools I use to ship."
            description="Grouped by layer — from app UI down to device firmware integration."
          />
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal as="li" key={group.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/60">
                <h3 className="text-sm font-semibold text-foreground">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
