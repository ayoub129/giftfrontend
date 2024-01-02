module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    fontFamily: {
      primary: "Poppins",
    },
    screens: {
      "2xl": { max: "1500px" },

      xl: { max: "1240px" },

      x: { max: "1150px" },

      lg: { max: "1050px" },

      md: { max: "800px" },

      sm: { max: "599px" },

      smm: { max: "500px"},

      smx: { max: "350px" }
    },
    extend: {
      backgroundImage: {
        // "hero-fleet": "url('assets/fleet-bg.jpg')",
      },
      filtering: {
        // fillSvg:
        //   "invert(65%) sepia(67%) saturate(5666%) hue-rotate(220deg) brightness(102%) contrast(91%)",
      },
      colors: {
        // white: "#FFFF",
        // primary: "#1C202A",
        // secondary: "#82899C",
        // tertiary: "#535B71",
        // accent: {
        //   DEFAULT: "#8279F4",
        //   hover: "#3E369F",
        // },
      },
    },
  },
  plugins: [],
};