import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export function useLanguage() {
  const languages = useContext(LanguageContext);
  return languages;
}
