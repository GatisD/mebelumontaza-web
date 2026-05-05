import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });

  const phone = "37112345678"; // placeholder — klients aizvieto
  const waText = encodeURIComponent("Sveiki! Interesē par mēbeļu montāžu.");
  const waHref = `https://wa.me/${phone}?text=${waText}`;

  return (
    <>
      {/* WhatsApp — kreisajā */}
      <motion.a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Sazinies WhatsApp"
        className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-50 inline-flex h-14 w-14 items-center justify-center rounded bg-[#25D366] text-white shadow-lg ring-2 ring-[#25D366]/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary"
        animate={reduce ? undefined : { scale: [1, 1.05, 1] }}
        transition={reduce ? undefined : { repeat: Infinity, duration: 2, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </motion.a>

      {/* Scroll-to-top — labajā */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={scrollTop}
            aria-label="Atpakaļ uz augšu"
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 inline-flex h-12 w-12 items-center justify-center rounded border-2 border-primary bg-background text-primary shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary"
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
