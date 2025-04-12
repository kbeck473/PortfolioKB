import React from "react";
import ProjectCard from "./projectCard";
import { projectData } from "./project.data";
import { Container, Flex } from "@radix-ui/themes";

const ProjectsPage = () => {
  return (
    <Container size="2" px="4" py="6">
      <Flex direction="column" gap="4">
        {projectData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </Flex>
    </Container>
  );
};

export default ProjectsPage;
