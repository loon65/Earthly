import React from 'react';
import { Leaf, Users, Award } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Users size={28} className="text-earthly-green" />,
      title: "Direct Farm Sourcing",
      description: "We source directly from Binh Phuoc farmers, ensuring single-origin purity and fair trade practices."
    },
    {
      icon: <Award size={28} className="text-earthly-green" />,
      title: "Wood-Fire Roasted",
      description: "Small-batch wood-fire roasting locks in the natural sweetness and delivering the perfect crunch."
    },
    {
      icon: <Leaf size={28} className="text-earthly-green" />,
      title: "Sustainable Agriculture",
      description: "Our farming partners use eco-friendly methods that preserve Vietnam's rich red basalt soil."
    }
  ];

  return (
    <section id="features" className="py-16 bg-earthly-bg scroll-mt-24 border-b border-earthly-sage/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-earthly-sage/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-earthly-sage/20 transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-earthly-text mb-3">{feature.title}</h3>
              <p className="text-stone-500 leading-relaxed text-sm max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};