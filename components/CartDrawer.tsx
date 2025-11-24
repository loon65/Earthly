import React from 'react';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, delta: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  onRemove, 
  onUpdateQuantity 
}) => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-earthly-text">
            <ShoppingBag size={20} />
            <span className="font-semibold text-lg">Your Cart</span>
            <span className="bg-earthly-sage/20 text-earthly-text text-xs font-bold px-2 py-1 rounded-full">
              {items.reduce((acc, item) => acc + item.quantity, 0)} items
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-stone-100 rounded-full text-stone-400 hover:text-earthly-text transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-stone-400">
              <ShoppingBag size={48} strokeWidth={1} />
              <p className="text-lg font-medium">Your cart is empty</p>
              <button 
                onClick={onClose} 
                className="text-earthly-green hover:underline"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-20 h-20 bg-earthly-bg rounded-lg overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-earthly-text leading-tight">{item.name}</h4>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-stone-300 hover:text-red-400 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <p className="text-sm text-stone-500 mb-3">{item.weight}</p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-earthly-text">RM {item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-3 border border-stone-200 rounded-full px-2 py-1">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="text-stone-400 hover:text-earthly-green p-1"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="text-stone-400 hover:text-earthly-green p-1"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-stone-100 bg-earthly-bg/30">
            <div className="flex justify-between items-center mb-4">
              <span className="text-stone-500">Subtotal</span>
              <span className="text-xl font-bold text-earthly-text">RM {subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-stone-400 mb-6 text-center">Shipping & taxes calculated at checkout.</p>
            <button className="w-full bg-earthly-green text-white py-4 rounded-xl font-semibold shadow-lg hover:bg-earthly-text transition-colors flex items-center justify-center gap-2 group">
              Checkout Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};