import React from 'react';
import { Leaf, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-earthly-text text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="text-earthly-sage" fill="currentColor" size={24} />
              <span className="text-2xl font-bold tracking-tight">earthly.</span>
            </div>
            <p className="text-earthly-sage/70 max-w-sm mb-8 font-light leading-relaxed">
              Bridging the gap between conscious consumers and dedicated farmers. 
              We bring you the finest sustainably sourced nuts from Southeast Asia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-earthly-green hover:border-earthly-green transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-earthly-green hover:border-earthly-green transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-earthly-green hover:border-earthly-green transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6 text-earthly-cream">Shop</h4>
            <ul className="space-y-4 text-stone-400 font-light">
              <li><a href="#products" onClick={(e) => scrollToSection(e, 'products')} className="hover:text-earthly-sage transition-colors">Roasted Cashews</a></li>
              <li><a href="#products" onClick={(e) => scrollToSection(e, 'products')} className="hover:text-earthly-sage transition-colors">Mixed Nuts</a></li>
              <li><a href="#products" onClick={(e) => scrollToSection(e, 'products')} className="hover:text-earthly-sage transition-colors">Gift Sets</a></li>
              <li><a href="#" className="hover:text-earthly-sage transition-colors">Wholesale</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6 text-earthly-cream">Company</h4>
            <ul className="space-y-4 text-stone-400 font-light">
              <li><a href="#mission" onClick={(e) => scrollToSection(e, 'mission')} className="hover:text-earthly-sage transition-colors">Our Story</a></li>
              <li><a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="hover:text-earthly-sage transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-earthly-sage transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-earthly-sage transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500 font-light">
          <p>&copy; {new Date().getFullYear()} Earthly. Rooted Fresh.</p>
          <p>Designed for Wellness.</p>
        </div>
      </div>
    </footer>
  );
};