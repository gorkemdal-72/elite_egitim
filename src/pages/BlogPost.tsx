import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import { useEffect } from "react";

// Using the same blog posts array from BlogSection for the data
export const BLOG_POSTS = [
    {
        id: "azerbaycanda-tip-egitimi",
        title: "Azerbaycan'da Tıp Eğitimi: Bilmeniz Gereken Her Şey",
        excerpt: "Sınavsız kabul, uygun harç ücretleri ve YÖK denkliği ile Azerbaycan'da tıp okumak artık çok daha erişilebilir. İşte merak ettiğiniz tüm detaylar.",
        content: "Türkiye'deki yoğun sınav rekabeti nedeniyle tıp fakültesi hayalini ertelemek zorunda kalan birçok genç, Azerbaycan'ı keşfetmeye başladı. Peki Azerbaycan'da tıp okumak gerçekten mantıklı mı?\n\nAzerbaycan Tıp Üniversitesi, 1930 yılından bu yana faaliyet gösteren ve bölgenin en köklü sağlık eğitimi kurumlarından biridir. Üniversite, Türkçe, İngilizce ve Rusça olmak üzere farklı dil seçeneklerinde eğitim sunmaktadır. Türk öğrenciler genellikle dil avantajı nedeniyle Türkçe programı tercih etmektedir.\n\nEğitim süresi toplamda 6 yıldır. İlk yıllar temel tıp bilimlerine ayrılırken, son yıllar yoğun klinik stajlar ve poliklinik uygulamalarıyla desteklenmektedir. Üniversitenin modern laboratuvarları ve anlaşmalı hastaneleri, teorik bilgiyi pratiğe dönüştürmenize olanak tanır.\n\nMaliyet açısından bakıldığında, Azerbaycan'daki tıp eğitimi Türkiye'deki vakıf üniversitelerine kıyasla belirgin şekilde daha ekonomiktir. Üstelik YÖK tarafından tanınan diplomalar, mezuniyet sonrası Türkiye'de hekimlik yapma yolunu açmaktadır. Elite Eğitim olarak başvuru sürecinizin her aşamasında yanınızdayız.",
        image: "/images/bilgi_kosesi/tipegitimi.jpeg",
        date: "19 Mayıs 2022",
    },
    {
        id: "azerbaycan-2025-universite-fiyatlari",
        title: "2025-2026 Azerbaycan Üniversite Harç Ücretleri Rehberi",
        excerpt: "Bölüm bazında detaylı fiyat karşılaştırması ve bütçe planlaması için ihtiyacınız olan güncel bilgiler bu yazıda.",
        content: "Azerbaycan'da eğitim almayı planlayan öğrencilerin en çok merak ettiği konulardan biri, yıllık eğitim ücretleridir. İyi haber şu ki, Azerbaycan üniversiteleri genel olarak oldukça rekabetçi fiyatlar sunmaktadır.\n\nSağlık bilimleri alanı, doğal olarak en yüksek harç ücretlerinin uygulandığı kategoridir. Tıp Fakültesi için yıllık ortalama 4.000 - 5.500 Dolar, Diş Hekimliği için 4.000 - 4.500 Dolar, Eczacılık için ise 3.500 - 4.000 Dolar aralığında ücretler belirlenmiştir.\n\nMühendislik, mimarlık ve fen bilimleri programları 1.500 - 2.500 Dolar bandında seyrederken, sosyal bilimler, iktisat ve dil bölümleri ise genellikle 590 - 1.500 Dolar arasında konumlanmaktadır. Bu rakamlar Türkiye'deki vakıf üniversitelerinin çok altında kalmaktadır.\n\nAyrıca yaşam maliyetleri de oldukça makuldır; aylık barınma, yemek ve ulaşım giderleri İstanbul veya Ankara'ya kıyasla çok daha düşük seviyededir. Detaylı ve kişiye özel bütçe planlaması için Elite Eğitim danışmanlarımıza ulaşabilirsiniz.",
        image: "/images/bilgi_kosesi/unifiyatları.jpeg",
        date: "20 Mayıs 2025",
    },
    {
        id: "azerbaycan-2025-kayit-tarihleri",
        title: "Azerbaycan Üniversiteleri 2025 Kayıt Tarihleri",
        excerpt: "Azerbaycan Üniversitelerine kayıtlar 02.06.2025 tarihinde başlayacak olup 01.09.2025 tarihinde sona erecektir.",
        content: "2025 - 2026 Eğitim Öğretim Yılı için Azerbaycan üniversitelerine kayıt başvuruları 2 Haziran 2025 itibarıyla başlayacaktır. Kontenjanların sınırlı olduğu düşünüldüğünde, özellikle Tıp, Diş Hekimliği ve Eczacılık gibi yoğun talep gören bölümlere başvuracak öğrencilerin erken başvuru yapmaları büyük önem taşımaktadır.\n\nKayıt dönemi resmi olarak 1 Eylül 2025 tarihinde sona yaklaşıyor olsa da, üniversitelerin kontenjanları dolduğunda kayıt işlemleri erken sonlandırılabilmektedir. Bu nedenle lise mezuniyeti veya belgesi eline ulaşan öğrencilerin beklemeden başvuru işlemlerini başlatması, yerleşim şansını maksimuma çıkarır.\n\nErken kayıt avantajları arasında sadece kontenjan garantisi değil, aynı zamanda uygun yurt veya ev bulma imkanı, oturum izni süreçlerinin geniş bir zaman diliminde rahatça halledilmesi gibi faydalar da bulunmaktadır.",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
        date: "25 Haziran 2025",
    },
    {
        id: "azerbaycanda-yuksek-lisans-egitimi",
        title: "Azerbaycan'da Yüksek Lisans: Sınavsız Master İmkanı",
        excerpt: "ALES şartı olmadan, uygun bütçeyle ve YÖK denklikli diploma ile Azerbaycan'da yüksek lisans yapmanın avantajları.",
        content: "Lisans diplomanızı aldıktan sonra akademik kariyerinize bir adım daha eklemek mi istiyorsunuz? Azerbaycan, Türk öğrencilere ALES veya benzeri herhangi bir merkezi sınav şartı aramaksızın yüksek lisans (master) yapma fırsatı sunuyor.\n\nBaşvuru için yalnızca lisans diplomanız ve not dökümünüz (transkript) yeterlidir. İşletme, mühendislik, mimarlık, psikoloji, uluslararası ilişkiler ve eğitim bilimleri gibi geniş bir yelpazede program seçeneği mevcuttur.\n\nEğitim süresi genel olarak 2 yıl olup, tezli veya tezsiz seçenekler tercih edilebilir. Eğitim dili olarak Türkçe ve Rusça ağırlıklı programlar sunulduğundan, dil engeli yaşamadan uzmanlık seviyesinde eğitim alabilirsiniz.\n\nEn kritik avantajlardan biri ise YÖK denkliğidir. Azerbaycan'da alınan yüksek lisans diplomaları Türkiye'de geçerlidir; bu sayede hem kamuda hem de özel sektörde kariyer fırsatlarınız genişler. Elite Eğitim olarak başvuru dosyanızın hazırlanmasından kabul sürecine kadar tüm adımlarda profesyonel destek sağlıyoruz.",
        image: "/images/bilgi_kosesi/yukseklisansegitimi.jpeg",
        date: "09 Temmuz 2025",
    },
    {
        id: "azerbaycanda-dis-hekimligi",
        title: "Azerbaycan'da Diş Hekimliği Eğitimi Almak",
        excerpt: "Yüksek YKS puanı şartı olmadan, modern klinik altyapısıyla diş hekimliği hayalinizi Azerbaycan'da gerçeğe dönüştürün.",
        content: "Diş hekimliği, dünya genelinde en çok rağbet gören sağlık alanlarından biridir. Türkiye'deki tıp ve diş hekimliği fakültelerinin son derece yüksek taban puanları, birçok öğrenciyi alternatif arayışına yönlendirmektedir.\n\nAzerbaycan Tıp Üniversitesi bünyesindeki Diş Hekimliği programı 5 yıl sürmektedir. Eğitim müfredatı, ilk yıllarda anatomi, histoloji ve fizyoloji gibi temel tıp derslerini kapsarken, üçüncü yıldan itibaren yoğun klinik uygulamalar ve poliklinik stajlarıyla devam eder.\n\nÜniversitenin modern diş klinikleri ve simülasyon laboratuvarları, öğrencilere gerçek hasta deneyimi kazanmadan önce güvenli bir ortamda pratik yapma imkanı sunar. Eğitim dili Türkçe olarak da tercih edilebildiğinden, dil konusunda herhangi bir engel bulunmamaktadır.\n\nMezuniyet sonrası YÖK denkliği ile Türkiye'de diş hekimi olarak çalışma hakkı elde edebilirsiniz. Elite Eğitim, üniversite başvurusundan diploma denkliğine kadar tüm süreçlerde yanınızda.",
        image: "/images/bilgi_kosesi/disegitimi.jpeg",
        date: "04 Haziran 2022",
    },
];

