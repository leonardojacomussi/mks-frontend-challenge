import "@testing-library/jest-dom";
import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

import theme from "../styles/theme";
import muiTheme from "../styles/muiTheme";
import GlobalStyles from "../styles/Global";
import { SnackbarProvider } from "notistack";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import CartDrawer from "@/components/CartDrawer";
import createEmotionCache from "./createEmotionCache";
import { CartContextProvider } from "@/contexts/CartContext";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type CustomRenderProps = Omit<RenderOptions, "queries">;

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache: EmotionCache = createEmotionCache();

const customRender = (
  ui: ReactElement,
  { ...renderOptions }: CustomRenderProps = {}
) => {
  return render(
    <CacheProvider value={clientSideEmotionCache}>
      <QueryClientProvider client={new QueryClient()}>
        <MuiThemeProvider theme={muiTheme}>
          <SCThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={5} style={{ fontSize: "1.6rem" }}>
              <CartContextProvider>
                <GlobalStyles />
                <CartDrawer />
                {ui}
              </CartContextProvider>
            </SnackbarProvider>
          </SCThemeProvider>
        </MuiThemeProvider>
      </QueryClientProvider>
    </CacheProvider>,
    renderOptions
  );
}

export * from "@testing-library/react";
export { customRender as render };