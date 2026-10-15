import React, { useState } from 'react';
import { X, ShoppingBag, MessageCircle, Check, Star, ShieldCheck, Ruler, Layers, Weight, MapPin, Truck } from 'lucide-react';
import { Product, ProductColor } from '../types';
import { STORE_PHONE_DIGITS, STORE_LOCATION } from '../data/products';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, color: ProductColor, quantity: number) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedColor, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  const whatsAppMessage = encodeURIComponent(
    `Hello Juja Office Hub, I want to order:\n- Item: *${product.name}*\n- Finish: ${selectedColor.name}\n- Quantity: ${quantity}\n- Total: KSh ${(product.price * quantity).toLocaleString()} (Delivery Fee Included)\n\nPlease confirm free delivery to my campus (Karatina / MKU / JKUAT / DeKUT). I understand payment is after delivery & inspection.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 shadow-sm transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image Showcase */}
        <div className="md:w-1/2 bg-slate-100 flex flex-col justify-between relative overflow-hidden">
          <div className="h-72 md:h-full relative flex items-center justify-center">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${product.fallbackGradient}`}>
                <span className="text-3xl font-bold font-display text-slate-800">{product.name}</span>
              </div>
            )}

            <div className="absolute top-4 left-4 bg-emerald-900/95 text-white backdrop-blur-sm px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded shadow-xs flex items-center gap-1">
              <Truck className="w-3.5 h-3.5 text-emerald-300" />
              <span>Delivery Fee Included</span>
            </div>
          </div>

          {/* Quick campus trust bar */}
          <div className="p-4 bg-slate-900 text-white flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Payment Strictly After Delivery</span>
            </span>
            <span className="text-slate-300">Free to Karatina, MKU, JKUAT & DeKUT</span>
          </div>
        </div>

        {/* Right Column: Specifications & Purchase Module */}
        <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Header / Category / Rating */}
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span className="uppercase tracking-wider font-semibold text-amber-800">
                  {product.category === 'desks' ? 'Study & Office Desk' : 'Ergonomic Mesh Chair'}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-mono tabular-nums font-semibold text-slate-800">{product.rating}</span>
                  <span className="text-slate-400">({product.reviewCount} reviews)</span>
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                {product.name}
              </h2>
            </div>

            {/* Price display with delivery inclusion */}
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
              <div className="flex items-baseline justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-slate-900 font-mono tabular-nums">
                    KSh {product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-slate-400 line-through font-mono tabular-nums">
                      KSh {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <span className="text-xs text-emerald-700 font-bold uppercase tracking-wider">
                  Delivery Included
                </span>
              </div>
              <p className="text-[11px] text-emerald-800 font-medium">
                Free delivery to Karatina University, Mount Kenya, JKUAT & DeKUT!
              </p>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>

            {/* Color Selection */}
            <div>
              <label className="text-xs font-semibold text-slate-800 uppercase tracking-wider block mb-2">
                Color / Finish: <span className="text-slate-600 font-normal">{selectedColor.name}</span>
              </label>
              <div className="flex items-center gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                      selectedColor.name === color.name
                        ? 'border-slate-900 bg-slate-50 text-slate-900 ring-1 ring-slate-900'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full border border-slate-300 ${color.tailwindClass}`} />
                    <span>{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Key Specifications Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-50 p-2.5 rounded-lg text-xs space-y-1">
                <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                  <Ruler className="w-3.5 h-3.5 text-amber-700" />
                  <span>Dimensions</span>
                </div>
                <p className="font-semibold text-slate-800">{product.dimensions}</p>
              </div>

              <div className="bg-slate-50 p-2.5 rounded-lg text-xs space-y-1">
                <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Payment Policy</span>
                </div>
                <p className="font-semibold text-emerald-700">Strictly After Delivery</p>
              </div>

              <div className="bg-slate-50 p-2.5 rounded-lg text-xs space-y-1">
                <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                  <Layers className="w-3.5 h-3.5 text-amber-700" />
                  <span>Build Material</span>
                </div>
                <p className="font-semibold text-slate-800 truncate" title={product.material}>
                  {product.material}
                </p>
              </div>

              <div className="bg-slate-50 p-2.5 rounded-lg text-xs space-y-1">
                <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                  <Truck className="w-3.5 h-3.5 text-amber-700" />
                  <span>Delivery Cost</span>
                </div>
                <p className="font-semibold text-slate-800">FREE to 4 Campuses</p>
              </div>
            </div>

            {/* Key Engineering Features */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Features & What&apos;s Included
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contiguous Purchase Module */}
          <div className="pt-4 border-t border-slate-200 space-y-3">
            <div className="flex items-center gap-4">
              {/* Quantity selector */}
              <div className="flex items-center border border-slate-300 rounded-lg">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-sm text-slate-600 hover:text-slate-900"
                >
                  -
                </button>
                <span className="px-3 py-2 text-sm font-semibold font-mono tabular-nums">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-sm text-slate-600 hover:text-slate-900"
                >
                  +
                </button>
              </div>

              {/* Add to Order Button */}
              <button
                type="button"
                onClick={handleAdd}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold text-sm transition-all ${
                  added
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-900 hover:bg-slate-800 text-white active:scale-98 shadow-sm'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Order!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-amber-400" />
                    <span>Add to Order (KSh {(product.price * quantity).toLocaleString()})</span>
                  </>
                )}
              </button>
            </div>

            {/* WhatsApp direct checkout */}
            <a
              href={`https://wa.me/${STORE_PHONE_DIGITS}?text=${whatsAppMessage}`}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              <span>Order via WhatsApp & Pay on Delivery (+254 776 816 433)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
