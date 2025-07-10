
// src/utils/seo.js
export const generateMetaTags = (page = {}) => {
  const defaultMeta = {
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}/images/og-image.jpg`,
    type: 'website'
  };
  
  const meta = { ...defaultMeta, ...page };
  
  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      'radio', 'flambeau', 'banka', 'cameroun', 'streaming', 
      'musique', 'actualités', 'communauté', 'afrique',
      'radio communautaire', 'écouter en ligne'
    ].join(', '),
    author: SITE_CONFIG.name,
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1.0',
    charset: 'utf-8',
    language: 'fr',
    
    // Open Graph
    'og:title': meta.title,
    'og:description': meta.description,
    'og:url': meta.url,
    'og:image': meta.image,
    'og:type': meta.type,
    'og:site_name': SITE_CONFIG.name,
    'og:locale': 'fr_FR',
    
    // Twitter Cards
    'twitter:card': 'summary_large_image',
    'twitter:title': meta.title,
    'twitter:description': meta.description,
    'twitter:image': meta.image,
    'twitter:site': '@radioflambeaubanka',
    'twitter:creator': '@radioflambeaubanka'
  };
};

export const updatePageTitle = (title) => {
  document.title = title ? `${title} - ${SITE_CONFIG.name}` : `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`;
};

export const updateMetaDescription = (description) => {
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }
};

export const addCanonicalUrl = (url) => {
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', url);
  } else {
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = url;
    document.head.appendChild(link);
  }
};

export const addStructuredData = (data) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};