import React from 'react';
import App from 'next/app';
import type { AppProps, AppContext } from 'next/app';
import setMock from '../mocks';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  setMock();
}

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
