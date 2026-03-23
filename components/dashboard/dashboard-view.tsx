"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import {
  ArrowRight,
  Bell,
  ChevronLeft,
  ChevronRight,
  Globe,
  MoonStar,
  Plus,
  Search,
  Star,
  SunMedium,
  TriangleAlert,
} from "lucide-react";

import { useAppSettings } from "@/components/providers/app-provider";
import {
  agendaWeek,
  allInvoices,
  allPatients,
  allStockItems,
  dashboardNav,
  expenseEntries,
  expenses,
  invoices,
  kpis,
  patients,
  revenueSegments,
  revenueTrend,
  stockAlerts,
  upcomingAppointments,
} from "@/lib/data";

type SectionKey = "dashboard" | "patients" | "agenda" | "billing" | "stock" | "expenses" | "settings";

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <section
      className={clsx(
        "rounded-[1.75rem] bg-white/80 backdrop-blur-sm border border-[hsl(var(--smile-border)/0.6)] p-5",
        "shadow-[0_4px_24px_hsl(var(--smile-navy)/0.06),0_1px_4px_hsl(var(--smile-navy)/0.04)]",
        className,
      )}
    >
      {children}
    </section>
  );
}

function StatusBadge({ status, fr, ar, language }: { status: string; fr: string; ar: string; language: string }) {
  const label = language === "ar" ? ar : fr;
  const colors: Record<string, string> = {
    confirmed: "bg-emerald-100 text-emerald-700",
    pending:   "bg-amber-100 text-amber-700",
    cancelled: "bg-rose-100 text-rose-600",
    ok:        "bg-emerald-100 text-emerald-700",
    low:       "bg-amber-100 text-amber-700",
    critical:  "bg-rose-100 text-rose-600",
    active:    "bg-[hsl(var(--smile-sky)/0.8)] text-[hsl(var(--smile-primary))]",
    new:       "bg-emerald-100 text-emerald-700",
    inactive:  "bg-slate-100 text-slate-500",
  };
  return (
    <span className={clsx("inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold", colors[status] ?? "bg-slate-100 text-slate-500")}>
      {label}
    </span>
  );
}

