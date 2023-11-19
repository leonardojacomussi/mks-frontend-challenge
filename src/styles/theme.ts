import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({ subsets: ["latin"] });

const theme = {
  colors: {
    gray: {
      50: "#F9F9F9",
      100: "#EEEEEE",
      200: "#373737",
      300: "#2C2C2C",
    },
    black: "#000000",
    white: "#ffffff",
    blue: "#0F52BA",
  },
  border: {
    "radius": "0.8rem",
  },
  breakpoints: {
    "sm": "576px",
    "md": "768px",
    "lg": "992px",
    "xl": "1200px",
  },
};

export default theme;