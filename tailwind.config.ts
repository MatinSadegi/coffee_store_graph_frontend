import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header-background": "url('/images/coffee-bg.jpg')",
      },
      colors: {
        primary: {
          600: "rgba(var(--color-primary-600))",
        },
        gray: {
          500: "rgba(var(--color-gray-500))",
        },
      },
    },
  },
  plugins: [],
};
export default config;
