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
        "menu-background":
          "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.8)),url('/images/menu-bg.jpg')",
        "reservation-background":
          "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.8)),url('/images/reservation-bg.jpg')",
      },
      colors: {
        primary: {
          600: "rgba(var(--color-primary-600))",
          400: "rgba(var(--color-primary-400),0.15)",
        },
        gray: {
          500: "rgba(var(--color-gray-500))",
        },
        brown: {
          700: "rgba(var(--color-brown-700))",
        },
      },
    },
  },
  plugins: [],
};
export default config;
