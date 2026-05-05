import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type LenisLike = {
  scrollTo: (target: number, options?: { immediate?: boolean }) => void;
};

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [pathname]);

  return null;
}
