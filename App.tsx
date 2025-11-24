import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductGrid } from './components/ProductGrid';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans text-earthly-text bg-earthly-bg selection:bg-earthly-sage selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        
        {/* Marketing Bridge: Highlighting the Mission before the Product */}
        <section id="mission" className="py-20 bg-earthly-green text-center px-4 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
             <p className="text-white font-serif text-2xl md:text-3xl italic leading-relaxed opacity-90">
               "Bridging the gap between farmers and consumers creates a cycle of goodness. Better livelihoods for them, healthier snacks for you."
             </p>
             <div className="mt-8">
               <span className="inline-block w-12 h-1 bg-earthly-cream/50 rounded-full"></span>
             </div>
          </div>
        </section>

        <ProductGrid />
        <Benefits />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}

export default App;