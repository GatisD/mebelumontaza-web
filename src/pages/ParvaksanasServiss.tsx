import SEO from "@/components/SEO";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import ContactForm from "@/components/ContactForm";
import { Truck, Package, Home, CheckCircle, Shield, Clock } from "lucide-react";

const steps = [
  {
    icon: Package,
    title: "Iesaiņošana",
    desc: "Kārtīgi iesaiņojam visas mēbeles un trauslus priekšmetus. Materiāli iekļauti cenā.",
  },
  {
    icon: Truck,
    title: "Pārvešana",
    desc: "Kvalitatīvs furgons ar ceļa aizsardzību. Strādājam visā Latvijā.",
  },
  {
    icon: Home,
    title: "Izkraušana",
    desc: "Izkraujam un novietojam mēbeles norādītajās vietās.",
  },
  {
    icon: CheckCircle,
    title: "Salikšana",
    desc: "Saliekam visas mēbeles, pārbaudām un atstājam kārtībā.",
  },
];

const included = [
  "Mēbeļu demontāža vecajā dzīvoklī",
  "Profesionāla iesaiņošana ar aizsargsegām",
  "Pārvešana ar slēgtu furgonu",
  "Izkraušana un mēbeļu novietošana",
  "Mēbeļu salikšana jaunajā dzīvoklī",
  "Iepakojuma materiālu izvākšana",
];

export default function ParvaksanasServiss() {
  const crumbs = breadcrumbSchema([
    { name: "Sākums", url: "https://mebelumontaza.lv/" },
    { name: "Pārvākšanas serviss", url: "https://mebelumontaza.lv/parvaksanas-serviss" },
  ]);

  return (
    <>
      <SEO
        title="Pārvākšanas serviss Latvijā — mēbeļu pārvākšana"
        description="Pilns pārvākšanas serviss — iesaiņošana, pārvešana ar furgonu, mēbeļu salikšana. 18 gadu pieredze. Strādājam visā Latvijā. Iesniedziet pieprasījumu."
        path="/parvaksanas-serviss"
        lastModified="2026-05-05"
      />
      <JsonLd data={crumbs} />

      {/* Hero */}
      <section className="bg-card border-b border-border py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="parvaksana-heading">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Atpakaļceļš" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Sākums</a></li>
              <li aria-hidden="true" className="text-border">/</li>
              <li className="text-foreground" aria-current="page">Pārvākšanas serviss</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInOnScroll>
              <div className="flex items-center gap-3 mb-4">
                <Truck className="w-8 h-8 text-primary" aria-hidden="true" />
                <p className="text-primary text-xs font-heading font-bold uppercase tracking-[0.2em]">Pārvākšana</p>
              </div>
              <h1 id="parvaksana-heading" className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-4">
                Pārvākšanas serviss — pilns pakalpojums
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Mēs parūpējamies par visu — no mēbeļu demontāžas vecajā dzīvoklī līdz salikšanai jaunajā.
                Jums atliek tikai norādīt adreses.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: Shield, text: "Apdrošināts kravnesums" },
                  { icon: Clock, text: "Elastīgi datumi" },
                  { icon: CheckCircle, text: "Visā Latvijā" },
                ].map((b) => (
                  <div key={b.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <b.icon className="w-4 h-4 text-primary" aria-hidden="true" />
                    {b.text}
                  </div>
                ))}
              </div>
              <a
                href="tel:+37112345678"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-bold px-6 py-3.5 rounded hover:bg-primary/90 transition-colors"
                aria-label="Zvanīt pa tālruni +371 12345678"
              >
                Zvanīt tagad
              </a>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.2}>
              <div className="rounded-lg overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                  alt="Pārvākšanas darbinieks ar kastēm pie furgona mājas priekšā"
                  width={800}
                  height={600}
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-labelledby="process-heading">
        <FadeInOnScroll>
          <div className="text-center mb-12">
            <p className="text-primary text-xs font-heading font-bold uppercase tracking-[0.2em] mb-3">Process</p>
            <h2 id="process-heading" className="font-heading font-bold text-3xl text-foreground">
              Kā notiek pārvākšana?
            </h2>
          </div>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <FadeInOnScroll key={step.title} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-start">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="bg-card border-y border-border py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="included-heading">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInOnScroll>
            <h2 id="included-heading" className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-8">
              Kas ir iekļauts pakalpojumā?
            </h2>
          </FadeInOnScroll>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left" role="list">
            {included.map((item, i) => (
              <FadeInOnScroll key={i} delay={i * 0.07}>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              </FadeInOnScroll>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto" aria-labelledby="faq-parvaksana-heading">
        <FadeInOnScroll>
          <h2 id="faq-parvaksana-heading" className="font-heading font-bold text-2xl text-foreground mb-6 text-center">
            Bieži uzdotie jautājumi par pārvākšanu
          </h2>
        </FadeInOnScroll>
        <dl className="flex flex-col gap-4 mb-12">
          {[
            {
              q: "Cik ātri varat organizēt pārvākšanu?",
              a: "Parasti varam ierasties 48 stundu laikā. Brīdiniet savlaicīgi — izvēlēsimies jums ērtu laiku.",
            },
            {
              q: "Vai pārvācat arī lielus priekšmetus kā piano vai smagus skapjus?",
              a: "Jā, strādājam ar jebkāda izmēra mēbelēm. Lieliem priekšmetiem uz augšējo stāvu izmantojam papildu aprīkojumu.",
            },
            {
              q: "Kā aprēķina pārvākšanas cenu?",
              a: "Cena atkarīga no attāluma, mēbeļu apjoma un darba sarežģītības. Piedāvājumu sniedzam pēc apraksta vai apmeklējuma.",
            },
          ].map((faq, i) => (
            <FadeInOnScroll key={i} delay={i * 0.08}>
              <div className="bg-card border border-border rounded-lg p-5">
                <dt className="font-heading font-bold text-foreground mb-2">{faq.q}</dt>
                <dd className="text-muted-foreground text-sm leading-relaxed">{faq.a}</dd>
              </div>
            </FadeInOnScroll>
          ))}
        </dl>
      </section>

      {/* Form */}
      <section className="bg-card border-t border-border py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="form-heading">
        <div className="max-w-xl mx-auto">
          <FadeInOnScroll>
            <h2 id="form-heading" className="font-heading font-bold text-2xl text-foreground mb-2 text-center">
              Pieprasīt pārvākšanu
            </h2>
            <p className="text-muted-foreground text-sm text-center mb-8">
              Aizpildiet formu — atsauksimies ar piedāvājumu.
            </p>
            <ContactForm title="Pārvākšanas pieprasījums" />
          </FadeInOnScroll>
        </div>
      </section>
    </>
  );
}
