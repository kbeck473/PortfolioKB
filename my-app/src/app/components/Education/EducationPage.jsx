// components/Education/EducationPage.jsx
"use client";

import React from "react";
import { Heading, Text } from "@radix-ui/themes";
import EducationCard from "./EducationCard";
import { educationData } from "./education.data";
import { motion } from "framer-motion";

const parent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.2 },
  },
};

const child = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function EducationPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={parent}
      // tiny mobile padding, full at sm+
      className="w-full px-2 sm:px-6 py-6 sm:py-12"
    >
      <div className="w-full sm:max-w-7xl mx-auto px-2">
        <Heading size="7" as="h2" className="mb-4">
          Education
        </Heading>
        <Text size="2" color="gray" className="mb-6">
          A summary of my academic background and key highlights from my degree programs.
        </Text>

        <div className="space-y-6">
          {educationData.map((edu) => (
            <motion.div key={edu.institution} variants={child}>
              <EducationCard {...edu} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
