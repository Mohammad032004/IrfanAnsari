
"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-black/5 bg-white/85 px-5 py-3 shadow-sm backdrop-blur-xl">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-neutral-950"
          onClick={() => setOpen(false)}
        >
          Irfan<span className="text-blue-600">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-600 transition-colors hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600 md:flex"
        >
          Let's talk <ArrowUpRight size={16} />
        </Link>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-neutral-900 hover:bg-neutral-100 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-7xl rounded-2xl border border-black/5 bg-white p-4 shadow-xl md:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-neutral-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-neutral-950 px-4 py-3 text-sm font-medium text-white"
            >
              Let's talk <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
