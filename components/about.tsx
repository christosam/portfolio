import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Bridging software and hardware, with a focus on real-time UX."
          />
        </Reveal>

        <div className="mt-10 grid gap-10 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I&apos;m a full-stack engineer with over four years of experience
                shipping mobile, web, and desktop software. My work sits at the
                intersection of app development and embedded hardware —
                Flutter clients talking to BLE peripherals, Node.js services
                driving devices over TCP/IP, and streaming pipelines that have
                to feel instant.
              </p>
              <p>
                At{" "}
                <span className="font-medium text-foreground">
                  Digital Core Technologies
                </span>
                , I build end-to-end products alongside hardware and firmware
                teams — from pairing flows and command protocols to performance
                tuning and reliable connectivity. I care about responsive
                interfaces, predictable state, and code that&apos;s kind to
                whoever reads it next.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-2">
            <dl className="grid grid-cols-2 gap-4">
              <Stat label="Years experience" value="4+" />
              <Stat label="Shipped projects" value="10+" />
              <Stat label="Core stack" value="Flutter · .NET" />
              <Stat label="Specialty" value="BLE / IoT" />
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <dt className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-2 text-lg font-semibold text-foreground">{value}</dd>
    </div>
  );
}
