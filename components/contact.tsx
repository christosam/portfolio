import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something."
            description="Open to full-time roles, contract work, and collaborations on Flutter, BLE/IoT, or full-stack products."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Reveal>
            <ContactLink
              href={`mailto:${profile.email}`}
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value={profile.email}
            />
          </Reveal>
          <Reveal delay={0.05}>
            <ContactLink
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              icon={<Phone className="h-4 w-4" />}
              label="Phone"
              value={profile.phone}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ContactLink
              href={profile.linkedin}
              icon={<LinkedinIcon className="h-4 w-4" />}
              label="LinkedIn"
              value="linkedin.com/in/christosammathew"
              external
            />
          </Reveal>
          <Reveal delay={0.15}>
            <ContactLink
              href={profile.github}
              icon={<GithubIcon className="h-4 w-4" />}
              label="GitHub"
              value="github.com/christosam"
              external
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  icon,
  label,
  value,
  external,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-accent/60 hover:bg-muted"
    >
      <div className="flex items-center gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-accent">
          {icon}
        </span>
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            {label}
          </p>
          <p className="mt-0.5 text-sm font-medium text-foreground">{value}</p>
        </div>
      </div>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
    </a>
  );
}
