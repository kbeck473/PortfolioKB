import React from "react";
import { Icon } from "@iconify/react";

export default function Greeting() {
  return (
    <div
      className="
        hero bg-base-200

        /* always grow to fit on small/medium */
        h-auto

        /* only cap on large+ screens */
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

            /* fluid height */
            h-auto 

            /* cap image on large screens */
            lg:max-h-[45vh] 

            object-contain 
            rounded-lg 
            shadow-2xl
          "
        />

        <div className="space-y-4 lg:pl-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Software Engineer & IT Problem-Solver!
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
