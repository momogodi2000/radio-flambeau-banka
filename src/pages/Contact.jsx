
// src/pages/Contact.jsx
import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle,
  Heart,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  User,
  Calendar,
  ExternalLink,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { useGoogleForms } from '../hooks/useGoogleForms';
import toast from 'react-hot-toast';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { openForm } = useGoogleForms();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
    preferredContact: 'email'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Banka, Région du Centre, Cameroun',
      description: 'Visitez nos studios au cœur de Banka',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+237 6XX XXX XXX',
      description: 'Appelez-nous du lundi au vendredi',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@radioflambeaubanka.com',
      description: 'Écrivez-nous à tout moment',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: '24h/24 - 7j/7',
      description: 'Diffusion continue',
      color: 'from-orange-500 to-red-600'
    }
  ];
  
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/radioflambeaubanka',
      color: 'hover:bg-blue-600',
      description: 'Suivez notre actualité'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/radioflambeaubanka',
      color: 'hover:bg-sky-500',
      description: 'Actualités en temps réel'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/radioflambeaubanka',
      color: 'hover:bg-pink-600',
      description: 'Découvrez nos coulisses'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/radioflambeaubanka',
      color: 'hover:bg-red-600',
      description: 'Nos vidéos et rediffusions'
    }
  ];
  
  const quickActions = [
    {
      icon: Heart,
      title: 'Envoyer une dédicace',
      description: 'Partagez un message d\'amour avec vos proches',
      color: 'from-pink-500 to-rose-600',
      action: () => openForm('dedicaces')
    },
    {
      icon: Mail,
      title: 'Newsletter',
      description: 'Restez informé de nos actualités',
      color: 'from-blue-500 to-purple-600',
      action: () => openForm('newsletter')
    },
    {
      icon: MessageCircle,
      title: 'Feedback',
      description: 'Donnez votre avis sur nos programmes',
      color: 'from-green-500 to-emerald-600',
      action: () => openForm('feedback')
    }
  ];
  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validation simple
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      setIsSubmitting(false);
      return;
    }
    
    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Veuillez entrer une adresse email valide');
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Simuler l'envoi
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Ouvrir le formulaire Google
      openForm('contact');
      toast.success('Redirection vers le formulaire de contact');
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: '',
        preferredContact: 'email'
      });
      
    } catch (error) {
      toast.error('Erreur lors de l\'envoi du message');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      <Helmet>
        <title>Contact - Radio Flambeau-Banka</title>
        <meta name="description" content="Contactez Radio Flambeau-Banka : adresse, téléphone, email, horaires. Envoyez vos messages, dédicaces et suggestions." />
        <meta name="keywords" content="contact, adresse, téléphone, email, formulaire, dédicaces, suggestions" />
        <meta property="og:title" content="Contact - Radio Flambeau-Banka" />
        <meta property="og:description" content="Contactez Radio Flambeau-Banka : adresse, téléphone, email, horaires." />
        <meta property="og:url" content="https://www.radioflambeaubanka.com/contact" />
        <link rel="canonical" href="https://www.radioflambeaubanka.com/contact" />
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
                Contactez-nous
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Nous sommes à votre écoute. N'hésitez pas à nous contacter !
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <MessageCircle size={16} />
                  <span>Réponse sous 24h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>Support téléphonique</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span>7j/7 disponible</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Actions rapides */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              {quickActions.map((action, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${action.color} rounded-2xl p-6 text-white cursor-pointer hover:shadow-xl transition-all duration-300 group`}
                  onClick={action.action}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <action.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{action.title}</h3>
                      <p className="text-white/80 text-sm">{action.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-end">
                    <ExternalLink size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contenu principal */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Informations de contact */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Informations de Contact
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Notre équipe est disponible pour répondre à toutes vos questions, 
                    recevoir vos suggestions et traiter vos demandes. Nous nous engageons 
                    à vous répondre dans les plus brefs délais.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <info.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{info.title}</h3>
                        <p className="text-gray-700 font-medium">{info.content}</p>
                        <p className="text-gray-500 text-sm">{info.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Réseaux sociaux */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Suivez-nous sur les réseaux sociaux
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        className={`flex items-center space-x-3 p-3 bg-gray-50 rounded-lg ${social.color} hover:text-white transition-all duration-300 group`}
                      >
                        <social.icon size={20} />
                        <div>
                          <div className="font-medium">{social.name}</div>
                          <div className="text-sm opacity-75">{social.description}</div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
                
                {/* Horaires détaillés */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Horaires d'ouverture
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Lundi - Vendredi</span>
                      <span className="font-medium">06:00 - 22:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Samedi</span>
                      <span className="font-medium">08:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Dimanche</span>
                      <span className="font-medium">10:00 - 18:00</span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Diffusion radio</span>
                        <span className="font-medium text-green-600">24h/24 - 7j/7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Formulaire de contact */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                  Envoyez-nous un message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nom et Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Votre nom complet"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Téléphone et Mode de contact */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone (optionnel)
                      </label>
                      <div className="relative">
                        <Phone size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="+237 6XX XXX XXX"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                        Mode de contact préféré
                      </label>
                      <select
                        id="preferredContact"
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="email">Email</option>
                        <option value="phone">Téléphone</option>
                        <option value="both">Les deux</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Sujet */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Sujet de votre message"
                    />
                  </div>
                  
                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Votre message..."
                    />
                  </div>
                  
                  {/* Bouton */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Envoyer le message</span>
                      </>
                    )}
                  </button>
                </form>
                
                {/* Note */}
                <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-blue-800">
                        <strong>Réponse garantie sous 24h</strong>
                      </p>
                      <p className="text-xs text-blue-600 mt-1">
                        Nous nous engageons à répondre à tous vos messages dans les plus brefs délais.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Carte/Localisation */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Venez nous rendre visite
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Nos studios sont situés au cœur de Banka. Vous êtes les bienvenus !
              </p>
            </motion.div>
            
            <div className="bg-gray-100 rounded-3xl p-8 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Radio Flambeau-Banka
                </h3>
                <p className="text-gray-600 mb-6">
                  Arrondissement de Banka<br />
                  Région du Centre<br />
                  Cameroun
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
                    Voir sur Google Maps
                  </button>
                  <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-colors">
                    Obtenir l'itinéraire
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;