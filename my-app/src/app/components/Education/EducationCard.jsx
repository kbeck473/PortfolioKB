import React from "react";
import { Card, Flex, Text, Heading } from "@radix-ui/themes";
import { Icon } from "@iconify/react";

const EducationCard = ({
  institution,
  degree,
  duration,
  highlights,
  imageSrc,
  className,
}) => {
  return (
    <Card
      size="4"
      className={`h-full flex flex-col ${className || ""}`}
      style={{
        width: "100%",
        maxWidth: "1000px",
        margin: "0 auto 1rem",
        padding: "1.5rem",
      }}
    >
      <Flex direction="column" gap="4">
        {/* Image */}
        {imageSrc && (
          <div
            style={{
              aspectRatio: "2.13 / 1",
              width: "100%",
              overflow: "hidden",
              borderRadius: "var(--radius-2)",
            }}
          >
            <img
              src={imageSrc}
              alt={`${institution} preview`}
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
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
          <ul
            style={{
              listStyleType: "disc",       // show real bullets
              listStylePosition: "outside", // proper bullet spacing
              paddingLeft: "1.5rem",        // better indent
              color: "var(--gray-a11)",
              fontSize: "0.9rem",
            }}
          >
            {highlights.map((highlight, idx) => (
              <li key={idx} style={{ marginBottom: "0.5rem" }}>
                {highlight}
              </li>
            ))}
          </ul>
        </Flex>
      </Flex>
    </Card>
  );
};

export default EducationCard;
