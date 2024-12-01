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
        theme: "#FF6600",
        bg: "#F5F5F5",
        details: "#DEDEDE",
        title: "#565656",
        text: "#646464",
        button: "#FFFFFF",
        link: "#FA13C8"
      },
    },
  },
  plugins: [],
} satisfies Config;
