
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Natter",
    category: "Communication Platform",
    version: "In Development",
    description:
      "A modern real-time communication platform designed around instant messaging, channel architecture, presence detection, and future mobile compatibility.",
    image: "/images/projects/natter.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Flutter",
    ],
    repository: null,
    live: null,
    action: "Explore Architecture",
  },
  {
    name: "ScaleSpace",
    category: "Agency & Platform",
    version: "Web Application",
    description:
      "A digital platform focused on delivering scalable business services through a modern web experience and structured backend architecture.",
    image: "/images/projects/scalespace.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
    ],
    repository: null,
    live: null,
    action: "View Case Study",
  },
  {
    name: "GeoSnap",
    category: "Mobile & Field Utility",
    version: "Project Concept",
    description:
      "A geotagged photo application designed for field inspections, infrastructure surveys, offline-first storage, and automated cloud synchronization.",
    image: "/images/projects/geosnap.png",
    technologies: [
      "Flutter",
      "Dart",
      "SQLite",
      "Cloud Storage",
    ],
    repository: null,
    live: null,
    action: "Explore Architecture",
  },
  {
    name: "AI Club Portal",
    category: "Community Platform",
    version: "Live Website",
    description:
      "A centralized digital platform for the Lucknow Public Post Graduate College AI Club, supporting event registrations, workshops, project showcases, and member administration.",
    image: "/images/projects/ai-club.png",
    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "Tailwind CSS",
    ],
    repository: null,
    live: "https://aiclublpcps.vercel.app/",
    action: "View Project",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-gray-100 bg-[#fcfafa] px-5 py-12 sm:px-8 lg:px-12 lg:py-14"
    >
      <div className="mx-auto max-w-[1440px]">

        {/* Section Header */}
        <div className="mb-6 grid gap-3 sm:grid-cols-2 sm:items-end">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-blue-700">
              03 / APPLIED ENGINEERING
            </p>

            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
              Featured Work
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-5 text-gray-600 sm:justify-self-end">
            Selected engineering projects spanning web platforms,
            real-time systems, and infrastructure solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              className="group flex flex-col overflow-hidden rounded-md border border-gray-200/90 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-gray-100">
                <Image
                  src={project.image}
                  alt={`${project.name} project preview`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <span className="absolute left-2 top-2 rounded-sm border border-white/60 bg-white/90 px-2 py-1 text-[8px] font-medium text-gray-700 shadow-sm">
                  {project.category}
                </span>
              </div>

              {/* Project Title */}
              <div className="mt-3 flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-gray-900">
                  {project.name}
                </h3>

                <span className="text-[8px] font-medium text-blue-700">
                  {project.version}
                </span>
              </div>

              {/* Project Description */}
              <p className="mt-1.5 min-h-[48px] text-[10px] leading-[1.7] text-gray-600">
                {project.description}
              </p>

              {/* Technology Tags */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-sm bg-[#f3f2f1] px-2 py-1 text-[9px] font-medium text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Actions */}
              <div className="mt-auto mt-4 flex flex-wrap items-center gap-4 border-t border-gray-100 pt-3">

                {project.repository && (
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[9px] font-medium text-gray-700 transition hover:text-blue-700"
                  >
                    <ArrowUpRight size={11} />
                    View Repository
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[9px] font-medium text-gray-700 transition hover:text-blue-700"
                  >
                    <ExternalLink size={11} />
                    Live Demo
                  </a>
                )}

                {!project.repository && !project.live && (
                  <span className="inline-flex items-center gap-1 text-[9px] font-medium text-gray-500">
                    <ArrowUpRight size={11} />
                    {project.action}
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Projects */}
        <div className="mt-7 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-sm border border-gray-200 bg-white px-4 py-2.5 text-[11px] font-semibold text-gray-800 transition hover:border-blue-300 hover:text-blue-700"
          >
            Explore All Projects
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
