import SEO from "@/components/SEO";
import { JsonLd, localBusinessSchema, breadcrumbSchema } from "@/components/JsonLd";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function Kontakti() {
  const crumbs = breadcrumbSchema([
    { name: "Sākums", url: "https://mebelumontaza.lv/" },
    { name: "Kontakti", url: "https://mebelumontaza.lv/kontakti" },
  ]);

  return (
    <>
      <SEO
        title="Kontakti — Mebeļu Montāža Latvijā"
        description="Sazinieties ar mūsu komandu — zvaniet, rakstiet vai aizpildiet formu. Atbildam 1 stundas laikā darba laikā. Strādājam visā Latvijā."
        path="/kontakti"
        lastModified="2026-05-05"
      />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={crumbs} />

      {/* Header */}
      <section className="bg-card border-b border-border py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="kontakti-heading">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Atpakaļceļš" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Sākums</a></li>
              <li aria-hidden="true" className="text-border">/</li>
              <li className="text-foreground" aria-current="page">Kontakti</li>
            </ol>
          </nav>
          <FadeInOnScroll>
            <p className="text-primary text-xs font-heading font-bold uppercase tracking-[0.2em] mb-3">Sazināties</p>
            <h1 id="kontakti-heading" className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-4">
              Sazinieties ar mums
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              Atbildam 1 stundas laikā darba laikā. Iesniedziet pieprasījumu vai zvaniet tieši.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <FadeInOnScroll>
            <div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Kontaktinformācija</h2>
              <address className="not-italic flex flex-col gap-6">
                <a
                  href="tel:+37112345678"
                  className="flex items-start gap-4 group"
                  aria-label="Zvanīt pa tālruni +371 12345678"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5 font-medium">Tālrunis</p>
                    <p className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      +371 12345678
                    </p>
                    <p className="text-xs text-muted-foreground">Zvaniet jebkurā darba laikā</p>
                  </div>
                </a>

                <a
                  href="mailto:info@mebelumontaza.lv"
                  className="flex items-start gap-4 group"
                  aria-label="Rakstīt uz info@mebelumontaza.lv"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5 font-medium">E-pasts</p>
                    <p className="font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                      info@mebelumontaza.lv
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5 font-medium">Darba laiks</p>
                    <p className="text-foreground font-medium">Pirm–Piekt: 8:00–18:00</p>
                    <p className="text-foreground font-medium">Sestd: 9:00–15:00</p>
                    <p className="text-muted-foreground text-xs mt-1">Svētd — pēc vienošanās</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5 font-medium">Darba zona</p>
                    <p className="text-foreground font-medium">Visa Latvija</p>
                    <p className="text-muted-foreground text-xs mt-1">
                      Rīga, Jūrmala, Jelgava, Valmiera, Daugavpils un citur
                    </p>
                  </div>
                </div>
              </address>

              {/* About */}
              <div className="mt-10 pt-8 border-t border-border">
                <h2 className="font-heading font-bold text-lg text-foreground mb-3">Par mums</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Esam pieredzējusi mēbeļu montāžas un pārvākšanas komanda ar 18 gadu pieredzi.
                  Strādājam gan ar privātpersonām, gan uzņēmumiem. Galvenās vērtības —
                  precīzs darbs, tīrība un savlaicīga ierašanās. Uz visiem darbiem 12 mēnešu garantija.
                </p>
              </div>
            </div>
          </FadeInOnScroll>

          {/* Form */}
          <FadeInOnScroll delay={0.2}>
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="font-heading font-bold text-xl text-foreground mb-1">
                Iesniegt pieprasījumu
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                Aizpildiet formu un atsauksimies 1 stundas laikā.
              </p>
              <ContactForm title="Kontaktforma" />
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Map */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 max-w-7xl mx-auto" aria-label="Darba zonā — Latvija">
        <FadeInOnScroll>
          <div className="aspect-[4/3] sm:aspect-[16/6] rounded-lg overflow-hidden border border-border bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d286753.72!2d24.105!3d56.946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eedfb2e854eba9%3A0x5582024f3a2effd7!2sR%C4%ABga%2C%20LV-1050!5e0!3m2!1slv!2slv!4v1683000000000!5m2!1slv!2slv"
              title="Rīgas karte — mūsu darba zona Latvijā"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google karte — Rīga un apkārtne"
            />
          </div>
        </FadeInOnScroll>
      </section>
    </>
  );
}
