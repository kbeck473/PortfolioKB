'use client';

import React from 'react';
import { Container, Card, Flex, Heading, Text, Box } from '@radix-ui/themes';
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
      className="w-full px-4"
    >
      <Container size="4" style={{ margin: '0 auto', padding: '2rem 1rem' }}>
        <motion.div variants={child} className="mt-5 w-full">
          <Card
            size="4"
            style={{
              maxWidth: '1000px',
              margin: '0 auto',
              padding: 0,                        // remove all padding
              borderRadius: 'var(--radius-2)',
              overflow: 'hidden',               // clip to one radius
              boxShadow: 'var(--shadow-2)',
            }}
          >
            <Flex
              direction={{ initial: 'column', md: 'row' }}
              className="w-full"
            >
              {/* image flush to the card edge */}
              <Box className="w-full md:w-1/3 h-64 md:h-auto">
                <img
                  src="/images/kylepfp.jpg"
                  alt="Kyle Beck"
                  className="w-full h-full object-cover"
                />
              </Box>

              {/* text area with its own padding */}
              <Box className="w-full md:w-2/3 p-6 md:p-8 flex flex-col gap-4">
                <Flex align="center" gap="2">
                  <Icon icon="mdi:account-circle" width={24} height={24} />
                  <Heading size="6" as="h2">
                    About Me
                  </Heading>
                  
                </Flex>
                <Flex>     
                  
                  <Text size="2" color="gray">
                  Kyle Beck • Software Engineer • CSUSM
                  </Text>
                </Flex>

           

                <Text size="3">
                  I'm a passionate software engineer with a strong foundation in IT support,
                  cloud infrastructure, and front-end development. I enjoy building intuitive,
                  efficient systems that solve real-world problems.
                </Text>
                <Text size="3">
                  Currently, I serve as a Help Desk Coordinator at CSUSM and am completing my B.S.
                  in Software Engineering. Outside of work, I dive into 3D printing, AR, and machine
                  learning — blending physical tools with digital creativity.
                </Text>
              </Box>
            </Flex>
          </Card>
        </motion.div>
      </Container>
    </motion.div>
  );
}
