import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>Bali.Design - Yami | Diseño que siente, ordena y comunica tu esencia</title>
          <meta name="description" content="Diseñadora gráfica especializada en identidad visual, papelería, gestión de redes y contenido estratégico. Transformo ideas en marcas que conectan y enamoran." />
          <meta name="keywords" content="diseño gráfico, identidad visual, branding, papelería, gestión de redes, diseñadora argentina, contenido estratégico" />
          <meta property="og:title" content="Bali.Design - Diseño con Sentido" />
          <meta property="og:description" content="Esto no es solo diseño, es pasión hecha visual. Identidad visual • Contenido estratégico • Gestión de redes" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="canonical" href="https://bali.design" />
        </Helmet>

        {/* Navigation */}
        <Navbar />

        <main>
          {/* Hero Section */}
          <Hero />
          
          {/* About Section */}
          <About />
          
          {/* Services Section */}
          <Services />
          
          {/* Portfolio Section */}
          <Portfolio />
          
          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
