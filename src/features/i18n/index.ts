import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
	// load translation using http -> see /public/locales
	// learn more: https://github.com/i18next/i18next-http-backend
	.use(Backend)
	// detect user language
	// learn more: https://github.com/i18next/i18next-browser-languageDetector
	.use(LanguageDetector)
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		supportedLngs: ["fr", "en"],
		fallbackLng: ["fr", "en"],
		interpolation: {
			escapeValue: false // react already safes from xss
		}
	});

export default i18n;