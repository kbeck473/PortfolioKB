'use client';

import React from 'react';
import { Card, Heading, Text, Flex, Box, Separator } from '@radix-ui/themes';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const parent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.2 },
  },
};
const child = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutMePage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={parent}
      className="w-full px-4 flex justify-center pt-12 pb-12 min-h-[40vh]"
    >
      <motion.div variants={child} className="w-full flex justify-center">
        <Card
          size="4"
          className="
            w-full max-w-4xl
            transition-all duration-300
            hover:scale-[1.0125] hover:shadow-2xl
            rounded-2xl overflow-hidden shadow-lg
          "
          style={{
            padding: 0,
            borderRadius: "2rem",
            background: "var(--color-panel)",
          }}
        >
          <Flex
            direction={{ initial: "column", md: "row" }}
            align="stretch"
            className="w-full"
          >
            {/* Image on the left (or top on mobile) */}
            <Box className="w-full md:w-1/3 h-64 md:h-auto">
              <img
                src="/images/kylepfp.jpg"
                alt="Kyle Beck"
                className="w-full h-full object-cover rounded-t-2xl md:rounded-t-none md:rounded-l-2xl shadow-lg"
                style={{ minHeight: 256, objectPosition: "center" }}
                loading="lazy"
              />
            </Box>
            {/* Card content on the right */}
            <Box className="w-full md:w-2/3 px-10 py-12 flex flex-col gap-6 justify-center">
              {/* Header */}
              <Heading size="7" as="h1" className="mb-2 tracking-tight">
                About Me
              </Heading>
              {/* Subtext */}
              <Text size="3" color="gray" className="mb-4">
                Software Engineer • CSUSM Graduate • San Diego
              </Text>
              {/* About Paragraph */}
              <Text size="4" as="p" className="mb-6">
                I’m Kyle—a software engineer who loves turning ideas into real, useful things. With a background in IT support and hands-on engineering, I enjoy building tools and systems that connect the digital and physical worlds.
              </Text>
              {/* Interests Subtitle */}
              <Heading size="5" as="h2" className="mb-2 mt-2 tracking-tight">
                Interests
              </Heading>
              {/* Icons */}
              <Flex gap="6" wrap="wrap" align="center" justify="start">
                <Flex direction="column" align="center" gap="1">
                  <Icon icon="mdi:dumbbell" width={28} height={28} className="text-blue-500" />
                  <Text size="2" className="mt-1">Powerlifting</Text>
                </Flex>
                <Flex direction="column" align="center" gap="1">
                  <Icon icon="mdi:school" width={28} height={28} className="text-indigo-600" />
                  <Text size="2" className="mt-1">CSUSM Athlete</Text>
                </Flex>
                <Flex direction="column" align="center" gap="1">
                  <Icon icon="mdi:music" width={28} height={28} className="text-pink-500" />
                  <Text size="2" className="mt-1">Festivals</Text>
                </Flex>
                <Flex direction="column" align="center" gap="1">
                  <Icon icon="mdi:car-sports" width={28} height={28} className="text-yellow-500" />
                  <Text size="2" className="mt-1">Cars</Text>
                </Flex>
                <Flex direction="column" align="center" gap="1">
                  <Icon icon="mdi:keyboard-variant" width={28} height={28} className="text-green-500" />
                  <Text size="2" className="mt-1">Keyboards</Text>
                </Flex>
                <Flex direction="column" align="center" gap="1">
                  <Icon icon="mdi:watch-variant" width={28} height={28} className="text-purple-500" />
                  <Text size="2" className="mt-1">Watches</Text>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Card>
      </motion.div>
    </motion.div>
  );
}
