import React from "react";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";

const ProjectCard = ({ title, description, imageSrc, technologies }) => {
  return (
    <Card size="3" style={{ maxWidth: 400 }}>
      <Flex direction="column" gap="4">
        {/* Project Image */}
        <img
            src={imageSrc}
            alt={`${title} preview`}
            referrerPolicy="no-referrer"
            crossOrigin="anonymous"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "var(--radius-2)",
            }}
          />


        {/* Title */}
        <Heading size="4">{title}</Heading>

        {/* Description */}
        <Text color="gray">{description}</Text>

        {/* Technologies */}
        <Flex direction="column" gap="1">
          <Text color="gray">Technologies used:</Text>
          <Flex gap="2" wrap="wrap" align="center">
            {technologies.map((tech) => (
              <img
                key={tech.name}
                src={tech.iconSrc}
                alt={tech.name}
                title={tech.name}
                style={{ width: 24, height: 24 }}
              />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default ProjectCard;
