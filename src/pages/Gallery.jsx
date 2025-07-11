// src/pages/Gallery.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Gallery images with categories
  const galleryImages = [
    {
      id: 1,
      src: '/images/team/jean-paul.jpg',
      alt: 'Jean-Paul en studio',
      category: 'studio',
      title: 'Jean-Paul en direct',
      description: 'Animation de l\'émission matinale'
    },
    {
      id: 2,
      src: '/images/team/marie.jpg',
      alt: 'Marie en interview',
      category: 'events',
      title: 'Interview exclusive',
      description: 'Marie avec notre invité spécial'
    },
    {
      id: 3,
      src: '/images/team/paul.jpg',
      alt: 'Paul en reportage',
      category: 'field',
      title: 'Reportage terrain',
      description: 'Paul en reportage à Banka'
    },
    {
      id: 4,
      src: '/images/bafang.jpg',
      alt: 'Studio principal',
      category: 'studio',
      title: 'Notre studio principal',
      description: 'Équipement professionnel pour une qualité optimale'
    },
    {
      id: 5,
      src: '/images/clovy.jpg',
      alt: 'Événement communautaire',
      category: 'events',
      title: 'Fête communautaire',
      description: 'Radio Flambeau-Banka au cœur de la communauté'
    },
    {
      id: 6,
      src: '/images/protege.jpg',
      alt: 'Équipe technique',
      category: 'team',
      title: 'Notre équipe technique',
      description: 'Les experts derrière le son parfait'
    },
    {
      id: 7,
      src: '/images/qv1.jpg',
      alt: 'Réunion d\'équipe',
      category: 'team',
      title: 'Réunion éditoriale',
      description: 'Planification des programmes hebdomadaires'
    },
    {
      id: 8,
      src: '/images/programs/morning.jpg',
      alt: 'Émission matinale',
      category: 'studio',
      title: 'Émission matinale',
      description: 'Réveil en douceur avec Radio Flambeau-Banka'
    },
    {
      id: 9,
      src: '/images/programs/music.jpg',
      alt: 'Session musicale',
      category: 'studio',
      title: 'Session musicale live',
      description: 'Performances d\'artistes locaux dans nos studios'
    },
    {
      id: 10,
      src: '/images/programs/news.jpg',
      alt: 'Bulletin d\'information',
      category: 'studio',
      title: 'Bulletin d\'information',
      description: 'L\'actualité locale et nationale en direct'
    },
    {
      id: 11,
      src: '/images/flyer.png',
      alt: 'Événement spécial',
      category: 'events',
      title: 'Concert annuel',
      description: 'Radio Flambeau-Banka présente les talents locaux'
    },
    {
      id: 12,
      src: '/images/hero-bg.jpg',
      alt: 'Vue de Banka',
      category: 'field',
      title: 'Notre belle région',
      description: 'Vue panoramique de Banka'
    }
  ];
  
  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'studio', label: 'Studio' },
    { id: 'events', label: 'Événements' },
    { id: 'team', label: 'Équipe' },
    { id: 'field', label: 'Reportages' }
  ];
  
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);
  
  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };
  
  const downloadImage = () => {
    if (!selectedImage) return;
    
    const link = document.createElement('a');
    link.href = selectedImage.src;
    link.download = `radio-flambeau-${selectedImage.id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Helmet>
        <title>Galerie - Radio Flambeau-Banka</title>
        <meta name="description" content="Découvrez les moments forts de Radio Flambeau-Banka à travers notre galerie d'images : événements, studio, équipe et reportages." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-600 to-purple-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Notre Galerie
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">
                Découvrez Radio Flambeau-Banka en images
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {/* Category Filters */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-2 rounded-full transition-colors ${
                      activeCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    } shadow-sm`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow bg-white"
                >
                  <div 
                    className="aspect-w-4 aspect-h-3 cursor-pointer"
                    onClick={() => openLightbox(image)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                    <p className="text-white/80 text-sm">{image.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Empty State */}
            {filteredImages.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">
                  Aucune image trouvée dans cette catégorie.
                </p>
              </div>
            )}
          </div>
        </section>
        
        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="absolute top-4 right-4 z-10 flex gap-4">
              <button
                onClick={downloadImage}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                aria-label="Télécharger l'image"
              >
                <Download size={24} />
              </button>
              <button
                onClick={closeLightbox}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                aria-label="Fermer"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="relative w-full max-w-5xl max-h-[80vh]">
              <div className="relative h-full flex items-center justify-center">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="max-h-[80vh] max-w-full object-contain"
                />
                
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                  <h3 className="font-semibold text-lg">{selectedImage.title}</h3>
                  <p className="text-white/80 text-sm">{selectedImage.description}</p>
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                aria-label="Image précédente"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                aria-label="Image suivante"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;