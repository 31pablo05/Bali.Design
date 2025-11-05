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
      { threshold: 0.2 }
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
      className="py-20 lg:py-32 bg-bali-cream"
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
            Servicios que{' '}
            <span className="italic text-bali-brown">transforman</span>
            <br />
            tu marca
          </h2>
          <p className="text-lg md:text-xl text-bali-dark font-sans leading-relaxed">
            Cada servicio está pensado para que tu marca no solo se vea bien,
            <br className="hidden md:block" />
            sino que <span className="font-medium text-bali-brown">comunique con autenticidad</span>.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => handleServiceClick(service.title)}
            >
              {/* Card */}
              <div className="bg-white rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:scale-105 relative overflow-hidden">
                
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-white text-2xl" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative space-y-4">
                  <h3 className="text-xl font-serif font-medium text-bali-darker group-hover:text-bali-brown transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-bali-dark font-sans leading-relaxed">
                    {service.description}
                  </p>
                  
                  <p className="text-sm text-bali-dark/70 font-sans leading-relaxed">
                    {service.details}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-bali-brown font-sans font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2">
                    <span>Saber más</span>
                    <FaArrowRight className="text-xs transform group-hover:translate-x-1 transition-transform duration-300" />
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
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-serif font-light text-bali-darker mb-4">
              ¿Te gustaría trabajar conmigo?
            </h3>
            <p className="text-lg text-bali-dark font-sans leading-relaxed max-w-3xl mx-auto">
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
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + (index * 0.2) }}
                >
                  <div className="relative group">
                    <img 
                      src={`/images/tegustariatrabajarconmigo/trabajar${step}.jpg`}
                      alt={`Paso ${index + 1} del proceso de diseño`}
                      className="w-full aspect-square object-contain bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 rounded-2xl group-hover:bg-black/0 transition-all duration-300"></div>
                    
                  </div>
                </motion.div>
              ))}

              {/* Row 2 - Reverse order for flow */}
              {[4, 5, 6].map((step, index) => (
                <motion.div
                  key={step}
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.8 + (index * 0.2) }}
                >
                  <div className="relative group">
                    <img 
                      src={`/images/tegustariatrabajarconmigo/trabajar${step}.jpg`}
                      alt={`Paso ${6 - index} del proceso de diseño`}
                      className="w-full aspect-square object-contain bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 rounded-2xl group-hover:bg-black/0 transition-all duration-300"></div>
                    
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile/Tablet: Vertical Flow */}
            <div className="lg:hidden space-y-8">
              {[1, 2, 3, 4, 5, 6].map((step, index) => (
                <motion.div
                  key={step}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + (index * 0.15) }}
                >
                  <div className="relative group max-w-md mx-auto">
                    <img 
                      src={`/images/tegustariatrabajarconmigo/trabajar${step}.jpg`}
                      alt={`Paso ${index + 1} del proceso de diseño`}
                      className="w-full aspect-square object-contain bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-black/5 rounded-2xl group-hover:bg-black/0 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-4 bg-bali-brown/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white font-serif font-medium text-sm">Paso {index + 1}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg text-bali-dark font-sans mb-6">
            ¿No estás segura por dónde empezar?
          </p>
          <button
            onClick={() => handleServiceClick('Consultoría inicial')}
            className="bg-bali-brown text-white px-8 py-4 rounded-full font-sans font-medium text-lg hover:bg-bali-dark transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Hablemos y vemos juntas el camino
          </button>
        </motion.div>

        {/* Process indicator */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="flex items-center justify-center gap-8 max-w-2xl mx-auto">
            {['Escuchamos', 'Creamos', 'Refinamos', 'Entregamos'].map((step, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 bg-bali-brown rounded-full flex items-center justify-center text-white font-sans font-bold text-sm">
                  {index + 1}
                </div>
                <span className="text-bali-dark font-sans text-sm font-medium">{step}</span>
              </div>
            ))}
          </div>
          <p className="text-bali-dark/70 font-sans text-sm mt-4">
            Nuestro proceso de trabajo colaborativo
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;