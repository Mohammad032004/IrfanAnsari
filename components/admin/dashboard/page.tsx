import Link from "next/link";
import {
  FolderKanban,
  Code2,
  BriefcaseBusiness,
  MessageSquare,
  ArrowUpRight,
  Plus,
  ExternalLink,
  Clock3,
} from "lucide-react";

const stats = [
  {
    label: "Total Projects",
    value: "0",
    description: "Portfolio projects",
    icon: FolderKanban,
  },
  {
    label: "Technical Skills",
    value: "0",
    description: "Technologies listed",
    icon: Code2,
  },
  {
    label: "Experience",
    value: "0",
    description: "Experience entries",
    icon: BriefcaseBusiness,
  },
  {
    label: "Messages",
    value: "0",
    description: "Contact submissions",
    icon: MessageSquare,
  },
];

const actions = [
  {
    title: "Add a new project",
    description: "Showcase something you've built.",
    href: "/admin/dashboard/projects/new",
    icon: FolderKanban,
  },
  {
    title: "Update technical skills",
    description: "Keep your technology stack updated.",
    href: "/admin/dashboard/skills",
    icon: Code2,
  },
  {
    title: "Update experience",
    description: "Manage your professional journey.",
    href: "/admin/dashboard/experience",
    icon: BriefcaseBusiness,
  },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-[1400px] space-y-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="mb-2 text-xs font-medium text-blue-600">
            PORTFOLIO MANAGEMENT
          </p>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Dashboard Overview
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Welcome back! Here's an overview of your portfolio.
          </p>
        </div>

        <Link
          href="/admin/dashboard/projects/new"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          <Plus size={17} />
          Add Project
        </Link>
      </div>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="rounded-2xl border border-gray-200 bg-white p-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-500">
                  {stat.label}
                </p>
                <div className="rounded-xl bg-blue-50 p-2.5 text-blue-600">
                  <Icon size={19} />
                </div>
              </div>

              <p className="mt-5 text-3xl font-bold tracking-tight text-gray-900">
                {stat.value}
              </p>

              <p className="mt-1 text-xs text-gray-400">
                {stat.description}
              </p>
            </div>
          );
        })}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-gray-900">
                Quick Actions
              </h2>
              <p className="mt-1 text-xs text-gray-400">
                Common portfolio management tasks
              </p>
            </div>

            <Clock3 size={19} className="text-gray-400" />
          </div>

          <div className="space-y-3">
            {actions.map((action) => {
              const Icon = action.icon;

              return (
                <Link
                  key={action.title}
                  href={action.href}
                  className="group flex items-center gap-4 rounded-xl border border-gray-100 p-4 transition hover:border-blue-200 hover:bg-blue-50/40"
                >
                  <div className="rounded-xl bg-gray-50 p-3 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600">
                    <Icon size={20} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-gray-800">
                      {action.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-400">
                      {action.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-gray-400 transition group-hover:text-blue-600"
                  />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6">
          <div>
            <h2 className="font-semibold text-gray-900">
              Portfolio Status
            </h2>
            <p className="mt-1 text-xs text-gray-400">
              Your public-facing website
            </p>
          </div>

          <div className="mt-6 rounded-xl bg-green-50 p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-green-700">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Admin dashboard active
            </div>
            <p className="mt-2 text-xs leading-5 text-green-700/80">
              Your administrator interface is ready. Content management and
              database statistics will be connected as we build the modules.
            </p>
          </div>

          <div className="mt-auto pt-6">
            <Link
              href="/"
              target="_blank"
              className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              View Public Portfolio
              <ExternalLink size={15} />
            </Link>
          </div>
        </div>
      </section>

      <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6 text-center">
        <p className="text-sm font-semibold text-gray-800">
          Your portfolio management workspace
        </p>
        <p className="mx-auto mt-2 max-w-lg text-xs leading-5 text-gray-400">
          Project management, skills, experience, education, profile settings,
          and contact messages will appear here as their modules are
          implemented.
        </p>
      </div>
    </div>
  );
}