'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import { Icon } from '@iconify/react';

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.3 } } };
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function HeroSection() {
  return (
    <section
      className="
        relative min-h-[70vh]
        flex items-center justify-center px-6
        bg-[#f8f9fa] text-gray-900
        overflow-hidden
      "
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center gap-8"
      >
        {/* Profile Image */}
        <motion.div variants={item} className="flex-1">
          <Image
            src="/images/kylepfp.jpg"
            alt="Kyle Beck"
            width={600}
            height={600}
            className="rounded-2xl shadow-2xl object-cover"
          />
        </motion.div>

        {/* Text & CTA */}
        <motion.div
          variants={item}
          className="flex-1 space-y-6 text-center lg:text-left"
        >
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            <TypeAnimation
              sequence={[
                'Software Engineer', 2000,
                'Cloud Enthusiast', 2000,
                'IT Professional', 2000,
                'Problem Solver', 2000,
                'Powerlifter', 2000,
              ]}
              wrapper="span"
              cursor
              repeat={Infinity}
            />
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg max-w-xl mx-auto lg:mx-0 opacity-90"
          >
            I’m Kyle Beck—a Software Engineering graduate and IT professional.
            Welcome to my portfolio where I showcase AR/AI, full-stack dev, and more.
          </motion.p>

          <motion.div variants={item}>
            <a
              href="/Kyle_Beck_IT_5_2_25.pdf"
              download
              className="
                inline-flex items-center gap-2
                px-6 py-3
                bg-blue-500 hover:bg-blue-600
                text-white font-semibold
                rounded-lg shadow-md
                transition
              "
            >
              <Icon icon="mdi:download" className="w-5 h-5" />
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
