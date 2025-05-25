'use client';

import React from 'react';
import { Container, Card, Flex, Heading, Text, Box, Separator } from '@radix-ui/themes';
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
      className="w-full px-4 flex justify-center pt-10 pb-10 min-h-[40vh]"
    >
      <Container size="4" style={{ margin: '0 auto', padding: 0 }}>
        <motion.div variants={child} className="w-full">
          <Card
            size="4"
            className="transition-all duration-300 hover:scale-[1.0125] hover:shadow-2xl"
            style={{
              maxWidth: '1000px',
              margin: '0 auto',
              padding: 0,
              borderRadius: '2rem',
              overflow: 'hidden',
              boxShadow: '0 6px 36px 0 rgba(30,41,59,.16)',
              background: 'var(--color-panel)',
            }}
          >
            <Flex
              direction={{ initial: 'column', md: 'row' }}
              align="stretch"
              className="w-full"
            >
              {/* image flush to card edge with left radius */}
              <Box className="w-full md:w-1/3 h-64 md:h-auto">
                <img
                  src="/images/kylepfp.jpg"
                  alt="Kyle Beck"
                  className="w-full h-full object-cover rounded-t-2xl md:rounded-t-none md:rounded-l-2xl shadow-lg"
                  style={{ minHeight: 256 }}
                />
              </Box>

              {/* text area with generous padding */}
              <Box className="w-full md:w-2/3 p-8 flex flex-col gap-5 justify-center">
                <Flex align="center" gap="2">
                  <Icon icon="mdi:account-circle" width={28} height={28} />
                  <Heading size="6" as="h2" className="tracking-tight">
                    About Me
                  </Heading>
                </Flex>
                <Separator size="4" color="indigo" />
                <Text size="2" color="gray" weight="medium">
                  Kyle Beck &bull; Software Engineer &bull; CSUSM Graduate &bull; San Diego
                </Text>

                <Text size="4" as="p" style={{ lineHeight: '1.8' }}>
                  I’m a passionate software engineer and recent graduate of California State University San Marcos (CSUSM), based in San Diego. With nearly three years of IT support experience—including my role as Help Desk Coordinator at CSUSM—I’ve built a strong foundation in troubleshooting, user support, and technical leadership.
                </Text>
                <Text size="4" as="p" style={{ lineHeight: '1.8' }}>
                  My interests span cloud infrastructure, front-end development, and building intuitive systems that solve real-world problems. Outside of work, I love experimenting with 3D printing, AR, and machine learning—always looking for creative ways to connect digital tools with physical solutions.
                </Text>
              </Box>
            </Flex>
          </Card>
        </motion.div>
      </Container>
    </motion.div>
  );
}
