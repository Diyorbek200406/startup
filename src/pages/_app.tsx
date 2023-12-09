import "@/styles/globals.css";
import "@fontsource/roboto";
import "react-multi-carousel/lib/styles.css";
import "nprogress/nprogress.css";
import type { AppProps } from "next/app";
import { HydrationProvider, Client } from "react-hydration-provider";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { theme } from "@/config/theme";
import { useEffect } from "react";
import { Router } from "next/router";
import nProgress from "nprogress";
nProgress.configure({ showSpinner: false });
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleRouteStart = () => nProgress.start();
    const handleRouteDone = () => nProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);
  return (
    <HydrationProvider>
      <I18nextProvider i18n={i18n}>
        <ChakraBaseProvider theme={theme}>
          <Client>
            <Component {...pageProps} />
          </Client>
        </ChakraBaseProvider>
      </I18nextProvider>
    </HydrationProvider>
  );
}
