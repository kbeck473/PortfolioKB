import React from "react";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { Icon } from "@iconify/react";

const ProjectCard = ({ title, description, imageSrc, technologies }) => {
  return (
    <Card style={{ minWidth: "100%", marginBottom: "10px" }} size="4">
      <Flex direction="column" gap="4">
        {/* Project Image */}
        <img
          src={imageSrc}
          alt={`${title} preview`}
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "var(--radius-2)",
          }}
        />

        {/* Title */}
        <Heading size="2">{title}</Heading>

        {/* Description */}
        <Text color="gray">{description}</Text>

        {/* Technologies/Github */}
        <Flex direction="column" gap="1">
          <Text color="gray">Technologies used:</Text>
          {/* 
            1) direction="row" for horizontal layout
            2) align="end" to anchor each item along the bottom
            3) gap="3" for spacing between technologies
            4) wrap="wrap" in case they overflow the container width
          */}
          <Flex direction="row" align="end" gap="3" wrap="wrap">
            {technologies.map((tech, index) => (
              <Flex
                key={tech.id || `${tech.iconSrc}-${index}`}
                direction="column"
                align="center"
                gap="1"
              >
                <Icon
                  icon={tech.iconSrc}
                  style={{
                    fontSize: 50 * (tech.sizeMultiplier || 1) + "px",
                  }}
                />
                <Text size="2" as="span">
                  {tech.name}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default ProjectCard;
