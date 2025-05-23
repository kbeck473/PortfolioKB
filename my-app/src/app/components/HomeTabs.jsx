'use client';

import React from 'react';
import { Tabs, Text } from '@radix-ui/themes';

import AboutMePage from './AboutMePage';
import EducationsPage from './Education/EducationPage';
import ExperiencesPage from './experience/ExperiencesPage';
import ProjectsPage from './projects/ProjectPage';

export default function HomeTabs() {
  return (
    <Tabs.Root defaultValue="experience" className="w-full">
      <Tabs.List className="overflow-x-auto">
        <div className="flex justify-center gap-3 sm:gap-6 min-w-max w-full px-4">
          <Tabs.Trigger value="about" className="flex-shrink-0">
            <Text size="4" weight="medium" className="text-sm sm:text-base">
              About Me
            </Text>
          </Tabs.Trigger>
          <Tabs.Trigger value="education" className="flex-shrink-0">
            <Text size="4" weight="medium" className="text-sm sm:text-base">
              Education
            </Text>
          </Tabs.Trigger>
          <Tabs.Trigger value="experience" className="flex-shrink-0">
            <Text size="4" weight="medium" className="text-sm sm:text-base">
              Experience
            </Text>
          </Tabs.Trigger>
          <Tabs.Trigger value="projects" className="flex-shrink-0">
            <Text size="4" weight="medium" className="text-sm sm:text-base">
              Projects
            </Text>
          </Tabs.Trigger>
        </div>
      </Tabs.List>

      <Tabs.Content value="about" className="p-6">
        <AboutMePage />
      </Tabs.Content>
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
}