export function DashboardView() {
  const { direction, language, themeMode, toggleLanguage, setThemeMode, translate } = useAppSettings();
  const rtl = direction === "rtl";
  const [collapsed, setCollapsed]         = useState(false);
  const [activeSection, setActiveSection] = useState<SectionKey>("dashboard");
  // sub-section filters
  const [patientFilter, setPatientFilter] = useState<"all" | "active" | "new" | "inactive">("all");
  const [billingTab,    setBillingTab]    = useState<"all" | "paid" | "partial" | "draft">("all");
  const [stockCat,      setStockCat]      = useState<"all" | "Consommables" | "Instruments" | "Médicaments">("all");

  const segmentColors = [
    "hsl(var(--smile-primary))",
    "hsl(var(--smile-gold))",
    "hsl(var(--smile-mint-deep))",
    "hsl(var(--smile-border))",
  ];

  const donutStyle = useMemo(() => {
    const [a, b, c] = revenueSegments.map((s) => s.value);
    const d = 100 - a - b - c;
    return {
      background: `conic-gradient(
        hsl(var(--smile-primary)) 0 ${a}%,
        hsl(var(--smile-gold)) ${a}% ${a + b}%,
        hsl(var(--smile-mint-deep)) ${a + b}% ${a + b + c}%,
        hsl(var(--smile-border)) ${a + b + c}% ${a + b + c + d}%
      )`,
    };
  }, []);

  // ── Filtered data ───────────────────────────────────────────────────────────
  const filteredPatients = patientFilter === "all"
    ? allPatients
    : allPatients.filter((p) => p.status === patientFilter);

  const billingStatusMap: Record<string, string> = { paid: "Payée", partial: "Partielle", draft: "Brouillon" };
  const filteredInvoices = billingTab === "all"
    ? allInvoices
    : allInvoices.filter((i) => i.status.fr === billingStatusMap[billingTab]);

  const filteredStock = stockCat === "all"
    ? allStockItems
    : allStockItems.filter((s) => s.category.fr === stockCat);

  // ── Section content ─────────────────────────────────────────────────────────
  const renderContent = () => {
    switch (activeSection) {

      // ── Dashboard (home) ───────────────────────────────────────────────────
      case "dashboard":
        return (
          <div className="grid gap-4 xl:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-4">
              <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {kpis.map((kpi) => (
                  <Card key={kpi.title.fr} className={clsx(rtl && "text-right")}>
                    <p className="text-sm text-[hsl(var(--smile-muted-foreground))]">{translate(kpi.title)}</p>
                    <div className="mt-4 flex items-end justify-between gap-2">
                      <p className="font-serif text-3xl font-semibold leading-none text-[hsl(var(--smile-foreground))]">{kpi.value}</p>
                      <span className={clsx("rounded-full px-2.5 py-1 text-xs font-semibold",
                        kpi.delta.startsWith("+") ? "bg-emerald-100 text-emerald-700"
                          : kpi.delta.startsWith("-") ? "bg-rose-100 text-rose-700"
                          : "bg-amber-100 text-amber-700")}>
                        {kpi.delta}
                      </span>
                    </div>
                  </Card>
                ))}
              </section>

              <section className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
                <Card className="overflow-hidden">
                  <div className={clsx("mb-5 flex items-center justify-between", rtl && "flex-row-reverse text-right")}>
                    <div>
                      <p className="text-sm text-[hsl(var(--smile-muted-foreground))]">{language === "fr" ? "Évolution du CA — 30 jours" : "تطور المداخيل — 30 يومًا"}</p>
                      <h2 className="mt-1 font-serif text-2xl font-semibold text-[hsl(var(--smile-foreground))]">185 300 DH</h2>
                    </div>
                    <span className="rounded-full bg-[hsl(var(--smile-sky)/0.7)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--smile-primary))]">+18.7%</span>
                  </div>
                  <div className="chart-grid relative flex h-52 items-end gap-2 rounded-2xl bg-[hsl(var(--smile-sky)/0.3)] p-4">
                    {revenueTrend.map((value, i) => (
                      <div key={i} className="flex flex-1 items-end">
                        <div className="w-full rounded-t-lg" style={{ height: `${value}%`, background: "linear-gradient(180deg, hsl(var(--smile-primary)/0.75), hsl(var(--smile-primary)))" }} />
                      </div>
                    ))}
                  </div>
                </Card>

                <Card>
                  <div className={clsx("flex items-center justify-between", rtl && "flex-row-reverse text-right")}>
                    <h2 className="text-sm text-[hsl(var(--smile-muted-foreground))]">{language === "fr" ? "CA par type d'acte" : "المداخيل حسب نوع العمل"}</h2>
                    <span className="text-xs uppercase tracking-[0.22em] text-[hsl(var(--smile-primary))]">MAD</span>
                  </div>
                  <div className="mt-5 flex flex-col items-center gap-5">
                    <div className="relative h-40 w-40 rounded-full" style={donutStyle}>
                      <div className="absolute inset-[20px] rounded-full bg-white" />
                      <div className="absolute inset-0 flex items-center justify-center font-serif text-2xl font-semibold text-[hsl(var(--smile-foreground))]">100%</div>
                    </div>
                    <div className="w-full space-y-2.5">
                      {revenueSegments.map((seg, i) => (
                        <div key={seg.label.fr} className={clsx("flex items-center justify-between", rtl && "flex-row-reverse")}>
                          <div className={clsx("flex items-center gap-2", rtl && "flex-row-reverse")}>
                            <span className="h-2.5 w-2.5 rounded-full flex-shrink-0" style={{ background: segmentColors[i] }} />
                            <span className="text-sm text-[hsl(var(--smile-muted-foreground))]">{translate(seg.label)}</span>
                          </div>
                          <span className="text-sm font-semibold text-[hsl(var(--smile-foreground))]">{seg.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </section>

              <section className="grid gap-4 xl:grid-cols-2">
                <Card>
                  <div className={clsx("mb-5 flex items-center justify-between", rtl && "flex-row-reverse text-right")}>
                    <h2 className="font-serif text-2xl font-semibold text-[hsl(var(--smile-foreground))]">{language === "fr" ? "Patients" : "المرضى"}</h2>
                    <button onClick={() => setActiveSection("patients")} className="inline-flex items-center gap-1 rounded-full bg-[hsl(var(--smile-primary))] px-4 py-2 text-xs font-semibold text-white hover:opacity-90 transition-opacity">
                      + {language === "fr" ? "Voir tous" : "عرض الكل"}
                    </button>
                  </div>
                  <div className="overflow-auto scrollbar-none">
                    <table className="w-full min-w-[480px] border-separate border-spacing-y-2">
                      <thead>
                        <tr className={clsx("text-xs uppercase tracking-[0.2em] text-[hsl(var(--smile-muted-foreground))]", rtl ? "text-right" : "text-left")}>
                          <th className="pb-1 font-medium">{language === "fr" ? "Nom" : "الاسم"}</th>
                          <th className="pb-1 font-medium">{language === "fr" ? "Téléphone" : "الهاتف"}</th>
                          <th className="pb-1 font-medium">{language === "fr" ? "Dernier RDV" : "آخر موعد"}</th>
                          <th className="pb-1 font-medium">{language === "fr" ? "Solde dû" : "الرصيد"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {patients.map((p) => (
                          <tr key={p.name} className="text-sm">
                            <td className="rounded-l-2xl bg-[hsl(var(--smile-sky)/0.25)] px-4 py-3 font-medium text-[hsl(var(--smile-foreground))]">{p.name}</td>
                            <td className="bg-[hsl(var(--smile-sky)/0.25)] px-4 py-3 text-[hsl(var(--smile-muted-foreground))]">{p.phone}</td>
                            <td className="bg-[hsl(var(--smile-sky)/0.25)] px-4 py-3 text-[hsl(var(--smile-muted-foreground))]">{p.lastVisit}</td>
                            <td className="rounded-r-2xl bg-[hsl(var(--smile-sky)/0.25)] px-4 py-3 font-semibold text-[hsl(var(--smile-primary))]">{p.balance}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>

                <Card>
                  <div className={clsx("mb-5 flex items-center justify-between", rtl && "flex-row-reverse text-right")}>
                    <h2 className="font-serif text-2xl font-semibold text-[hsl(var(--smile-foreground))]">{language === "fr" ? "Facturation & devis" : "الفاتورة والعروض"}</h2>
                    <button onClick={() => setActiveSection("billing")} className="rounded-full bg-[hsl(var(--smile-sky)/0.7)] px-3 py-1.5 text-xs font-semibold text-[hsl(var(--smile-primary))] hover:bg-[hsl(var(--smile-sky))] transition-colors">PDF live</button>
                  </div>
                  <div className="space-y-3">
                    {invoices.map((inv) => (
                      <div key={inv.ref} className={clsx("flex items-center justify-between rounded-2xl bg-[hsl(var(--smile-sky)/0.25)] border border-[hsl(var(--smile-border)/0.5)] p-4", rtl && "flex-row-reverse text-right")}>
                        <div>
                          <p className="text-sm font-semibold text-[hsl(var(--smile-foreground))]">{inv.ref}</p>
                          <p className="text-xs text-[hsl(var(--smile-muted-foreground))]">{inv.patient}</p>
                        </div>
                        <div className={clsx("space-y-1", rtl ? "text-left" : "text-right")}>
                          <p className="text-sm font-semibold text-[hsl(var(--smile-primary))]">{inv.amount}</p>
                          <p className="text-xs uppercase tracking-[0.16em] text-[hsl(var(--smile-muted-foreground))]">{translate(inv.status)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </section>
            </div>

            <div className="space-y-4">
              <Card>
                <div className={clsx("mb-5 flex items-center justify-between", rtl && "flex-row-reverse text-right")}>
                  <h2 className="font-serif text-2xl font-semibold text-[hsl(var(--smile-foreground))]">{language === "fr" ? "Prochains RDV" : "المواعيد القادمة"}</h2>
                  <button onClick={() => setActiveSection("agenda")} className="rounded-full bg-[hsl(var(--smile-sky)/0.7)] px-3 py-1.5 text-xs font-semibold text-[hsl(var(--smile-primary))] hover:bg-[hsl(var(--smile-sky))] transition-colors">{language === "fr" ? "Aujourd'hui" : "اليوم"}</button>
                </div>
                <div className="space-y-3">
                  {upcomingAppointments.map((appt) => (
                    <div key={`${appt.time}-${appt.patient}`} className={clsx("rounded-2xl bg-[hsl(var(--smile-sky)/0.25)] border border-[hsl(var(--smile-border)/0.5)] p-4", rtl && "text-right")}>
                      <div className={clsx("flex items-center justify-between", rtl && "flex-row-reverse")}>
                        <div>
                          <p className="text-sm font-semibold text-[hsl(var(--smile-foreground))]">{appt.patient}</p>
                          <p className="text-xs text-[hsl(var(--smile-muted-foreground))]">{translate(appt.type)}</p>
                        </div>
                        <div className={clsx("space-y-1.5", rtl ? "text-left" : "text-right")}>
                          <p className="font-serif text-xl font-semibold text-[hsl(var(--smile-foreground))]">{appt.time}</p>
                          <span className={clsx("inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold",
                            appt.reminder === "sent" ? "bg-emerald-100 text-emerald-700"
                              : appt.reminder === "pending" ? "bg-slate-100 text-slate-600"
                              : "bg-rose-100 text-rose-600")}>
                            {appt.reminder === "sent" ? "WhatsApp ✓" : appt.reminder === "pending" ? (language === "fr" ? "En attente" : "قيد الانتظار") : (language === "fr" ? "Échec" : "فشل")}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card>
                <div className={clsx("mb-5 flex items-center justify-between", rtl && "flex-row-reverse text-right")}>
                  <h2 className="font-serif text-2xl font-semibold text-[hsl(var(--smile-foreground))]">{language === "fr" ? "Alertes stock" : "تنبيهات المخزون"}</h2>
                  <button onClick={() => setActiveSection("stock")} className="rounded-full bg-rose-100 px-3 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-200 transition-colors">{stockAlerts.length}</button>
                </div>
                <div className="space-y-3">
                  {stockAlerts.map((alert) => (
                    <div key={alert.item.fr} className={clsx("flex items-center justify-between rounded-2xl border border-rose-100 bg-rose-50 p-4", rtl && "flex-row-reverse text-right")}>
                      <div>
                        <p className="text-sm font-semibold text-[hsl(var(--smile-foreground))]">{translate(alert.item)}</p>
                        <p className="text-xs text-[hsl(var(--smile-muted-foreground))]">{language === "fr" ? "Seuil" : "الحد"} : {alert.threshold}</p>
                      </div>
                      <p className="font-serif text-2xl font-semibold text-rose-600">{alert.qty}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card>
                <div className={clsx("mb-5 flex items-center justify-between", rtl && "flex-row-reverse text-right")}>
                  <h2 className="font-serif text-2xl font-semibold text-[hsl(var(--smile-foreground))]">{language === "fr" ? "Dépenses" : "المصاريف"}</h2>
                  <button onClick={() => setActiveSection("expenses")} className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--smile-muted-foreground))] hover:text-[hsl(var(--smile-primary))] transition-colors">Mars 2026</button>
                </div>
                <div className="space-y-4">
                  {expenses.map((exp) => (
                    <div key={exp.category.fr} className={clsx(rtl && "text-right")}>
                      <div className={clsx("mb-1.5 flex items-center justify-between text-sm", rtl && "flex-row-reverse")}>
                        <span className="text-[hsl(var(--smile-muted-foreground))]">{translate(exp.category)}</span>
                        <span className="font-semibold text-[hsl(var(--smile-foreground))]">{exp.amount}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-[hsl(var(--smile-border)/0.5)]">
                        <div className="h-1.5 rounded-full" style={{ width: `${Math.min(parseInt(exp.amount.replace(/\D/g, ""), 10) / 600, 100)}%`, background: "linear-gradient(90deg, hsl(var(--smile-primary)/0.7), hsl(var(--smile-primary)))" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <div className="rounded-[1.75rem] p-5 shadow-[0_4px_24px_hsl(var(--smile-navy)/0.18)]" style={{ background: "linear-gradient(135deg, hsl(var(--smile-navy)), hsl(var(--smile-primary)))" }}>
                <div className={clsx(rtl && "text-right")}>
                  <div className={clsx("flex items-center gap-2", rtl && "flex-row-reverse")}>
                    <Star className="h-4 w-4 fill-[hsl(var(--smile-gold))] text-[hsl(var(--smile-gold))]" />
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">Google Reviews</p>
                  </div>
                  <p className="mt-3 font-serif leading-none text-white">
                    <span className="text-5xl font-semibold">4.8</span>
                    <span className="text-2xl text-white/50">/5</span>
                  </p>
                  <p className="mt-2 text-sm text-white/65">{language === "fr" ? "Basé sur 17 avis vérifiés à Tanger" : "مبني على 17 تقييم موثّق في طنجة"}</p>
                  <a href="https://maps.google.com/?q=Dr+Dardar+Karim+Tanger" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white hover:bg-white/25 transition-colors">
                    {language === "fr" ? "Voir sur Google Maps" : "عرض على خرائط Google"}<ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        );

      // ── Patients ───────────────────────────────────────────────────────────
      case "patients": {
        const tabs: { key: typeof patientFilter; label: string; count: number }[] = [
          { key: "all",      label: language === "fr" ? "Tous"      : "الكل",       count: allPatients.length },
          { key: "active",   label: language === "fr" ? "Actifs"    : "نشطون",      count: allPatients.filter((p) => p.status === "active").length },
          { key: "new",      label: language === "fr" ? "Nouveaux"  : "جدد",        count: allPatients.filter((p) => p.status === "new").length },
          { key: "inactive", label: language === "fr" ? "Inactifs"  : "غير نشطين", count: allPatients.filter((p) => p.status === "inactive").length },
        ];
        const statusLabel: Record<string, LocalizedText> = {
          active:   { fr: "Actif",    ar: "نشط"       },
          new:      { fr: "Nouveau",  ar: "جديد"       },
          inactive: { fr: "Inactif",  ar: "غير نشط"   },
        };
        return (
          <div className="space-y-4">
            <div className={clsx("flex items-center justify-between", rtl && "flex-row-reverse")}>
              <h1 className="font-serif text-3xl font-semibold text-[hsl(var(--smile-foreground))]">{language === "fr" ? "Patients" : "المرضى"}</h1>
              <button className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--smile-primary))] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity">
                <Plus className="h-4 w-4" />{language === "fr" ? "Nouveau patient" : "مريض جديد"}
              </button>
            </div>

            <Card className="flex flex-wrap items-center gap-2 py-4">
              {tabs.map((tab) => (
                <button key={tab.key} onClick={() => setPatientFilter(tab.key)}
                  className={clsx("rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    patientFilter === tab.key
                      ? "bg-[hsl(var(--smile-primary))] text-white"
                      : "bg-[hsl(var(--smile-sky)/0.5)] text-[hsl(var(--smile-muted-foreground))] hover:bg-[hsl(var(--smile-sky))]")}>
                  {tab.label} <span className="ml-1 opacity-70">({tab.count})</span>
                </button>
              ))}
            </Card>

            <Card className="overflow-hidden p-0">
              <div className="overflow-auto scrollbar-none">
                <table className="w-full border-separate border-spacing-0 min-w-[720px]">
                  <thead>
                    <tr className="border-b border-[hsl(var(--smile-border)/0.5)] bg-[hsl(var(--smile-sky)/0.2)]">
                      {[
                        language === "fr" ? "Nom" : "الاسم",
                        language === "fr" ? "Téléphone" : "الهاتف",
                        language === "fr" ? "Dernier RDV" : "آخر موعد",
                        language === "fr" ? "Prochain RDV" : "موعد قادم",
                        language === "fr" ? "Traitement" : "العلاج",
                        language === "fr" ? "Solde dû" : "الرصيد",
                        language === "fr" ? "Statut" : "الحالة",
                      ].map((h) => (
                        <th key={h} className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--smile-muted-foreground))]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPatients.map((p, i) => (
                      <tr key={p.id} className={clsx("text-sm transition-colors hover:bg-[hsl(var(--smile-sky)/0.2)]", i % 2 === 0 ? "bg-white/50" : "bg-white/20")}>
                        <td className="px-5 py-4 font-semibold text-[hsl(var(--smile-foreground))]">{p.name}</td>
                        <td className="px-5 py-4 text-[hsl(var(--smile-muted-foreground))]">{p.phone}</td>
                        <td className="px-5 py-4 text-[hsl(var(--smile-muted-foreground))]">{p.lastVisit}</td>
                        <td className="px-5 py-4 text-[hsl(var(--smile-muted-foreground))]">{p.nextVisit ?? "—"}</td>
                        <td className="px-5 py-4 text-[hsl(var(--smile-foreground))]">{translate(p.treatment)}</td>
                        <td className="px-5 py-4 font-semibold text-[hsl(var(--smile-primary))]">{p.balance}</td>
                        <td className="px-5 py-4">
                          <StatusBadge status={p.status} fr={statusLabel[p.status]?.fr ?? p.status} ar={statusLabel[p.status]?.ar ?? p.status} language={language} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        );
      }

      // ── Agenda ─────────────────────────────────────────────────────────────
      case "agenda": {
        const days = Object.entries(agendaWeek);
        const statusLabel: Record<string, { fr: string; ar: string }> = {
          confirmed: { fr: "Confirmé",  ar: "مؤكد"   },
          pending:   { fr: "En attente", ar: "انتظار" },
          cancelled: { fr: "Annulé",    ar: "ملغى"   },
        };
        return (
          <div className="space-y-4">
            <div className={clsx("flex items-center justify-between", rtl && "flex-row-reverse")}>
              <div className={clsx(rtl && "text-right")}>
                <h1 className="font-serif text-3xl font-semibold text-[hsl(var(--smile-foreground))]">{language === "fr" ? "Agenda" : "الأجندة"}</h1>
                <p className="mt-0.5 text-sm text-[hsl(var(--smile-muted-foreground))]">
                  {language === "fr" ? "Semaine du 23 au 27 Mars 2026" : "أسبوع 23 إلى 27 مارس 2026"}
                </p>
              </div>
              <div className={clsx("flex items-center gap-2", rtl && "flex-row-reverse")}>
                <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[hsl(var(--smile-border))] bg-white/70 text-[hsl(var(--smile-muted-foreground))] hover:bg-white transition-colors">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[hsl(var(--smile-border))] bg-white/70 text-[hsl(var(--smile-muted-foreground))] hover:bg-white transition-colors">
                  <ChevronRight className="h-4 w-4" />
                </button>
                <button className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--smile-primary))] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity">
                  <Plus className="h-4 w-4" />{language === "fr" ? "Nouveau RDV" : "موعد جديد"}
                </button>
              </div>
            </div>

            <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${days.length}, 1fr)` }}>
              {days.map(([day, appts]) => (
                <div key={day} className="space-y-3">
                  <div className={clsx("rounded-2xl bg-white/80 border border-[hsl(var(--smile-border)/0.5)] px-4 py-3", rtl && "text-right")}>
                    <p className="text-sm font-semibold text-[hsl(var(--smile-foreground))]">{day} Mars</p>
                    <p className="text-xs text-[hsl(var(--smile-muted-foreground))]">{appts.length} {language === "fr" ? "RDV" : "مواعيد"}</p>
                  </div>
                  {appts.map((appt, i) => (
                    <div key={i} className={clsx(
                      "rounded-2xl border p-3.5 cursor-pointer transition-all hover:shadow-[0_4px_16px_hsl(var(--smile-navy)/0.1)] hover:-translate-y-0.5",
                      appt.status === "confirmed"
                        ? "bg-white/80 border-[hsl(var(--smile-border)/0.6)]"
                        : "bg-amber-50 border-amber-100",
                      rtl && "text-right",
                    )}>
                      <div className={clsx("flex items-center justify-between", rtl && "flex-row-reverse")}>
                        <p className="font-serif text-lg font-semibold text-[hsl(var(--smile-foreground))]">{appt.time}</p>
                        <span className={clsx("inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold",
                          appt.status === "confirmed" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700")}>
                          {language === "fr" ? statusLabel[appt.status].fr : statusLabel[appt.status].ar}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm font-medium text-[hsl(var(--smile-foreground))]">{appt.patient}</p>
                      <p className="text-xs text-[hsl(var(--smile-muted-foreground))]">{translate(appt.type)} · {appt.duration} min</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      }

      // ── Billing ────────────────────────────────────────────────────────────
      case "billing": {
        const billingKpis = [
          { label: { fr: "Total facturé",  ar: "إجمالي الفواتير"   }, value: "58 400 DH", color: "text-[hsl(var(--smile-foreground))]" },
          { label: { fr: "Payé",           ar: "مدفوع"             }, value: "38 200 DH", color: "text-emerald-600" },
          { label: { fr: "Impayé",         ar: "غير مدفوع"         }, value: "14 600 DH", color: "text-rose-600" },
          { label: { fr: "Brouillons",     ar: "مسودات"            }, value: "5 600 DH",  color: "text-amber-600" },
        ];
        const billingTabs = [
          { key: "all",     label: { fr: `Toutes (${allInvoices.length})`,                                  ar: `الكل (${allInvoices.length})`                                  } },
          { key: "paid",    label: { fr: `Payées (${allInvoices.filter((i) => i.status.fr === "Payée").length})`,       ar: `مدفوعة (${allInvoices.filter((i) => i.status.fr === "Payée").length})`       } },
          { key: "partial", label: { fr: `Partielles (${allInvoices.filter((i) => i.status.fr === "Partielle").length})`, ar: `جزئية (${allInvoices.filter((i) => i.status.fr === "Partielle").length})` } },
          { key: "draft",   label: { fr: `Brouillons (${allInvoices.filter((i) => i.status.fr === "Brouillon").length})`, ar: `مسودات (${allInvoices.filter((i) => i.status.fr === "Brouillon").length})` } },
        ];
        const statusColor: Record<string, string> = { "Payée": "bg-emerald-100 text-emerald-700", "Partielle": "bg-amber-100 text-amber-700", "Brouillon": "bg-slate-100 text-slate-600", "En attente": "bg-rose-100 text-rose-600" };
        return (
          <div className="space-y-4">
            <div className={clsx("flex items-center justify-between", rtl && "flex-row-reverse")}>
              <h1 className="font-serif text-3xl font-semibold text-[hsl(var(--smile-foreground))]">{language === "fr" ? "Facturation & devis" : "الفاتورة والعروض"}</h1>
              <button className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--smile-primary))] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity">
                <Plus className="h-4 w-4" />{language === "fr" ? "Nouvelle facture" : "فاتورة جديدة"}
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {billingKpis.map((k) => (
                <Card key={k.label.fr} className={clsx(rtl && "text-right")}>
                  <p className="text-sm text-[hsl(var(--smile-muted-foreground))]">{translate(k.label)}</p>
                  <p className={clsx("mt-3 font-serif text-2xl font-semibold", k.color)}>{k.value}</p>
                </Card>
              ))}
            </div>

            <Card className="p-0 overflow-hidden">
              <div className={clsx("flex flex-wrap gap-1 border-b border-[hsl(var(--smile-border)/0.5)] bg-[hsl(var(--smile-sky)/0.2)] px-4 py-3", rtl && "flex-row-reverse")}>
                {billingTabs.map((tab) => (
                  <button key={tab.key} onClick={() => setBillingTab(tab.key as typeof billingTab)}
                    className={clsx("rounded-xl px-4 py-2 text-sm font-medium transition-colors",
                      billingTab === tab.key
                        ? "bg-[hsl(var(--smile-primary))] text-white"
                        : "text-[hsl(var(--smile-muted-foreground))] hover:bg-[hsl(var(--smile-sky))]")}>
                    {translate(tab.label)}
                  </button>
                ))}
              </div>
              <div className="divide-y divide-[hsl(var(--smile-border)/0.4)]">
                {filteredInvoices.map((inv) => (
                  <div key={inv.ref} className={clsx("flex items-center justify-between px-5 py-4 hover:bg-[hsl(var(--smile-sky)/0.15)] transition-colors", rtl && "flex-row-reverse text-right")}>
                    <div className={clsx("flex items-center gap-4", rtl && "flex-row-reverse")}>
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-[hsl(var(--smile-sky)/0.5)]">
                        <span className="text-xs font-bold text-[hsl(var(--smile-primary))]">{inv.ref.startsWith("F") ? "FA" : "DV"}</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[hsl(var(--smile-foreground))]">{inv.ref}</p>
                        <p className="text-xs text-[hsl(var(--smile-muted-foreground))]">{inv.patient} · {inv.date} · {translate(inv.treatment)}</p>
                      </div>
                    </div>
                    <div className={clsx("flex items-center gap-4", rtl && "flex-row-reverse")}>
                      <span className={clsx("rounded-full px-3 py-1 text-xs font-semibold", statusColor[inv.status.fr] ?? "bg-slate-100 text-slate-600")}>{translate(inv.status)}</span>
                      <p className="w-28 text-right font-semibold text-[hsl(var(--smile-primary))]">{inv.amount}</p>
                      <button className="rounded-xl border border-[hsl(var(--smile-border))] bg-white/60 px-3 py-1.5 text-xs font-medium text-[hsl(var(--smile-muted-foreground))] hover:bg-white transition-colors">PDF</button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        );
      }

      // ── Stock ──────────────────────────────────────────────────────────────
      case "stock": {
        const stockKpis = [
          { label: { fr: "Total articles",     ar: "إجمالي المقالات"   }, value: `${allStockItems.length}`,                                          color: "text-[hsl(var(--smile-foreground))]" },
          { label: { fr: "Alertes critiques",  ar: "تنبيهات حرجة"     }, value: `${allStockItems.filter((s) => s.status === "critical").length}`,    color: "text-rose-600" },
          { label: { fr: "Sous seuil",         ar: "تحت الحد"          }, value: `${allStockItems.filter((s) => s.status === "low").length}`,          color: "text-amber-600" },
        ];
        const cats: { key: typeof stockCat; label: LocalizedText }[] = [
          { key: "all",           label: { fr: "Tous",          ar: "الكل"        } },
          { key: "Consommables",  label: { fr: "Consommables",  ar: "المستهلكات"  } },
          { key: "Instruments",   label: { fr: "Instruments",   ar: "الأدوات"     } },
          { key: "Médicaments",   label: { fr: "Médicaments",   ar: "الأدوية"     } },
        ];
        const stockStatusLabel: Record<string, LocalizedText> = {
          ok:       { fr: "OK",       ar: "جيد"  },
          low:      { fr: "Bas",      ar: "منخفض" },
          critical: { fr: "Critique", ar: "حرج"   },
        };
        return (
          <div className="space-y-4">
            <div className={clsx("flex items-center justify-between", rtl && "flex-row-reverse")}>
              <h1 className="font-serif text-3xl font-semibold text-[hsl(var(--smile-foreground))]">{language === "fr" ? "Stock" : "المخزون"}</h1>
              <button className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--smile-primary))] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity">
                <Plus className="h-4 w-4" />{language === "fr" ? "Commander" : "طلب توريد"}
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stockKpis.map((k) => (
                <Card key={k.label.fr} className={clsx(rtl && "text-right")}>
                  <p className="text-sm text-[hsl(var(--smile-muted-foreground))]">{translate(k.label)}</p>
                  <p className={clsx("mt-3 font-serif text-3xl font-semibold", k.color)}>{k.value}</p>
                </Card>
              ))}
            </div>

            <Card className="p-0 overflow-hidden">
              <div className={clsx("flex flex-wrap gap-1 border-b border-[hsl(var(--smile-border)/0.5)] bg-[hsl(var(--smile-sky)/0.2)] px-4 py-3", rtl && "flex-row-reverse")}>
                {cats.map((cat) => (
                  <button key={cat.key} onClick={() => setStockCat(cat.key)}
                    className={clsx("rounded-xl px-4 py-2 text-sm font-medium transition-colors",
                      stockCat === cat.key
                        ? "bg-[hsl(var(--smile-primary))] text-white"
                        : "text-[hsl(var(--smile-muted-foreground))] hover:bg-[hsl(var(--smile-sky))]")}>
                    {translate(cat.label)}
                  </button>
                ))}
              </div>
              <div className="divide-y divide-[hsl(var(--smile-border)/0.4)]">
                {filteredStock.map((item) => (
                  <div key={item.id} className={clsx("flex items-center justify-between px-5 py-4 hover:bg-[hsl(var(--smile-sky)/0.15)] transition-colors", rtl && "flex-row-reverse text-right")}>
                    <div className={clsx("flex items-center gap-4", rtl && "flex-row-reverse")}>
                      <div className={clsx("flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl",
                        item.status === "critical" ? "bg-rose-100" : item.status === "low" ? "bg-amber-100" : "bg-emerald-100")}>
                        <TriangleAlert className={clsx("h-4 w-4", item.status === "critical" ? "text-rose-500" : item.status === "low" ? "text-amber-500" : "text-emerald-500")} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[hsl(var(--smile-foreground))]">{translate(item.name)}</p>
                        <p className="text-xs text-[hsl(var(--smile-muted-foreground))]">{translate(item.category)} · {language === "fr" ? "Seuil" : "الحد"} : {item.threshold} {item.unit}</p>
                      </div>
                    </div>
                    <div className={clsx("flex items-center gap-4", rtl && "flex-row-reverse")}>
                      <StatusBadge status={item.status} fr={stockStatusLabel[item.status]?.fr ?? item.status} ar={stockStatusLabel[item.status]?.ar ?? item.status} language={language} />
                      <div className={clsx("w-24", rtl ? "text-left" : "text-right")}>
                        <p className={clsx("font-serif text-2xl font-semibold",
                          item.status === "critical" ? "text-rose-600" : item.status === "low" ? "text-amber-600" : "text-emerald-600")}>
                          {item.qty}
                        </p>
                        <p className="text-xs text-[hsl(var(--smile-muted-foreground))]">{item.unit}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        );
      }

      // ── Expenses ───────────────────────────────────────────────────────────
      case "expenses":
        return (
          <div className="space-y-4">
            <div className={clsx("flex items-center justify-between", rtl && "flex-row-reverse")}>
              <div className={clsx(rtl && "text-right")}>
                <h1 className="font-serif text-3xl font-semibold text-[hsl(var(--smile-foreground))]">{language === "fr" ? "Dépenses" : "المصاريف"}</h1>
                <p className="mt-0.5 text-sm text-[hsl(var(--smile-muted-foreground))]">Mars 2026</p>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--smile-primary))] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity">
                <Plus className="h-4 w-4" />{language === "fr" ? "Ajouter dépense" : "إضافة مصروف"}
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {expenses.map((exp) => (
                <Card key={exp.category.fr} className={clsx(rtl && "text-right")}>
                  <p className="text-sm text-[hsl(var(--smile-muted-foreground))]">{translate(exp.category)}</p>
                  <p className="mt-3 font-serif text-2xl font-semibold text-[hsl(var(--smile-foreground))]">{exp.amount}</p>
                  <div className="mt-3 h-1.5 rounded-full bg-[hsl(var(--smile-border)/0.5)]">
                    <div className="h-1.5 rounded-full" style={{ width: `${Math.min(parseInt(exp.amount.replace(/\D/g, ""), 10) / 600, 100)}%`, background: "linear-gradient(90deg, hsl(var(--smile-primary)/0.7), hsl(var(--smile-primary)))" }} />
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-0 overflow-hidden">
              <div className={clsx("border-b border-[hsl(var(--smile-border)/0.5)] bg-[hsl(var(--smile-sky)/0.2)] px-5 py-4", rtl && "text-right")}>
                <p className="text-sm font-semibold text-[hsl(var(--smile-foreground))]">{language === "fr" ? "Détail des dépenses — Mars 2026" : "تفاصيل المصاريف — مارس 2026"}</p>
                <p className="text-xs text-[hsl(var(--smile-muted-foreground))]">
                  {language === "fr" ? "Total : 82 700 DH" : "الإجمالي : 82 700 DH"}
                </p>
              </div>
              <div className="divide-y divide-[hsl(var(--smile-border)/0.4)]">
                {expenseEntries.map((entry, i) => (
                  <div key={i} className={clsx("flex items-center justify-between px-5 py-4 hover:bg-[hsl(var(--smile-sky)/0.15)] transition-colors", rtl && "flex-row-reverse text-right")}>
                    <div className={clsx("flex items-center gap-4", rtl && "flex-row-reverse")}>
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-[hsl(var(--smile-sky)/0.5)]">
                        <span className="text-[10px] font-bold text-[hsl(var(--smile-primary))]">{entry.date.split(" ")[0]}</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[hsl(var(--smile-foreground))]">{translate(entry.description)}</p>
                        <p className="text-xs text-[hsl(var(--smile-muted-foreground))]">{translate(entry.category)} · {entry.date}</p>
                      </div>
                    </div>
                    <p className="font-semibold text-rose-600">− {entry.amount}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        );

      // ── Settings ───────────────────────────────────────────────────────────
      case "settings":
        return (
          <div className="space-y-4">
            <h1 className={clsx("font-serif text-3xl font-semibold text-[hsl(var(--smile-foreground))]", rtl && "text-right")}>{language === "fr" ? "Paramètres" : "الإعدادات"}</h1>
            <div className="grid gap-4 lg:grid-cols-2">
              <Card className={clsx(rtl && "text-right")}>
                <h2 className="mb-5 font-serif text-xl font-semibold text-[hsl(var(--smile-foreground))]">{language === "fr" ? "Informations du cabinet" : "معلومات العيادة"}</h2>
                <div className="space-y-4">
                  {[
                    { label: { fr: "Nom du praticien", ar: "اسم الطبيب" }, value: "Dr Dardar Karim" },
                    { label: { fr: "Spécialité",        ar: "التخصص"    }, value: language === "fr" ? "Chirurgien-dentiste" : "جراح الأسنان" },
                    { label: { fr: "Adresse",           ar: "العنوان"   }, value: "Lot. Corbo 45 ETAGE 1 app 2, Tanger 90000" },
                    { label: { fr: "Téléphone",         ar: "الهاتف"    }, value: "08 08 56 63 17" },
                  ].map((field) => (
                    <div key={field.label.fr}>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--smile-muted-foreground))]">{translate(field.label)}</label>
                      <input
                        defaultValue={field.value}
                        className={clsx("w-full rounded-2xl border border-[hsl(var(--smile-border))] bg-[hsl(var(--smile-sky)/0.2)] px-4 py-3 text-sm text-[hsl(var(--smile-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--smile-primary)/0.3)]", rtl && "text-right")}
                      />
                    </div>
                  ))}
                  <button className="mt-2 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--smile-primary))] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity">
                    {language === "fr" ? "Enregistrer" : "حفظ"}
                  </button>
                </div>
              </Card>

              <div className="space-y-4">
                <Card className={clsx(rtl && "text-right")}>
                  <h2 className="mb-5 font-serif text-xl font-semibold text-[hsl(var(--smile-foreground))]">{language === "fr" ? "Notifications" : "الإشعارات"}</h2>
                  <div className="space-y-4">
                    {[
                      { label: { fr: "Rappels WhatsApp patients",   ar: "تذكيرات واتساب للمرضى"    }, on: true  },
                      { label: { fr: "Confirmations par SMS",        ar: "تأكيدات عبر الرسائل"       }, on: true  },
                      { label: { fr: "Alertes stock critique",       ar: "تنبيهات المخزون الحرج"     }, on: true  },
                      { label: { fr: "Rapport mensuel automatique",  ar: "تقرير شهري تلقائي"         }, on: false },
                    ].map((notif) => (
                      <div key={notif.label.fr} className={clsx("flex items-center justify-between", rtl && "flex-row-reverse")}>
                        <span className="text-sm text-[hsl(var(--smile-foreground))]">{translate(notif.label)}</span>
                        <div className={clsx("relative h-6 w-11 rounded-full transition-colors cursor-pointer", notif.on ? "bg-[hsl(var(--smile-primary))]" : "bg-[hsl(var(--smile-border))]")}>
                          <div className={clsx("absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform", notif.on ? "translate-x-5" : "translate-x-0.5")} />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className={clsx(rtl && "text-right")}>
                  <h2 className="mb-5 font-serif text-xl font-semibold text-[hsl(var(--smile-foreground))]">{language === "fr" ? "Apparence" : "المظهر"}</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--smile-muted-foreground))]">{language === "fr" ? "Langue" : "اللغة"}</p>
                      <div className={clsx("flex gap-2", rtl && "flex-row-reverse")}>
                        <button onClick={toggleLanguage} className="rounded-xl border border-[hsl(var(--smile-border))] bg-[hsl(var(--smile-sky)/0.4)] px-4 py-2 text-sm font-medium text-[hsl(var(--smile-foreground))] hover:bg-[hsl(var(--smile-sky))] transition-colors">
                          {language === "fr" ? "Français ✓" : "عربي ✓"}
                        </button>
                        <button onClick={toggleLanguage} className="rounded-xl border border-[hsl(var(--smile-border))] bg-white/60 px-4 py-2 text-sm font-medium text-[hsl(var(--smile-muted-foreground))] hover:bg-white transition-colors">
                          {language === "fr" ? "العربية" : "Français"}
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--smile-muted-foreground))]">{language === "fr" ? "Mode" : "النمط"}</p>
                      <div className={clsx("flex gap-2", rtl && "flex-row-reverse")}>
                        <button onClick={() => setThemeMode("light")} className={clsx("rounded-xl border px-4 py-2 text-sm font-medium transition-colors", themeMode === "light" ? "border-[hsl(var(--smile-primary))] bg-[hsl(var(--smile-sky)/0.4)] text-[hsl(var(--smile-primary))]" : "border-[hsl(var(--smile-border))] bg-white/60 text-[hsl(var(--smile-muted-foreground))] hover:bg-white")}>
                          {language === "fr" ? "Clair" : "فاتح"}
                        </button>
                        <button onClick={() => setThemeMode("dark")} className={clsx("rounded-xl border px-4 py-2 text-sm font-medium transition-colors", themeMode === "dark" ? "border-[hsl(var(--smile-primary))] bg-[hsl(var(--smile-sky)/0.4)] text-[hsl(var(--smile-primary))]" : "border-[hsl(var(--smile-border))] bg-white/60 text-[hsl(var(--smile-muted-foreground))] hover:bg-white")}>
                          {language === "fr" ? "Sombre" : "داكن"}
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // ── Shell ────────────────────────────────────────────────────────────────────
  return (
    <div className="smile-site min-h-screen">
      <div className={clsx("mx-auto flex max-w-[1600px] gap-4 p-3 md:p-4", rtl && "flex-row-reverse")}>

        {/* Sidebar */}
        <aside className={clsx("flex flex-shrink-0 flex-col rounded-[2rem] bg-white/90 backdrop-blur-sm border border-[hsl(var(--smile-border)/0.5)] shadow-[0_4px_30px_hsl(var(--smile-navy)/0.08)] px-3 py-4 transition-all duration-300", collapsed ? "hidden w-[72px] lg:flex" : "w-[256px]")}>
          <div className={clsx("flex items-center gap-3 px-2 pb-5 border-b border-[hsl(var(--smile-border)/0.5)]", rtl && "flex-row-reverse")}>
            <Image src="/dr-dardar-karim-logo.webp" alt="Dr Dardar Karim" width={140} height={70} className="h-10 w-auto object-contain flex-shrink-0" />
            {!collapsed && (
              <div className={clsx(rtl && "text-right")}>
                <p className="text-sm font-semibold text-[hsl(var(--smile-foreground))] leading-tight">Dr Dardar Karim</p>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[hsl(var(--smile-muted-foreground))]">{language === "fr" ? "Cabinet dentaire" : "عيادة الأسنان"}</p>
              </div>
            )}
          </div>

          <button type="button" onClick={() => setCollapsed((prev) => !prev)}
            className={clsx("my-3 flex h-10 w-full items-center rounded-xl bg-[hsl(var(--smile-sky)/0.5)] px-3 text-sm font-medium text-[hsl(var(--smile-muted-foreground))] hover:bg-[hsl(var(--smile-sky))] transition-colors", rtl ? "flex-row-reverse justify-between" : "justify-between")}>
            {!collapsed && <span>{language === "fr" ? "Réduire" : "تصغير"}</span>}
            {rtl ? (collapsed ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />) : (collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />)}
          </button>

          <nav className="flex-1 space-y-1">
            {dashboardNav.map((item) => {
              const Icon = item.icon;
              const active = item.key === activeSection;
              return (
                <button key={item.key} type="button" onClick={() => setActiveSection(item.key as SectionKey)}
                  className={clsx("flex h-11 w-full items-center rounded-xl px-3 text-sm font-medium transition-colors",
                    active ? "bg-[hsl(var(--smile-primary))] text-white" : "text-[hsl(var(--smile-muted-foreground))] hover:bg-[hsl(var(--smile-sky)/0.5)] hover:text-[hsl(var(--smile-foreground))]",
                    rtl ? "flex-row-reverse gap-3" : "gap-3")}>
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  {!collapsed && <span className="flex-1 text-left">{translate(item.label)}</span>}
                </button>
              );
            })}
          </nav>

          {!collapsed && (
            <div className="mt-4 rounded-2xl bg-rose-50 border border-rose-100 p-4">
              <div className={clsx("flex items-center gap-2", rtl && "flex-row-reverse")}>
                <TriangleAlert className="h-4 w-4 flex-shrink-0 text-rose-500" />
                <p className="text-sm font-semibold text-rose-700">{language === "fr" ? "Stock critique" : "مخزون حرج"}</p>
              </div>
              <p className="mt-2 text-xs leading-5 text-rose-600/80">{language === "fr" ? "3 consommables critiques et 4 produits sous seuil." : "3 مواد حرجة و4 منتجات تحت الحد."}</p>
            </div>
          )}
        </aside>

        {/* Main */}
        <main className="min-w-0 flex-1">
          <header className="smile-glass sticky top-3 z-40 mb-4 rounded-[1.75rem] border border-[hsl(var(--smile-border)/0.5)] px-5 py-3 shadow-[0_4px_24px_hsl(var(--smile-navy)/0.06)]">
            <div className={clsx("flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between", rtl && "text-right")}>
              <div className="relative max-w-md flex-1">
                <Search className={clsx("absolute top-1/2 h-4 w-4 -translate-y-1/2 text-[hsl(var(--smile-muted-foreground))]", rtl ? "right-4" : "left-4")} />
                <input className={clsx("h-11 w-full rounded-2xl border border-[hsl(var(--smile-border))] bg-white/60 px-11 text-sm text-[hsl(var(--smile-foreground))] placeholder:text-[hsl(var(--smile-muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--smile-primary)/0.25)]", rtl && "text-right")}
                  placeholder={language === "fr" ? "Rechercher patients, RDV, factures…" : "ابحث عن المرضى أو المواعيد…"} />
              </div>
              <div className={clsx("flex items-center gap-2", rtl && "flex-row-reverse")}>
                <button type="button" onClick={toggleLanguage} className="inline-flex h-10 items-center gap-2 rounded-full border border-[hsl(var(--smile-border)/0.6)] bg-white/70 px-4 text-sm font-medium text-[hsl(var(--smile-muted-foreground))] hover:bg-white transition-colors">
                  <Globe className="h-4 w-4" /><span>{language === "fr" ? "FR | AR" : "AR | FR"}</span>
                </button>
                <button type="button" onClick={() => setThemeMode(themeMode === "light" ? "dark" : "light")} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--smile-border)/0.6)] bg-white/70 hover:bg-white transition-colors text-[hsl(var(--smile-muted-foreground))]">
                  {themeMode === "light" ? <MoonStar className="h-4 w-4" /> : <SunMedium className="h-4 w-4" />}
                </button>
                <button type="button" className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--smile-border)/0.6)] bg-white/70 hover:bg-white transition-colors text-[hsl(var(--smile-muted-foreground))]">
                  <Bell className="h-4 w-4" />
                  <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-[hsl(var(--smile-gold))] border-2 border-white" />
                </button>
                <div className="flex h-10 items-center gap-3 rounded-full border border-[hsl(var(--smile-border)/0.6)] bg-white/70 px-3">
                  <div className="h-7 w-7 rounded-full bg-[linear-gradient(135deg,hsl(var(--smile-primary)),hsl(var(--smile-gold)))]" />
                  <div className="hidden text-left lg:block">
                    <p className="text-sm font-semibold text-[hsl(var(--smile-foreground))]">Dr. Karim</p>
                    <p className="text-xs text-[hsl(var(--smile-muted-foreground))]">{language === "fr" ? "Administrateur" : "مدير"}</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {renderContent()}
        </main>
      </div>
    </div>
  );
}

// Type alias to avoid importing in this file
type LocalizedText = { fr: string; ar: string; en?: string };
