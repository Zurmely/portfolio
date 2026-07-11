/// <reference types="astro/client" />

import { defineConfig } from "vitest/config";
import { getViteConfig } from "astro/config";

export default defineConfig(
  await getViteConfig({
    test: {
      include: ["tests/unit/**/*.test.ts"],
      environment: "node",
    },
  }),
);
