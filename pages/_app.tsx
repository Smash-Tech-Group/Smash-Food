import type { ReactElement, ReactNode } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { Poppins } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DropdownProvider } from "src/context/dropdownContext";

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  pageProps: Record<string, unknown>;
};

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <DropdownProvider>
      <main className={poppins.className}>
        {getLayout(<Component {...pageProps} />)}
      </main>
    </DropdownProvider>
  );
}
