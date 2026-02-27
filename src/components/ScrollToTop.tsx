import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 400);
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-12 right-6 z-50 w-10 h-10 bg-gold/90 hover:bg-gold text-accent-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
            title="Yukarı Çık"
        >
            <ChevronUp size={22} />
        </button>
    );
};

export default ScrollToTop;
