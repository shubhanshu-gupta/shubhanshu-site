import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        copper: {
          50:  "#FEF5EA",
          100: "#FDE4BB",
          200: "#F9C97A",
          500: "#C87D36",
          700: "#8A5019",
          900: "#4A2A0A",
        },
        cream: {
          50:  "#F7F5F0",
          100: "#EEEAE3",
          200: "#E2DDD5",
          300: "#CCC7BC",
        },
        ink: {
          300: "#B0AB9F",
          500: "#6E6A62",
          700: "#3D3A34",
          900: "#1A1916",
        },
        hero: "#0C0B09",
        "live-green": "#1F7A4A",
        "live-bg":    "#E8F5EF",
        "mrr-gold":   "#B08D3A",
        "mrr-bg":     "#FDF8EA",
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      maxWidth: {
        site: "1120px",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
