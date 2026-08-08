import { Link } from "@z-ux/ui/link";
import { Separator } from "@z-ux/ui/separator";
import { Stack } from "@z-ux/ui/stack";
import { getLocaleShortLabel } from "@/i18n/utils";

type LocaleSwitcherNavProps = {
  locale: "pt" | "en";
  alternateHref: string;
};

export default function LocaleSwitcherNav({ locale, alternateHref }: LocaleSwitcherNavProps) {
  const alternate = locale === "pt" ? "en" : "pt";
  const ptHref = locale === "pt" ? undefined : alternateHref;
  const enHref = locale === "en" ? undefined : alternateHref;

  return (
    <Stack
      direction="horizontal"
      gap="sm"
      className="locale-switcher"
      role="navigation"
      aria-label="Language"
    >
      {ptHref ? (
        <Link href={ptHref} hrefLang="pt" lang="pt" data-locale-link="pt">
          {getLocaleShortLabel("pt")}
        </Link>
      ) : (
        <span aria-current="true" lang="pt">
          {getLocaleShortLabel("pt")}
        </span>
      )}
      <Separator orientation="vertical" className="locale-switcher__separator" />
      {enHref ? (
        <Link href={enHref} hrefLang="en" lang="en" data-locale-link="en">
          {getLocaleShortLabel("en")}
        </Link>
      ) : (
        <span aria-current="true" lang="en">
          {getLocaleShortLabel("en")}
        </span>
      )}
      <span className="sr-only">
        {locale === "pt" ? "Idioma atual: português" : "Current language: English"}
      </span>
      <Link className="sr-only" href={alternateHref} hrefLang={alternate} lang={alternate}>
        {alternate === "pt" ? "Alternar para português" : "Switch to English"}
      </Link>
    </Stack>
  );
}
