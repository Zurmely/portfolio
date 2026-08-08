import type { LucideIcon } from "lucide-react";
import { Layers, Lightbulb, Users } from "lucide-react";
import { Badge } from "@z-ux/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@z-ux/ui/card";
import { Stack } from "@z-ux/ui/stack";

const iconMap = {
  Layers,
  Lightbulb,
  Users,
} as const satisfies Record<string, LucideIcon>;

type IconName = keyof typeof iconMap;

type CapabilityItem = {
  title: string;
  description: string;
  icon: IconName;
};

type SkillsGridProps = {
  capabilities: CapabilityItem[];
  skills: string[];
  skillsLabel: string;
};

export default function SkillsGrid({ capabilities, skills, skillsLabel }: SkillsGridProps) {
  return (
    <Stack direction="vertical" gap="lg">
      <div className="site-grid site-grid--3">
        {capabilities.map((item) => {
          const Icon = iconMap[item.icon] ?? Layers;
          return (
            <Card key={item.title}>
              <CardHeader>
                <Stack direction="vertical" gap="sm">
                  <Icon className="skills-grid__icon" aria-hidden="true" />
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </Stack>
              </CardHeader>
            </Card>
          );
        })}
      </div>
      {skills.length > 0 ? (
        <Stack direction="vertical" gap="sm">
          <p className="site-eyebrow">{skillsLabel}</p>
          <Stack direction="horizontal" gap="sm" className="badge-row" aria-label={skillsLabel}>
            {skills.map((skill) => (
              <Badge key={skill} tone="primary" size="sm">
                {skill}
              </Badge>
            ))}
          </Stack>
        </Stack>
      ) : null}
    </Stack>
  );
}
