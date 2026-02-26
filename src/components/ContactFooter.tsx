import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, type LucideIcon } from "lucide-react";

const ContactFooter = () => {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">İletişim</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Kariyerinize İlk Adımı Atın
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Eğitim planlamanız için profesyonel eğitim danışmanlarımızla hemen görüşün.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <ContactCard
              icon={MapPin}
              title="Adres"
              detail="Kavaklıdere Mah. Atatürk Bulvarı NO:185 Regus İş Merkezi Kat 6 Ofis NO:618 Çankaya/Ankara"
            />
            <ContactCard
              icon={Phone}
              title="Telefon"
              detail="+90 507 241 0296"
              href="tel:+905072410296"
            />
            <ContactCard
              icon={Mail}
              title="E-posta"
              detail="info@eliteegitim.com"
              href="mailto:info@eliteegitim.com"
            />
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section id="branches" className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Şubelerimiz</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-3 mb-4">
            Ankara Merkez Ofis
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Kavaklıdere Mah. Atatürk Bulvarı NO:185 Regus İş Merkezi Kat 6 Ofis NO:618 Çankaya/Ankara
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-gradient py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="font-display text-2xl font-bold text-primary-foreground">
                Elite <span className="text-gradient-gold">Eğitim</span>
              </span>
              <p className="text-primary-foreground/50 text-sm mt-2">
                Geleceğinizi şansa bırakmayın, profesyonellere güvenin.
              </p>
            </div>

            <div className="flex items-center gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-gold hover:text-gold transition-colors duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center flex flex-col gap-2">
            <p className="text-primary-foreground/40 text-sm">
              © {new Date().getFullYear()} Elite Eğitim. Tüm hakları saklıdır.
            </p>
            <p className="text-primary-foreground/30 text-xs">
              Designed by Görkem Dal & Deniz Düzel
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  detail: string;
  href?: string;
}

const ContactCard = ({ icon: Icon, title, detail, href }: ContactCardProps) => (
  <div className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg hover:border-gold/30 transition-all duration-300">
    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mx-auto mb-4">
      <Icon className="text-gold" size={24} />
    </div>
    <h3 className="font-display text-lg font-semibold text-foreground mb-2">{title}</h3>
    {href ? (
      <a href={href} className="text-muted-foreground hover:text-gold transition-colors text-sm">
        {detail}
      </a>
    ) : (
      <p className="text-muted-foreground text-sm">{detail}</p>
    )}
  </div>
);

export default ContactFooter;
