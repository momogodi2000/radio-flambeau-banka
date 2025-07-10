// src/components/Sections/Programs.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Sun, 
  Newspaper, 
  Music, 
  MessageCircle, 
  Heart, 
  Moon, 
  Clock,
  Users,
  Send
} from 'lucide-react';

const Programs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const programs = [
    {
      id: 1,
      title: 'Réveil Matinal',
      time: '06:00 - 09:00',
      description: 'Commencez votre journée avec nos actualités, musiques et conseils pratiques pour bien démarrer',
      icon: Sun,
      color: 'from-orange-400 to-red-500',
      bgColor: 'from-orange-50 to-red-50'
    },
    {
      id: 2,
      title: 'Journal Parlé',
      time: '12:00 - 13:00',
      description: 'L\'actualité locale, nationale et internationale commentée par nos journalistes',
      icon: Newspaper,
      color: 'from-blue-400 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50'
    },
    {
      id: 3,
      title: 'Variétés Africaines',
      time: '15:00 - 17:00',
      description: 'Les meilleurs hits de la musique africaine et internationale',
      icon: Music,
      color: 'from-green-400 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      id: 4,
      title: 'Débat Citoyen',
      time: '18:00 - 19:00',
      description: 'Discussions ouvertes sur les enjeux sociétaux avec la participation des auditeurs',
      icon: MessageCircle,
      color: 'from-purple-400 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      id: 5,
      title: 'Dédicaces',
      time: '20:00 - 22:00',
      description: 'Vos messages d\'amour et dédicaces musicales pour vos proches',
      icon: Heart,
      color: 'from-pink-400 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50'
    },
    {
      id: 6,
      title: 'Nuit Musicale',
      time: '22:00 - 06:00',
      description: 'Musiques douces et mélodies apaisantes pour accompagner vos nuits',
      icon: Moon,
      color: 'from-indigo-400 to-blue-500',
      bgColor: 'from-indigo-50 to-blue-50'
    }
  ];
  
  const getCurrentProgram = () => {
    const now = new Date();
    const currentHour = now.getHours();
    
    if (currentHour >= 6 && currentHour < 9) return programs[0];
    if (currentHour >= 12 && currentHour < 13) return programs[1];
    if (currentHour >= 15 && currentHour < 17) return programs[2];
    if (currentHour >= 18 && currentHour < 19) return programs[3];
    if (currentHour >= 20 && currentHour < 22) return programs[4];
    return programs[5];
  };
  
  const currentProgram = getCurrentProgram();
  
  const openDedicaceForm = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSdDedicaces_Form_ID/viewform',
      '_blank',
      'width=600,height=800'
    );
  };
  
  return (
    <section id="programmes" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Nos Programmes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une grille variée pour tous les goûts, 24h/24 et 7j/7
          </p>
        </motion.div>
        
        {/* Programme en cours */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className={`bg-gradient-to-r ${currentProgram.color} rounded-3xl p-8 text-white text-center shadow-2xl`}>
            <div className="flex items-center justify-center mb-4">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse mr-3"></div>
              <span className="text-lg font-semibold">EN COURS</span>
            </div>
            <h3 className="text-3xl font-bold mb-2">{currentProgram.title}</h3>
            <p className="text-xl mb-4">{currentProgram.time}</p>
            <p className="text-white/90 max-w-2xl mx-auto">{currentProgram.description}</p>
          </div>
        </motion.div>
        
        {/* Grille des programmes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className={`
                bg-gradient-to-br ${program.bgColor} rounded-3xl p-8 hover:shadow-xl transition-all duration-300
                ${program.id === currentProgram.id ? 'ring-4 ring-blue-500 ring-opacity-50' : ''}
              `}
            >
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${program.color} rounded-full flex items-center justify-center mb-6 shadow-lg`}>
                  <program.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {program.title}
                </h3>
                
                <div className="flex items-center justify-center mb-4">
                  <Clock size={16} className="text-gray-500 mr-2" />
                  <span className="text-lg font-semibold text-gray-700">
                    {program.time}
                  </span>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
                
                {program.id === currentProgram.id && (
                  <div className="mt-4 flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                    <span className="text-sm text-green-600 font-semibold">
                      EN DIRECT
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bouton dédicaces */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <button
            onClick={openDedicaceForm}
            className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-3 mx-auto hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Send size={24} />
            <span>Envoyer une dédicace</span>
          </button>
          <p className="text-gray-600 mt-4">
            Partagez vos messages d'amour avec vos proches
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
