import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1.5 text-sm text-faint transition-colors duration-200 hover:text-ink"
      aria-label={lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
      id="language-switcher"
    >
      <span className={lang === 'id' ? 'text-ink' : ''}>ID</span>
      <span aria-hidden="true" className="text-line">/</span>
      <span className={lang === 'en' ? 'text-ink' : ''}>EN</span>
    </button>
  );
}
