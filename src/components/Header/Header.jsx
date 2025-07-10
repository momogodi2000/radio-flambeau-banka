// src/components/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Play, Pause, Radio } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ mobileMenuOpen, setMobileMenuOpen, onPlayClick, isPlaying }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, setMobileMenuOpen]);
  
  const navItems = [
    { path: '/', label: 'Accueil', anchor: '#accueil' },
    { path: '#apropos', label: 'À propos', anchor: '#apropos' },
    { path: '#programmes', label: 'Programmes', anchor: '#programmes' },
    { path: '#equipe', label: 'Équipe', anchor: '#equipe' },
    { path: '#actualites', label: 'Actualités', anchor: '#actualites' },
    { path: '#contact', label: 'Contact', anchor: '#contact' }
  ];
  
  const handleNavClick = (anchor) => {
    if (anchor.startsWith('#')) {
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };
  
  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-xl' 
            : 'bg-white/90 backdrop-blur-md shadow-lg'
          }
        `}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  <motion.span
                    animate={{ rotate: isPlaying ? 360 : 0 }}
                    transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
                  >
                    📻
                  </motion.span>
                </div>
                {isPlaying && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                )}
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Radio Flambeau-Banka
                </h1>
                <p className="text-xs text-gray-600 hidden sm:block">
                  Votre voix communautaire
                </p>
              </div>
            </motion.div>
            
            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.anchor}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(item.anchor)}
                  className={`
                    text-gray-700 hover:text-blue-600 transition-colors font-medium
                    ${location.pathname === item.path && item.path !== '/' ? 'text-blue-600' : ''}
                  `}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
            
            {/* Bouton Écouter + Menu Mobile */}
            <div className="flex items-center space-x-4">
              {/* Bouton Écouter */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onPlayClick}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium flex items-center space-x-2 hover:shadow-lg transition-all duration-200"
              >
                {isPlaying ? (
                  <Pause size={16} />
                ) : (
                  <Play size={16} />
                )}
                <span className="hidden sm:inline">
                  {isPlaying ? 'Pause' : 'Écouter'}
                </span>
              </motion.button>
              
              {/* Menu Mobile Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>
      
      {/* Menu Mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-16 right-0 w-80 h-full bg-white shadow-2xl z-40 md:hidden"
          >
            <div className="p-6 space-y-6">
              {/* En-tête du menu */}
              <div className="text-center pb-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">Navigation</h3>
              </div>
              
              {/* Navigation mobile */}
              <nav className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.anchor}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.anchor)}
                    className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
              
              {/* Bouton Écouter Mobile */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={onPlayClick}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-full font-medium flex items-center justify-center space-x-2"
              >
                {isPlaying ? (
                  <Pause size={20} />
                ) : (
                  <Play size={20} />
                )}
                <span>
                  {isPlaying ? 'Pause' : 'Écouter en direct'}
                </span>
              </motion.button>
              
              {/* Informations de contact */}
              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-800 mb-3">Contact</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Radio size={14} />
                    <span>24h/24 - 7j/7</span>
                  </div>
                  <div>
                    <span>📍 Banka, Centre, Cameroun</span>
                  </div>
                  <div>
                    <span>📧 contact@radioflambeaubanka.com</span>
                  </div>
                </div>
              </div>
              
              {/* Réseaux sociaux */}
              <div className="pt-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-3">Suivez-nous</h4>
                <div className="flex space-x-4">
                  {[
                    { name: 'Facebook', icon: '📘', url: '#' },
                    { name: 'Twitter', icon: '🐦', url: '#' },
                    { name: 'Instagram', icon: '📸', url: '#' },
                    { name: 'YouTube', icon: '🎥', url: '#' }
                  ].map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors"
                    >
                      <span className="text-lg">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;