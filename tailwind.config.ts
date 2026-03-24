import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Covers the src folder if you have one
    "./*.{js,ts,jsx,tsx,mdx}",        // Covers root files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;