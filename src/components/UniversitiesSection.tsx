import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

const UNIVERSITIES = [
  {
    name: "Azerbaycan Teknik Üniversitesi",
    city: "Bakü",
    founded: "1950",
    description: "Mühendislik ve teknoloji alanlarında köklü bir geçmişe sahip olan bu prestijli kurum, Bakü'de donanımlı profesyoneller yetiştirmektedir.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop", // Classic university building
  },
  {
    name: "Azerbaycan Mimarlık ve İnşaat Üniversitesi",
    city: "Bakü",
    founded: "1920",
    description: "Bölgenin yapı ve mimari geleceğine yön veren üniversite, modern inşaat teknolojilerini ve estetik vizyonu bir araya getirir.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop", // Architecture sketch/office
  },
  {
    name: "Bakü Devlet Üniversitesi",
    city: "Bakü",
    founded: "1919",
    description: "Ülkenin en eski yükseköğretim kurumu olarak zengin bir akademik geleneğe sahip olan üniversite, vizyoner liderler yetiştirmesiyle tanınır.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop", // Graduation
  },
  {
    name: "Azerbaycan Tıp Üniversitesi",
    city: "Bakü",
    founded: "1930",
    description: "Gelişmiş laboratuvarları ve uzman eğitim kadrosuyla, uluslararası standartlarda hekimler ve sağlık profesyonelleri yetiştiren lider tıp akademisi.",
    image: "https://images.unsplash.com/photo-1576081516039-4abfb80783fa?q=80&w=800&auto=format&fit=crop", // Medicine / lab
  },
  {
    name: "Azerbaycan Devlet İktisat Üniversitesi",
    city: "Bakü",
    founded: "1930",
    description: "Ekonomi ve işletme alanlarında inovatif ve modern eğitim anlayışıyla, global arenada rekabet edebilecek finans uzmanlarına yön veren saygın kurum.",
    image: "https://images.unsplash.com/photo-1578572573212-e8869c97b8cc?q=80&w=800&auto=format&fit=crop", // Business / finance abstract
  },
  {
    name: "Azerbaycan Diller Üniversitesi",
    city: "Bakü",
    founded: "1973",
    description: "Çok dilli ve çok kültürlü bir eğitim ortamı sunarak, uluslararası iletişim yeteneği yüksek filologlar ve tercümanlar yetiştiren eğitim merkezi.",
    image: "https://images.unsplash.com/photo-1546415822-7af510dcb8c9?q=80&w=800&auto=format&fit=crop", // Library/learning
  },
  {
    name: "Azerbaycan Medeniyet ve İncesanat Üniversitesi",
    city: "Bakü",
    founded: "1945",
    description: "Kültür, sanat ve tasarım alanlarında yaratıcılığın sınırlarını zorlayan, yetenekli sanatçılar ve kültür elçileri yetiştiren köklü akademi.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop", // Arts / vibrant
  },
  {
    name: "Nahçıvan Devlet Üniversitesi",
    city: "Nahçıvan",
    founded: "1967",
    description: "Gelişen altyapısı ve yenilikçi eğitim yaklaşımlarıyla bölgesinde eğitim meşalesini taşıyan, seçkin akademik programlara sahip prestijli eğitim yuvası.",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=800&auto=format&fit=crop", // Library aisles
  },
  {
    name: "Gence Devlet Üniversitesi",
    city: "Gence",
    founded: "1938",
    description: "Tarihi Gence şehrinin kültürel dokusuyla harmanlanmış, akademik çeşitliliği ve araştırma odaklı vizyonuyla öne çıkan değerli yükseköğretim kurumu.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop", // Students walking
  },
  {
    name: "Gence Agrar Üniversitesi",
    city: "Gence",
    founded: "1929",
    description: "Ziraat ve tarım bilimleri alanında derin bir uzmanlığa sahip olan üniversite, sürdürülebilir tarım teknolojilerinde geleceğin mühendislerini yetiştirir.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop", // Agriculture/field
  },
  {
    name: "Azerbaycan Devlet Petrol ve Sanayi Üniversitesi",
    city: "Bakü",
    founded: "1920",
    description: "Enerji ve sanayi sektörlerine yön veren tarihi mirasıyla, küresel petrol ve endüstri mühendisliği alanında lider ve köklü bir bilim merkezi.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop", // Industry / Engineering
  },
  {
    name: "Azerbaycan Devlet Pedagoji Üniversitesi",
    city: "Bakü",
    founded: "1921",
    description: "Geleceğin nesillerini yetiştirecek donanımlı, idealist ve modern eğitim yöntemlerine hakim öğretmenler yetiştiren saygın eğitim ocağı.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop", // Classroom / Teaching
  },
];

const UniversitiesSection = () => {
  return (
    <section id="universities" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">
            Üniversitelerimiz
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Seçkin Üniversite Partnerlerimiz
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Kariyer hedeflerinize ulaşmanız için, akademik mükemmelliği YÖK denklikleriyle taçlandıran elit üniversite seçenekleri.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {UNIVERSITIES.map((uni, index) => (
            <motion.div
              key={uni.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:shadow-gold/5 hover:border-gold/30 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={uni.image}
                  alt={uni.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-primary/80 backdrop-blur-sm text-primary-foreground text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                  <MapPin size={12} />
                  {uni.city}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="text-gold shrink-0" size={18} />
                  <h3 className="font-display text-sm font-semibold text-foreground leading-tight line-clamp-2">
                    {uni.name}
                  </h3>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
                  {uni.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversitiesSection;
