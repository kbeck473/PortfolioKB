"use client";
import React from "react";
import { Icon } from "@iconify/react";

export default function ProjectCard({
  title,
  description,
  imageSrc,
  technologies,
  githubUrl,
  isNew,
  tags = [],
  className = "",
}) {
  return (
    <div
      className={`
        w-full max-w-2xl mx-auto mb-8
        rounded-2xl shadow-lg overflow-hidden
        transition-colors duration-300
        ${className}
      `}
      style={{
        background: "var(--color-panel)", // Use Radix theme panel color
      }}
    >
      <div className="w-full h-60 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover rounded-t-2xl"
        />
      </div>
      <div className="p-7">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl font-bold text-[var(--color-foreground)]">{title}</span>
          {isNew && (
            <span className="bg-pink-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
              NEW
            </span>
          )}
        </div>
        <p className="text-base text-[var(--color-foreground)] opacity-80 mb-4">{description}</p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 dark:bg-gray-800 text-xs font-medium px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-4 mb-4">
            {technologies.map((tech, idx) => (
              <span key={idx} className="flex items-center gap-1">
                <Icon icon={tech.iconSrc} className="w-7 h-7" />
                <span className="text-sm">{tech.name}</span>
              </span>
            ))}
          </div>
        )}

        {/* Action row */}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900
              text-blue-700 dark:text-blue-300 px-4 py-2 rounded-md font-semibold
              hover:bg-blue-200 dark:hover:bg-blue-800 transition
              text-base shadow
            "
          >
            <Icon icon="mdi:github" width={22} height={22} />
            View Code
          </a>
        )}
      </div>
    </div>
  );
}
 