import { defineCollection, z } from "astro:content";

const localeSchema = z.enum(["pt", "en"]);

const imageSchema = z.object({
  src: z.string(),
  alt: z.string().min(1),
  caption: z.string().optional(),
});

const linkSchema = z.object({
  label: z.string(),
  url: z.string().url(),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    locale: localeSchema,
    translationKey: z.string().min(1),
    title: z.string().min(1),
    summary: z.string().min(1),
    publishDate: z.coerce.date(),
    status: z.enum(["completed", "in-progress", "concept"]).default("completed"),
    featured: z.boolean().default(false),
    order: z.number().int().default(0),
    client: z.string().optional(),
    context: z.string().optional(),
    role: z.string().min(1),
    collaborators: z.array(z.string()).default([]),
    duration: z.string().optional(),
    disciplines: z.array(z.string()).default([]),
    tools: z.array(z.string()).default([]),
    heroImage: imageSchema.optional(),
    gallery: z.array(imageSchema).default([]),
    externalLinks: z.array(linkSchema).default([]),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  type: "data",
  schema: z.object({
    locale: localeSchema,
    translationKey: z.string().min(1),
    organization: z.string().min(1),
    role: z.string().min(1),
    employmentType: z
      .enum(["full-time", "part-time", "contract", "freelance", "internship", "education"])
      .default("full-time"),
    location: z.string().optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    current: z.boolean().default(false),
    summary: z.string().min(1),
    achievements: z.array(z.string()).default([]),
    skills: z.array(z.string()).default([]),
    organizationUrl: z.string().url().optional(),
    order: z.number().int().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, experience };
