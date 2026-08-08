import { ListItem } from "@z-ux/ui/list-item";
import { Stack } from "@z-ux/ui/stack";

type ContactLinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

type ContactListProps = {
  links: ContactLinkItem[];
  note?: string;
};

export default function ContactList({ links, note }: ContactListProps) {
  return (
    <Stack direction="vertical" gap="md">
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
      {note ? <p className="site-lead">{note}</p> : null}
    </Stack>
  );
}
