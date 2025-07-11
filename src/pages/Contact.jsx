// src/pages/Contact.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  Facebook,
  Instagram,
  Twitter,
  Youtube
} from 'lucide-react';
import { useGoogleForms } from '../hooks/useGoogleForms';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  
  const { submitForm } = useGoogleForms();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) errors.name = "Votre nom est requis";
    
    if (!formData.email.trim()) {
      errors.email = "Votre email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Format d'email invalide";
    }
    
    if (!formData.subject.trim()) errors.subject = "Le sujet est requis";
    if (!formData.message.trim()) errors.message = "Votre message est requis";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      await submitForm({
        formId: 'YOUR_GOOGLE_FORM_ID',
        data: formData
      });
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError("Une erreur s'est produite. Veuillez réessayer plus tard.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact - Radio Flambeau-Banka</title>
        <meta name="description" content="Contactez Radio Flambeau-Banka pour toute question, suggestion ou collaboration. Nous sommes à votre écoute !" />
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
                Contactez-Nous
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">
                Nous sommes à votre écoute
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Nos Coordonnées
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 mb-1">Adresse</h3>
                      <p className="text-gray-600">
                        Rue Principale, Quartier Centre<br />
                        Banka, Région de l'Ouest<br />
                        Cameroun
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 mb-1">Téléphone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+237696044661" className="hover:text-blue-600 transition-colors">
                          +237 696 044 661
                        </a><br />
                        <a href="tel:+237676543210" className="hover:text-blue-600 transition-colors">
                          +237 676 543 210
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:contact@radioflambeaubanka.com" className="hover:text-blue-600 transition-colors">
                          contact@radioflambeaubanka.com
                        </a><br />
                        <a href="mailto:info@radioflambeaubanka.com" className="hover:text-blue-600 transition-colors">
                          info@radioflambeaubanka.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 mb-1">Heures d'ouverture</h3>
                      <p className="text-gray-600">
                        Lundi - Vendredi: 8h00 - 18h00<br />
                        Samedi: 9h00 - 16h00<br />
                        Dimanche: Fermé
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="mt-12">
                  <h3 className="font-semibold text-lg text-gray-800 mb-4">Suivez-nous</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://facebook.com/radioflambeaubanka" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                    <a 
                      href="https://instagram.com/radioflambeaubanka" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a 
                      href="https://twitter.com/radioflambeau" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                    <a 
                      href="https://youtube.com/radioflambeaubanka" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                      aria-label="YouTube"
                    >
                      <Youtube size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <MessageSquare className="text-blue-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Envoyez-nous un message
                  </h2>
                </div>
                
                {submitSuccess ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <p className="text-green-800 font-medium">
                      Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                ) : null}
                
                {submitError ? (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <p className="text-red-800 font-medium">
                      {submitError}
                    </p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Votre nom"
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="votre@email.com"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${formErrors.subject ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Sujet de votre message"
                    />
                    {formErrors.subject && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.subject}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Votre message..."
                    ></textarea>
                    {formErrors.message && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Envoyer le message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Où nous trouver
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Visitez nos studios au cœur de Banka
              </p>
            </motion.div>
            
            <div className="rounded-2xl overflow-hidden shadow-lg h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127505.38659850934!2d10.3549221!3d5.1493856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105faa59be2936c3%3A0xf77d1900f733a08!2sBafang%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Radio Flambeau-Banka location"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Questions fréquentes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trouvez rapidement des réponses à vos questions
              </p>
            </motion.div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "Comment puis-je proposer un sujet d'émission ?",
                  answer: "Vous pouvez nous contacter par email ou via le formulaire de contact ci-dessus en précisant votre idée d'émission. Notre équipe éditoriale examinera votre proposition et vous recontactera."
                },
                {
                  question: "Comment devenir partenaire de Radio Flambeau-Banka ?",
                  answer: "Pour devenir partenaire, veuillez nous contacter par email à partenariats@radioflambeaubanka.com ou appelez-nous au +237 696 044 661. Nous vous proposerons différentes formules adaptées à vos besoins."
                },
                {
                  question: "Puis-je visiter vos studios ?",
                  answer: "Oui, nous organisons régulièrement des visites de nos studios. Veuillez nous contacter à l'avance pour planifier votre visite pendant nos heures d'ouverture."
                },
                {
                  question: "Comment signaler un problème technique ?",
                  answer: "Pour tout problème technique concernant notre diffusion ou notre site web, veuillez nous contacter par email à support@radioflambeaubanka.com en décrivant précisément le problème rencontré."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-6">
                      <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                      <span className="ml-6 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-600">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;