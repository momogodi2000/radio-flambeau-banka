
// src/pages/News.jsx
import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Eye, 
  Heart, 
  MessageCircle, 
  Share2,
  Search,
  Filter,
  Tag,
  ArrowRight,
  TrendingUp,
  Star
} from 'lucide-react';

const News = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);
  
  const categories = [
    { id: 'all', label: 'Toutes', color: 'from-blue-500 to-purple-600' },
    { id: 'radio', label: 'Radio', color: 'from-green-500 to-emerald-600' },
    { id: 'culture', label: 'Culture', color: 'from-purple-500 to-pink-600' },
    { id: 'communaute', label: 'Communauté', color: 'from-orange-500 to-red-600' },
    { id: 'technologie', label: 'Technologie', color: 'from-teal-500 to-blue-600' },
    { id: 'evenements', label: 'Événements', color: 'from-indigo-500 to-purple-600' }
  ];
  
  const newsArticles = [
    {
      id: 1,
      title: 'Lancement de notre site web officiel',
      excerpt: 'Radio Flambeau-Banka franchit une nouvelle étape avec le lancement de son site web officiel, permettant à notre communauté mondiale d\'accéder facilement à nos contenus.',
      content: `Après plusieurs mois de développement, nous sommes fiers de vous présenter notre nouveau site web officiel. Cette plateforme moderne permet à nos auditeurs du monde entier de nous écouter en direct, découvrir nos programmes et interagir avec notre équipe.
      
      Le site intègre des fonctionnalités avancées comme le streaming haute qualité, les formulaires de contact intégrés et une interface responsive qui s'adapte à tous les appareils. Cette digitalisation s'inscrit dans notre stratégie de modernisation pour mieux servir notre communauté.
      
      "C'est un tournant historique pour Radio Flambeau-Banka", déclare Jean-Paul MBARGA, directeur de la station. "Nous passons d'une radio locale à une plateforme internationale tout en gardant notre âme communautaire."`,
      date: '2025-07-10',
      category: 'technologie',
      author: 'Jean-Paul MBARGA',
      readTime: '3 min',
      views: 2847,
      likes: 156,
      comments: 23,
      image: '/images/news/website-launch.jpg',
      gradient: 'from-blue-500 to-indigo-600',
      featured: true,
      tags: ['Technologie', 'Innovation', 'Digital', 'Site Web']
    },
    {
      id: 2,
      title: 'Nouvelle émission: "Femmes d\'Impact"',
      excerpt: 'Découvrez notre nouvelle émission dédiée aux femmes qui font la différence dans notre communauté et au-delà.',
      content: `Chaque dimanche à 14h, rejoignez-nous pour découvrir les parcours inspirants de femmes qui transforment leur communauté. Des entrepreneures aux leaders associatives, nous donnons la parole à celles qui façonnent l'avenir.
      
      L'émission "Femmes d'Impact" met en lumière les réussites, les défis et les ambitions de femmes remarquables. Présentée par Célestine ATANGANA, elle offre une heure d'échanges authentiques et d'inspiration.
      
      "Les femmes sont les piliers de notre société", explique Célestine. "Cette émission leur rend hommage et inspire la prochaine génération de leaders féminines."`,
      date: '2025-07-08',
      category: 'radio',
      author: 'Célestine ATANGANA',
      readTime: '2 min',
      views: 1892,
      likes: 98,
      comments: 15,
      image: '/images/news/femmes-impact.jpg',
      gradient: 'from-purple-500 to-pink-600',
      tags: ['Émission', 'Femmes', 'Inspiration', 'Leadership']
    },
    {
      id: 3,
      title: 'Célébration des 10 ans de Radio Flambeau-Banka',
      excerpt: 'Une décennie de service à la communauté, d\'information et de divertissement. Retour sur nos moments forts.',
      content: `Il y a 10 ans, Radio Flambeau-Banka voyait le jour avec pour mission d'informer, d'éduquer et de divertir la population de Banka et ses environs. Aujourd'hui, nous rayonnons dans le monde entier grâce à notre digitalisation.
      
      Cette décennie a été marquée par de nombreuses réalisations : prix de la meilleure radio communautaire, extension de notre couverture, formation de nombreux jeunes talents, et maintenant notre transformation digitale.
      
      "Ces 10 années ont été extraordinaires", se réjouit l'équipe. "Nous avons grandi avec notre communauté et aujourd'hui, nous sommes fiers de servir les Camerounais du monde entier."`,
      date: '2025-07-05',
      category: 'radio',
      author: 'Marie ONDOA',
      readTime: '5 min',
      views: 4234,
      likes: 287,
      comments: 45,
      image: '/images/news/10-ans.jpg',
      gradient: 'from-green-500 to-emerald-600',
      featured: true,
      tags: ['Anniversaire', 'Histoire', 'Célébration', 'Communauté']
    },
    {
      id: 4,
      title: 'Festival culturel de Banka 2025',
      excerpt: 'Radio Flambeau-Banka partenaire officiel du Festival culturel de Banka qui se tiendra du 15 au 20 août.',
      content: `Nous sommes fiers d'annoncer notre partenariat avec le Festival culturel de Banka 2025. Nos équipes seront présentes pour couvrir l'événement et vous faire vivre les meilleurs moments.
      
      Ce festival, qui célèbre la richesse culturelle de notre région, accueillera des artistes, des conteurs et des artisans de tout le Cameroun. Radio Flambeau-Banka diffusera en direct les temps forts de cette manifestation.
      
      "C'est l'occasion parfaite de mettre en valeur notre patrimoine culturel", déclare Robert MFOU, notre correspondant qui coordonnera la couverture.`,
      date: '2025-07-03',
      category: 'culture',
      author: 'Robert MFOU',
      readTime: '4 min',
      views: 1756,
      likes: 123,
      comments: 18,
      image: '/images/news/festival.jpg',
      gradient: 'from-orange-500 to-red-600',
      tags: ['Festival', 'Culture', 'Banka', 'Partenariat']
    },
    {
      id: 5,
      title: 'Nouveau studio d\'enregistrement',
      excerpt: 'Amélioration de la qualité audio avec l\'installation d\'un nouveau studio d\'enregistrement dernière génération.',
      content: `Dans notre démarche d'amélioration continue, nous avons investi dans un nouveau studio d'enregistrement équipé des dernières technologies pour offrir une qualité audio exceptionnelle à nos auditeurs.
      
      Ce studio, installé par notre technicien expert Paul ESSOMBA, dispose d'équipements de pointe qui permettront d'améliorer significativement la qualité de nos émissions et de nos enregistrements.
      
      "La qualité audio est l'âme de la radio", explique Paul. "Avec ce nouveau studio, nous offrons à nos auditeurs une expérience sonore premium."`,
      date: '2025-07-01',
      category: 'technologie',
      author: 'Paul ESSOMBA',
      readTime: '3 min',
      views: 1345,
      likes: 89,
      comments: 12,
      image: '/images/news/studio.jpg',
      gradient: 'from-teal-500 to-blue-600',
      tags: ['Studio', 'Technologie', 'Audio', 'Qualité']
    },
    {
      id: 6,
      title: 'Partenariat avec les écoles locales',
      excerpt: 'Initiative éducative pour sensibiliser les jeunes aux métiers de la radio et de la communication.',
      content: `Radio Flambeau-Banka lance un programme de partenariat avec les établissements scolaires de la région pour initier les jeunes aux métiers de la radio et développer leurs compétences en communication.
      
      Ce programme comprend des visites des studios, des ateliers pratiques et des stages d'initiation. L'objectif est de susciter des vocations et de former la prochaine génération de professionnels des médias.
      
      "Investir dans la jeunesse, c'est investir dans l'avenir de notre profession", souligne l'équipe éducative.`,
      date: '2025-06-28',
      category: 'communaute',
      author: 'Équipe Radio',
      readTime: '3 min',
      views: 1567,
      likes: 134,
      comments: 16,
      image: '/images/news/ecoles.jpg',
      gradient: 'from-indigo-500 to-purple-600',
      tags: ['Éducation', 'Partenariat', 'Jeunesse', 'Formation']
    }
  ];
  
  const filteredNews = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const featuredNews = newsArticles.filter(article => article.featured);
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  const handleShare = (article) => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href
      });
    } else {
      const shareText = `${article.title} - ${article.excerpt}`;
      const shareUrl = window.location.href;
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
      window.open(twitterUrl, '_blank');
    }
  };
  
  return (
    <>
      <Helmet>
        <title>Actualités - Radio Flambeau-Banka</title>
        <meta name="description" content="Suivez toute l'actualité de Radio Flambeau-Banka : nouveaux programmes, événements, partenariats et nouvelles de la communauté." />
        <meta name="keywords" content="actualités, nouvelles, événements, programmes, radio, communauté, Banka" />
        <meta property="og:title" content="Actualités - Radio Flambeau-Banka" />
        <meta property="og:description" content="Suivez toute l'actualité de Radio Flambeau-Banka." />
        <meta property="og:url" content="https://www.radioflambeaubanka.com/news" />
        <link rel="canonical" href="https://www.radioflambeaubanka.com/news" />
      </Helmet>
      
      <div className="min-h-screen bg-white dark:bg-gray-900" ref={ref}>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900 dark:to-gray-800">
          <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Actualités
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 dark:text-purple-200">
                Les dernières nouvelles, événements et histoires de la communauté
              </p>
              <div className="w-24 h-1 bg-white dark:bg-purple-400 mx-auto rounded-full"></div>
            </motion.div>
          </div>
        </section>
        
        {/* Filtres et recherche */}
        <section className="py-8 bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Recherche */}
              <div className="relative flex-1 max-w-md">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher dans les actualités..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              {/* Filtres de catégories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Articles à la une */}
        {selectedCategory === 'all' && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  À la une
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Les actualités les plus importantes de Radio Flambeau-Banka
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {featuredNews.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`bg-gradient-to-br ${article.gradient} rounded-3xl p-8 text-white relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300`}
                    onClick={() => setSelectedArticle(article)}
                  >
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
                          <Tag size={14} className="inline mr-2" />
                          {categories.find(c => c.id === article.category)?.label}
                        </div>
                        <div className="flex items-center text-white/80 text-sm">
                          <Calendar size={14} className="mr-2" />
                          {formatDate(article.date)}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4">{article.title}</h3>
                      <p className="text-white/90 mb-6 leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-white/80">
                          <div className="flex items-center">
                            <User size={14} className="mr-1" />
                            {article.author}
                          </div>
                          <div className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            {article.readTime}
                          </div>
                        </div>
                        
                        <ArrowRight size={20} className="transform group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Grille des articles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredNews.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search size={48} className="mx-auto" />
                </div>
                <p className="text-gray-600">Aucun article trouvé pour ces critères.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredNews.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                    onClick={() => setSelectedArticle(article)}
                  >
                    {/* Header avec gradient */}
                    <div className={`h-48 bg-gradient-to-br ${article.gradient} relative`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                        {categories.find(c => c.id === article.category)?.label}
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="flex items-center text-sm">
                          <Calendar size={14} className="mr-2" />
                          {formatDate(article.date)}
                        </div>
                      </div>
                    </div>
                    
                    {/* Contenu */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Métadonnées */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center">
                            <User size={14} className="mr-1" />
                            {article.author}
                          </div>
                          <div className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            {article.readTime}
                          </div>
                        </div>
                      </div>
                      
                      {/* Statistiques et actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Eye size={14} className="mr-1" />
                            {article.views}
                          </div>
                          <div className="flex items-center">
                            <Heart size={14} className="mr-1" />
                            {article.likes}
                          </div>
                          <div className="flex items-center">
                            <MessageCircle size={14} className="mr-1" />
                            {article.comments}
                          </div>
                        </div>
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleShare(article);
                          }}
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <Share2 size={16} className="text-gray-500" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>
        
        {/* Modal article complet */}
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 overflow-y-auto"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`relative h-64 bg-gradient-to-br ${selectedArticle.gradient} p-6`}>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  ×
                </button>
                
                <div className="h-full flex flex-col justify-between text-white">
                  <div className="flex items-center justify-between">
                    <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      {categories.find(c => c.id === selectedArticle.category)?.label}
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar size={14} className="mr-2" />
                      {formatDate(selectedArticle.date)}
                    </div>
                  </div>
                  
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{selectedArticle.title}</h1>
                    <div className="flex items-center space-x-4 text-sm text-white/80">
                      <div className="flex items-center">
                        <User size={14} className="mr-2" />
                        {selectedArticle.author}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-2" />
                        {selectedArticle.readTime}
                      </div>
                      <div className="flex items-center">
                        <Eye size={14} className="mr-2" />
                        {selectedArticle.views} vues
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contenu */}
              <div className="p-8">
                <div className="prose prose-lg max-w-none">
                  {selectedArticle.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed text-gray-700">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-8 mb-6">
                  {selectedArticle.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Actions */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-red-500 hover:text-red-600 transition-colors">
                      <Heart size={20} />
                      <span>{selectedArticle.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors">
                      <MessageCircle size={20} />
                      <span>{selectedArticle.comments}</span>
                    </button>
                    <button 
                      onClick={() => handleShare(selectedArticle)}
                      className="flex items-center space-x-2 text-gray-500 hover:text-gray-600 transition-colors"
                    >
                      <Share2 size={20} />
                      <span>Partager</span>
                    </button>
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    Article publié le {formatDate(selectedArticle.date)}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        
        {/* Newsletter */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Restez informé
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Abonnez-vous à notre newsletter pour recevoir nos dernières actualités directement dans votre boîte mail
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                S'abonner à la newsletter
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default News;
