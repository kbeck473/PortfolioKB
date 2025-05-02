'use client';

import React from "react";
import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";

export default function Greeting() {
  return (
    <div
      className="
        hero bg-base-200
        h-auto
        lg:max-h-[50vh]
        lg:overflow-hidden
      "
    >
      <div className="hero-content flex-col lg:flex-row-reverse items-center h-full">
        <img
          src="/images/kylepfp.jpg"
          alt="KylePFP"
          className="
            w-full 
            max-w-lg 
            h-auto 
            lg:max-h-[45vh] 
            object-contain 
            rounded-lg 
            shadow-2xl
          "
        />

        <div className="space-y-4 lg:pl-8">
                  <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{ minHeight: "3.5rem", minWidth: "24ch" }}
          >
            <TypeAnimation
              sequence={[
                "Software Engineer 🔧",
                10000,
                "Cloud Enthusiast ☁️",
                10000,
                "IT Professional 💼",
                10000,
                "Tech Explorer 🧭",
                10000,
                "Code Craftsman 💻",
                10000,
                "Problem Solver 🧠",
                10000,
                "Powerlifter 🏋️‍♂️",
                10000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: "inline-block" }}
            />
          </h1>

          <p className="max-w-md">
            I am Kyle Beck, a developer with an education in Software Engineering
            and a professional background in IT. Welcome to my portfolio!
          </p>

          <a
            href="/Kyle_Beck_IT 4_23_25.pdf"
            download
            className="btn btn-primary"
          >
            <Icon icon="mdi:download" className="w-5 h-5 mr-2" />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
