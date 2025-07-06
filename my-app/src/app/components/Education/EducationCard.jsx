// components/EducationCard.jsx
"use client";

import React from "react";

export default function EducationCard({
  institution,
  degree,
  duration,
  highlights,
  imageSrc,
  className = "",
}) {
  const isAWS = institution.toLowerCase().includes("amazon web services");

  return (
    <div
      className={`
        w-full max-w-2xl mx-auto mb-8
        rounded-2xl shadow-lg overflow-hidden
        transition-transform duration-300
        hover:scale-[1.015] hover:shadow-2xl
        ${className}
      `}
      style={{
        background: "var(--color-panel)",
      }}
    >
      {/* Image section */}
      {imageSrc && (
        isAWS ? (
          // Special layout for AWS badge
          <div className="w-full h-72 bg-white flex items-center justify-center p-10">
            <img
              src={imageSrc}
              alt={`${institution} preview`}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
            />
          </div>
        ) : (
          // Default banner-style layout for schools, etc.
          <div className="w-full h-60 overflow-hidden">
            <img
              src={imageSrc}
              alt={`${institution} preview`}
              className="w-full h-full object-cover rounded-t-2xl"
              loading="lazy"
            />
          </div>
        )
      )}

      {/* Content section */}
      <div className="p-7">
        <div className="mb-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[var(--color-foreground)]">
              {institution}
            </span>
          </div>
          <div className="mt-1 text-left">
            <span className="text-base text-blue-500 opacity-80 block">
              {degree} • {duration}
            </span>
          </div>
        </div>

        {/* Highlights */}
        {highlights && highlights.length > 0 && (
          <div className="mt-4">
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 block">
              Program Highlights:
            </span>
            <ul className="list-disc pl-5 space-y-2 text-[0.92rem] text-[var(--gray-a11)]">
              {highlights.map((hl, i) => (
                <li key={i}>{hl}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
