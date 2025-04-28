// ProjectsPage.jsx
import React from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "./Project.Data";
import { Container, Grid, Box, Heading, Text } from "@radix-ui/themes";

const ProjectsPage = () => (
  <Container size="4" style={{ margin: "0 auto", padding: "2rem 1rem" }}>
    {/* Section header */}
    <Heading size="7" as="h2">
      Projects
    </Heading>
    <Text size="2" color="gray">
      A selection of my work showcasing key technologies and outcomes.
    </Text>

    {/* Two-col grid with uniform row heights */}
    {/* gridAutoRows set to 1fr makes all rows equal height */}
    <Grid
      columns={{ initial: "1", md: "2" }}
      gap="4"
      className="mt-5"
      css={{ gridAutoRows: "1fr" }}
    >
      {projectData.map((proj) => (
        <Box key={proj.title} css={{ height: "100%" }}>
          <ProjectCard className="h-full flex flex-col" {...proj} />
        </Box>
      ))}
    </Grid>
  </Container>
);

export default ProjectsPage;