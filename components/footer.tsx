import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 text-sm text-muted-foreground md:flex-row md:items-center md:px-8">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs">
          Built with Next.js · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  );
}
