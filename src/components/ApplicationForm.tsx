import { useState } from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ApplicationFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const BOLUMLER = [
    "Tıp Fakültesi",
    "Diş Hekimliği",
    "Eczacılık",
    "Mühendislik",
    "Mimarlık",
    "İktisat / İşletme",
    "Hukuk",
    "Diller / Filoloji",
    "Eğitim Bilimleri",
    "Sanat / Tasarım",
    "Yüksek Lisans",
    "Diğer",
];

const ApplicationForm = ({ isOpen, onClose }: ApplicationFormProps) => {
    const [formData, setFormData] = useState({
        adSoyad: "",
        telefon: "",
        bolum: "",
        not: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const mesaj = `🎓 *Yeni Başvuru - Elite Eğitim*%0A%0A👤 *Ad Soyad:* ${formData.adSoyad}%0A📞 *Telefon:* ${formData.telefon}%0A📚 *İlgilendiği Bölüm:* ${formData.bolum}%0A📝 *Not:* ${formData.not || "Belirtilmedi"}`;

        window.open(`https://wa.me/905349193325?text=${mesaj}`, "_blank");

        setFormData({ adSoyad: "", telefon: "", bolum: "", not: "" });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-card border border-border rounded-2xl shadow-2xl w-full max-w-md animate-fade-up overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary to-navy-800 p-6 text-center">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                        <X size={20} />
                    </button>
                    <h3 className="font-display text-2xl font-bold text-primary-foreground">
                        Hemen Başvur
                    </h3>
                    <p className="text-primary-foreground/60 text-sm mt-1">
                        Bilgilerinizi doldurun, size hemen ulaşalım
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                            Ad Soyad *
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.adSoyad}
                            onChange={(e) =>
                                setFormData({ ...formData, adSoyad: e.target.value })
                            }
                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                            placeholder="Adınız ve soyadınız"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                            Telefon Numarası *
                        </label>
                        <input
                            type="tel"
                            required
                            value={formData.telefon}
                            onChange={(e) =>
                                setFormData({ ...formData, telefon: e.target.value })
                            }
                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                            placeholder="05XX XXX XX XX"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                            İlgilendiğiniz Bölüm *
                        </label>
                        <select
                            required
                            value={formData.bolum}
                            onChange={(e) =>
                                setFormData({ ...formData, bolum: e.target.value })
                            }
                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                        >
                            <option value="">Bölüm seçiniz...</option>
                            {BOLUMLER.map((bolum) => (
                                <option key={bolum} value={bolum}>
                                    {bolum}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                            Notunuz (Opsiyonel)
                        </label>
                        <textarea
                            value={formData.not}
                            onChange={(e) =>
                                setFormData({ ...formData, not: e.target.value })
                            }
                            rows={3}
                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none"
                            placeholder="Eklemek istediğiniz bir not varsa yazabilirsiniz..."
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-gold hover:bg-gold-dark text-accent-foreground font-semibold rounded-lg py-3 text-base transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
                    >
                        <Send size={16} className="mr-2" />
                        WhatsApp ile Gönder
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                        Bilgileriniz WhatsApp üzerinden danışmanımıza iletilecektir.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default ApplicationForm;
