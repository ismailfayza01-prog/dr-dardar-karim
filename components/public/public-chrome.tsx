"use client";

import Link from "next/link";
import clsx from "clsx";
import { Globe, MapPin, MoonStar, Phone, SunMedium } from "lucide-react";

import { useAppSettings } from "@/components/providers/app-provider";
import { siteLinks } from "@/lib/data";
import { clinicPhoneDisplay, clinicPhoneHref, googleMapsUrl } from "@/lib/seo";

export function PublicChrome({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}) {
  const {
    language,
    direction,
    themeMode,
    setThemeMode,
    toggleLanguage,
    translate,
  } = useAppSettings();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 glass-panel">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-lg font-semibold text-primaryForeground shadow-ambient">
              DK
            </div>
            <div className={clsx("space-y-0.5", direction === "rtl" && "text-right")}>
              <p className="font-display text-lg font-bold tracking-tight">Dr Dardar Karim</p>
              <p className="text-xs uppercase tracking-[0.28em] text-mutedForeground">Cabinet dentaire - Tanger</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {siteLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-mutedForeground transition hover:text-foreground"
              >
                {translate(link.label)}
              </Link>
            ))}
            <a
              href={clinicPhoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2.5 text-sm font-medium text-foreground shadow-ambient"
            >
              <Phone className="h-4 w-4" />
              <span>{clinicPhoneDisplay}</span>
            </a>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primaryForeground shadow-ambient transition hover:-translate-y-0.5"
            >
              <MapPin className="h-4 w-4" />
              <span>{language === "fr" ? "Itineraire" : "الطريق"}</span>
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex h-10 items-center gap-2 rounded-full bg-card px-3 text-sm font-medium text-foreground shadow-ambient"
            >
              <Globe className="h-4 w-4" />
              <span>{language === "fr" ? "FR | AR" : "AR | FR"}</span>
            </button>
            <button
              type="button"
              onClick={() => setThemeMode(themeMode === "light" ? "dark" : "light")}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-card text-foreground shadow-ambient"
              aria-label="Toggle theme mode"
            >
              {themeMode === "light" ? <MoonStar className="h-4 w-4" /> : <SunMedium className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {(title || subtitle) && (
        <section className="border-b border-border/50 bg-muted/50">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
            <div className={clsx("max-w-3xl", direction === "rtl" && "text-right")}>
              {title && <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl">{title}</h1>}
              {subtitle && <p className="mt-4 max-w-2xl text-base text-mutedForeground">{subtitle}</p>}
            </div>
          </div>
        </section>
      )}

      {children}
    </div>
  );
}
