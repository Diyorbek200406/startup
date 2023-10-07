import '@/styles/globals.css';
import '@fontsource/roboto';
import 'react-multi-carousel/lib/styles.css';

import { ChakraBaseProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { theme } from '@/config/theme';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { Client, HydrationProvider } from 'react-hydration-provider';

export default function App({ Component, pageProps }: AppProps) {
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
