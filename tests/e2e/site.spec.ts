import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = ["/", "/pt/", "/en/"];

for (const route of routes) {
  test(`route renders: ${route}`, async ({ page }) => {
    if (route === "/") {
      await page.goto(route, { waitUntil: "commit" });
      await expect(page).toHaveURL(/\/(pt|en)\/$/);
      return;
    }
    await page.goto(route);
    await expect(page.locator("main")).toBeVisible();
  });
}

test("root redirects to locale resume based on browser language", async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "language", {
      get: () => "en-US",
    });
    localStorage.removeItem("lang");
  });
  await page.goto("/", { waitUntil: "commit" });
  await expect(page).toHaveURL(/\/en\/$/);
});

test("mobile drawer opens navigation links", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/pt/");
  const toggle = page.getByRole("button", { name: /Abrir menu|Open menu/i });
  await toggle.click();
  await expect(page.getByRole("link", { name: /Experiência|Experience/i }).first()).toBeVisible();
});

test("experience tabs switch between experience and education", async ({ page }) => {
  await page.goto("/en/#experience");
  const educationTab = page.getByRole("tab", { name: /Education/i });
  await expect(educationTab).toBeVisible();
  await educationTab.click();
  await expect(page.locator("#experience").getByText(/Design Degree/i)).toBeVisible();
});

test("work dialog opens case study content", async ({ page }) => {
  await page.goto("/en/#work");
  const readButton = page.getByRole("button", { name: /Read case study/i });
  await expect(readButton).toBeVisible();
  await readButton.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("heading", { name: /TODO_CONTENT: App design name/i })).toBeVisible();
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
