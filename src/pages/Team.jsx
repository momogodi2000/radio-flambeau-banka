// src/pages/Team.jsx
import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import { 
  User, 
  Mic, 
  Calendar, 
  Award, 
  Mail, 
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Star,
  Users,
  Briefcase,
  Heart
} from 'lucide-react';

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [selectedMember, setSelectedMember] = useState(null);
  
  const teamMembers = [
    {
      id: 1,
      name: 'Jean-Paul MBARGA',
      role: 'Directeur & Animateur Principal',
      bio: 'Fondateur et directeur de Radio Flambeau-Banka, Jean-Paul possède plus de 15 ans d\'expérience dans l\'audiovisuel. Passionné par le développement communautaire, il a transformé une petite radio locale en une plateforme internationale.',
      experience: '15 ans',
      speciality: 'Animation, Management, Stratégie',
      shows: ['Réveil Matinal', 'Émissions Spéciales', 'Conférences'],
      achievements: ['Prix du Meilleur Animateur 2020', 'Certification en Management Médiatique', 'Membre du Conseil National des Radios'],
      education: 'Master en Communication, Université de Yaoundé',
      hobbies: ['Football', 'Lecture', 'Voyage'],
      quote: 'La radio est un pont entre les cœurs, peu importe la distance.',
      image: '/images/team/jean-paul.jpg',
      gradient: 'from-blue-500 to-indigo-600',
      social: {
        facebook: 'https://facebook.com/jeanpaul.mbarga',
        twitter: 'https://twitter.com/jpmbargaradio',
        email: 'jeanpaul@radioflambeaubanka.com'
      },
      contact: {
        phone: '+237 6XX XXX XX1',
        email: 'jeanpaul@radioflambeaubanka.com'
      }
    },
    {
      id: 2,
      name: 'Marie ONDOA',
      role: 'Journaliste & Présentatrice',
      bio: 'Journaliste diplômée avec 8 ans d\'expérience, Marie est reconnue pour son professionnalisme et son engagement. Elle couvre les questions sociales, culturelles et économiques avec une approche humaine et accessible.',
      experience: '8 ans',
      speciality: 'Journalisme, Actualités, Investigations',
      shows: ['Journal Parlé', 'Magazine Culturel', 'Interviews Exclusives'],
      achievements: ['Prix du Meilleur Reportage 2022', 'Certification en Journalisme Digital', 'Membre de l\'Association des Journalistes'],
      education: 'Licence en Journalisme, ESSTIC Yaoundé',
      hobbies: ['Photographie', 'Cuisine', 'Théâtre'],
      quote: 'Informer avec vérité, c\'est servir la démocratie.',
      image: '/images/team/marie.jpg',
      gradient: 'from-purple-500 to-pink-600',
      social: {
        facebook: 'https://facebook.com/marie.ondoa',
        instagram: 'https://instagram.com/marie_ondoa_radio',
        email: 'marie@radioflambeaubanka.com'
      },
      contact: {
        phone: '+237 6XX XXX XX2',
        email: 'marie@radioflambeaubanka.com'
      }
    },
    {
      id: 3,
      name: 'Paul ESSOMBA',
      role: 'Technicien & Animateur',
      bio: 'Expert en technique audio avec 10 ans d\'expérience, Paul garantit la qualité sonore exceptionnelle de nos émissions. Il maîtrise parfaitement les dernières technologies de diffusion et forme notre équipe technique.',
      experience: '10 ans',
      speciality: 'Technique Audio, Animation Musicale, Formation',
      shows: ['Variétés Africaines', 'Nuit Musicale', 'Sessions Acoustiques'],
      achievements: ['Certification Pro Tools', 'Formation en Streaming Digital', 'Expert en Acoustique Studio'],
      education: 'BTS en Audiovisuel, Institut Supérieur de Technologie',
      hobbies: ['Musique', 'Technologie', 'Randonnée'],
      quote: 'La qualité audio parfaite, c\'est l\'âme de la radio.',
      image: '/images/team/paul.jpg',
      gradient: 'from-green-500 to-emerald-600',
      social: {
        facebook: 'https://facebook.com/paul.essomba',
        email: 'paul@radioflambeaubanka.com'
      },
      contact: {
        phone: '+237 6XX XXX XX3',
        email: 'paul@radioflambeaubanka.com'
      }
    },
    {
      id: 4,
      name: 'Célestine ATANGANA',
      role: 'Animatrice & Productrice',
      bio: 'Passionnée de culture et d\'éducation, Célestine développe des contenus innovants qui touchent le cœur de nos auditeurs. Elle est particulièrement reconnue pour ses émissions dédiées aux femmes et aux jeunes.',
      experience: '6 ans',
      speciality: 'Production, Éducation, Animation Culturelle',
      shows: ['Débat Citoyen', 'Femmes d\'Impact', 'Émissions Éducatives'],
      achievements: ['Prix de l\'Innovation Médiatique 2023', 'Certification en Production Audiovisuelle', 'Ambassadrice Jeunesse'],
      education: 'Master en Sciences de l\'Éducation, Université de Douala',
      hobbies: ['Danse', 'Littérature', 'Bénévolat'],
      quote: 'Éduquer et inspirer, c\'est transformer l\'avenir.',
      image: '/images/team/celestine.jpg',
      gradient: 'from-orange-500 to-red-600',
      social: {
        facebook: 'https://facebook.com/celestine.atangana',
        instagram: 'https://instagram.com/celestine_radio',
        email: 'celestine@radioflambeaubanka.com'
      },
      contact: {
        phone: '+237 6XX XXX XX4',
        email: 'celestine@radioflambeaubanka.com'
      }
    },
    {
      id: 5,
      name: 'Robert MFOU',
      role: 'Correspondant & Reporter',
      bio: 'Reporter de terrain avec 12 ans d\'expérience, Robert nous apporte l\'actualité en direct des événements. Sa connaissance approfondie de la région et ses contacts lui permettent de couvrir les sujets les plus importants.',
      experience: '12 ans',
      speciality: 'Reportage, Investigation, Correspondance',
      shows: ['Terrain Direct', 'Actualités Locales', 'Enquêtes Spéciales'],
      achievements: ['Prix du Meilleur Reporter Régional 2021', 'Certification en Journalisme d\'Investigation', 'Réseau de Correspondants'],
      education: 'Licence en Communication, Université de Bamenda',
      hobbies: ['Voyage', 'Agriculture', 'Sport'],
      quote: 'Sur le terrain, la vérité prend vie.',
      image: '/images/team/robert.jpg',
      gradient: 'from-teal-500 to-blue-600',
      social: {
        facebook: 'https://facebook.com/robert.mfou',
        email: 'robert@radioflambeaubanka.com'
      },
      contact: {
        phone: '+237 6XX XXX XX5',
        email: 'robert@radioflambeaubanka.com'
      }
    },
    {
      id: 6,
      name: 'Équipe Bénévole',
      role: 'Collaborateurs & Invités',
      bio: 'Notre équipe de bénévoles dévoués contribue quotidiennement à la richesse de nos programmes. Composée d\'experts, d\'artistes et de passionnés, elle apporte diversité et expertise à notre antenne.',
      experience: 'Variable',
      speciality: 'Polyvalence, Engagement, Passion',
      shows: ['Tous les programmes', 'Émissions spéciales', 'Événements'],
      achievements: ['Plus de 50 bénévoles actifs', 'Formations continues', 'Réseau communautaire étendu'],
      education: 'Profils variés et complémentaires',
      hobbies: ['Engagement social', 'Arts', 'Éducation'],
      quote: 'Ensemble, nous faisons la différence.',
      image: '/images/team/benevoles.jpg',
      gradient: 'from-indigo-500 to-purple-600',
      social: {
        facebook: 'https://facebook.com/radioflambeaubanka',
        instagram: 'https://instagram.com/radioflambeaubanka',
        email: 'benevoles@radioflambeaubanka.com'
      },
      contact: {
        phone: '+237 6XX XXX XX0',
        email: 'benevoles@radioflambeaubanka.com'
      }
    }
  ];
  
  const stats = [
    { icon: Users, value: '15+', label: 'Membres d\'équipe' },
    { icon: Mic, value: '50+', label: 'Heures d\'antenne/semaine' },
    { icon: Award, value: '10+', label: 'Prix et reconnaissances' },
    { icon: Calendar, value: '10+', label: 'Années d\'expérience moyenne' }
  ];
  
  return (
    <>
      <Helmet>
        <title>Équipe - Radio Flambeau-Banka</title>
        <meta name="description" content="Rencontrez l'équipe passionnée de Radio Flambeau-Banka : animateurs, journalistes, techniciens et bénévoles qui font vivre la radio." />
        <meta name="keywords" content="équipe, animateurs, journalistes, techniciens, bénévoles, radio, Cameroun" />
        <meta property="og:title" content="Équipe - Radio Flambeau-Banka" />
        <meta property="og:description" content="Rencontrez l'équipe passionnée de Radio Flambeau-Banka." />
        <meta property="og:url" content="https://www.radioflambeaubanka.com/team" />
        <link rel="canonical" href="https://www.radioflambeaubanka.com/team" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50" ref={ref}>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Notre Équipe
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Les voix passionnées qui font vivre Radio Flambeau-Banka
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Heart size={16} />
                  <span>15+ talents</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star size={16} />
                  <span>Excellence reconnue</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users size={16} />
                  <span>Équipe unie</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Statistiques */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon size={32} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Grille des membres */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedMember(member)}
                >
                  {/* Header avec gradient */}
                  <div className={`relative h-48 bg-gradient-to-br ${member.gradient} p-6 flex items-center justify-center`}>
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <User size={48} className="text-white" />
                    </div>
                    
                    {/* Overlay social */}
                    <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {member.social.facebook && (
                        <a href={member.social.facebook} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <Facebook size={16} />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <Twitter size={16} />
                        </a>
                      )}
                      {member.social.instagram && (
                        <a href={member.social.instagram} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <Instagram size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Contenu */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>
                    
                    {/* Détails rapides */}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-500">
                        <Calendar size={14} className="mr-2" />
                        <span>Exp: {member.experience}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Briefcase size={14} className="mr-2" />
                        <span className="truncate">{member.speciality}</span>
                      </div>
                    </div>
                    
                    {/* Bouton voir plus */}
                    <button className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors text-sm font-medium">
                      Voir le profil complet
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Modal profil détaillé */}
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`relative h-48 bg-gradient-to-br ${selectedMember.gradient} p-6`}>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  ×
                </button>
                
                <div className="flex items-center space-x-4 text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <User size={40} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{selectedMember.name}</h2>
                    <p className="text-blue-100">{selectedMember.role}</p>
                  </div>
                </div>
              </div>
              
              {/* Contenu détaillé */}
              <div className="p-6 space-y-6">
                {/* Citation */}
                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-blue-800 italic">"{selectedMember.quote}"</p>
                </div>
                
                {/* Biographie */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Biographie</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedMember.bio}</p>
                </div>
                
                {/* Détails professionnels */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Expérience</h4>
                    <p className="text-gray-600">{selectedMember.experience}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Spécialités</h4>
                    <p className="text-gray-600">{selectedMember.speciality}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Formation</h4>
                    <p className="text-gray-600">{selectedMember.education}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Loisirs</h4>
                    <p className="text-gray-600">{selectedMember.hobbies.join(', ')}</p>
                  </div>
                </div>
                
                {/* Émissions */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Émissions</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.shows.map((show, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {show}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Récompenses */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Récompenses & Certifications</h4>
                  <ul className="space-y-1">
                    {selectedMember.achievements.map((achievement, index) => (
                      <li key={index} className="text-gray-600 text-sm flex items-start">
                        <Award size={14} className="mr-2 mt-1 text-yellow-500 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Contact */}
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-3">Contact</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Mail size={16} className="mr-2" />
                      <a href={`mailto:${selectedMember.contact.email}`} className="hover:text-blue-600 transition-colors">
                        {selectedMember.contact.email}
                      </a>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone size={16} className="mr-2" />
                      <span>{selectedMember.contact.phone}</span>
                    </div>
                  </div>
                </div>
                
                {/* Réseaux sociaux */}
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">Suivez-moi :</span>
                  {selectedMember.social.facebook && (
                    <a href={selectedMember.social.facebook} className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                      <Facebook size={16} />
                    </a>
                  )}
                  {selectedMember.social.twitter && (
                    <a href={selectedMember.social.twitter} className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors">
                      <Twitter size={16} />
                    </a>
                  )}
                  {selectedMember.social.instagram && (
                    <a href={selectedMember.social.instagram} className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
                      <Instagram size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        
        {/* CTA Rejoindre */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Rejoignez notre équipe !
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Vous êtes passionné par la radio et souhaitez contribuer à notre mission ? 
                Nous recherchons toujours des talents motivés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Postuler maintenant
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Devenir bénévole
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Team;