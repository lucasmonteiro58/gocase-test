import type { Config } from "tailwindcss";
import { indigo } from "tailwindcss/colors";

export default <Partial<Config>>{
  prefix: "tw-",
  theme: {
    fontFamily: {
      sans: ["Quicksand", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: indigo[500],
          50: indigo[50],
          100: indigo[100],
          200: indigo[200],
          300: indigo[300],
          400: indigo[400],
          500: indigo[500],
          600: indigo[600],
          700: indigo[700],
          800: indigo[800],
          900: indigo[900],
        },
      },
    },
  },
};
