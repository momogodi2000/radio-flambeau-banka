
// src/pages/About.jsx
import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  Globe, 
  Mic, 
  Heart, 
  Award,
  Target,
  Eye,
  Zap,
  Shield
} from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const stats = [
    { icon: Calendar, value: '2014', label: 'Année de création' },
    { icon: Users, value: '10K+', label: 'Auditeurs réguliers' },
    { icon: Globe, value: '25+', label: 'Pays d\'écoute' },
    { icon: Mic, value: '15+', label: 'Programmes quotidiens' }
  ];
  
  const values = [
    {
      icon: Heart,
      title: 'Engagement communautaire',
      description: 'Nous nous engageons à servir notre communauté avec passion et dévouement.'
    },
    {
      icon: Award,
      title: 'Excellence journalistique',
      description: 'Nous respectons les plus hauts standards de qualité et d\'éthique journalistique.'
    },
    {
      icon: Target,
      title: 'Innovation continue',
      description: 'Nous embrassons les nouvelles technologies pour mieux servir nos auditeurs.'
    },
    {
      icon: Eye,
      title: 'Transparence',
      description: 'Nous opérons avec transparence et responsabilité envers notre communauté.'
    }
  ];
  
  const milestones = [
    {
      year: '2014',
      title: 'Création de Radio Flambeau-Banka',
      description: 'Lancement officiel de la radio communautaire avec une équipe de 3 personnes.'
    },
    {
      year: '2016',
      title: 'Extension de la couverture',
      description: 'Augmentation de la puissance d\'émission pour couvrir tout l\'arrondissement.'
    },
    {
      year: '2018',
      title: 'Première reconnaissance',
      description: 'Prix de la meilleure radio communautaire de la région Centre.'
    },
    {
      year: '2020',
      title: 'Adaptation numérique',
      description: 'Lancement des premiers programmes en ligne pendant la pandémie.'
    },
    {
      year: '2023',
      title: 'Croissance internationale',
      description: 'Première diffusion en direct écoutée dans plus de 20 pays.'
    },
    {
      year: '2025',
      title: 'Digitalisation complète',
      description: 'Lancement du site web officiel et expansion mondiale.'
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>À propos - Radio Flambeau-Banka</title>
        <meta name="description" content="Découvrez l'histoire de Radio Flambeau-Banka, notre mission, nos valeurs et notre équipe. Plus de 10 ans au service de la communauté de Banka." />
        <meta name="keywords" content="histoire, mission, valeurs, équipe, radio communautaire, Banka, Cameroun" />
        <meta property="og:title" content="À propos - Radio Flambeau-Banka" />
        <meta property="og:description" content="Découvrez l'histoire de Radio Flambeau-Banka, notre mission, nos valeurs et notre équipe." />
        <meta property="og:url" content="https://www.radioflambeaubanka.com/about" />
        <link rel="canonical" href="https://www.radioflambeaubanka.com/about" />
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
                Notre Histoire
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 dark:text-purple-200">
                Plus de 10 ans au service de la communauté de Banka
              </p>
              <div className="w-24 h-1 bg-white dark:bg-purple-400 mx-auto rounded-full"></div>
            </motion.div>
          </div>
        </section>
        
        {/* Histoire principale */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                  Une voix qui éclaire depuis 2014
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    Radio Flambeau-Banka a vu le jour en 2014 avec une vision claire : 
                    devenir la voix authentique de la communauté de Banka. Fondée par 
                    un groupe de passionnés de communication, notre radio s'est rapidement 
                    imposée comme un pilier de l'information locale.
                  </p>
                  <p>
                    Au fil des années, nous avons élargi notre portée pour toucher non 
                    seulement notre arrondissement, mais aussi la diaspora camerounaise 
                    à travers le monde. Aujourd'hui, nous sommes fiers d'être écoutés 
                    dans plus de 25 pays.
                  </p>
                  <p>
                    Notre engagement envers l'excellence journalistique et l'innovation 
                    nous a permis de remporter plusieurs prix et reconnaissance, 
                    consolidant notre position de leader dans le paysage médiatique 
                    communautaire du Cameroun.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-2 gap-6"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-purple-700 dark:to-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon size={32} className="text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Mission et Vision */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-purple-700 dark:to-blue-900 rounded-full flex items-center justify-center mr-4">
                    <Target size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Notre Mission</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Informer, éduquer et divertir la communauté de Banka et la diaspora 
                  camerounaise à travers des programmes de qualité, tout en promouvant 
                  les valeurs culturelles et le développement local.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4">
                    <Eye size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Notre Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Être la première radio communautaire digitale du Cameroun, 
                  reconnue pour son excellence journalistique et son impact 
                  positif sur le développement communautaire.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Valeurs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Nos Valeurs
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Les principes qui guident notre action quotidienne
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Timeline */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Notre Parcours
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Les moments clés de notre histoire
              </p>
            </motion.div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative z-10 flex-shrink-0"></div>
                    
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Rejoignez notre communauté
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Découvrez nos programmes et restez connecté avec nous
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Nos Programmes
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Nous Contacter
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
