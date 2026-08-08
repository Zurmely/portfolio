import { Avatar } from "@z-ux/ui/avatar";
import { Badge } from "@z-ux/ui/badge";
import { Stack } from "@z-ux/ui/stack";
import ButtonLink from "@/components/zui/ButtonLink";

type ResumeHeroProps = {
  name: string;
  headline: string;
  intro: string;
  location: string;
  workCtaLabel: string;
  contactCtaLabel: string;
  workHref: string;
  contactHref: string;
};

export default function ResumeHero({
  name,
  headline,
  intro,
  location,
  workCtaLabel,
  contactCtaLabel,
  workHref,
  contactHref,
}: ResumeHeroProps) {
  return (
    <Stack direction="vertical" gap="lg">
      <Stack direction="horizontal" gap="md" className="resume-hero__identity">
        <Avatar fallback="GZ" size="lg" alt="" />
        <Stack direction="vertical" gap="sm">
          <p className="site-eyebrow">{name}</p>
        </Stack>
      </Stack>
      <Stack direction="vertical" gap="md" className="site-section__header">
        <h1 className="site-heading site-heading--hero">{headline}</h1>
        <p className="site-lead">{intro}</p>
        <Stack direction="horizontal" gap="sm" className="badge-row">
          <Badge tone="neutral" size="sm">
            {location}
          </Badge>
        </Stack>
        <Stack direction="horizontal" gap="md" className="site-actions">
          <ButtonLink href={workHref}>{workCtaLabel}</ButtonLink>
          <ButtonLink href={contactHref} variant="secondary">
            {contactCtaLabel}
          </ButtonLink>
        </Stack>
      </Stack>
    </Stack>
  );
}
