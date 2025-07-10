// src/components/Sections/Team.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  User, 
  Mic, 
  Radio, 
  Users, 
  Facebook, 
  Twitter, 
  Instagram,
  Award,
  Calendar,
  MapPin
} from 'lucide-react';

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const teamMembers = [
    {
      id: 1,
      name: 'Jean-Paul MBARGA',
      role: 'Directeur & Animateur Principal',
      bio: '15 ans d\'expérience dans l\'audiovisuel et la communication. Passionné par le développement communautaire.',
      experience: '15 ans',
      speciality: 'Animation, Management',
      shows: ['Réveil Matinal', 'Émissions Spéciales'],
      image: '/images/team/jean-paul.jpg',
      gradient: 'from-blue-500 to-indigo-600',
      social: {
        facebook: '#',
        twitter: '#'
      }
    },
    {
      id: 2,
      name: 'Marie ONDOA',
      role: 'Journaliste & Présentatrice',
      bio: 'Spécialiste des questions sociales et culturelles. Diplômée en journalisme et communication.',
      experience: '8 ans',
      speciality: 'Journalisme, Actualités',
      shows: ['Journal Parlé', 'Magazine Culturel'],
      image: '/images/team/marie.jpg',
      gradient: 'from-purple-500 to-pink-600',
      social: {
        facebook: '#',
        instagram: '#'
      }
    },
    {
      id: 3,
      name: 'Paul ESSOMBA',
      role: 'Technicien & Animateur',
      bio: 'Expert en technique audio et animation musicale. Garant de la qualité sonore de nos émissions.',
      experience: '10 ans',
      speciality: 'Technique Audio, Animation',
      shows: ['Variétés Africaines', 'Nuit Musicale'],
      image: '/images/team/paul.jpg',
      gradient: 'from-green-500 to-emerald-600',
      social: {
        facebook: '#'
      }
    },
    {
      id: 4,
      name: 'Célestine ATANGANA',
      role: 'Animatrice & Productrice',
      bio: 'Passionnée de culture et d\'éducation. Créatrice de contenus éducatifs et culturels.',
      experience: '6 ans',
      speciality: 'Production, Éducation',
      shows: ['Débat Citoyen', 'Émissions Éducatives'],
      image: '/images/team/celestine.jpg',
      gradient: 'from-orange-500 to-red-600',
      social: {
        facebook: '#',
        instagram: '#'
      }
    },
    {
      id: 5,
      name: 'Robert MFOU',
      role: 'Correspondant & Reporter',
      bio: 'Sur le terrain pour vous informer. Spécialiste du reportage et de l\'investigation.',
      experience: '12 ans',
      speciality: 'Reportage, Investigation',
      shows: ['Terrain Direct', 'Actualités Locales'],
      image: '/images/team/robert.jpg',
      gradient: 'from-teal-500 to-blue-600',
      social: {
        facebook: '#'
      }
    },
    {
      id: 6,
      name: 'Équipe Bénévole',
      role: 'Collaborateurs & Invités',
      bio: 'Une communauté engagée de bénévoles qui contribuent à la richesse de nos programmes.',
      experience: 'Variable',
      speciality: 'Polyvalence, Engagement',
      shows: ['Tous les programmes'],
      image: '/images/team/benevoles.jpg',
      gradient: 'from-indigo-500 to-purple-600',
      social: {
        facebook: '#',
        instagram: '#'
      }
    }
  ];
  
  const stats = [
    { icon: Users, value: '6+', label: 'Membres de l\'équipe' },
    { icon: Mic, value: '15+', label: 'Heures d\'antenne quotidiennes' },
    { icon: Award, value: '10+', label: 'Années d\'expérience' },
    { icon: Radio, value: '24/7', label: 'Service continu' }
  ];
  
  return (
    <section id="equipe" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Notre Équipe
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Les voix passionnées qui font vivre Radio Flambeau-Banka
          </p>
        </motion.div>
        
        {/* Statistiques de l'équipe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon size={24} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
        
        {/* Grille des membres */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image et gradient */}
              <div className={`relative h-48 bg-gradient-to-br ${member.gradient} p-6 flex items-center justify-center`}>
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <User size={48} className="text-white" />
                </div>
                
                {/* Overlay social */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
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
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                
                {/* Détails */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-500">
                    <Calendar size={14} className="mr-2" />
                    <span>Expérience: {member.experience}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Award size={14} className="mr-2" />
                    <span>Spécialité: {member.speciality}</span>
                  </div>
                  <div className="flex items-start text-gray-500">
                    <Mic size={14} className="mr-2 mt-1 flex-shrink-0" />
                    <span>Émissions: {member.shows.join(', ')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Appel à l'action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Rejoignez notre équipe !
            </h3>
            <p className="text-gray-600 mb-6">
              Vous êtes passionné par la radio et souhaitez contribuer à notre mission ? 
              Nous recherchons toujours des bénévoles motivés.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Nous contacter
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
