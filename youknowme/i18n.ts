import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi)
  .use(
    new LanguageDetector(null, {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      lookupQuerystring: "lng",
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",
    })
  )
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["ja", "en", "fr"],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

const getUserCountry = async () => {
  try {
    const res = await fetch("https://ipapi.co/json/")
    const data = await res.json();
    const countryCode = data.country_code
    return countryCode
  } catch (err) {
    console.error(err)
  }
};

const checkWindow = () => {
  try {
    if (typeof window === 'undefined') {
      return true
    }

    return false
  } catch {
    return false
  }
}

const setLanguage = (lang: any) => { 
  if (!lang || checkWindow()) {
    return ""
  }
  return localStorage.setItem("i18nextLng", lang); 
} 

const getLanguage = (key: string) => {
  if (!key || checkWindow()) {
    return ""
  }
  return localStorage.getItem(key)
}

const changeLanguage = (lang: any) => i18n.changeLanguage(lang);

const languagePreference = async () => {
  const languagePreferred = getLanguage("i18nextLng");
  let langToUse = i18n.language;

  if (languagePreferred) {
    langToUse = languagePreferred;
  } else {
    try {
      const userCountryCode = await getUserCountry();
      if (userCountryCode === "JP") {
        langToUse = "ja";
      } else if (userCountryCode === "FR") {
        langToUse = "fr";
      }
    } catch (error) {
      console.log("Error fetching user's country code:", error);
    }
  }

  setLanguage(langToUse);
  return changeLanguage(langToUse);
}

languagePreference();

export default i18n;
