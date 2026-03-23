"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import {
  ArrowRight,
  Award,
  CalendarCheck,
  CalendarPlus,
  CheckCircle2,
  ChevronDown,
  Clock3,
  CreditCard,
  FileText,
  GraduationCap,
  Heart,
  HeartPulse,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Search,
  Shield,
  Smile,
  Sparkles,
  Star,
  Stethoscope,
  UserCheck,
  Wrench,
  X,
  Zap,
} from "lucide-react";

import { type HomeLocale, homeContent, homeLocaleLabels, supportedHomeLocales } from "@/lib/home-content";
import { clinicPhoneDisplay, clinicPhoneHref, googleMapsUrl } from "@/lib/seo";

const trustIcons = [Shield, Award, CreditCard, Heart];
const serviceIcons = [Stethoscope, Sparkles, Wrench, FileText, Smile, Clock3];
const reasonIcons = [Zap, UserCheck, FileText, HeartPulse, Phone, CalendarCheck];
const credentialIcons = [GraduationCap, Award, Phone];
const journeyIcons = [CalendarPlus, Search, FileText, Smile];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[hsl(var(--smile-primary))]">{eyebrow}</span>
      <h2 className="mt-3 font-serif text-4xl font-semibold leading-[1.08] text-[hsl(var(--smile-foreground))] sm:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-lg leading-8 text-[hsl(var(--smile-muted-foreground))]">{description}</p> : null}
    </div>
  );
}

