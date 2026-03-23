import type { Metadata } from "next";

import { type HomeLocale, homeContent } from "@/lib/home-content";

export const siteUrl = "https://dr-dardar-karim.vercel.app";
export const clinicName = "Cabinet dentaire Dr Dardar Karim";
export const clinicPhoneDisplay = "08 08 56 63 17";
export const clinicPhoneHref = "tel:0808566317";
export const googleMapsUrl =
  "https://www.google.com/maps/place/Cabinet+dentaire+Dr+Dardar+Karim/@35.7686774,-5.76494,17z/data=!3m1!4b1!4m6!3m5!1s0xd0b8153225f84c3:0x18add6ff26f366d!8m2!3d35.7686731!4d-5.7623651!16s%2Fg%2F11rqgg9y65?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D";

export const clinicAddress = {
  streetAddress: "Lot . Corbo 45 ETAGE 1 app 2",
  addressLocality: "Tanger",
  postalCode: "90000",
  addressCountry: "MA",
};

export const defaultDescription =
  "Cabinet dentaire Dr Dardar Karim a Tanger. Consultation, soins dentaires, esthetique du sourire, contact direct, adresse et informations pratiques avant la visite.";

const defaultImage = {
  url: "/dr-dardar-karim-doctor.png",
  width: 960,
  height: 1280,
  alt: "Dr Dardar Karim",
};

const localeMeta: Record<HomeLocale, { path: string; locale: string; languageKey: string }> = {
  fr: { path: "/fr", locale: "fr_MA", languageKey: "fr-MA" },
  en: { path: "/en", locale: "en_US", languageKey: "en" },
  ar: { path: "/ar", locale: "ar_MA", languageKey: "ar-MA" },
};

export function buildMetadata({
  title,
  description = defaultDescription,
  path = "/",
  noindex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  noindex?: boolean;
}): Metadata {
  const fullTitle = title ? `${title} | ${clinicName}` : clinicName;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: clinicName,
      locale: "fr_MA",
      type: "website",
      images: [defaultImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [defaultImage.url],
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
            nosnippet: true,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function buildLocalizedLandingMetadata(locale: HomeLocale): Metadata {
  const content = homeContent[locale];
  const meta = localeMeta[locale];
  const fullTitle = `${content.metaTitle} | ${content.title}`;

  return {
    title: fullTitle,
    description: content.metaDescription,
    applicationName: content.title,
    alternates: {
      canonical: meta.path,
      languages: {
        "fr-MA": localeMeta.fr.path,
        en: localeMeta.en.path,
        "ar-MA": localeMeta.ar.path,
        "x-default": localeMeta.fr.path,
      },
    },
    openGraph: {
      title: fullTitle,
      description: content.metaDescription,
      url: meta.path,
      siteName: content.title,
      locale: meta.locale,
      type: "website",
      images: [defaultImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: content.metaDescription,
      images: [defaultImage.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function getLocalizedHomeSchemas(locale: HomeLocale) {
  const content = homeContent[locale];
  const meta = localeMeta[locale];
  return [
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      name: content.title,
      url: `${siteUrl}${meta.path}`,
      image: [`${siteUrl}/dr-dardar-karim-doctor.png`, `${siteUrl}/dr-dardar-karim-logo.webp`],
      telephone: clinicPhoneDisplay,
      inLanguage: content.htmlLang,
      availableLanguage: ["French", "English", "Arabic"],
      address: {
        "@type": "PostalAddress",
        ...clinicAddress,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 35.7686731,
        longitude: -5.7623651,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "17",
      },
      hasMap: googleMapsUrl,
      sameAs: [googleMapsUrl],
      areaServed: "Tangier",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: content.title,
      url: siteUrl,
      inLanguage: content.htmlLang,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: content.title,
      url: `${siteUrl}${meta.path}`,
      inLanguage: content.htmlLang,
      description: content.metaDescription,
      about: content.aiSummaryText,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: content.htmlLang,
      mainEntity: content.faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
  ];
}
