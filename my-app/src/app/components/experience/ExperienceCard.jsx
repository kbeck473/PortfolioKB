// components/ExperienceCard.jsx
"use client";

import React from "react";
import { Card, Flex, Text, Heading, Button } from "@radix-ui/themes";
import { Icon } from "@iconify/react";

export default function ExperienceCard({
  title,
  company,
  duration,
  description,
  icon,
  link,
  className = "",
}) {
  return (
    <Card
      size="4"
      className={`
        w-full            /* full width of parent */
        mb-4              /* spacing between cards */
        p-4 sm:p-6        /* responsive padding */
        h-full flex flex-col
        ${className}
      `}
    >
      <Flex direction="column" gap="3">
        {/* Title + Icon */}
        <Flex align="center" gap="2">
          <Icon icon={icon} width={28} height={28} />
          <Heading size="5">{title}</Heading>
        </Flex>

        {/* Company & Duration */}
        <Text as="strong">{company}</Text>
        <Text color="gray" size="2">{duration}</Text>

        {/* Bullet list of descriptions */}
        <ul className="mt-3 pl-5 list-disc text-[var(--gray-a11)] text-[0.95rem]">
          {description.map((point, idx) => (
            <li key={idx} className="mb-2">
              <Text as="span">{point}</Text>
            </li>
          ))}
        </ul>

        {/* Optional “Learn More” link/button */}
        {link && (
          <Button asChild size="3" variant="outline" className="mt-4">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Flex align="center" gap="1">
                <Icon icon="mdi:open-in-new" width={16} height={16} />
                <span>Learn More</span>
              </Flex>
            </a>
          </Button>
        )}
      </Flex>
    </Card>
  );
}
