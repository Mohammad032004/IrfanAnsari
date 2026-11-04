"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  Code2,
  BriefcaseBusiness,
  GraduationCap,
  MessageSquare,
  UserRound,
  Settings,
  LogOut,
  ExternalLink,
  PanelLeftClose,
} from "lucide-react";
import { useState } from "react";

const navigation = [
  {
    title: "OVERVIEW",
    items: [
      { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    ],
  },
  {
    title: "PROJECTS",
    items: [
      { label: "Projects", href: "/admin/dashboard/projects", icon: FolderKanban },
    ],
  },
  {
    title: "CONTENT MANAGEMENT",
    items: [
      { label: "Projects", href: "/admin/dashboard/projects", icon: FolderKanban },
      { label: "Skills", href: "/admin/dashboard/skills", icon: Code2 },
      { label: "Experience", href: "/admin/dashboard/experience", icon: BriefcaseBusiness },
      { label: "Education", href: "/admin/dashboard/education", icon: GraduationCap },
    ],
  },
  {
    title: "COMMUNICATION",
    items: [
      { label: "Messages", href: "/admin/dashboard/messages", icon: MessageSquare },
    ],
  },
  {
    title: "PREFERENCES",
    items: [
      { label: "Profile", href: "/admin/dashboard/profile", icon: UserRound },
      { label: "Settings", href: "/admin/dashboard/settings", icon: Settings },
    ],
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);

    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.replace("/admin/login");
      router.refresh();
    } finally {
      setLoggingOut(false);
    }
  }

  return (
    <aside className="flex h-screen w-[260px] shrink-0 flex-col border-r border-gray-200 bg-white">
      <div className="flex h-[76px] items-center gap-3 border-b border-gray-100 px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
          <Code2 size={21} />
        </div>

        <div>
          <h2 className="text-sm font-bold text-gray-900">Portfolio Admin</h2>
          <p className="text-xs text-gray-400">Management Console</p>
        </div>
      </div>

      <div className="flex-1 space-y-7 overflow-y-auto px-4 py-6">
        {navigation.map((group) => (
          <div key={group.title}>
            <p className="mb-3 px-3 text-[10px] font-semibold tracking-[0.12em] text-gray-400">
              {group.title}
            </p>

            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium transition ${
                      active
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <Icon size={17} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-2 border-t border-gray-100 p-4">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900"
        >
          <ExternalLink size={17} />
          View Portfolio
        </Link>

        <button
          onClick={handleLogout}
          disabled={loggingOut}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-red-500 hover:bg-red-50 disabled:opacity-50"
        >
          <LogOut size={17} />
          {loggingOut ? "Signing out..." : "Sign out"}
        </button>
      </div>
    </aside>
  );
}