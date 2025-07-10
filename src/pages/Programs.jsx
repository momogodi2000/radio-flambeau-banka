
// src/pages/Programs.jsx
import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import { 
  Clock, 
  Calendar, 
  Users, 
  Play, 
  Mic, 
  Filter,
  Search,
  Heart,
  MessageCircle,
  Music
} from 'lucide-react';

const Programs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [selectedDay, setSelectedDay] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const days = ['all', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
  const categories = ['all', 'actualités', 'musique', 'culture', 'éducation', 'divertissement'];
  
  const programs = [
    {
      id: 1,
      title: 'Réveil Matinal',
      host: 'Jean-Paul MBARGA',
      time: '06:00 - 09:00',
      category: 'actualités',
      days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'],
      description: 'Commencez votre journée avec les dernières actualités, la météo et une sélection musicale énergisante.',
      image: '/images/programs/reveil-matinal.jpg',
      color: 'from-orange-500 to-red-600',
      duration: '3h',
      type: 'live'
    },
    {
      id: 2,
      title: 'Journal Parlé',
      host: 'Marie ONDOA',
      time: '12:00 - 13:00',
      category: 'actualités',
      days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'],
      description: 'L\'actualité locale, nationale et internationale présentée par notre équipe de journalistes.',
      image: '/images/programs/journal.jpg',
      color: 'from-blue-500 to-indigo-600',
      duration: '1h',
      type: 'live'
    },
    {
      id: 3,
      title: 'Variétés Africaines',
      host: 'Paul ESSOMBA',
      time: '15:00 - 17:00',
      category: 'musique',
      days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'],
      description: 'Un voyage musical à travers l\'Afrique avec les meilleurs hits et découvertes.',
      image: '/images/programs/varietes.jpg',
      color: 'from-green-500 to-emerald-600',
      duration: '2h',
      type: 'live'
    },
    {
      id: 4,
      title: 'Débat Citoyen',
      host: 'Célestine ATANGANA',
      time: '18:00 - 19:00',
      category: 'culture',
      days: ['lundi', 'mercredi', 'vendredi'],
      description: 'Discussions ouvertes sur les enjeux sociétaux avec la participation des auditeurs.',
      image: '/images/programs/debat.jpg',
      color: 'from-purple-500 to-pink-600',
      duration: '1h',
      type: 'live'
    },
    {
      id: 5,
      title: 'Femmes d\'Impact',
      host: 'Célestine ATANGANA',
      time: '14:00 - 15:00',
      category: 'culture',
      days: ['dimanche'],
      description: 'Portraits de femmes inspirantes qui transforment leur communauté.',
      image: '/images/programs/femmes.jpg',
      color: 'from-pink-500 to-rose-600',
      duration: '1h',
      type: 'live'
    },
    {
      id: 6,
      title: 'Éducation & Avenir',
      host: 'Équipe éducative',
      time: '10:00 - 11:00',
      category: 'éducation',
      days: ['samedi'],
      description: 'Programmes éducatifs pour accompagner les jeunes dans leur formation.',
      image: '/images/programs/education.jpg',
      color: 'from-blue-500 to-cyan-600',
      duration: '1h',
      type: 'live'
    },
    {
      id: 7,
      title: 'Culture & Traditions',
      host: 'Robert MFOU',
      time: '16:00 - 17:00',
      category: 'culture',
      days: ['samedi'],
      description: 'Découverte des traditions et de la richesse culturelle camerounaise.',
      image: '/images/programs/culture.jpg',
      color: 'from-amber-500 to-orange-600',
      duration: '1h',
      type: 'live'
    },
    {
      id: 8,
      title: 'Dédicaces du Cœur',
      host: 'Équipe Radio',
      time: '20:00 - 22:00',
      category: 'divertissement',
      days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'],
      description: 'Vos messages d\'amour et dédicaces musicales pour vos proches.',
      image: '/images/programs/dedicaces.jpg',
      color: 'from-red-500 to-pink-600',
      duration: '2h',
      type: 'live'
    },
    {
      id: 9,
      title: 'Nuit Musicale',
      host: 'Programmation automatique',
      time: '22:00 - 06:00',
      category: 'musique',
      days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'],
      description: 'Musiques douces et mélodies apaisantes pour accompagner vos nuits.',
      image: '/images/programs/nuit.jpg',
      color: 'from-indigo-500 to-blue-600',
      duration: '8h',
      type: 'auto'
    }
  ];
  
  const filteredPrograms = programs.filter(program => {
    const matchesDay = selectedDay === 'all' || program.days.includes(selectedDay);
    const matchesCategory = selectedCategory === 'all' || program.category === selectedCategory;
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.host.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesDay && matchesCategory && matchesSearch;
  });
  
  return (
    <>
      <Helmet>
        <title>Programmes - Radio Flambeau-Banka</title>
        <meta name="description" content="Découvrez tous nos programmes radio : actualités, musique, culture, éducation. Grille complète des émissions de Radio Flambeau-Banka." />
        <meta name="keywords" content="programmes, émissions, grille, horaires, radio, actualités, musique, culture" />
        <meta property="og:title" content="Programmes - Radio Flambeau-Banka" />
        <meta property="og:description" content="Découvrez tous nos programmes radio : actualités, musique, culture, éducation." />
        <meta property="og:url" content="https://www.radioflambeaubanka.com/programs" />
        <link rel="canonical" href="https://www.radioflambeaubanka.com/programs" />
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
                Nos Programmes
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Une grille variée pour tous les goûts, 24h/24 et 7j/7
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span>En direct</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users size={16} />
                  <span>15+ programmes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span>24h/24</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Filtres */}
        <section className="py-8 bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Recherche */}
              <div className="relative flex-1 max-w-md">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un programme..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              {/* Filtres */}
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center space-x-2">
                  <Filter size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-600">Filtres :</span>
                </div>
                
                <select
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {days.map(day => (
                    <option key={day} value={day}>
                      {day === 'all' ? 'Tous les jours' : day.charAt(0).toUpperCase() + day.slice(1)}
                    </option>
                  ))}
                </select>
                
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'Toutes catégories' : category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>
        
        {/* Grille des programmes */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredPrograms.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Mic size={48} className="mx-auto" />
                </div>
                <p className="text-gray-600">Aucun programme trouvé pour ces critères.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPrograms.map((program, index) => (
                  <motion.div
                    key={program.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    {/* Header avec gradient */}
                    <div className={`h-48 bg-gradient-to-br ${program.color} p-6 relative`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="relative z-10 h-full flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
                            {program.category}
                          </div>
                          <div className="flex items-center space-x-2">
                            {program.type === 'live' && (
                              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            )}
                            <span className="text-xs text-white/80">
                              {program.type === 'live' ? 'EN DIRECT' : 'AUTO'}
                            </span>
                          </div>
                        </div>
                        
                        <div className="text-white">
                          <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1">
                              <Clock size={14} />
                              <span>{program.time}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar size={14} />
                              <span>{program.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Contenu */}
                    <div className="p-6">
                      <div className="mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Mic size={16} className="text-gray-500" />
                          <span className="text-sm font-medium text-gray-700">{program.host}</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
                      </div>
                      
                      {/* Jours de diffusion */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {program.days.map(day => (
                            <span
                              key={day}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                            >
                              {day.charAt(0).toUpperCase() + day.slice(1)}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Actions */}
                      <div className="flex items-center justify-between">
                        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
                          <Play size={16} />
                          <span className="text-sm">Écouter</span>
                        </button>
                        
                        <div className="flex items-center space-x-3">
                          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <Heart size={16} className="text-gray-400" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <MessageCircle size={16} className="text-gray-400" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
        
        {/* Grille horaire */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Grille Horaire
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Retrouvez tous vos programmes préférés
              </p>
            </motion.div>
            
            <div className="bg-gray-50 rounded-3xl p-8 overflow-x-auto">
              <div className="min-w-[800px]">
                <div className="grid grid-cols-8 gap-4 mb-4">
                  <div className="font-semibold text-gray-700">Horaire</div>
                  {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map(day => (
                    <div key={day} className="font-semibold text-gray-700 text-center">{day}</div>
                  ))}
                </div>
                
                {/* Lignes horaires principales */}
                {[
                  { time: '06:00', programs: ['Réveil Matinal', 'Réveil Matinal', 'Réveil Matinal', 'Réveil Matinal', 'Réveil Matinal', 'Musique', 'Musique'] },
                  { time: '12:00', programs: ['Journal', 'Journal', 'Journal', 'Journal', 'Journal', 'Journal', 'Journal'] },
                  { time: '15:00', programs: ['Variétés', 'Variétés', 'Variétés', 'Variétés', 'Variétés', 'Variétés', 'Variétés'] },
                  { time: '18:00', programs: ['Débat', 'Musique', 'Débat', 'Musique', 'Débat', 'Culture', 'Musique'] },
                  { time: '20:00', programs: ['Dédicaces', 'Dédicaces', 'Dédicaces', 'Dédicaces', 'Dédicaces', 'Dédicaces', 'Dédicaces'] }
                ].map((slot, index) => (
                  <div key={index} className="grid grid-cols-8 gap-4 mb-2">
                    <div className="font-medium text-gray-600">{slot.time}</div>
                    {slot.programs.map((program, dayIndex) => (
                      <div key={dayIndex} className="text-center">
                        <div className="bg-white rounded-lg p-2 text-sm font-medium text-gray-700 hover:bg-blue-50 transition-colors cursor-pointer">
                          {program}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Participez à nos émissions
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Envoyez vos dédicaces, participez aux débats et partagez vos histoires
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2">
                  <Heart size={20} />
                  <span>Envoyer une dédicace</span>
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center space-x-2">
                  <MessageCircle size={20} />
                  <span>Nous contacter</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Programs;