const BlogPost = () => {
    const { id } = useParams();

    // Find the post or use a generic one if not in our predefined list above
    const post = BLOG_POSTS.find(p => p.id === id) || {
        title: "Blog İçeriği",
        excerpt: "Sayfa hazırlanıyor.",
        content: "Bu sayfanın içeriği en kısa sürede Elite Eğitim ekibi tarafından güncellenecektir. İlginiz için teşekkür ederiz. Lütfen daha sonra tekrar ziyaret edin.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
        date: "Güncelleniyor...",
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <main className="flex-grow pt-24 pb-16">
                <article className="container mx-auto px-4 max-w-4xl">
                    <Link
                        to="/#blog"
                        className="inline-flex items-center text-gold hover:text-gold/80 mb-8 transition-colors font-medium"
                    >
                        <ArrowLeft size={16} className="mr-2" />
                        Blog'a Dön
                    </Link>

                    <header className="mb-10 text-center">
                        <span className="text-muted-foreground text-sm font-medium tracking-wider uppercase mb-4 block">
                            {post.date}
                        </span>
                        <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            {post.excerpt}
                        </p>
                    </header>

                    <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12 shadow-xl">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none prose-p:text-muted-foreground prose-headings:font-display prose-headings:text-foreground">
                        {post.content.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="mb-6 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </article>
            </main>

            <ContactFooter />
        </div>
    );
};

export default BlogPost;
