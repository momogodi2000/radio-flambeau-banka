// src/pages/Offline.jsx - Enhanced offline experience
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  WifiOff, 
  RefreshCw, 
  Home, 
  Download, 
  Clock,
  Radio,
  Headphones,
  Music,
  Calendar,
  Users,
  Camera,
  Archive,
  Zap
} from 'lucide-react';
import { usePWA } from '../context/PWAContext';

const Offline = () => {
  const [isRetrying, setIsRetrying] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState(null);
  const { cacheSize, getCacheSize } = usePWA();

  useEffect(() => {
    // Get last sync time from localStorage
    const lastSync = localStorage.getItem('lastSyncTime');
    if (lastSync) {
      setLastSyncTime(new Date(parseInt(lastSync)));
    }

    // Update cache size
    getCacheSize();
  }, [getCacheSize]);

  const handleRetry = async () => {
    setIsRetrying(true);
    
    try {
      // Wait a bit for the animation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Try to reload the page
      window.location.reload();
    } catch (error) {
      console.error('Retry failed:', error);
      setIsRetrying(false);
    }
  };

  const goHome = () => {
    window.location.href = '/';
  };

  // Get cached content summary
  const getCachedContentSummary = () => {
    const cachedPages = JSON.parse(localStorage.getItem('cachedPages') || '[]');
    const cachedPrograms = JSON.parse(localStorage.getItem('cachedPrograms') || '[]');
    const cachedNews = JSON.parse(localStorage.getItem('cachedNews') || '[]');
    
    return {
      pages: cachedPages.length,
      programs: cachedPrograms.length,
      news: cachedNews.length
    };
  };

  const contentSummary = getCachedContentSummary();

  const offlineFeatures = [
    {
      icon: Home,
      title: 'Pages principales',
      description: 'Accédez aux pages essentielles',
      available: true,
      action: () => goHome()
    },
    {
      icon: Radio,
      title: 'Informations radio',
      description: 'Consultez nos informations',
      available: true,
      action: () => window.location.href = '/about'
    },
    {
      icon: Calendar,
      title: 'Programmes',
      description: `${contentSummary.programs} programmes en cache`,
      available: contentSummary.programs > 0,
      action: () => window.location.href = '/programs'
    },
    {
      icon: Users,
      title: 'Équipe',
      description: 'Découvrez notre équipe',
      available: true,
      action: () => window.location.href = '/team'
    },
    {
      icon: Camera,
      title: 'Galerie',
      description: 'Photos et événements',
      available: true,
      action: () => window.location.href = '/gallery'
    },
    {
      icon: Archive,
      title: 'Actualités',
      description: `${contentSummary.news} articles en cache`,
      available: contentSummary.news > 0,
      action: () => window.location.href = '/news'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mode Hors Ligne - Radio Flambeau-Banka</title>
        <meta name="description" content="Vous êtes actuellement hors ligne. Explorez le contenu disponible en mode hors ligne." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-purple-700 dark:to-blue-900 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <WifiOff size={48} className="text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"
            >
              Mode Hors Ligne
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Vous n'êtes pas connecté à Internet, mais vous pouvez toujours explorer notre contenu en cache.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              onClick={handleRetry}
              disabled={isRetrying}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 flex items-center space-x-2 mx-auto"
            >
              <RefreshCw size={20} className={isRetrying ? 'animate-spin' : ''} />
              <span>{isRetrying ? 'Tentative...' : 'Réessayer la connexion'}</span>
            </motion.button>
          </div>

          {/* Cache Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-white rounded-2xl p-6 shadow-lg mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">Contenu Disponible</h3>
              <div className="flex items-center space-x-2 text-gray-600">
                <Download size={16} />
                <span className="text-sm">Cache: {cacheSize}</span>
              </div>
            </div>
            
            {lastSyncTime && (
              <div className="flex items-center space-x-2 text-gray-500 mb-4">
                <Clock size={16} />
                <span className="text-sm">
                  Dernière synchronisation: {lastSyncTime.toLocaleDateString('fr-FR')} à {lastSyncTime.toLocaleTimeString('fr-FR')}
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{contentSummary.pages}</div>
                <div className="text-sm text-gray-600">Pages en cache</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{contentSummary.programs}</div>
                <div className="text-sm text-gray-600">Programmes</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{contentSummary.news}</div>
                <div className="text-sm text-gray-600">Articles</div>
              </div>
            </div>
          </motion.div>

          {/* Available Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {offlineFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 ${
                  feature.available 
                    ? 'hover:shadow-xl cursor-pointer hover:scale-105' 
                    : 'opacity-50 cursor-not-allowed'
                }`}
                onClick={feature.available ? feature.action : undefined}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                  feature.available 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                    : 'bg-gray-200 text-gray-400'
                }`}>
                  <feature.icon size={24} />
                </div>
                
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h4>
                
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
                
                {feature.available && (
                  <div className="mt-4 flex items-center text-blue-600 text-sm">
                    <span>Disponible hors ligne</span>
                    <Zap size={14} className="ml-1" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Tips */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white text-center"
          >
            <h3 className="text-xl font-bold mb-4">Conseils pour une meilleure expérience hors ligne</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start space-x-2">
                <Download size={16} className="mt-0.5 flex-shrink-0" />
                <span>Visitez les pages importantes quand vous êtes en ligne pour les mettre en cache</span>
              </div>
              <div className="flex items-start space-x-2">
                <Headphones size={16} className="mt-0.5 flex-shrink-0" />
                <span>Le streaming audio nécessite une connexion Internet</span>
              </div>
              <div className="flex items-start space-x-2">
                <Music size={16} className="mt-0.5 flex-shrink-0" />
                <span>Certains contenus multimédias peuvent ne pas être disponibles hors ligne</span>
              </div>
              <div className="flex items-start space-x-2">
                <RefreshCw size={16} className="mt-0.5 flex-shrink-0" />
                <span>Reconnectez-vous régulièrement pour obtenir les dernières mises à jour</span>
              </div>
            </div>
          </motion.div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-center mt-8"
          >
            <button
              onClick={goHome}
              className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold text-lg mt-2 hover:bg-blue-700 transition-colors"
            >
              <Home size={20} />
              <span>Retour à l'accueil</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Offline;