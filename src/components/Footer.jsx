import { FaInstagram, FaWhatsapp, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-bali-darker text-white py-16">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-serif font-light mb-2">Bali.Design</h3>
              <p className="text-white/80 font-sans">
                Diseño con sentido, hecho a tu medida
              </p>
            </div>
            
            <p className="text-white/70 font-sans leading-relaxed">
              Transformo ideas en identidades visuales que conectan, 
              comunican y enamoran. Porque cada marca tiene una historia única que contar.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/bali.desing/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-bali-brown transition-colors duration-300 group"
              >
                <FaInstagram className="text-xl group-hover:scale-110 transition-transform duration-300" />
              </a>
              
              <button
                onClick={handleWhatsAppClick}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors duration-300 group"
              >
                <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform duration-300" />
              </button>
              
              <a
                href="mailto:hola@bali.design"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-bali-brown transition-colors duration-300 group"
              >
                <FaEnvelope className="text-xl group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-serif font-medium">Navegación</h4>
            <nav className="space-y-3">
              {[
                { name: 'Inicio', id: 'hero' },
                { name: 'Sobre mí', id: 'about' },
                { name: 'Servicios', id: 'servicios' },
                { name: 'Portfolio', id: 'portfolio' },
                { name: 'Contacto', id: 'contacto' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-white/70 hover:text-white font-sans transition-colors duration-300 text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Services Quick */}
          <div className="space-y-6">
            <h4 className="text-xl font-serif font-medium">Servicios</h4>
            <div className="space-y-3">
              {[
                'Identidad Visual',
                'Papelería & Branding',
                'Gestión de Redes',
                'Consultoría de Marca'
              ].map((service) => (
                <p key={service} className="text-white/70 font-sans">
                  {service}
                </p>
              ))}
            </div>
            
            <button
              onClick={handleWhatsAppClick}
              className="bg-bali-brown text-white px-6 py-3 rounded-full font-sans font-medium hover:bg-bali-brown/80 transition-colors duration-300"
            >
              Hablemos de tu proyecto
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="flex items-center gap-2 text-white/60 font-sans text-sm">
              <span>© {currentYear} Bali.Design. Hecho con</span>
              <FaHeart className="text-red-400 text-xs" />
              <span>por Yami</span>
            </div>

            {/* Quick Contact */}
            <div className="flex items-center gap-6">
              <a
                href="mailto:hola@bali.design"
                className="text-white/60 hover:text-white font-sans text-sm transition-colors duration-300"
              >
                hola@bali.design
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="text-white/60 hover:text-white font-sans text-sm transition-colors duration-300"
              >
                WhatsApp
              </button>
            </div>
          </div>

          {/* Final Quote */}
          <div className="text-center mt-8 pt-6 border-t border-white/10">
            <p className="text-white/50 font-serif italic text-sm">
              "Esto no es solo diseño, es pasión hecha visual"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;