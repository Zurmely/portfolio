import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@z-ux/ui/card";
import ButtonLink from "@/components/zui/ButtonLink";

type ProjectCardProps = {
  href: string;
  title: string;
  summary: string;
  meta: string;
  placeholder: string;
  ctaLabel: string;
};

export default function ProjectCard({
  href,
  title,
  summary,
  meta,
  placeholder,
  ctaLabel,
}: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="placeholder-media" aria-hidden="true">
          {placeholder}
        </div>
        <CardDescription>{meta}</CardDescription>
        <CardTitle>
          <a href={href} style={{ color: "inherit", textDecoration: "none" }}>
            {title}
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{summary}</p>
      </CardContent>
      <CardFooter>
        <ButtonLink href={href} variant="secondary" size="sm">
          {ctaLabel}
        </ButtonLink>
      </CardFooter>
    </Card>
  );
}
