import { Menu } from "lucide-react";
import { Navbar, NavbarContent, NavbarItem, NavbarLogo } from "@z-ux/ui";
import { IconButton } from "@z-ux/ui/icon-button";
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
  menuLabel: string;
  items: NavItem[];
  locale: "pt" | "en";
  alternateHref: string;
  themeLabels: {
    toDark: string;
    toLight: string;
  };
};

export default function SiteNavbar({
  brand,
  homeHref,
  navLabel,
  menuLabel,
  items,
  locale,
  alternateHref,
  themeLabels,
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
            <Link href={item.href} aria-current={item.current ? "page" : undefined}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <Stack direction="horizontal" gap="sm" className="site-navbar__actions">
        <ThemeToggleButton toDark={themeLabels.toDark} toLight={themeLabels.toLight} />
        <LocaleSwitcherNav locale={locale} alternateHref={alternateHref} />
        <IconButton
          type="button"
          variant="ghost"
          size="md"
          className="site-navbar__menu-toggle"
          data-menu-toggle=""
          aria-expanded={false}
          aria-controls="mobile-navigation"
          aria-label={menuLabel}
        >
          <Menu aria-hidden="true" size={18} />
        </IconButton>
      </Stack>

      <div id="mobile-navigation" className="site-navbar__mobile" data-mobile-nav="">
        <Stack direction="vertical" gap="sm">
          {items.map((item) => (
            <Link
              key={`mobile-${item.href}`}
              href={item.href}
              className="site-navbar__mobile-link"
              aria-current={item.current ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </Stack>
      </div>
    </Navbar>
  );
}
