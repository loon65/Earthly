import React from 'react';
import { Check, Heart } from 'lucide-react';

export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-earthly-bg overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Image Side */}
          <div className="lg:w-1/2 relative">
             <div className="absolute inset-0 bg-earthly-sage/20 rounded-t-[10rem] rounded-b-lg transform translate-x-4 translate-y-4"></div>
             <img 
               src="https://raw.githubusercontent.com/loon65/Earthly/d968a2147460069d1f374b0dd776b1ca00b6fb9c/cashew%20nutrition.png" 
               alt="Cashew nuts nutrition facts and health benefits" 
               className="relative rounded-t-[10rem] rounded-b-lg shadow-xl w-full object-cover h-[550px] z-10"
               loading="lazy"
             />
             <div className="absolute -left-6 bottom-12 z-20 bg-white p-6 rounded-r-xl shadow-sm border-l-4 border-earthly-green max-w-xs">
                <p className="font-serif italic text-earthly-text text-lg">"Respect the land, and it will feed you forever."</p>
                <p className="text-xs font-bold text-earthly-green mt-3 uppercase tracking-wider">Earthly Farmer Pledge</p>
             </div>
          </div>

          {/* Text Side */}
          <div className="lg:w-1/2">
            <span className="text-earthly-gold font-medium mb-2 block">Why Choose Earthly?</span>
            <h2 className="text-4xl font-bold text-earthly-text mb-8 leading-tight">Good for You.<br/>Good for the Planet.</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-earthly-sage/20 rounded-full flex items-center justify-center text-earthly-green transition-colors group-hover:bg-earthly-green group-hover:text-white">
                  <Heart size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-earthly-text mb-1">Superfood Nutrition</h4>
                  <p className="text-stone-500 font-light">Packed with **plant-based protein**, heart-healthy monounsaturated fats, and essential minerals like magnesium and zinc.</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-earthly-sage/20 rounded-full flex items-center justify-center text-earthly-green transition-colors group-hover:bg-earthly-green group-hover:text-white">
                  <Check size={20} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-earthly-text mb-1">Keto & Vegan Friendly</h4>
                  <p className="text-stone-500 font-light">Low carb, high energy. The perfect guilt-free snack for keto diets, vegans, and active lifestyles.</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-earthly-sage/20 rounded-full flex items-center justify-center text-earthly-green transition-colors group-hover:bg-earthly-green group-hover:text-white">
                  <Check size={20} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-earthly-text mb-1">100% Natural</h4>
                  <p className="text-stone-500 font-light">Non-GMO. No artificial preservatives. Just pure, unadulterated cashew goodness.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-earthly-sage/20">
              <a 
                href="https://www.instagram.com/earthly_my" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-earthly-text font-medium hover:text-earthly-green transition-colors flex items-center gap-2"
              >
                Follow for more nutrition facts <span className="text-lg">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};