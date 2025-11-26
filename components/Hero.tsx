import React from 'react';
import { ArrowRight, Star, Heart, Leaf, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-earthly-bg pt-32 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      {/* Soft Gradient Background Orb */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-earthly-sage/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-earthly-cream rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Left */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-earthly-sage/30">
              <div className="flex text-earthly-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-medium text-earthly-text tracking-wide">Rated #1 Healthy Snack in Malaysia</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-earthly-text leading-[1.1]">
              The Best <span className="text-earthly-green italic font-serif">Roasted</span> <br />
              <span className="text-earthly-gold">Cashew Nuts</span> in Malaysia.
            </h1>
            
            <p className="text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Discover the crunch of <strong>Grade A Vietnamese Cashews</strong>. Sourced directly from Binh Phuoc farms and wood-fire roasted to perfection. The ultimate plant-based snack delivered fresh to your door in Kuala Lumpur and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#products"
                onClick={(e) => scrollToSection(e, 'products')}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all bg-earthly-green rounded-full hover:bg-earthly-text hover:shadow-lg hover:-translate-y-1"
                aria-label="Order Roasted Cashews Online"
              >
                Order Fresh Nuts
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a 
                href="#features"
                onClick={(e) => scrollToSection(e, 'features')}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-earthly-text transition-all bg-transparent border border-earthly-text/30 rounded-full hover:bg-earthly-sage/10 hover:border-earthly-green"
              >
                Farm-to-Table
              </a>
            </div>
            
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-sm text-stone-500 font-medium">
                <span className="flex items-center gap-1"><Leaf size={16} className="text-earthly-green" /> 100% Natural</span>
                <span className="flex items-center gap-1"><Heart size={16} className="text-earthly-gold" /> Keto Friendly</span>
                <span className="flex items-center gap-1"><Zap size={16} className="text-earthly-sage" /> Fresh Roasted</span>
            </div>
          </div>

          {/* Image Right (Hero Banner) */}
          <div className="relative mt-12 lg:mt-0 order-1 lg:order-2 flex justify-center">
             {/* Floating Elements for 'Healthy' vibe */}
             <div className="absolute top-10 left-0 lg:-left-10 animate-bounce duration-[3000ms] z-20">
                <div className="bg-white p-3 rounded-full shadow-lg text-earthly-green">
                    <Leaf size={24} fill="currentColor" className="opacity-80" />
                </div>
             </div>
             <div className="absolute bottom-20 right-0 lg:-right-4 animate-pulse z-20">
                <div className="bg-white px-4 py-2 rounded-full shadow-md border border-earthly-sage/20 text-xs font-bold text-earthly-text">
                   🌱 Binh Phuoc Origin
                </div>
             </div>

            <div className="relative z-10 w-full flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-xl">
                  <div className="absolute inset-0 bg-earthly-gold/20 blur-[80px] rounded-full scale-90"></div>
                  <img 
                    src="https://raw.githubusercontent.com/loon65/Earthly/290ab8450cb6c6e53b3693e60b3144d9146cbff0/cashew%20banner.png" 
                    alt="Premium Wood-fire Roasted Cashew Nuts Jar Earthly Malaysia - Best Keto Healthy Snack" 
                    className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out rounded-2xl"
                    style={{filter: "contrast(1.05)"}}
                    loading="eager"
                    // @ts-ignore
                    fetchPriority="high"
                  />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};