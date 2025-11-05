import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = "¡Hola Yami! Me gustaría conocer más sobre tus servicios de diseño 🎨";
    const phoneNumber = "5492804726519"; // Formato internacional
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="hero" className="min-h-screen bg-bali-cream flex items-center pt-16 lg:pt-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Contenido Textual */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Título Principal */}
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-bali-darker leading-tight"
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
                className="text-lg md:text-xl text-bali-dark font-sans font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Identidad visual • Contenido estratégico • Gestión de redes
              </motion.p>
            </div>

            {/* Descripción */}
            <motion.p 
              className="text-base md:text-lg text-bali-dark font-sans leading-relaxed max-w-lg"
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
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                onClick={handleWhatsAppClick}
                className="group bg-bali-brown text-white px-8 py-4 rounded-full font-sans font-medium text-lg hover:bg-bali-dark transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3"
              >
                <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform duration-300" />
                Hablemos de tu marca
              </button>
              
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-bali-brown text-bali-brown px-8 py-4 rounded-full font-sans font-medium text-lg hover:bg-bali-brown hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Ver mi trabajo
              </button>
            </motion.div>
          </motion.div>

          {/* Imagen/Carrusel */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Placeholder para imagen principal */}
            <div className="relative">
              <div className="aspect-square bg-bali-light rounded-3xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-bali-light to-bali-mauve flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-bali-brown rounded-full mx-auto flex items-center justify-center">
                      <span className="text-white text-4xl font-serif">Y</span>
                    </div>
                    <p className="text-bali-dark font-sans text-lg">Foto de Yami</p>
                    <p className="text-bali-dark/70 font-sans text-sm">o carrusel de trabajos</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-bali-brown rounded-full opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-bali-rose rounded-full opacity-60"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-bali-mauve rounded-full opacity-40"></div>
            </div>

            {/* Floating elements */}
            <motion.div 
              className="absolute top-8 -left-8 bg-white p-4 rounded-2xl shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-bali-dark font-sans text-sm font-medium">✨ Branding</p>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-12 -right-6 bg-white p-4 rounded-2xl shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <p className="text-bali-dark font-sans text-sm font-medium">🎨 Identidad</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div 
            className="w-6 h-10 border-2 border-bali-brown rounded-full flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-1 h-3 bg-bali-brown rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;