import { ReactNode, createContext, useState } from "react";

interface LanguageContextType {
  lang: string;
  handleSetLanguage: (language: string) => void;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageContext = createContext({} as LanguageContextType);

export function LanguageProvider({ children }: LanguageProviderProps) {
  const queryParams = new URLSearchParams(window.location.search);
  const langGotByQueryParams = queryParams.get("lang") || "pt";
  const [lang, setLang] = useState(langGotByQueryParams);

  function handleSetLanguage(language: string) {
    setLang(language);
  }

  return (
    <LanguageContext.Provider value={{ lang, handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
