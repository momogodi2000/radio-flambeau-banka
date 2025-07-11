// src/components/Header/MobileMenu.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X,
  Home, 
  Users, 
  Calendar, 
  Phone,
  Camera,
  Building2,
  Newspaper,
  Info,
  MessageCircle,
  Download,
  Wifi,
  WifiOff,
  LogIn
} from 'lucide-react';

const MobileMenu = ({ isOpen, onClose, isOnline, canInstall, onInstallClick, onLoginClick }) => {
  const location = useLocation();

  // Navigation items with icons
  const navigationItems = [
    { name: 'Accueil', path: '/', icon: Home },
    { name: 'À propos', path: '/about', icon: Info },
    { name: 'Programmes', path: '/programs', icon: Calendar },
    { name: 'Équipe', path: '/team', icon: Users },
    { name: 'Actualités', path: '/news', icon: Newspaper },
    { name: 'Galerie', path: '/gallery', icon: Camera },
    { name: 'Partenaires', path: '/partners', icon: Building2 },
    { name: 'Contact', path: '/contact', icon: Phone }
  ];

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

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Close menu on escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
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
            onClick={onClose}
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
                  onClick={onClose}
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
                      onClick={onClose}
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
                      onClick={onInstallClick}
                      className="w-full flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <Download size={20} />
                      <span className="font-medium">Installer l'App</span>
                    </button>
                  </div>
                )}

                {/* Admin Login */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={onLoginClick}
                    className="w-full flex items-center space-x-3 p-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <LogIn size={20} />
                    <span className="font-medium">Panneau d'Administration</span>
                  </button>
                </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
