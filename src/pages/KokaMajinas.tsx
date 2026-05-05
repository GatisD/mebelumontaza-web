import SEO from "@/components/SEO";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import HoverLift from "@/components/animations/HoverLift";
import ContactForm from "@/components/ContactForm";
import { TreePine, Shield, Hammer, CheckCircle } from "lucide-react";

const products = [
  {
    title: "Klasiskā koka mājiņa",
    desc: "Divi stāvi, kāpnes, logs. Ideāla bērniem no 3 gadiem. Izmērs 1.5×1.5m.",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80&auto=format&fit=crop",
    alt: "Bērnu koka rotaļu mājiņa zaļā dārzā vasarā",
  },
  {
    title: "Mājiņa ar slidkalniņu",
    desc: "Slidkalniņš, šūpoles, smilšu kaste komplektā. Bērniem 3–12 gadi.",
    img: "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=800&q=80&auto=format&fit=crop",
    alt: "Bērnu koka mājiņa kokā ar kāpnēm un platformu",
  },
  {
    title: "Dārza šķūnis",
    desc: "Instrumentu un dārza tehnikas glabāšanai. Slēdzenai, ventilācija.",
    img: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80&auto=format&fit=crop",
    alt: "Koka dārza šķūnis ar divviru durvīm uz zāles",
  },
  {
    title: "Premium mājiņa",
    desc: "Izturīgs priedes koks, jumts ar bitumena šindeli. Garantija 5 gadi.",
    img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80&auto=format&fit=crop",
    alt: "Koka šķūnis dabīgā vidē ar priedes konstrukciju",
  },
];

export default function KokaMajinas() {
  const crumbs = breadcrumbSchema([
    { name: "Sākums", url: "https://mebelumontaza.lv/" },
    { name: "Bērnu koka mājiņas", url: "https://mebelumontaza.lv/koka-majinas" },
  ]);

  return (
    <>
      <SEO
        title="Bērnu koka mājiņas un dārza šķūņi — montāža Latvijā"
        description="Profesionāla bērnu koka mājiņu un dārza šķūņu uzstādīšana Latvijā. Droša montāža, 12 mēnešu garantija. Ierodamies 24h laikā."
        path="/koka-majinas"
        lastModified="2026-05-05"
      />
      <JsonLd data={crumbs} />

      {/* Hero */}
      <section className="bg-card border-b border-border py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="koka-heading">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Atpakaļceļš" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Sākums</a></li>
              <li aria-hidden="true" className="text-border">/</li>
              <li className="text-foreground" aria-current="page">Bērnu koka mājiņas</li>
            </ol>
          </nav>

          <FadeInOnScroll>
            <div className="flex items-center gap-3 mb-4">
              <TreePine className="w-8 h-8 text-primary" aria-hidden="true" />
              <p className="text-primary text-xs font-heading font-bold uppercase tracking-[0.2em]">
                Koka mājiņas
              </p>
            </div>
            <h1 id="koka-heading" className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-4">
              Bērnu koka mājiņas un dārza šķūņi
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mb-6 leading-relaxed">
              Profesionāla koka mājiņu un šķūņu uzstādīšana. Stabila, droša montāža — bērni var spēlēties uzreiz.
              Strādājam visā Latvijā, garantija 12 mēneši.
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.2}>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Shield, text: "12 mēn. garantija" },
                { icon: Hammer, text: "Stabila montāža" },
                { icon: CheckCircle, text: "Ierašanās 24h" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <b.icon className="w-4 h-4 text-primary" aria-hidden="true" />
                  {b.text}
                </div>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-labelledby="products-heading">
        <FadeInOnScroll>
          <h2 id="products-heading" className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-8">
            Mājiņu veidi
          </h2>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <FadeInOnScroll key={p.title} delay={i * 0.1}>
              <HoverLift>
                <article className="bg-card border border-border rounded-lg overflow-hidden group hover:border-primary/40 transition-colors">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.alt}
                      width={600}
                      height={450}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-bold text-base text-foreground mb-2">{p.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </article>
              </HoverLift>
            </FadeInOnScroll>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-card border-y border-border py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="process-heading">
        <div className="max-w-4xl mx-auto">
          <FadeInOnScroll>
            <h2 id="process-heading" className="font-heading font-bold text-2xl sm:text-3xl text-foreground text-center mb-10">
              Kā notiek uzstādīšana?
            </h2>
          </FadeInOnScroll>
          <ol className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center">
            {[
              { step: "01", title: "Pieprasījums", desc: "Iesniedziet formu vai zvaniet — sazinamies 1h." },
              { step: "02", title: "Apmeklējums", desc: "Izvērtējam vietu un sagatavojam precīzu piedāvājumu." },
              { step: "03", title: "Montāža", desc: "Profesionāla uzstādīšana 1 dienā." },
              { step: "04", title: "Nodošana", desc: "Pārbaudām stabilitāti un droša uzstādīšana." },
            ].map((item, i) => (
              <li key={item.step} className="list-none">
                <FadeInOnScroll delay={i * 0.1} className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-primary font-heading font-bold text-sm">{item.step}</span>
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </FadeInOnScroll>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto" aria-labelledby="koka-contact-heading">
        <FadeInOnScroll>
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 id="koka-contact-heading" className="font-heading font-bold text-2xl text-foreground mb-2">
              Pieprasīt mājiņas uzstādīšanu
            </h2>
            <p className="text-muted-foreground mb-6">Norādiet, kāda mājiņa un kur — atbildēsim ar piedāvājumu.</p>
            <ContactForm title="Koka mājiņas pieprasījums" />
          </div>
        </FadeInOnScroll>
      </section>
    </>
  );
}
