import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { useState } from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={true}></ReactQueryDevtools>
        </RecoilRoot>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
