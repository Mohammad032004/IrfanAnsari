
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { createAdminSession } from "@/lib/admin-auth";

const loginSchema = z.object({
  email: z.string().email().max(254),
  password: z.string().min(1).max(128),
});

export async function POST(request: NextRequest) {
  try {
    // Read request body
    const body = await request.json();

    // Validate input
    const result = loginSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { message: "Please enter valid login details." },
        { status: 400 }
      );
    }

    const { email, password } = result.data;

    // Read credentials from environment variables
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    // Check environment configuration
    if (!adminEmail || !adminPassword) {
      console.error("Admin credentials are not configured.");

      return NextResponse.json(
        { message: "Admin authentication is not configured." },
        { status: 500 }
      );
    }

    // Verify email
    const emailMatches =
      email.trim().toLowerCase() ===
      adminEmail.trim().toLowerCase();

    // Verify password (local development only)
    const passwordMatches =
      password === adminPassword;

    // Reject invalid credentials
    if (!emailMatches || !passwordMatches) {
      return NextResponse.json(
        { message: "Incorrect email or password." },
        { status: 401 }
      );
    }

    // Create authenticated admin session
    await createAdminSession(adminEmail);

    // Successful login
    return NextResponse.json(
      {
        success: true,
        message: "Login successful.",
        redirectTo: "/admin/dashboard",
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Admin login error:", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
