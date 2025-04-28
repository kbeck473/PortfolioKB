import React from "react";
import { Container, Grid, Box, Heading, Text } from "@radix-ui/themes";
import ExperienceCard from "./ExperienceCard";
import { experienceData } from "./experience.data";

const ExperiencesPage = () => (
  <Container size="4" style={{ margin: "0 auto", padding: "2rem 1rem" }}>
    {/* Section title */}
    <Heading size="7" as="h2">
      Professional Experience
    </Heading>

    {/* Short description */}
    <Text size="2" color="gray">
      Below is a summary of my professional roles, highlighting the skills and impact I've delivered.
    </Text>

    {/* Two-col grid with uniform row heights */}
    <Grid
      columns={{ initial: "1", md: "2" }}
      gap="4"
      className="mt-5"
      css={{ gridAutoRows: "1fr" }}
    >
      {experienceData.map((exp) => (
        <Box key={exp.title} css={{ height: "100%" }}>
          <ExperienceCard className="h-full flex flex-col" {...exp} />
        </Box>
      ))}
    </Grid>
  </Container>
);

export default ExperiencesPage;
