import { notFound } from "next/navigation";
import mongoose from "mongoose";

import { connectDB } from "@/lib/mongodb";
import Project from "@/models/project";
import ProjectForm, {
  type ProjectData,
} from "@/components/admin/project-form";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!mongoose.isValidObjectId(id)) {
    notFound();
  }

  await connectDB();

  const project = await Project.findById(id).lean();

  if (!project) {
    notFound();
  }

  const initialData: ProjectData = {
    _id: project._id.toString(),
    title: project.title,
    slug: project.slug,
    shortDescription: project.shortDescription,
    description: project.description ?? "",
    image: project.image ?? "",
    technologies: project.technologies ?? [],
    repositoryUrl: project.repositoryUrl ?? "",
    liveUrl: project.liveUrl ?? "",
    featured: project.featured ?? false,
    published: project.published ?? false,
    displayOrder: project.displayOrder ?? 0,
  };

  return <ProjectForm initialData={initialData} />;
}