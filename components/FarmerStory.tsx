import React from 'react';
import { X, Image as ImageIcon, MapPin, Sun, Sprout } from 'lucide-react';

interface FarmerStoryProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FarmerStory: React.FC<FarmerStoryProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-earthly-text/60 backdrop-blur-sm">
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col relative animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-100 bg-earthly-bg">
          <h2 className="text-2xl font-bold text-earthly-text">The Farmer's Legacy</h2>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-earthly-text hover:bg-stone-200/50 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto prose prose-stone max-w-none text-stone-600">
          
          {/* Farmer Image */}
          <div className="w-full h-80 rounded-xl mb-8 relative overflow-hidden group shadow-lg">
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
             <img 
                src="https://raw.githubusercontent.com/loon65/Earthly/e6264ce886bb52f00348a3ad775f8509145fe349/farmer.jpeg" 
                alt="Farmer Khanh harvesting cashew nuts in Binh Phuoc Vietnam"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                style={{ filter: "contrast(1.1) saturate(1.05)" }}
             />
             <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent z-20">
                <p className="text-white font-medium text-sm flex items-center gap-2">
                   <ImageIcon size={16} /> Farmer Khanh in Binh Phuoc
                </p>
             </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-6 text-xs font-semibold text-earthly-green uppercase tracking-wider">
            <span className="flex items-center gap-1 bg-earthly-sage/10 px-3 py-1 rounded-full"><MapPin size={14} /> Binh Phuoc, Vietnam</span>
            <span className="flex items-center gap-1 bg-earthly-sage/10 px-3 py-1 rounded-full"><Sun size={14} /> 20+ Years Experience</span>
            <span className="flex items-center gap-1 bg-earthly-sage/10 px-3 py-1 rounded-full"><Sprout size={14} /> Sustainable Farming</span>
          </div>

          <h3 className="text-2xl font-bold text-earthly-text mb-4">Meet Farmer Khanh: Guardian of the Soil</h3>
          
          <p className="leading-relaxed mb-6 text-lg">
            Nestled in the sun-drenched heart of <strong>Binh Phuoc Province, Vietnam</strong>—globally renowned as the "Cashew Capital"—farmer Khanh begins his day before dawn. For over two decades, Khanh has been the steward of his five-hectare estate, cultivating some of the <strong>finest premium cashew nuts</strong> in Southeast Asia. This land, passed down through generations, holds more than just trees—it holds a legacy of hard work, resilience, and an unwavering pursuit of quality.
          </p>
          
          <h4 className="text-xl font-semibold text-earthly-text mb-3">The Secret of Red Basalt Soil</h4>
          <p className="leading-relaxed text-lg mb-6">
            Khanh’s journey began when he inherited the farm from his father, who taught him the value of working in harmony with nature. Binh Phuoc is blessed with <strong>mineral-rich red basalt soil</strong> and a distinct tropical climate, creating the perfect terroir for producing cashews with exceptional crunch and natural sweetness.
          </p>
          
          <p className="leading-relaxed text-lg">
             Growing <strong>export-quality cashews</strong> is far from simple. From planting and nurturing the trees to the careful hand-harvesting process, every step requires precision and patience. Khanh's dedication ensures that every Earthly cashew is not just a snack, but a testament to sustainable Vietnamese agriculture.
          </p>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-stone-100 bg-earthly-bg flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-earthly-green text-white rounded-lg hover:bg-earthly-text transition-colors font-medium"
          >
            Close Story
          </button>
        </div>
      </div>
    </div>
  );
};