import type { Locale } from "@/i18n/utils";

export function formatDate(
  date: Date,
  locale: Locale,
  options?: Intl.DateTimeFormatOptions,
): string {
  return new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en-US", options).format(date);
}

export function formatDateRange(
  start: Date,
  end: Date | undefined,
  locale: Locale,
  presentLabel: string,
  current = false,
): string {
  const startLabel = formatDate(start, locale, { month: "short", year: "numeric" });
  if (current || !end) {
    return `${startLabel} - ${presentLabel}`;
  }
  const endLabel = formatDate(end, locale, { month: "short", year: "numeric" });
  return `${startLabel} - ${endLabel}`;
}

export function sortByOrder<T extends { data: { order?: number } }>(items: T[]): T[] {
  return [...items].sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0));
}

export function sortByDateDesc<T extends { data: { startDate?: Date; publishDate?: Date } }>(
  items: T[],
): T[] {
  return [...items].sort((a, b) => {
    const aDate = a.data.startDate ?? a.data.publishDate ?? new Date(0);
    const bDate = b.data.startDate ?? b.data.publishDate ?? new Date(0);
    return bDate.getTime() - aDate.getTime();
  });
}

export function getWorkSlug(entry: { id: string; data: { locale: Locale } }): string {
  return entry.id.replace(/\.(md|mdx)$/, "");
}