function FaqItem({
  item,
  open,
  onToggle,
  rtl,
}: {
  item: readonly [string, string];
  open: boolean;
  onToggle: () => void;
  rtl: boolean;
}) {
  return (
    <div className="smile-glass-card overflow-hidden rounded-2xl px-6">
      <button type="button" onClick={onToggle} className={clsx("flex w-full items-center justify-between gap-4 py-5 text-left", rtl && "text-right")}>
        <span className="text-base font-medium text-[hsl(var(--smile-foreground))]">{item[0]}</span>
        <ChevronDown className={clsx("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>
      <div className={clsx("grid transition-[grid-template-rows,opacity] duration-300", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
        <div className="overflow-hidden">
          <p className={clsx("pb-5 text-sm leading-7 text-[hsl(var(--smile-muted-foreground))]", rtl && "text-right")}>{item[1]}</p>
        </div>
      </div>
    </div>
  );
}

export function PublicHome({ locale }: { locale: HomeLocale }) {
  const content = homeContent[locale];
  const rtl = content.direction === "rtl";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeCard, setActiveCard] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [heroCounter1, setHeroCounter1] = useState(0);
  const [heroCounter2, setHeroCounter2] = useState(0.0);

  useEffect(() => {
    document.documentElement.lang = content.htmlLang;
    document.documentElement.dir = content.direction;
  }, [content.direction, content.htmlLang]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    document.querySelectorAll(".smile-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const duration = 1800;
    const start = performance.now();
    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setHeroCounter1(Math.round(eased * 17));
      if (progress < 1) requestAnimationFrame(tick);
    }
    const raf1 = requestAnimationFrame(tick);

    const start2 = performance.now();
    function tick2(now: number) {
      const progress = Math.min((now - start2) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setHeroCounter2(Math.round(eased * 48) / 10);
      if (progress < 1) requestAnimationFrame(tick2);
    }
    const raf2 = requestAnimationFrame(tick2);
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, []);

  return (
    <div className="smile-site min-h-screen" dir={content.direction}>
      <header className="fixed inset-x-0 top-0 z-50 smile-glass shadow-[0_10px_40px_rgba(12,24,40,0.08)]">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6">
          <Link href={`/${locale}`} className={clsx("flex items-center gap-3", rtl && "flex-row-reverse")}>
            <Image src="/dr-dardar-karim-logo.webp" alt={content.title} width={180} height={90} className="h-11 w-auto object-contain" />
            <div className={clsx(rtl && "text-right")}>
              <div className="font-serif text-xl font-semibold tracking-tight text-[hsl(var(--smile-foreground))]">Dr Dardar Karim</div>
              <div className="text-xs uppercase tracking-[0.28em] text-[hsl(var(--smile-muted-foreground))]">{content.localeLabel}</div>
            </div>
          </Link>

          <nav className={clsx("hidden items-center gap-6 lg:flex", rtl && "flex-row-reverse")}>
            {content.navLinks.map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-medium text-[hsl(var(--smile-muted-foreground))] transition-colors hover:text-[hsl(var(--smile-foreground))]">{label}</a>
            ))}
          </nav>

          <div className={clsx("hidden items-center gap-3 lg:flex", rtl && "flex-row-reverse")}>
            <div className="flex items-center gap-1 rounded-full bg-white/70 p-1">
              {supportedHomeLocales.map((lang) => (
                <Link
                  key={lang}
                  href={`/${lang}`}
                  className={clsx(
                    "rounded-full px-3 py-2 text-xs font-semibold transition-colors",
                    lang === locale ? "bg-[hsl(var(--smile-primary))] text-white" : "text-[hsl(var(--smile-muted-foreground))] hover:bg-white",
                  )}
                >
                  {homeLocaleLabels[lang]}
                </Link>
              ))}
            </div>
            <a href={clinicPhoneHref} className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-[hsl(var(--smile-muted-foreground))] transition-colors hover:bg-white/60 hover:text-[hsl(var(--smile-foreground))]">
              <Phone className="h-4 w-4" />
              <span>{clinicPhoneDisplay}</span>
            </a>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full smile-gradient-cta px-5 py-3 text-sm font-semibold text-white">
              {content.mapLabel}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button type="button" onClick={() => setMobileOpen((value) => !value)} className="rounded-xl p-2 transition-colors hover:bg-white/60 lg:hidden" aria-label="Toggle navigation menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div className={clsx("overflow-hidden border-t border-white/50 transition-[max-height,opacity] duration-300 lg:hidden", mobileOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0")}>
          <div className="smile-glass px-4 py-4 sm:px-6">
            <div className={clsx("mb-3 flex items-center gap-2", rtl && "justify-end")}>
              {supportedHomeLocales.map((lang) => (
                <Link
                  key={lang}
                  href={`/${lang}`}
                  onClick={() => setMobileOpen(false)}
                  className={clsx("rounded-full px-3 py-2 text-xs font-semibold transition-colors", lang === locale ? "bg-[hsl(var(--smile-primary))] text-white" : "bg-white/70 text-[hsl(var(--smile-muted-foreground))]")}
                >
                  {homeLocaleLabels[lang]}
                </Link>
              ))}
            </div>
            <nav className="flex flex-col gap-1">
              {content.navLinks.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMobileOpen(false)} className={clsx("rounded-xl px-4 py-3 text-sm font-medium hover:bg-white/60", rtl && "text-right")}>
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="smile-gradient-hero relative overflow-hidden pt-24 sm:pt-28">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-24 -top-28 h-[32rem] w-[32rem] rounded-full bg-[hsl(var(--smile-primary)/0.08)] blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-[24rem] w-[24rem] rounded-full bg-[hsl(var(--smile-accent)/0.18)] blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <div className={clsx("max-w-xl", rtl && "text-right lg:ml-auto")}>
              <span className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--smile-primary)/0.1)] px-4 py-2 text-sm font-medium text-[hsl(var(--smile-primary))]">
                <Star className="h-3.5 w-3.5 fill-current" />
                {content.heroBadge}
              </span>
              <h1 className="smile-text-gradient smile-hero-enter anim-delay-1 mt-6 font-serif text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                {content.heroTitleTop}
                <span className="block">{content.heroTitleBottom}</span>
              </h1>
              <p className="smile-hero-enter anim-delay-2 mt-6 max-w-lg text-lg leading-8 text-[hsl(var(--smile-muted-foreground))]">{content.heroDescription}</p>
              <div className={clsx("smile-hero-enter anim-delay-3 mt-8 flex flex-wrap gap-3", rtl && "justify-end")}>
                <a href={clinicPhoneHref} className="inline-flex items-center gap-2 rounded-full smile-gradient-cta px-6 py-3.5 text-sm font-semibold text-white">
                  {content.callLabel}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--smile-border))] bg-white/70 px-6 py-3.5 text-sm font-semibold text-[hsl(var(--smile-foreground))] backdrop-blur transition-colors hover:bg-white">
                  <MessageCircle className="h-4 w-4" />
                  {content.mapLabel}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="smile-image-enter relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(13,31,60,0.12)]">
                <Image src="/smile-elevated/hero-clinic.jpg" alt={content.heroImageAlt} width={1400} height={1050} className="aspect-[4/3] w-full object-cover" priority />
              </div>
              <div className={clsx("smile-glass-card smile-float-card smile-hero-enter anim-delay-4 absolute -bottom-6 rounded-2xl px-5 py-4", rtl ? "right-0 sm:right-6" : "left-0 sm:left-6")}>
                <div className="text-xl font-bold text-[hsl(var(--smile-foreground))]">{heroCounter1}</div>
                <div className="text-xs text-[hsl(var(--smile-muted-foreground))]">Google</div>
              </div>
              <div className={clsx("smile-glass-card smile-float-card smile-hero-enter anim-delay-5 absolute -top-4 rounded-2xl px-5 py-4", rtl ? "left-1 sm:left-6" : "-right-1 sm:right-6")}>
                <div className="text-xl font-bold text-[hsl(var(--smile-foreground))]">{heroCounter2.toFixed(1)}/5</div>
                <div className="text-xs text-[hsl(var(--smile-muted-foreground))]">Google</div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[hsl(var(--smile-border)/0.6)] bg-white/60 py-8">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 sm:px-6 md:gap-14">
            {content.trustBadges.map((label, index) => {
              const Icon = trustIcons[index];
              return (
                <div key={label} className="smile-reveal flex items-center gap-3 text-[hsl(var(--smile-muted-foreground))]" data-direction="up" style={{ transitionDelay: `${index * 80}ms` }}>
                  <Icon className="h-5 w-5 text-[hsl(var(--smile-primary))]" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              );
            })}
          </div>
        </section>

        <section id="services" className="smile-gradient-section py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="smile-reveal" data-direction="up">
              <SectionHeader {...content.servicesHeader} />
            </div>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {content.services.map((service, index) => {
                const Icon = serviceIcons[index];
                return (
                  <article key={service.title} className={clsx("smile-glass-card smile-reveal h-full rounded-[1.75rem] p-8", rtl && "text-right")} data-direction="up" style={{ transitionDelay: `${index * 100}ms` }}>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(var(--smile-primary)/0.1)]"><Icon className="h-6 w-6 text-[hsl(var(--smile-primary))]" /></div>
                    <h3 className="font-serif text-2xl font-semibold text-[hsl(var(--smile-foreground))]">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[hsl(var(--smile-muted-foreground))]">{service.desc}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="results" className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="smile-reveal" data-direction="up">
              <SectionHeader {...content.resultsHeader} />
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
              <div className="smile-reveal overflow-hidden rounded-[2rem] shadow-[0_28px_80px_rgba(10,27,52,0.14)]" data-direction="up" style={{ transitionDelay: "0ms" }}>
                <Image src="/smile-elevated/smile-before.jpg" alt={content.beforeLabel} width={1400} height={933} className="aspect-[3/2] w-full object-cover" />
                <div className="bg-[rgba(12,25,43,0.85)] px-4 py-3 text-sm font-medium text-white">{content.beforeLabel}</div>
              </div>
              <div className="smile-reveal overflow-hidden rounded-[2rem] shadow-[0_28px_80px_rgba(10,27,52,0.14)]" data-direction="up" style={{ transitionDelay: "150ms" }}>
                <Image src="/smile-elevated/smile-after.jpg" alt={content.afterLabel} width={1400} height={933} className="aspect-[3/2] w-full object-cover" />
                <div className="bg-[hsl(var(--smile-primary)/0.9)] px-4 py-3 text-sm font-medium text-white">{content.afterLabel}</div>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-[hsl(var(--smile-muted-foreground))]">{content.resultsCaption}</p>
          </div>
        </section>

        <section id="why-us" className="smile-gradient-section py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="smile-reveal" data-direction="up">
              <SectionHeader {...content.whyHeader} />
            </div>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {content.reasons.map((reason, index) => {
                const Icon = reasonIcons[index];
                return (
                  <article key={reason.title} className={clsx("smile-glass-card smile-reveal h-full rounded-[1.75rem] p-7", rtl && "text-right")} data-direction="up" style={{ transitionDelay: `${index * 100}ms` }}>
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[hsl(var(--smile-accent)/0.5)]"><Icon className="h-5 w-5 text-[hsl(var(--smile-mint-deep))]" /></div>
                    <h3 className="font-serif text-2xl font-semibold text-[hsl(var(--smile-foreground))]">{reason.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[hsl(var(--smile-muted-foreground))]">{reason.desc}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="team" className="py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="smile-reveal relative mx-auto max-w-md lg:mx-0" data-direction="right">
              <div className="overflow-hidden rounded-[2rem] shadow-[0_28px_80px_rgba(10,27,52,0.12)]">
                <Image src="/dr-dardar-karim-doctor.png" alt={content.cabinetTitle} width={960} height={1280} className="aspect-[3/4] w-full object-cover" />
              </div>
            </div>
            <div className={clsx("smile-reveal", rtl && "text-right")} data-direction="left">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[hsl(var(--smile-primary))]">{content.cabinetEyebrow}</span>
              <h2 className="mt-3 font-serif text-4xl font-semibold leading-[1.08] text-[hsl(var(--smile-foreground))] sm:text-5xl">{content.cabinetTitle}</h2>
              <p className="mt-2 text-sm font-medium text-[hsl(var(--smile-primary))]">{content.cabinetSubtitle}</p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[hsl(var(--smile-muted-foreground))]">{content.cabinetBody}</p>
              <div className="mt-8 space-y-4">
                {content.credentials.map((credential, index) => {
                  const Icon = credentialIcons[index];
                  return (
                    <div key={credential} className={clsx("flex items-start gap-3", rtl && "flex-row-reverse")}>
                      <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--smile-primary)/0.1)]"><Icon className="h-4 w-4 text-[hsl(var(--smile-primary))]" /></div>
                      <span className="text-sm font-medium text-[hsl(var(--smile-foreground))]">{credential}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="smile-gradient-section py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="smile-reveal" data-direction="up">
              <SectionHeader {...content.journeyHeader} />
            </div>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {content.journeySteps.map((step, index) => {
                const Icon = journeyIcons[index];
                return (
                  <div key={step.step} className={clsx("smile-reveal rounded-[1.75rem] bg-white/70 p-6 text-center", rtl && "text-right")} data-direction="up" style={{ transitionDelay: `${index * 120}ms` }}>
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-[hsl(var(--smile-primary)/0.1)]"><Icon className="h-7 w-7 text-[hsl(var(--smile-primary))]" /></div>
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-[hsl(var(--smile-primary)/0.55)]">{step.step}</span>
                    <h3 className="mt-2 font-serif text-2xl font-semibold text-[hsl(var(--smile-foreground))]">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[hsl(var(--smile-muted-foreground))]">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHeader {...content.practicalHeader} />
            <div className={clsx("mx-auto mt-10 max-w-4xl rounded-[2rem] bg-white/70 p-8 shadow-[0_24px_70px_rgba(11,29,56,0.08)]", rtl && "text-right")}>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[hsl(var(--smile-primary))]">{content.aiSummaryHeader}</div>
              <p className="mt-4 text-base leading-8 text-[hsl(var(--smile-foreground))]">{content.aiSummaryText}</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {content.practicalCards.map((card, index) => (
                <button
                  key={card.name}
                  type="button"
                  onClick={() => setActiveCard(index)}
                  className={clsx(
                    "rounded-[1.75rem] border p-6 text-left transition-colors",
                    index === activeCard ? "border-[hsl(var(--smile-primary))] bg-white shadow-[0_20px_50px_rgba(11,29,56,0.08)]" : "border-[hsl(var(--smile-border))] bg-white/60",
                    rtl && "text-right",
                  )}
                >
                  <div className="text-sm font-semibold text-[hsl(var(--smile-foreground))]">{card.name}</div>
                  <div className="mt-1 text-xs text-[hsl(var(--smile-muted-foreground))]">{card.treatment}</div>
                  <p className="mt-3 text-sm leading-7 text-[hsl(var(--smile-muted-foreground))]">{card.text}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="smile-gradient-section py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="smile-reveal" data-direction="up">
              <SectionHeader {...content.faqHeader} />
            </div>
            <div className="mx-auto mt-16 max-w-3xl space-y-3">
              {content.faqs.map((item, index) => (
                <FaqItem key={item[0]} item={item} open={openFaq === index} onToggle={() => setOpenFaq((value) => (value === index ? null : index))} rtl={rtl} />
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="relative overflow-hidden py-24 md:py-32">
          <div className="smile-gradient-cta absolute inset-0" />
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div className={clsx("smile-reveal", rtl && "text-right")} data-direction="left">
              <h2 className="font-serif text-4xl font-semibold leading-[1.08] text-white sm:text-5xl">{content.bookingTitle}</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-white/72">{content.bookingDescription}</p>
              <div className="mt-8">
                <a href={clinicPhoneHref} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[hsl(var(--smile-foreground))] shadow-xl transition-transform hover:-translate-y-0.5">
                  <MessageCircle className="h-4 w-4" />
                  {content.callLabel}
                </a>
              </div>
            </div>
            {!submitted ? (
              <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="smile-reveal rounded-[2rem] bg-white p-8 shadow-[0_32px_90px_rgba(4,18,42,0.2)]" data-direction="right">
                <h3 className={clsx("font-serif text-3xl font-semibold text-[hsl(var(--smile-foreground))]", rtl && "text-right")}>{content.bookingFormTitle}</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <input type="text" required placeholder={content.bookingPlaceholders.name} className={clsx("w-full rounded-2xl border border-[hsl(var(--smile-border))] bg-[hsl(var(--smile-background))] px-4 py-3 text-sm", rtl && "text-right")} />
                  <input type="tel" required placeholder={content.bookingPlaceholders.phone} className={clsx("w-full rounded-2xl border border-[hsl(var(--smile-border))] bg-[hsl(var(--smile-background))] px-4 py-3 text-sm", rtl && "text-right")} />
                </div>
                <input type="email" required placeholder={content.bookingPlaceholders.email} className={clsx("mt-4 w-full rounded-2xl border border-[hsl(var(--smile-border))] bg-[hsl(var(--smile-background))] px-4 py-3 text-sm", rtl && "text-right")} />
                <select defaultValue="" className={clsx("mt-4 w-full rounded-2xl border border-[hsl(var(--smile-border))] bg-[hsl(var(--smile-background))] px-4 py-3 text-sm text-[hsl(var(--smile-muted-foreground))]", rtl && "text-right")}>
                  <option value="" disabled>{content.bookingPlaceholders.service}</option>
                  {content.services.map((service) => <option key={service.title}>{service.title}</option>)}
                </select>
                <textarea rows={3} placeholder={content.bookingPlaceholders.message} className={clsx("mt-4 w-full resize-none rounded-2xl border border-[hsl(var(--smile-border))] bg-[hsl(var(--smile-background))] px-4 py-3 text-sm", rtl && "text-right")} />
                <button type="submit" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full smile-gradient-cta px-5 py-3.5 text-sm font-semibold text-white">
                  {content.bookingPlaceholders.submit}
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className={clsx("mt-3 text-center text-xs text-[hsl(var(--smile-muted-foreground))]", rtl && "text-right")}>{content.bookingPlaceholders.helper}</p>
              </form>
            ) : (
              <div className="rounded-[2rem] bg-white p-12 text-center shadow-[0_32px_90px_rgba(4,18,42,0.2)]">
                <CheckCircle2 className="mx-auto h-14 w-14 text-[hsl(var(--smile-mint-deep))]" />
                <h3 className="mt-4 font-serif text-3xl font-semibold text-[hsl(var(--smile-foreground))]">{content.bookingPlaceholders.successTitle}</h3>
                <p className="mt-3 text-base leading-8 text-[hsl(var(--smile-muted-foreground))]">{content.bookingPlaceholders.successBody}</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-[hsl(var(--smile-navy))] text-white/80">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
          <div className={clsx(rtl && "text-right")}>
            <div className={clsx("mb-4 flex items-center gap-3", rtl && "flex-row-reverse")}>
              <Image src="/dr-dardar-karim-logo.webp" alt={content.title} width={160} height={80} className="h-10 w-auto object-contain" />
              <span className="font-serif text-xl font-semibold text-white">Dr Dardar Karim</span>
            </div>
            <p className="text-sm leading-7 text-white/60">{content.footerDescription}</p>
            <div className={clsx("mt-5 flex gap-3", rtl && "justify-end")}>
              {[Instagram, MessageCircle].map((Icon, index) => (
                <a key={index} href={index === 0 ? "#" : clinicPhoneHref} className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 transition-colors hover:bg-white/20">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className={clsx(rtl && "text-right")}>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white">{content.footerLabels.navigation}</h4>
            <nav className="space-y-2.5">
              {content.navLinks.map(([label, href]) => <a key={href} href={href} className="block text-sm text-white/60 transition-colors hover:text-white">{label}</a>)}
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="block text-sm text-white/60 transition-colors hover:text-white">{content.mapLabel}</a>
            </nav>
          </div>
          <div className={clsx(rtl && "text-right")}>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white">{content.footerLabels.contact}</h4>
            <div className="space-y-3">
              <div className={clsx("flex items-start gap-3", rtl && "flex-row-reverse")}><MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/40" /><span className="whitespace-pre-line text-sm text-white/60">Lot . Corbo 45 ETAGE 1 app 2{"\n"}Tanger 90000</span></div>
              <div className={clsx("flex items-start gap-3", rtl && "flex-row-reverse")}><Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/40" /><span className="text-sm text-white/60">{clinicPhoneDisplay}</span></div>
              <div className={clsx("flex items-start gap-3", rtl && "flex-row-reverse")}><Search className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/40" /><span className="text-sm text-white/60">Q69Q+F3 Tanger</span></div>
            </div>
          </div>
          <div className={clsx(rtl && "text-right")}>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white">{content.footerLabels.hours}</h4>
            <div className="space-y-2.5">
              {[
                [content.footerLabels.openNow, content.footerLabels.closed],
                [content.footerLabels.monday, content.footerLabels.mondayHours],
                [content.footerLabels.otherHours, content.footerLabels.googleMaps],
              ].map(([day, hours]) => (
                <div key={day} className={clsx("flex items-start gap-3", rtl && "flex-row-reverse")}>
                  <Clock3 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/40" />
                  <div><div className="text-sm text-white/80">{day}</div><div className="text-xs text-white/50">{hours}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-6">
          <div className="mx-auto max-w-7xl px-4 text-center text-xs text-white/40 sm:px-6">© {new Date().getFullYear()} {content.title}</div>
        </div>
      </footer>

      <a href={clinicPhoneHref} className={clsx("fixed bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_32px_rgba(0,0,0,0.2)] transition-transform hover:scale-105", rtl ? "left-6" : "right-6")} aria-label={content.callLabel}>
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
