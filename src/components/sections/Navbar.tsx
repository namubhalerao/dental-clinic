import { useLanguage } from "../../contexts/LanguageContext";
import { Button } from "../ui/button";
import { Menu, X, Phone, Globe } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { id: "hero", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "gallery", label: t.nav.gallery },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("hero")}>
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold text-xl">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none text-foreground tracking-tight">Dr. Somani</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-1">Dental Clinic</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-4 pl-6 border-l border-border">
              <button
                onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
                className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                <Globe className="w-4 h-4" />
                {language === 'en' ? 'मराठी' : 'English'}
              </button>
              
              <Button onClick={() => scrollTo("appointment")} className="gap-2 rounded-full px-6">
                {t.nav.bookAppointment}
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
              className="flex items-center gap-2 text-sm font-medium text-foreground/80"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'MR' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b absolute top-20 left-0 w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="block w-full text-left px-3 py-3 text-base font-medium text-foreground hover:bg-primary/5 hover:text-primary rounded-md"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 px-3">
              <Button onClick={() => scrollTo("appointment")} className="w-full gap-2 rounded-xl">
                {t.nav.bookAppointment}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
