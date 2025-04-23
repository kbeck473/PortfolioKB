import React from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "./project.data";
import { Container, Grid, Box, Heading, Text } from "@radix-ui/themes";

const ProjectsPage = () => (
  <Container
    size="4"                        // ~1024px max-width
    style={{ margin: "0 auto", padding: "2rem 1rem" }}
  >
    {/* Optional section header */}
    <Heading size="7" as="h2" style={{ marginBottom: "0.5rem" }}>
      Projects
    </Heading>
    <Text size="2" color="gray" style={{ marginBottom: "1.5rem" }}>
      A selection of my work showcasing key technologies and outcomes.
    </Text>

    {/* Your two-col grid, same gap you had before or bump it up */}
    <Grid columns={{ initial: "1", md: "2" }} gap="4">
      {projectData.map((proj) => (
        <Box key={proj.title}>
          <ProjectCard {...proj} />
        </Box>
      ))}
    </Grid>
  </Container>
);

export default ProjectsPage;
