import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { getAdminSession } from "@/lib/admin-auth";
import Project from "@/models/project";
import { projectSchema } from "@/lib/validations/project";

export const runtime = "nodejs";

export async function GET() {
  const session = await getAdminSession();

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();

    const projects = await Project.find()
      .sort({ displayOrder: 1, createdAt: -1 })
      .lean();

    return NextResponse.json({ projects });
  } catch (error) {
    console.error("Fetch projects error:", error);
    return NextResponse.json(
      { message: "Unable to fetch projects." },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const session = await getAdminSession();

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
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

    const existingProject = await Project.findOne({
      slug: result.data.slug,
    });

    if (existingProject) {
      return NextResponse.json(
        { message: "A project with this slug already exists." },
        { status: 409 }
      );
    }

    const project = await Project.create(result.data);

    return NextResponse.json(
      { message: "Project created successfully.", project },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create project error:", error);
    return NextResponse.json(
      { message: "Unable to create project." },
      { status: 500 }
    );
  }
}