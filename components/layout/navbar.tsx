
"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X, UserRound } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/95">
      <nav className="mx-auto flex h-[66px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#171717] text-xs font-bold text-white">
            MI
          </span>

          <span className="flex flex-col">
            <span className="text-sm font-semibold leading-4 text-gray-900">
              Irfan Ansari
            </span>
            <span className="text-[9px] tracking-[0.15em] text-gray-500">
              PORTFOLIO
            </span>
          </span>

          <span className="ml-2 hidden items-center gap-1.5 border-l border-gray-200 pl-3 text-[10px] text-gray-500 xl:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Available for opportunities
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-2 text-[11px] font-medium transition-colors hover:text-blue-600 ${
                index === 0 ? "text-blue-700" : "text-gray-600"
              }`}
            >
              {link.label}
              {index === 0 && (
                <span className="absolute inset-x-0 -bottom-[9px] h-0.5 rounded-full bg-blue-600" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 rounded-sm bg-blue-700 px-3 py-2 text-[11px] font-semibold text-white transition hover:bg-blue-800"
          >
            Let's Talk <ArrowUpRight size={13} />
          </Link>
          <Link
            href="/#about"
            aria-label="About Irfan"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-700 text-white transition hover:bg-blue-800"
          >
            <UserRound size={15} />
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-800 lg:hidden"
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-gray-100 bg-white lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-5 py-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-gray-100 py-3 text-sm text-gray-700 transition hover:text-blue-600"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-md bg-blue-700 px-4 py-3 text-sm font-medium text-white"
              >
                Let's Talk <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
