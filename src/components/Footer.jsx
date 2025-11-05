import { FaInstagram, FaWhatsapp, FaEnvelope, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleWhatsAppClick = () => {
    const message = "¡Hola Yami! Vengo desde tu web 🎨";
    const phoneNumber = "5492804726519"; // Formato internacional
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer ref={footerRef} className="bg-bali-darker text-white py-16 relative overflow-hidden">
      {/* Background Animated Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bali-darker via-bali-darker to-bali-brown/20 animate-pulse opacity-50"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <motion.div 
          className="grid md:grid-cols-3 gap-12 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          
          {/* Brand */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-3xl font-serif font-light bg-gradient-to-r from-white to-bali-brown bg-clip-text text-transparent">
                  Bali.Design
                </h3>
                
                {/* Logo Placeholder - positioned to the right */}
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-bali-brown to-bali-brown/60 rounded-full flex items-center justify-center border-2 border-white/20 backdrop-blur-sm shadow-lg flex-shrink-0"
                  whileHover={{ 
                    scale: 1.15,
                    rotate: 10,
                    boxShadow: "0 0 25px rgba(139, 69, 19, 0.4)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Temporary logo placeholder - will be replaced with actual logo image */}
                  <span className="text-white text-lg font-serif font-bold">B</span>
                </motion.div>
              </div>
              <p className="text-white/80 font-sans">
                Diseño con sentido, hecho a tu medida
              </p>
            </motion.div>
            
            <motion.p 
              className="text-white/70 font-sans leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Transformo ideas en identidades visuales que conectan, 
              comunican y enamoran. Porque cada marca tiene una historia única que contar.
            </motion.p>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.a
                href="https://www.instagram.com/bali.desing/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 transition-all duration-500 group backdrop-blur-sm border border-white/20 hover:border-pink-400"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram className="text-xl group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
              
              <motion.button
                onClick={handleWhatsAppClick}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 transition-all duration-500 group backdrop-blur-sm border border-white/20 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/25"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform duration-300" />
              </motion.button>
              
              <motion.a
                href="mailto:yamialmendra1501@gmail.com"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-bali-brown transition-all duration-500 group backdrop-blur-sm border border-white/20 hover:border-bali-brown hover:shadow-lg hover:shadow-bali-brown/25"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="text-xl group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-xl font-serif font-medium bg-gradient-to-r from-white to-bali-brown bg-clip-text text-transparent">
              Navegación
            </h4>
            <nav className="space-y-3">
              {[
                { name: 'Inicio', id: 'hero' },
                { name: 'Sobre mí', id: 'about' },
                { name: 'Servicios', id: 'servicios' },
                { name: 'Portfolio', id: 'portfolio' },
                { name: 'Contacto', id: 'contacto' }
              ].map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-white/70 hover:text-white font-sans transition-all duration-300 text-left hover:translate-x-2 hover:text-bali-brown relative group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 bg-bali-brown/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-left"></div>
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Services Quick */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-xl font-serif font-medium bg-gradient-to-r from-white to-bali-brown bg-clip-text text-transparent">
              Servicios
            </h4>
            <div className="space-y-3">
              {[
                'Identidad Visual',
                'Papelería & Branding',
                'Gestión de Redes',
                'Consultoría de Marca'
              ].map((service, index) => (
                <motion.p 
                  key={service} 
                  className="text-white/70 font-sans hover:text-white/90 transition-colors duration-300 cursor-default"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  {service}
                </motion.p>
              ))}
            </div>
            
            <motion.button
              onClick={handleWhatsAppClick}
              className="bg-bali-brown text-white px-6 py-3 rounded-full font-sans font-medium hover:bg-bali-brown/80 transition-all duration-500 hover:shadow-lg hover:shadow-bali-brown/30 backdrop-blur-sm border border-bali-brown/50"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Hablemos de tu proyecto
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="border-t border-white/20 pt-8 relative"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isVisible ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bali-brown/30 to-transparent h-px top-0"></div>
          
          {/* Bottom Bar */}
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-white/60 font-sans text-sm">
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
              >
                <span className="bg-gradient-to-r from-white/60 to-bali-brown/80 bg-clip-text text-transparent">
                  © {currentYear} Bali.Design.
                </span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
              >
                <span>Desarrollado con</span>
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaHeart className="text-red-400 text-xs" />
                </motion.div>
                <span>por</span>
                <motion.a 
                  href="https://devcraftpablo.online/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-bali-brown transition-all duration-500 font-bold text-base bg-bali-brown/20 px-3 py-1 rounded-full hover:bg-bali-brown/30 backdrop-blur-sm border border-bali-brown/30 hover:border-bali-brown hover:shadow-lg hover:shadow-bali-brown/25"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(139, 69, 19, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Pablo Proboste - DevCraft
                </motion.a>
              </motion.div>
            </div>

            {/* Quick Contact */}
            <motion.div 
              className="flex items-center gap-6"
              initial={{ opacity: 0, x: 20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="mailto:yamialmendra1501@gmail.com"
                className="text-white/60 hover:text-white font-sans text-sm transition-all duration-300 hover:underline decoration-bali-brown"
                whileHover={{ scale: 1.05, color: "#8b4513" }}
              >
                yamialmendra1501@gmail.com
              </motion.a>
              <motion.button
                onClick={handleWhatsAppClick}
                className="text-white/60 hover:text-green-400 font-sans text-sm transition-all duration-300 hover:underline decoration-green-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                WhatsApp
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Final Quote */}
          <motion.div 
            className="text-center mt-8 pt-6 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.p 
              className="text-white font-serif italic text-xl md:text-2xl lg:text-3xl font-light bg-gradient-to-r from-white via-bali-brown to-white bg-clip-text text-transparent leading-relaxed tracking-wide"
              animate={{ 
                y: [0, -5, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              "Esto no es solo diseño, es pasión hecha visual"
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;