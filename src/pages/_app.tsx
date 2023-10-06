import '@/styles/globals.css';
import '@fontsource/roboto';
import 'react-multi-carousel/lib/styles.css';

import { ChakraBaseProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { theme } from '@/config/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraBaseProvider>
  );
}
