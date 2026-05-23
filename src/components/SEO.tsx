import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  type?: string;
  schema?: Record<string, any>;
}

export function SEO({ title, description, url = 'https://lepetitbougiote.fr', type = 'website', schema }: SEOProps) {
  const fullTitle = `${title} | Le Petit Bougiote - Restaurant Béziers`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Le Petit Bougiote" />
      
      <link rel="canonical" href={url} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

export const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Le Petit Bougiote",
  "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1200",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "28 Rue Diderot",
    "addressLocality": "Béziers",
    "postalCode": "34500",
    "addressCountry": "FR"
  },
  "telephone": "04 58 28 15 22",
  "servesCuisine": ["Burgers", "Desserts", "French"],
  "priceRange": "10-20 €",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "11:30",
      "closes": "22:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "30"
  },
  "url": "https://lepetitbougiote.fr"
};
