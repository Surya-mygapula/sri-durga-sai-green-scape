import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductCatalogModal from './components/ProductCatalogModal';

export default function App() {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  return (
    <>
      <ProductCatalogModal isOpen={isCatalogOpen} onClose={() => setIsCatalogOpen(false)} />
      
      <Header />
      <main>
        <Hero onOpenCatalog={() => setIsCatalogOpen(true)} />
        <Services />
        <HowItWorks />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
} 