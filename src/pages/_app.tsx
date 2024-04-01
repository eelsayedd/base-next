// src/pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@/store'; // Adjust the path according to your structure
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme/theme';
import { appWithTranslation } from 'next-i18next';
import "@locales"

const MyApp=({ Component, pageProps }: AppProps)=> {
  return (
    <AppCacheProvider>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </AppCacheProvider>
  );
}

export default appWithTranslation(MyApp);
