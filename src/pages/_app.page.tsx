import Head from "next/head";
import { FC, useRef } from "react";
import theme from "@/styles/theme";
import muiTheme from "@/styles/muiTheme";
import type { AppProps } from "next/app";
import GlobalStyle from "@/styles/Global";
import { SnackbarProvider } from "notistack";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../utils/createEmotionCache";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache: EmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache: EmotionCache
};

const App: FC<MyAppProps> = ({
  Component, pageProps, emotionCache = clientSideEmotionCache
}): JSX.Element => {
  const queryClientRef = useRef<QueryClient>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  };

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>MKS Frontend Challenge</title>
        <meta charSet="utf-8" lang="pt-br" />
        <meta name="description" content="MKS Frontend Challenge - Desafio técnico para aplicação na vaga de desenvolvedor Frontend" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Theme settings */}
        <meta name="color-scheme" content="dark light" />
        {/* <!-- Chrome, Firefox OS and Opera --> */}
        <meta name="theme-color" content={theme.colors.blue} />
        {/* <!-- Windows Phone --> */}
        <meta name="msapplication-navbutton-color" content={theme.colors.blue} />
        {/* <!-- iOS Safari --> */}
        <meta name="apple-mobile-web-app-status-bar-style" content={theme.colors.blue} />
        {/* [INIT] Open Graph Protocol */}
        <meta property="og:url" content="https://mks-challenge.leonardojacomussi.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MKS Frontend Challenge" />
        <meta property="og:description" content="MKS Frontend Challenge - Desafio técnico para aplicação na vaga de desenvolvedor Frontend" />
        {/* <meta property="og:image" content="" /> */}
        {/* [END] Open Graph Protocol */}
      </Head>
      <QueryClientProvider client={queryClientRef.current}>
        <MuiThemeProvider theme={muiTheme}>
          <SCThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={5} style={{ fontSize: "1.6rem" }}>
              <GlobalStyle />
              <Component {...pageProps} />
              <ReactQueryDevtools initialIsOpen={false} />
            </SnackbarProvider>
          </SCThemeProvider>
        </MuiThemeProvider>
      </QueryClientProvider>
    </CacheProvider>
  );
};

export default App;