
"use client";

import Link from "next/link";
import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  Users,
  Code2,
} from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "Professional Network",
    href: "YOUR_PROFESSIONAL_PROFILE_URL",
    icon: Users,
  },
  {
    label: "Developer Profile",
    href: "https://github.com/Mohammad032004",
    icon: Code2,
  },
  {
    label: "Email",
    href: "mailto:YOUR_EMAIL@example.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#f7f5f4]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* Main Footer */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:py-14">

          {/* Brand Section */}
          <div>
            <Link
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-950 text-sm font-bold text-white">
                MI
              </span>

              <span>
                <span className="block text-sm font-semibold tracking-tight text-gray-950">
                  Irfan Ansari
                </span>

                <span className="mt-0.5 block text-[9px] uppercase tracking-[0.18em] text-gray-500">
                  Portfolio
                </span>
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-xs leading-6 text-gray-600">
              Full-Stack Developer exploring DevOps, cloud
              infrastructure, and AI-powered systems. Building
              meaningful digital experiences through code and creativity.
            </p>

            {/* Availability */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />

              <span className="text-[9px] font-medium text-emerald-800">
                Open to opportunities
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-900">
              Navigation
            </h3>

            <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[11px] text-gray-600 transition hover:text-blue-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-900">
              Let's Connect
            </h3>

            <p className="mt-5 max-w-[220px] text-[11px] leading-5 text-gray-600">
              Have a project, an idea, or an opportunity?
              I'd love to hear from you.
            </p>

            {/* Social Links */}
            <div className="mt-4 flex flex-wrap gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>

            <Link
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold text-blue-700 transition hover:text-blue-900"
            >
              Get in touch
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 py-5 sm:flex-row">

          <p className="text-center text-[9px] text-gray-500 sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-800">
              Mohammad Irfan Ansari
            </span>
            . All rights reserved.
          </p>

          <p className="text-[9px] text-gray-500">
            Designed & Developed with care.
          </p>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-[9px] font-semibold text-gray-700 transition hover:text-blue-700"
          >
            Back to top

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-white transition group-hover:border-blue-200 group-hover:bg-blue-50">
              <ArrowUp size={12} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
