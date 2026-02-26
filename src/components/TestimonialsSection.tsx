import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Kaan Demirci",
    text: "Elite Eğitim ile yollarımız kesişmeden önce görüştüğüm yerlerdeki belirsizlikler beni oldukça düşündürmüştü. Ancak burada her şey en başından itibaren son derece şeffaf ve net bir şekilde paylaşıldı. Belgelerimi tamamlar tamamlamaz başvurum hızlıca işleme alındı ve tüm süreç tam da belirttikleri takvime uygun şekilde ilerledi. Profesyonel yaklaşımları için teşekkür ederim.",
  },
  {
    name: "Melis Alkan",
    text: "Evrak işlerinden son kayıt anına kadar Elite Eğitim her an yanımdaydı. Ali Bey’in ilk görüşmede çizdiği tablo neyse, uygulama aşamasında da birebir onu gördüm. Bilgiyi ne eksik verdiler ne de süreci olduğundan farklı gösterdiler; dürüstlükleri en büyük farklarıydı. Bu kadar samimi ve işini bilen bir ekiple çalışmak büyük konfor.",
  },
  {
    name: "İrem Su Yıldız",
    text: "Elite Eğitim’i bir arkadaşım önermişti; başta kararsız kalıp kendim araştırsam da sonunda rotayı yine onlara kırdım. Sürecin en başından beri neyle karşılaşacağımı çok iyi biliyordum. Evrak hazırlama aşamasında her an yanımdaydılar ve tüm sorularımı jet hızıyla yanıtladılar. Şu an Bakü’deki yurdumda, eğitim hayatıma başlamanın mutluluğunu yaşıyorum. Bu süreçteki destekleri paha biçilemez.",
  },
  {
    name: "Ömer Faruk Aydın",
    text: "Başlangıçta kafamda pek çok soru işareti vardı ama Elite Eğitim ile iletişime geçtiğim an her şey netleşti. Taleplerimi dinleyip tam istediğim gibi birkaç okul seçeneği sundular. Belgeleri teslim etmemin ardından süreç o kadar hızlı ve profesyonelce yönetildi ki, açıkçası bu kadar kolay olacağını tahmin etmemiştim. Destekleri için teşekkür ederim.",
  },
  {
    name: "Mert Arslan",
    text: "İnternette Elite Eğitim’i görüp bir mesaj atayım dedim, niyetim sadece biraz kurcalamaktı. Ama ekip her şeyi o kadar güzel izah etti ki 'tamam' dedim, 'başlıyoruz'. Belgeleri toplamak zaten çocuk oyuncağı gibi geçti, kabul haberi de gecikmedi. Şu an hazırlık sınıfındayım, ortam şahane. İlk başta biraz tırsmıştım yalan yok ama şu an çok mutluyum.",
  },
  {
    name: "Onur Yıldırım",
    text: "Süreci Elite Eğitim ile yönettik ve kayıt işi sandığımdan çok daha kısa sürdü. Belgelerden sonra bir haftada kabul aldım; oturum ve yerleşme gibi detaylar da tertemiz halledildi. Şimdi Azerbaycan’dayım, her şey yolunda. Başta gözümde büyüyen o kadar işi tereyağından kıl çeker gibi hallettikleri için ekibe teşekkür ederim.",
  },
  {
    name: "Selin Yılmaz",
    text: "Gitmeyi düşünmek bir yana, planlarımda bile yoktu. Ama YouTube’da karşıma çıkan bir video ve ardından Elite Eğitim ile tanışmam her şeyi değiştirdi. Bir baktım işlemler başlamış, bir baktım buradayım! Karar verip o adımı attıktan sonra her şeyi o kadar güzel yönettiler ki bana sadece bavulumu toplamak kaldı. Gerçekten bazen sadece başlamak gerekiyormuş.",
  },
  {
    name: "Kaan Sönmez",
    text: "Bilgi kirliliği yüzünden Azerbaycan hayalimden neredeyse vazgeçecektim ki Elite Eğitim’e rastladım. Cihan abiyle yaptığımız o 15 dakikalık telefon konuşması her şeyi netleştirdi. Bakü’ye gelişimden yurda yerleşmeme kadar her şey tıkır tıkır ilerledi. İnsanın arkasında böyle sağlam ve samimi bir ekibin olması gerçekten çok büyük bir lüks. Her şey için çok teşekkürler!",
  },
  {
    name: "Ece Soydan",
    text: "Azerbaycan’da okumayı kafaya koymuştum ama nereden başlayacağım, ne yapacağım hakkında en ufak bir fikrim yoktu. Elite Eğitim’e denk gelince 'bir şansımı deneyeyim' dedim. Meğer her şey tıkır tıkır işliyormuş zaten; ben belgeleri gönderdim, gerisini onlar halletti. Şu an Tıp 1. sınıftayım. Sınıftaki arkadaşlarımın çoğunun danışmanı telefonlarına bile bakmıyor, çocukların hallerini görünce 'iyi ki Elite Eğitim ile yola çıkmışım' diyorum. Gerçekten farkları büyük.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">
            Öğrenci Yorumları
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Öğrencilerimiz Ne Diyor?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-gold/20 transition-all duration-300"
            >
              <Quote className="text-gold/30 mb-3" size={28} />
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-border">
                <div className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center">
                  <span className="text-gold font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="font-medium text-sm text-foreground">{testimonial.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
