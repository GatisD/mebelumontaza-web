import { Helmet } from "react-helmet-async";

const SITE_NAME = "Mebeļu Montāža";
const DOMAIN = "https://mebelumontaza.lv";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  lastModified?: string;
}

export default function SEO({ title, description, path = "/", lastModified }: SEOProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Profesionāla mēbeļu montāža Latvijā`;
  const canonical = `${DOMAIN}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="lv_LV" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      {lastModified && <meta name="article:modified_time" content={lastModified} />}
      {lastModified && <meta property="og:updated_time" content={lastModified} />}
    </Helmet>
  );
}
