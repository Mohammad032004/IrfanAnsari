import { requireAdmin } from "@/lib/admin-auth";
import AdminSidebar from "@/components/admin/admin-sidebar";
import AdminHeader from "@/components/admin/admin-header";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const admin = await requireAdmin();

  return (
    <div className="flex min-h-screen bg-[#f7f8fa]">
      <div className="hidden lg:block">
        <AdminSidebar />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <AdminHeader email={admin.email} />

        <main className="flex-1 p-5 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}