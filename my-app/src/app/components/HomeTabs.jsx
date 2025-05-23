// components/HomeTabs.jsx
"use client";

import React from 'react';
import { Tabs, Text } from '@radix-ui/themes';

import AboutMePage from './AboutMePage';
import EducationsPage from './Education/EducationPage';
import ExperiencesPage from './experience/ExperiencesPage';
import ProjectsPage from './projects/ProjectPage';

export default function HomeTabs() {
  return (
    <Tabs.Root defaultValue="experience" className="w-full">
      {/* Tab list stays as you had it */}
      <Tabs.List className="w-full px-3 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 justify-items-center w-full">
          {['about','education','experience','projects'].map((value, i) => (
            <Tabs.Trigger key={value} value={value} className="text-center">
              <Text size="4" weight="medium" className="text-sm sm:text-base">
                {['About Me','Education','Experience','Projects'][i]}
              </Text>
            </Tabs.Trigger>
          ))}
        </div>
      </Tabs.List>

      {/* Remove horizontal padding on mobile, keep vertical; restore everything at sm */}
      <Tabs.Content value="about"    className="px-0 sm:px-6 py-6"><AboutMePage/></Tabs.Content>
      <Tabs.Content value="education"className="px-0 sm:px-6 py-6"><EducationsPage/></Tabs.Content>
      <Tabs.Content value="experience"className="px-0 sm:px-6 py-6"><ExperiencesPage/></Tabs.Content>
      <Tabs.Content value="projects" className="px-0 sm:px-6 py-6"><ProjectsPage/></Tabs.Content>
    </Tabs.Root>
  );
}
