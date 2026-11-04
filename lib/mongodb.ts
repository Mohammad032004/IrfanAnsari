import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env.local");
}

export async function connectDB() {
  try {
    if (mongoose.connection.readyState === 1) {
      return mongoose;
    }

    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected successfully");

    return mongoose;
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
}