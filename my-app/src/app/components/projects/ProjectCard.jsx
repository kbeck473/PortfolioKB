// src/components/ProjectCard.jsx
"use client";

import React from "react";
import { Card, Flex, Text, Heading, Button } from "@radix-ui/themes";
import { Icon } from "@iconify/react";

export default function ProjectCard({
  title,
  description,
  imageSrc,
  technologies,
  githubUrl,
  className = "",
}) {
  return (
    <Card
      size="4"
      className={`
        w-full            /* full width on mobile */
        sm:max-w-2xl      /* cap at ~672px on ≥640px */
        mx-auto           /* center on larger screens */
        mb-6              /* spacing between cards */
        p-4 sm:p-6        /* responsive padding */
        h-full flex flex-col
        ${className}
      `}
    >
      <Flex direction="column" gap="4">
        {/* Image */}
        <div className="w-full aspect-video overflow-hidden rounded-[var(--radius-2)]">
          <img
            src={imageSrc}
            alt={`${title} preview`}
            referrerPolicy="no-referrer"
            crossOrigin="anonymous"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Title & Description */}
        <Heading size="5">{title}</Heading>
        <Text color="gray">{description}</Text>

        {/* Technologies & Optional GitHub Button */}
        <Flex justify="between" align="end" className="flex-wrap gap-4">
          {/* Technologies */}
          <Flex direction="column" gap="1">
            <Text color="gray">Technologies used:</Text>
            <Flex direction="row" align="end" gap="3" wrap="wrap">
              {technologies.map((tech, idx) => (
                <Flex
                  key={idx}
                  direction="column"
                  align="center"
                  gap="1"
                >
                  <Icon
                    icon={tech.iconSrc}
                    className="w-8 h-8 sm:w-12 sm:h-12"
                    style={{
                      color: tech.name
                        .toLowerCase()
                        .includes("snapdragon")
                        ? "#E2231A"
                        : undefined,
                      transform: `scale(${tech.sizeMultiplier || 1})`,
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
            <Button asChild size="3" variant="outline" className="mt-4 sm:mt-0">
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
}
