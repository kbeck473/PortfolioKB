/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // your source files
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/projects/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // remove daisyui here
    // e.g. require('@tailwindcss/forms'),
  ],
};
