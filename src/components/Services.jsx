import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  FaPalette, 
  FaFileAlt, 
  FaInstagram, 
  FaLightbulb,
  FaArrowRight 
} from 'react-icons/fa';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: FaPalette,
      title: 'Identidad Visual',
      description: 'Creamos la personalidad de tu marca desde cero.',
      details: 'Logo, paleta de colores, tipografías, manual de marca y aplicaciones.',
      color: 'from-bali-brown to-bali-rose'
    },
    {
      icon: FaFileAlt,
      title: 'Papelería & Branding',
      description: 'Piezas coherentes que hablan de vos.',
      details: 'Tarjetas, folletos, packaging, papelería corporativa y material gráfico.',
      color: 'from-bali-rose to-bali-mauve'
    },
    {
      icon: FaInstagram,
      title: 'Gestión de Redes',
      description: 'Contenido estratégico que conecta.',
      details: 'Diseño de feed, stories, reels, planificación y gestión completa.',
      color: 'from-bali-mauve to-bali-brown'
    },
    {
      icon: FaLightbulb,
      title: 'Consultoría',
      description: 'Orden y dirección para tu comunicación.',
      details: 'Mentoría de marca, estrategia visual, auditoría y acompañamiento.',
      color: 'from-bali-brown to-bali-dark'
    }
  ];

  const handleServiceClick = (serviceName) => {
    const message = `¡Hola Yami! Me interesa el servicio de ${serviceName}. ¿Podemos conversar? 🎨`;
    const phoneNumber = "5492804726519"; // Formato internacional
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section 
      id="servicios" 
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-32 bg-bali-cream"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-bali-darker mb-4 sm:mb-6 leading-tight">
            Servicios que{' '}
            <span className="italic text-bali-brown">transforman</span>
            <br />
            tu marca
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-bali-dark font-sans leading-relaxed">
            Cada servicio está pensado para que tu marca no solo se vea bien,
            <br className="hidden md:block" />
            sino que <span className="font-medium text-bali-brown">comunique con autenticidad</span>.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => handleServiceClick(service.title)}
            >
              {/* Card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative mb-4 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${service.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300`}>
                    <service.icon className="text-white text-xl sm:text-2xl" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-serif font-medium text-bali-darker transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-bali-dark font-sans leading-relaxed">
                    {service.description}
                  </p>
                  
                  <p className="text-xs sm:text-sm text-bali-dark/70 font-sans leading-relaxed">
                    {service.details}
                  </p>

                  {/* CTA - Hidden on mobile */}
                  <div className="hidden sm:flex items-center gap-2 text-bali-brown font-sans font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2">
                    <span>Saber más</span>
                    <FaArrowRight className="text-xs" />
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-bali-brown/20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-bali-rose/30 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Steps with Images */}
        <motion.div 
          className="mt-12 sm:mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-bali-darker mb-3 sm:mb-4">
              ¿Te gustaría trabajar conmigo?
            </h3>
            <p className="text-base sm:text-lg text-bali-dark font-sans leading-relaxed max-w-3xl mx-auto px-4">
              Te cuento el paso a paso de cómo es el proceso de diseño en Bali
              <br className="hidden md:block" />
              para que tengas todo claro desde el principio
            </p>
          </div>

          {/* Images Grid */}
          <div className="relative">
            {/* Desktop: 3x2 Grid */}
            <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:gap-y-16">
              {/* Row 1 */}
              {[1, 2, 3].map((step, index) => (
                <motion.div
                  key={step}
                  className="relative"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + (index * 0.05) }}
                >
                  <div className="relative">
                    <img 
                      src={`/images/tegustariatrabajarconmigo/trabajar${step}.jpg`}
                      alt={`Paso ${index + 1} del proceso de diseño`}
                      className="w-full aspect-square object-contain bg-white rounded-2xl shadow-lg"
                    />
                    
                  </div>
                </motion.div>
              ))}

              {/* Row 2 - Reverse order for flow */}
              {[4, 5, 6].map((step, index) => (
                <motion.div
                  key={step}
                  className="relative"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.45 + (index * 0.05) }}
                >
                  <div className="relative">
                    <img 
                      src={`/images/tegustariatrabajarconmigo/trabajar${step}.jpg`}
                      alt={`Paso ${6 - index} del proceso de diseño`}
                      className="w-full aspect-square object-contain bg-white rounded-2xl shadow-lg"
                    />
                    
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile/Tablet: Vertical Flow */}
            <div className="lg:hidden space-y-4 sm:space-y-6">
              {[1, 2, 3, 4, 5, 6].map((step, index) => (
                <motion.div
                  key={step}
                  className="relative"
                  initial={{ opacity: 0, y: 15 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + (index * 0.05) }}
                >
                  <div className="relative max-w-md mx-auto">
                    <img 
                      src={`/images/tegustariatrabajarconmigo/trabajar${step}.jpg`}
                      alt={`Paso ${index + 1} del proceso de diseño`}
                      className="w-full aspect-square object-contain bg-white rounded-xl sm:rounded-2xl shadow-lg"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-10 sm:mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <p className="text-base sm:text-lg text-bali-dark font-sans mb-4 sm:mb-6 px-4">
            ¿No estás segura por dónde empezar?
          </p>
          <button
            onClick={() => handleServiceClick('Consultoría inicial')}
            className="bg-bali-brown text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-sans font-medium text-base sm:text-lg hover:bg-bali-dark transition-all duration-300 hover:shadow-lg"
          >
            Hablemos y vemos juntas el camino
          </button>
        </motion.div>

        {/* Process indicator */}
        <motion.div 
          className="mt-10 sm:mt-16 md:mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 max-w-2xl mx-auto px-4">
            {['Escuchamos', 'Creamos', 'Refinamos', 'Entregamos'].map((step, index) => (
              <div key={index} className="flex flex-col items-center gap-1.5 sm:gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-bali-brown rounded-full flex items-center justify-center text-white font-sans font-bold text-xs sm:text-sm">
                  {index + 1}
                </div>
                <span className="text-bali-dark font-sans text-xs sm:text-sm font-medium text-center">{step}</span>
              </div>
            ))}
          </div>
          <p className="text-bali-dark/70 font-sans text-xs sm:text-sm mt-3 sm:mt-4 px-4">
            Nuestro proceso de trabajo colaborativo
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;