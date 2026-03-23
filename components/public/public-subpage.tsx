"use client";

import Link from "next/link";
import clsx from "clsx";
import { ArrowRight, LockKeyhole, ShieldCheck } from "lucide-react";

import { PublicChrome } from "@/components/public/public-chrome";
import { useAppSettings } from "@/components/providers/app-provider";
import { services, teamMembers } from "@/lib/data";

type Kind = "services" | "team" | "appointments" | "login";

export function PublicSubpage({ kind }: { kind: Kind }) {
  const { direction, language, translate } = useAppSettings();
  const isFrench = language === "fr";

  const content = {
    services: {
      title: isFrench ? "Soins dentaires" : "Soins dentaires",
      subtitle: isFrench
        ? "Presentation des principaux soins proposes au cabinet a Tanger."
        : "Presentation des principaux soins proposes au cabinet a Tanger.",
    },
    team: {
      title: isFrench ? "Le cabinet et le praticien" : "Le cabinet et le praticien",
      subtitle: isFrench
        ? "Presentation du cabinet, du praticien et de l'approche de soin."
        : "Presentation du cabinet, du praticien et de l'approche de soin.",
    },
    appointments: {
      title: isFrench ? "Prendre rendez-vous" : "Prendre rendez-vous",
      subtitle: isFrench
        ? "Une demande simple pour contacter le cabinet et preparer la consultation."
        : "Une demande simple pour contacter le cabinet et preparer la consultation.",
    },
    login: {
      title: isFrench ? "Acces interne" : "Acces interne",
      subtitle: isFrench
        ? "Espace de connexion reserve au cabinet."
        : "Espace de connexion reserve au cabinet.",
    },
  }[kind];

  return (
    <PublicChrome title={content.title} subtitle={content.subtitle}>
      <main className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        {kind === "services" && (
          <section className="grid gap-5 py-10 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title.fr}
                className={clsx("reveal-card rounded-[30px] bg-card p-6 shadow-ambient", direction === "rtl" && "text-right")}
              >
                <div className="inline-flex rounded-full bg-sidebarAccent px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                  {translate(service.tag)}
                </div>
                <h2 className="mt-4 font-display text-3xl font-black tracking-tight">{translate(service.title)}</h2>
                <p className="mt-4 text-sm leading-7 text-mutedForeground">{translate(service.description)}</p>
                <div className="mt-8 rounded-[24px] bg-muted p-4 text-sm leading-7 text-mutedForeground">
                  Chaque soin est presente avec une explication claire afin d'aider le patient a comprendre
                  l'objectif du traitement et la logique de la prise en charge.
                </div>
              </article>
            ))}
          </section>
        )}

        {kind === "team" && (
          <section className="grid gap-6 py-10 md:grid-cols-2">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className={clsx("rounded-[32px] bg-card p-6 shadow-ambient", direction === "rtl" && "text-right")}
              >
                <div className="mb-5 h-72 rounded-[28px] bg-[linear-gradient(135deg,rgba(var(--primary),0.18),rgba(var(--secondary),0.22))]" />
                <h2 className="font-display text-3xl font-black tracking-tight">{member.name}</h2>
                <p className="mt-2 text-sm font-semibold text-primary">{translate(member.role)}</p>
                <p className="mt-4 text-sm leading-7 text-mutedForeground">{translate(member.bio)}</p>
              </article>
            ))}
          </section>
        )}

        {kind === "appointments" && (
          <section className="grid gap-8 py-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[34px] bg-card p-6 shadow-ambient">
              <div className={clsx("space-y-4", direction === "rtl" && "text-right")}>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Prise de contact</p>
                <h2 className="font-display text-4xl font-black tracking-tight">
                  Un formulaire simple pour preparer la consultation
                </h2>
                <p className="text-sm leading-7 text-mutedForeground">
                  Le patient peut laisser ses coordonnees, le motif du rendez-vous et les informations utiles
                  avant sa venue au cabinet.
                </p>
              </div>
              <form className="mt-8 grid gap-4 sm:grid-cols-2">
                {["Nom complet", "Telephone", "Date souhaitee", "Type de soin"].map((label) => (
                  <label key={label} className={clsx("space-y-2 text-sm", direction === "rtl" && "text-right")}>
                    <span className="text-mutedForeground">{label}</span>
                    <input className="h-12 w-full rounded-2xl border border-border bg-background px-4" placeholder={label} />
                  </label>
                ))}
                <button className="h-12 rounded-2xl bg-primary text-sm font-semibold text-primaryForeground sm:col-span-2">
                  Envoyer
                </button>
              </form>
            </div>
            <div className="rounded-[34px] bg-muted p-6">
              <div className={clsx("space-y-4", direction === "rtl" && "text-right")}>
                <h3 className="font-display text-3xl font-black tracking-tight">
                  Informations utiles avant le rendez-vous
                </h3>
                <ul className="space-y-4 text-sm leading-7 text-mutedForeground">
                  <li>Le patient peut preciser son besoin avant l'appel ou la visite.</li>
                  <li>Les informations pratiques du cabinet restent faciles a retrouver.</li>
                  <li>La demande de rendez-vous peut etre suivie d'un contact direct avec le cabinet.</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {kind === "login" && (
          <section className="grid gap-8 py-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[34px] bg-slate-950 p-8 text-white shadow-glass">
              <div className={clsx("space-y-5", direction === "rtl" && "text-right")}>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                  <ShieldCheck className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-display text-4xl font-black tracking-tight">Connexion reservee au cabinet</h2>
                <p className="text-sm leading-8 text-white/76">
                  Cette page est destinee a l'acces interne du cabinet et ne concerne pas la navigation publique.
                </p>
              </div>
            </div>
            <div className="rounded-[34px] bg-card p-8 shadow-ambient">
              <div className={clsx("mb-6 flex items-center gap-3", direction === "rtl" && "flex-row-reverse justify-end")}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sidebarAccent text-primary">
                  <LockKeyhole className="h-5 w-5" />
                </div>
                <div className={clsx(direction === "rtl" && "text-right")}>
                  <p className="font-display text-2xl font-black tracking-tight">Connexion securisee</p>
                  <p className="text-sm text-mutedForeground">Acces reserve au cabinet</p>
                </div>
              </div>
              <form className="space-y-4">
                <label className={clsx("block space-y-2 text-sm", direction === "rtl" && "text-right")}>
                  <span className="text-mutedForeground">Email</span>
                  <input className="h-12 w-full rounded-2xl border border-border bg-background px-4" />
                </label>
                <label className={clsx("block space-y-2 text-sm", direction === "rtl" && "text-right")}>
                  <span className="text-mutedForeground">Mot de passe</span>
                  <input type="password" className="h-12 w-full rounded-2xl border border-border bg-background px-4" />
                </label>
                <Link
                  href="/dashboard"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-primary text-sm font-semibold text-primaryForeground"
                >
                  Entrer dans l'espace interne
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </form>
            </div>
          </section>
        )}
      </main>
    </PublicChrome>
  );
}
