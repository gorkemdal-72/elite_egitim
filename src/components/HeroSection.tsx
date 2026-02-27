import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import ApplicationForm from "@/components/ApplicationForm";

const HeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-hero-overlay" />

        <div className="container relative mx-auto px-4 pt-24 pb-16">
          <div className="max-w-2xl">
            <div className="animate-fade-up">
              <span className="inline-block bg-gold/20 text-gold border border-gold/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                Yurtdışı Eğitimde Yeni Standart
              </span>
            </div>

            <h1 className="animate-fade-up-delay font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground mb-6">
              Sınavsız, Sınırları Aşan{" "}
              <span className="text-gradient-gold">Eğitim Deneyimi</span>
            </h1>

            <p className="animate-fade-up-delay-2 text-lg md:text-xl text-primary-foreground/75 mb-10 max-w-xl leading-relaxed">
              Azerbaycan'ın en seçkin üniversitelerinde, bütçe dostu seçenekler ve ayrıcalıklı danışmanlık hizmetiyle global kariyerinize ilk adımı atın. Hayalinizdeki eğitime ulaşırken tüm prosedürleri biz sizin adınıza yönetiyoruz.
            </p>

            <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => setIsFormOpen(true)}
                className="bg-gold hover:bg-gold-dark text-accent-foreground font-semibold rounded-full px-8 text-base transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
              >
                Hemen Başvur <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-dark text-accent-foreground font-semibold rounded-full px-8 text-base transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
              >
                <a href="#about">Daha Fazla Bilgi</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ApplicationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default HeroSection;
