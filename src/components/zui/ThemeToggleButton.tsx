import { Moon, Sun } from "lucide-react";
import { IconButton } from "@z-ux/ui/icon-button";

type ThemeToggleButtonProps = {
  toDark: string;
  toLight: string;
};

export default function ThemeToggleButton({ toDark, toLight }: ThemeToggleButtonProps) {
  return (
    <IconButton
      type="button"
      variant="ghost"
      size="md"
      className="theme-toggle"
      data-theme-toggle=""
      aria-pressed={false}
      aria-label={toDark}
      data-label-dark={toDark}
      data-label-light={toLight}
    >
      <Moon aria-hidden="true" size={18} className="theme-toggle__icon theme-toggle__icon--moon" />
      <Sun aria-hidden="true" size={18} className="theme-toggle__icon theme-toggle__icon--sun" />
    </IconButton>
  );
}
