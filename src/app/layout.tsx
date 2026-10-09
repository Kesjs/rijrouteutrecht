import type { Metadata } from "next";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-700.css";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/data/site";
import { MotionRoot } from "@/components/ui/MotionRoot";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Stuurvast Rijschool | Rijschool in Utrecht",
    template: "%s | Stuurvast Rijschool",
  },
  description:
    "Praktijklessen, duidelijke prijzen en een helder traject naar je rijbewijs bij Stuurvast Rijschool in Utrecht.",
  openGraph: { type: "website", locale: "nl_NL", siteName: site.name },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    postalCode: site.postalCode,
    addressLocality: site.city,
    addressCountry: "NL",
  },
  areaServed: site.serviceArea,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <a
          href="#inhoud"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-[7.6px] focus:bg-vivid-indigo focus:px-4 focus:py-2 focus:text-pure-white"
        >
          Ga naar de inhoud
          </a>
          <Navbar />
          <MotionRoot>{children}</MotionRoot>
          <Footer />
          {process.env.BUSINESS_DETAILS_VERIFIED === "true" && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
              }}
            />
          )}
        </LanguageProvider>
      </body>
    </html>
  );
}
