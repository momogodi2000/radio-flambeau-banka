// src/components/PWA/PWAInstallPrompt.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Smartphone, Monitor, Zap, Wifi } from 'lucide-react';
import { usePWA } from '../../context/PWAContext';

const PWAInstallPrompt = () => {
  const { canInstall, installPWA, isInstalled, deviceType, browser } = usePWA();
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Check if user has already dismissed the prompt
  useEffect(() => {
    const dismissed = localStorage.getItem('pwa-install-dismissed');
    const lastShown = localStorage.getItem('pwa-install-last-shown');
    const now = Date.now();
    const dayInMs = 24 * 60 * 60 * 1000;

    // Show prompt if not dismissed and either never shown or shown more than 3 days ago
    if (!dismissed && canInstall && !isInstalled) {
      if (!lastShown || (now - parseInt(lastShown)) > (3 * dayInMs)) {
        const timer = setTimeout(() => {
          setShowPrompt(true);
          localStorage.setItem('pwa-install-last-shown', now.toString());
        }, 5000); // Show after 5 seconds

        return () => clearTimeout(timer);
      }
    }
  }, [canInstall, isInstalled]);

  // Handle installation
  const handleInstall = async () => {
    setIsInstalling(true);
    setHasInteracted(true);

    try {
      const success = await installPWA();
      
      if (success) {
        setShowPrompt(false);
        localStorage.setItem('pwa-install-success', 'true');
      }
    } catch (error) {
      console.error('Installation failed:', error);
    } finally {
      setIsInstalling(false);
    }
  };

  // Handle dismissal
  const handleDismiss = (permanent = false) => {
    setShowPrompt(false);
    setHasInteracted(true);
    
    if (permanent) {
      localStorage.setItem('pwa-install-dismissed', 'true');
    }
  };

  // Get device-specific info
  const getDeviceInfo = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    
    return { isMobile, isIOS, isAndroid };
  };

  const deviceInfo = getDeviceInfo();

  // Don't show if already installed or can't install
  if (isInstalled || !canInstall || !showPrompt) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Download size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Installer l'App</h3>
                  <p className="text-blue-100 text-sm">Radio Flambeau-Banka</p>
                </div>
              </div>
              <button
                onClick={() => handleDismiss(false)}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-gray-700 mb-4">
              Installez notre application pour une expérience optimale avec :
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Zap size={16} className="text-green-600" />
                </div>
                <span className="text-sm text-gray-700">Accès rapide</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Wifi size={16} className="text-blue-600" />
                </div>
                <span className="text-sm text-gray-700">Mode hors ligne</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  {deviceInfo.isMobile ? <Smartphone size={16} className="text-purple-600" /> : <Monitor size={16} className="text-purple-600" />}
                </div>
                <span className="text-sm text-gray-700">Interface native</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <Download size={16} className="text-orange-600" />
                </div>
                <span className="text-sm text-gray-700">Pas de store</span>
              </div>
            </div>

            {/* Device-specific instructions and install button */}
            {deviceType === 'ios' && !canInstall && !isInstalled && (
              <div className="bg-blue-50 rounded-lg p-3 mb-4" role="alert" aria-live="polite">
                <p className="text-sm text-blue-800">
                  <strong>iOS :</strong> Pour installer l'application, appuyez sur <span aria-label="Partager" role="img">&#x1f5d2;</span> puis "Ajouter à l'écran d'accueil".<br/>
                  <span className="block mt-2">Ouvrez dans Safari pour voir cette option.</span>
                </p>
                <div className="flex justify-center mt-2">
                  <img src="/images/ios-add-to-home.png" alt="Guide iOS Ajouter à l'écran d'accueil" className="w-32 h-auto" />
                </div>
              </div>
            )}
            {deviceType === 'android' && browser === 'chrome' && canInstall && !isInstalled && (
              <button
                onClick={handleInstall}
                disabled={isInstalling}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2"
                aria-label="Installer l'application"
              >
                {isInstalling ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Installation...</span>
                  </>
                ) : (
                  <>
                    <Download size={20} />
                    <span>Installer maintenant</span>
                  </>
                )}
              </button>
            )}
            {(deviceType === 'desktop' || !canInstall) && (
              <p className="text-xs text-gray-500 mt-3 text-center" aria-live="polite">
                L'installation de l'application est disponible sur mobile ou navigateur compatible PWA.
              </p>
            )}

            {/* Action buttons */}
            <div className="flex space-x-3">
              {deviceType === 'android' && browser === 'chrome' && canInstall && !isInstalled && (
                <button
                  onClick={handleInstall}
                  disabled={isInstalling}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2"
                  aria-label="Installer l'application"
                >
                  {isInstalling ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Installation...</span>
                    </>
                  ) : (
                    <>
                      <Download size={20} />
                      <span>Installer maintenant</span>
                    </>
                  )}
                </button>
              )}
              
              <button
                onClick={() => handleDismiss(true)}
                className="px-4 py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors"
              >
                Plus tard
              </button>
            </div>

            {/* Additional info */}
            <p className="text-xs text-gray-500 mt-3 text-center">
              Gratuit • Aucune donnée personnelle collectée
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PWAInstallPrompt;