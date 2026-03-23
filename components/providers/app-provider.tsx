"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { Language, LocalizedText, MotionPack, motionPacks, t } from "@/lib/data";

type ThemeMode = "light" | "dark";
type ThemePreset = "ocean" | "forest" | "midnight";

type AppContextValue = {
  language: Language;
  direction: "ltr" | "rtl";
  motionPack: MotionPack;
  themeMode: ThemeMode;
  themePreset: ThemePreset;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  setMotionPack: (pack: MotionPack) => void;
  setThemeMode: (mode: ThemeMode) => void;
  setThemePreset: (preset: ThemePreset) => void;
  translate: (value: LocalizedText) => string;
  packLabel: string;
};

const STORAGE_KEY = "dentapro-ui-state";

const presets: Record<ThemePreset, Record<ThemeMode, Record<string, string>>> = {
  ocean: {
    light: {
      "--background": "251 249 248",
      "--foreground": "27 28 28",
      "--muted": "240 237 237",
      "--muted-foreground": "88 95 102",
      "--primary": "27 107 147",
      "--primary-foreground": "255 255 255",
      "--secondary": "79 192 208",
      "--secondary-foreground": "8 49 66",
      "--accent": "240 165 0",
      "--accent-foreground": "33 26 7",
      "--card": "255 255 255",
      "--card-foreground": "27 28 28",
      "--border": "217 220 224",
      "--destructive": "239 68 68",
      "--sidebar": "243 247 249",
      "--sidebar-foreground": "27 28 28",
      "--sidebar-accent": "220 236 242",
      "--ring": "27 107 147"
    },
    dark: {
      "--background": "12 24 33",
      "--foreground": "242 246 248",
      "--muted": "21 38 49",
      "--muted-foreground": "173 190 198",
      "--primary": "98 197 228",
      "--primary-foreground": "8 21 30",
      "--secondary": "64 157 180",
      "--secondary-foreground": "235 250 255",
      "--accent": "240 189 84",
      "--accent-foreground": "46 33 10",
      "--card": "18 32 42",
      "--card-foreground": "242 246 248",
      "--border": "39 62 77",
      "--destructive": "248 113 113",
      "--sidebar": "10 20 28",
      "--sidebar-foreground": "235 242 246",
      "--sidebar-accent": "18 43 56",
      "--ring": "98 197 228"
    }
  },
  forest: {
    light: {
      "--background": "248 249 246",
      "--foreground": "31 37 33",
      "--muted": "236 240 235",
      "--muted-foreground": "90 98 92",
      "--primary": "45 102 83",
      "--primary-foreground": "255 255 255",
      "--secondary": "129 175 140",
      "--secondary-foreground": "16 41 29",
      "--accent": "190 141 74",
      "--accent-foreground": "45 28 10",
      "--card": "255 255 255",
      "--card-foreground": "31 37 33",
      "--border": "215 223 216",
      "--destructive": "220 83 67",
      "--sidebar": "240 245 241",
      "--sidebar-foreground": "31 37 33",
      "--sidebar-accent": "220 230 223",
      "--ring": "45 102 83"
    },
    dark: {
      "--background": "18 25 22",
      "--foreground": "238 244 240",
      "--muted": "30 39 35",
      "--muted-foreground": "180 191 185",
      "--primary": "113 193 154",
      "--primary-foreground": "10 25 18",
      "--secondary": "95 145 122",
      "--secondary-foreground": "238 244 240",
      "--accent": "220 173 101",
      "--accent-foreground": "48 30 10",
      "--card": "22 30 27",
      "--card-foreground": "238 244 240",
      "--border": "50 64 58",
      "--destructive": "248 113 113",
      "--sidebar": "15 21 18",
      "--sidebar-foreground": "238 244 240",
      "--sidebar-accent": "27 38 32",
      "--ring": "113 193 154"
    }
  },
  midnight: {
    light: {
      "--background": "246 245 249",
      "--foreground": "31 28 38",
      "--muted": "236 233 244",
      "--muted-foreground": "97 92 108",
      "--primary": "95 84 170",
      "--primary-foreground": "255 255 255",
      "--secondary": "157 132 202",
      "--secondary-foreground": "31 20 56",
      "--accent": "214 176 86",
      "--accent-foreground": "52 36 11",
      "--card": "255 255 255",
      "--card-foreground": "31 28 38",
      "--border": "220 214 235",
      "--destructive": "220 83 67",
      "--sidebar": "241 239 247",
      "--sidebar-foreground": "31 28 38",
      "--sidebar-accent": "227 221 241",
      "--ring": "95 84 170"
    },
    dark: {
      "--background": "16 13 26",
      "--foreground": "244 240 255",
      "--muted": "29 24 44",
      "--muted-foreground": "186 178 205",
      "--primary": "158 145 235",
      "--primary-foreground": "19 14 36",
      "--secondary": "122 105 193",
      "--secondary-foreground": "244 240 255",
      "--accent": "223 184 92",
      "--accent-foreground": "50 36 12",
      "--card": "21 18 34",
      "--card-foreground": "244 240 255",
      "--border": "51 43 77",
      "--destructive": "248 113 113",
      "--sidebar": "13 11 22",
      "--sidebar-foreground": "244 240 255",
      "--sidebar-accent": "29 24 44",
      "--ring": "158 145 235"
    }
  }
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");
  const [motionPack, setMotionPack] = useState<MotionPack>("cinematic");
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");
  const [themePreset, setThemePreset] = useState<ThemePreset>("ocean");

  useEffect(() => {
    const pathLocale = window.location.pathname.split("/")[1];
    if (pathLocale === "fr" || pathLocale === "en" || pathLocale === "ar") {
      setLanguage(pathLocale);
    }

    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    try {
      const parsed = JSON.parse(saved) as Partial<{
        language: Language;
        motionPack: MotionPack;
        themeMode: ThemeMode;
        themePreset: ThemePreset;
      }>;
      if (parsed.language) setLanguage(parsed.language);
      if (parsed.motionPack) setMotionPack(parsed.motionPack);
      if (parsed.themeMode) setThemeMode(parsed.themeMode);
      if (parsed.themePreset) setThemePreset(parsed.themePreset);
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ language, motionPack, themeMode, themePreset }),
    );
  }, [language, motionPack, themeMode, themePreset]);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const direction = language === "ar" ? "rtl" : "ltr";

    root.lang = language;
    root.dir = direction;
    root.dataset.motionPack = motionPack;
    root.dataset.themePreset = themePreset;
    body.dataset.lang = language;
    body.classList.remove("motion-cinematic", "motion-fluid", "motion-precision", "motion-luxe", "motion-minimal");
    body.classList.add(`motion-${motionPack}`);

    Object.entries(presets[themePreset][themeMode]).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [language, motionPack, themeMode, themePreset]);

  const value = useMemo<AppContextValue>(() => {
    const translate = (text: LocalizedText) => t(language, text);
    const languageOrder: Language[] = ["fr", "en", "ar"];
    return {
      language,
      direction: language === "ar" ? "rtl" : "ltr",
      motionPack,
      themeMode,
      themePreset,
      setLanguage,
      toggleLanguage: () =>
        setLanguage((prev) => languageOrder[(languageOrder.indexOf(prev) + 1) % languageOrder.length]),
      setMotionPack,
      setThemeMode,
      setThemePreset,
      translate,
      packLabel: translate(motionPacks.find((pack) => pack.value === motionPack)!.label),
    };
  }, [language, motionPack, themeMode, themePreset]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppSettings() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppSettings must be used within AppProvider");
  return context;
}
