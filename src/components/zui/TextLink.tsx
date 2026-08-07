import type { ReactNode } from "react";
import { Link } from "@z-ux/ui/link";

type TextLinkProps = {
  href: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
};

export default function TextLink({ href, external = false, className, children }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
    >
      {children}
    </Link>
  );
}
