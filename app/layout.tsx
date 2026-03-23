import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Plus_Jakarta_Sans } from "next/font/google";

import "@/app/globals.css";
import { AppProvider } from "@/components/providers/app-provider";
import { clinicName, defaultDescription, siteUrl } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: clinicName,
  description: defaultDescription,
  applicationName: clinicName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: clinicName,
    description: defaultDescription,
    url: siteUrl,
    siteName: clinicName,
    locale: "fr_MA",
    type: "website",
    images: [
      {
        url: "/dr-dardar-karim-doctor.png",
        width: 960,
        height: 1280,
        alt: "Dr Dardar Karim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: clinicName,
    description: defaultDescription,
    images: ["/dr-dardar-karim-doctor.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-MA" dir="ltr" suppressHydrationWarning>
      <body className={`${inter.variable} ${jakarta.variable} ${cormorant.variable}`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
