import { Shield, Clock, Wallet, FileCheck, Plane, Home, HeartPulse, Languages, FileText, Users } from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  { icon: Shield, title: "Güvenilir Rehberlik", description: "Eğitim yolculuğunuzda, uzman kadromuzla her adımda şeffaf ve güvenilir bir yol arkadaşlığı sunuyoruz." },
  { icon: Clock, title: "Kesintisiz İletişim", description: "Öğrencilerimiz ve velilerimiz için ihtiyaç duydukları her an ulaşılabilir bir destek ağı sağlıyoruz." },
  { icon: Wallet, title: "Bütçe Dostu Planlama", description: "Hayallerinizdeki eğitime ulaşırken, sürpriz maliyetlerden uzak, optimize edilmiş fiyatlandırma sunuyoruz." },
  { icon: FileCheck, title: "Eksiksiz Başvuru", description: "Karmaşık evrak ve kayıt süreçlerini sizin yerinize sıfır hata prensibiyle profesyonelce yönetiyoruz." },
  { icon: Languages, title: "Yeminli Tercüme", description: "Kabul süreçlerinde istenen tüm resmi evraklarınızı, noter onaylı ve eksiksiz şekilde çeviriyoruz." },
  { icon: FileText, title: "Yasal İzin İşlemleri", description: "İlgili ülkedeki oturum izni, ikametgah ve resmi kayıt prosedürlerini hızla sonuçlandırıyoruz." },
  { icon: HeartPulse, title: "Kapsamlı Sigorta", description: "Eğitim süreciniz boyunca güvende olmanız için gerekli tüm sağlık sigortası adımlarını tamamlıyoruz." },
  { icon: Plane, title: "VIP Karşılama", description: "Hedef ülkeye ulaştığınız ilk anınızda sizi havalimanında karşılıyor, güvenle yerleşmenizi sağlıyoruz." },
  { icon: Home, title: "Konforlu Konaklama", description: "Bütçe ve beklentilerinize en uygun yurt veya apart seçeneklerini önceden hazırlayıp beğeninize sunuyoruz." },
  { icon: Users, title: "Güçlü Referanslar", description: "Üniversite kabullerinde elinizi güçlendirecek akademik ve profesyonel referans mektubu desteği veriyoruz." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Hakkımızda</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Eğitimde Yeni Bir Standart: Elite Eğitim
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Yurtdışında eğitim hayalinizi gerçeğe dönüştürürken, sıradan bir danışmanlığın ötesine geçiyoruz. Elite Eğitim olarak, okul seçiminden vize süreçlerine, karşılama hizmetinden konaklama yerleşimine kadar tüm detayları titizlikle planlıyoruz. Amacımız sadece sizi bir üniversiteye yerleştirmek değil; kariyerinize giden yolda sağlam, güvenilir ve konforlu bir köprü kurmaktır.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:shadow-gold/5 hover:border-gold/30 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <feature.icon className="text-gold" size={22} />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground mb-1.5">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
