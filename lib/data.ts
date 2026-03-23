import { Calendar, FileText, LayoutDashboard, Package, Settings, TrendingDown, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Language = "fr" | "ar" | "en";
export type MotionPack = "cinematic" | "fluid" | "precision" | "luxe" | "minimal";

export type LocalizedText = {
  fr: string;
  ar: string;
  en?: string;
};

export const t = (language: Language, value: LocalizedText) =>
  language === "ar" ? value.ar : language === "en" ? value.en ?? value.fr : value.fr;

export const motionPacks: Array<{ value: MotionPack; label: LocalizedText; summary: LocalizedText }> = [
  {
    value: "cinematic",
    label: { fr: "Cinematic", ar: "Cinematic" },
    summary: { fr: "Lent, profond et immersif.", ar: "Lent, profond et immersif." },
  },
  {
    value: "fluid",
    label: { fr: "Fluid", ar: "Fluid" },
    summary: { fr: "Organique, doux et plus chaleureux.", ar: "Organique, doux et plus chaleureux." },
  },
  {
    value: "precision",
    label: { fr: "Precision", ar: "Precision" },
    summary: { fr: "Rapide, net et rigoureux.", ar: "Rapide, net et rigoureux." },
  },
  {
    value: "luxe",
    label: { fr: "Luxe", ar: "Luxe" },
    summary: { fr: "Plus lumineux et plus raffiné.", ar: "Plus lumineux et plus raffiné." },
  },
  {
    value: "minimal",
    label: { fr: "Minimal Motion", ar: "Minimal Motion" },
    summary: { fr: "Subtil et très discret.", ar: "Subtil et très discret." },
  },
];

export const siteLinks = [
  { href: "/", label: { fr: "Accueil", ar: "الرئيسية" } },
  { href: "/services", label: { fr: "Soins", ar: "العلاجات" } },
  { href: "/equipe", label: { fr: "Cabinet", ar: "العيادة" } },
  { href: "/rdv", label: { fr: "Rendez-vous", ar: "المواعيد" } },
];

export const services = [
  {
    title: { fr: "Dentisterie générale", ar: "طب الأسنان العام" },
    description: {
      fr: "Consultation, contrôle et soins du quotidien pour prendre en charge la santé bucco-dentaire.",
      ar: "استشارة ومراقبة ورعاية يومية لصحة الأسنان والفم.",
    },
    tag: { fr: "Consultation", ar: "استشارة" },
  },
  {
    title: { fr: "Esthétique du sourire", ar: "جماليات الابتسامة" },
    description: {
      fr: "Blanchiment et soins esthétiques du sourire avec une approche attentive et rassurante.",
      ar: "تبييض وعلاجات تجميلية للابتسامة بنهج دقيق ومطمئن.",
    },
    tag: { fr: "Sourire", ar: "ابتسامة" },
  },
  {
    title: { fr: "Implants dentaires", ar: "زراعة الأسنان" },
    description: {
      fr: "Évaluation des besoins et orientation pour restaurer la fonction, le confort et l'esthétique.",
      ar: "تقييم الاحتياجات والتوجيه لاستعادة الوظيفة والراحة والجماليات.",
    },
    tag: { fr: "Implants", ar: "زرعات" },
  },
];

export const teamMembers = [
  {
    name: "Dr Dardar Karim",
    role: { fr: "Chirurgien-dentiste", ar: "جراح الأسنان" },
    bio: {
      fr: "Le cabinet accueille les patients à Tanger pour la consultation, les soins dentaires et l'esthétique du sourire avec une approche claire et rassurante.",
      ar: "تستقبل العيادة المرضى في طنجة للاستشارة وعلاجات الأسنان وجماليات الابتسامة بنهج واضح ومطمئن.",
    },
  },
];

export const kpis = [
  { title: { fr: "CA du jour", ar: "مداخيل اليوم" }, value: "18 450 DH", delta: "+12.4%" },
  { title: { fr: "Patients du jour", ar: "مرضى اليوم" }, value: "24", delta: "+4" },
  { title: { fr: "Impayés", ar: "المتأخرات" }, value: "32 200 DH", delta: "-5.2%" },
  { title: { fr: "Alertes stock", ar: "تنبيهات المخزون" }, value: "7", delta: "Critique" },
];

export const revenueTrend = [42, 48, 45, 62, 58, 67, 79, 82, 73, 91, 88, 102];

export const revenueSegments = [
  { label: { fr: "Implants", ar: "الزرعات" }, value: 38 },
  { label: { fr: "Esthétique", ar: "التجميل" }, value: 26 },
  { label: { fr: "Orthodontie", ar: "تقويم الأسنان" }, value: 19 },
  { label: { fr: "Contrôles", ar: "الفحوصات" }, value: 17 },
];

export const upcomingAppointments = [
  { time: "09:15", patient: "Meriem Chraibi", type: { fr: "Consultation", ar: "استشارة" }, reminder: "sent" },
  { time: "10:30", patient: "Youssef Ettalbi", type: { fr: "Implant", ar: "زراعة" }, reminder: "pending" },
  { time: "11:45", patient: "Noura Bennis", type: { fr: "Blanchiment", ar: "تبييض" }, reminder: "failed" },
  { time: "14:00", patient: "Rayan Berrada", type: { fr: "Contrôle", ar: "مراقبة" }, reminder: "sent" },
];

export const patients = [
  { name: "Meriem Chraibi", phone: "+212 661 23 88 12", lastVisit: "18 mars", balance: "1 250 DH" },
  { name: "Ahmed Ouali", phone: "+212 662 09 18 41", lastVisit: "16 mars", balance: "0 DH" },
  { name: "Lina Kadiri", phone: "+212 667 55 03 21", lastVisit: "14 mars", balance: "780 DH" },
  { name: "Sami Mansouri", phone: "+212 600 89 19 33", lastVisit: "12 mars", balance: "3 400 DH" },
];

export const invoices = [
  { ref: "F-2026-0001", patient: "Meriem Chraibi", status: { fr: "Payée", ar: "مدفوعة" }, amount: "4 200 DH" },
  { ref: "F-2026-0002", patient: "Ahmed Ouali", status: { fr: "Partielle", ar: "جزئية" }, amount: "2 800 DH" },
  { ref: "D-2026-0048", patient: "Sara Benkirane", status: { fr: "Brouillon", ar: "مسودة" }, amount: "7 600 DH" },
];

export const stockAlerts = [
  { item: { fr: "Gants stériles", ar: "قفازات معقمة" }, qty: "12", threshold: "20" },
  { item: { fr: "Composite A2", ar: "كومبوزيت A2" }, qty: "4", threshold: "10" },
  { item: { fr: "Anesthésie locale", ar: "تخدير موضعي" }, qty: "9", threshold: "15" },
];

export const expenses = [
  { category: { fr: "Matériel", ar: "المعدات" }, amount: "12 400 DH" },
  { category: { fr: "Salaires", ar: "الرواتب" }, amount: "48 000 DH" },
  { category: { fr: "Loyer", ar: "الإيجار" }, amount: "15 500 DH" },
  { category: { fr: "Fournitures", ar: "المستلزمات" }, amount: "6 800 DH" },
];

// ── Extended data for section views ──────────────────────────────────────────

export const allPatients = [
  { id: 1, name: "Meriem Chraibi",   phone: "+212 661 23 88 12", lastVisit: "18 mars 2026", nextVisit: "25 mars 2026", treatment: { fr: "Implant",       ar: "زراعة"   }, balance: "1 250 DH", status: "active" },
  { id: 2, name: "Ahmed Ouali",      phone: "+212 662 09 18 41", lastVisit: "16 mars 2026", nextVisit: null,            treatment: { fr: "Contrôle",      ar: "مراقبة"  }, balance: "0 DH",     status: "active" },
  { id: 3, name: "Lina Kadiri",      phone: "+212 667 55 03 21", lastVisit: "14 mars 2026", nextVisit: "28 mars 2026", treatment: { fr: "Blanchiment",   ar: "تبييض"   }, balance: "780 DH",   status: "active" },
  { id: 4, name: "Sami Mansouri",    phone: "+212 600 89 19 33", lastVisit: "12 mars 2026", nextVisit: null,            treatment: { fr: "Orthodontie",   ar: "تقويم"   }, balance: "3 400 DH", status: "active" },
  { id: 5, name: "Sara Benkirane",   phone: "+212 664 12 45 67", lastVisit: "10 mars 2026", nextVisit: "27 mars 2026", treatment: { fr: "Implant",       ar: "زراعة"   }, balance: "7 600 DH", status: "new"    },
  { id: 6, name: "Youssef Ettalbi",  phone: "+212 661 78 90 12", lastVisit: "08 mars 2026", nextVisit: "30 mars 2026", treatment: { fr: "Implant",       ar: "زراعة"   }, balance: "5 200 DH", status: "new"    },
  { id: 7, name: "Noura Bennis",     phone: "+212 663 45 21 89", lastVisit: "05 mars 2026", nextVisit: "25 mars 2026", treatment: { fr: "Blanchiment",   ar: "تبييض"   }, balance: "2 100 DH", status: "active" },
  { id: 8, name: "Rayan Berrada",    phone: "+212 660 33 77 55", lastVisit: "02 mars 2026", nextVisit: null,            treatment: { fr: "Contrôle",      ar: "مراقبة"  }, balance: "0 DH",     status: "active" },
  { id: 9, name: "Fatima Zouari",    phone: "+212 665 89 23 45", lastVisit: "20 fév 2026",  nextVisit: null,            treatment: { fr: "Extraction",    ar: "خلع"     }, balance: "0 DH",     status: "inactive" },
  { id: 10, name: "Khalid El Amrani", phone: "+212 662 56 34 12", lastVisit: "18 fév 2026", nextVisit: "26 mars 2026", treatment: { fr: "Orthodontie",   ar: "تقويم"   }, balance: "8 900 DH", status: "new"    },
];

export type AgendaAppointment = {
  time: string;
  patient: string;
  type: LocalizedText;
  duration: number;
  status: "confirmed" | "pending" | "cancelled";
};

export const agendaWeek: Record<string, AgendaAppointment[]> = {
  "Lun 23": [
    { time: "09:15", patient: "Meriem Chraibi",  type: { fr: "Consultation", ar: "استشارة"    }, duration: 30, status: "confirmed" },
    { time: "10:30", patient: "Youssef Ettalbi", type: { fr: "Implant",      ar: "زراعة"      }, duration: 60, status: "confirmed" },
    { time: "11:45", patient: "Noura Bennis",    type: { fr: "Blanchiment",  ar: "تبييض"      }, duration: 45, status: "pending"   },
    { time: "14:00", patient: "Rayan Berrada",   type: { fr: "Contrôle",     ar: "مراقبة"     }, duration: 30, status: "confirmed" },
    { time: "15:30", patient: "Sami Mansouri",   type: { fr: "Orthodontie",  ar: "تقويم"      }, duration: 60, status: "confirmed" },
  ],
  "Mar 24": [
    { time: "09:00", patient: "Ahmed Ouali",     type: { fr: "Contrôle",     ar: "مراقبة"     }, duration: 30, status: "confirmed" },
    { time: "10:15", patient: "Sara Benkirane",  type: { fr: "Implant",      ar: "زراعة"      }, duration: 90, status: "confirmed" },
    { time: "14:30", patient: "Lina Kadiri",     type: { fr: "Blanchiment",  ar: "تبييض"      }, duration: 45, status: "pending"   },
  ],
  "Mer 25": [
    { time: "09:30", patient: "Meriem Chraibi",  type: { fr: "Suivi implant", ar: "متابعة الزراعة" }, duration: 30, status: "confirmed" },
    { time: "11:00", patient: "Khalid El Amrani", type: { fr: "Orthodontie", ar: "تقويم"      }, duration: 60, status: "confirmed" },
    { time: "15:00", patient: "Noura Bennis",    type: { fr: "Contrôle",     ar: "مراقبة"     }, duration: 30, status: "confirmed" },
    { time: "16:30", patient: "Rayan Berrada",   type: { fr: "Extraction",   ar: "خلع"        }, duration: 45, status: "pending"   },
  ],
  "Jeu 26": [
    { time: "09:00", patient: "Sara Benkirane",  type: { fr: "Consultation", ar: "استشارة"    }, duration: 30, status: "confirmed" },
    { time: "10:30", patient: "Ahmed Ouali",     type: { fr: "Détartrage",   ar: "تنظيف"      }, duration: 45, status: "confirmed" },
    { time: "14:00", patient: "Youssef Ettalbi", type: { fr: "Suivi implant", ar: "متابعة"   }, duration: 30, status: "confirmed" },
  ],
  "Ven 27": [
    { time: "09:15", patient: "Khalid El Amrani", type: { fr: "Orthodontie", ar: "تقويم"      }, duration: 60, status: "confirmed" },
    { time: "11:00", patient: "Fatima Zouari",   type: { fr: "Consultation", ar: "استشارة"    }, duration: 30, status: "pending"   },
    { time: "14:30", patient: "Lina Kadiri",     type: { fr: "Contrôle",     ar: "مراقبة"     }, duration: 30, status: "confirmed" },
  ],
};

export const allInvoices = [
  { ref: "F-2026-0001", patient: "Meriem Chraibi",   date: "18 mars", status: { fr: "Payée",      ar: "مدفوعة"        }, amount: "4 200 DH",  treatment: { fr: "Implant",      ar: "زراعة"  } },
  { ref: "F-2026-0002", patient: "Ahmed Ouali",      date: "16 mars", status: { fr: "Partielle",  ar: "جزئية"         }, amount: "2 800 DH",  treatment: { fr: "Détartrage",   ar: "تنظيف"  } },
  { ref: "D-2026-0048", patient: "Sara Benkirane",   date: "15 mars", status: { fr: "Brouillon",  ar: "مسودة"         }, amount: "7 600 DH",  treatment: { fr: "Implant",      ar: "زراعة"  } },
  { ref: "F-2026-0003", patient: "Lina Kadiri",      date: "14 mars", status: { fr: "Payée",      ar: "مدفوعة"        }, amount: "3 100 DH",  treatment: { fr: "Blanchiment",  ar: "تبييض"  } },
  { ref: "F-2026-0004", patient: "Sami Mansouri",    date: "12 mars", status: { fr: "Partielle",  ar: "جزئية"         }, amount: "5 400 DH",  treatment: { fr: "Orthodontie",  ar: "تقويم"  } },
  { ref: "F-2026-0005", patient: "Youssef Ettalbi",  date: "10 mars", status: { fr: "En attente", ar: "قيد الانتظار"  }, amount: "8 200 DH",  treatment: { fr: "Implant",      ar: "زراعة"  } },
  { ref: "F-2026-0006", patient: "Noura Bennis",     date: "08 mars", status: { fr: "Payée",      ar: "مدفوعة"        }, amount: "2 500 DH",  treatment: { fr: "Blanchiment",  ar: "تبييض"  } },
  { ref: "D-2026-0049", patient: "Khalid El Amrani", date: "05 mars", status: { fr: "Brouillon",  ar: "مسودة"         }, amount: "11 200 DH", treatment: { fr: "Orthodontie",  ar: "تقويم"  } },
];

export const allStockItems = [
  { id: 1,  category: { fr: "Consommables", ar: "المستهلكات" }, name: { fr: "Gants stériles (boîte)",       ar: "قفازات معقمة"      }, qty: 12, threshold: 20, unit: "boîtes",    status: "critical" },
  { id: 2,  category: { fr: "Consommables", ar: "المستهلكات" }, name: { fr: "Composite A2",                ar: "كومبوزيت A2"       }, qty: 4,  threshold: 10, unit: "seringues", status: "critical" },
  { id: 3,  category: { fr: "Consommables", ar: "المستهلكات" }, name: { fr: "Masques chirurgicaux (boîte)", ar: "أقنعة جراحية"      }, qty: 35, threshold: 30, unit: "boîtes",    status: "ok"       },
  { id: 4,  category: { fr: "Consommables", ar: "المستهلكات" }, name: { fr: "Bavettes (sachet)",            ar: "مريلة"             }, qty: 18, threshold: 25, unit: "sachets",   status: "low"      },
  { id: 5,  category: { fr: "Consommables", ar: "المستهلكات" }, name: { fr: "Coton stérile (sachet)",       ar: "قطن معقم"          }, qty: 42, threshold: 20, unit: "sachets",   status: "ok"       },
  { id: 6,  category: { fr: "Consommables", ar: "المستهلكات" }, name: { fr: "Fil de suture (boîte)",        ar: "خيوط جراحية"       }, qty: 8,  threshold: 15, unit: "boîtes",    status: "low"      },
  { id: 7,  category: { fr: "Instruments",  ar: "الأدوات"    }, name: { fr: "Miroir dentaire",              ar: "مرآة الفم"         }, qty: 14, threshold: 10, unit: "pièces",    status: "ok"       },
  { id: 8,  category: { fr: "Instruments",  ar: "الأدوات"    }, name: { fr: "Sonde parodontale",            ar: "مسبار اللثة"       }, qty: 6,  threshold: 8,  unit: "pièces",    status: "low"      },
  { id: 9,  category: { fr: "Instruments",  ar: "الأدوات"    }, name: { fr: "Fraises dentaires (set)",      ar: "مثاقب أسنان"       }, qty: 22, threshold: 15, unit: "sets",      status: "ok"       },
  { id: 10, category: { fr: "Instruments",  ar: "الأدوات"    }, name: { fr: "Curette parodontale",          ar: "كيريت اللثة"       }, qty: 9,  threshold: 12, unit: "pièces",    status: "low"      },
  { id: 11, category: { fr: "Médicaments",  ar: "الأدوية"    }, name: { fr: "Anesthésie locale (boîte)",    ar: "تخدير موضعي"       }, qty: 9,  threshold: 15, unit: "boîtes",    status: "critical" },
  { id: 12, category: { fr: "Médicaments",  ar: "الأدوية"    }, name: { fr: "Gel fluoré (tube)",            ar: "جيل الفلور"        }, qty: 11, threshold: 8,  unit: "tubes",     status: "ok"       },
  { id: 13, category: { fr: "Médicaments",  ar: "الأدوية"    }, name: { fr: "Antibiotique (plaquette)",     ar: "مضاد حيوي"         }, qty: 25, threshold: 20, unit: "plaquettes", status: "ok"      },
  { id: 14, category: { fr: "Médicaments",  ar: "الأدوية"    }, name: { fr: "Anti-inflammatoire (boîte)",   ar: "مضاد للالتهاب"     }, qty: 7,  threshold: 10, unit: "boîtes",    status: "low"      },
];

export const expenseEntries = [
  { date: "20 mars", category: { fr: "Matériel",    ar: "المعدات"     }, description: { fr: "Commande composite & résines",     ar: "طلب مركب وراتنجات"      }, amount: "4 200 DH"  },
  { date: "18 mars", category: { fr: "Salaires",    ar: "الرواتب"     }, description: { fr: "Salaire assistante dentaire",       ar: "راتب المساعدة الطبية"    }, amount: "8 000 DH"  },
  { date: "15 mars", category: { fr: "Loyer",       ar: "الإيجار"     }, description: { fr: "Loyer mensuel cabinet",              ar: "إيجار العيادة الشهري"    }, amount: "15 500 DH" },
  { date: "12 mars", category: { fr: "Matériel",    ar: "المعدات"     }, description: { fr: "Fraises & instruments stériles",    ar: "مثاقب وأدوات معقمة"     }, amount: "3 800 DH"  },
  { date: "10 mars", category: { fr: "Fournitures", ar: "المستلزمات"  }, description: { fr: "Consommables stériles",             ar: "مستهلكات معقمة"          }, amount: "2 600 DH"  },
  { date: "08 mars", category: { fr: "Salaires",    ar: "الرواتب"     }, description: { fr: "Acompte technicien",                ar: "سلفة الفني"              }, amount: "5 000 DH"  },
  { date: "05 mars", category: { fr: "Matériel",    ar: "المعدات"     }, description: { fr: "Anesthésie locale (réassort)",      ar: "تخدير موضعي (إعادة)"    }, amount: "2 200 DH"  },
  { date: "03 mars", category: { fr: "Fournitures", ar: "المستلزمات"  }, description: { fr: "Bavettes, masques, gants",          ar: "مريلات وأقنعة وقفازات"  }, amount: "1 400 DH"  },
  { date: "01 mars", category: { fr: "Salaires",    ar: "الرواتب"     }, description: { fr: "Salaire principal (Dr Karim)",       ar: "الراتب الرئيسي"          }, amount: "35 000 DH" },
];

export type DashboardNavItem = {
  key: string;
  icon: LucideIcon;
  label: LocalizedText;
};

export const dashboardNav: DashboardNavItem[] = [
  { key: "dashboard", icon: LayoutDashboard, label: { fr: "Dashboard", ar: "لوحة التحكم" } },
  { key: "patients", icon: Users, label: { fr: "Patients", ar: "المرضى" } },
  { key: "agenda", icon: Calendar, label: { fr: "Agenda", ar: "الأجندة" } },
  { key: "billing", icon: FileText, label: { fr: "Facturation", ar: "الفاتورة" } },
  { key: "stock", icon: Package, label: { fr: "Stock", ar: "المخزون" } },
  { key: "expenses", icon: TrendingDown, label: { fr: "Dépenses", ar: "المصاريف" } },
  { key: "settings", icon: Settings, label: { fr: "Paramètres", ar: "الإعدادات" } },
];
