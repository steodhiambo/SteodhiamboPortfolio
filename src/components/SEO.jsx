import { Helmet } from "react-helmet-async";

function SEO({ title, description, ogTitle, ogDescription, ogImage, ogUrl, jsonLd }) {
  const siteName = "Stephen Odhiambo";
  const fullTitle = title ? `${title} — ${siteName}` : siteName;
  const defaultDescription =
    "Full-Stack Developer portfolio showcasing projects built with Go, React, JavaScript, Python, and modern web technologies. Based in Kisumu, Kenya.";
  const defaultOgImage = ogImage || "";
  const canonicalUrl = ogUrl || "https://steodhiambo.com";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={defaultOgImage} />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description || defaultDescription} />
      <meta name="twitter:image" content={defaultOgImage} />
      <link rel="canonical" href={canonicalUrl} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}

export default SEO;
