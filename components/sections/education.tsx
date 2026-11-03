
"use client";

import { motion } from "motion/react";
import {
  GraduationCap,
  Award,
  BrainCircuit,
  Code2,
  Trophy,
  BookOpen,
} from "lucide-react";

const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  college: "Lucknow Public Post Graduate College",
  location: "Lucknow, Uttar Pradesh, India",
  period: "2024 — 2027",
  description:
    "In-depth coursework in Object-Oriented Programming, Relational Databases Management Systems, Data Structures & Algorithms, Computer Networks, Operating Systems, and modern software engineering methodologies.",
  focus: "Distributed Systems",
  status: "In Good Standing",
};

const milestones = [
  {
    icon: BrainCircuit,
    title: "AI Club Leadership Award",
    description:
      "Recognized for leading and contributing to technical initiatives and campus technology activities.",
    color: "text-blue-600",
  },
  {
    icon: Code2,
    title: "Full-Stack & Cloud Automation",
    description:
      "Building scalable web applications and exploring containerization, REST architecture, and deployment workflows.",
    color: "text-violet-600",
  },
  {
    icon: Trophy,
    title: "Regional Tech Symposium",
    description:
      "Key organizer and demonstrator for emerging AI and technical showcases.",
    color: "text-orange-600",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 border-t border-gray-100 bg-[#f7f5f4] px-5 py-12 sm:px-8 lg:px-12 lg:py-14"
    >
      <div className="mx-auto max-w-[1440px]">

        {/* Section Header */}
        <div className="mb-6 grid gap-3 sm:grid-cols-2 sm:items-end">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-blue-700">
              05 / CREDENTIALS
            </p>

            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
              Education & Milestones
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-5 text-gray-600 sm:justify-self-end">
            Rigorous academic foundations accompanied by continuous
            self-paced technical qualifications.
          </p>
        </div>

        {/* Two-column cards */}
        <div className="grid gap-4 lg:grid-cols-2">

          {/* Education Card */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="flex flex-col rounded-md border border-gray-200/90 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-blue-50 text-blue-600">
                <GraduationCap size={18} />
              </div>

              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[0.13em] text-blue-700">
                  FORMAL DEGREE
                </p>

                <h3 className="mt-1 text-sm font-semibold text-gray-950">
                  {education.degree}
                </h3>

                <p className="mt-1 text-[10px] text-gray-500">
                  {education.college} · {education.location}
                </p>
              </div>
            </div>

            <p className="mt-4 text-[10px] leading-[1.8] text-gray-600">
              {education.description}
            </p>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4 mt-5">
              <div>
                <p className="text-[8px] font-semibold uppercase tracking-wide text-gray-400">
                  CORE FOCUS
                </p>
                <p className="mt-1 text-[9px] font-medium text-gray-700">
                  {education.focus}
                </p>
              </div>

              <div className="text-right">
                <p className="text-[8px] font-semibold uppercase tracking-wide text-gray-400">
                  ACADEMIC STATUS
                </p>
                <p className="mt-1 text-[9px] font-medium text-blue-700">
                  {education.status}
                </p>
              </div>
            </div>
          </motion.article>

          {/* Milestones Card */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="flex flex-col rounded-md border border-gray-200/90 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-violet-50 text-violet-600">
                <Award size={18} />
              </div>

              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[0.13em] text-violet-700">
                  MILESTONES
                </p>

                <h3 className="mt-1 text-sm font-semibold text-gray-950">
                  Certifications & Accolades
                </h3>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {milestones.map((milestone) => {
                const Icon = milestone.icon;

                return (
                  <div
                    key={milestone.title}
                    className="flex items-start gap-2"
                  >
                    <Icon
                      size={12}
                      className={`mt-0.5 shrink-0 ${milestone.color}`}
                    />

                    <div>
                      <h4 className="text-[10px] font-semibold text-gray-800">
                        {milestone.title}
                      </h4>

                      <p className="mt-0.5 text-[9px] leading-[1.7] text-gray-500">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-auto flex items-center justify-between gap-3 border-t border-gray-100 pt-4 mt-5">
              <span className="text-[9px] font-medium text-gray-500">
                Continuous Professional Growth
              </span>

              <span className="text-[9px] font-medium text-violet-600">
                Learning & Development
              </span>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
