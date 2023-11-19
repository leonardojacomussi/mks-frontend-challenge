import { montserrat } from "./theme";
import { createTheme, Theme } from "@mui/material/styles";
// Create a theme instance.
const muiTheme: Theme = createTheme({
  typography: {
    fontFamily: [
      montserrat.style.fontFamily,
      "sans-serif",
    ].join(","),
    htmlFontSize: 10,
  }
});

export default muiTheme;