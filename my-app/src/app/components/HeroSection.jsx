'use client';

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import ContactForm from './ContactForm';

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.3 } } };
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

// Explicit white text on all states
const buttonClass = `
  inline-flex items-center gap-2 px-6 py-3 bg-blue-500
  !text-white hover:!text-white focus:!text-white active:!text-white visited:!text-white
  font-semibold rounded-lg shadow-md transition-colors duration-150
  hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2
  focus-visible:ring-blue-300 active:bg-blue-600
`;

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center px-6 py-8 overflow-hidden"
      style={{ color: 'var(--gray12)' }}
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      >
        <source src="/47712-451772931_small.mp4" type="video/mp4" />
      </video>

      {/* Foreground content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center gap-8"
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
        <motion.div variants={item} className="flex-1 space-y-6 text-center lg:text-left">
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
            style={{ color: 'var(--gray12)' }}
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
              className="text-white"
            />
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg max-w-xl mx-auto lg:mx-0 font-bold"
            style={{ color: 'var(--gray11)' }}
          >
            I’m Kyle Beck—a Software Engineering graduate and IT professional.
            Welcome to my portfolio where I showcase AR/AI, full-stack dev, and more.
          </motion.p>

          <motion.div variants={item} className="flex justify-center lg:justify-start gap-4">
            {/* Download Resume */}
            <a
              href="/Kyle_Beck_IT 5_2_25.pdf"
              download
              className={buttonClass}
            >
              <Icon icon="mdi:download" className="w-5 h-5" />
              Download Resume
            </a>

            {/* Contact Me Modal */}
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className={buttonClass}>
                  <Icon icon="mdi:email" className="w-5 h-5" />
                  Contact Me
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                <Dialog.Content
                  className="fixed top-1/2 left-1/2 w-full max-w-md p-6 bg-white rounded-lg shadow-lg -translate-x-1/2 -translate-y-1/2"
                  style={{ color: 'var(--gray12)' }}
                >
                  <Dialog.Title className="text-xl font-bold mb-4">
                    Send me a message
                  </Dialog.Title>
                  <ContactForm />
                  <Dialog.Close asChild>
                    <button className="absolute top-3 right-3 text-gray-600 hover:text-gray-900">
                      ✕
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
