export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocalizedPath(locale: Locale, path = ""): string {
  const normalized = path.startsWith("/") ? path : path ? `/${path}` : "";
  return `/${locale}${normalized}${normalized && !normalized.endsWith("/") ? "/" : normalized ? "" : "/"}`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "pt" ? "en" : "pt";
}

export function getLocaleLabel(locale: Locale): string {
  return locale === "pt" ? "Português" : "English";
}

export function getLocaleShortLabel(locale: Locale): string {
  return locale.toUpperCase();
}
