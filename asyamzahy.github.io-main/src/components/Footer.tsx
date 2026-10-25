import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line" id="footer">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-10 text-sm text-faint sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>
          {t.footer.rights} &copy; {year} Asyam Zahy Pratama Widodo
        </p>
        <p>{t.footer.builtWith}</p>
      </div>
    </footer>
  );
}
