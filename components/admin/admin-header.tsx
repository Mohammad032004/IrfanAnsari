import { Bell, Search } from "lucide-react";

interface AdminHeaderProps {
  email: string;
}

export default function AdminHeader({ email }: AdminHeaderProps) {
  return (
    <header className="flex h-[76px] items-center justify-between border-b border-gray-200 bg-white px-5 md:px-8">
      <div>
        <h1 className="text-base font-semibold text-gray-900">
          Administration
        </h1>
        <p className="text-xs text-gray-400">
          Manage your personal portfolio
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Search"
          className="hidden rounded-lg border border-gray-200 p-2 text-gray-500 hover:bg-gray-50 sm:block"
        >
          <Search size={17} />
        </button>

        <button
          type="button"
          aria-label="Notifications"
          className="rounded-lg border border-gray-200 p-2 text-gray-500 hover:bg-gray-50"
        >
          <Bell size={17} />
        </button>

        <div className="flex items-center gap-3 border-l border-gray-200 pl-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
            MI
          </div>

          <div className="hidden sm:block">
            <p className="text-xs font-semibold text-gray-800">
              Administrator
            </p>
            <p className="max-w-[160px] truncate text-[11px] text-gray-400">
              {email}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}