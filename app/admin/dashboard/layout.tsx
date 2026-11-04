import type { ReactNode } from "react";
import DashboardLayout from "@/components/admin/dashboard/layout";

export default function AdminDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}