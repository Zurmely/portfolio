import { BreadcrumbItem, BreadcrumbLink, Breadcrumbs, BreadcrumbSeparator } from "@z-ux/ui";

type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbsNavProps = {
  items: Crumb[];
  label?: string;
};

export default function BreadcrumbsNav({ items, label = "Breadcrumb" }: BreadcrumbsNavProps) {
  return (
    <Breadcrumbs aria-label={label}>
      {items.map((item, index) => (
        <BreadcrumbItem key={`${item.label}-${index}`}>
          {item.href ? (
            <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
          {index < items.length - 1 ? <BreadcrumbSeparator /> : null}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
}
