// src/components/Common/ErrorBoundary.jsx
import React from 'react';
import { AlertTriangle, RefreshCw, Home, MessageCircle } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null,
      errorId: null
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    const errorId = Date.now().toString(36) + Math.random().toString(36).substr(2);
    
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo,
      errorId
    });

    // Report error to monitoring service in production
    if (import.meta.env.PROD) {
      this.reportError(error, errorInfo, errorId);
    }
  }

  reportError = (error, errorInfo, errorId) => {
    // In a real app, you would send this to your error reporting service
    // Example: Sentry, LogRocket, or your own error tracking
    try {
      const errorReport = {
        errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        userId: localStorage.getItem('userId') || 'anonymous'
      };

      // Send to error reporting service
      // fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorReport)
      // });

      console.log('Error Report:', errorReport);
    } catch (reportingError) {
      console.error('Failed to report error:', reportingError);
    }
  };

  handleRetry = () => {
    this.setState({ 
      hasError: false, 
      error: null, 
      errorInfo: null,
      errorId: null
    });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleContactSupport = () => {
    const subject = encodeURIComponent(`Erreur sur le site - ID: ${this.state.errorId}`);
    const body = encodeURIComponent(
      `Bonjour,\n\nJ'ai rencontré une erreur sur le site de Radio Flambeau-Banka.\n\nID de l'erreur: ${this.state.errorId}\nPage: ${window.location.href}\nNavigateur: ${navigator.userAgent}\n\nDescription du problème:\n[Décrivez ce que vous faisiez quand l'erreur s'est produite]\n\nMerci.`
    );
    window.open(`mailto:${import.meta.env.VITE_CONTACT_EMAIL}?subject=${subject}&body=${body}`);
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle size={32} />
              </div>
              <h1 className="text-2xl font-bold mb-2">Oups ! Une erreur s'est produite</h1>
              <p className="text-red-100">
                Nous nous excusons pour cette interruption
              </p>
              <p className="text-red-200 mt-2">
                Si l'application reste bloquée sur le chargement ou affiche une page blanche, il y a un problème critique avec l'application React.<br />
                Essayez de recharger la page, de vider le cache, ou contactez le support si le problème persiste.
              </p>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="text-center mb-6">
                <p className="text-gray-600 mb-4">
                  Une erreur technique inattendue s'est produite. Notre équipe a été automatiquement notifiée.
                </p>
                
                {this.state.errorId && (
                  <div className="bg-gray-100 rounded-lg p-3 mb-4">
                    <p className="text-sm text-gray-600">
                      <strong>ID de l'erreur:</strong> {this.state.errorId}
                    </p>
                  </div>
                )}

                {import.meta.env.DEV && this.state.error && (
                  <details className="text-left bg-red-50 rounded-lg p-4 mb-4">
                    <summary className="cursor-pointer text-red-700 font-medium mb-2">
                      Détails de l'erreur (développement)
                    </summary>
                    <pre className="text-xs text-red-600 overflow-auto max-h-32">
                      {this.state.error.toString()}
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={this.handleRetry}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <RefreshCw size={20} />
                  <span>Réessayer</span>
                </button>

                <button
                  onClick={this.handleGoHome}
                  className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Home size={20} />
                  <span>Retour à l'accueil</span>
                </button>

                <button
                  onClick={this.handleContactSupport}
                  className="w-full bg-green-500 text-white py-3 px-4 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>Contacter le support</span>
                </button>
              </div>

              {/* Additional Help */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-3">Que puis-je faire ?</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Actualisez la page (F5 ou Ctrl+R)</li>
                  <li>• Vérifiez votre connexion Internet</li>
                  <li>• Essayez de vider le cache de votre navigateur</li>
                  <li>• Contactez-nous si le problème persiste</li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Support technique:</strong><br />
                  Email: {import.meta.env.VITE_CONTACT_EMAIL}<br />
                  WhatsApp: {import.meta.env.VITE_WHATSAPP_NUMBER}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;