
"use client";

import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Code2,
  Send,
  ArrowUp,
  ArrowUpRight,
  Clock,
  CheckCircle2,
} from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "irfanansari.dev@example.com",
    href: "mailto:irfanansari.dev@example.com",
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "Lucknow, Uttar Pradesh, India",
    href: null,
  },
  {
    icon: Code2,
    label: "DEVELOPER PROFILE",
    value: "github.com/Mohammad032004",
    href: "https://github.com/Mohammad032004",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-gray-100 bg-[#fcfafa] px-5 py-12 sm:px-8 lg:px-12 lg:py-14"
    >
      <div className="mx-auto max-w-[1440px]">

        {/* Section Header */}
        <div className="mb-6 grid gap-3 sm:grid-cols-2 sm:items-end">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-blue-700">
              06 / CONVERSATION
            </p>

            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
              Have an idea? Let&apos;s build it.
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-5 text-gray-600 sm:justify-self-end">
            I&apos;m always interested in meaningful projects, open-source
            initiatives, and opportunities to learn and build.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid items-start gap-4 lg:grid-cols-[0.75fr_1.25fr]">

          {/* Direct Inquiry Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="rounded-md border border-gray-200/90 bg-white p-4 shadow-sm sm:p-5"
          >
            <h3 className="text-xs font-semibold text-gray-900">
              Direct Inquiries
            </h3>

            <div className="mt-4 space-y-4">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <div
                    key={detail.label}
                    className="flex items-start gap-3"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border border-gray-100 bg-gray-50 text-gray-700">
                      <Icon size={13} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[8px] font-semibold tracking-[0.12em] text-gray-400">
                        {detail.label}
                      </p>

                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={
                            detail.href.startsWith("mailto:")
                              ? undefined
                              : "_blank"
                          }
                          rel="noreferrer"
                          className="mt-1 block break-all text-[10px] font-medium text-gray-800 transition hover:text-blue-700"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-[10px] font-medium text-gray-800">
                          {detail.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Availability */}
            <div className="mt-5 rounded-sm border border-emerald-100 bg-emerald-50/60 p-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />

                <p className="text-[9px] font-semibold text-emerald-800">
                  Immediate Availability
                </p>
              </div>

              <p className="mt-1 text-[9px] leading-4 text-gray-600">
                Open to discussing suitable projects, internships,
                and full-time opportunities.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="rounded-md border border-gray-200/90 bg-white p-4 shadow-sm sm:p-5"
          >
            <form
              onSubmit={(event) => event.preventDefault()}
              className="space-y-4"
            >
              {/* Name and Email */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-[8px] font-semibold uppercase tracking-[0.1em] text-gray-500"
                  >
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="e.g. Alex Morgan"
                    required
                    className="h-9 w-full rounded-sm border border-gray-200 bg-[#f8f7f6] px-3 text-[10px] text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-400 focus:bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-[8px] font-semibold uppercase tracking-[0.1em] text-gray-500"
                  >
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="alex@company.com"
                    required
                    className="h-9 w-full rounded-sm border border-gray-200 bg-[#f8f7f6] px-3 text-[10px] text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-400 focus:bg-white"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-1.5 block text-[8px] font-semibold uppercase tracking-[0.1em] text-gray-500"
                >
                  Subject / Inquiry
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Full-Stack Engineering / AI Consultation / Collaboration"
                  required
                  className="h-9 w-full rounded-sm border border-gray-200 bg-[#f8f7f6] px-3 text-[10px] text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-400 focus:bg-white"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-[8px] font-semibold uppercase tracking-[0.1em] text-gray-500"
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project, timeline, or engineering challenge..."
                  required
                  className="w-full resize-y rounded-sm border border-gray-200 bg-[#f8f7f6] px-3 py-2.5 text-[10px] leading-5 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-400 focus:bg-white"
                />
              </div>

              {/* Submit */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-sm bg-blue-700 px-4 py-2.5 text-[10px] font-semibold text-white transition hover:bg-blue-800"
                >
                  Send Message
                  <Send size={11} />
                </button>

                <p className="flex items-center gap-1 text-[9px] text-gray-400">
                  <Clock size={11} />
                  Typically responds within 24–48 hours
                </p>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="mt-12 border-t border-gray-200 pt-5">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="text-[9px] text-gray-500">
              <span className="font-semibold text-gray-900">MI</span>
              <span className="mx-2 text-gray-300">·</span>
              © Mohammad Irfan Ansari.
              All rights reserved.
            </p>

            <p className="text-[9px] text-gray-400">
              Designed & Developed with care.
            </p>

            <a
              href="#home"
              className="inline-flex items-center gap-1 text-[9px] font-medium text-gray-600 transition hover:text-blue-700"
            >
              Back to Top
              <ArrowUp size={11} />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
