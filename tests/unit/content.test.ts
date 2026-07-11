import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { describe, expect, it } from "vitest";
import { z } from "zod";

const localeSchema = z.enum(["pt", "en"]);

const experienceSchema = z.object({
  locale: localeSchema,
  translationKey: z.string().min(1),
  organization: z.string().min(1),
  role: z.string().min(1),
  startDate: z.coerce.date(),
  summary: z.string().min(1),
  draft: z.boolean().default(false),
});

const workFrontmatterSchema = z.object({
  locale: localeSchema,
  translationKey: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  publishDate: z.coerce.date(),
  role: z.string().min(1),
  heroImage: z
    .object({
      src: z.string(),
      alt: z.string().min(1),
    })
    .optional(),
  gallery: z
    .array(
      z.object({
        src: z.string(),
        alt: z.string().min(1),
      }),
    )
    .default([]),
  draft: z.boolean().default(false),
});

async function readExperienceFiles() {
  const dir = path.join(process.cwd(), "src/content/experience");
  const files = (await readdir(dir)).filter((file) => file.endsWith(".json"));
  return Promise.all(
    files.map(async (file) => {
      const raw = await readFile(path.join(dir, file), "utf8");
      return experienceSchema.parse(JSON.parse(raw));
    }),
  );
}

async function readWorkFiles() {
  const dir = path.join(process.cwd(), "src/content/work");
  const files = (await readdir(dir)).filter((file) => file.endsWith(".md"));
  return Promise.all(
    files.map(async (file) => {
      const raw = await readFile(path.join(dir, file), "utf8");
      const parsed = matter(raw);
      return workFrontmatterSchema.parse(parsed.data);
    }),
  );
}

describe("content files", () => {
  it("loads work and experience entries from disk", async () => {
    const work = await readWorkFiles();
    const experience = await readExperienceFiles();
    expect(work.length).toBeGreaterThan(0);
    expect(experience.length).toBeGreaterThan(0);
  });

  it("has matching translation keys across locales for work", async () => {
    const work = await readWorkFiles();
    const keys = new Map<string, Set<string>>();

    for (const entry of work) {
      const set = keys.get(entry.translationKey) ?? new Set<string>();
      set.add(entry.locale);
      keys.set(entry.translationKey, set);
    }

    for (const [key, locales] of keys) {
      expect(locales.has("pt"), `${key} missing pt`).toBe(true);
      expect(locales.has("en"), `${key} missing en`).toBe(true);
    }
  });

  it("has matching translation keys across locales for experience", async () => {
    const experience = await readExperienceFiles();
    const keys = new Map<string, Set<string>>();

    for (const entry of experience) {
      const set = keys.get(entry.translationKey) ?? new Set<string>();
      set.add(entry.locale);
      keys.set(entry.translationKey, set);
    }

    for (const [key, locales] of keys) {
      expect(locales.has("pt"), `${key} missing pt`).toBe(true);
      expect(locales.has("en"), `${key} missing en`).toBe(true);
    }
  });

  it("requires hero image alt text when provided", async () => {
    const work = await readWorkFiles();
    for (const entry of work) {
      if (entry.heroImage) {
        expect(entry.heroImage.alt.trim().length).toBeGreaterThan(0);
      }
      for (const image of entry.gallery) {
        expect(image.alt.trim().length).toBeGreaterThan(0);
      }
    }
  });
});
