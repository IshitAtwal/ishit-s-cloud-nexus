import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brand: {
          sky: "hsl(var(--brand-sky))",
          "sky-soft": "hsl(var(--brand-sky-soft))",
          green: "hsl(var(--brand-green))",
        },
        terminal: {
          fg: "hsl(var(--terminal-fg))",
          prompt: "hsl(var(--terminal-prompt))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-accent": "var(--gradient-accent)",
      },
      boxShadow: {
        glass: "var(--shadow-glass)",
        card: "var(--shadow-card)",
      },
      keyframes: {
        "float-card": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-9px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "float-card": "float-card 6s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
