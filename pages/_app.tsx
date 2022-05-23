import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: () => ReactNode
}

type AddPropsToLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AddPropsToLayout) {
  const getLayout = Component.getLayout || ((page:ReactElement) => page);

  /* return <Component {...pageProps} />; */
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
