
// src/components/Footer/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Radio,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Heart,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Programmes', href: '#programmes' },
    { name: 'Équipe', href: '#equipe' },
    { name: 'Actualités', href: '#actualites' },
    { name: 'Contact', href: '#contact' }
  ];
  
  const programs = [
    { name: 'Réveil Matinal', time: '06:00' },
    { name: 'Journal Parlé', time: '12:00' },
    { name: 'Variétés', time: '15:00' },
    { name: 'Débat', time: '18:00' },
    { name: 'Dédicaces', time: '20:00' }
  ];
  
  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: Facebook, 
      href: 'https://facebook.com/radioflambeaubanka',
      color: 'hover:text-blue-600'
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      href: 'https://twitter.com/radioflambeaubanka',
      color: 'hover:text-sky-500'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: 'https://instagram.com/radioflambeaubanka',
      color: 'hover:text-pink-600'
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      href: 'https://youtube.com/radioflambeaubanka',
      color: 'hover:text-red-600'
    }
  ];
  
  const legalLinks = [
    { name: 'Politique de confidentialité', href: '/privacy' },
    { name: 'Conditions d\'utilisation', href: '/terms' },
    { name: 'Mentions légales', href: '/legal' },
    { name: 'RGPD', href: '/gdpr' }
  ];
  
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Section principale */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Radio size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Radio Flambeau-Banka</h3>
                  <p className="text-gray-400 text-sm">Votre voix communautaire</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Radio communautaire de l'arrondissement de Banka, région du Centre du Cameroun. 
                Depuis plus de 10 ans, nous informons, éduquons et divertissons notre communauté locale 
                et internationale.
              </p>
              
              {/* Statistiques */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="text-2xl font-bold text-blue-400">10+</div>
                  <div className="text-xs text-gray-400">Ans d'expérience</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="text-2xl font-bold text-green-400">24/7</div>
                  <div className="text-xs text-gray-400">Diffusion</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="text-2xl font-bold text-purple-400">20+</div>
                  <div className="text-xs text-gray-400">Pays</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Liens rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Programmes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4">Programmes</h4>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <li key={index} className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">{program.name}</span>
                  <span className="text-blue-400 font-mono">{program.time}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        {/* Informations de contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 p-6 bg-gray-800 rounded-2xl"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <MapPin size={20} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Adresse</p>
              <p className="text-white font-medium">Banka, Centre, Cameroun</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <Phone size={20} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Téléphone</p>
              <p className="text-white font-medium">+237 6XX XXX XXX</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
              <Mail size={20} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-white font-medium">contact@radioflambeaubanka.com</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
              <Clock size={20} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Horaires</p>
              <p className="text-white font-medium">24h/24 - 7j/7</p>
            </div>
          </div>
        </motion.div>
        
        {/* Réseaux sociaux */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-12"
        >
          <h4 className="text-lg font-semibold mb-6">Suivez-nous</h4>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-gray-700`}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        {/* Séparateur */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Radio Flambeau-Banka.</span>
              <span>Fait avec</span>
              <Heart size={16} className="text-red-500" />
              <span>pour notre communauté</span>
            </div>
            
            {/* Liens légaux */}
            <div className="flex items-center space-x-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
                >
                  {link.name}
                  <ExternalLink size={12} className="ml-1" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Technologie */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              Développé avec React + Vite • Hébergé sur Netlify • Streaming par Listen2MyRadio
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;