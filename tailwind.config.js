module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        jellee: ["Jellee", "Helvetica", "sans-serif"],
      },
      colors: {
        flamingo: {
          50: "#f9f7fa",
          100: "#f7eaf9",
          200: "#f1cbf5",
          300: "#eca6f1",
          400: "#eb74ed",
          500: "#ea48e8",
          600: "#d82cda",
          700: "#ac23b9",
          800: "#811e96",
          900: "#641a6a",
        },
        blush: {
          50: "#fcfaf9",
          100: "#fbf3f4",
          200: "#f8dee5",
          300: "#f5bdce",
          400: "#f389a6",
          500: "#f15c79",
          600: "#e03a53",
          700: "#b22c43",
          800: "#802336",
          900: "#601d2c",
        },
        royalblue: {
          50: "#f6f9fc",
          100: "#ebf4fb",
          200: "#d2e2f8",
          300: "#b5c9f7",
          400: "#8b9ff5",
          500: "#5e72f2",
          600: "#434fe8",
          700: "#373eca",
          800: "#2b3199",
          900: "#232875",
        },
        indigo: {
          50: "#f6f9fc",
          100: "#ecf3fb",
          200: "#d4dff9",
          300: "#b9c6f7",
          400: "#939af6",
          500: "#696df4",
          600: "#4d4aec",
          700: "#3d3ad1",
          800: "#2f2ea0",
          900: "#26277b",
        },
      },
    },
  },
  variants: {
    extend: {
      scale: ["active"],
    },
  },
  plugins: [],
};
