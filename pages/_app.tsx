import "tailwindcss/tailwind.css";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./style.css";

import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import { ColorModeScript } from "nextjs-color-mode";
import React, { PropsWithChildren, useEffect, useState } from "react";

import Footer from "components/Footer";
import { GlobalStyle } from "components/GlobalStyles";
import Navbar from "components/Navbar";
import NavigationDrawer from "components/NavigationDrawer";
import NewsletterModal from "components/NewsletterModal";
import WaveCta from "components/WaveCta";
import {
  NewsletterModalContextProvider,
  useNewsletterModalContext,
} from "contexts/newsletter-modal.context";
import { NavItems } from "types";
import Router from "next/router";
import Spinner from "components/Spinner";
import CompanyFooter from "@/components/CompanyFooter";
import StickySocialMediaBar from "@/components/StickySocialMediaBar";

export interface SharedPageProps {
  draftMode: boolean;
  token: string;
}
const navItems: NavItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "HR News", href: "/posts" },
  { title: "Contact", href: "/contact" },
];

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const startLoading = () => {
      setLoading(true);
    };

    const stopLoading = () => {
      setLoading(false);
    };

    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);
    Router.events.on("routeChangeError", stopLoading);

    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
      Router.events.off("routeChangeError", stopLoading);
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6WCSKJXF5T"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', 'G-6WCSKJXF5T');
            `,
          }}
        />
        {/* <link rel="alternate" type="application/rss+xml" href={EnvVars.URL + 'rss'} title="RSS 2.0" /> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-117119829-1', 'auto');
          ga('send', 'pageview');`,
          }}
        /> */}
        {/* <script async src="https://www.google-analytics.com/analytics.js"></script> */}
      </Head>
      <ColorModeScript />
      <GlobalStyle />
      {loading ? (
        <Spinner />
      ) : (
        <Providers>
          <Modals />
          <Navbar items={navItems} />
          <StickySocialMediaBar />
          <Component {...pageProps} />
          <CompanyFooter />

          <Footer />
        </Providers>
      )}
    </>
  );
}

function Providers<T>({ children }: PropsWithChildren<T>) {
  return (
    <NewsletterModalContextProvider>
      <NavigationDrawer items={navItems}>{children}</NavigationDrawer>
    </NewsletterModalContextProvider>
  );
}

function Modals() {
  const { isModalOpened, setIsModalOpened } = useNewsletterModalContext();
  if (!isModalOpened) {
    return null;
  }
  return <NewsletterModal onClose={() => setIsModalOpened(false)} />;
}

export default MyApp;
