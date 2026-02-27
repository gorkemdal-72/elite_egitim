import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import ApplicationForm from "@/components/ApplicationForm";

const NAV_LINKS = [
  { label: "Ana Sayfa", href: "#home" },
  { label: "Hakkımızda", href: "#about" },
  { label: "Üniversiteler", href: "#universities" },
  { label: "Ücretler", href: "#tuition" },
  { label: "Hizmetlerimiz", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "İletişim", href: "#contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy-gradient backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <a href="#home" className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold text-primary-foreground">
              Elite <span className="text-gradient-gold">Eğitim</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-primary-foreground/80 hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => setIsFormOpen(true)}
              className="bg-gold hover:bg-gold-dark text-accent-foreground font-semibold px-6 rounded-full transition-all duration-200 hover:shadow-lg"
            >
              Başvuru Yap
            </Button>
            <a
              href="https://www.instagram.com/elite.egitim/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-pink-400 transition-colors duration-200"
              title="Instagram"
            >
              <Instagram size={22} />
            </a>
          </nav>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href="https://www.instagram.com/elite.egitim/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-pink-400 transition-colors duration-200"
            >
              <Instagram size={22} />
            </a>
            <button
              className="text-primary-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-navy-gradient border-t border-primary-foreground/10 animate-fade-up">
            <nav className="container mx-auto flex flex-col gap-4 py-6 px-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-primary-foreground/80 hover:text-gold transition-colors text-lg"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => {
                  setIsFormOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="bg-gold hover:bg-gold-dark text-accent-foreground font-semibold rounded-full w-fit mt-2"
              >
                Başvuru Yap
              </Button>
            </nav>
          </div>
        )}
      </header>

      <ApplicationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default Navbar;
