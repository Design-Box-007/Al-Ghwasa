import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Comman/Navbar";
import Footer from "@/components/Comman/Footer";
import { ToastContainer } from "react-toastify";
import ScrollToTopButton from "@/components/Comman/ScrollToTop";
import FloatingWhatsapp from "@/components/Comman/FloatingWhatsapp";
import Script from "next/script";
import { GoogleAnalytics } from "./google-analytics";

export const metadata: Metadata = {
  title: "Al Ghwasa Technical Equipment",
  description: "A complete safety solution provider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N6HT69WK');
          `}
        </Script>

        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6TWP40MEWL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6TWP40MEWL');
          `}
        </Script>
      </head>

      <body>
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N6HT69WK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <ToastContainer />
        <Navbar />
        <GoogleAnalytics /> {/* 👈 track route changes */}
        {children}
        <FloatingWhatsapp />
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
