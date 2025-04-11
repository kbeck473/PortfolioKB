import React from "react";
import ProjectCard from "./projectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AR Grocery Assistant",
      description:
        "An AR app that identifies grocery items using computer vision and delivers real-time information through GenAI, paired with shopping utilities.",
        imageSrc: "https://via.placeholder.com/400x200"
        ,
      technologies: [
        {
          name: "Unity",
          iconSrc:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-line.svg?v=2",
        },
        { name: "YOLOv8", iconSrc: "/icons/yolo.svg" },
        { name: "Snapdragon", iconSrc: "/icons/snapdragon.svg" },
      ],
    },
    {
      title: "Portfolio Website",
      description:
        "A sleek, responsive portfolio site built with React and Tailwind.",
      imageSrc: "/images/portfolio-preview.png",
      technologies: [
        { name: "React", iconSrc: "/icons/react.svg" },
        { name: "Next.js", iconSrc: "/icons/nextjs.svg" },
        { name: "Tailwind", iconSrc: "/icons/tailwindcss.svg" },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
};

export default ProjectsSection;
