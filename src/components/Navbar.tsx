import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  return (
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
            asChild
            className="bg-gold hover:bg-gold-dark text-accent-foreground font-semibold px-6 rounded-full transition-all duration-200 hover:shadow-lg"
          >
            <a href="#contact">Başvuru Yap</a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
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
              asChild
              className="bg-gold hover:bg-gold-dark text-accent-foreground font-semibold rounded-full w-fit mt-2"
            >
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Başvuru Yap
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
