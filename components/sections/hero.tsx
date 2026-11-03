
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Mail,
  BriefcaseBusiness,
} from "lucide-react";

const codeLines = [
  <><span className="text-violet-600">const</span> <span className="text-blue-700">engineer</span> = {"{"}</>,
  <>{"  "}name: <span className="text-orange-700">"Mohammad Irfan Ansari"</span>,</>,
  <>{"  "}role: <span className="text-orange-700">"Full-Stack & DevOps"</span>,</>,
  <>{"  "}community: <span className="text-orange-700">"Lead @ AI Club"</span>,</>,
  <>{"  "}coreStack: [<span className="text-emerald-700">"Next.js", "Docker", "LangChain"</span>],</>,
  <>{"  "}status: <span className="text-orange-700">"Building something meaningful"</span></>,
  <>{"};"}</>,
  <><span className="text-blue-700">engineer</span>.<span className="text-violet-600">deploy</span>()<span className="text-blue-700">;</span></>,
];

const technologies = ["Next.js", "PyTorch", "TypeScript"];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay },
  });

  return (
    <section className="relative isolate overflow-hidden bg-[#fcfafa]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_72%_40%,rgba(99,102,241,0.09),transparent_42%),radial-gradient(ellipse_at_10%_20%,rgba(37,99,235,0.04),transparent_35%)]" />

      <div className="mx-auto grid min-h-[500px] max-w-[1440px] items-center gap-10 px-5 py-10 sm:px-8 lg:min-h-[490px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-12 lg:py-8">
        {/* Left column */}
        <div className="relative z-10">
          <motion.div
            {...reveal(0)}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200/80 bg-gray-100/80 px-3 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            <span className="text-[9px] font-semibold tracking-[0.09em] text-gray-600">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </motion.div>

          <motion.h1
            {...reveal(0.1)}
            className="max-w-[620px] text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.07] tracking-[-0.055em] text-[#111111]"
          >
            Building digital experiences with code,{" "}
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-violet-600 bg-clip-text text-transparent">
              creativity, and AI.
            </span>
          </motion.h1>

          <motion.p
            {...reveal(0.2)}
            className="mt-4 max-w-[510px] text-[13px] leading-[1.85] text-gray-600 sm:text-sm"
          >
            I'm Mohammad Irfan Ansari — a Full-Stack Developer exploring
            DevOps, cloud architectures, and AI-powered systems. I transform
            architectural complexity into clear, performant digital solutions.
          </motion.p>

          <motion.div
            {...reveal(0.3)}
            className="mt-5 flex flex-wrap items-center gap-2.5"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-sm bg-blue-700 px-3.5 py-2.5 text-[11px] font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-800"
            >
              Explore My Work <ArrowRight size={14} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm border border-gray-200 bg-white px-3.5 py-2.5 text-[11px] font-medium text-gray-800 transition hover:border-blue-300 hover:text-blue-700"
            >
              Let's Connect
            </Link>

            <a
              href="https://github.com/Mohammad032004"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-gray-200 bg-white text-gray-700 transition hover:border-blue-300 hover:text-blue-700"
            >
              <Code2 size={15} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-gray-200 bg-white text-gray-700 transition hover:border-blue-300 hover:text-blue-700"
            >
              <BriefcaseBusiness size={15} />
            </a>
          </motion.div>

          <motion.div
            {...reveal(0.4)}
            className="mt-7 grid max-w-[470px] grid-cols-3 gap-4 border-t border-gray-200/80 pt-5"
          >
            <div>
              <p className="text-xs font-semibold text-gray-900">BCA</p>
              <p className="mt-1 text-[10px] text-gray-500">Computer Science</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-900">Head</p>
              <p className="mt-1 text-[10px] text-gray-500">
                Artificial Intelligence Club
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-900">Lucknow</p>
              <p className="mt-1 text-[10px] text-gray-500">
                Uttar Pradesh, India
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right column: developer terminal */}
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative mx-auto w-full max-w-[470px] lg:ml-auto lg:mr-3"
        >
          {!shouldReduceMotion && (
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <TerminalCard />
            </motion.div>
          )}

          {shouldReduceMotion && <TerminalCard />}

          <div className="absolute -right-1 -top-3 rounded-full border border-gray-100 bg-white px-3 py-1.5 text-[9px] font-medium text-gray-600 shadow-sm sm:-right-4">
            <span className="mr-1 text-blue-600">◉</span>
            DevOps & Cloud Ready
          </div>

          <div className="absolute -right-2 top-[38%] flex flex-col gap-2 sm:-right-5">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.65 + index * 0.12 }}
                className="rounded-md border border-gray-100 bg-white/95 px-2.5 py-1 text-[9px] font-medium text-gray-600 shadow-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <motion.div
            {...reveal(0.7)}
            className="absolute -bottom-5 left-0 rounded-md border border-gray-100 bg-white px-3 py-2 shadow-md sm:-left-4"
          >
            <div className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-500" />
              <div>
                <p className="text-[9px] font-semibold text-gray-700">
                  Active Initiative
                </p>
                <p className="mt-0.5 text-[9px] text-gray-500">
                  Building Next-Gen AI Hub
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Link
        href="/#about"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[9px] tracking-[0.12em] text-gray-500 transition hover:text-blue-700 sm:flex"
      >
        SCROLL TO EXPLORE <ArrowDown size={12} />
      </Link>
    </section>
  );
}

function TerminalCard() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200/90 bg-white shadow-[0_18px_50px_-25px_rgba(15,23,42,0.25)]">
      <div className="flex h-10 items-center justify-between border-b border-gray-100 bg-gray-50/90 px-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="text-[9px] text-gray-500">
          ansari@node-cluster — bash
        </span>
        <Code2 size={13} className="text-gray-400" />
      </div>

      <div className="px-3 py-5 sm:px-4 sm:py-6">
        <div className="space-y-2 font-mono text-[9px] leading-relaxed sm:text-[10px]">
          {codeLines.map((line, index) => (
            <div key={index} className="flex min-w-0 gap-4">
              <span className="w-3 shrink-0 select-none text-right text-gray-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0 break-words text-gray-800">{line}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-2 border-t border-gray-100 pt-3 text-[9px] text-gray-500">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Ready to build something meaningful
          <span className="ml-auto text-gray-400">●</span>
        </div>
      </div>
    </div>
  );
}
