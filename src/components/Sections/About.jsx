
// src/components/Sections/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Heart, Users, Globe, Mic, Calendar } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const stats = [
    { icon: Calendar, value: '10+', label: 'Années d\'expérience' },
    { icon: Users, value: '24/7', label: 'Diffusion continue' },
    { icon: Globe, value: '20+', label: 'Pays d\'écoute' },
    { icon: Mic, value: '15+', label: 'Programmes' }
  ];
  
  const missions = [
    {
      icon: Check,
      title: 'Informer la communauté',
      description: 'Actualités locales, nationales et internationales'
    },
    {
      icon: Heart,
      title: 'Promouvoir la culture',
      description: 'Valoriser la richesse culturelle camerounaise'
    },
    {
      icon: Users,
      title: 'Éduquer et divertir',
      description: 'Programmes éducatifs et de divertissement'
    },
    {
      icon: Globe,
      title: 'Connecter la diaspora',
      description: 'Lien entre le Cameroun et le monde'
    }
  ];
  
  return (
    <section id="apropos" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            À Propos de Radio Flambeau-Banka
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une voix qui éclaire la communauté depuis plus de 10 ans
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Notre Histoire</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Créée il y a plus de 10 ans, Radio Flambeau-Banka est une radio communautaire 
                  implantée dans l'arrondissement de Banka, région du Centre du Cameroun. 
                  Nous jouons un rôle essentiel dans l'information, l'éducation et le divertissement 
                  des populations locales.
                </p>
                <p>
                  Notre mission dépasse les frontières géographiques : grâce à notre digitalisation, 
                  nous étendons notre portée à l'échelle mondiale tout en conservant notre ancrage 
                  local et notre mission communautaire.
                </p>
                <p>
                  Aujourd'hui, nous sommes fiers de servir non seulement notre communauté locale, 
                  mais aussi la diaspora camerounaise répartie dans plus de 20 pays à travers le monde.
                </p>
              </div>
            </div>
            
            {/* Statistiques */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon size={24} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Mission et valeurs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8"
          >
            <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Notre Mission
            </h4>
            
            <div className="space-y-6">
              {missions.map((mission, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <mission.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">
                      {mission.title}
                    </h5>
                    <p className="text-gray-600 text-sm">
                      {mission.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Citation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white text-center"
            >
              <p className="text-lg font-medium mb-2">
                "Une radio ancrée dans Banka, mais qui rayonne dans le monde entier"
              </p>
              <p className="text-blue-200 text-sm">
                — L'avenir de Radio Flambeau-Banka
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;