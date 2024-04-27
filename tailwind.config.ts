import type { Config } from "tailwindcss";
import { slate } from "tailwindcss/colors";

export default <Partial<Config>>{
  prefix: "tw-",
  theme: {
    fontFamily: {
      sans: ["Quicksand", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: slate[500],
          50: slate[50],
          100: slate[100],
          200: slate[200],
          300: slate[300],
          400: slate[400],
          500: slate[500],
          600: slate[600],
          700: slate[700],
          800: slate[800],
          900: slate[900],
        },
      },
      backgroundImage: {
        phone: "url('~/assets/images/iphone15.png')",
      },
    },
  },
};
