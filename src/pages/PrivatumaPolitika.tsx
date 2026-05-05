import SEO from "@/components/SEO";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";

export default function PrivatumaPolitika() {
  return (
    <>
      <SEO
        title="Privātuma politika"
        description="Mebeļu Montāža privātuma politika — kā mēs apkopojam, izmantojam un aizsargājam jūsu personas datus."
        path="/privatuma-politika"
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto" aria-labelledby="privacy-heading">
        <FadeInOnScroll>
          <h1 id="privacy-heading" className="font-heading font-bold text-3xl text-foreground mb-2">
            Privātuma politika
          </h1>
          <p className="text-muted-foreground text-sm mb-10">
            Pēdējo reizi atjaunināts: 2026. gada 5. maijs
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.1}>
          <div className="prose prose-invert prose-sm max-w-none space-y-8">
            <section aria-labelledby="datu-parzinis">
              <h2 id="datu-parzinis" className="font-heading font-bold text-xl text-foreground mb-3">1. Datu pārzinis</h2>
              <p className="text-muted-foreground leading-relaxed">
                Personas datu pārzinis ir uzņēmums <strong className="text-foreground">Mebeļu Montāža</strong>.
                Kontakti: <a href="mailto:info@mebelumontaza.lv" className="text-primary hover:underline">info@mebelumontaza.lv</a>,
                tālrunis: <a href="tel:+37112345678" className="text-primary hover:underline">+371 12345678</a>.
              </p>
            </section>

            <section aria-labelledby="datu-veidi">
              <h2 id="datu-veidi" className="font-heading font-bold text-xl text-foreground mb-3">2. Kādus datus mēs apkopojam?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Aizpildot kontaktformu, mēs saņemam: vārdu un uzvārdu, tālruņa numuru, pakalpojuma veidu un uzdevuma aprakstu.
                Šie dati tiek izmantoti tikai saziņai saistībā ar jūsu pieprasījumu.
              </p>
            </section>

            <section aria-labelledby="datu-apstrade">
              <h2 id="datu-apstrade" className="font-heading font-bold text-xl text-foreground mb-3">3. Datu apstrādes mērķis un pamats</h2>
              <p className="text-muted-foreground leading-relaxed">
                Dati tiek apstrādāti, lai sniegtu atbildi uz jūsu pieprasījumu (VDAR 6. panta 1. punkta b) apakšpunkts —
                līguma izpilde vai pasākumu veikšana pirms līguma noslēgšanas).
              </p>
            </section>

            <section aria-labelledby="datu-glabašana">
              <h2 id="datu-glabašana" className="font-heading font-bold text-xl text-foreground mb-3">4. Datu glabāšanas termiņš</h2>
              <p className="text-muted-foreground leading-relaxed">
                Personas dati tiek glabāti ne ilgāk kā 12 mēnešus pēc pēdējās saziņas ar jums, ja vien nav noteikts citāds
                glabāšanas termiņš normatīvajos aktos.
              </p>
            </section>

            <section aria-labelledby="datu-tiesibas">
              <h2 id="datu-tiesibas" className="font-heading font-bold text-xl text-foreground mb-3">5. Jūsu tiesības</h2>
              <ul className="text-muted-foreground leading-relaxed space-y-2 list-disc pl-4">
                <li>Tiesības piekļūt saviem personas datiem</li>
                <li>Tiesības labot neprecīzus datus</li>
                <li>Tiesības dzēst datus ("tiesības tikt aizmirstam")</li>
                <li>Tiesības ierobežot datu apstrādi</li>
                <li>Tiesības iebilst pret datu apstrādi</li>
                <li>Tiesības iesniegt sūdzību Datu valsts inspekcijā (dvi.gov.lv)</li>
              </ul>
            </section>

            <section aria-labelledby="kontakti-privacy">
              <h2 id="kontakti-privacy" className="font-heading font-bold text-xl text-foreground mb-3">6. Sazināties par personas datiem</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ja jums ir jautājumi par savu personas datu apstrādi, sazinieties ar mums:{" "}
                <a href="mailto:info@mebelumontaza.lv" className="text-primary hover:underline">
                  info@mebelumontaza.lv
                </a>
              </p>
            </section>
          </div>
        </FadeInOnScroll>
      </section>
    </>
  );
}
