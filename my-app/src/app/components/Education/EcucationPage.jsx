import React from "react";
import EducationCard from "./EducationCard";
import { educationData } from "./education.data";
import { Container, Box, Heading, Text } from "@radix-ui/themes";

const EducationPage = () => (
  <Container size="4" style={{ margin: "0 auto", padding: "2rem 1rem" }}>
    <Heading size="7" as="h2">
      Education
    </Heading>
    <Text size="2" color="gray">
      A summary of my academic background and key highlights from my degree programs.
    </Text>

    <Box className="mt-5" style={{ width: "100%" }}>
      {educationData.map((edu) => (
        <EducationCard
          key={edu.institution}
          {...edu}
          style={{ maxWidth: "none", overflow: "hidden", borderRadius: "var(--radius-2)" }}
        />
      ))}
    </Box>
  </Container>
);

export default EducationPage;