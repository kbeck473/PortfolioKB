'use client';

import React from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "./Project.Data";
import { Container, Heading, Text } from "@radix-ui/themes";
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
    <Container size="4" style={{ margin: "0 auto", padding: "2rem 1rem" }}>
      <Heading size="7" as="h2">Projects</Heading>
      <Text size="2" color="gray">
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
    </Container>
  );
}
