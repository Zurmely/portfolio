import { readFile } from "node:fs/promises";
import path from "node:path";
import { describe, expect, it } from "vitest";

const routes = [
  "pt/index.html",
  "en/index.html",
  "pt/contact/index.html",
  "en/work/sample-app-design-en/index.html",
];

describe("static build output", () => {
  it("renders key routes without React hydration islands", async () => {
    for (const route of routes) {
      const html = await readFile(path.join(process.cwd(), "dist", route), "utf8");
      expect(html).not.toContain("astro-island");
      expect(html).not.toMatch(/_astro\/client\./);
    }
  });
});
