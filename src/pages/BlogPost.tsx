import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import { useEffect } from "react";

// Using the same blog posts array from BlogSection for the data
export const BLOG_POSTS = [
    {
        id: "azerbaycanda-tip-egitimi",
        title: "Azerbaycan'da Tıp Eğitimi",
        excerpt: "Azerbaycan'da sınavsız tıp okumak gençlerin hayallerinin gerçekleşmesine olanak sağlar. Bu yazıda Azerbaycan'da tıp okumanın ip uçlarını derledik.",
        content: "Azerbaycan'da Tıp Eğitimi almak isteyen Türk öğrenciler için her geçen yıl daha fazla fırsat sunulmaktadır. Özellikle YKS stresi yaşamadan, lise diploması ile sınavsız kabul imkanı sunan üniversiteler, öğrencilerin hayallerini gerçekleştirmesinde büyük rol oynuyor.\n\nAzerbaycan Tıp Üniversitesi köklü tarihi ve yetkin akademik kadrosuyla öne çıkmaktadır. Eğitim dili olarak Türkçe, İngilizce veya Rusça seçenekleri bulunmakla birlikte Türkiye'den giden öğrenciler genellikle Türkçe tıp eğitimini tercih etmektedir. YÖK Denkliği konusunda da avantajlı konumda olan üniversite, mezuniyet sonrası Türkiye'de doktor olarak çalışmak isteyenler için uygun bir zemin hazırlamaktadır.\n\nEğitim süresi 6 yıl olup, teorik eğitimin yanı sıra yoğun bir pratik eğitim de verilmektedir. Yaşam maliyetlerinin ve üniversite harçlarının Avrupa veya Türkiye'deki vakıf üniversitelerine kıyasla çok daha ekonomik olması, Azerbaycan'ı tıp eğitimi için cazip kılan diğer önemli unsurlardandır.",
        image: "https://www.lbegitim.com/tema/genel/uploads/haberler/doktor.jpg",
        date: "19 Mayıs 2022",
    },
    {
        id: "azerbaycan-2025-universite-fiyatlari",
        title: "Azerbaycan 2025 Üniversite Fiyatları",
        excerpt: "Azerbaycan 2025-2026 güncel üniversite ücretleri hakkında detaylı bilgi.",
        content: "Azerbaycan'da üniversitelerin yıllık eğitim ücretleri seçilen üniversiteye, bölüme ve eğitim diline göre değişiklik göstermektedir. 2025-2026 eğitim dönemi için belirlenen harç ücretleri genel olarak oldukça makul seviyelerdedir.\n\nÖzellikle Tıp, Diş Hekimliği ve Eczacılık gibi sağlık bölümleri diğer bölümlere göre nispeten daha yüksek olsa da, Türkiye'deki vakıf üniversiteleriyle kıyaslandığında büyük bir ekonomik avantaj sağlar. Tıp fakülteleri için yıllık ortalama 4000 - 5000 Dolar, Diş Hekimliği için 4000 - 4500 Dolar bandında bir ücret söz konusudur.\n\nMühendislik, Mimarlık, İktisat ve Sosyal Bilimler bölümleri ise genellikle yıllık 1500 ile 2500 Dolar arasında değişmektedir. Azerbaycan'da okuyan öğrenciler ayrıca aylık düşük yaşam maliyetleri ve uygun konaklama seçeneklerinden de yararlanmaktadır. Net ve güncel fiyat bilgisi için danışmanlarımızla iletişime geçebilirsiniz.",
        image: "https://www.lbegitim.com/tema/genel/uploads/haberler/azerbaycan_universite_fiyatlari.jpg",
        date: "20 Mayıs 2025",
    },
    {
        id: "azerbaycan-2025-kayit-tarihleri",
        title: "Azerbaycan Üniversiteleri 2025 Kayıt Tarihleri",
        excerpt: "Azerbaycan Üniversitelerine kayıtlar 02.06.2025 tarihinde başlayacak olup 01.09.2025 tarihinde sona erecektir.",
        content: "2025 - 2026 Eğitim Öğretim Yılı için Azerbaycan üniversitelerine kayıt başvuruları 2 Haziran 2025 itibarıyla başlayacaktır. Kontenjanların sınırlı olduğu düşünüldüğünde, özellikle Tıp, Diş Hekimliği ve Eczacılık gibi yoğun talep gören bölümlere başvuracak öğrencilerin erken başvuru yapmaları büyük önem taşımaktadır.\n\nKayıt dönemi resmi olarak 1 Eylül 2025 tarihinde sona yaklaşıyor olsa da, üniversitelerin kontenjanları dolduğunda kayıt işlemleri erken sonlandırılabilmektedir. Bu nedenle lise mezuniyeti veya belgesi eline ulaşan öğrencilerin beklemeden başvuru işlemlerini başlatması, yerleşim şansını maksimuma çıkarır.\n\nErken kayıt avantajları arasında sadece kontenjan garantisi değil, aynı zamanda uygun yurt veya ev bulma imkanı, oturum izni süreçlerinin geniş bir zaman diliminde rahatça halledilmesi gibi faydalar da bulunmaktadır.",
        image: "https://www.lbegitim.com/tema/genel/uploads/haberler/azerbaycan-2025-kay%C4%B1t-tarihleri.jpg",
        date: "25 Haziran 2025",
    },
    {
        id: "azerbaycanda-yuksek-lisans-egitimi",
        title: "Azerbaycan'da Yüksek Lisans Eğitimi",
        excerpt: "Azerbaycan'da yüksek lisans eğitimi, sınavsız başvuru imkanı, uygun ücretler ve YÖK denkliği gibi avantajlarıyla her yıl daha fazla Türk öğrencinin tercihi haline geliyor.",
        content: "Lisans eğitimini tamamlayan birçok Türk öğrenci, akademik kariyerine devam etmek veya uzmanlaşmak amacıyla rotasını Azerbaycan'a çevirmektedir. Azerbaycan'da yüksek lisans (Master) eğitimi ALES veya benzeri bir giriş sınavı şartı aranmaksızın, sadece lisans diploması ve transkript ile doğrudan başvuruya açıktır.\n\nÖzellikle işletme, mühendislik, mimarlık ve psikoloji alanlarında yüksek lisans yapmak isteyen öğrenciler yoğun ilgi göstermektedir. Eğitim süresi genel olarak 2 yıldır ve tezli / tezsiz seçenekleri bulunmaktadır.\n\nAzerbaycan'da alınan yüksek lisans diplomalarının YÖK tarafından tanınması akademik akademik kariyer düşünenler veya kamuda çalışmak isteyenler için büyük bir güvencedir. Üstelik eğitim dili çoğunlukla Türkçe ve Rusça olduğundan, dil bariyerine takılmadan uzmanlık seviyesinde eğitim alınabilmektedir.",
        image: "https://www.lbegitim.com/tema/genel/uploads/haberler/azerbaycanda-yuksek-lisans.webp",
        date: "09 Temmuz 2025",
    },
    {
        id: "azerbaycanda-dis-hekimligi",
        title: "Azerbaycan'da Diş Hekimliği",
        excerpt: "Azerbaycan Üniversitelerinin yabancı uyruklu öğrencilere sağladığı sınavsız üniversite imkanı ile öğrencilerimiz diledikleri bölümleri okuma şansına sahiptirler.",
        content: "Diş hekimliği eğitimi son yıllarda dünya genelinde artan bir ivmeyle talep görmektedir. Türkiye'deki yüksek giriş puanları nedeniyle hedeflerine ulaşamayan öğrenciler için Azerbaycan, eşsiz bir alternatif konumundadır.\n\nAzerbaycan Tıp Üniversitesi bünyesinde verilen Diş Hekimliği eğitimi 5 yıl sürmekte olup, öğrencilere en ileri teknoloji ile donatılmış laboratuvarlarda ve kliniklerde pratik eğitim imkanı sunulmaktadır. Birinci yıldan itibaren başlayan temel tıp bilimleri dersleri, ilerleyen yıllarda yoğun poliklinik uygulamalarıyla pekiştirilmektedir.\n\nDiplomaların Türkiye'de denkliğinin olması ve sınavsız kabul imkanı, Bakü'yü diş hekimliği okumak isteyenler için bir numaralı eğitim merkezi haline getirmektedir.",
        image: "https://www.lbegitim.com/tema/genel/uploads/haberler/azerbaycan_dis_hekimligi.jpg",
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
        image: "https://www.lbegitim.com/tema/genel/uploads/haberler/doktor.jpg",
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
