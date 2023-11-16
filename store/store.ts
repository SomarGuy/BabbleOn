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

interface SubscriptionState {
    subscription: Subscription | null | undefined;
    setSubscription: (subscription: Subscription | null) => void;
  }

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
    subscription: undefined,
    setSubscription: (subscription: Subscription | null) => set({ subscription }),
}));