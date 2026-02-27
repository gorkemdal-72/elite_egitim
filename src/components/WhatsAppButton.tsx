import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/905349193325"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl hover:shadow-[#25D366]/30 animate-fade-up"
            title="WhatsApp ile İletişime Geçin"
        >
            <MessageCircle size={28} />
        </a>
    );
};

export default WhatsAppButton;
