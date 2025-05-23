// components/ProjectsPage.jsx
"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "./Project.Data";
import { Heading, Text } from "@radix-ui/themes";
import { motion } from "framer-motion";

// same animation variants
const parent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
  return (
    <div className="w-full sm:max-w-7xl mx-auto px-2 sm:px-6 py-8 sm:py-12">
      <Heading size="7" as="h2" className="mb-4">
        Projects
      </Heading>
      <Text size="2" color="gray" className="mb-6">
        A selection of my work showcasing key technologies and outcomes.
      </Text>

      <motion.div
        variants={parent}
        initial="hidden"
        animate="visible"
        className="mt-5"
      >
        {/* Tailwind grid with auto-rows and stretch */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr items-stretch">
          {projectData.map((proj) => (
            <motion.div key={proj.title} variants={item} className="h-full">
              {/* this wrapper fills the grid cell */}
              <div className="h-full flex flex-col">
                <ProjectCard {...proj} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
