import mongoose, { Schema, models, model } from "mongoose";

const AdminUserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    name: {
      type: String,
      default: "Administrator",
    },
    role: {
      type: String,
      default: "admin",
    },
    lastLogin: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const AdminUser =
  models.AdminUser || model("AdminUser", AdminUserSchema);

export default AdminUser;