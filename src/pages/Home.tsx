import SEO from "@/components/SEO";
import { JsonLd, localBusinessSchema, faqSchema } from "@/components/JsonLd";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import RevealText from "@/components/animations/RevealText";
import CountUp from "@/components/animations/CountUp";
import HoverLift from "@/components/animations/HoverLift";
import MagneticButton from "@/components/animations/MagneticButton";
import ContactForm from "@/components/ContactForm";
import { Hammer, Truck, TreePine, Shield, Star, Clock, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Hammer,
    title: "Mēbeļu montāža",
    desc: "Ikea, Jysk, Black Red White un jebkādu citu ražotāju mēbeļu profesionāla salikšana. Strādājam ātri un tīri.",
    href: "/",
    cta: "Uzzināt vairāk",
  },
  {
    icon: Truck,
    title: "Pārvākšanas serviss",
    desc: "Pilna pārvākšana no A līdz Z — iesaiņošana, pārvešana ar furgonu, izkraušana un mēbeļu salikšana jaunajā vietā.",
    href: "/parvaksanas-serviss",
    cta: "Par pārvākšanu",
  },
  {
    icon: TreePine,
    title: "Koka mājiņas",
    desc: "Bērnu koka mājiņu un dārza šķūņu profesionāla uzstādīšana. Stabilas, drošas, ar garantiju.",
    href: "/koka-majinas",
    cta: "Skatīt mājiņas",
  },
];

const stats = [
  { value: 18, suffix: "", label: "Gadi pieredzē" },
  { value: 500, suffix: "+", label: "Pabeigti darbi" },
  { value: 1, suffix: "h", label: "Atbilde uz pieprasījumu" },
  { value: 12, suffix: " mēn.", label: "Darba garantija" },
];

const testimonials = [
  {
    name: "Ilze Kalniņa",
    text: "Ātri, tīri, profesionāli. Salika visu Ikea virtuvi un 2 skapjus vienā dienā. Iesaku!",
    stars: 5,
    location: "Rīga",
  },
  {
    name: "Mārtiņš Ozoliņš",
    text: "Izcila pārvākšana — no mēbeļu iesaiņošanas līdz salikšanai jaunajā dzīvoklī. Nekas nesaskrāpēts, viss kārtīgi.",
    stars: 5,
    location: "Jūrmala",
  },
  {
    name: "Sandra Liepiņa",
    text: "Bērni ir laimīgi — koka mājiņa dārzā uzstādīta 3 stundās. Ļoti stabila un kārtīgi izdarīta.",
    stars: 5,
    location: "Sigulda",
  },
];

