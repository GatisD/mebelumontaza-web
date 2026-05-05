import { useState } from "react";
import SEO from "@/components/SEO";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import HoverLift from "@/components/animations/HoverLift";
import { Grid2X2 } from "lucide-react";

type Category = "visi" | "montaza" | "parvaksana" | "koka-majinas";

const items = [
  {
    cat: "montaza" as Category,
    title: "Ikea PAX skapji — Rīga",
    desc: "3 skapji ar durvīm, 6h darbs",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=450&fit=crop",
    alt: "Divi lieli balti Ikea PAX garderobes skapji saliktā guļamistabā",
  },
  {
    cat: "montaza" as Category,
    title: "Virtuve — Black Red White",
    desc: "Pilna virtuve, ledusskapis iebūvēts",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=450&fit=crop",
    alt: "Moderna balta virtuve ar iebūvētu ledusskapi un granitvadli",
  },
  {
    cat: "parvaksana" as Category,
    title: "Pārvākšana — Jūrmala uz Rīgu",
    desc: "2 istabu dzīvoklis, 4 darba stundas",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=450&fit=crop",
    alt: "Pārvākšanas furgons pie mājas ar kastēm un mēbeļu segu",
  },
  {
    cat: "koka-majinas" as Category,
    title: "Koka mājiņa — Sigulda",
    desc: "2 stāvi, slidkalniņš, šūpoles",
    img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=450&fit=crop",
    alt: "Brūna koka bērnu mājiņa ar zaļu jumtu privātas mājas dārzā",
  },
  {
    cat: "montaza" as Category,
    title: "Bērnu istaba — Ikea",
    desc: "Gulta, rakstāmgalds, plaukti",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=450&fit=crop",
    alt: "Sakārtota bērnu istaba ar zilo gultu un plauktiem pie sienas",
  },
  {
    cat: "montaza" as Category,
    title: "Biroja mēbeles",
    desc: "10 galdi, 10 krēsli, 5 skapji",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=450&fit=crop",
    alt: "Gaišs birojs ar darbvirsmas galdiem rindā un krēsliem",
  },
  {
    cat: "parvaksana" as Category,
    title: "Pārvākšana — Valmiera",
    desc: "3 istabu māja, pilns pakalpojums",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop",
    alt: "Mēbeles iesaiņotas ar aizsargsegām pārvākšanas procesā",
  },
  {
    cat: "koka-majinas" as Category,
    title: "Dārza šķūnis — Ādaži",
    desc: "6m² šķūnis ar slēdzeni un ventilāciju",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=450&fit=crop",
    alt: "Pelēks koka dārza šķūnis ar slīpu jumtu un divviru durvīm",
  },
];

const categories: { key: Category; label: string }[] = [
  { key: "visi", label: "Visi darbi" },
  { key: "montaza", label: "Montāža" },
  { key: "parvaksana", label: "Pārvākšana" },
  { key: "koka-majinas", label: "Koka mājiņas" },
];

export default function Portfolio() {
  const [active, setActive] = useState<Category>("visi");
  const crumbs = breadcrumbSchema([
    { name: "Sākums", url: "https://mebelumontaza.lv/" },
    { name: "Portfolio", url: "https://mebelumontaza.lv/portfolio" },
  ]);

  const filtered = active === "visi" ? items : items.filter((i) => i.cat === active);

  return (
    <>
      <SEO
        title="Portfolio — mēbeļu montāžas un pārvākšanas darbi"
        description="Apskatiet mūsu pabeigtos darbus — mēbeļu montāža, pārvākšanas serviss, bērnu koka mājiņas. 500+ projekti visā Latvijā."
        path="/portfolio"
        lastModified="2026-05-05"
      />
      <JsonLd data={crumbs} />

      {/* Header */}
      <section className="bg-card border-b border-border py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="portfolio-heading">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Atpakaļceļš" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Sākums</a></li>
              <li aria-hidden="true" className="text-border">/</li>
              <li className="text-foreground" aria-current="page">Portfolio</li>
            </ol>
          </nav>

          <FadeInOnScroll>
            <div className="flex items-center gap-3 mb-4">
              <Grid2X2 className="w-8 h-8 text-primary" aria-hidden="true" />
              <p className="text-primary text-xs font-heading font-bold uppercase tracking-[0.2em]">Portfolio</p>
            </div>
            <h1 id="portfolio-heading" className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-4">
              Mūsu paveiktie darbi
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              Vairāk nekā 500 projektu Latvijā — mēbeļu montāža, pārvākšana un koka mājiņas.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto" aria-label="Kategoriju filtrs">
        <div className="flex flex-wrap gap-3" role="group" aria-label="Filtrēt pēc kategorijas">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-4 py-2 rounded text-sm font-heading font-medium transition-colors ${
                active === c.key
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
              }`}
              aria-pressed={active === c.key}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 max-w-7xl mx-auto" aria-label="Portfolio galerija">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" role="list">
          {filtered.map((item, i) => (
            <FadeInOnScroll key={`${item.title}-${i}`} delay={(i % 4) * 0.1}>
              <HoverLift>
                <article
                  className="bg-card border border-border rounded-lg overflow-hidden group hover:border-primary/40 transition-colors"
                  role="listitem"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={item.img}
                      alt={item.alt}
                      width={600}
                      height={450}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </div>
                  <div className="p-4">
                    <h2 className="font-heading font-bold text-sm text-foreground mb-1">{item.title}</h2>
                    <p className="text-muted-foreground text-xs">{item.desc}</p>
                  </div>
                </article>
              </HoverLift>
            </FadeInOnScroll>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">Šajā kategorijā vēl nav darbu.</p>
        )}
      </section>
    </>
  );
}
