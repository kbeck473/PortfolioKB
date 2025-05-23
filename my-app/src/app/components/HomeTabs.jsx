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
      <Tabs.List className="px-4">
        {/*
          • grid-cols-2 on mobile, grid-cols-4 on ≥640px  
          • w-max + mx-auto centers the grid itself  
          • justify-items-center centers each trigger in its cell  
        */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 justify-items-center w-max mx-auto">
          <Tabs.Trigger value="about" className="text-center">
            <Text size="4" weight="medium" className="text-sm sm:text-base">
              About Me
            </Text>
          </Tabs.Trigger>

          <Tabs.Trigger value="education" className="text-center">
            <Text size="4" weight="medium" className="text-sm sm:text-base">
              Education
            </Text>
          </Tabs.Trigger>

          <Tabs.Trigger value="experience" className="text-center">
            <Text size="4" weight="medium" className="text-sm sm:text-base">
              Experience
            </Text>
          </Tabs.Trigger>

          <Tabs.Trigger value="projects" className="text-center">
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
