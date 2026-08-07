import { Badge } from "@z-ux/ui/badge";
import { Stack } from "@z-ux/ui/stack";
import { Timeline, TimelineItem } from "@z-ux/ui/timeline";

type ExperienceItem = {
  role: string;
  organization: string;
  location?: string;
  dates: string;
  currentLabel?: string;
  summary: string;
  achievements: string[];
  skills: string[];
  highlightsLabel: string;
  skillsLabel: string;
};

type ExperienceTimelineProps = {
  items: ExperienceItem[];
};

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <Timeline>
      {items.map((item) => (
        <TimelineItem
          key={`${item.organization}-${item.role}-${item.dates}`}
          title={item.role}
          date={item.dates + (item.currentLabel ? ` · ${item.currentLabel}` : "")}
          description={
            <Stack direction="vertical" gap="sm">
              <p>
                {item.organization}
                {item.location ? ` · ${item.location}` : ""}
              </p>
              <p>{item.summary}</p>
              {item.achievements.length > 0 ? (
                <div className="badge-row" aria-label={item.highlightsLabel}>
                  {item.achievements.map((achievement) => (
                    <Badge key={achievement} tone="neutral" size="sm">
                      {achievement}
                    </Badge>
                  ))}
                </div>
              ) : null}
              {item.skills.length > 0 ? (
                <div className="badge-row" aria-label={item.skillsLabel}>
                  {item.skills.map((skill) => (
                    <Badge key={skill} tone="primary" size="sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </Stack>
          }
        />
      ))}
    </Timeline>
  );
}
