import React, { useState } from 'react';
import { ShoppingBag, Eye, MessageCircle, Check, Star, Truck, ShieldCheck } from 'lucide-react';
import { Product, ProductColor } from '../types';
import { STORE_PHONE_DIGITS } from '../data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, color: ProductColor) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onQuickView,
}) => {
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedColor);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  const whatsAppDirectUrl = `https://wa.me/${STORE_PHONE_DIGITS}?text=${encodeURIComponent(
    `Hello! I would like to order the *${product.name}* (${selectedColor.name}) for *KSh ${product.price.toLocaleString()}* (Delivery Fee Included). Please confirm delivery and note that I will pay upon delivery after physical inspection.`
  )}`;

  return (
    <div 
      onClick={() => onQuickView(product)}
      className="group flex flex-col bg-white rounded-xl border border-slate-200/90 overflow-hidden hover:border-slate-300 hover:shadow-lg transition-all duration-200 cursor-pointer"
    >
      {/* Top Image Showcase (Admirable clean studio photography) */}
      <div className="relative aspect-4/3 bg-slate-100 overflow-hidden flex items-center justify-center">
        {!imgError && product.image ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className={`w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br ${product.fallbackGradient} text-slate-700`}>
            <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center text-slate-800 shadow-sm mb-2">
              <span className="text-xl font-bold font-display">{product.name.charAt(0)}</span>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 text-center">
              {product.name}
            </p>
          </div>
        )}

        {/* Free Delivery Included Pill Tag */}
        <div className="absolute top-3 left-3 bg-emerald-900/95 text-white backdrop-blur-sm px-2.5 py-1 text-[11px] font-semibold tracking-wide rounded shadow-xs flex items-center gap-1">
          <Truck className="w-3 h-3 text-emerald-300" />
          <span>Delivery Included</span>
        </div>

        {/* Secondary tag if present */}
        {product.tag && (
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-800 rounded shadow-xs">
            {product.tag}
          </div>
        )}

        {/* Quick View Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white text-slate-900 p-2 rounded-lg shadow-sm text-xs font-medium flex items-center gap-1.5 backdrop-blur-sm"
          title="Quick view product specs"
        >
          <Eye className="w-4 h-4 text-slate-700" />
          <span className="hidden sm:inline">Specs</span>
        </button>
      </div>

      {/* Product Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Metadata Row: Category & Rating */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
            <span className="uppercase tracking-wider font-semibold text-amber-800">
              {product.category === 'desks' ? 'Office Study Desk' : 'Ergonomic Seating'}
            </span>
            <div className="flex items-center gap-1 text-slate-600">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-mono tabular-nums font-medium">{product.rating}</span>
              <span className="text-slate-400">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 className="text-base font-semibold text-slate-900 group-hover:text-amber-800 transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Brief Feature / Dimension line */}
          <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Payment After Delivery Guarantee Ribbon */}
        <div className="py-1 px-2.5 bg-amber-50 rounded border border-amber-200/80 text-[11px] text-amber-900 font-medium flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-700 shrink-0" />
          <span>Pay strictly AFTER delivery & inspection</span>
        </div>

        {/* Color Switcher & Specs */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
          {/* Color swatches */}
          <div className="flex items-center gap-1.5">
            {product.colors.map((color) => (
              <button
                key={color.name}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedColor(color);
                }}
                className={`w-4 h-4 rounded-full border transition-all ${
                  selectedColor.name === color.name
                    ? 'ring-2 ring-slate-900 ring-offset-1 scale-110 border-white'
                    : 'border-slate-300 opacity-70 hover:opacity-100'
                } ${color.tailwindClass}`}
                title={color.name}
              />
            ))}
            <span className="text-[11px] text-slate-500 ml-1 truncate max-w-[90px]">
              {selectedColor.name}
            </span>
          </div>

          <span className="text-[11px] text-slate-500 font-medium">
            3 Drawers + Keys
          </span>
        </div>

        {/* Price & Action Row */}
        <div className="pt-1 flex items-center justify-between gap-3">
          <div>
            <div className="text-lg font-bold text-slate-900 font-mono tabular-nums">
              KSh {product.price.toLocaleString()}
            </div>
            <div className="text-[10px] text-emerald-700 font-semibold uppercase tracking-wider">
              Free Delivery Included
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* WhatsApp Quick Buy */}
            <a
              href={whatsAppDirectUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors"
              title="Order directly on WhatsApp with Payment After Delivery"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Add to Quote/Order Button */}
            <button
              type="button"
              onClick={handleAdd}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-all ${
                addedAnimation
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-900 hover:bg-slate-800 text-white active:scale-95'
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
                  <span>Add Order</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
