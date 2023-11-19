import "styled-components";

interface IPalette {
  50: string;
  100: string;
  200: string;
  300: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      gray: IPalette,
      black: string,
      white: string,
      blue: string,
    },
    border: {
      radius: string,
    },
    breakpoints: {
      sm: string,
      md: string,
      lg: string,
      xl: string,
    },
  };
};