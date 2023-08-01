/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        // Light mode colors
        primary: "#007BFF",
        secondary: "#6C757D",
        background: "#FFFFFF",
        text: "#333333",

        // Dark mode colors
        darkPrimary: "#FBBD23",
        darkSecondary: "#4B5563",
        darkBackground: "#1A202C",
        darkText: "#E2E8F0",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },
  plugins: [],
};
