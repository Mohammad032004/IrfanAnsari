
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";

const roles = [
  "Full-Stack Developer",
  "DevOps Developer",
  "AI Enthusiast",
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white px-6 pb-20 pt-32">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(59,130,246,0.10),transparent_45%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(#94a3b8_0.7px,transparent_0.7px)] [background-size:24px_24px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50/70 px-4 py-2"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-neutral-700">
              Building and learning every day
            </span>
          </motion.div>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600"
          >
            Hello, I'm Irfan Ansari
          </motion.p>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-neutral-950 sm:text-6xl lg:text-7xl"
          >
            I build digital
            <span className="block text-blue-600">experiences</span>
            that make a difference.
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-7 max-w-xl text-base leading-8 text-neutral-600 sm:text-lg"
          >
            I'm a full-stack developer and DevOps enthusiast focused on
            building useful products, exploring AI, and turning ideas into
            real-world applications.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Explore my work <ArrowUpRight size={17} />
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-neutral-200 px-6 py-3.5 text-sm font-semibold text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-50"
            >
              Get in touch
            </Link>
          </motion.div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href="https://github.com/Mohammad032004"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-neutral-500 transition hover:text-blue-600"
            >
              <Github size={21} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-neutral-500 transition hover:text-blue-600"
            >
              <Linkedin size={21} />
            </a>
            <span className="h-5 w-px bg-neutral-200" />
            <span className="text-sm text-neutral-500">
              Based in India
            </span>
          </div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative mx-auto w-full max-w-md"
        >
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-neutral-200 bg-gradient-to-br from-blue-50 via-white to-sky-100 p-7 shadow-2xl shadow-blue-900/10"
          >
            <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/90 bg-white/70 p-6 backdrop-blur-sm">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                  Developer · Creator
                </span>
                <h2 className="mt-5 text-4xl font-semibold tracking-tight text-neutral-950">
                  Ideas into
                  <br />
                  reality.
                </h2>
                <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-600">
                  Engineering thoughtful products with modern web technologies.
                </p>
              </div>

              <div className="space-y-3">
                {roles.map((role, index) => (
                  <motion.div
                    key={role}
                    initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.15 }}
                    className="flex items-center justify-between rounded-xl border border-neutral-200/80 bg-white px-4 py-3 shadow-sm"
                  >
                    <span className="text-sm font-medium text-neutral-800">
                      {role}
                    </span>
                    <ArrowUpRight size={16} className="text-blue-600" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="absolute -right-3 top-12 -z-10 size-24 rounded-full bg-blue-300/50 blur-2xl" />
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-neutral-500 transition hover:text-blue-600 sm:flex"
      >
        Scroll to explore <ArrowDown size={14} />
      </a>
    </section>
  );
}
