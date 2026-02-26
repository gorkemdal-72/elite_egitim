import { motion } from "framer-motion";
import { DollarSign } from "lucide-react";
import { useState } from "react";

interface PricingRow {
  department: string;
  price: string;
}

interface UniversityPricing {
  name: string;
  rows: PricingRow[];
  note?: string;
}

const PRICING_DATA: UniversityPricing[] = [
  {
    name: "Azerbaycan Tıp Üniversitesi",
    rows: [
      { department: "Tıp", price: "6.000 $" },
      { department: "Diş Hekimliği", price: "6.000 $" },
      { department: "Eczacılık", price: "6.000 $" },
      { department: "Hemşirelik", price: "6.000 $" },
    ],
  },
  {
    name: "Bakü Devlet Üniversitesi",
    rows: [
      { department: "Hukuk", price: "3.500 $" },
      { department: "Psikoloji", price: "2.000 $" },
      { department: "Uluslararası İlişkiler", price: "2.500 $" },
      { department: "Ekonomi", price: "2.500 $" },
      { department: "Gazetecilik", price: "1.500 $" },
      { department: "Kimya", price: "1.500 $" },
      { department: "Biyoloji", price: "1.500 $" },
      { department: "Tarih", price: "1.500 $" },
      { department: "Coğrafya", price: "1.500 $" },
      { department: "Matematik", price: "1.500 $" },
      { department: "Rus Dili ve Edebiyatı", price: "1.500 $" },
    ],
  },
  {
    name: "Azerbaycan Devlet Petrol ve Sanayi Üniversitesi",
    note: "Bütün bölümlerde Azerbaycan Türkçesi, İngilizce ve Rusça dil seçenekleri bulunmaktadır.",
    rows: [
      { department: "Petrol ve Doğal Gaz Mühendisliği", price: "2.500 $" },
      { department: "Bilgisayar Mühendisliği", price: "2.500 $" },
      { department: "Bilgisayar Bilimleri", price: "2.500 $" },
      { department: "Çevre Mühendisliği", price: "2.500 $" },
      { department: "Elektrik ve Elektronik Müh.", price: "2.500 $" },
      { department: "Enerji Mühendisliği", price: "2.500 $" },
      { department: "Jeoloji ve Jeofizik Müh.", price: "2.500 $" },
      { department: "İnşaat Mühendisliği", price: "2.500 $" },
      { department: "Kimya Mühendisliği", price: "2.500 $" },
      { department: "Gıda Mühendisliği", price: "2.500 $" },
      { department: "Mekatronik ve Robotik Müh.", price: "2.500 $" },
      { department: "Maden Mühendisliği", price: "2.500 $" },
    ],
  },
  {
    name: "Azerbaycan Teknik Üniversitesi",
    rows: [
      { department: "Bilgisayar Mühendisliği", price: "1.850 $" },
      { department: "Elektrik-Elektronik Müh.", price: "1.850 $" },
      { department: "Makine Mühendisliği", price: "1.600 $" },
      { department: "Enerji Mühendisliği", price: "1.600 $" },
      { department: "Otomasyon Mühendisliği", price: "1.600 $" },
      { department: "Endüstri Mühendisliği", price: "1.600 $" },
      { department: "Çevre Mühendisliği", price: "1.600 $" },
      { department: "Bilgi Güvenliği", price: "1.600 $" },
      { department: "Bilgisayar Bilimleri", price: "1.600 $" },
    ],
  },
  {
    name: "Azerbaycan Mimarlık ve İnşaat Üniversitesi",
    rows: [
      { department: "Mimarlık", price: "2.500 $" },
      { department: "İnşaat Mühendisliği", price: "2.200 $" },
      { department: "Harita Mühendisliği", price: "2.200 $" },
    ],
  },
  {
    name: "Gence Agrar Üniversitesi",
    rows: [
      { department: "Eczacılık", price: "2.500 $" },
      { department: "Veterinerlik", price: "2.500 $" },
      { department: "Ziraat Mühendisliği", price: "2.500 $" },
    ],
  },
  {
    name: "Gence Devlet Üniversitesi",
    rows: [
      { department: "Psikoloji", price: "590 $" },
      { department: "Dil Öğretmenlikleri", price: "590 $" },
      { department: "Öğretmenlikler", price: "590 $" },
      { department: "Müzik", price: "590 $" },
    ],
  },
  {
    name: "Azerbaycan Devlet Pedagoji Üniversitesi",
    rows: [
      { department: "PDR", price: "1.411 $" },
      { department: "Okul Öncesi Öğretmenlik", price: "1.411 $" },
      { department: "Sınıf Öğretmenliği", price: "1.411 $" },
      { department: "Özel Eğitim Öğretmenliği", price: "1.411 $" },
      { department: "Matematik Öğretmenliği", price: "1.411 $" },
      { department: "İngilizce Öğretmenliği", price: "1.411 $" },
    ],
  },
  {
    name: "Azerbaycan Devlet İktisat Üniversitesi",
    rows: [
      { department: "Finans", price: "1.530 $" },
      { department: "Muhasebe", price: "1.470 $" },
      { department: "Ekonomi", price: "1.350 $" },
      { department: "İktisat", price: "1.350 $" },
      { department: "İşletme Yönetimi", price: "1.300 $" },
      { department: "Kamu Yönetimi", price: "1.300 $" },
      { department: "Pazarlama", price: "1.235 $" },
      { department: "Uluslararası Ticaret ve Lojistik", price: "1.235 $" },
      { department: "Bilgisayar Mühendisliği", price: "1.295 $" },
      { department: "Bilgisayar Teknolojileri", price: "1.295 $" },
    ],
  },
  {
    name: "Azerbaycan Diller Üniversitesi",
    rows: [
      { department: "İngiliz Dili ve Edebiyatı", price: "2.500 $" },
      { department: "Fransız Dili ve Edebiyatı", price: "2.500 $" },
      { department: "Alman Dili ve Edebiyatı", price: "2.500 $" },
      { department: "İngilizce Mütercim ve Tercümanlık", price: "2.800 $" },
      { department: "Almanca Mütercim ve Tercümanlık", price: "2.500 $" },
      { department: "Korece Mütercim ve Tercümanlık", price: "2.500 $" },
      { department: "Arapça Mütercim ve Tercümanlık", price: "2.500 $" },
    ],
  },
  {
    name: "Nahçıvan Devlet Üniversitesi",
    rows: [
      { department: "Tıp", price: "2.940 $" },
      { department: "Diş Hekimliği", price: "2.940 $" },
      { department: "Eczacılık", price: "2.940 $" },
      { department: "Hukuk", price: "2.940 $" },
      { department: "Veterinerlik", price: "1.765 $" },
      { department: "Psikoloji", price: "1.765 $" },
      { department: "Mimarlık", price: "1.765 $" },
      { department: "Bilgisayar Mühendisliği", price: "1.175 $" },
      { department: "Elektrik Elektronik Müh.", price: "1.175 $" },
      { department: "Enerji Mühendisliği", price: "1.175 $" },
    ],
  },
  {
    name: "Azerbaycan Medeniyet ve İncesanat Üniversitesi",
    rows: [
      { department: "Oyunculuk", price: "2.000 $" },
      { department: "Güzel Sanatlar Öğretmenliği", price: "2.000 $" },
      { department: "Grafik Tasarım", price: "2.000 $" },
      { department: "Yönetmenlik", price: "2.000 $" },
      { department: "Müzik Öğretmenliği", price: "2.000 $" },
    ],
  },
  {
    name: "Azerbaycan Devlet Denizcilik Akademisi",
    rows: [
      { department: "Gemi Kaptanlığı Mühendisliği", price: "3.000 $" },
      { department: "Uzak Yol Gemi Kaptanlığı", price: "3.000 $" },
      { department: "Gemi Makineleri Mühendisliği", price: "3.000 $" },
      { department: "Gemi Elektrik Sistemleri Müh.", price: "3.000 $" },
      { department: "Gemi Onarım ve İnşaa Müh.", price: "3.000 $" },
    ],
  },
];

const TuitionSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="tuition" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">
            Eğitim Ücretleri
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            2025-2026 Akademik Yılı Ücretleri
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Partner üniversitelerimizde eğitim bedelleri seçilen bölüme göre senelik 590 $ ile 6.000 $ arasında değişiklik göstermektedir. Pek çok kurum, öğrencilere kolaylık sağlamak adına tutarı iki taksitte ödeme seçeneği sunar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {PRICING_DATA.map((uni, index) => {
            const isExpanded = expandedIndex === index;
            const displayRows = isExpanded ? uni.rows : uni.rows.slice(0, 4);
            const hasMore = uni.rows.length > 4;

            return (
              <motion.div
                key={uni.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-gold/20 transition-all duration-300"
              >
                <div className="bg-navy-gradient p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                      <DollarSign className="text-gold" size={20} />
                    </div>
                    <h3 className="font-display text-sm font-semibold text-primary-foreground leading-tight">
                      {uni.name}
                    </h3>
                  </div>
                  {uni.note && (
                    <p className="text-primary-foreground/50 text-xs mt-2">{uni.note}</p>
                  )}
                </div>

                <div className="divide-y divide-border">
                  {displayRows.map((row) => (
                    <div
                      key={row.department}
                      className="flex items-center justify-between px-5 py-3 hover:bg-muted/50 transition-colors"
                    >
                      <span className="text-foreground text-sm">{row.department}</span>
                      <span className="text-gold font-semibold text-sm whitespace-nowrap ml-2">
                        {row.price}
                      </span>
                    </div>
                  ))}
                </div>

                {hasMore && (
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="w-full py-3 text-sm text-gold hover:text-gold-dark font-medium transition-colors border-t border-border"
                  >
                    {isExpanded
                      ? "Daha az göster"
                      : `+${uni.rows.length - 4} bölüm daha`}
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TuitionSection;
