import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          light: "#4CCAF5",
          dark: "#2B0B9B",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [], // HeroUI প্লাগইন সরিয়ে ফেলা হয়েছে
} satisfies Config;
