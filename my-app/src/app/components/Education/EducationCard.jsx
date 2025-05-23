// components/EducationCard.jsx
"use client";

import React from "react";
import { Card, Flex, Text, Heading } from "@radix-ui/themes";
import { Icon } from "@iconify/react";

export default function EducationCard({
  institution,
  degree,
  duration,
  highlights,
  imageSrc,
  className = "",
}) {
  return (
    <Card
      size="4"
      className={`
        w-full            /* full width of parent */
        mb-6              /* spacing between cards */
        p-4 sm:p-6        /* responsive padding */
        h-full flex flex-col
        ${className}
      `}
    >
      <Flex direction="column" gap="4">
        {/* Image */}
        {imageSrc && (
          <div className="w-full aspect-[2.13/1] overflow-hidden rounded-[var(--radius-2)]">
            <img
              src={imageSrc}
              alt={`${institution} preview`}
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Institution & Degree */}
        <Heading size="5">{institution}</Heading>
        <Text color="gray">
          {degree} • {duration}
        </Text>

        {/* Highlights */}
        <Flex direction="column" gap="2">
          <Text color="gray">Program Highlights:</Text>
          <ul className="list-disc list-outside pl-5 text-[var(--gray-a11)] text-[0.9rem] space-y-2">
            {highlights.map((hl, i) => (
              <li key={i}>
                <Text as="span">{hl}</Text>
              </li>
            ))}
          </ul>
        </Flex>
      </Flex>
    </Card>
  );
}
