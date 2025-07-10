// src/pages/Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Programs from '../components/Sections/Programs';
import Team from '../components/Sections/Team';
import News from '../components/Sections/News';
import Contact from '../components/Sections/Contact';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Radio Flambeau-Banka - Votre voix, votre communauté</title>
        <meta name="description" content="Écoutez Radio Flambeau-Banka en direct depuis n'importe où dans le monde. Radio communautaire de l'arrondissement de Banka, Cameroun. Programmes variés, actualités locales et internationales." />
        <meta name="keywords" content="radio flambeau banka, radio cameroun, streaming audio, radio communautaire, banka, centre cameroun, écouter en ligne, musique africaine, actualités" />
        <meta property="og:title" content="Radio Flambeau-Banka - Votre voix communautaire" />
        <meta property="og:description" content="Écoutez Radio Flambeau-Banka en direct depuis n'importe où dans le monde" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.radioflambeaubanka.com" />
        <meta property="og:image" content="https://www.radioflambeaubanka.com/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Radio Flambeau-Banka - Votre voix communautaire" />
        <meta name="twitter:description" content="Écoutez Radio Flambeau-Banka en direct depuis n'importe où dans le monde" />
        <meta name="twitter:image" content="https://www.radioflambeaubanka.com/images/og-image.jpg" />
        <link rel="canonical" href="https://www.radioflambeaubanka.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RadioStation",
            "name": "Radio Flambeau-Banka",
            "description": "Radio communautaire de l'arrondissement de Banka, Cameroun",
            "url": "https://www.radioflambeaubanka.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Banka",
              "addressRegion": "Centre",
              "addressCountry": "CM"
            },
            "broadcastAffiliateOf": {
              "@type": "Organization",
              "name": "Radio Flambeau-Banka"
            },
            "sameAs": [
              "https://www.facebook.com/radioflambeaubanka",
              "https://twitter.com/radioflambeaubanka",
              "https://www.instagram.com/radioflambeaubanka"
            ],
            "broadcastFrequency": "Stream",
            "broadcastTimezone": "Africa/Douala"
          })}
        </script>
      </Helmet>
      
      <main className="min-h-screen">
        <Hero />
        <About />
        <Programs />
        <Team />
        <News />
        <Contact />
      </main>
    </>
  );
};

export default Home;