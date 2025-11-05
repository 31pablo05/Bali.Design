import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío del formulario
    setTimeout(() => {
      // Redirigir a WhatsApp con el mensaje
      const message = `¡Hola Yami! 

Mi nombre es: ${formData.name}
Email: ${formData.email}

Mensaje: ${formData.message}

¿Podemos conversar sobre mi proyecto? 🎨`;

      const phoneNumber = "5492804726519"; // Formato internacional
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleDirectWhatsApp = () => {
    const message = "¡Hola Yami! Me gustaría conversar sobre un proyecto de diseño. ¿Cuándo podemos hablar? 🎨";
    const phoneNumber = "5492804726519"; // Formato internacional
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section 
      id="contacto" 
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
            Contame sobre{' '}
            <span className="italic text-bali-brown">tu marca</span>
            <br />
            y vemos juntas el camino
          </h2>
          <p className="text-lg md:text-xl text-bali-dark font-sans leading-relaxed">
            Cada proyecto comienza con una conversación.{' '}
            <span className="font-medium text-bali-brown">Charlemos sin compromiso</span>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-medium text-bali-darker mb-6">
                Enviame un mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label className="block text-bali-dark font-sans font-medium mb-2">
                    Tu nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-bali-light rounded-2xl focus:border-bali-brown focus:outline-none transition-colors duration-300 font-sans"
                    placeholder="¿Cómo te llamás?"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-bali-dark font-sans font-medium mb-2">
                    Tu email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-bali-light rounded-2xl focus:border-bali-brown focus:outline-none transition-colors duration-300 font-sans"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-bali-dark font-sans font-medium mb-2">
                    Contame sobre tu proyecto
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-bali-light rounded-2xl focus:border-bali-brown focus:outline-none transition-colors duration-300 font-sans resize-none"
                    placeholder="¿Qué tenés en mente? ¿Qué necesitás para tu marca? ¡Contame todo!"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-bali-brown text-white px-6 py-4 rounded-2xl font-sans font-medium text-lg hover:bg-bali-dark transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-lg" />
                      Enviar mensaje
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-bali-light">
                <p className="text-sm text-bali-dark/70 font-sans text-center">
                  Tu mensaje será redirigido a WhatsApp para una respuesta más rápida 💬
                </p>
              </div>
            </div>
          </motion.div>

          {/* Información de Contacto */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* WhatsApp Directo */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-medium text-bali-darker mb-4">
                ¿Preferís hablar directo?
              </h3>
              <p className="text-bali-dark font-sans mb-6 leading-relaxed">
                Si querés una respuesta inmediata, escribime por WhatsApp. 
                Siempre respondo rápido y con mucho cariño.
              </p>
              <button
                onClick={handleDirectWhatsApp}
                className="w-full bg-green-500 text-white px-6 py-4 rounded-2xl font-sans font-medium text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3"
              >
                <FaWhatsapp className="text-xl" />
                Escribime por WhatsApp
              </button>
            </div>

            {/* Redes Sociales */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-medium text-bali-darker mb-4">
                Seguime en redes
              </h3>
              <p className="text-bali-dark font-sans mb-6 leading-relaxed">
                En Instagram comparto mi proceso creativo, tips de diseño y 
                proyectos en tiempo real.
              </p>
              
              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/bali.desing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-bali-light rounded-2xl hover:bg-bali-mauve transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <FaInstagram className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-sans font-medium text-bali-darker">@bali.desing</p>
                    <p className="text-sm text-bali-dark/70 font-sans">Sígueme en Instagram</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-bali-light rounded-2xl">
                  <div className="w-12 h-12 bg-bali-brown rounded-2xl flex items-center justify-center">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-sans font-medium text-bali-darker">hola@bali.design</p>
                    <p className="text-sm text-bali-dark/70 font-sans">Email directo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horarios */}
            <div className="bg-gradient-to-br from-bali-brown to-bali-rose rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-serif font-medium mb-4">
                Tiempos de respuesta
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-sans">WhatsApp</span>
                  <span className="font-sans font-light">Inmediato</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-sans">Email</span>
                  <span className="font-sans font-light">24-48hs</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-sans">Instagram</span>
                  <span className="font-sans font-light">Mismo día</span>
                </div>
              </div>
              <p className="text-white/80 font-sans text-sm mt-4 leading-relaxed">
                Trabajo de lunes a viernes, pero si tu proyecto es urgente, 
                no dudes en escribirme igual 💕
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;