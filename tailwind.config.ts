import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header-background": "url('/images/coffee-bg.jpg')",
        "menu-background":
          "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.8)),url('/images/menu-bg.jpg')",
        "coffee-background":
          "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url('/images/reservation-bg.jpg')",
      },
      fontFamily:{
          'BNazanin': ['BNazanin', 'sans-serif'],
          'Vazir': ['Vazir', 'sans-serif'],
          'Nastalig': ['Nastalig', 'sans-serif'],
          'IranSansMedium': ['IranSansMedium', 'sans-serif'],
          'IranSansRegular': ['IranSansRegular', 'sans-serif'],
      },
      colors: {
        primary: {
          600: "rgba(var(--color-primary-600))",
          500: "rgba(var(--color-primary-500))",
          400: "rgba(var(--color-primary-400),0.15)",
        },
        gray: {
          500: "rgba(var(--color-gray-500))",
        },
        brown: {
          700: "rgba(var(--color-brown-700))",
        },
      },
      boxShadow: {
        "3xl": "0px 0px 60px -30px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
