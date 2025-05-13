// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/globals.css",      // ← ensures @apply in globals.css works
  ],
  theme: {
    extend: {
      colors: {
        brand:       "var(--brand)",
        "brand-hover":"var(--brand-hover)",
      },
    },
  },
  plugins: [
    // remove DaisyUI if you’re no longer using it
    // require("daisyui"),
  ],
};
