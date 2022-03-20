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
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
