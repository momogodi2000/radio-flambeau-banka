// src/context/PWAContext.jsx - PWA Context for installation and offline capabilities
import React, { createContext, useContext, useState, useEffect } from 'react';

const PWAContext = createContext();

export const usePWA = () => {
  const context = useContext(PWAContext);
  if (!context) {
    throw new Error('usePWA must be used within a PWAProvider');
  }
  return context;
};

export const PWAProvider = ({ children }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [canInstall, setCanInstall] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [cacheSize, setCacheSize] = useState(0);

  // Check if app is already installed
  useEffect(() => {
    const checkInstallation = () => {
      // Check for standalone mode (iOS)
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
      
      // Check for installed PWA (Android/Desktop)
      const isInstalled = window.navigator.standalone || 
                         isStandalone ||
                         document.referrer.includes('android-app://');
      
      setIsInstalled(isInstalled);
    };

    checkInstallation();
  }, []);

  // Listen for beforeinstallprompt event
  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      console.log('[PWA] beforeinstallprompt event fired');
      e.preventDefault();
      setDeferredPrompt(e);
      setCanInstall(true);
    };

    const handleAppInstalled = () => {
      console.log('[PWA] App installed successfully');
      setIsInstalled(true);
      setCanInstall(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  // Monitor online/offline status
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      console.log('[PWA] App is online');
    };
    
    const handleOffline = () => {
      setIsOnline(false);
      console.log('[PWA] App is offline');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Service Worker management
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'UPDATE_AVAILABLE') {
          setUpdateAvailable(true);
        }
      });

      // Get cache size
      getCacheSize();
    }
  }, []);

  // Install PWA
  const installPWA = async () => {
    if (!deferredPrompt) {
      console.log('[PWA] No deferred prompt available');
      return false;
    }

    try {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      console.log(`[PWA] User choice: ${outcome}`);
      
      if (outcome === 'accepted') {
        setCanInstall(false);
        setDeferredPrompt(null);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('[PWA] Install error:', error);
      return false;
    }
  };

  // Get cache size
  const getCacheSize = async () => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      try {
        const messageChannel = new MessageChannel();
        
        navigator.serviceWorker.controller.postMessage(
          { type: 'GET_CACHE_SIZE' },
          [messageChannel.port2]
        );

        messageChannel.port1.onmessage = (event) => {
          if (event.data.cacheSize) {
            setCacheSize(event.data.cacheSize);
          }
        };
      } catch (error) {
        console.error('[PWA] Error getting cache size:', error);
      }
    }
  };

  // Clear cache
  const clearCache = async () => {
    if ('caches' in window) {
      try {
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );
        setCacheSize(0);
        console.log('[PWA] Cache cleared successfully');
        return true;
      } catch (error) {
        console.error('[PWA] Error clearing cache:', error);
        return false;
      }
    }
    return false;
  };

  // Cache specific URLs
  const cacheUrls = async (urls) => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      try {
        const messageChannel = new MessageChannel();
        
        navigator.serviceWorker.controller.postMessage(
          { type: 'CACHE_URLS', urls },
          [messageChannel.port2]
        );

        return new Promise((resolve) => {
          messageChannel.port1.onmessage = (event) => {
            resolve(event.data.success);
          };
        });
      } catch (error) {
        console.error('[PWA] Error caching URLs:', error);
        return false;
      }
    }
    return false;
  };

  // Request notification permission
  const requestNotificationPermission = async () => {
    if ('Notification' in window) {
      try {
        const permission = await Notification.requestPermission();
        console.log(`[PWA] Notification permission: ${permission}`);
        return permission === 'granted';
      } catch (error) {
        console.error('[PWA] Error requesting notification permission:', error);
        return false;
      }
    }
    return false;
  };

  // Subscribe to push notifications
  const subscribeToPush = async () => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      try {
        const registration = await navigator.serviceWorker.ready;
        
        const subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: import.meta.env.VITE_VAPID_PUBLIC_KEY
        });

        console.log('[PWA] Push subscription successful:', subscription);
        
        // Send subscription to server (you'd implement this)
        // await sendSubscriptionToServer(subscription);
        
        return subscription;
      } catch (error) {
        console.error('[PWA] Push subscription failed:', error);
        return null;
      }
    }
    return null;
  };

  // Format cache size for display
  const formatCacheSize = (bytes) => {
    if (bytes === 0) return '0 B';
    
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Check if device supports PWA features
  const getDeviceCapabilities = () => {
    return {
      serviceWorker: 'serviceWorker' in navigator,
      pushNotifications: 'PushManager' in window,
      backgroundSync: 'serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype,
      webShare: 'share' in navigator,
      fullscreen: 'requestFullscreen' in document.documentElement,
      camera: 'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices,
      geolocation: 'geolocation' in navigator,
      storage: 'storage' in navigator && 'estimate' in navigator.storage
    };
  };

  // Share content using Web Share API
  const shareContent = async (data) => {
    if ('share' in navigator) {
      try {
        await navigator.share(data);
        return true;
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('[PWA] Share failed:', error);
        }
        return false;
      }
    }
    return false;
  };

  // Update service worker
  const updateServiceWorker = () => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
      window.location.reload();
    }
  };

  // Add device and browser detection
  const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(ua)) return 'ios';
    if (/Android/.test(ua)) return 'android';
    if (/Windows|Macintosh|Linux/.test(ua) && !/Mobile/.test(ua)) return 'desktop';
    return 'other';
  };
  const getBrowser = () => {
    const ua = navigator.userAgent;
    if (/Chrome/.test(ua) && /Google Inc/.test(navigator.vendor)) return 'chrome';
    if (/Safari/.test(ua) && /Apple Computer/.test(navigator.vendor)) return 'safari';
    if (/Firefox/.test(ua)) return 'firefox';
    if (/Edg/.test(ua)) return 'edge';
    return 'other';
  };
  const deviceType = getDeviceType();
  const browser = getBrowser();

  const value = {
    // State
    canInstall,
    isInstalled,
    isOnline,
    updateAvailable,
    cacheSize: formatCacheSize(cacheSize),
    rawCacheSize: cacheSize,
    deviceType,
    browser,
    
    // Functions
    installPWA,
    clearCache,
    cacheUrls,
    requestNotificationPermission,
    subscribeToPush,
    shareContent,
    updateServiceWorker,
    getCacheSize,
    getDeviceCapabilities,
    
    // Utilities
    formatCacheSize
  };

  return (
    <PWAContext.Provider value={value}>
      {children}
    </PWAContext.Provider>
  );
};