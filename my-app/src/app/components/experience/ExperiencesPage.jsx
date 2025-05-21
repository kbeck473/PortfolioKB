'use client';

import React from "react";
import { Container, Grid, Box, Heading, Text } from "@radix-ui/themes";
import ExperienceCard from "./ExperienceCard";
import { experienceData } from "./experience.data";
import { motion } from "framer-motion";

const parent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ExperiencesPage = () => (
  <Container size="4" style={{ margin: "0 auto", padding: "2rem 1rem" }}>
    <Heading size="7" as="h2">Professional Experience</Heading>
    <Text size="2" color="gray">
      Below is a summary of my professional roles, highlighting the skills and impact I've delivered.
    </Text>

    <motion.div
      variants={parent}
      initial="hidden"
      animate="visible"
      className="mt-5"
    >
      <Grid
        columns={{ initial: "1", md: "2" }}
        gap="4"
        css={{ gridAutoRows: "1fr" }}
      >
        {experienceData.map((exp) => (
          <motion.div key={exp.title} variants={item}>
            <Box css={{ height: "100%" }}>
              <ExperienceCard className="h-full flex flex-col" {...exp} />
            </Box>
          </motion.div>
        ))}
      </Grid>
    </motion.div>
  </Container>
);

export default ExperiencesPage;
