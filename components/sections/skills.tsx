
"use client";

import { motion } from "motion/react";
import {
  PanelsTopLeft,
  Server,
  Database,
  Workflow,
  BrainCircuit,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    description:
      "Designing fluid, responsive, high-performance interfaces with type-safety and state predictability.",
    icon: PanelsTopLeft,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    tags: [
      "Next.js 14+",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript ES6+",
      "HTML5 / CSS3",
      "Bootstrap",
    ],
    footer: "Primary: Next.js + TS",
    layout: "normal",
  },
  {
    title: "Backend & Services",
    description:
      "Architecting robust APIs, event brokers, websocket services, and modular microservices.",
    icon: Server,
    iconColor: "text-violet-600",
    iconBg: "bg-violet-50",
    tags: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "Server Actions",
    ],
    footer: "Focus: Event-Driven Systems",
    layout: "normal",
  },
  {
    title: "Databases & Persistence",
    description:
      "Data modeling, indexing, schema design, caching layers, and high-throughput query optimization.",
    icon: Database,
    iconColor: "text-orange-600",
    iconBg: "bg-orange-50",
    tags: [
      "MongoDB",
      "MySQL",
      "Redis Cache",
      "Prisma ORM",
      "Mongoose",
    ],
    footer: "Focus: Data Modeling & Storage",
    layout: "normal",
  },
  {
    title: "DevOps & Infrastructure",
    description:
      "Automating deployments, containerizing applications, configuring reverse proxies, and maintaining CI/CD.",
    icon: Workflow,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    tags: [
      "Docker",
      "Linux (Ubuntu/Debian)",
      "Git & GitHub Actions",
      "Vercel",
      "Render",
      "Nginx",
    ],
    footer: "Focus: Deployment & CI/CD",
    layout: "normal",
  },
  {
    title: "AI & Emerging Intelligence",
    description:
      "Exploring generative AI models, vector search, orchestration frameworks, and machine learning concepts to build context-aware software solutions.",
    icon: BrainCircuit,
    iconColor: "text-violet-600",
    iconBg: "bg-violet-50",
    tags: [
      "LLM APIs",
      "LangChain",
      "Vector Embeddings",
      "RAG Concepts",
      "Python & ML Basics",
      "Prompt Engineering",
    ],
    footer: "Interest: AI Applications & RAG",
    layout: "wide",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-gray-100 bg-[#fcfafa] px-5 py-12 sm:px-8 lg:px-12 lg:py-14"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section heading */}
        <div className="mb-6 grid gap-3 sm:grid-cols-2 sm:items-end">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-blue-700">
              02 / TECHNICAL DOMAIN
            </p>

            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
              Skills & Technical Arsenal
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-5 text-gray-600 sm:justify-self-end">
            A categorized overview of languages, frameworks, databases, and
            cloud infrastructure I engineer with.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className={`group flex flex-col rounded-md border border-gray-200/80 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md ${
                  category.layout === "wide" ? "lg:col-span-2" : ""
                }`}
              >
                {/* Icon */}
                <div
                  className={`mb-3 flex h-8 w-8 items-center justify-center rounded-sm ${category.iconBg} ${category.iconColor}`}
                >
                  <Icon size={16} strokeWidth={2} />
                </div>

                {/* Title and description */}
                <h3 className="text-sm font-semibold text-gray-900">
                  {category.title}
                </h3>

                <p className="mt-1.5 max-w-xl text-[10px] leading-[1.7] text-gray-600">
                  {category.description}
                </p>

                {/* Technology tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-gray-100 bg-[#f5f4f3] px-2 py-1 text-[9px] font-medium text-gray-700 transition-colors group-hover:border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between gap-2 border-t border-gray-100 pt-3 mt-4">
                  <span className="text-[9px] text-gray-500">
                    {category.footer}
                  </span>

                  {category.layout === "wide" && (
                    <span className="shrink-0 text-[9px] font-medium text-violet-600">
                      AI & ML Exploration
                    </span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
