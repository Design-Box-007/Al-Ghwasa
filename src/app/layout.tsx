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
        {/* Add JSON-LD schema here */}
        <Script
          type="application/ld+json"
          id="organization-schema"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://alghwasa.com/#org",
                  name: "Al Ghwasa",
                  url: "https://alghwasa.com/",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.alghwasa.com/",
                    width: 600,
                    height: 200,
                  },
                  description:
                    "Supplier of gas detection equipment, industrial gas detectors and safety solutions in the UAE.",
                  sameAs: [
                    "https://www.linkedin.com/company/al-ghwasa-technical-equipment-trading-llc/",
                    "https://www.facebook.com/profile.php?id=100069135072790",
                    "https://x.com/Spacesculpt_uae",
                  ],
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      contactType: "Sales",
                      telephone: "+971 4 3968037",
                      email: "sales@alghwasa.com",
                      areaServed: "AE",
                      availableLanguage: ["en", "ar"],
                    },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://alghwasa.com/#website",
                  url: "https://alghwasa.com/",
                  name: "Al Ghwasa",
                  publisher: { "@id": "https://alghwasa.com/#org" },
                  inLanguage: "en",
                  potentialAction: {
                    "@type": "SearchAction",
                    target:
                      "https://alghwasa.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
              ],
            }),
          }}
        />
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
