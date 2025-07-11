
// src/pages/About.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Radio, Users, Clock, Award, Headphones, Heart } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>À propos - Radio Flambeau-Banka</title>
        <meta name="description" content="Découvrez l'histoire et la mission de Radio Flambeau-Banka, votre radio communautaire de référence à Banka." />
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
                À Propos de Nous
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">
                Votre voix, votre communauté
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Notre Histoire
                </h2>
                <p className="text-gray-600 mb-6">
                  Fondée en 2015, Radio Flambeau-Banka est née de la volonté de créer un média communautaire qui reflète la richesse culturelle et les préoccupations de la population de Banka et ses environs.
                </p>
                <p className="text-gray-600 mb-6">
                  Ce qui a commencé comme une petite initiative locale s'est transformé en une station de radio influente qui touche aujourd'hui des milliers d'auditeurs quotidiennement, devenant un pilier essentiel de l'information et du divertissement dans la région.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <Clock className="text-blue-600 mr-2" size={20} />
                    <span className="text-gray-700 font-medium">Depuis 2015</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="text-blue-600 mr-2" size={20} />
                    <span className="text-gray-700 font-medium">+10,000 auditeurs</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="text-blue-600 mr-2" size={20} />
                    <span className="text-gray-700 font-medium">Prix d'excellence 2022</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/images/bafang.jpg" 
                    alt="Studio de Radio Flambeau-Banka" 
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
                  <div className="flex items-center space-x-2">
                    <Headphones className="text-blue-600" size={24} />
                    <div>
                      <p className="text-sm text-gray-500">En direct 24/7</p>
                      <p className="font-bold text-gray-800">FM 95.8 MHz</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Mission & Vision
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Nous sommes déterminés à être la voix authentique de notre communauté
                </p>
              </motion.div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <Radio className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Notre Mission</h3>
                <p className="text-gray-700 mb-6">
                  Informer, éduquer et divertir notre communauté à travers une programmation de qualité qui reflète nos valeurs culturelles et répond aux besoins d'information locale.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Promouvoir la culture locale</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Faciliter le dialogue communautaire</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Diffuser une information fiable et objective</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl"
              >
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                  <Heart className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Notre Vision</h3>
                <p className="text-gray-700 mb-6">
                  Devenir la radio communautaire de référence au Cameroun, reconnue pour son impact positif sur le développement local et son engagement envers l'excellence journalistique.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Innover constamment dans notre offre médiatique</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Étendre notre couverture géographique</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Former la prochaine génération de journalistes</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Nos Valeurs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Les principes qui guident notre travail quotidien
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Intégrité",
                  description: "Nous adhérons aux plus hauts standards d'éthique journalistique et de transparence.",
                  color: "bg-blue-500"
                },
                {
                  title: "Communauté",
                  description: "Nous plaçons les besoins et les intérêts de notre communauté au centre de nos décisions.",
                  color: "bg-green-500"
                },
                {
                  title: "Innovation",
                  description: "Nous cherchons constamment à améliorer notre offre et à adopter les nouvelles technologies.",
                  color: "bg-purple-500"
                },
                {
                  title: "Excellence",
                  description: "Nous visons l'excellence dans tout ce que nous faisons, de la production à la diffusion.",
                  color: "bg-orange-500"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className={`w-12 h-12 ${value.color} rounded-lg mb-4 flex items-center justify-center`}>
                    <span className="text-white text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
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
                Rejoignez Notre Communauté
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Participez à nos émissions, proposez des sujets ou devenez bénévole
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  Contactez-nous
                </a>
                
                <a
                  href="/programs"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Nos Programmes
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