const faqs = [
  {
    q: "Cik ātri varat ierasties uz mēbeļu montāžu?",
    a: "Parasti ierodamies 24–48 stundu laikā pēc pieprasījuma. Steidzamos gadījumos iespējama ātrāka ierašanās — zvaniet!",
  },
  {
    q: "Kādas mēbeles jūs montējat?",
    a: "Montējam jebkādu ražotāju mēbeles — Ikea, Jysk, Black Red White, Bodzio un citas. Pieredze ar vairāk nekā 500 projektiem.",
  },
  {
    q: "Vai ir garantija uz montāžas darbiem?",
    a: "Jā, uz visiem montāžas darbiem ir 12 mēnešu garantija. Problēmas gadījumā ierodamies bez papildu maksas.",
  },
  {
    q: "Vai strādājat ārpus Rīgas?",
    a: "Jā, strādājam visā Latvijā — Jelgavā, Jūrmalā, Valmierā, Daugavpilī un citur.",
  },
  {
    q: "Cik maksā mēbeļu montāža?",
    a: "Cena atkarīga no mēbeļu skaita un sarežģītības. Gultas montāža no 25 EUR, skapja montāža no 35 EUR.",
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Mēbeļu montāža Latvijā — 18 gadu pieredze"
        description="Profesionāla mēbeļu montāža, pārvākšanas serviss un koka mājiņu uzstādīšana. 18 gadu pieredze. Atbildam 1 stundas laikā. Strādājam visā Latvijā."
        path="/"
        lastModified="2026-05-05"
      />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      {/* HERO */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden bg-background"
        aria-labelledby="hero-heading"
      >
        {/* Background accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-0 right-0 w-[60vw] h-full bg-gradient-to-l from-primary/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-gradient-to-r from-primary/3 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeInOnScroll delay={0}>
              <p className="inline-block text-xs font-heading font-bold text-primary uppercase tracking-[0.2em] mb-6 border border-primary/30 rounded px-3 py-1">
                18 gadu pieredze
              </p>
            </FadeInOnScroll>

            <RevealText
              as="h1"
              id="hero-heading"
              text="Mēbeļu montāža un pārvākšana — bez stresa"
              className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground mb-6"
              delay={0.1}
            />

            <FadeInOnScroll delay={0.5}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
                18 gadu pieredze. Atbildam <strong className="text-foreground">1 stundas laikā</strong>.
                Strādājam visā Latvijā.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticButton
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-bold px-6 py-3.5 rounded hover:bg-primary/90 transition-colors text-base min-h-[44px]"
                  onClick={() => {
                    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Iesniegt pieprasījumu
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </MagneticButton>

                <a
                  href="tel:+37112345678"
                  className="inline-flex items-center justify-center gap-2 border border-primary/50 text-primary font-heading font-bold px-6 py-3.5 rounded hover:bg-primary/10 transition-colors text-base min-h-[44px]"
                  aria-label="Zvanīt: +371 12345678"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  +371 12345678
                </a>
              </div>
            </FadeInOnScroll>
          </div>

          {/* Hero image */}
          <FadeInOnScroll delay={0.3} className="relative">
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80"
                alt="Profesionāls meistars saliek Ikea mēbeles dzīvoklī"
                width={800}
                height={600}
                loading="eager"
                fetchPriority="high"
                decoding="sync"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" aria-hidden="true" />
              {/* Badge */}
              <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-3 py-2 rounded font-heading font-bold text-sm" aria-hidden="true">
                ★ 5.0 Google atsauksmes
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-card border-y border-border py-12" aria-label="Mūsu rādītāji">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeInOnScroll key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-muted-foreground text-xs font-heading font-bold uppercase tracking-wider mb-1">
                    {stat.label}
                  </p>
                  <p className="text-4xl font-heading font-bold text-primary">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-labelledby="services-heading">
        <FadeInOnScroll>
          <div className="text-center mb-12">
            <p className="text-primary text-xs font-heading font-bold uppercase tracking-[0.2em] mb-3">Pakalpojumi</p>
            <h2 id="services-heading" className="font-heading font-bold text-3xl sm:text-4xl text-foreground">
              Ko mēs darām
            </h2>
          </div>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeInOnScroll key={s.title} delay={i * 0.15}>
              <HoverLift>
                <article className="bg-card border border-border rounded-lg p-6 h-full flex flex-col group hover:border-primary/40 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4">
                    <s.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{s.desc}</p>
                  <Link
                    to={s.href}
                    className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all min-h-[44px]"
                    aria-label={`${s.cta} par ${s.title}`}
                  >
                    {s.cta}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </article>
              </HoverLift>
            </FadeInOnScroll>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-card border-y border-border py-20" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll>
            <div className="text-center mb-12">
              <p className="text-primary text-xs font-heading font-bold uppercase tracking-[0.2em] mb-3">Kāpēc mēs</p>
              <h2 id="why-heading" className="font-heading font-bold text-3xl sm:text-4xl text-foreground">
                Garantija un uzticamība
              </h2>
            </div>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "12 mēn. garantija", desc: "Uz visiem montāžas darbiem." },
              { icon: Clock, title: "Atbilde 1 stundā", desc: "Darba laikā atbildam ātri." },
              { icon: Star, title: "500+ darbi", desc: "Pieredze ar visiem mēbeļu veidiem." },
              { icon: Hammer, title: "Tīrs darbs", desc: "Aizvācam visu iepakojumu pēc sevis." },
            ].map((item, i) => (
              <FadeInOnScroll key={item.title} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO STRIP */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-labelledby="portfolio-heading">
        <FadeInOnScroll>
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-primary text-xs font-heading font-bold uppercase tracking-[0.2em] mb-3">Darbi</p>
              <h2 id="portfolio-heading" className="font-heading font-bold text-3xl text-foreground">
                Nesenie projekti
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="hidden sm:inline-flex items-center gap-2 text-primary text-sm font-medium border border-primary/40 px-4 py-2 rounded hover:bg-primary/10 transition-colors min-h-[44px]"
              aria-label="Skatīt visu portfolio galeriju"
            >
              Visi darbi
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </FadeInOnScroll>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=450&fit=crop",
              alt: "Dīvāns ar krāsainu spilvenu un koka galdiņš saliktā dzīvojamā istabā",
            },
            {
              src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=450&fit=crop",
              alt: "Balts Ikea gultas rāmis ar matraci saliktā guļamistabā",
            },
            {
              src: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=450&fit=crop",
              alt: "Bērnu koka mājiņa ar slidkalniņu zaļā dārzā",
            },
            {
              src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop",
              alt: "Moderna virtuve ar baltām skapju fasādēm — montāžas rezultāts",
            },
          ].map((img, i) => (
            <FadeInOnScroll key={i} delay={i * 0.1}>
              <HoverLift>
                <div className="rounded-lg overflow-hidden aspect-square">
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={450}
                    loading="lazy"
                    fetchPriority="low"
                    decoding="async"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </HoverLift>
            </FadeInOnScroll>
          ))}
        </div>

        <FadeInOnScroll className="mt-6 text-center sm:hidden">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-primary text-sm font-medium border border-primary/40 px-4 py-2 rounded min-h-[44px]"
          >
            Visi darbi
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </FadeInOnScroll>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-card border-y border-border py-20" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll>
            <div className="text-center mb-12">
              <p className="text-primary text-xs font-heading font-bold uppercase tracking-[0.2em] mb-3">Atsauksmes</p>
              <h2 id="testimonials-heading" className="font-heading font-bold text-3xl sm:text-4xl text-foreground">
                Ko saka mūsu klienti
              </h2>
            </div>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeInOnScroll key={t.name} delay={i * 0.15}>
                <blockquote className="bg-background border border-border rounded-lg p-6 h-full flex flex-col">
                  <div
                    className="flex gap-1 mb-4"
                    role="img"
                    aria-label={`${t.stars} zvaigznes no 5`}
                  >
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-primary fill-primary" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">"{t.text}"</p>
                  <footer>
                    <cite className="not-italic font-heading font-bold text-sm text-foreground">{t.name}</cite>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </footer>
                </blockquote>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-labelledby="contact-heading">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <FadeInOnScroll>
            <div>
              <p className="text-primary text-xs font-heading font-bold uppercase tracking-[0.2em] mb-3">Kontakti</p>
              <h2 id="contact-heading" className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Iesniedziet pieprasījumu
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Aizpildiet formu un mēs atsauksimies 1 stundas laikā darba laikā.
                Varat arī zvanīt tieši — atbildam uzreiz.
              </p>
              <address className="not-italic">
                <a
                  href="tel:+37112345678"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors mb-4 group min-h-[44px]"
                  aria-label="Zvanīt: +371 12345678"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Tālrunis</p>
                    <p className="font-heading font-bold">+371 12345678</p>
                  </div>
                </a>
              </address>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.2}>
            <div className="bg-card border border-border rounded-lg p-6">
              <ContactForm title="Pieprasījuma forma" />
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card border-t border-border py-20" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll>
            <div className="text-center mb-12">
              <p className="text-primary text-xs font-heading font-bold uppercase tracking-[0.2em] mb-3">FAQ</p>
              <h2 id="faq-heading" className="font-heading font-bold text-3xl text-foreground">
                Bieži uzdotie jautājumi
              </h2>
            </div>
          </FadeInOnScroll>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <FadeInOnScroll key={i} delay={i * 0.08}>
                <section className="bg-background border border-border rounded-lg p-5">
                  <h3 className="font-heading font-bold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </section>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
