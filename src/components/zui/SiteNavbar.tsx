import type { ReactNode } from "react";
import { Navbar, NavbarContent, NavbarItem, NavbarLogo } from "@z-ux/ui";
import { Link } from "@z-ux/ui/link";
import { Stack } from "@z-ux/ui/stack";
import LocaleSwitcherNav from "@/components/zui/LocaleSwitcherNav";
import ThemeToggleButton from "@/components/zui/ThemeToggleButton";

type NavItem = {
  label: string;
  href: string;
  current?: boolean;
};

type SiteNavbarProps = {
  brand: string;
  homeHref: string;
  navLabel: string;
  items: NavItem[];
  locale: "pt" | "en";
  alternateHref: string;
  themeLabels: {
    toDark: string;
    toLight: string;
  };
  children?: ReactNode;
};

export default function SiteNavbar({
  brand,
  homeHref,
  navLabel,
  items,
  locale,
  alternateHref,
  themeLabels,
  children,
}: SiteNavbarProps) {
  return (
    <Navbar label={navLabel} className="site-navbar" data-site-header="">
      <NavbarLogo>
        <Link href={homeHref} className="site-navbar__brand">
          {brand}
        </Link>
      </NavbarLogo>

      <NavbarContent className="site-navbar__desktop">
        {items.map((item) => (
          <NavbarItem key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <Stack direction="horizontal" gap="sm" className="site-navbar__actions">
        <ThemeToggleButton toDark={themeLabels.toDark} toLight={themeLabels.toLight} />
        <LocaleSwitcherNav locale={locale} alternateHref={alternateHref} />
        {children}
      </Stack>
    </Navbar>
  );
}
