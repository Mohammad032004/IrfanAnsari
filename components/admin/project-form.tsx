"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ImagePlus, Loader2, Save, X } from "lucide-react";

export interface ProjectData {
  _id?: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;
  technologies: string[];
  repositoryUrl: string;
  liveUrl: string;
  featured: boolean;
  published: boolean;
  displayOrder: number;
}

const emptyProject: ProjectData = {
  title: "",
  slug: "",
  shortDescription: "",
  description: "",
  image: "",
  technologies: [],
  repositoryUrl: "",
  liveUrl: "",
  featured: false,
  published: false,
  displayOrder: 0,
};

interface ProjectFormProps {
  initialData?: ProjectData;
}

export default function ProjectForm({ initialData }: ProjectFormProps) {
  const router = useRouter();

  const [form, setForm] = useState<ProjectData>(
    initialData ?? emptyProject
  );
  const [technologyInput, setTechnologyInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isEditing = Boolean(initialData?._id);

  function updateField<K extends keyof ProjectData>(
    field: K,
    value: ProjectData[K]
  ) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function generateSlug(value: string) {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function addTechnology() {
    const value = technologyInput.trim();

    if (!value || form.technologies.includes(value)) return;

    updateField("technologies", [...form.technologies, value]);
    setTechnologyInput("");
  }

  function removeTechnology(value: string) {
    updateField(
      "technologies",
      form.technologies.filter((item) => item !== value)
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const endpoint = isEditing
        ? `/api/admin/projects/${initialData?._id}`
        : "/api/admin/projects";

      const response = await fetch(endpoint, {
        method: isEditing ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Unable to save project.");
        return;
      }

      router.push("/admin/dashboard/projects");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <Link
            href="/admin/dashboard/projects"
            className="mb-3 inline-flex items-center gap-2 text-xs text-gray-500 hover:text-blue-600"
          >
            <ArrowLeft size={14} />
            Back to projects
          </Link>

          <h1 className="text-2xl font-bold text-gray-900">
            {isEditing ? "Edit Project" : "Add New Project"}
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Enter the details you want to display in your portfolio.
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? (
            <Loader2 size={17} className="animate-spin" />
          ) : (
            <Save size={17} />
          )}
          {loading ? "Saving..." : "Save Project"}
        </button>
      </div>

      {error && (
        <p role="alert" className="rounded-xl bg-red-50 p-4 text-sm text-red-600">
          {error}
        </p>
      )}

      <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <section className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6">
            <div>
              <h2 className="font-semibold text-gray-900">Basic Information</h2>
              <p className="mt-1 text-xs text-gray-400">
                Main project details and description.
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Project Title *
              </label>
              <input
                required
                maxLength={100}
                className={inputClass}
                placeholder="e.g. GeoSnap"
                value={form.title}
                onChange={(event) => {
                  const title = event.target.value;
                  setForm((current) => ({
                    ...current,
                    title,
                    slug: current._id ? current.slug : generateSlug(title),
                  }));
                }}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                URL Slug *
              </label>
              <input
                required
                className={inputClass}
                placeholder="geosnap"
                value={form.slug}
                onChange={(event) => updateField("slug", generateSlug(event.target.value))}
              />
              <p className="mt-2 text-xs text-gray-400">
                Unique identifier: {form.slug || "your-project-slug"}
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Short Description *
              </label>
              <textarea
                required
                rows={3}
                maxLength={200}
                className={inputClass}
                placeholder="Write a short summary of this project..."
                value={form.shortDescription}
                onChange={(event) => updateField("shortDescription", event.target.value)}
              />
              <p className="mt-1 text-right text-xs text-gray-400">
                {form.shortDescription.length}/200
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Full Description
              </label>
              <textarea
                rows={6}
                maxLength={5000}
                className={inputClass}
                placeholder="Explain the problem, solution, features and implementation..."
                value={form.description}
                onChange={(event) => updateField("description", event.target.value)}
              />
            </div>
          </section>

          <section className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6">
            <div>
              <h2 className="font-semibold text-gray-900">Technologies</h2>
              <p className="mt-1 text-xs text-gray-400">
                Add the technologies used to build this project.
              </p>
            </div>

            <div className="flex gap-2">
              <input
                className={inputClass}
                placeholder="e.g. Next.js"
                value={technologyInput}
                onChange={(event) => setTechnologyInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    addTechnology();
                  }
                }}
              />

              <button
                type="button"
                onClick={addTechnology}
                className="rounded-xl bg-gray-900 px-5 text-sm font-medium text-white hover:bg-gray-700"
              >
                Add
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {form.technologies.map((technology) => (
                <span
                  key={technology}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-xs font-medium text-blue-700"
                >
                  {technology}
                  <button
                    type="button"
                    onClick={() => removeTechnology(technology)}
                    aria-label={`Remove ${technology}`}
                  >
                    <X size={13} />
                  </button>
                </span>
              ))}

              {form.technologies.length === 0 && (
                <p className="text-xs text-gray-400">
                  No technologies added yet.
                </p>
              )}
            </div>
          </section>

          <section className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6">
            <div>
              <h2 className="font-semibold text-gray-900">Project Links</h2>
              <p className="mt-1 text-xs text-gray-400">
                Add the relevant project URLs.
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Repository URL
              </label>
              <input
                type="url"
                className={inputClass}
                placeholder="https://..."
                value={form.repositoryUrl}
                onChange={(event) => updateField("repositoryUrl", event.target.value)}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Live Demo URL
              </label>
              <input
                type="url"
                className={inputClass}
                placeholder="https://..."
                value={form.liveUrl}
                onChange={(event) => updateField("liveUrl", event.target.value)}
              />
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="font-semibold text-gray-900">Project Image</h2>

            <div className="flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-dashed border-gray-300 bg-gray-50">
              {form.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={form.image}
                  alt="Project preview"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="text-center text-gray-400">
                  <ImagePlus className="mx-auto mb-2" size={28} />
                  <p className="text-xs">Image preview</p>
                </div>
              )}
            </div>

            <input
              className={inputClass}
              placeholder="Enter image URL"
              value={form.image}
              onChange={(event) => updateField("image", event.target.value)}
            />
            <p className="text-xs text-gray-400">
              Use an accessible image URL for now.
            </p>
          </section>

          <section className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="font-semibold text-gray-900">Publishing</h2>

            <label className="flex items-start justify-between gap-3">
              <span>
                <span className="block text-sm font-medium text-gray-700">
                  Featured Project
                </span>
                <span className="mt-1 block text-xs text-gray-400">
                  Highlight this project.
                </span>
              </span>
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(event) => updateField("featured", event.target.checked)}
                className="mt-1 h-4 w-4 accent-blue-600"
              />
            </label>

            <div className="border-t border-gray-100" />

            <label className="flex items-start justify-between gap-3">
              <span>
                <span className="block text-sm font-medium text-gray-700">
                  Published
                </span>
                <span className="mt-1 block text-xs text-gray-400">
                  Make this project available on your portfolio.
                </span>
              </span>
              <input
                type="checkbox"
                checked={form.published}
                onChange={(event) => updateField("published", event.target.checked)}
                className="mt-1 h-4 w-4 accent-blue-600"
              />
            </label>

            <div className="border-t border-gray-100" />

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Display Order
              </label>
              <input
                type="number"
                min={0}
                max={10000}
                className={inputClass}
                value={form.displayOrder}
                onChange={(event) => updateField("displayOrder", Number(event.target.value))}
              />
            </div>
          </section>
        </aside>
      </div>
    </form>
  );
}