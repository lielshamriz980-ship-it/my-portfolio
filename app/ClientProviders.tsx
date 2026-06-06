"use client";
import { LanguageProvider } from "./lib/LanguageContext";
import { ReactNode } from "react";

export function ClientProviders({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
