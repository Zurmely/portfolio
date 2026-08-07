import { Link } from "@z-ux/ui/link";
import { Separator } from "@z-ux/ui/separator";
import { Stack } from "@z-ux/ui/stack";

type FooterLink = {
  label: string;
  href: string;
};

type SiteFooterBarProps = {
  title: string;
  description: string;
  navLabel: string;
  links: FooterLink[];
  year: number;
  location: string;
};

export default function SiteFooterBar({
  title,
  description,
  navLabel,
  links,
  year,
  location,
}: SiteFooterBarProps) {
  return (
    <footer className="site-footer">
      <Stack direction="vertical" gap="lg" className="site-footer__inner">
        <Stack direction="vertical" gap="sm">
          <p className="site-footer__title">{title}</p>
          <p className="site-footer__description">{description}</p>
        </Stack>

        <nav aria-label={navLabel}>
          <Stack direction="horizontal" gap="lg" className="site-footer__nav">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </Stack>
        </nav>

        <Separator />

        <Stack direction="horizontal" gap="md" className="site-footer__bottom">
          <p className="site-footer__meta">
            © {year} {title}
          </p>
          <p className="site-footer__meta">{location}</p>
        </Stack>
      </Stack>
    </footer>
  );
}
