// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Composants
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import ScrollIndicator from './components/Common/ScrollIndicator';

// Sections
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Programs from './components/Sections/Programs';
import Team from './components/Sections/Team';
import News from './components/Sections/News';
import Contact from './components/Sections/Contact';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/About';
import ProgramsPage from './pages/Programs';
import TeamPage from './pages/Team';
import NewsPage from './pages/News';
import ContactPage from './pages/Contact';

// Hooks
import useAudioPlayer from './hooks/useAudioPlayer';
import useScrollIndicator from './hooks/useScrollIndicator';
import useAnalytics from './hooks/useAnalytics';

// Styles
import './styles/globals.css';

// Enregistrer les plugins GSAP
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [stickyPlayerVisible, setStickyPlayerVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Hooks personnalisés
  const { 
    isPlaying, 
    currentTrack, 
    listenersCount, 
    togglePlayPause, 
    volume, 
    setVolume 
  } = useAudioPlayer();
  
  const { scrollProgress } = useScrollIndicator();
  const { trackPageView, trackEvent } = useAnalytics();
  
  // Effet de chargement initial
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Gestion du sticky player
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldShow = scrollY > 300 && isPlaying;
      
      if (shouldShow !== stickyPlayerVisible) {
        setStickyPlayerVisible(shouldShow);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPlaying, stickyPlayerVisible]);
  
  // Animations GSAP
  useEffect(() => {
    // Animation des cartes au scroll
    gsap.fromTo('.card-hover', 
      { 
        y: 50, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.card-hover',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
    
    // Animation des sections
    gsap.fromTo('.section-fade-in', 
      { 
        opacity: 0, 
        y: 30 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.section-fade-in',
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    );
    
    // Cleanup des animations
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  // Gestion de la fermeture du menu mobile
  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };
  
  // Gestion de la fermeture du sticky player
  const handleStickyPlayerClose = () => {
    setStickyPlayerVisible(false);
    togglePlayPause(); // Arrêter la lecture
  };
  
  // Tracking des événements
  const handlePlayButtonClick = () => {
    trackEvent('play_radio', 'Audio', 'Radio Stream');
    togglePlayPause();
  };
  
  // Composant de chargement
  const LoadingScreen = () => (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center z-50">
      <div className="text-center text-white">
        <div className="w-24 h-24 mx-auto mb-6 relative">
          <div className="absolute inset-0 rounded-full border-4 border-white/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl">📻</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-2">Radio Flambeau-Banka</h2>
        <p className="text-white/80">Chargement en cours...</p>
      </div>
    </div>
  );
  
  // Page d'accueil par défaut
  const HomePage = () => (
    <main className="min-h-screen">
      <Hero onPlayClick={handlePlayButtonClick} />
      <About />
      <Programs />
      <Team />
      <News />
      <Contact />
    </main>
  );
  
  if (loading) {
    return <LoadingScreen />;
  }
  
  return (
    <HelmetProvider>
      <Router>
        <div className="App font-poppins">
          {/* Indicateur de défilement */}
          <ScrollIndicator progress={scrollProgress} />
          
          {/* Header */}
          <Header 
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            onPlayClick={handlePlayButtonClick}
            isPlaying={isPlaying}
          />
          
          {/* Contenu principal */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          
          {/* Footer */}
          <Footer />
          
          {/* Lecteur audio sticky */}
          {stickyPlayerVisible && (
            <AudioPlayer
              isSticky={true}
              onClose={handleStickyPlayerClose}
              isPlaying={isPlaying}
              currentTrack={currentTrack}
              listenersCount={listenersCount}
              volume={volume}
              setVolume={setVolume}
              onTogglePlay={handlePlayButtonClick}
            />
          )}
          
          {/* Notifications */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#1f2937',
                color: '#fff',
                borderRadius: '0.5rem',
                padding: '1rem',
              },
              success: {
                iconTheme: {
                  primary: '#10b981',
                  secondary: '#fff',
                },
              },
              error: {
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;