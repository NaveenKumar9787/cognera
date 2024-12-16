
import "../styles/globals.css";
const Header = dynamic(() => import('../components/layouts/header/header'), { ssr: false })
const Footer = dynamic(() => import('../components/layouts/footer/footer'), { ssr: false })
import Container from "../ui/container";
import { Providers } from "../lib/providers";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "@/components/common/loading";
import { Viewport } from "next";
import Head from "next/head";
import Link from "next/link";
import InlineStylesHead from "@/lib/Inline-styles-head";

import Breadcrumb from "@/components/common/breadcrumb";
import { usePathname } from "next/navigation";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Body from "@/components/layout/body";
import Script from "next/script";


export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: 'white',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata = {
  metadataBase: new URL('https://vitalnxt.ai/'),
  //metadataBase: new URL('https://vitalnxtai-s-web.izoleap.com/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'en-Ru': '/en-RU',
      'de-DE': '/de-DE',
    },
  },
  // openGraph: {
  //   images: '/og-image.png',
  // },
  // referrer: 'origin-when-cross-origin',
  // keywords: ['E-commerce solutions, Website development services, Online store development, E-commerce platform development, Custom e-commerce software, E-commerce website design, Shopping cart integration, Payment gateway integration, Responsive e-commerce websites, Scalable e-commerce solutions, E-commerce website optimization, User-friendly e-commerce platforms, E-commerce software development company, SEO-friendly e-commerce websites, Mobile commerce solutions, E-commerce site maintenance, E-commerce website security, Inventory management software, Multi-channel selling platforms, E-commerce analytics'],
  // authors: [{ name: 'VitalNxtai', url: 'https://twitter.com/VitalNxtai' }],
  // title: {
  //   default: "Unlock The Power Of Health Data",
  //   template: "%s - VitalNxtai"
  // },
}

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      {/* <InlineStylesHead /> */}
      <Body>

        {/* <body suppressHydrationWarning={true} > */}
        <Head>
          <meta property="og:title" content="Smart Medical Device Ecosystem" />
          <meta property="og:image" content="https://stage-web.drstore.in/logo-header.png" />
          <meta property="og:url" content="https://stage-web.drstore.in/" />
          <Link rel="preload" as="image" href="/logo-header.png" />
          <Link href="" as="file" rel="preload" />
        </Head>
        <ReactQueryProvider >
          <Container className="max-w-full">

            <Header />
            {/* <Breadcrumb /> */}
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-DNLD2570LX" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DNLD2570LX');
        `}
      </Script>
            <Providers>{children}</Providers>
            <Footer />

            <ToastContainer autoClose={2000} />
          </Container>
        </ReactQueryProvider>
        {/* </body> */}
      </Body>
    </html>
  );
}



