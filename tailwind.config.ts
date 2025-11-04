import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mt: { bg: "#FAFAF8", ink: "#111418", accent: "#8B5CF6", rose: "#F472B6" },
      },
      boxShadow: { soft: "0 8px 30px rgba(0,0,0,0.06)" },
      borderRadius: { xl2: "1.25rem" },
    },
  },
  plugins: [],
} satisfies Config;
