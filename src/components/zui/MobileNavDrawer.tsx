import { Menu } from "lucide-react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@z-ux/ui/drawer";
import { IconButton } from "@z-ux/ui/icon-button";
import { Link } from "@z-ux/ui/link";
import { Stack } from "@z-ux/ui/stack";

type NavItem = {
  label: string;
  href: string;
};

type MobileNavDrawerProps = {
  items: NavItem[];
  menuLabel: string;
};

export default function MobileNavDrawer({ items, menuLabel }: MobileNavDrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <IconButton
          type="button"
          variant="ghost"
          size="md"
          className="site-navbar__menu-toggle"
          aria-label={menuLabel}
        >
          <Menu aria-hidden="true" size={18} />
        </IconButton>
      </DrawerTrigger>
      <DrawerContent side="right">
        <DrawerHeader>
          <DrawerTitle>{menuLabel}</DrawerTitle>
        </DrawerHeader>
        <Stack direction="vertical" gap="sm">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="site-navbar__mobile-link">
              {item.label}
            </Link>
          ))}
        </Stack>
      </DrawerContent>
    </Drawer>
  );
}
