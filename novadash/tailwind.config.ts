import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0a0b0f",
          2: "#111318",
          3: "#181c24",
        },
        accent: {
          DEFAULT: "#c8f53a",
          purple: "#6c63ff",
          red: "#ff6b6b",
          teal: "#38d9a9",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.07)",
          2: "rgba(255,255,255,0.12)",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      borderRadius: {
        card: "16px",
      },
      animation: {
        "fade-up": "fadeUp 0.4s ease both",
        pulse2: "pulse2 2s infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulse2: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
