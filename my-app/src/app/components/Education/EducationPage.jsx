// components/Education/EducationPage.jsx
"use client";

import React from "react";
import { Heading, Text, Container } from "@radix-ui/themes";
import EducationCard from "./EducationCard";
import { educationData } from "./education.data";
import { motion } from "framer-motion";

const parent = {
  hidden: {},
  visible: {
    transition: { when: "beforeChildren", staggerChildren: 0.2 },
  },
};

const child = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function EducationPage() {
  return (
    <Container size="4" style={{ margin: "0 auto", padding: "2rem 1rem" }}>
      <Heading size="7" as="h2" className="mb-4">
        Education
      </Heading>
      <Text size="2" color="gray" className="mb-6">
        A summary of my academic background and key highlights from my degree programs and certifications.
      </Text>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={parent}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {educationData.map((edu) => (
          <motion.div key={edu.institution} variants={child}>
            <EducationCard {...edu} />
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}
