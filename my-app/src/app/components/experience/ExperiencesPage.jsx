import React from "react";
import { Container, Grid, Box, Heading, Text } from "@radix-ui/themes";
import ExperienceCard from "./ExperienceCard";
import { experienceData } from "./experience.data";

const ExperiencesPage = () => (
   
  <Container
    size="4"
    style={{ margin: "0 auto", padding: "2rem 1rem" }}
  >
    {/* Section title */}
    <Heading size="7" as="h2" style={{ marginBottom: "0.5rem" }}>
      Professional Experience
    </Heading>

    {/* Short description */}
    <Text size="2" color="gray" style={{ marginBottom: "1.5rem" }}>
      Below is a summary of my professional roles, highlighting the skills and impact I've delivered.
    </Text>

    <Grid columns={{ initial: "1", md: "2" }} gap="4"> 
      {experienceData.map((exp) => (
        <Box key={exp.title}>
          <ExperienceCard {...exp} />
        </Box>
      ))}
    </Grid>
  </Container>
);

export default ExperiencesPage;
