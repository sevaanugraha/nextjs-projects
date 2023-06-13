/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  },

  theme: {
    extend: {
      colors: {
        "hover-light": "rgba(0, 0, 0, .04)",
        "hover-dark": "rgba(255, 255, 255, .06)",

        "primary-dark": "#1E3A8A",
        "primary-main": "#1E40AF",
        "primary-light": "#3B82F6",

        "secondary-dark": "#7E22CE",
        "secondary-main": "#A855F7",
        "secondary-light": "#D8B4FE",

        "neutrals-dark": "#171717",
        "neutrals-main": "#262626",
        "neutrals-light": "#525252",
        "neutrals-extralight": "#FAFAFA",
      },

      flex: {
        '2': '2',
        '1-auto': '1 auto',
        '2-auto': '2 auto'
      }
    },
  },
  plugins: [],
};
