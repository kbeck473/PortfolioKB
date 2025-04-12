import React from "react";
import ProjectCard from "./projectCard";
import { projectData } from "./project.data";
import { Flex } from "@radix-ui/themes";


const ProjectsPage = () => {
 

  return (
    <>
      <div >
        {projectData.map((project) => (
        <ProjectCard key={project.title} {...project} />
        ))}

      </div>

        
    </>
  );
};

export default ProjectsPage;
