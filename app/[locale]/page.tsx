import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PublicHome } from "@/components/public/public-home";
import { type HomeLocale, supportedHomeLocales } from "@/lib/home-content";
import { buildLocalizedLandingMetadata, getLocalizedHomeSchemas } from "@/lib/seo";

export function generateStaticParams() {
  return supportedHomeLocales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!supportedHomeLocales.includes(params.locale as HomeLocale)) return {};
  return buildLocalizedLandingMetadata(params.locale as HomeLocale);
}

export default function LocalizedHomePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as HomeLocale;
  if (!supportedHomeLocales.includes(locale)) notFound();

  const schemas = getLocalizedHomeSchemas(locale);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PublicHome locale={locale} />
    </>
  );
}
