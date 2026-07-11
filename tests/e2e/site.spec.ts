import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = [
  "/",
  "/pt/",
  "/en/",
  "/pt/contact/",
  "/en/contact/",
  "/pt/work/sample-app-design-pt/",
];

for (const route of routes) {
  test(`route renders: ${route}`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator("main, .locale-gateway")).toBeVisible();
  });
}

test("locale gateway links work without javascript dependency", async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "language", {
      get: () => "pt-BR",
    });
  });
  await page.goto("/");
  await expect(page.getByRole("link", { name: /Continuar em português/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /Continue in English/i })).toBeVisible();
});

test("mobile menu toggles", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/pt/");
  const toggle = page.getByRole("button", { name: /Abrir menu|Open menu/i });
  await toggle.click();
  await expect(page.locator("#mobile-navigation")).toHaveClass(/is-open/);
});

test("homepage has no horizontal overflow on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/pt/");
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth <= window.innerWidth + 1,
  );
  expect(overflow).toBe(true);
});

test("pt homepage passes basic axe checks", async ({ page }) => {
  await page.goto("/pt/");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test("en homepage passes basic axe checks", async ({ page }) => {
  await page.goto("/en/");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test("theme toggle switches to dark mode and persists", async ({ page }) => {
  await page.goto("/en/");
  await page.evaluate(() => localStorage.setItem("theme", "light"));
  await page.reload();

  const toggle = page.locator("[data-theme-toggle]");
  await expect(toggle).toHaveAttribute("aria-label", /Switch to dark mode/i);
  await toggle.click();

  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(toggle).toHaveAttribute("aria-pressed", "true");
  await expect(toggle).toHaveAttribute("aria-label", /Switch to light mode/i);

  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("pt homepage passes basic axe checks in dark theme", async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("theme", "dark");
  });
  await page.goto("/pt/");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test("en homepage passes basic axe checks in dark theme", async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("theme", "dark");
  });
  await page.goto("/en/");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
