// components/EducationCard.jsx
"use client";

import React from "react";
import { Card, Flex, Text, Heading } from "@radix-ui/themes";

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
        w-full mb-6 rounded-2xl overflow-hidden shadow flex flex-col h-full ${className}
      `}
      style={{ padding: 0 }}
    >
      {/* Edge-to-edge image */}
      {imageSrc && (
        <div className="w-full aspect-[2.13/1] overflow-hidden">
          <img
            src={imageSrc}
            alt={`${institution} preview`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      {/* Card content with padding */}
      <div className="flex-1 flex flex-col p-4 sm:p-6">
        <Heading size="5">{institution}</Heading>
        <Text color="gray">
          {degree} • {duration}
        </Text>
        <Flex direction="column" gap="2" className="mt-3">
          <Text color="gray">Program Highlights:</Text>
          <ul className="list-disc list-outside pl-5 text-[var(--gray-a11)] text-[0.9rem] space-y-2">
            {highlights.map((hl, i) => (
              <li key={i}>
                <Text as="span">{hl}</Text>
              </li>
            ))}
          </ul>
        </Flex>
      </div>
    </Card>
  );
}
