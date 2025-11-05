import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 lg:py-32 bg-bali-beige"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Imagen */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Foto principal */}
              <div className="aspect-square max-w-md mx-auto lg:mx-0">
                <div className="w-full h-full bg-bali-light rounded-full overflow-hidden shadow-2xl border-8 border-white">
                  <div className="w-full h-full bg-gradient-to-br from-bali-light to-bali-brown flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <div className="w-32 h-32 bg-white rounded-full mx-auto flex items-center justify-center">
                        <span className="text-bali-brown text-5xl font-serif">Y</span>
                      </div>
                      <p className="text-white font-sans text-lg font-medium">Yami</p>
                      <p className="text-white/80 font-sans text-sm">Foto profesional</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-bali-rose rounded-full opacity-70 shadow-lg"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-bali-brown/20 rounded-full"></div>
              <div className="absolute top-1/3 -right-12 w-6 h-6 bg-bali-mauve rounded-full"></div>
            </div>
          </motion.div>

          {/* Contenido */}
          <motion.div 
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Título */}
            <div className="space-y-4">
              <motion.h2 
                className="text-4xl md:text-5xl font-serif font-light text-bali-darker leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                No diseño{' '}
                <span className="italic text-bali-brown">lindo</span>.
                <br />
                Diseño{' '}
                <span className="text-bali-brown">con sentido</span>.
              </motion.h2>
            </div>

            {/* Texto principal */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-lg md:text-xl text-bali-dark font-sans leading-relaxed">
                Soy <span className="font-medium text-bali-brown">Yami</span>, y mi trabajo va más allá de lo visual: 
                escucho, acompaño y traduzco tu esencia en diseño.
              </p>
              
              <p className="text-base md:text-lg text-bali-dark font-sans leading-relaxed">
                Diseñar no es hacer lindo. Es <span className="font-medium">acompañar, escuchar</span> y 
                traducir lo que otros sienten y no saben decir.
              </p>

              <p className="text-base md:text-lg text-bali-dark font-sans leading-relaxed">
                Si buscás <span className="text-bali-brown font-medium">orden, claridad y corazón</span> en 
                tu comunicación, estás en el lugar correcto.
              </p>
            </motion.div>

            {/* Características */}
            <motion.div 
              className="grid sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { icon: '🎯', text: 'Estrategia con propósito' },
                { icon: '💝', text: 'Diseño emocional' },
                { icon: '🤝', text: 'Acompañamiento real' },
                { icon: '✨', text: 'Identidad auténtica' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white/50 rounded-2xl backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-bali-dark font-sans font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Quote */}
            <motion.blockquote 
              className="border-l-4 border-bali-brown pl-6 py-4 bg-white/30 rounded-r-2xl"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <p className="text-lg text-bali-dark font-serif italic leading-relaxed">
                "A veces multitask, a veces caos creativo, pero siempre{' '}
                <span className="text-bali-brown font-medium">corazón y claridad</span>."
              </p>
              <cite className="text-bali-brown font-sans font-medium text-sm block mt-2">
                — Yami, Bali.Design
              </cite>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;