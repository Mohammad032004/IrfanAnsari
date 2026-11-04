"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  ExternalLink,
  FolderKanban,
  Star,
  Loader2,
} from "lucide-react";

interface Project {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  featured: boolean;
  published: boolean;
  createdAt: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProjects = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/projects", {
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to load projects.");
      }

      setProjects(data.projects);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  async function deleteProject(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to permanently delete this project?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(`/api/admin/projects/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to delete project.");
      }

      setProjects((current) => current.filter((project) => project._id !== id));
    } catch (error) {
      window.alert(
        error instanceof Error ? error.message : "Unable to delete project."
      );
    }
  }

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(search.toLowerCase())
      );

    const matchesFilter =
      filter === "all" ||
      (filter === "published" && project.published) ||
      (filter === "draft" && !project.published) ||
      (filter === "featured" && project.featured);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="mx-auto max-w-[1400px] space-y-7">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="mb-2 text-xs font-medium text-blue-600">
            CONTENT MANAGEMENT
          </p>
          <h1 className="text-2xl font-bold text-gray-900">
            Projects
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage the projects displayed on your portfolio.
          </p>
        </div>

        <Link
          href="/admin/dashboard/projects/new"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          <Plus size={17} />
          Add Project
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "Total Projects", value: projects.length },
          { label: "Published", value: projects.filter((p) => p.published).length },
          { label: "Drafts", value: projects.filter((p) => !p.published).length },
          { label: "Featured", value: projects.filter((p) => p.featured).length },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-gray-200 bg-white p-4"
          >
            <p className="text-xs text-gray-500">{item.label}</p>
            <p className="mt-2 text-2xl font-bold text-gray-900">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white">
        <div className="flex flex-col gap-4 border-b border-gray-100 p-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-sm">
            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search projects or technologies..."
              className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-500"
            />
          </div>

          <select
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none focus:border-blue-500"
          >
            <option value="all">All Projects</option>
            <option value="published">Published</option>
            <option value="draft">Drafts</option>
            <option value="featured">Featured</option>
          </select>
        </div>

        {loading ? (
          <div className="flex min-h-64 items-center justify-center gap-3 text-sm text-gray-400">
            <Loader2 className="animate-spin" size={20} />
            Loading projects...
          </div>
        ) : error ? (
          <div className="p-10 text-center">
            <p className="text-sm text-red-600">{error}</p>
            <button
              onClick={fetchProjects}
              className="mt-4 text-sm font-medium text-blue-600"
            >
              Try again
            </button>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="flex flex-col items-center justify-center px-5 py-16 text-center">
            <div className="mb-4 rounded-2xl bg-gray-50 p-4 text-gray-400">
              <FolderKanban size={28} />
            </div>
            <h3 className="font-semibold text-gray-900">
              No projects found
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Add your first project or change your search filters.
            </p>
            <Link
              href="/admin/dashboard/projects/new"
              className="mt-5 text-sm font-semibold text-blue-600"
            >
              Create your first project
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filteredProjects.map((project) => (
              <div
                key={project._id}
                className="flex flex-col gap-4 p-5 transition hover:bg-gray-50/70 sm:flex-row sm:items-center"
              >
                <div className="flex h-16 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                  {project.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <FolderKanban size={22} className="text-gray-300" />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-gray-900">
                      {project.title}
                    </h3>

                    {project.featured && (
                      <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1 text-[10px] font-medium text-amber-700">
                        <Star size={11} />
                        Featured
                      </span>
                    )}

                    <span
                      className={`rounded-md px-2 py-1 text-[10px] font-medium ${
                        project.published
                          ? "bg-green-50 text-green-700"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {project.published ? "Published" : "Draft"}
                    </span>
                  </div>

                  <p className="mt-1 line-clamp-1 text-xs text-gray-500">
                    {project.shortDescription}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-gray-100 px-2 py-1 text-[10px] text-gray-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:justify-end">
                  <Link
                    href={`/admin/dashboard/projects/${project._id}/edit`}
                    aria-label={`Edit ${project.title}`}
                    className="rounded-lg border border-gray-200 p-2.5 text-gray-500 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Pencil size={16} />
                  </Link>

                  <button
                    type="button"
                    onClick={() => deleteProject(project._id)}
                    aria-label={`Delete ${project.title}`}
                    className="rounded-lg border border-gray-200 p-2.5 text-gray-500 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="border-t border-gray-100 px-5 py-4 text-xs text-gray-400">
          Showing {filteredProjects.length} of {projects.length} projects
        </div>
      </div>
    </div>
  );
}