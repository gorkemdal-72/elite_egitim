import { GraduationCap, BookOpen, Building } from "lucide-react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: GraduationCap,
    title: "Akademik Tanınırlık & Denklik",
    description: "Anlaşmalı olduğumuz köklü üniversitelerin sunduğu diplomalar, uluslararası arenada ve YÖK nezdinde tanınırlığa sahiptir.",
    highlights: ["YÖK Tanınırlık Belgeli Okullar", "Mavi Diploma Avantajı", "Global Kariyer Fırsatları"],
  },
  {
    icon: BookOpen,
    title: "Nitelikli Hazırlık Programları",
    description: "Eğitim dilinize (İngilizce, Rusça veya Azerbaycan Türkçesi) tam hakimiyet kurmanız için özel tasarlanmış yoğun dil takviyeleri sağlıyoruz.",
    highlights: ["Çok Dilli Eğitim Seçenekleri", "Gelişim Odaklı Müfredat", "Adaptasyon Süreci Desteği"],
  },
  {
    icon: Building,
    title: "Premium Konaklama Çözümleri",
    description: "Sadece bir ev değil; güvenle, huzurla akademik hayatınıza odaklanabileceğiniz elit yaşam alanlarını bizzat seçiyor ve organize ediyoruz.",
    highlights: ["Modern ve Güvenli Yurtlar", "Vip Öğrenci Evleri", "7/24 Güvenlik ve Konfor"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-navy-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Hizmetlerimiz</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-3 mb-4">
            Ayrıcalıklı Danışmanlık Hizmetleri
          </h2>
          <p className="text-primary-foreground/60 text-lg leading-relaxed">
            Yurtdışı eğitim planlamanızı şansa bırakmıyor; her aşamada profesyonellerden oluşan ekibimizle Elite bir deneyim sunuyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 hover:bg-primary-foreground/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-gold" size={28} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-primary-foreground/60 leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-primary-foreground/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
