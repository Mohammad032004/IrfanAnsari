import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().trim().min(2).max(100),
  slug: z
    .string()
    .trim()
    .min(2)
    .max(120)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase letters, numbers and hyphens."),
  shortDescription: z.string().trim().min(10).max(200),
  description: z.string().max(5000).default(""),
  image: z.string().max(1000).default(""),
  technologies: z.array(z.string().trim().min(1).max(40)).max(20),
  repositoryUrl: z.union([z.literal(""), z.string().url()]).default(""),
  liveUrl: z.union([z.literal(""), z.string().url()]).default(""),
  featured: z.boolean().default(false),
  published: z.boolean().default(false),
  displayOrder: z.number().int().min(0).max(10000).default(0),
});

export type ProjectInput = z.infer<typeof projectSchema>;