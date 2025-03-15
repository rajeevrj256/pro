/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5D5FEF",
        secondary: "#F5F5F5",
        accent: "#EEF2FF",
        dark: "#333333",
        light: "#FFFFFF",
      },
    },
  },
  plugins: [],
};