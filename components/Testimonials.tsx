import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: "I used to buy supermarket cashews until I tried Earthly. The difference is night and day. These are so much crunchier and feel cleaner.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Tan",
    text: "Love the mission, love the taste. Knowing my snack supports a farmer in Vietnam makes it taste even better.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily R.",
    text: "The roasted salted ones are addictive but not overly salty. Perfect packaging too, keeps them fresh for weeks.",
    rating: 4
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-earthly-bg scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-earthly-text">Community Love</h2>
          <div className="w-16 h-1 bg-earthly-gold/30 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100 relative">
              <Quote className="absolute top-8 right-8 text-earthly-sage/20 w-8 h-8" />
              <div className="flex text-earthly-gold mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < t.rating ? "currentColor" : "none"} 
                    className={i < t.rating ? "" : "text-gray-200"}
                  />
                ))}
              </div>
              <p className="text-stone-600 font-light italic mb-8 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-earthly-cream rounded-full flex items-center justify-center text-earthly-text font-serif font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                   <span className="font-medium text-earthly-text block">{t.name}</span>
                   <span className="text-xs text-stone-400">Verified Buyer</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};