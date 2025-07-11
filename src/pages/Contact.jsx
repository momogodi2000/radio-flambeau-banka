// src/pages/Contact.jsx
import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import { 
  Mail, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  User,
  MessageSquare,
  Heart,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ExternalLink
} from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Updated contact information with new details
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'radoiflambeaubanka@gmail.com',
      description: 'Envoyez-nous un email, nous répondons rapidement',
      color: 'from-blue-500 to-blue-600',
      action: () => window.open('mailto:radoiflambeaubanka@gmail.com')
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '+237 696 044 661',
      description: 'Contactez-nous via WhatsApp pour une réponse rapide',
      color: 'from-green-500 to-green-600',
      action: () => window.open('https://wa.me/237696044661')
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+237 696 044 661',
      description: 'Appelez-nous directement',
      color: 'from-purple-500 to-purple-600',
      action: () => window.open('tel:+237696044661')
    },
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Banka, Haut-Nkam',
      description: 'Cameroun',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Clock,
      title: 'Heures d\'ouverture',
      content: '24h/24 - 7j/7',
      description: 'Nous sommes toujours à l\'écoute',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      label: 'Facebook', 
      url: 'https://facebook.com/radioflambeaubanka',
      color: 'from-blue-600 to-blue-700'
    },
    { 
      icon: Twitter, 
      label: 'Twitter', 
      url: 'https://twitter.com/radioflambeau',
      color: 'from-sky-500 to-sky-600'
    },
    { 
      icon: Instagram, 
      label: 'Instagram', 
      url: 'https://instagram.com/radioflambeaubanka',
      color: 'from-pink-500 to-pink-600'
    },
    { 
      icon: Youtube, 
      label: 'YouTube', 
      url: 'https://youtube.com/@radioflambeaubanka',
      color: 'from-red-500 to-red-600'
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
    
    try {
      // Direct email submission using mailto
      const subject = encodeURIComponent(formData.subject || 'Message depuis le site web');
      const body = encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoUrl = `mailto:radoiflambeaubanka@gmail.com?subject=${subject}&body=${body}`;
      
      window.open(mailtoUrl);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact - Radio Flambeau-Banka</title>
        <meta name="description" content="Contactez Radio Flambeau-Banka. Email: radoiflambeaubanka@gmail.com, WhatsApp: +237 696 044 661. Votre radio communautaire à Banka, Haut-Nkam, Cameroun." />
        <meta name="keywords" content="contact radio flambeau banka, email radio cameroun, whatsapp radio, contact radio communautaire" />
      </Helmet>

      <div ref={ref} className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden dark:from-gray-900 dark:to-purple-900">
          <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Contactez-nous
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100 dark:text-purple-200">
                Votre voix compte ! Partagez vos idées, posez vos questions ou rejoignez notre communauté.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Contact Actions */}
        <section className="py-10 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-green-500 to-green-600 dark:from-green-700 dark:to-green-900 rounded-2xl p-8 text-white cursor-pointer hover:shadow-xl transition-all duration-300 group"
                onClick={() => window.open('https://wa.me/237696044661')}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center">
                    <MessageCircle size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">WhatsApp</h3>
                    <p className="text-green-100 dark:text-green-200">+237 696 044 661</p>
                  </div>
                </div>
                <p className="text-green-100 dark:text-green-200 mb-4">
                  Contactez-nous instantanément via WhatsApp pour une réponse rapide
                </p>
                <div className="flex items-center justify-end">
                  <ExternalLink size={20} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-700 dark:to-blue-900 rounded-2xl p-8 text-white cursor-pointer hover:shadow-xl transition-all duration-300 group"
                onClick={() => window.open('mailto:radoiflambeaubanka@gmail.com')}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center">
                    <Mail size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Email</h3>
                    <p className="text-blue-100 dark:text-blue-200">radoiflambeaubanka@gmail.com</p>
                  </div>
                </div>
                <p className="text-blue-100 dark:text-blue-200 mb-4">
                  Envoyez-nous un email, nous répondons rapidement
                </p>
                <div className="flex items-center justify-end">
                  <ExternalLink size={20} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-10 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                    Informations de Contact
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
                      className={`flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow ${info.action ? 'cursor-pointer' : ''}`}
                      onClick={info.action}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <info.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white">{info.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">{info.content}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{info.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Envoyez-nous un message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      placeholder="Sujet de votre message"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      placeholder="Votre message..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    <Send size={20} />
                    <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}</span>
                  </button>
                </form>

                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                    Message préparé ! Votre client email va s'ouvrir.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
                    Erreur lors de l'envoi. Essayez de nous contacter directement.
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-10 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                Suivez-nous sur les réseaux sociaux
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Restez connectés avec Radio Flambeau-Banka et ne manquez aucune actualité !
              </p>
              
              <div className="grid md:grid-cols-4 gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-gradient-to-br ${social.color} rounded-2xl p-6 text-white hover:shadow-xl transition-all duration-300 group`}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                        <social.icon size={32} />
                      </div>
                      <h3 className="text-lg font-semibold">{social.label}</h3>
                      <ExternalLink size={16} className="mt-2 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;