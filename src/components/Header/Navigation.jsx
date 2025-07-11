// src/components/Header/Navigation.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  Users, 
  Calendar, 
  Phone,
  Camera,
  Building2,
  Newspaper,
  Info
} from 'lucide-react';

const Navigation = ({ isScrolled = false, className = '' }) => {
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

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`hidden lg:flex items-center space-x-1 ${className}`}>
      {navigationItems.map((item, index) => (
        <motion.div
          key={item.path}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <Link
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
        </motion.div>
      ))}
    </nav>
  );
};

export default Navigation;
