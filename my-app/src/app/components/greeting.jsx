import React from "react";

export default function Greeting() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/images/kylepfp.jpg"
          alt="KylePFP"
          // bumped up to max-w-lg (512px)
          className="w-full max-w-lg rounded-lg shadow-2xl"
        />

        <div>
          <h1 className="text-5xl font-bold">Hello there!</h1>
          <p className="py-6">
            I am Kyle Beck, a developer with an education in Software Engineering
            and a professional background in IT. Welcome to my portfolio!
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
