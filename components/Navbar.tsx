import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, MessageCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/60189649496?text=Hi%20Earthly%2C%20I%20would%20like%20to%20place%20an%20order.', '_blank');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen ? 'bg-earthly-bg/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-2xl font-bold flex items-center gap-2 text-earthly-text tracking-tight">
              <Leaf className="text-earthly-green group-hover:rotate-12 transition-transform duration-300" fill="currentColor" size={24} />
              earthly.
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#products" 
              onClick={(e) => scrollToSection(e, 'products')}
              className="text-earthly-text hover:text-earthly-green font-medium transition-colors"
            >
              Shop
            </a>
            <a 
              href="#features" 
              onClick={(e) => scrollToSection(e, 'features')}
              className="text-earthly-text hover:text-earthly-green font-medium transition-colors"
            >
              Farmers
            </a>
            <a 
              href="#benefits" 
              onClick={(e) => scrollToSection(e, 'benefits')}
              className="text-earthly-text hover:text-earthly-green font-medium transition-colors"
            >
              Wellness
            </a>
            <a 
              href="#reviews" 
              onClick={(e) => scrollToSection(e, 'reviews')}
              className="text-earthly-text hover:text-earthly-green font-medium transition-colors"
            >
              Stories
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden p-2 text-earthly-text"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <button 
              onClick={openWhatsApp}
              className="hidden md:flex items-center gap-2 bg-earthly-green text-white px-6 py-2.5 rounded-full font-medium hover:bg-earthly-text transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              <MessageCircle size={18} />
              Order via WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-earthly-bg border-t border-earthly-sage/20 absolute w-full shadow-xl h-screen">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a 
              href="#products" 
              onClick={(e) => scrollToSection(e, 'products')}
              className="block px-3 py-3 text-base font-medium text-earthly-text hover:bg-earthly-sage/10 rounded-md"
            >
              Shop
            </a>
            <a 
              href="#features" 
              onClick={(e) => scrollToSection(e, 'features')}
              className="block px-3 py-3 text-base font-medium text-earthly-text hover:bg-earthly-sage/10 rounded-md"
            >
              Farmers
            </a>
            <a 
              href="#benefits" 
              onClick={(e) => scrollToSection(e, 'benefits')}
              className="block px-3 py-3 text-base font-medium text-earthly-text hover:bg-earthly-sage/10 rounded-md"
            >
              Wellness
            </a>
             <button 
              onClick={openWhatsApp}
              className="flex items-center justify-center gap-2 mt-4 w-full bg-earthly-green text-white px-6 py-3 rounded-full font-medium shadow-md"
            >
              <MessageCircle size={18} />
              Order via WhatsApp
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};