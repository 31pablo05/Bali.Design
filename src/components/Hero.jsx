import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Imágenes del carrusel
  const carouselImages = [
    '/images/tegustariatrabajarconmigo/naceAca.jpg',
    '/images/tegustariatrabajarconmigo/trabajarJuntos.jpg',
    '/images/representacionInstagram/cosas0.jpg',
    '/images/representacionInstagram/cosas1.jpg',
    '/images/representacionInstagram/cosas2.jpg',
    '/images/representacionInstagram/cosas3.jpg',
  ];

  // Cambio automático de imágenes cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === carouselImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);
  const handleWhatsAppClick = () => {
    const message = "¡Hola Yami! Me gustaría conocer más sobre tus servicios de diseño 🎨";
    const phoneNumber = "5492804726519"; // Formato internacional
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="hero" className="min-h-screen bg-bali-cream flex items-center pt-20 sm:pt-24 lg:pt-28 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Contenido Textual */}
          <motion.div 
            className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Título Principal */}
            <div className="space-y-3 md:space-y-4">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif font-light text-bali-darker leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Diseño que{' '}
                <span className="italic text-bali-brown">siente</span>,
                <br />
                ordena y comunica
                <br />
                <span className="text-bali-brown">tu esencia</span>.
              </motion.h1>
              
              {/* Subtítulo */}
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-bali-dark font-sans font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Identidad visual • Contenido estratégico • Gestión de redes
              </motion.p>
            </div>

            {/* Descripción */}
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-bali-dark font-sans leading-relaxed max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Si estás buscando identidad visual, piezas únicas o ese diseño que hable por tu marca, 
              estás en el lugar correcto. Esto no es solo diseño, es{' '}
              <span className="font-medium text-bali-brown">pasión hecha visual</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                onClick={handleWhatsAppClick}
                className="group bg-bali-brown text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-sans font-medium text-base sm:text-lg hover:bg-bali-dark transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto"
              >
                <FaWhatsapp className="text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300" />
                <span className="whitespace-nowrap">Hablemos de tu marca</span>
              </button>
              
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-bali-brown text-bali-brown px-6 sm:px-8 py-3 sm:py-4 rounded-full font-sans font-medium text-base sm:text-lg hover:bg-bali-brown hover:text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                Ver mi trabajo
              </button>
            </motion.div>
          </motion.div>

          {/* Carrusel de Imágenes */}
          <motion.div 
            className="relative order-1 lg:order-2 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none mx-auto"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Carrusel principal */}
            <div className="relative">
              <div className="aspect-square bg-bali-light rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl relative">
                {/* Imágenes del carrusel */}
                {carouselImages.map((image, index) => (
                  <motion.img
                    key={index}
                    src={image}
                    alt={`Proyecto ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: index === currentImageIndex ? 1 : 0,
                      scale: index === currentImageIndex ? 1 : 1.1
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ))}
                
                {/* Overlay gradiente sutil */}
                <div className="absolute inset-0 bg-gradient-to-tr from-bali-brown/10 via-transparent to-bali-mauve/10"></div>
                
                {/* Indicadores del carrusel */}
                <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white shadow-lg' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Decorative elements - Responsive */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-bali-brown rounded-full opacity-80"></div>
              <div className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-bali-rose rounded-full opacity-60"></div>
              <div className="absolute top-1/2 -left-4 sm:-left-6 md:-left-8 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-bali-mauve rounded-full opacity-40"></div>
            </div>

            {/* Floating elements - Responsive */}
            <motion.div 
              className="absolute top-1 sm:top-2 -left-4 sm:-left-6 md:-left-8 bg-white p-1.5 sm:p-2 rounded-full shadow-lg border border-bali-light/30"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Logo de Bali.Design */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-bali-brown rounded-full flex items-center justify-center">
                <span className="text-white font-serif text-sm sm:text-base font-bold">B</span>
              </div>
              {/* Cuando tengas el logo, reemplaza el div de arriba con:
              <img 
                src="/path/to/bali-logo.png" 
                alt="Bali.Design Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-full"
              />
              */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;