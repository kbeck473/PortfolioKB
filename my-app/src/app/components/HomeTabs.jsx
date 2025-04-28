import * as React from "react";
import { Tabs } from "@radix-ui/themes";

import EducationsPage from "./Education/EducationPage";
import ExperiencesPage from "./experience/ExperiencesPage";
import ProjectsPage from "./projects/ProjectPage";

const HomeTabs = () => {
  return (
    <Tabs.Root defaultValue="experience" className="w-full flex flex-col">
      <Tabs.List>
        <div className="flex justify-center gap-6 w-full">
          <Tabs.Trigger
            className="px-4 py-2 text-lg font-medium text-gray-700 hover:text-blue-500 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600"
            value="education"
          >
            Education
          </Tabs.Trigger>
          <Tabs.Trigger
            className="px-4 py-2 text-lg font-medium text-gray-700 hover:text-blue-500 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600"
            value="experience"
          >
            Experience
          </Tabs.Trigger>
          <Tabs.Trigger
            className="px-4 py-2 text-lg font-medium text-gray-700 hover:text-blue-500 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600"
            value="projects"
          >
            Projects
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
