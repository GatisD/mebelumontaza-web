import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingActions from "@/components/FloatingActions";

export default function Layout() {
  return (
    <>
      <SmoothScroll />
      <ScrollToTop />
      <a href="#main-content" className="skip-to-content">
        Pāriet uz saturu
      </a>
      <Navbar />
      <main id="main-content" className="pt-16 min-h-screen flex flex-col">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
