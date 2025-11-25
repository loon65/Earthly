import React from 'react';
import { Leaf, Instagram, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenFarmer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenFarmer }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-earthly-text text-white pt-20 pb-10" itemScope itemType="https://schema.org/LocalBusiness">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="text-earthly-sage" fill="currentColor" size={24} />
              <span className="text-2xl font-bold tracking-tight" itemProp="name">earthly.</span>
            </div>
            <p className="text-earthly-sage/70 max-w-sm mb-6 font-light leading-relaxed">
              Bridging the gap between conscious consumers and dedicated farmers. 
              We bring you the finest sustainably sourced nuts from Southeast Asia.
            </p>
            
            <div className="flex items-start gap-2 text-earthly-sage/70 mb-8 text-sm font-light">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <address className="not-italic" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="streetAddress">Kuala Lumpur City Centre</span>, <br />
                  <span itemProp="addressLocality">Kuala Lumpur</span>, <span itemProp="addressCountry">Malaysia</span>.
                </address>
            </div>

            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/earthly_my" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-earthly-green hover:border-earthly-green transition-all"
                aria-label="Follow Earthly on Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-earthly-green hover:border-earthly-green transition-all"
                aria-label="Follow Earthly on TikTok"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  width="18" 
                  height="18" 
                  fill="currentColor" 
                  stroke="none"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-earthly-green hover:border-earthly-green transition-all group"
                aria-label="Follow Earthly on Xiaohongshu (XHS)"
              >
                <span className="font-bold text-[10px] leading-none tracking-tighter">XHS</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6 text-earthly-cream">Shop</h4>
            <ul className="space-y-4 text-stone-400 font-light">
              <li><a href="#products" onClick={(e) => scrollToSection(e, 'products')} className="hover:text-earthly-sage transition-colors">Roasted Cashews</a></li>
              <li><a href="#products" onClick={(e) => scrollToSection(e, 'products')} className="hover:text-earthly-sage transition-colors">Gift Sets</a></li>
              <li>
                <a 
                  href="https://wa.me/60189649496?text=Hi%20Earthly%2C%20I%20would%20like%20to%20enquire%20about%20wholesale." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-earthly-sage transition-colors"
                >
                  Wholesale
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6 text-earthly-cream">Company</h4>
            <ul className="space-y-4 text-stone-400 font-light">
              <li>
                <button 
                  onClick={onOpenFarmer} 
                  className="hover:text-earthly-sage transition-colors text-left"
                >
                  Farmer Story
                </button>
              </li>
              <li>
                <a 
                  href="https://wa.me/60189649496?text=Hi%20Earthly%2C%20I%20would%20like%20to%20get%20in%20touch." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-earthly-sage transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenPrivacy} 
                  className="hover:text-earthly-sage transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500 font-light">
          <p>&copy; {new Date().getFullYear()} Earthly. Rooted Fresh.</p>
          <p>Designed for Wellness in Malaysia.</p>
        </div>
      </div>
    </footer>
  );
}