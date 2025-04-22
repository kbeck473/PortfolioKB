// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}", // Include all files in the src folder
      "./components/**/*.{js,ts,jsx,tsx}",
      "./my-app/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")],
  };

