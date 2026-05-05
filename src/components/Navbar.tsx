import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Hammer } from "lucide-react";

const links = [
  { href: "/", label: "Sākums" },
  { href: "/koka-majinas", label: "Koka mājiņas" },
  { href: "/parvaksanas-serviss", label: "Pārvākšana" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/kontakti", label: "Kontakti" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav aria-label="Galvenā navigācija" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors min-h-[44px]"
            aria-label="Mebeļu Montāža — uz sākumlapu"
          >
            <Hammer className="w-6 h-6 text-primary" aria-hidden="true" />
            <span className="font-heading font-bold text-lg tracking-tight">
              Mebeļu<span className="text-primary">Montāža</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {links.map((link) => {
              const active = location.pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`inline-flex items-center min-h-[44px] text-sm font-medium transition-colors hover:text-primary ${
                      active ? "text-primary" : "text-muted-foreground"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+37112345678"
              className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-bold text-sm px-4 py-2 rounded hover:bg-primary/90 transition-colors min-h-[44px]"
              aria-label="Zvanīt: +371 12345678"
            >
              Zvanīt tagad
            </a>
            <button
              className="md:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Aizvērt izvēlni" : "Atvērt izvēlni"}
            >
              {open ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col gap-2" role="list">
              {links.map((link) => {
                const active = location.pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className={`flex items-center min-h-[44px] px-3 py-2 rounded text-sm font-medium transition-colors hover:bg-muted hover:text-primary ${
                        active ? "text-primary bg-muted" : "text-muted-foreground"
                      }`}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <a
                  href="tel:+37112345678"
                  className="flex items-center justify-center min-h-[44px] px-3 py-2 bg-primary text-primary-foreground font-heading font-bold text-sm rounded text-center"
                >
                  Zvanīt tagad
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
