import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { FaExternalLinkAlt, FaEye, FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Parrilla La Estaca',
      category: 'Identidad Visual',
      description: '¿Cómo logramos que una parrilla familiar se convierta en una marca con identidad propia? Te presento el trabajo que venimos haciendo con La Estaca: un lugar increíble que solo necesitaba mostrar su esencia con claridad. Desde BaliDesing trabajamos diseño visual, contenido estratégico y gestión completa de redes.',
      images: [
        '/images/laEstaca/laEstaca1.jpg',
        '/images/laEstaca/laEstaca2.jpg',
        '/images/laEstaca/laEstaca3.jpg',
        '/images/laEstaca/laEstaca4.jpg'
      ],
      tags: ['Logo', 'Cartelería', 'Redes Sociales', 'Gastronomía'],
      type: 'images',
      featured: true
    },
    {
      id: 2,
      title: 'YamiLuzzFitt Gym',
      category: 'Branding Fitness',
      description: 'Nuevo branding para Yamiluz Fitt ✨ Tuve el placer de diseñar la identidad visual de una persona que admiro muchísimo: mi mejor amiga y una preparadora física de altísimo nivel. Yamiluz Fitt es un espacio de entrenamiento seguro, personalizado y con propósito. El branding tenía que reflejar eso: fuerza, movimiento y contención.',
      images: [
        '/images/YamiLuzzFitt/YamiLuzzFitt1.jpg',
        '/images/YamiLuzzFitt/YamiLuzzFitt2.jpg',
        '/images/YamiLuzzFitt/YamiLuzzFitt3.jpg'
      ],
      tags: ['Fitness', 'Logo', 'Paleta', 'Contenido Visual'],
      type: 'images',
      featured: true
    },
    {
      id: 3,
      title: 'Boda Marisol & Gerónimo',
      category: 'Eventos & Celebraciones',
      description: 'Muy feliz de este nuevo trabajo realizado de la mano de @sole_eventostw. Packaging completo para esta hermosa boda: cartel de bienvenida, números de mesa, kit anti resaca, kit de emergencia, adhesivos, capitán de mesa, menú, votos y cartelería completa. Todo personalizado para crear una experiencia única.',
      images: [
        '/images/casamiento/casamiento1.jpg',
        '/images/casamiento/casamiento2.jpg',
        '/images/casamiento/casamiento3.jpg',
        '/images/casamiento/casamiento4.jpg',
        '/images/casamiento/casamiento5.jpg',
        '/images/casamiento/casamiento6.jpg'
      ],
      tags: ['Bodas', 'Packaging', 'Señalética', 'Eventos'],
      type: 'images',
      featured: true
    },
    {
      id: 4,
      title: 'La Estaca en Movimiento',
      category: 'Contenido Audiovisual',
      description: 'El resultado: comunidad, identidad, y una presencia que da hambre 😋. Mirá cómo cobraron vida todos los elementos gráficos en acción.',
      video: '/videos/laEstaca/laEstaca1.mp4',
      thumbnail: '/images/laEstaca/laEstaca2.jpg',
      tags: ['Video', 'Branding', 'Social Media'],
      type: 'video',
      featured: false
    },
    {
      id: 5,
      title: 'YamiLuzzFitt en Acción',
      category: 'Video Branding',
      description: 'Todo pensado para que su comunidad conecte, se inspire y entrene con sentido 🖤. La identidad visual cobrando vida en movimiento.',
      video: '/videos/YamiLuzzFitt/YamiLuzzFitt1.mp4',
      thumbnail: '/images/YamiLuzzFitt/YamiLuzzFitt2.jpg',
      tags: ['Video', 'Fitness', 'Identidad'],
      type: 'video',
      featured: false
    },
    {
      id: 6,
      title: 'Proceso Creativo Boda',
      category: 'Behind the Scenes',
      description: 'Un vistazo al proceso creativo detrás de cada elemento personalizado. Desde el concepto hasta la realización final.',
      video: '/videos/casamiento/casamiento1.mp4',
      thumbnail: '/images/casamiento/casamiento3.jpg',
      tags: ['Proceso', 'Making Of', 'Bodas'],
      type: 'video',
      featured: false
    }
  ];

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.type === 'images' && selectedProject.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.type === 'images' && selectedProject.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      className="py-20 lg:py-32 bg-bali-beige"
    >
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-bali-darker mb-6 leading-tight">
            Marcas que{' '}
            <span className="italic text-bali-brown">cobran vida</span>
          </h2>
          <p className="text-lg md:text-xl text-bali-dark font-sans leading-relaxed">
            Cada proyecto es una historia única, diseñada{' '}
            <span className="font-medium text-bali-brown">con propósito y corazón</span>.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="space-y-12">
          
          {/* Featured Projects Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-serif font-light text-bali-darker mb-8 text-center">
              Proyectos Destacados
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.filter(project => project.featured).map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  onClick={() => openProject(project)}
                >
                  {/* Project Card */}
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 overflow-hidden h-full">
                    
                    {/* Project Image */}
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img 
                        src={project.images[0]} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      
                      {/* Fallback */}
                      <div className="absolute inset-0 bg-gradient-to-br from-bali-light via-bali-mauve to-bali-brown hidden items-center justify-center">
                        <div className="text-center space-y-2">
                          <div className="w-16 h-16 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                            <span className="text-white text-2xl">🎨</span>
                          </div>
                          <p className="text-white font-sans text-sm">{project.title}</p>
                        </div>
                      </div>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-bali-brown/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center space-y-3">
                          <FaEye className="text-white text-3xl mx-auto" />
                          <p className="text-white font-sans font-medium">Ver proyecto</p>
                          <div className="text-white text-sm">
                            {project.images.length} imagen{project.images.length > 1 ? 'es' : ''}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs bg-bali-brown/10 text-bali-brown px-3 py-1 rounded-full font-sans font-medium">
                          {project.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-serif font-medium text-bali-darker group-hover:text-bali-brown transition-colors duration-300 mb-3 line-clamp-2">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm text-bali-dark font-sans leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="text-xs text-bali-dark/60 bg-bali-light px-2 py-1 rounded-full font-sans"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Video Content Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-serif font-light text-bali-darker mb-8 text-center">
              Contenido en Movimiento
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.filter(project => !project.featured).map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.2) }}
                  onClick={() => openProject(project)}
                >
                  {/* Video Card */}
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 overflow-hidden h-full">
                    
                    {/* Video Thumbnail */}
                    <div className="relative overflow-hidden aspect-[16/9]">
                      <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      
                      {/* Video Play Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-bali-brown/80 rounded-full flex items-center justify-center group-hover:bg-bali-brown transition-colors duration-300">
                          <FaPlay className="text-white text-xl ml-1" />
                        </div>
                      </div>
                      
                      {/* Fallback */}
                      <div className="absolute inset-0 bg-gradient-to-br from-bali-light via-bali-mauve to-bali-brown hidden items-center justify-center">
                        <div className="text-center space-y-2">
                          <div className="w-16 h-16 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                            <FaPlay className="text-white text-2xl ml-1" />
                          </div>
                          <p className="text-white font-sans text-sm">{project.title}</p>
                        </div>
                      </div>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-bali-brown/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center space-y-3">
                          <FaPlay className="text-white text-3xl mx-auto" />
                          <p className="text-white font-sans font-medium">Ver video</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs bg-bali-brown/10 text-bali-brown px-3 py-1 rounded-full font-sans font-medium">
                          {project.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-serif font-medium text-bali-darker group-hover:text-bali-brown transition-colors duration-300 mb-3 line-clamp-2">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm text-bali-dark font-sans leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="text-xs text-bali-dark/60 bg-bali-light px-2 py-1 rounded-full font-sans"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg text-bali-dark font-sans mb-6">
            ¿Te imaginás tu marca así de impactante?
          </p>
          <button
            onClick={() => {
              const message = "¡Hola Yami! Me encanta tu trabajo. ¿Podemos hablar sobre mi proyecto? 🎨";
              const phoneNumber = "5492804726519";
              const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(url, '_blank');
            }}
            className="bg-bali-brown text-white px-8 py-4 rounded-full font-sans font-medium text-lg hover:bg-bali-dark transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Creemos algo increíble juntas
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <motion.div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={closeModal}
        >
          <motion.div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Content */}
            <div className="p-8">
              {/* Close Button */}
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-bali-brown/10 rounded-full flex items-center justify-center text-bali-brown hover:bg-bali-brown hover:text-white transition-colors duration-300 text-xl font-bold z-10"
              >
                ×
              </button>

              {/* Project Media with Navigation */}
              <div className="w-full relative mb-6 rounded-2xl overflow-hidden">
                {selectedProject.type === 'video' ? (
                  <div className="relative" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                    <video 
                      src={selectedProject.video}
                      controls
                      autoPlay
                      className="absolute inset-0 w-full h-full object-contain bg-black"
                      poster={selectedProject.thumbnail}
                    >
                      Tu navegador no soporta videos.
                    </video>
                  </div>
                ) : (
                  <div className="h-80 md:h-96">
                    <img 
                      src={selectedProject.images[currentImageIndex]} 
                      alt={`${selectedProject.title} - Imagen ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback */}
                    <div className="absolute inset-0 bg-gradient-to-br from-bali-light via-bali-mauve to-bali-brown hidden items-center justify-center">
                      <div className="text-center space-y-2">
                        <div className="w-20 h-20 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                          <span className="text-white text-3xl">🎨</span>
                        </div>
                        <p className="text-white font-sans">{selectedProject.title}</p>
                      </div>
                    </div>

                    {/* Navigation Arrows - Only for image galleries */}
                    {selectedProject.images && selectedProject.images.length > 1 && (
                      <>
                        <button 
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-bali-brown hover:text-bali-dark transition-all duration-300 shadow-lg"
                        >
                          <FaChevronLeft />
                        </button>
                        <button 
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-bali-brown hover:text-bali-dark transition-all duration-300 shadow-lg"
                        >
                          <FaChevronRight />
                        </button>
                      </>
                    )}

                    {/* Image Counter - Only for image galleries */}
                    {selectedProject.images && selectedProject.images.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                        {currentImageIndex + 1} / {selectedProject.images.length}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Thumbnail Navigation - Only for image galleries */}
              {selectedProject.type === 'images' && selectedProject.images && selectedProject.images.length > 1 && (
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                  {selectedProject.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'border-bali-brown shadow-lg' 
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Project Details */}
              <div className="space-y-4">
                <div>
                  <span className="text-sm bg-bali-brown/10 text-bali-brown px-3 py-1 rounded-full font-sans font-medium">
                    {selectedProject.category}
                  </span>
                </div>
                
                <h3 className="text-3xl font-serif font-medium text-bali-darker">
                  {selectedProject.title}
                </h3>
                
                <p className="text-lg text-bali-dark font-sans leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-sm text-bali-dark bg-bali-light px-3 py-1 rounded-full font-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Modal CTA */}
                <div className="pt-6">
                  <button
                    onClick={() => {
                      const message = `¡Hola Yami! Me interesa un proyecto similar a "${selectedProject.title}". ¿Hablamos? 🎨`;
                      const phoneNumber = "5492804726519";
                      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                      window.open(url, '_blank');
                    }}
                    className="w-full bg-bali-brown text-white px-6 py-3 rounded-full font-sans font-medium hover:bg-bali-dark transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Quiero algo así</span>
                    <FaExternalLinkAlt className="text-sm" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Portfolio;