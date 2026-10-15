import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Phone, ShieldCheck, Truck } from 'lucide-react';
import { CartItem } from '../types';
import { STORE_PHONE_NUMBER } from '../data/products';

interface NavbarProps {
  cart: CartItem[];
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cart, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const formattedSubtotal = subtotal > 0 
    ? ` · KSh ${subtotal.toLocaleString()}`
    : '';

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a 
            href="#" 
            className="text-xl font-bold tracking-tight text-slate-900 font-display whitespace-nowrap shrink-0 hover:text-amber-700 transition-colors"
          >
            Juja Office Hub
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#desks-section" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Desks (KSh 6,000)
            </a>
            <a href="#chairs-section" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Chairs (KSh 5,500 – 7,500)
            </a>
            <a href="#campuses-section" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 text-emerald-700 font-semibold">
              <Truck className="w-3.5 h-3.5" />
              <span>Free Delivery Campuses</span>
            </a>
            <a href="#payment-terms" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
              <span>Pay After Delivery</span>
            </a>
            <a href="#contact-section" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Juja Hub & Contact
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action (Quote & Cart Drawer Trigger) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCart}
              className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 rounded-lg hover:bg-slate-800 active:scale-[0.98] transition-all whitespace-nowrap shrink-0 shadow-sm"
              aria-label={`Open shopping cart with ${totalItems} items`}
            >
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              <span>Order Bag {totalItems > 0 ? `(${totalItems})${formattedSubtotal}` : '(0)'}</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 md:hidden rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 space-y-3">
            <a
              href="#desks-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md"
            >
              Office Desks (KSh 6,000)
            </a>
            <a
              href="#chairs-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md"
            >
              Ergonomic Chairs (KSh 5,500 – 7,500)
            </a>
            <a
              href="#campuses-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 rounded-md"
            >
              Free Delivery to Karatina, MKU, JKUAT & DeKUT
            </a>
            <a
              href="#payment-terms"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md"
            >
              Payment Terms (Strictly After Delivery)
            </a>
            <a
              href="#contact-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md"
            >
              Juja Workshop & Contacts
            </a>
            <div className="pt-2 border-t border-slate-100 px-3">
              <a
                href={`tel:${STORE_PHONE_NUMBER}`}
                className="flex items-center gap-2 text-xs font-semibold text-slate-800"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <span>Call {STORE_PHONE_NUMBER}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
