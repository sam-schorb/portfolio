import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color names and their HEX values
        mediumGray: '#adb1b8',
        darkGray: '#18181b',
        nearlyDarkGray: '#202024',
        shadowGray: '#5a6066',
        fadeGray: '#2e3033',
        textPink: '#ff4b66',
        shadowPink: '#c93b50',
        litPink: '#ff8194',
        customWhite: '#edeef0'
      },
      borderColor: {
        focus: '#ff4b66', // your textPink color
      },
      borderWidth: {
        focus: '1px', // or any thickness you prefer
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
