import { MapPin, Phone, Mail, Instagram, type LucideIcon } from "lucide-react";

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
              detail="Şefik Seyfettin Bulvarı, Akyurt Konutları A3 No: 1"
            />
            <ContactCard
              icon={Phone}
              title="Telefon"
              detail="0534 919 33 25"
              href="tel:+905349193325"
            />
            <ContactCard
              icon={Mail}
              title="E-posta"
              detail="cihangblkcg@gmail.com"
              href="mailto:cihangblkcg@gmail.com"
            />
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section id="branches" className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Şubelerimiz</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-3 mb-4">
            Genel Merkez
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Şefik Seyfettin Bulvarı, Akyurt Konutları A3 No: 1
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
              <a
                href="https://www.instagram.com/elite.egitim/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-gold hover:text-gold transition-colors duration-200"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/905349193325"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-[#25D366] hover:text-[#25D366] transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
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
