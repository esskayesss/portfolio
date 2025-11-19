import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "xs": "var(--size-xs)",
        "sm": "var(--size-sm)",
        "base": "var(--size-base)",
        "lg": "var(--size-lg)",
        "xl": "var(--size-xl)",
        "2xl": "var(--size-2xl)",
        "3xl": "var(--size-3xl)",
      },
      colors: {
        fg: "#BDBFCB",
        subtext: "#A7A9B5",
        bg: "#060914",
        ghost: "#343742",

        dim: {
          fg: "#878996",
          bg: "#121520",
        },

        accent: {
          fg: "#C6DFEC",
          bg: "#0E121F",
        },

        yellow: {
          fg: "#E1C084",
          bg: "#66431F",
        },

        green: {
          fg: "#A9D076",
          bg: "#1C4642",
        },

        blue: {
          fg: "#798DDC",
          bg: "#0D2C4E",
        },

        magenta: {
          bg: "#4C1036",
          fg: "#BB5D7D",
        },

        cyan: {
          fg: "#85E0CB",
          bg: "#104351"
        }
      },
      fontFamily: {
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
        proto: "var(--font-proto-mono)",
      }
    },
  },
  plugins: [],
} satisfies Config;
