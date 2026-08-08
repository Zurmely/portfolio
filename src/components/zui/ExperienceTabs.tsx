import { Tabs, TabsContent, TabsList, TabsTrigger } from "@z-ux/ui/tabs";
import ExperienceTimeline from "@/components/zui/ExperienceTimeline";

type TimelineItem = {
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

type ExperienceTabsProps = {
  experienceLabel: string;
  educationLabel: string;
  experienceItems: TimelineItem[];
  educationItems: TimelineItem[];
};

export default function ExperienceTabs({
  experienceLabel,
  educationLabel,
  experienceItems,
  educationItems,
}: ExperienceTabsProps) {
  return (
    <Tabs defaultValue="experience">
      <TabsList aria-label={experienceLabel}>
        <TabsTrigger value="experience">{experienceLabel}</TabsTrigger>
        <TabsTrigger value="education">{educationLabel}</TabsTrigger>
      </TabsList>
      <TabsContent value="experience">
        <ExperienceTimeline items={experienceItems} />
      </TabsContent>
      <TabsContent value="education">
        <ExperienceTimeline items={educationItems} />
      </TabsContent>
    </Tabs>
  );
}
