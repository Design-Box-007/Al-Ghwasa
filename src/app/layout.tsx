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
        {/* Google Analytics Scripts */}
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
