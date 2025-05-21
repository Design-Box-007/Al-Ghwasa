// components/ScrollToTopButton.tsx
"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"
                } bg-custom-green-1 text-white p-4 rounded-full shadow-lg hover:scale-110`}
            aria-label="Scroll to top"
        >
            <FaArrowUp size={24} />
        </button>
    );
}
