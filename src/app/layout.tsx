import type { Metadata } from "next";
import { Poppins, Instrument_Serif } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "Cida Alves | Ozonioterapia, Estética Facial e Corporal, Alopecia | Alphaville Barueri",
  description: "Tratamentos de ozonioterapia, estética facial, estética corporal, tratamento de alopecia e pós-operatório em Alphaville e Barueri. Cida Alves com 11+ anos de experiência. Cursos para profissionais graduados em estética.",
  keywords: [
    "ozonioterapia alphaville",
    "ozonioterapia barueri", 
    "estética facial alphaville",
    "estética corporal alphaville",
    "tratamento alopecia alphaville",
    "pós operatório alphaville",
    "estética facial barueri",
    "estética corporal barueri", 
    "tratamento alopecia barueri",
    "pós operatório barueri",
    "curso estética pós operatório",
    "cida alves esteticista",
    "tratamentos estéticos alphaville",
    "clínica estética barueri"
  ],
  authors: [{ name: "Cida Alves" }],
  creator: "Cida Alves",
  publisher: "Cida Alves Estética",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://cidaalves.com.br',
    siteName: 'Cida Alves Estética',
    title: 'Cida Alves | Ozonioterapia, Estética Facial e Corporal | Alphaville Barueri',
    description: 'Tratamentos de ozonioterapia, estética facial, estética corporal, alopecia e pós-operatório em Alphaville e Barueri. Cursos para profissionais graduados.',
    images: [
      {
        url: '/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_hero_1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Cida Alves - Esteticista em Alphaville e Barueri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cida Alves | Ozonioterapia, Estética Facial e Corporal | Alphaville Barueri',
    description: 'Tratamentos de ozonioterapia, estética facial, estética corporal, alopecia e pós-operatório em Alphaville e Barueri.',
    images: ['/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_hero_1.jpeg'],
  },
  alternates: {
    canonical: 'https://cidaalves.com.br',
  },
  other: {
    'geo.region': 'BR-SP',
    'geo.placename': 'Barueri, Alphaville',
    'geo.position': '-23.5505;-46.6333',
    'ICBM': '-23.5505, -46.6333',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://cidaalves.com.br" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Cida Alves Estética",
              "description": "Tratamentos de ozonioterapia, estética facial, estética corporal, alopecia e pós-operatório em Alphaville e Barueri",
              "url": "https://cidaalves.com.br",
              "telephone": "+5511951274206",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Barueri",
                "addressRegion": "SP",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -23.5505,
                "longitude": -46.6333
              },
              "openingHours": "Mo-Fr 08:00-18:00, Sa 08:00-14:00",
              "priceRange": "$$",
              "image": "https://cidaalves.com.br/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_hero_1.jpeg",
              "founder": {
                "@type": "Person",
                "name": "Cida Alves"
              },
              "serviceArea": {
                "@type": "Place",
                "name": "Alphaville, Barueri e região"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços de Estética",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Ozonioterapia",
                      "description": "Tratamento com ozônio para diversos problemas de saúde e estética"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Estética Facial",
                      "description": "Tratamentos faciais personalizados para rejuvenescimento e cuidado da pele"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Estética Corporal",
                      "description": "Tratamentos corporais para modelagem e cuidado do corpo"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tratamento de Alopecia", 
                      "description": "Tratamentos especializados para queda de cabelo e alopecia"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Pós-operatório",
                      "description": "Cuidados especializados para recuperação pós-cirúrgica"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body suppressHydrationWarning className={`${poppins.variable} ${instrumentSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
