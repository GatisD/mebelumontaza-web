import { Link } from "react-router-dom";
import { Phone, Mail, Clock, Hammer } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2 mb-4 min-h-[44px]">
              <Hammer className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="font-heading font-bold text-lg">
                Mebeļu<span className="text-primary">Montāža</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              18 gadu pieredze mēbeļu montāžā un pārvākšanas pakalpojumos.
              Strādājam visā Latvijā.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Kājenes navigācija">
            <p className="font-heading font-bold text-sm text-primary uppercase tracking-wider mb-4">
              Pakalpojumi
            </p>
            <ul className="flex flex-col gap-1" role="list">
              {[
                { href: "/", label: "Mēbeļu montāža" },
                { href: "/koka-majinas", label: "Koka mājiņas" },
                { href: "/parvaksanas-serviss", label: "Pārvākšanas serviss" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/privatuma-politika", label: "Privātuma politika" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="flex items-center min-h-[44px] py-2 text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact — NAP */}
          <address className="not-italic">
            <p className="font-heading font-bold text-sm text-primary uppercase tracking-wider mb-4">
              Kontakti
            </p>
            <ul className="flex flex-col gap-1 text-sm text-muted-foreground" role="list">
              <li>
                <a
                  href="tel:+37112345678"
                  className="flex items-center gap-2 min-h-[44px] py-2 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                  +371 12345678
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@mebelumontaza.lv"
                  className="flex items-center gap-2 min-h-[44px] py-2 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                  info@mebelumontaza.lv
                </a>
              </li>
              <li className="flex items-start gap-2 py-2">
                <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  Pirm–Piekt 8:00–18:00
                  <br />
                  Sestd 9:00–15:00
                </span>
              </li>
            </ul>
          </address>
        </div>

        <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Mebeļu Montāža. Visas tiesības aizsargātas.
          </p>
          <p>Latvija &bull; Strādājam visā valstī</p>
        </div>
      </div>
    </footer>
  );
}
