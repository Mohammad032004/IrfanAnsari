import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

import { connectDB } from "@/lib/mongodb";
import { getAdminSession } from "@/lib/admin-auth";
import Project from "@/models/project";
import { projectSchema } from "@/lib/validations/project";

type RouteContext = {
  params: Promise<{ id: string }>;
};

async function authorize() {
  return await getAdminSession();
}

export async function GET(
  _request: NextRequest,
  { params }: RouteContext
) {
  const session = await authorize();

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;

    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json({ message: "Invalid project ID." }, { status: 400 });
    }

    await connectDB();

    const project = await Project.findById(id).lean();

    if (!project) {
      return NextResponse.json({ message: "Project not found." }, { status: 404 });
    }

    return NextResponse.json({ project });
  } catch (error) {
    console.error("Get project error:", error);
    return NextResponse.json({ message: "Unable to fetch project." }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: RouteContext
) {
  const session = await authorize();

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;

    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json({ message: "Invalid project ID." }, { status: 400 });
    }

    const body = await request.json();
    const result = projectSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          message: "Please check the project details.",
          errors: result.error.flatten(),
        },
        { status: 400 }
      );
    }

    await connectDB();

    const duplicate = await Project.findOne({
      slug: result.data.slug,
      _id: { $ne: id },
    });

    if (duplicate) {
      return NextResponse.json(
        { message: "Another project already uses this slug." },
        { status: 409 }
      );
    }

    const project = await Project.findByIdAndUpdate(
      id,
      result.data,
      { new: true, runValidators: true }
    );

    if (!project) {
      return NextResponse.json({ message: "Project not found." }, { status: 404 });
    }

    return NextResponse.json({
      message: "Project updated successfully.",
      project,
    });
  } catch (error) {
    console.error("Update project error:", error);
    return NextResponse.json({ message: "Unable to update project." }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: RouteContext
) {
  const session = await authorize();

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;

    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json({ message: "Invalid project ID." }, { status: 400 });
    }

    await connectDB();

    const project = await Project.findByIdAndDelete(id);

    if (!project) {
      return NextResponse.json({ message: "Project not found." }, { status: 404 });
    }

    return NextResponse.json({ message: "Project deleted successfully." });
  } catch (error) {
    console.error("Delete project error:", error);
    return NextResponse.json({ message: "Unable to delete project." }, { status: 500 });
  }
}