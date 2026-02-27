import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const CITIES = [
  {
    name: "Bakü Üniversiteleri",
    description: "Hazar’ın kıyısında, bölgenin en önemli merkezlerinden biri olan Bakü’de, modern bir kampüs deneyimi ve dinamik bir gelecek sizi bekliyor.",
    image: "/images/baku.jpeg",
  },
  {
    name: "Gence Üniversiteleri",
    description: "Medeniyetlerin beşiği, tarihi dokusu ve saygın akademik kadrolara sahip üniversiteleriyle huzurlu bir öğrenci şehri.",
    image: "/images/gence.jpeg",
  },
  {
    name: "Nahçıvan Üniversiteleri",
    description: "Sakin doğası, yüksek güvenlik standartları ve yenilikçi eğitim vizyonuyla, akademik başarı odaklı kusursuz bir alternatif.",
    image: "/images/nahcivan.jpeg",
  },
];

const CitiesSection = () => {
  return (
    <section className="py-24 bg-navy-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">
            Şehirler
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-3 mb-4">
            Ayrıcalıklı Eğitim Destinasyonları
          </h2>
          <p className="text-primary-foreground/60 text-lg leading-relaxed">
            Kültürel zenginliği, güvenli ortamı ve yüksek standartlarıyla öne çıkan akademik merkezleri keşfedin.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CITIES.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative rounded-2xl overflow-hidden h-80"
            >
              <img
                src={city.image}
                alt={city.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="text-gold" size={16} />
                  <h3 className="font-display text-xl font-bold text-primary-foreground">
                    {city.name}
                  </h3>
                </div>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {city.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;
