"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { navSections, profile } from "@/lib/data";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8">
        <a
          href="#top"
          className="font-semibold tracking-tight text-foreground"
          aria-label={`${profile.name} — home`}
        >
          {profile.firstName}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navSections.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-3">
            {navSections.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
