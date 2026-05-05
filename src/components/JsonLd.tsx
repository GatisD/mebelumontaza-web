interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://mebelumontaza.lv/#business",
  name: "Mebeļu Montāža",
  description:
    "Profesionāla mēbeļu montāža, pārvākšanas serviss un bērnu koku mājiņu uzstādīšana visā Latvijā ar 18 gadu pieredzi.",
  url: "https://mebelumontaza.lv",
  telephone: "+37112345678",
  email: "info@mebelumontaza.lv",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rīga",
    addressCountry: "LV",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 56.946,
    longitude: 24.105,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "15:00",
    },
  ],
  areaServed: {
    "@type": "Country",
    name: "Latvia",
  },
  priceRange: "€€",
  sameAs: [],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Cik ātri varat ierasties uz mēbeļu montāžu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Parasti ierodamies 24–48 stundu laikā pēc pieprasījuma saņemšanas. Steidzamos gadījumos iespējama ātrāka ierašanās — sazinieties pa tālruni.",
      },
    },
    {
      "@type": "Question",
      name: "Kādas mēbeles jūs montējat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Montējam jebkādu ražotāju mēbeles — Ikea, Jysk, Black Red White, Bodzio, kā arī pēc pasūtījuma ražotas mēbeles. Pieredze ar vairāk nekā 500 projektu.",
      },
    },
    {
      "@type": "Question",
      name: "Vai ir garantija uz mēbeļu montāžas darbiem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jā, uz visiem montāžas darbiem ir 12 mēnešu garantija. Ja radusies problēma — ierodamies bez papildu maksas.",
      },
    },
    {
      "@type": "Question",
      name: "Vai strādājat arī ārpus Rīgas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jā, strādājam visā Latvijā — Jūrmalā, Jelgavā, Jēkabpilī, Valmierā, Daugavpilī un citās pilsētās. Braukšanas izmaksas tiek apspriestas individuāli.",
      },
    },
    {
      "@type": "Question",
      name: "Cik maksā mēbeļu montāža?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cena atkarīga no mēbeļu skaita, veida un sarežģītības. Vidējā gultas montāža — no 25 EUR, skapja montāža — no 35 EUR. Precīzu cenu uzziniet, iesniedzot pieprasījumu.",
      },
    },
    {
      "@type": "Question",
      name: "Vai palīdzat ar pārvākšanos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jā, piedāvājam pilnu pārvākšanas pakalpojumu: iesaiņošana, mēbeļu demontāža, pārvešana ar furgonu un mēbeļu salikšana jaunajā dzīvoklī vai mājā.",
      },
    },
  ],
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
});
