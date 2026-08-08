import { readFile } from "node:fs/promises";
import path from "node:path";
import { describe, expect, it } from "vitest";

const routes = ["pt/index.html", "en/index.html"];

describe("static build output", () => {
  it("renders resume pages with expected interactive islands", async () => {
    for (const route of routes) {
      const html = await readFile(path.join(process.cwd(), "dist", route), "utf8");
      expect(html).toContain("astro-island");
      expect(html).toMatch(/_astro\/client\./);
      expect(html).toContain('id="about"');
      expect(html).toContain('id="experience"');
      expect(html).toContain('id="work"');
      expect(html).toContain('id="skills"');
      expect(html).toContain('id="contact"');
    }
  });
});
