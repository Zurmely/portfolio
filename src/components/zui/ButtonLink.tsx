import type { ReactNode } from "react";
import { Button } from "@z-ux/ui/button";
import { Link } from "@z-ux/ui/link";

type ButtonLinkProps = {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
  children: ReactNode;
};

export default function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  external = false,
  className,
  children,
}: ButtonLinkProps) {
  return (
    <Button variant={variant} size={size} asChild className={className}>
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer noopener" : undefined}
      >
        {children}
      </Link>
    </Button>
  );
}
