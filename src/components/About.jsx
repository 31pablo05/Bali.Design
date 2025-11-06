import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  
  // Mouse tracking for floating elements
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  
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

  // Mouse move handler - only on desktop
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth > 768 && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        setMousePosition({
          x: (e.clientX - centerX) / 10,
          y: (e.clientY - centerY) / 10
        });
        x.set((e.clientX - centerX) / 10);
        y.set((e.clientY - centerY) / 10);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-bali-beige via-bali-beige to-bali-cream relative overflow-hidden max-w-full"
    >
      {/* Animated background elements - Static on mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-bali-rose/10 rounded-full blur-2xl sm:blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-bali-brown/10 rounded-full blur-2xl sm:blur-3xl" />
      </div>

      {/* Floating particles - Hide on small screens */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-bali-brown/30 rounded-full hidden sm:block"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + Math.sin(i) * 20}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Enhanced Image Section */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ rotateX, rotateY }}
          >
            <div className="relative max-w-sm sm:max-w-md mx-auto lg:mx-0">
              {/* Main photo with glassmorphism effect */}
              <div className="aspect-square">
                <motion.div 
                  className="w-full h-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg rounded-full overflow-hidden shadow-xl sm:shadow-2xl border border-white/30"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-full h-full relative">
                    {/* Imagen de Yami */}
                    <img 
                      src="/images/yami/yami4.png"
                      alt="Yami - Diseñadora Gráfica de Bali.Design"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        console.error('Error cargando imagen de Yami');
                      }}
                    />
                    
                    {/* Gradient overlay animation */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-tr from-bali-rose/20 via-transparent to-bali-mauve/20"
                      animate={{ 
                        background: [
                          "linear-gradient(45deg, rgba(218, 165, 144, 0.2), transparent, rgba(203, 174, 171, 0.2))",
                          "linear-gradient(135deg, rgba(203, 174, 171, 0.2), transparent, rgba(218, 165, 144, 0.2))",
                          "linear-gradient(225deg, rgba(218, 165, 144, 0.2), transparent, rgba(203, 174, 171, 0.2))"
                        ]
                      }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Enhanced floating decorative elements - Responsive sizes - Hidden on small screens to prevent overflow */}
              <motion.div 
                className="hidden sm:block absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-bali-rose to-bali-mauve rounded-full shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ x: mousePosition.x * 0.5, y: mousePosition.y * 0.5 }}
              />
              <motion.div 
                className="hidden sm:block absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-bali-brown/30 to-bali-brown/10 rounded-full backdrop-blur-sm"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ x: mousePosition.x * -0.3, y: mousePosition.y * -0.3 }}
              />
              <motion.div 
                className="hidden md:block absolute top-1/3 -right-6 sm:-right-12 w-4 h-4 sm:w-6 sm:h-6 bg-bali-mauve rounded-full"
                animate={{ 
                  x: [0, 10, 0],
                  y: [0, -15, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Enhanced Content Section */}
          <motion.div 
            className="order-1 lg:order-2 space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Title */}
            <div className="space-y-3 sm:space-y-4">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light text-bali-darker leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="block">No diseño lindo.</span>
                <span className="block">
                  Diseño{' '}
                  <span className="text-bali-brown">con sentido</span>.
                </span>
              </motion.h2>
            </div>

            {/* Progressive text reveal */}
            <motion.div className="space-y-4 sm:space-y-6">
              {[
                "Soy Yami, y mi trabajo va más allá de lo visual: escucho, acompaño y traduzco tu esencia en diseño.",
                "Diseñar no es hacer lindo. Es acompañar, escuchar y traducir lo que otros sienten y no saben decir.",
                "Si buscás orden, claridad y corazón en tu comunicación, estás en el lugar correcto."
              ].map((text, index) => (
                <motion.p 
                  key={index}
                  className={`${index === 0 ? 'text-base sm:text-lg md:text-xl' : 'text-sm sm:text-base md:text-lg'} text-bali-dark font-sans leading-relaxed`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                >
                  {text.includes('Yami') ? (
                    <>
                      Soy <span className="font-medium text-bali-brown">Yami</span>, y mi trabajo va más allá de lo visual: 
                      escucho, acompaño y traduzco tu esencia en diseño.
                    </>
                  ) : text.includes('acompañar') ? (
                    <>
                      Diseñar no es hacer lindo. Es <span className="font-medium">acompañar, escuchar</span> y 
                      traducir lo que otros sienten y no saben decir.
                    </>
                  ) : (
                    <>
                      Si buscás <span className="text-bali-brown font-medium">orden, claridad y corazón</span> en 
                      tu comunicación, estás en el lugar correcto.
                    </>
                  )}
                </motion.p>
              ))}
            </motion.div>

            {/* Enhanced characteristics with elegant icons */}
            <motion.div 
              className="space-y-3 sm:space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { 
                  icon: (
                    <div className="w-8 h-8 rounded-lg bg-bali-brown/10 flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-bali-brown rounded-sm relative">
                        <div className="w-1 h-1 bg-bali-brown rounded-full absolute top-1 left-1"></div>
                      </div>
                    </div>
                  ), 
                  text: 'Estrategia con propósito',
                  description: 'Cada decisión visual tiene un por qué y un para qué claro'
                },
                { 
                  icon: (
                    <div className="w-8 h-8 rounded-lg bg-bali-rose/10 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full border-2 border-bali-rose relative">
                        <div className="w-2 h-1 bg-bali-rose rounded-full absolute top-1.5 left-1"></div>
                      </div>
                    </div>
                  ), 
                  text: 'Diseño emocional',
                  description: 'Conectamos con la esencia y los valores que mueven tu marca'
                },
                { 
                  icon: (
                    <div className="w-8 h-8 rounded-lg bg-bali-mauve/10 flex items-center justify-center">
                      <div className="flex gap-0.5">
                        <div className="w-1 h-4 bg-bali-mauve rounded-full"></div>
                        <div className="w-1 h-3 bg-bali-mauve/70 rounded-full mt-0.5"></div>
                        <div className="w-1 h-4 bg-bali-mauve rounded-full"></div>
                      </div>
                    </div>
                  ), 
                  text: 'Acompañamiento real',
                  description: 'No solo entregamos, acompañamos todo el proceso creativo'
                },
                { 
                  icon: (
                    <div className="w-8 h-8 rounded-lg bg-bali-brown/10 flex items-center justify-center">
                      <div className="relative">
                        <div className="w-3 h-3 border-2 border-bali-brown transform rotate-45"></div>
                        <div className="w-1 h-1 bg-bali-brown rounded-full absolute top-1 left-1"></div>
                      </div>
                    </div>
                  ), 
                  text: 'Identidad auténtica',
                  description: 'Diseño que refleja la verdadera personalidad de tu proyecto'
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white/30 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-white/20 shadow-lg group-hover:bg-white/40 transition-all duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-bali-darker font-serif font-medium text-base sm:text-lg mb-1 sm:mb-2 group-hover:text-bali-brown transition-colors duration-300">
                        {item.text}
                      </h3>
                      <p className="text-bali-dark/80 font-sans text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced quote with 3D effect */}
            <motion.blockquote 
              className="relative group"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
              style={{ 
                transformStyle: "preserve-3d",
                transform: `rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`
              }}
            >
              <div className="border-l-4 border-bali-brown pl-6 py-4 bg-gradient-to-r from-white/30 to-white/10 backdrop-blur-lg rounded-r-2xl border border-white/20 shadow-lg">
                <p className="text-lg text-bali-dark font-serif italic leading-relaxed">
                  "A veces multitask, a veces caos creativo, pero siempre{' '}
                  <span className="text-bali-brown font-medium">corazón y claridad</span>."
                </p>
                <cite className="text-bali-brown font-sans font-medium text-sm block mt-2">
                  — Yami, Bali.Design
                </cite>
              </div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-bali-brown/5 to-bali-rose/5 rounded-r-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                style={{ transform: "translateZ(-10px)" }}
              />
            </motion.blockquote>

            {/* Portfolio PDF Download CTA */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <a
                href="/Pdf/Portfolio.pdf"
                download
                className="group relative inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-bali-rose to-bali-mauve text-white rounded-full font-sans font-medium text-sm sm:text-base hover:from-bali-mauve hover:to-bali-rose transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg 
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>¿Querés ver más? Descargá mi Portfolio</span>
                <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <p className="text-bali-dark/60 font-sans text-xs sm:text-sm mt-3 text-left">
                Ver trabajos completos, servicios y casos de éxito en PDF
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;