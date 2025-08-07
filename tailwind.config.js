/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'linkedin-blue': '#0A66C2',
        'linkedin-light': '#f3f2ef',
        'linkedin-dark': '#004182',
      }
    },
  },
  plugins: [],
};