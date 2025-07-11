// src/App.jsx - Updated with enhanced routing and PWA features
import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

// Context Providers
import { AudioProvider } from './context/AudioContext';
import { AppProvider } from './context/AppContext';
import { PWAProvider } from './context/PWAContext';
import { ThemeProvider } from './context/ThemeContext';

// Core Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import LoadingSpinner from './components/Common/LoadingSpinner';
import ErrorBoundary from './components/Common/ErrorBoundary.jsx';
import OfflineIndicator from './components/Common/OfflineIndicator';
import PWAInstallPrompt from './components/PWA/PWAInstallPrompt';
import UpdateAvailable from './components/PWA/UpdateAvailable';

// Lazy-loaded pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Programs = lazy(() => import('./pages/Programs'));
const Team = lazy(() => import('./pages/Team'));
const News = lazy(() => import('./pages/News'));
const Contact = lazy(() => import('./pages/Contact'));
const Partners = lazy(() => import('./pages/Partners'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Offline = lazy(() => import('./pages/Offline'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Global Loading Component
const GlobalLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
    <div className="text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <img 
          src="/images/logo.png" 
          alt="Radio Flambeau-Banka" 
          className="w-24 h-24 mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Radio Flambeau-Banka</h2>
        <p className="text-gray-600">Chargement en cours...</p>
      </motion.div>
      <LoadingSpinner size="large" />
    </div>
  </div>
);

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4
};

// Enhanced Route Component with analytics
const AnalyticsRoute = ({ children }) => {
  useEffect(() => {
    // Track page view
    if (typeof gtag !== 'undefined') {
      gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
        page_path: window.location.pathname,
      });
    }
  }, []);

  return children;
};

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [swUpdate, setSWUpdate] = useState(null);

  // Monitor online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Service Worker registration and update handling
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const registerSW = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/'
          });

          console.log('Service Worker registered successfully:', registration);

          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                setSWUpdate(registration);
              }
            });
          });

          // Listen for messages from service worker
          navigator.serviceWorker.addEventListener('message', (event) => {
            if (event.data.type === 'UPDATE_AVAILABLE') {
              setSWUpdate(registration);
            }
          });

        } catch (error) {
          console.error('Service Worker registration failed:', error);
        }
      };

      registerSW();
    }
  }, []);

  // Handle service worker update
  const handleSWUpdate = () => {
    if (swUpdate && swUpdate.waiting) {
      swUpdate.waiting.postMessage({ type: 'SKIP_WAITING' });
      window.location.reload();
    }
  };

  // Enhanced error reporting
  useEffect(() => {
    const handleError = (event) => {
      console.error('Global error:', event.error);
      // You could send this to an error reporting service
    };

    const handleUnhandledRejection = (event) => {
      console.error('Unhandled promise rejection:', event.reason);
      // You could send this to an error reporting service
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  // Preload critical resources
  useEffect(() => {
    const preloadResources = () => {
      // Preload critical images
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });

      // Preload critical CSS if not already loaded
      if (!document.querySelector('link[href*="app.css"]')) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = '/css/app.css';
        document.head.appendChild(link);
      }
    };

    preloadResources();
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <ErrorBoundary>
          <PWAProvider>
            <AppProvider>
              <AudioProvider>
                <Router>
                  <div className="min-h-screen bg-gray-50 flex flex-col">
                    {/* Global Components */}
                    <OfflineIndicator isOnline={isOnline} />
                    <PWAInstallPrompt />
                    {swUpdate && (
                      <UpdateAvailable onUpdate={handleSWUpdate} />
                    )}
                    
                    {/* Main Layout */}
                    <Header />
                    
                    <main className="flex-1">
                      <Suspense fallback={<GlobalLoader />}>
                        <AnimatePresence mode="wait">
                          <Routes>
                            <Route 
                              path="/" 
                              element={
                                <AnalyticsRoute>
                                  <motion.div
                                    initial="initial"
                                    animate="in"
                                    exit="out"
                                    variants={pageVariants}
                                    transition={pageTransition}
                                  >
                                    <Home />
                                  </motion.div>
                                </AnalyticsRoute>
                              } 
                            />
                            
                            <Route 
                              path="/about" 
                              element={
                                <AnalyticsRoute>
                                  <motion.div
                                    initial="initial"
                                    animate="in"
                                    exit="out"
                                    variants={pageVariants}
                                    transition={pageTransition}
                                  >
                                    <About />
                                  </motion.div>
                                </AnalyticsRoute>
                              } 
                            />
                            
                            <Route 
                              path="/programs" 
                              element={
                                <AnalyticsRoute>
                                  <motion.div
                                    initial="initial"
                                    animate="in"
                                    exit="out"
                                    variants={pageVariants}
                                    transition={pageTransition}
                                  >
                                    <Programs />
                                  </motion.div>
                                </AnalyticsRoute>
                              } 
                            />
                            
                            <Route 
                              path="/team" 
                              element={
                                <AnalyticsRoute>
                                  <motion.div
                                    initial="initial"
                                    animate="in"
                                    exit="out"
                                    variants={pageVariants}
                                    transition={pageTransition}
                                  >
                                    <Team />
                                  </motion.div>
                                </AnalyticsRoute>
                              } 
                            />
                            
                            <Route 
                              path="/news" 
                              element={
                                <AnalyticsRoute>
                                  <motion.div
                                    initial="initial"
                                    animate="in"
                                    exit="out"
                                    variants={pageVariants}
                                    transition={pageTransition}
                                  >
                                    <News />
                                  </motion.div>
                                </AnalyticsRoute>
                              } 
                            />
                            
                            <Route 
                              path="/contact" 
                              element={
                                <AnalyticsRoute>
                                  <motion.div
                                    initial="initial"
                                    animate="in"
                                    exit="out"
                                    variants={pageVariants}
                                    transition={pageTransition}
                                  >
                                    <Contact />
                                  </motion.div>
                                </AnalyticsRoute>
                              } 
                            />
                            
                            {/* New Routes */}
                            <Route 
                              path="/partners" 
                              element={
                                <AnalyticsRoute>
                                  <motion.div
                                    initial="initial"
                                    animate="in"
                                    exit="out"
                                    variants={pageVariants}
                                    transition={pageTransition}
                                  >
                                    <Partners />
                                  </motion.div>
                                </AnalyticsRoute>
                              } 
                            />
                            
                            <Route 
                              path="/gallery" 
                              element={
                                <AnalyticsRoute>
                                  <motion.div
                                    initial="initial"
                                    animate="in"
                                    exit="out"
                                    variants={pageVariants}
                                    transition={pageTransition}
                                  >
                                    <Gallery />
                                  </motion.div>
                                </AnalyticsRoute>
                              } 
                            />
                            
                            {/* Legacy route redirects */}
                            <Route path="/partenaires" element={<Navigate to="/partners" replace />} />
                            <Route path="/galerie" element={<Navigate to="/gallery" replace />} />
                            <Route path="/evenements" element={<Navigate to="/gallery" replace />} />
                            
                            {/* Offline page */}
                            <Route 
                              path="/offline" 
                              element={
                                <motion.div
                                  initial="initial"
                                  animate="in"
                                  exit="out"
                                  variants={pageVariants}
                                  transition={pageTransition}
                                >
                                  <Offline />
                                </motion.div>
                              } 
                            />
                            
                            {/* 404 page */}
                            <Route 
                              path="*" 
                              element={
                                <motion.div
                                  initial="initial"
                                  animate="in"
                                  exit="out"
                                  variants={pageVariants}
                                  transition={pageTransition}
                                >
                                  <NotFound />
                                </motion.div>
                              } 
                            />
                          </Routes>
                        </AnimatePresence>
                      </Suspense>
                    </main>
                    
                    <Footer />
                    <AudioPlayer />
                    
                    {/* Toast notifications */}
                    <Toaster
                      position="bottom-right"
                      toastOptions={{
                        duration: 4000,
                        style: {
                          background: '#363636',
                          color: '#fff',
                        },
                        success: {
                          style: {
                            background: '#10b981',
                          },
                        },
                        error: {
                          style: {
                            background: '#ef4444',
                          },
                        },
                      }}
                    />
                  </div>
                </Router>
              </AudioProvider>
            </AppProvider>
          </PWAProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;