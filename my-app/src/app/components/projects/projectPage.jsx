import React from "react";
import ProjectCard from "./projectCard";
import { projectData } from "./project.data";
import { Container, Grid, Box } from "@radix-ui/themes";

const ProjectsPage = () => {
  return (
    <div>

    
      <Grid columns={{ initial: "1", md: "2" }} gap="1">
        {projectData.map((project) => (
          <Box key={project.title}>
            <ProjectCard {...project} />
          </Box>
        ))}
      </Grid>
     </div> 
  );
};

export default ProjectsPage;
