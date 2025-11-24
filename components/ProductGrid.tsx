import React from 'react';
import { Product } from '../types';
import { Star, MessageCircle } from 'lucide-react';

export const products: Product[] = [
  {
    id: 1,
    name: "Roasted Cashew Nuts (Value Pack)",
    price: 75.00,
    weight: "1kg",
    image: "https://raw.githubusercontent.com/loon65/Earthly/930d5814e9acd07ae161348cc36a55c66a2f3385/Value%20Pack.png",
    rating: 5.0,
    reviews: 189,
    badge: "Best Value"
  },
  {
    id: 2,
    name: "Roasted Cashew Nuts",
    price: 40.00,
    weight: "500g",
    image: "https://raw.githubusercontent.com/loon65/Earthly/930d5814e9acd07ae161348cc36a55c66a2f3385/Best%20Seller.png",
    rating: 4.9,
    reviews: 342,
    badge: "Bestseller"
  },
  {
    id: 3,
    name: "Earthly Premium Gift Set",
    price: 128.00,
    weight: "Assorted Combo",
    image: "https://images.unsplash.com/photo-1627483297929-37f416fec7cd?q=80&w=1974&auto=format&fit=crop",
    rating: 5.0,
    reviews: 56,
    badge: "Limited Edition"
  }
];

export const ProductGrid: React.FC = () => {
  const handleOrder = (product: Product) => {
    const message = `Hi Earthly, I would like to order: ${product.name} (${product.weight}) for RM ${product.price.toFixed(2)}.`;
    const url = `https://wa.me/60189649496?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="products" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-earthly-green font-semibold tracking-widest uppercase text-xs">Curated Selection</span>
          <h2 className="text-3xl md:text-4xl font-bold text-earthly-text">Simple. Natural. Delicious.</h2>
          <p className="text-stone-500 max-w-2xl mx-auto font-light">
            Vacuum sealed at the source to preserve the authentic flavor of the harvest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col">
              
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden bg-earthly-bg rounded-xl mb-6 cursor-pointer" onClick={() => handleOrder(product)}>
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-earthly-green text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm z-10 shadow-sm">
                    {product.badge}
                  </span>
                )}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain p-6 transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                {/* Minimalist Overlay */}
                <div className="absolute inset-0 bg-earthly-text/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium text-earthly-text group-hover:text-earthly-green transition-colors">{product.name}</h3>
                  <p className="text-lg font-bold text-earthly-gold">RM {product.price.toFixed(2)}</p>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-stone-400 mb-4">
                   <span>{product.weight}</span>
                   <span>•</span>
                   <div className="flex items-center text-earthly-gold">
                    <Star size={14} fill="currentColor" />
                    <span className="ml-1 text-stone-500">{product.rating}</span>
                   </div>
                </div>

                <button 
                  onClick={() => handleOrder(product)}
                  className="mt-auto w-full flex items-center justify-center gap-2 bg-white border border-earthly-green text-earthly-green hover:bg-earthly-green hover:text-white py-3 rounded-lg font-medium transition-all duration-300"
                >
                  <MessageCircle size={18} />
                  Order on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};