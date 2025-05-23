// src/components/ProjectCard.jsx

import React from "react";
import { Card, Flex, Text, Heading, Button } from "@radix-ui/themes";
import { Icon } from "@iconify/react";

const ProjectCard = ({
  title,
  description,
  imageSrc,
  technologies,
  githubUrl,
  className
}) => {
  return (
    <Card
      size="4"
      className={`h-full flex flex-col ${className || ""}`}
      style={{
        width: "100%",
        maxWidth: "800px",      // match experience cards
        margin: "0 auto 1rem",  // centered + 1rem bottom
        padding: "1.5rem"       // same padding as experiences
      }}
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
              borderRadius: "var(--radius-2)"
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
              {technologies.map((tech, idx) => (
                <Flex
                  key={tech.id ?? `${tech.iconSrc}-${idx}`}
                  direction="column"
                  align="center"
                  gap="1"
                >
                  <Icon
                    icon={tech.iconSrc}
                    /* mobile-first: 32px; from sm (≥640px): 48px */
                    className="w-8 h-8 sm:w-12 sm:h-12"
                    style={{
                      /* force Snapdragon red */
                      color: tech.name.toLowerCase().includes("snapdragon")
                        ? "#E2231A"
                        : undefined,
                      /* apply any sizeMultiplier */
                      transform: `scale(${tech.sizeMultiplier || 1})`
                    }}
                  />
                  <Text size="2" as="span">
                    {tech.name}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Flex>

          {/* GitHub Button */}
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
