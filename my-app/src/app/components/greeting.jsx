import React from "react";

export default function Greeting() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* use the file link you uploaded here */}
        <img
          src="/mnt/data/5437f504-1a42-49de-931b-862907d65a84.png"
          alt="Spiderman"
          className="max-w-sm rounded-lg shadow-2xl"
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
