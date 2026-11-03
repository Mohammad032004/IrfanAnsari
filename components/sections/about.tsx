
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  GraduationCap,
  BrainCircuit,
  Code2,
  CloudCog,
  MapPin,
  Users,
  Trophy,
  CheckCircle2,
} from "lucide-react";

const details = [
  {
    icon: GraduationCap,
    label: "EDUCATION",
    value: "BCA, Lucknow Public PG College",
  },
  {
    icon: BrainCircuit,
    label: "LEADERSHIP",
    value: "Head, Artificial Intelligence Club",
  },
  {
    icon: Code2,
    label: "SPECIALIZATION",
    value: "Full-Stack, Cloud & AI Systems",
  },
  {
    icon: CloudCog,
    label: "METHODOLOGY",
    value: "DevOps, Containerization & CI/CD",
  },
];

const stats = [
  { value: "20+", label: "Projects Built", color: "text-blue-700" },
  { value: "500+", label: "Students Mentored", color: "text-violet-600" },
  { value: "15+", label: "Tech Stacks", color: "text-gray-900" },
  { value: "100%", label: "Craft Focus", color: "text-blue-700" },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-gray-100 bg-[#f7f5f4] px-5 py-12 sm:px-8 lg:px-12 lg:py-14"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section heading */}
        <div className="mb-6 grid gap-3 sm:grid-cols-2 sm:items-end">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-blue-700">
              01 / PROFILE OVERVIEW
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-gray-950">
              A little about me.
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-5 text-gray-600 sm:justify-self-end">
            Synthesizing software engineering discipline, systems thinking,
            and emerging intelligence.
          </p>
        </div>

        {/* Profile and biography */}
        <div className="grid items-stretch gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Profile card */}
          <motion.article
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col rounded-md border border-gray-200/80 bg-white p-3 shadow-sm"
          >
            <div className="relative aspect-[1.5/1] overflow-hidden rounded-sm bg-gray-100">
              <Image
                src="/images/profile/irfan.jpg"
                alt="Portrait of Irfan Ansari"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />

              <div className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-sm border border-white/70 bg-white/95 px-2 py-1 text-[9px] text-gray-700 shadow-sm">
                <MapPin size={10} className="text-emerald-600" />
                Lucknow, Uttar Pradesh
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-semibold text-gray-900">
                Mohammad Irfan Ansari
              </h3>
              <p className="mt-1 text-[10px] leading-4 text-gray-500">
                Technologist, student leader, and open-source enthusiast
                dedicated to writing resilient software and democratizing
                machine intelligence on campus.
              </p>
            </div>
          </motion.article>

          {/* Biography and details */}
          <div className="flex flex-col gap-3">
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-md border border-gray-200/80 bg-white p-4 shadow-sm sm:p-5"
            >
              <h3 className="text-sm font-semibold text-gray-900">
                Engineering across the complete spectrum
              </h3>

              <p className="mt-2 text-[11px] leading-[1.8] text-gray-600">
                Currently pursuing a Bachelor of Computer Applications at
                Lucknow Public Post Graduate College, I direct technical
                initiatives as Head of the Artificial Intelligence Club.
                My engineering philosophy revolves around foundational
                correctness: understanding how operating systems allocate
                memory, how networks route packets, and how distributed
                microservices stay resilient.
              </p>

              <p className="mt-2 text-[11px] leading-[1.8] text-gray-600">
                From designing real-time socket clusters to establishing
                containerized deployment workflows with Docker and modern
                CI/CD pipelines, I bridge the gap between reactive client
                experiences and scalable backends.
              </p>

              <div className="mt-4 grid gap-x-5 gap-y-4 border-t border-gray-100 pt-4 sm:grid-cols-2">
                {details.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="flex gap-2">
                      <Icon
                        size={13}
                        className="mt-0.5 shrink-0 text-blue-600"
                      />
                      <div>
                        <p className="text-[8px] font-semibold tracking-[0.1em] text-blue-700">
                          {item.label}
                        </p>
                        <p className="mt-0.5 text-[10px] leading-4 text-gray-700">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.article>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-md border border-gray-200/80 bg-white px-2 py-3 text-center shadow-sm"
                >
                  <p
                    className={`text-2xl font-semibold tracking-tight sm:text-3xl ${stat.color}`}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[9px] text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
