import { ListItem } from "@z-ux/ui/list-item";
import { Stack } from "@z-ux/ui/stack";

type ContactLinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

type ContactLinksListProps = {
  links: ContactLinkItem[];
};

export default function ContactLinksList({ links }: ContactLinksListProps) {
  return (
    <Stack direction="vertical" gap="sm">
      {links.map((link) => (
        <ListItem
          key={link.href}
          as="a"
          href={link.href}
          label={link.label}
          trailing="↗"
          variant="contained"
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noreferrer noopener" : undefined}
        />
      ))}
    </Stack>
  );
}
