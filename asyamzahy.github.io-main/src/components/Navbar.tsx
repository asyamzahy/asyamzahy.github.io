import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'projects', href: '#projects' },
  { key: 'achievements', href: '#achievements' },
  { key: 'leadership', href: '#leadership' },
  { key: 'contact', href: '#contact' },
] as const;

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.key));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.target.id) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );
    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'auto' });
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled || mobileOpen
          ? 'border-b border-line bg-paper/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
      id="navbar"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 sm:px-10">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="font-serif text-xl tracking-tight text-ink"
          aria-label="Home"
        >
          Asyam Zahy Pratama Widodo
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.slice(1).map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
              className={`nav-link text-sm transition-colors duration-200 ${
                activeSection === item.key ? 'text-ink' : 'text-faint hover:text-ink'
              }`}
              aria-current={activeSection === item.key ? 'true' : undefined}
            >
              {t.nav[item.key as keyof typeof t.nav]}
            </a>
          ))}
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-5 md:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="-mr-1 p-1 text-ink"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            id="mobile-menu-toggle"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-[calc(100dvh-4.25rem)] bg-paper px-6 pt-6 md:hidden"
          >
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className={`border-b border-line py-4 font-serif text-2xl ${
                    activeSection === item.key ? 'text-ink' : 'text-muted'
                  }`}
                >
                  {t.nav[item.key as keyof typeof t.nav]}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
