import type { Config } from "tailwindcss";
import { amber } from "tailwindcss/colors";

export default <Partial<Config>>{
  prefix: "tw-",
  theme: {
    fontFamily: {
      sans: ["Quicksand", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: amber[500],
          50: amber[50],
          100: amber[100],
          200: amber[200],
          300: amber[300],
          400: amber[400],
          500: amber[500],
          600: amber[600],
          700: amber[700],
          800: amber[800],
          900: amber[900],
        },
      },
      backgroundImage: {
        phone: "url('~/assets/images/iphone15.png')",
      },
    },
  },
};
