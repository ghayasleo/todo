import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        sans: [
          '"Poppins"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        background: "#444",
        cyan: {
          50: "#E5FBFF",
          100: "#CCF7FF",
          200: "#99F0FF",
          300: "#66E8FF",
          400: "#38E1FF",
          500: "#04D9FF",
          600: "#00B2D1",
          700: "#008299",
          800: "#005766",
          900: "#002B33",
          950: "#001619",
        },
        russianviolet: {
          50: "#E9D1FF",
          100: "#D5A8FF",
          200: "#AB52FF",
          300: "#7E00F5",
          400: "#52009E",
          500: "#250048",
          600: "#1D0038",
          700: "#150029",
          800: "#10001F",
          900: "#08000F",
          950: "#030005",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
