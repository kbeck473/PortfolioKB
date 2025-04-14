import React from "react";
import ProjectCard from "./projectCard";
import { projectData } from "./project.data";
import { Container, Grid, Box } from "@radix-ui/themes";

const ProjectsPage = () => {
  return (
    <Container size="4" px="4" py="6">
      <Grid columns={{ initial: "1", md: "2" }} gap="4">
        {projectData.map((project) => (
          <Box key={project.title}>
            <ProjectCard {...project} />
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectsPage;
