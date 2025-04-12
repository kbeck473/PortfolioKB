import React from "react";
import { Card, Flex, Text, Heading, Button } from "@radix-ui/themes";
import { Icon } from "@iconify/react";

const ProjectCard = ({ title, description, imageSrc, technologies, githubUrl }) => {
  return (
    <Card
      style={{
        width: "100%",
        maxWidth: "700px",
        marginBottom: "10px",
        minHeight: "500px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      size="4"
    >
      <Flex direction="column" gap="4">
        {/* Image */}
        <div style={{ aspectRatio: "16 / 9", width: "100%" }}>
          <img
            src={imageSrc}
            alt={`${title} preview`}
            referrerPolicy="no-referrer"
            crossOrigin="anonymous"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: "var(--radius-2)",
            }}
          />
        </div>

        {/* Title & Description */}
        <Heading size="5">{title}</Heading>
        <Text color="gray">{description}</Text>

        {/* Technologies & Optional GitHub Button */}
        <Flex justify="between" align="end">
          {/* Technologies */}
          <Flex direction="column" gap="1">
            <Text color="gray">Technologies used:</Text>
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
                      fontSize: `${50 * (tech.sizeMultiplier || 1)}px`,
                      color: tech.name === "Snapdragon" ? "#f00" : undefined,
                    }}
                  />
                  <Text size="2" as="span">
                    {tech.name}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Flex>

          {/* GitHub Button (conditionally shown) */}
          {githubUrl && (
            <Button asChild size="3" variant="outline">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Flex align="center" gap="2">
                <Icon icon="mdi:github" width={18} height={18} />
                <span>View Code</span>
              </Flex>
            </a>
            </Button>
          )}
        </Flex>
      </Flex>
    </Card>
  );
};

export default ProjectCard;
