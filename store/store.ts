import { create } from "zustand";
import { Subscription } from "@/types/Subscription";

export type LanguagesSupported =
  | "en"
  | "es"
  | "de"
  | "fr"
  | "pt"
  | "ar"
  | "hi"
  | "bn"
  | "ja"
  | "ru"
  | "uk"
  | "it"
  | "vi"

export const LanguagesSupportedMap: Record<LanguagesSupported, string> = {
  en: "English",
  es: "Spanish",
  de: "German",
  fr: "French",
  pt: "Portuguese",
  ar: "Arabic",
  hi: "Hindi",
  bn: "Bengali",
  ja: "Japanese",
  ru: "Russian",
  uk: "Ukranian",
  it: "Italian",
  vi: "Vietnamese"
};

interface LanguageState {
  language: LanguagesSupported;
  setLanguage: (language: LanguagesSupported) => void;
  getLanguages: (isPro: boolean) => LanguagesSupported[];
  getNotSupportedLanguages: (isPro: boolean) => LanguagesSupported[];
}

export const useLanguageStore = create<LanguageState>()((set, get) => ({
  language: "en",
  setLanguage: (language: LanguagesSupported) => set({ language }),
  getLanguages: (isPro: boolean) => {
    // If the user is pro, return all supported languages
    if (isPro)
      return Object.keys(LanguagesSupportedMap) as LanguagesSupported[];

    // If not pro, return only the first two languages
    return Object.keys(LanguagesSupportedMap).slice(
      0,
      5
    ) as LanguagesSupported[];
  },
  getNotSupportedLanguages: (isPro: boolean) => {
    if (isPro) return []; // No unsupported languages for "pro" users
    return Object.keys(LanguagesSupportedMap).slice(5) as LanguagesSupported[]; // Excluding the first two supported languages
  },
}));

interface SubscriptionState {
    subscription: Subscription | null | undefined;
    setSubscription: (subscription: Subscription | null) => void;
  }

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
    subscription: undefined,
    setSubscription: (subscription: Subscription | null) => set({ subscription }),
}));