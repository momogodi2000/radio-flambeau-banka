// src/pages/Partners.jsx
import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
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
  Handshake,
  Target,
  Zap
} from 'lucide-react';

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [selectedPartner, setSelectedPartner] = useState(null);

  const mainPartners = [
    {
      id: 1,
      name: 'PROTEGE QV Association',
      fullName: 'Promotion des Technologies Garantes de l'Environnement et de la Qualité de Vie',
      type: 'NGO',
      role: 'Partenaire Principal - Reconstruction & Innovation',
      description: 'PROTEGE QV est l\'organisation non gouvernementale qui a reconstruit et rénové Radio Flambeau-Banka, permettant sa renaissance technologique.',
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

      <div ref={ref} className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Nos Partenaires
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Ensemble, nous construisons l'avenir de Radio Flambeau-Banka et développons notre communauté.
              </p>
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
                      <button
                        onClick={() => setSelectedPartner(partner)}
                        className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
                      >
                        <ExternalLink size={20} />
                      </button>
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
                    <Handshake size={24} className="text-white" />
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

      {/* Partner Detail Modal */}
      {selectedPartner && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPartner(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-4 bg-gradient-to-r ${selectedPartner.color}`}></div>
            <div className="p-8">
              <button
                onClick={() => setSelectedPartner(null)}
                className="float-right text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedPartner.name}</h2>
                <p className="text-xl text-gray-600 mb-4">{selectedPartner.fullName}</p>
                <div className={`inline-block bg-gradient-to-r ${selectedPartner.color} text-white px-4 py-2 rounded-full`}>
                  {selectedPartner.role}
                </div>
              </div>

              {selectedPartner.collaboration && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedPartner.collaboration.title}</h3>
                  <p className="text-gray-700 mb-4">{selectedPartner.collaboration.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Détails de la collaboration :</h4>
                      <ul className="space-y-2">
                        {selectedPartner.collaboration.details.map((detail, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <ArrowRight size={16} className="text-blue-500" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Impact :</h4>
                      <p className="text-gray-700">{selectedPartner.collaboration.impact}</p>
                      
                      {selectedPartner.collaboration.youtube && (
                        <a
                          href={selectedPartner.collaboration.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                        >
                          <Play size={16} />
                          <span>Voir sur YouTube</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h4 className="font-semibold text-gray-800 mb-4">Toutes les réalisations :</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedPartner.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Star size={16} className="text-yellow-500" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedPartner.email && (
                <div className="flex items-center space-x-4 text-gray-600">
                  <Mail size={16} />
                  <a href={`mailto:${selectedPartner.email}`} className="hover:text-blue-600">
                    {selectedPartner.email}
                  </a>
                  {selectedPartner.website && (
                    <>
                      <Globe size={16} />
                      <a href={selectedPartner.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        {selectedPartner.website}
                      </a>
                    </>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Partners;