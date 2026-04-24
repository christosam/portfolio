"use client";

import { ArrowRight, Download, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/lib/data";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-center overflow-hidden pt-24 md:pt-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.14),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.09),transparent_60%)]"
      />

      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new opportunities
          </div>
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          <span className="font-medium text-foreground">{profile.title}</span>
          <span className="mx-2 text-muted-foreground/60">·</span>
          {profile.tagline}
        </motion.p>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            View projects
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={profile.resumeHref}
            download
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <Download className="h-4 w-4" />
            Download resume
          </a>
          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {profile.location}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
