/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Prompt"', ...defaultTheme.fontFamily.sans],

        display: ['"Roboto"', "monospace"],
        hero: ['"DansestudietDisplay1"', "monospace",],
        herob: ['"DansestudietDisplay1-Bold"', "monospace",], // Adds a new `font-display` class
      },

      spacing: {
        450: "450px",
        260: "260px",
        500: "500px",
        600: "600px",
        560: "560px",
        580: "580px",
        410: "481px",
        700: "700px",
        900: "900px",
        "100px": "100px",
        390: "390px",
        270: "270px",
        110: "110px",
      },

      colors: {
        pink: {
          50: "#FFF7F7",
          100: "#FFEEEE",
          200: "#",
          300: "#",
          400: "#",
          500: "#",
          600: "#",
          700: "#",
          800: "#",
          900: "#",
        },

        rod: {
          500: "#8E1322",
          600: "#730D19",
          300: "#E6253C",
        },
        grey: {
          500: "#231F20",
        },
      },
        }
    },
  };