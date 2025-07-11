
// src/services/analytics.js
class AnalyticsService {
  constructor() {
    this.isGALoaded = false;
    this.events = [];
    this.init();
  }
  
  init() {
    // Vérifier si Google Analytics est chargé
    if (typeof gtag !== 'undefined') {
      this.isGALoaded = true;
      this.flushEvents();
    } else {
      // Réessayer après 1 seconde
      setTimeout(() => this.init(), 1000);
    }
  }
  
  // Enregistrer un événement
  trackEvent(action, category, label, value) {
    const event = {
      action,
      category,
      label,
      value,
      timestamp: new Date().toISOString()
    };
    
    if (this.isGALoaded) {
      gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    } else {
      this.events.push(event);
    }
    
    // Log pour le développement
    if (import.meta.env.DEV) {
      console.log('Analytics Event:', event);
    }
  }
  
  // Envoyer les événements en attente
  flushEvents() {
    if (this.isGALoaded && this.events.length > 0) {
      this.events.forEach(event => {
        gtag('event', event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
        });
      });
      this.events = [];
    }
  }
  
  // Suivre une page vue
  trackPageView(page) {
    if (this.isGALoaded) {
      gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
        page_path: page,
      });
    }
  }
  
  // Événements spécifiques à la radio
  trackStreamPlay(streamUrl) {
    this.trackEvent('stream_play', 'Audio', streamUrl);
  }
  
  trackStreamPause(streamUrl) {
    this.trackEvent('stream_pause', 'Audio', streamUrl);
  }
  
  trackStreamError(streamUrl, error) {
    this.trackEvent('stream_error', 'Audio', `${streamUrl}: ${error}`);
  }
  
  trackFormSubmit(formType) {
    this.trackEvent('form_submit', 'Contact', formType);
  }
  
  trackSocialShare(platform) {
    this.trackEvent('social_share', 'Engagement', platform);
  }
  
  trackProgramView(programName) {
    this.trackEvent('program_view', 'Content', programName);
  }
  
  trackNewsletterSubscribe() {
    this.trackEvent('newsletter_subscribe', 'Engagement', 'Newsletter');
  }
}

export const analytics = new AnalyticsService();

// src/utils/constants.js
export const SITE_CONFIG = {
  name: 'Radio Flambeau-Banka',
  tagline: 'Votre voix, votre communauté',
  description: 'Radio communautaire de l\'arrondissement de Banka, Cameroun',
  url: 'https://www.radioflambeaubanka.com',
  email: 'contact@radioflambeaubanka.com',
  phone: '+237 6XX XXX XXX',
  address: 'Banka, Région du Centre, Cameroun',
  founded: '2014',
  languages: ['fr', 'en'],
  timezone: 'Africa/Douala'
};

export const STREAM_URLS = [
  'https://radioflambeaubanka.radiostream321.com/stream',
  'https://radioflambeaubanka.radio12345.com/stream',
  'https://radioflambeaubanka.radiostream123.com/stream'
];

export const GOOGLE_FORMS = {
  contact: 'https://forms.gle/contact_form_id',
  newsletter: 'https://forms.gle/newsletter_form_id',
  feedback: 'https://forms.gle/feedback_form_id'
};

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/radioflambeaubanka',
  twitter: 'https://twitter.com/radioflambeaubanka',
  instagram: 'https://instagram.com/radioflambeaubanka',
  youtube: 'https://youtube.com/radioflambeaubanka',
  linkedin: 'https://linkedin.com/company/radioflambeaubanka'
};

export const PROGRAMS_SCHEDULE = [
  {
    id: 1,
    name: 'Réveil Matinal',
    time: '06:00 - 09:00',
    description: 'Commencez votre journée avec nos actualités',
    host: 'Jean-Paul MBARGA',
    days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
  },
  {
    id: 2,
    name: 'Journal Parlé',
    time: '12:00 - 13:00',
    description: 'L\'actualité locale et internationale',
    host: 'Marie ONDOA',
    days: ['tous']
  },
  {
    id: 3,
    name: 'Variétés Africaines',
    time: '15:00 - 17:00',
    description: 'Les meilleurs hits africains',
    host: 'Paul ESSOMBA',
    days: ['tous']
  },
  {
    id: 4,
    name: 'Débat Citoyen',
    time: '18:00 - 19:00',
    description: 'Discussions sur les enjeux sociétaux',
    host: 'Célestine ATANGANA',
    days: ['lundi', 'mercredi', 'vendredi']
  },
  {
    id: 6,
    name: 'Nuit Musicale',
    time: '22:00 - 06:00',
    description: 'Musiques douces pour la nuit',
    host: 'Playlist automatique',
    days: ['tous']
  }
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Jean-Paul MBARGA',
    role: 'Directeur & Animateur Principal',
    bio: '15 ans d\'expérience dans l\'audiovisuel',
    image: '/images/team/jean-paul.jpg',
    social: {
      facebook: '#',
      twitter: '#'
    }
  },
  {
    id: 2,
    name: 'Marie ONDOA',
    role: 'Journaliste & Présentatrice',
    bio: 'Spécialiste des questions sociales',
    image: '/images/team/marie.jpg',
    social: {
      facebook: '#',
      instagram: '#'
    }
  },
  {
    id: 3,
    name: 'Paul ESSOMBA',
    role: 'Technicien & Animateur',
    bio: 'Expert en technique audio',
    image: '/images/team/paul.jpg',
    social: {
      facebook: '#'
    }
  },
  {
    id: 4,
    name: 'Célestine ATANGANA',
    role: 'Animatrice & Productrice',
    bio: 'Passionnée de culture et d\'éducation',
    image: '/images/team/celestine.jpg',
    social: {
      facebook: '#',
      instagram: '#'
    }
  },
  {
    id: 5,
    name: 'Robert MFOU',
    role: 'Correspondant & Reporter',
    bio: 'Sur le terrain pour vous informer',
    image: '/images/team/robert.jpg',
    social: {
      facebook: '#'
    }
  }
];
