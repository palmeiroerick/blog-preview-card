import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    colors: {
      /* Primary */
      yellow: "#f4d04e",

      /* Neutral*/
      white: "#ffffff",
      grey: "#808080",
      black: "#121212",
    },
    fontWeight: {
      semibold: "600",
      extrabold: "800",
    },
  },
  plugins: [],
};

export default config;
