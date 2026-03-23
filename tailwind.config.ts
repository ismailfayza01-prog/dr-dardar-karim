import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        mutedForeground: "rgb(var(--muted-foreground) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        primaryForeground: "rgb(var(--primary-foreground) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        secondaryForeground: "rgb(var(--secondary-foreground) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        accentForeground: "rgb(var(--accent-foreground) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        cardForeground: "rgb(var(--card-foreground) / <alpha-value>)",
        destructive: "rgb(var(--destructive) / <alpha-value>)",
        sidebar: "rgb(var(--sidebar) / <alpha-value>)",
        sidebarForeground: "rgb(var(--sidebar-foreground) / <alpha-value>)",
        sidebarAccent: "rgb(var(--sidebar-accent) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)"
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      boxShadow: {
        ambient: "0 20px 60px rgba(15, 23, 42, 0.08)",
        glass: "0 18px 45px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
