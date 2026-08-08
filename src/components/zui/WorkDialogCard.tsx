import type { ReactNode } from "react";
import { Badge } from "@z-ux/ui/badge";
import { Button } from "@z-ux/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@z-ux/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@z-ux/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@z-ux/ui/dialog";
import { Link } from "@z-ux/ui/link";
import { Stack } from "@z-ux/ui/stack";

type MetaField = {
  label: string;
  value: string;
};

type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

type ExternalLink = {
  label: string;
  url: string;
};

type WorkDialogCardProps = {
  title: string;
  summary: string;
  meta: string;
  placeholder: string;
  ctaLabel: string;
  metaFields: MetaField[];
  gallery: GalleryImage[];
  galleryLabel: string;
  externalLinks: ExternalLink[];
  externalLinkLabel: string;
  children: ReactNode;
};

export default function WorkDialogCard({
  title,
  summary,
  meta,
  placeholder,
  ctaLabel,
  metaFields,
  gallery,
  galleryLabel,
  externalLinks,
  externalLinkLabel,
  children,
}: WorkDialogCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="placeholder-media" aria-hidden="true">
          {placeholder}
        </div>
        <CardDescription>{meta}</CardDescription>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{summary}</p>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" size="sm">
              {ctaLabel}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{summary}</DialogDescription>
            </DialogHeader>
            {metaFields.length > 0 ? (
              <div className="work-dialog__meta-grid">
                {metaFields.map((field) => (
                  <Stack key={field.label} direction="vertical" gap="sm">
                    <span className="work-dialog__meta-label">{field.label}</span>
                    <span className="work-dialog__meta-value">{field.value}</span>
                  </Stack>
                ))}
              </div>
            ) : null}
            <div className="prose">{children}</div>
            {gallery.length > 0 ? (
              <Carousel aria-label={galleryLabel}>
                <CarouselContent>
                  {gallery.map((image) => (
                    <CarouselItem key={image.src + image.alt}>
                      <Stack direction="vertical" gap="sm">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="work-dialog__gallery-image"
                        />
                        {image.caption ? (
                          <p className="work-dialog__gallery-caption">{image.caption}</p>
                        ) : null}
                      </Stack>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            ) : null}
            {externalLinks.length > 0 ? (
              <DialogFooter>
                <Stack direction="horizontal" gap="sm" className="badge-row">
                  {externalLinks.map((link) => (
                    <Badge key={link.url} tone="neutral" size="sm">
                      <Link href={link.url} target="_blank" rel="noreferrer noopener">
                        {link.label}
                      </Link>
                    </Badge>
                  ))}
                </Stack>
                <span className="sr-only">{externalLinkLabel}</span>
              </DialogFooter>
            ) : null}
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
