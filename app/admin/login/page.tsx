import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/admin-auth";
import LoginForm from "@/components/admin/login-form";
import { Code2, ShieldCheck } from "lucide-react";

export default async function AdminLoginPage() {
  const session = await getAdminSession();

  if (session) {
    redirect("/admin/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f8fa] px-5 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <Code2 size={28} />
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Portfolio Admin
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Sign in to manage your portfolio.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Welcome back
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Enter your administrator credentials.
            </p>
          </div>

          <LoginForm />

          <div className="mt-6 flex items-center justify-center gap-2 border-t border-gray-100 pt-5 text-xs text-gray-400">
            <ShieldCheck size={14} />
            Protected administrator access
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Mohammad Irfan Ansari
        </p>
      </div>
    </main>
  );
}