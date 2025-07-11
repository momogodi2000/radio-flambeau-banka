// src/pages/Partners.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Globe, 
  Award, 
  Heart, 
  ExternalLink, 
  Mail,
  MapPin,
  Calendar,
  Mic,
  Star,
  ArrowRight,
  Play,
  Building,
  Building2,
  Target,
  Zap,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Copy,
  X,
  Phone,
  Link,
  Send
} from 'lucide-react';

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // Close share menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showShareMenu && !event.target.closest('.share-menu-container')) {
        setShowShareMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showShareMenu]);

  // Close modal with Escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        if (selectedPartner) {
          setSelectedPartner(null);
        } else if (showShareMenu) {
          setShowShareMenu(null);
        }
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [selectedPartner, showShareMenu]);

  // Sharing functions
  const generateShareContent = (partner) => {
    const url = `${window.location.origin}/partners`;
    const title = `Découvrez ${partner.name} - Partenaire de Radio Flambeau-Banka`;
    const description = `${partner.description} - ${partner.role}`;
    
    return { url, title, description };
  };

  const shareOnFacebook = (partner) => {
    const { url, title } = generateShareContent(partner);
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const shareOnTwitter = (partner) => {
    const { url, title } = generateShareContent(partner);
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const shareOnLinkedIn = (partner) => {
    const { url, title, description } = generateShareContent(partner);
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const shareOnWhatsApp = (partner) => {
    const { url, title } = generateShareContent(partner);
    const message = `${title}\n\n${url}`;
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(shareUrl, '_blank');
  };

  const shareViaEmail = (partner) => {
    const { url, title, description } = generateShareContent(partner);
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(`${description}\n\nEn savoir plus : ${url}\n\nRadio Flambeau-Banka - Votre voix, votre communauté`);
    const mailtoUrl = `mailto:?subject=${subject}&body=${body}`;
    window.open(mailtoUrl);
  };

  const copyToClipboard = async (partner) => {
    const { url, title } = generateShareContent(partner);
    const textToCopy = `${title}\n${url}`;
    
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const ShareMenu = ({ partner, onClose }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="absolute top-12 right-0 bg-white rounded-xl shadow-xl border border-gray-200 p-4 z-50 w-64 share-menu-container"
    >
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-gray-800">Partager</h4>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={16} />
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => { shareOnFacebook(partner); onClose(); }}
          className="flex items-center space-x-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
        >
          <Facebook size={16} className="text-blue-600" />
          <span className="text-sm text-blue-600">Facebook</span>
        </button>
        
        <button
          onClick={() => { shareOnTwitter(partner); onClose(); }}
          className="flex items-center space-x-2 p-3 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors"
        >
          <Twitter size={16} className="text-sky-500" />
          <span className="text-sm text-sky-500">Twitter</span>
        </button>
        
        <button
          onClick={() => { shareOnLinkedIn(partner); onClose(); }}
          className="flex items-center space-x-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
        >
          <Linkedin size={16} className="text-blue-700" />
          <span className="text-sm text-blue-700">LinkedIn</span>
        </button>
        
        <button
          onClick={() => { shareOnWhatsApp(partner); onClose(); }}
          className="flex items-center space-x-2 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
        >
          <MessageCircle size={16} className="text-green-600" />
          <span className="text-sm text-green-600">WhatsApp</span>
        </button>
        
        <button
          onClick={() => { shareViaEmail(partner); onClose(); }}
          className="flex items-center space-x-2 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
        >
          <Mail size={16} className="text-purple-600" />
          <span className="text-sm text-purple-600">Email</span>
        </button>
        
        <button
          onClick={() => { copyToClipboard(partner); onClose(); }}
          className="flex items-center space-x-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Copy size={16} className="text-gray-600" />
          <span className="text-sm text-gray-600">Copier</span>
        </button>
      </div>
      
      {copySuccess && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 p-2 bg-green-100 text-green-700 text-sm rounded-lg text-center"
        >
          Copié dans le presse-papiers !
        </motion.div>
      )}
    </motion.div>
  );

  const mainPartners = [
    {
      id: 1,
      name: 'PROTEGE QV Association',
      fullName: "Promotion des Technologies Garantes de l'Environnement et de la Qualité de Vie",
      type: 'NGO',
      role: 'Partenaire Principal - Reconstruction & Innovation',
      description: "PROTEGE QV est l'organisation non gouvernementale qui a reconstruit et rénové Radio Flambeau-Banka, permettant sa renaissance technologique.",
      logo: '/images/partners/protege-qv-logo.png',
      image: '/images/partners/protege-qv.jpg',
      location: 'Rond Point Express Biyem-Assi, Derriere station Oilibya, Yaoundé, Cameroun',
      email: 'protegeqv96@gmail.com',
      website: 'https://protegeqv.org',
      color: 'from-green-500 to-emerald-600',
      achievements: [
        'Réhabilitation complète des équipements radio',
        'Formation du personnel à la production/diffusion',
        'Autonomisation des organisations féminines',
        'Création du projet "Voix de Femmes"'
      ],
      collaboration: {
        title: 'Projet "Voix de Femmes"',
        description: 'Depuis le 23 avril 2025, Radio Flambeau de Banka diffuse chaque mercredi à 18h00 sur 91.5 MHz l\'émission engagée "Voix de Femmes".',
        details: [
          'Diffusion hebdomadaire : Mercredi 18h00 sur 91.5 MHz',
          'Zone de couverture : Haut-Nkam',
          'Soutien international : WACC & APC',
          'Préparation par associations partenaires'
        ],
        impact: 'Autonomisation des femmes et valorisation de leurs voix dans les médias',
        youtube: 'https://www.youtube.com/watch?v=DSrdKNCNMBM'
      },
      stats: [
        { label: 'Années d\'expérience', value: '15+' },
        { label: 'Projets réalisés', value: '200+' },
        { label: 'Bénéficiaires', value: '50K+' },
        { label: 'Partenaires', value: '30+' }
      ]
    },
    {
      id: 2,
      name: 'Chef de Banka',
      fullName: 'Chefferie Traditionnelle de Banka',
      type: 'Traditional Authority',
      role: 'Autorité Traditionnelle & Soutien Communautaire',
      description: 'Le Chef de Banka représente l\'autorité traditionnelle locale et soutient activement les initiatives de développement communautaire.',
      logo: '/images/partners/chef-banka-logo.png',
      image: '/images/partners/chef-banka.jpg',
      location: 'Banka, Haut-Nkam, Cameroun',
      color: 'from-amber-500 to-orange-600',
      achievements: [
        'Soutien institutionnel à la radio',
        'Facilitation des relations communautaires',
        'Promotion des valeurs culturelles locales',
        'Médiation et résolution de conflits'
      ],
      collaboration: {
        title: 'Soutien Institutionnel',
        description: 'Le Chef de Banka facilite l\'intégration de la radio dans le tissu social local et garantit le respect des traditions.',
        details: [
          'Bénédiction officielle du projet',
          'Facilitation des relations communautaires',
          'Promotion des programmes culturels',
          'Médiation avec les autorités locales'
        ],
        impact: 'Légitimité culturelle et acceptation communautaire'
      },
      stats: [
        { label: 'Communautés', value: '25+' },
        { label: 'Population', value: '150K+' },
        { label: 'Traditions préservées', value: '50+' },
        { label: 'Événements culturels', value: '100+/an' }
      ]
    },
    {
      id: 3,
      name: 'Gouvernement Local de Banka',
      fullName: 'Administration Communale de Banka',
      type: 'Local Government',
      role: 'Administration Locale & Régulation',
      description: 'L\'administration communale de Banka fournit le cadre légal et administratif nécessaire au fonctionnement de la radio.',
      logo: '/images/partners/gov-banka-logo.png',
      image: '/images/partners/gov-banka.jpg',
      location: 'Mairie de Banka, Haut-Nkam, Cameroun',
      color: 'from-blue-500 to-indigo-600',
      achievements: [
        'Autorisation de diffusion',
        'Soutien logistique et administratif',
        'Facilitation des démarches légales',
        'Promotion du développement local'
      ],
      collaboration: {
        title: 'Soutien Administratif',
        description: 'Le gouvernement local facilite toutes les démarches administratives et fournit un cadre légal stable.',
        details: [
          'Délivrance des autorisations',
          'Soutien logistique',
          'Facilitation des partenariats',
          'Promotion du projet'
        ],
        impact: 'Cadre légal stable et soutien institutionnel'
      },
      stats: [
        { label: 'Services offerts', value: '50+' },
        { label: 'Citoyens servis', value: '200K+' },
        { label: 'Projets soutenus', value: '100+' },
        { label: 'Partenariats actifs', value: '25+' }
      ]
    },
    {
      id: 4,
      name: 'Communauté des Affaires Locale',
      fullName: 'Association des Commerçants et Entrepreneurs de Banka',
      type: 'Business Community',
      role: 'Soutien Économique & Sponsoring',
      description: 'La communauté des affaires locale soutient Radio Flambeau-Banka à travers des partenariats commerciaux et du sponsoring.',
      logo: '/images/partners/business-logo.png',
      image: '/images/partners/business-community.jpg',
      location: 'Banka, Haut-Nkam, Cameroun',
      color: 'from-purple-500 to-pink-600',
      achievements: [
        'Financement de programmes spéciaux',
        'Sponsoring d\'émissions',
        'Promotion des entreprises locales',
        'Création d\'opportunités économiques'
      ],
      collaboration: {
        title: 'Partenariat Commercial',
        description: 'Les entreprises locales sponsorisent des émissions et bénéficient d\'une plateforme de promotion.',
        details: [
          'Sponsoring d\'émissions',
          'Publicités et promotions',
          'Événements commerciaux',
          'Formation entrepreneuriale'
        ],
        impact: 'Développement économique local et autonomie financière'
      },
      stats: [
        { label: 'Entreprises partenaires', value: '75+' },
        { label: 'Emplois créés', value: '500+' },
        { label: 'Chiffre d\'affaires', value: '2M+' },
        { label: 'Événements sponsorisés', value: '50+/an' }
      ]
    }
  ];

  const supportingPartners = [
    {
      name: 'WACC',
      fullName: 'World Association for Christian Communication',
      description: 'Soutien international pour le projet "Voix de Femmes"',
      type: 'International NGO',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'APC',
      fullName: 'Association for Progressive Communication',
      description: 'Support technique et communication',
      type: 'International NGO',
      color: 'from-teal-400 to-teal-600'
    },
    {
      name: 'Femmes Générales Tchonte Zemekam',
      description: 'Association partenaire pour les émissions féminines',
      type: 'Women\'s Association',
      color: 'from-pink-400 to-pink-600'
    },
    {
      name: 'Mutuelle des Amies',
      description: 'Coopérative féminine partenaire',
      type: 'Cooperative',
      color: 'from-purple-400 to-purple-600'
    },
    {
      name: 'AFERES',
      description: 'Association féminine de développement rural',
      type: 'Rural Development',
      color: 'from-green-400 to-green-600'
    },
    {
      name: 'ADEABA',
      description: 'Association de développement et d\'entraide',
      type: 'Development Association',
      color: 'from-orange-400 to-orange-600'
    },
    {
      name: 'Etoiles Banka',
      description: 'Association culturelle et artistique',
      type: 'Cultural Association',
      color: 'from-yellow-400 to-yellow-600'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Nos Partenaires - Radio Flambeau-Banka</title>
        <meta name="description" content="Découvrez nos partenaires : PROTEGE QV Association, Chef de Banka, gouvernement local et communauté des affaires. Ensemble pour le développement de Banka." />
        <meta name="keywords" content="partenaires radio flambeau banka, PROTEGE QV, chef banka, voix de femmes, partenariat radio cameroun" />
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-gray-900" ref={ref}>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br [--tw-gradient-from:#2563eb] [--tw-gradient-via:#9333ea] [--tw-gradient-to:#db2777] text-white py-20 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900 dark:to-gray-800">
          <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Nos Partenaires
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 dark:text-purple-200">
                Découvrez les organisations et entreprises qui soutiennent Radio Flambeau-Banka
              </p>
              <div className="w-24 h-1 bg-white dark:bg-purple-400 mx-auto rounded-full"></div>
            </motion.div>
          </div>
        </section>

        {/* Main Partners */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-4 [--tw-gradient-from:#2563eb] [--tw-gradient-to:#7c3aed]">
                Partenaires Principaux
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ces organisations sont au cœur de notre mission et contribuent directement au succès de Radio Flambeau-Banka.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {mainPartners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className={`h-2 bg-gradient-to-r ${partner.color}`}></div>
                  
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${partner.color} rounded-full flex items-center justify-center`}>
                          <Building size={32} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">{partner.name}</h3>
                          <p className="text-gray-600">{partner.type}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2 relative share-menu-container">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowShareMenu(showShareMenu === partner.id ? null : partner.id);
                          }}
                          className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
                        >
                          <Share2 size={20} />
                        </button>
                        <button
                          onClick={() => setSelectedPartner(partner)}
                          className="bg-blue-100 hover:bg-blue-200 p-2 rounded-full transition-colors"
                        >
                          <ExternalLink size={20} className="text-blue-600" />
                        </button>
                        
                        <AnimatePresence>
                          {showShareMenu === partner.id && (
                            <ShareMenu 
                              partner={partner} 
                              onClose={() => setShowShareMenu(null)} 
                            />
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className={`inline-block bg-gradient-to-r ${partner.color} text-white px-4 py-2 rounded-full text-sm font-medium mb-4`}>
                        {partner.role}
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {partner.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {partner.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">Principales réalisations :</h4>
                      {partner.achievements.slice(0, 2).map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center space-x-2">
                          <Star size={16} className="text-yellow-500" />
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      ))}
                      {partner.achievements.length > 2 && (
                        <button
                          onClick={() => setSelectedPartner(partner)}
                          className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
                        >
                          <span>Voir plus</span>
                          <ArrowRight size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Voix de Femmes Highlight */}
        <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Projet "Voix de Femmes"
              </h2>
              <p className="text-xl max-w-3xl mx-auto">
                La voix des femmes enfin sur les ondes ! Un projet révolutionnaire soutenu par nos partenaires.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mic size={32} className="text-white" />
                    <div>
                      <h3 className="text-2xl font-bold">Diffusion Hebdomadaire</h3>
                      <p className="text-pink-100">Mercredi 18h00 sur 91.5 MHz</p>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6">
                    <h4 className="text-xl font-semibold mb-4">Objectifs du projet :</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <Target size={16} />
                        <span>Autonomisation des organisations féminines</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Zap size={16} />
                        <span>Formation à la production radio</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Heart size={16} />
                        <span>Valorisation des voix féminines</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="https://www.youtube.com/watch?v=DSrdKNCNMBM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                  >
                    <Play size={20} />
                    <span>Voir l'extrait YouTube</span>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/10 rounded-2xl p-8"
              >
                <h4 className="text-2xl font-bold mb-6">Associations Participantes</h4>
                <div className="grid grid-cols-1 gap-4">
                  {supportingPartners.slice(2).map((partner, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
                      <div className={`w-8 h-8 bg-gradient-to-r ${partner.color} rounded-full flex items-center justify-center`}>
                        <Users size={16} className="text-white" />
                      </div>
                      <div>
                        <h5 className="font-medium">{partner.name}</h5>
                        <p className="text-sm text-pink-100">{partner.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Supporting Partners */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Partenaires de Soutien
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ces organisations contribuent à nos projets spéciaux et enrichissent notre programmation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportingPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${partner.color} rounded-full flex items-center justify-center mb-4`}>
                    <Building2 size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{partner.name}</h3>
                  {partner.fullName && (
                    <p className="text-sm text-gray-500 mb-2">{partner.fullName}</p>
                  )}
                  <p className="text-gray-600">{partner.description}</p>
                  <div className={`inline-block mt-3 bg-gradient-to-r ${partner.color} text-white px-3 py-1 rounded-full text-xs`}>
                    {partner.type}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Devenez notre partenaire
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Rejoignez notre réseau de partenaires et contribuez au développement de la radio communautaire de Banka.
              </p>
              <a
                href="mailto:radoiflambeaubanka@gmail.com?subject=Partenariat Radio Flambeau-Banka"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                <Mail size={20} />
                <span>Contactez-nous</span>
              </a>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Enhanced Partner Detail Modal */}
      <AnimatePresence>
        {selectedPartner && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedPartner(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`bg-gradient-to-r ${selectedPartner.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Building size={40} className="text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold mb-1">{selectedPartner.name}</h2>
                        <p className="text-xl opacity-90">{selectedPartner.fullName}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                            {selectedPartner.type}
                          </span>
                          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                            {selectedPartner.role}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <div className="relative share-menu-container">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowShareMenu(showShareMenu === 'modal' ? null : 'modal');
                          }}
                          className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors backdrop-blur-sm"
                        >
                          <Share2 size={20} />
                        </button>
                        
                        <AnimatePresence>
                          {showShareMenu === 'modal' && (
                            <ShareMenu 
                              partner={selectedPartner} 
                              onClose={() => setShowShareMenu(null)} 
                            />
                          )}
                        </AnimatePresence>
                      </div>
                      
                      <button
                        onClick={() => setSelectedPartner(null)}
                        className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors backdrop-blur-sm"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Modal Content */}
              <div className="max-h-[calc(90vh-200px)] overflow-y-auto">
                <div className="p-8">
                  {/* Description Section */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">À propos</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {selectedPartner.description}
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Informations de contact</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center space-x-3">
                          <MapPin size={20} className="text-gray-600" />
                          <div>
                            <p className="font-medium text-gray-800">Adresse</p>
                            <p className="text-gray-600">{selectedPartner.location}</p>
                          </div>
                        </div>
                      </div>
                      
                      {selectedPartner.email && (
                        <div className="bg-gray-50 rounded-xl p-4">
                          <div className="flex items-center space-x-3">
                            <Mail size={20} className="text-gray-600" />
                            <div>
                              <p className="font-medium text-gray-800">Email</p>
                              <a 
                                href={`mailto:${selectedPartner.email}`} 
                                className="text-blue-600 hover:text-blue-700 transition-colors"
                              >
                                {selectedPartner.email}
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {selectedPartner.website && (
                        <div className="bg-gray-50 rounded-xl p-4">
                          <div className="flex items-center space-x-3">
                            <Globe size={20} className="text-gray-600" />
                            <div>
                              <p className="font-medium text-gray-800">Site web</p>
                              <a 
                                href={selectedPartner.website} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-600 hover:text-blue-700 transition-colors flex items-center space-x-1"
                              >
                                <span>{selectedPartner.website}</span>
                                <ExternalLink size={14} />
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Statistics */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Statistiques clés</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {selectedPartner.stats.map((stat, index) => (
                        <div key={index} className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                          <div className={`text-3xl font-bold bg-gradient-to-r ${selectedPartner.color} bg-clip-text text-transparent`}>
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Réalisations principales</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedPartner.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                          <Star size={20} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Collaboration Details */}
                  {selectedPartner.collaboration && (
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedPartner.collaboration.title}</h3>
                      <div className={`bg-gradient-to-br ${selectedPartner.color} p-6 rounded-2xl text-white mb-6`}>
                        <p className="text-lg leading-relaxed mb-4">{selectedPartner.collaboration.description}</p>
                        <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                          <h4 className="font-semibold mb-3">Impact du projet :</h4>
                          <p className="opacity-90">{selectedPartner.collaboration.impact}</p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Détails de la collaboration :</h4>
                          <div className="space-y-3">
                            {selectedPartner.collaboration.details.map((detail, index) => (
                              <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                                <ArrowRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {selectedPartner.collaboration.youtube && (
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Ressources multimédia :</h4>
                            <a
                              href={selectedPartner.collaboration.youtube}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block bg-red-50 hover:bg-red-100 border border-red-200 rounded-xl p-4 transition-colors group"
                            >
                              <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                                  <Play size={20} className="text-white" />
                                </div>
                                <div>
                                  <p className="font-medium text-red-700">Voir l'extrait YouTube</p>
                                  <p className="text-sm text-red-600">Découvrez le projet en vidéo</p>
                                </div>
                                <ExternalLink size={16} className="text-red-500 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Call to Action */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 text-center">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Collaborer avec {selectedPartner.name}</h4>
                    <p className="text-gray-600 mb-4">
                      Intéressé par un partenariat ? Contactez-nous pour explorer les opportunités de collaboration.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href="mailto:radoiflambeaubanka@gmail.com?subject=Partenariat avec Radio Flambeau-Banka"
                        className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                      >
                        <Mail size={16} />
                        <span>Nous contacter</span>
                      </a>
                      <a
                        href="https://wa.me/237696044661"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
                      >
                        <MessageCircle size={16} />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Partners;