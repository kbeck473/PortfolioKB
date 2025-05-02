import * as React from "react";
import { Tabs, Text } from "@radix-ui/themes";

import EducationsPage from "./Education/EducationPage";
import ExperiencesPage from "./experience/ExperiencesPage";
import ProjectsPage from "./projects/ProjectPage";

const HomeTabs = () => {
  return (
    <Tabs.Root defaultValue="experience" className="w-full">
      <Tabs.List>
        <div className="flex justify-center gap-6 w-full">
          <Tabs.Trigger value="education">
            <Text size="4" weight="medium">
              Education
            </Text>
          </Tabs.Trigger>
          <Tabs.Trigger value="experience">
            <Text size="4" weight="medium">
              Experience
            </Text>
          </Tabs.Trigger>
          <Tabs.Trigger value="projects">
            <Text size="4" weight="medium">
              Projects
            </Text>
          </Tabs.Trigger>
        </div>
      </Tabs.List>

      <Tabs.Content value="education" className="p-6">
        <EducationsPage />
      </Tabs.Content>
      <Tabs.Content value="experience" className="p-6">
        <ExperiencesPage />
      </Tabs.Content>
      <Tabs.Content value="projects" className="p-6">
        <ProjectsPage />
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default HomeTabs;
