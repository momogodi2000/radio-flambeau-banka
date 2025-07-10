// src/components/Header/Header.jsx - Enhanced header with new navigation
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Radio, 
  Home, 
  Users, 
  Calendar, 
  Phone,
  Camera,
  Handshake,
  Newspaper,
  Info,
  Volume2,
  MessageCircle,
  Download,
  Wifi,
  WifiOff
} from 'lucide-react';
import { useAudio } from '../../context/AudioContext';
import { usePWA } from '../../context/PWAContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isPlaying, isLoading } = useAudio();
  const { canInstall, installPWA, isOnline } = usePWA();

  // Enhanced navigation items with new pages
  const navigationItems = [
    { name: 'Accueil', path: '/', icon: Home },
    { name: 'À propos', path: '/about', icon: Info },
    { name: 'Programmes', path: '/programs', icon: Calendar },
    { name: 'Équipe', path: '/team', icon: Users },
    { name: 'Actualités', path: '/news', icon: Newspaper },
    { name: 'Galerie', path: '/gallery', icon: Camera },
    { name: 'Partenaires', path: '/partners', icon: Handshake },
    { name: 'Contact', path: '/contact', icon: Phone }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleInstallClick = async () => {
    if (canInstall) {
      await installPWA();
    }
  };

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const contactActions = [
    {
      label: 'WhatsApp',
      icon: MessageCircle,
      action: () => window.open(`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`, '_blank'),
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      label: 'Email',
      icon: Phone,
      action: () => window.open(`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`, '_blank'),
      color: 'bg-blue-500 hover:bg-blue-600'
    }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Radio size={24} className="text-white" />
                  {isPlaying && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
                {isLoading && (
                  <div className="absolute inset-0 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                )}
              </div>
              <div className="hidden md:block">
                <h1 className={`text-xl font-bold transition-colors ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}>
                  Radio Flambeau-Banka
                </h1>
                <p className={`text-sm transition-colors ${
                  isScrolled ? 'text-gray-600' : 'text-white/80'
                }`}>
                  {import.meta.env.VITE_RADIO_SLOGAN}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    isActivePath(item.path)
                      ? 'bg-blue-600 text-white shadow-lg'
                      : isScrolled
                        ? 'text-gray-700 hover:bg-gray-100'
                        : 'text-white hover:bg-white/20'
                  }`}
                >
                  <item.icon size={16} />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Online/Offline Indicator */}
              <div className={`hidden md:flex items-center space-x-2 px-3 py-1 rounded-full text-sm ${
                isOnline 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                {isOnline ? <Wifi size={14} /> : <WifiOff size={14} />}
                <span>{isOnline ? 'En ligne' : 'Hors ligne'}</span>
              </div>

              {/* PWA Install Button */}
              {canInstall && (
                <button
                  onClick={handleInstallClick}
                  className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isScrolled
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <Download size={16} />
                  <span>Installer</span>
                </button>
              )}

              {/* Quick Contact Actions */}
              <div className="hidden md:flex items-center space-x-2">
                {contactActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${action.color} text-white`}
                    title={action.label}
                  >
                    <action.icon size={16} />
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={handleMenuToggle}
                className={`lg:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isScrolled
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={handleMenuToggle}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl"
            >
              {/* Menu Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Menu</h2>
                  <button
                    onClick={handleMenuToggle}
                    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                {/* Online Status */}
                <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm ${
                  isOnline ? 'bg-green-500/20' : 'bg-red-500/20'
                }`}>
                  {isOnline ? <Wifi size={14} /> : <WifiOff size={14} />}
                  <span>{isOnline ? 'Connecté' : 'Hors ligne'}</span>
                </div>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto p-6">
                <nav className="space-y-2">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                          isActivePath(item.path)
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <item.icon size={20} />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Quick Actions */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    Contact Rapide
                  </h3>
                  <div className="space-y-3">
                    {contactActions.map((action, index) => (
                      <button
                        key={index}
                        onClick={action.action}
                        className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${action.color} text-white`}
                      >
                        <action.icon size={20} />
                        <span className="font-medium">{action.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* PWA Install */}
                {canInstall && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <button
                      onClick={handleInstallClick}
                      className="w-full flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <Download size={20} />
                      <span className="font-medium">Installer l'App</span>
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;