
"use client";

import { motion } from "motion/react";
import {
  BrainCircuit,
  Code2,
  Trophy,
  CircleCheck,
} from "lucide-react";

const experiences = [
  {
    category: "LEADERSHIP ROLE",
    title: "Head of Artificial Intelligence Club",
    organization: "Lucknow Public Post Graduate College · Student Technical Council",
    period: "2026 — Present",
    icon: BrainCircuit,
    color: "text-blue-600",
    achievements: [
      "Leading a vibrant technical collective of students, conducting hands-on workshops in machine learning, AI, and modern web technologies.",
      "Conceptualized and organized AI Club initiatives, technical events, hackathons, and student engagement activities.",
      "Coordinating internal project showcases, technical sessions, and mentorship opportunities for junior computer science students.",
    ],
  },
  {
    category: "ENGINEERING & COMMUNITY",
    title: "Full-Stack Development & Open Source",
    organization: "Self-Directed · GitHub Ecosystem",
    period: "2022 — Present",
    icon: Code2,
    color: "text-violet-600",
    achievements: [
      "Engineered web applications using modern technologies including Next.js, React, TypeScript, Node.js, and MongoDB.",
      "Building scalable application architectures, REST APIs, authentication systems, and responsive user interfaces.",
      "Exploring DevOps practices, containerization, deployment workflows, and collaborative software development.",
    ],
  },
  {
    category: "COLLABORATIVE EVENTS",
    title: "Hackathons & Technical Symposiums",
    organization: "Regional · Collegiate Competitions",
    period: "2025 — Present",
    icon: Trophy,
    color: "text-orange-600",
    achievements: [
      "Participated in technical hackathons and collaborative development challenges, transforming ideas into working prototypes.",
      "Contributed to Smart India Hackathon initiatives and campus-level technical events.",
      "Supported the organization of student-focused technical events, workshops, and cybersecurity activities.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-gray-100 bg-[#fcfafa] px-5 py-12 sm:px-8 lg:px-12 lg:py-14"
    >
      <div className="mx-auto max-w-[1440px]">

        {/* Section Header */}
        <div className="mb-7 grid gap-3 sm:grid-cols-2 sm:items-end">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-blue-700">
              04 / TRAJECTORY
            </p>

            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
              Experience & Leadership
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-5 text-gray-600 sm:justify-self-end">
            Bridging student leadership with hands-on systems
            implementation and community empowerment.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-4 pl-3 sm:pl-4">

          {/* Timeline vertical line */}
          <div className="absolute bottom-5 left-[4px] top-2 w-px bg-gradient-to-b from-blue-500 via-violet-500 to-gray-200 sm:left-[5px]" />

          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <motion.article
                key={experience.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.1,
                }}
                className="relative ml-2 rounded-md border border-gray-200/90 bg-white p-4 shadow-sm transition duration-300 hover:border-blue-200 hover:shadow-md sm:ml-3 sm:p-5"
              >
                {/* Timeline dot */}
                <span
                  className={`absolute -left-[17px] top-5 h-2 w-2 rounded-full border-2 border-white ${
                    index === 0
                      ? "bg-blue-600"
                      : index === 1
                        ? "bg-violet-600"
                        : "bg-gray-400"
                  }`}
                />

                {/* Card header */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[8px] font-semibold uppercase tracking-[0.13em] text-blue-700">
                      {experience.category}
                    </p>

                    <h3 className="mt-1 text-sm font-semibold text-gray-950 sm:text-base">
                      {experience.title}
                    </h3>

                    <p className="mt-1 text-[10px] leading-4 text-gray-500">
                      {experience.organization}
                    </p>
                  </div>

                  <span className="shrink-0 rounded-sm bg-gray-50 px-2 py-1 text-[9px] font-medium text-gray-600">
                    {experience.period}
                  </span>
                </div>

                {/* Achievements */}
                <ul className="mt-3 space-y-2 border-t border-gray-100 pt-3">
                  {experience.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-start gap-2 text-[10px] leading-[1.7] text-gray-600"
                    >
                      <CircleCheck
                        size={11}
                        className={`mt-0.5 shrink-0 ${experience.color}`}
                      />

                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Role icon */}
                <div className="absolute bottom-4 right-4 hidden opacity-[0.07] sm:block">
                  <Icon size={42} />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
