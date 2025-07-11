// src/pages/Partners.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
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
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // Main partners data
  const mainPartners = [
    {
      id: 1,
      name: 'PROTEGE QV Association',
      fullName: "Promotion des Technologies Garantes de l'Environnement et de la Qualité de Vie",
      type: 'NGO',
      role: 'Partenaire Principal - Reconstruction & Innovation',
      description: "PROTEGE QV est l'organisation non gouvernementale qui a reconstruit et rénové Radio Flambeau-Banka, permettant sa renaissance technologique.",
      logo: '/images/protege.jpg',
      image: '/images/protege.jpg',
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
        impact: 'Autonomisation des femmes et valorisation de leurs voix dans les médias'
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
      logo: '/images/team/jean-paul.jpg',
      image: '/images/team/jean-paul.jpg',
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
      logo: '/images/team/marie.jpg',
      image: '/images/team/marie.jpg',
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
      logo: '/images/team/paul.jpg',
      image: '/images/team/paul.jpg',
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
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-600 to-purple-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Nos Partenaires
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">
                Découvrez les organisations et entreprises qui soutiennent Radio Flambeau-Banka
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Partners */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Partenaires Principaux
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ces organisations sont au cœur de notre mission et contribuent directement au succès de Radio Flambeau-Banka.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {mainPartners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className={`h-48 bg-gradient-to-r ${partner.color} relative`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-2xl font-bold mb-2">{partner.name}</h3>
                        <p className="text-white/90">{partner.role}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
                        {partner.type}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin size={14} className="mr-1" />
                        <span>{partner.location}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {partner.fullName}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      {partner.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Réalisations principales :</h4>
                      <ul className="space-y-2">
                        {partner.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {partner.stats.map((stat, idx) => (
                        <div key={idx} className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                          <div className="text-xs text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      {partner.email && (
                        <a
                          href={`mailto:${partner.email}`}
                          className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                        >
                          <Mail size={16} className="mr-2" />
                          Contact
                        </a>
                      )}
                      
                      {partner.website && (
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors text-sm"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Site web
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Supporting Partners */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Partenaires de Soutien
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ces organisations nous soutiennent dans nos initiatives et projets communautaires.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportingPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${partner.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Building size={24} className="text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {partner.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-3">
                    {partner.fullName}
                  </p>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {partner.description}
                  </p>
                  
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
                    {partner.type}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Devenez Partenaire
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Rejoignez notre réseau de partenaires et contribuez au développement de Radio Flambeau-Banka
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Mail size={20} className="mr-2" />
                  Nous Contacter
                </a>
                
                <a
                  href="mailto:partenariats@radioflambeaubanka.com"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  <Send size={20} className="mr-2" />
                  Proposer un partenariat
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Partners;