module.exports = {
  content: [
    "./",
    "./client/*.{js,jsx,ts,tsx}",
    "./client/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightYellow: "#FAFAEF",
        shamelessOrange: {
          200: "#FBD9D0",
          500: "#F16842",
        },
        shamelessLilac: {
          500: '#D9CFE5',
          600: '#967BB7',
          700: '#634884'
        }
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
