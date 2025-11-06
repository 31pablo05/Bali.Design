import { useState, useEffect } from 'react';
import { FaWhatsapp, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detectar sección activa
      const sections = ['hero', 'about', 'servicios', 'portfolio', 'contacto'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    
    // Pequeño delay para cerrar el menú primero
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = window.innerWidth < 640 ? 56 : window.innerWidth < 768 ? 64 : 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const handleWhatsAppClick = () => {
    const message = "¡Hola Yami! Vengo desde tu web 🎨";
    const phoneNumber = "5492804726519"; // Formato internacional
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const navItems = [
    { name: 'Inicio', id: 'hero' },
    { name: 'Sobre mí', id: 'about' },
    { name: 'Servicios', id: 'servicios' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contacto', id: 'contacto' }
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-bali-light/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">
          
          {/* Logo - Responsive */}
          <motion.button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 sm:space-x-3 group relative"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Logo Circle with gradient */}
            <motion.div 
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-bali-brown to-bali-brown/80 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-white font-serif text-sm sm:text-lg lg:text-xl font-bold">B</span>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-bali-rose/30 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </motion.div>
            
            {/* Brand Text - Hidden on very small screens */}
            <div className="hidden xs:block">
              <motion.h1 
                className="text-lg sm:text-xl lg:text-2xl font-serif font-medium text-bali-darker group-hover:text-bali-brown transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Bali.Design
              </motion.h1>
              <motion.p 
                className="text-xs sm:text-sm text-bali-dark/70 font-sans -mt-1 group-hover:text-bali-brown/70 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Diseño con sentido
              </motion.p>
            </div>
          </motion.button>

          {/* Desktop Navigation - Hidden on tablet and mobile */}
          <div className="hidden xl:flex items-center space-x-6 2xl:space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-sans font-medium text-sm xl:text-base transition-all duration-300 relative px-3 py-2 rounded-lg group ${
                  activeSection === item.id
                    ? 'text-bali-brown bg-bali-brown/5'
                    : 'text-bali-dark hover:text-bali-brown hover:bg-bali-light/50'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
                {/* Active indicator */}
                <motion.div 
                  className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-bali-brown rounded-full transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                  layoutId="activeIndicator"
                />
              </motion.button>
            ))}
          </div>

          {/* Tablet Navigation - Visible only on tablet */}
          <div className="hidden lg:flex xl:hidden items-center space-x-4">
            {navItems.slice(0, 3).map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-sans font-medium text-sm transition-all duration-300 relative px-2 py-1 rounded-lg ${
                  activeSection === item.id
                    ? 'text-bali-brown'
                    : 'text-bali-dark hover:text-bali-brown'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-bali-brown rounded-full"></div>
                )}
              </motion.button>
            ))}
          </div>

          {/* CTA & Social - Responsive */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            {/* Instagram - Hidden on small mobile */}
            <motion.a
              href="https://www.instagram.com/bali.desing/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-bali-light to-bali-light/80 rounded-full items-center justify-center hover:from-bali-brown hover:to-bali-brown/80 hover:text-white transition-all duration-300 group shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <FaInstagram className="text-sm sm:text-lg group-hover:scale-110 transition-transform duration-300" />
            </motion.a>
            
            {/* WhatsApp Button - Always visible but responsive */}
            <motion.button
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-bali-brown to-bali-brown/90 text-white px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full font-sans font-medium text-xs sm:text-sm hover:from-bali-dark hover:to-bali-dark/90 transition-all duration-300 transform hover:scale-105 flex items-center gap-1 sm:gap-2 shadow-lg hover:shadow-xl"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <FaWhatsapp className="text-sm sm:text-lg" />
              <span className="hidden sm:inline lg:hidden xl:inline">Hablemos</span>
              <span className="sm:hidden">Chat</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-bali-light to-bali-light/80 rounded-full flex items-center justify-center text-bali-dark hover:from-bali-brown hover:to-bali-brown/80 hover:text-white transition-all duration-300 shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <FaTimes className="text-sm sm:text-base" /> : <FaBars className="text-sm sm:text-base" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="xl:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl shadow-2xl border-t border-bali-brown/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Background gradient overlay - More opaque */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-bali-cream/70"></div>
              
              <div className="relative py-4 sm:py-6 space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 sm:px-6 py-3 sm:py-4 font-sans font-medium transition-all duration-300 relative group ${
                      activeSection === item.id
                        ? 'text-bali-brown bg-gradient-to-r from-bali-brown/20 to-bali-rose/10 border-r-4 border-bali-brown'
                        : 'text-bali-darker hover:text-bali-brown hover:bg-gradient-to-r hover:from-bali-light/70 hover:to-bali-light/50'
                    }`}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-sm sm:text-base">{item.name}</span>
                  </motion.button>
                ))}
                
                {/* Enhanced Mobile Social & CTA */}
                <motion.div 
                  className="px-4 sm:px-6 pt-4 sm:pt-6 border-t border-bali-light/50 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <motion.a
                        href="https://www.instagram.com/bali.desing/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-bali-light to-bali-light/80 rounded-full flex items-center justify-center hover:from-bali-brown hover:to-bali-brown/80 hover:text-white transition-all duration-300 shadow-md"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaInstagram className="text-lg sm:text-xl" />
                      </motion.a>
                      <div>
                        <span className="text-sm sm:text-base text-bali-dark font-sans font-medium">@bali.desing</span>
                        <p className="text-xs text-bali-dark/70">Sígueme en Instagram</p>
                      </div>
                    </div>
                    
                    <motion.button
                      onClick={handleWhatsAppClick}
                      className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 sm:px-6 sm:py-3 rounded-full font-sans font-medium text-sm sm:text-base hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaWhatsapp className="text-lg" />
                      Hablemos
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;