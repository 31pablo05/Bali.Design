import { useState, useEffect } from 'react';
import { FaWhatsapp, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 bg-bali-brown rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-serif text-lg font-bold">B</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-serif font-medium text-bali-darker">
                Bali.Design
              </h1>
              <p className="text-xs text-bali-dark/70 font-sans -mt-1">
                Diseño con sentido
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-sans font-medium text-sm transition-colors duration-300 relative ${
                  activeSection === item.id
                    ? 'text-bali-brown'
                    : 'text-bali-dark hover:text-bali-brown'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-bali-brown rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Desktop CTA & Social */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://www.instagram.com/bali.desing/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-bali-light rounded-full flex items-center justify-center hover:bg-bali-brown hover:text-white transition-colors duration-300 group"
            >
              <FaInstagram className="text-lg group-hover:scale-110 transition-transform duration-300" />
            </a>
            
            <button
              onClick={handleWhatsAppClick}
              className="bg-bali-brown text-white px-6 py-2 rounded-full font-sans font-medium text-sm hover:bg-bali-dark transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <FaWhatsapp className="text-lg" />
              <span className="hidden xl:inline">Hablemos</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 bg-bali-light rounded-full flex items-center justify-center text-bali-dark hover:bg-bali-brown hover:text-white transition-colors duration-300"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-bali-light">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-6 py-3 font-sans font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-bali-brown bg-bali-light'
                      : 'text-bali-dark hover:text-bali-brown hover:bg-bali-light'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile Social & CTA */}
              <div className="px-6 pt-4 border-t border-bali-light mt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <a
                      href="https://www.instagram.com/bali.desing/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-bali-light rounded-full flex items-center justify-center hover:bg-bali-brown hover:text-white transition-colors duration-300"
                    >
                      <FaInstagram className="text-lg" />
                    </a>
                    <span className="text-sm text-bali-dark font-sans">@bali.desing</span>
                  </div>
                  
                  <button
                    onClick={handleWhatsAppClick}
                    className="bg-bali-brown text-white px-4 py-2 rounded-full font-sans font-medium text-sm hover:bg-bali-dark transition-colors duration-300 flex items-center gap-2"
                  >
                    <FaWhatsapp />
                    Hablemos
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;