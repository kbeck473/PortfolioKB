'use client';

import React from "react";
import EducationCard from "./EducationCard";
import { educationData } from "./education.data";
import { Container, Heading, Text } from "@radix-ui/themes";
import { motion } from "framer-motion";

// Animation variants
const parent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.2 }
  }
};

const child = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const EducationPage = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={parent}
    className="w-full px-4"
  >
    <Container size="4" style={{ margin: "0 auto", padding: "2rem 1rem" }}>
      <Heading size="7" as="h2">
        Education
      </Heading>
      <Text size="2" color="gray">
        A summary of my academic background and key highlights from my degree programs.
      </Text>

      <div className="mt-5 w-full">
        {educationData.map((edu) => (
          <motion.div key={edu.institution} variants={child}>
            <EducationCard
              {...edu}
              style={{
                maxWidth: "none",
                overflow: "hidden",
                borderRadius: "var(--radius-2)"
              }}
            />
          </motion.div>
        ))}
      </div>
    </Container>
  </motion.div>
);

export default EducationPage;
