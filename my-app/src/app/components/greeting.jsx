import React from "react";
import { Icon } from "@iconify/react";

export default function Greeting() {
  return (
    <div className="hero bg-base-200 h-[50vh]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/images/kylepfp.jpg"
          alt="KylePFP"
          className="w-full max-w-lg rounded-lg shadow-2xl"
        />

        <div>
          <h1 className="text-5xl font-bold">Software Engineer & IT Problem-Solver!</h1>
          <p className="py-6">
            I am Kyle Beck, a developer with an education in Software Engineering
            and a professional background in IT. Welcome to my portfolio!
          </p>
          <a
            href="/Kyle_Beck_IT 4_23_25.pdf"
            download
            className="btn btn-primary "
          >
            <Icon icon="mdi:download" className="w-5 h-5 mr-2" />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
