import type { LucideIcon } from "lucide-react";
import { Layers, Lightbulb, Users } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@z-ux/ui/card";
import { Stack } from "@z-ux/ui/stack";

const iconMap = {
  Layers,
  Lightbulb,
  Users,
} as const satisfies Record<string, LucideIcon>;

type IconName = keyof typeof iconMap;

type FeatureItem = {
  title: string;
  description: string;
  icon: IconName;
};

type FeatureGridProps = {
  items: FeatureItem[];
};

export default function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className="site-grid site-grid--3">
      {items.map((item) => {
        const Icon = iconMap[item.icon] ?? Layers;
        return (
          <Card key={item.title}>
            <CardHeader>
              <Stack direction="vertical" gap="sm">
                <Icon className="feature-item__icon" aria-hidden="true" />
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </Stack>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
}
