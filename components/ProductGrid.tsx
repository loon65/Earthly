import React from 'react';
import { Product } from '../types';
import { Star, MessageCircle } from 'lucide-react';

export const products: Product[] = [
  {
    id: 1,
    name: "Roasted Cashew Nuts - Salted with Skin (Value Pack)",
    price: 75.00,
    weight: "1kg",
    image: "https://raw.githubusercontent.com/loon65/Earthly/930d5814e9acd07ae161348cc36a55c66a2f3385/Value%20Pack.png",
    rating: 5.0,
    reviews: 189,
    badge: "Best Value",
    description: "Harvested from the legendary red basalt soil of Binh Phuoc, Vietnam, these Grade A cashews are celebrated for their size and rich flavor. Expertly wood-fire roasted with their skins on, they retain a distinct smoky aroma and maximum nutrient density. Lightly salted to accentuate their natural sweetness, this 1kg Value Pack delivers a premium, guilt-free crunch ideal for keto diets and family snacking."
  },
  {
    id: 2,
    name: "Roasted Cashew Nuts - Salted with Skin",
    price: 40.00,
    weight: "500g",
    image: "https://raw.githubusercontent.com/loon65/Earthly/930d5814e9acd07ae161348cc36a55c66a2f3385/Best%20Seller.png",
    rating: 4.9,
    reviews: 342,
    badge: "Bestseller",
    description: "Experience the superior quality of single-origin Vietnamese cashews with our Bestseller. Traditional wood-fire roasted locks in the creamy texture and natural nuttiness that mass-produced brands lack. Kept with their skins for added fiber and antioxidants, these savory gems offer an authentic farm-to-table taste. Perfect for a natural energy boost, this 500g pack is a staple for wellness enthusiasts."
  },
  {
    id: 3,
    name: "Prosperity Gift Set (CNY Edition)",
    price: 218.00,
    weight: "Premium Gift Set",
    image: "https://raw.githubusercontent.com/loon65/Earthly/f1b15d5d8e35c4ca492e0f45b4d1078eeff41909/cny-gift-set.png",
    secondaryImage: "https://raw.githubusercontent.com/loon65/Earthly/c037648868028f8797bf5cfd17d689633e48ac42/cny-gift-set-open.png",
    rating: 5.0,
    reviews: 88,
    badge: "Limited Edition",
    description: "Elevate your Lunar New Year 2025 celebrations with our luxurious 'Xing Fu Li Yu' (Fortune & Happiness) Prosperity Gift Set. This exclusive CNY hamper features a premium bottle of Penfolds Koonunga Hill Cabernet Sauvignon, perfectly paired with three jars of our finest wood-fire roasted cashews, USA pistachios, and walnuts. Housed in an elegant, reusable red magnetic box, it is the ultimate corporate gift or gesture of abundance for family and business partners in Malaysia."
  },
  {
    id: 4,
    name: "Harmony Gift Set (6 Treasures)",
    price: 168.00,
    weight: "6 Premium Jars",
    image: "https://raw.githubusercontent.com/loon65/Earthly/084b368f17ec27fb0c0600394fec5b3802f9233d/cny-gift-set-168.png",
    secondaryImage: "https://raw.githubusercontent.com/loon65/Earthly/47bfebfb3fcc251c92065434e7a4c69fc3448bac/cny-gift-set-168-open.png",
    rating: 5.0,
    reviews: 56,
    badge: "CNY Special",
    description: "Usher in a year of abundance with the Harmony Gift Set (6 Treasures). This vibrant Chinese New Year gift box is curated to symbolize togetherness and health. It contains six premium jars: Signature Roasted Cashews, Roasted Pistachios, Walnuts, Lotus Seeds, Dried Jackfruit, and Dried Mixed Veggies. A healthy, delicious alternative to traditional hampers, beautifully packaged to impress clients, colleagues, and loved ones this festive season."
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
          <span className="text-earthly-green font-semibold tracking-widest uppercase text-xs">Shop Premium Snacks</span>
          <h2 className="text-3xl md:text-4xl font-bold text-earthly-text">The Best Roasted Cashews in Town</h2>
          <p className="text-stone-500 max-w-2xl mx-auto font-light">
            Our cashews are <strong>vacuum sealed</strong> immediately after roasting to preserve the authentic Vietnamese flavor. We specialize in premium wood-fire roasted cashews, <strong>lightly salted with their skins on</strong> for the ultimate crunch and nutrition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col h-full" itemScope itemType="https://schema.org/Product">
              
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden bg-earthly-bg rounded-xl mb-6 cursor-pointer" onClick={() => handleOrder(product)}>
                {product.badge && (
                  <span className={`absolute top-4 left-4 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm z-10 shadow-sm ${product.badge.includes('CNY') || product.badge === 'Limited Edition' ? 'bg-red-600' : 'bg-earthly-green'}`}>
                    {product.badge}
                  </span>
                )}
                
                {/* Primary Image */}
                <img 
                  src={product.image} 
                  alt={`${product.name} - Premium Roasted Cashew Nuts Malaysia - Binh Phuoc Origin`}
                  itemProp="image"
                  className={`absolute inset-0 w-full h-full object-contain p-6 transition-all duration-700 ease-out ${product.secondaryImage ? 'group-hover:opacity-0 scale-100' : 'group-hover:scale-105'}`}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('placehold.co')) {
                       target.src = 'https://placehold.co/600x600/e60012/ffffff?text=Image+Unavailable';
                    }
                  }}
                />

                {/* Secondary Image (Hover) */}
                {product.secondaryImage && (
                  <img 
                    src={product.secondaryImage}
                    alt={`${product.name} - Inside View`}
                    className="absolute inset-0 w-full h-full object-contain p-6 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out scale-95 group-hover:scale-100"
                    loading="lazy"
                    onError={(e) => {
                       const target = e.target as HTMLImageElement;
                       if (!target.src.includes('placehold.co')) {
                          target.src = 'https://placehold.co/600x600/e60012/ffffff?text=Open+Box+View';
                       }
                    }}
                  />
                )}

                {/* Minimalist Overlay */}
                <div className="absolute inset-0 bg-earthly-text/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium text-earthly-text group-hover:text-earthly-green transition-colors" itemProp="name">{product.name}</h3>
                  <div className="text-lg font-bold text-earthly-gold" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    <meta itemProp="priceCurrency" content="MYR" />
                    <meta itemProp="price" content={product.price.toFixed(2)} />
                    <link itemProp="availability" href="https://schema.org/InStock" />
                    <link itemProp="itemCondition" href="https://schema.org/NewCondition" />
                    <span>RM {product.price.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-stone-400 mb-4">
                   <span>{product.weight}</span>
                   <span>•</span>
                   <div className="flex items-center text-earthly-gold">
                    <Star size={14} fill="currentColor" />
                    <span className="ml-1 text-stone-500" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                        <span itemProp="ratingValue">{product.rating}</span> 
                        <meta itemProp="reviewCount" content={product.reviews.toString()} />
                    </span>
                   </div>
                </div>

                {product.description && (
                  <p className="text-stone-500 text-sm leading-relaxed mb-6 font-light" itemProp="description">
                    {product.description}
                  </p>
                )}

                <button 
                  onClick={() => handleOrder(product)}
                  className="mt-auto w-full flex items-center justify-center gap-2 bg-white border border-earthly-green text-earthly-green hover:bg-earthly-green hover:text-white py-3 rounded-lg font-medium transition-all duration-300"
                  aria-label={`Order ${product.name} via WhatsApp`}
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