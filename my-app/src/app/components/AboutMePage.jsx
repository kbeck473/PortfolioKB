'use client';

import React from 'react';
import { Flex, Text, Heading, Box } from '@radix-ui/themes';
import { Icon } from '@iconify/react';

const AboutMePage = () => {
  return (
    <Box
      className="w-full max-w-6xl mx-auto px-6 py-8"
    >
      <Flex direction="column" gap="4">
        {/* Icon + Heading */}
        <Flex align="center" gap="2">
          <Icon icon="mdi:account-circle" width={24} height={24} />
          <Heading size="5">About Me</Heading>
        </Flex>

        {/* Subtitle */}
        <Text color="gray" size="2">
          Kyle Beck • Software Engineer • CSUSM
        </Text>

        {/* Image + Text Layout */}
        <Flex
          direction={{ initial: 'column', md: 'row' }}
          gap="5"
          align="center"
          justify="start"
        >
          {/* Image */}
          <img
            src="/images/kylepfp.jpg"
            alt="Kyle Beck"
            className="w-full max-w-xs md:max-w-sm rounded-2xl object-cover shadow-xl"
          />

          {/* Bio Text */}
          <Flex direction="column" gap="3">
            <Text size="3">
              I'm a passionate software engineer with a strong foundation in IT
              support, cloud infrastructure, and front-end development. I enjoy
              building intuitive, efficient systems that solve real-world
              problems.
            </Text>
            <Text size="3">
              Currently, I serve as a Help Desk Coordinator at CSUSM and am
              completing my B.S. in Software Engineering. Outside of work, I
              dive into 3D printing, AR, and machine learning — blending
              physical tools with digital creativity.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AboutMePage;
