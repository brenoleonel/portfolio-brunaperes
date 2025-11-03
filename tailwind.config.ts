import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      colors: {
        background: "#FBFBFB",
        foreground: "#1A1A1E",
      },
    },
  },
  plugins: [],
} satisfies Config;
