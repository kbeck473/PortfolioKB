import React from "react";
import { Card, Flex, Text, Heading, Button } from "@radix-ui/themes";
import { Icon } from "@iconify/react";

const ExperienceCard = ({
  title,
  company,
  duration,
  description, // now an array
  icon,
  link
}) => (
  <Card
    size="4"
    style={{
      width: "100%",
      maxWidth: "800px",
      margin: "0 auto 1rem",
      padding: "1.5rem"
    }}
  >
    <Flex direction="column" gap="3">
      {/* Title + Icon */}
      <Flex align="center" gap="2">
        <Icon icon={icon} width={28} height={28} />
        <Heading size="5">{title}</Heading>
      </Flex>

      {/* Company & Duration */}
      <Text as="strong">{company}</Text>
      <Text color="gray" size="2">
        {duration}
      </Text>

      {/* Bullet list of descriptions */}
      <ul style={{ marginTop: "1rem", paddingLeft: "1.25rem" }}>
        {description.map((point, idx) => (
          <li key={idx} style={{ marginBottom: "0.5rem" }}>
            <Text>{point}</Text>
          </li>
        ))}
      </ul>

      {/* Optional “Learn More” link/button */}
      {link && (
        <Button asChild size="3" variant="outline" style={{ marginTop: "1rem" }}>
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

export default ExperienceCard;
