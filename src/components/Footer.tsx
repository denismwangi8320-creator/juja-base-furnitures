import React from 'react';
import { Phone, MapPin, Clock, MessageCircle, ShieldCheck, Truck } from 'lucide-react';
import { STORE_PHONE_NUMBER, STORE_PHONE_DIGITS, STORE_LOCATION, STORE_HOURS } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Location */}
          <div className="space-y-3">
            <span className="text-base font-bold text-white font-display block">
              Juja Office Hub
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Specialized dealers in quality 3-drawer office study desks and ergonomic mesh chairs with and without headrests.
            </p>
            <div className="space-y-1.5 pt-1 text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{STORE_LOCATION}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${STORE_PHONE_NUMBER}`} className="hover:text-white transition-colors">
                  {STORE_PHONE_NUMBER}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{STORE_HOURS}</span>
              </p>
            </div>
          </div>

          {/* Col 2: Transparent Pricing (Delivery Included) */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white block">
              Transparent Prices (Delivery Included)
            </span>
            <ul className="space-y-2">
              <li className="flex justify-between items-baseline border-b border-slate-800 pb-1">
                <span>All Office Desks (3 Drawers + Keys):</span>
                <strong className="text-white font-mono">KSh 6,000</strong>
              </li>
              <li className="flex justify-between items-baseline border-b border-slate-800 pb-1">
                <span>Ergonomic Chair WITH Headrest:</span>
                <strong className="text-white font-mono">KSh 7,500</strong>
              </li>
              <li className="flex justify-between items-baseline border-b border-slate-800 pb-1">
                <span>Ergonomic Chair WITHOUT Headrest:</span>
                <strong className="text-white font-mono">KSh 5,500</strong>
              </li>
              <li className="text-[11px] text-emerald-400 pt-1 flex items-center gap-1">
                <Truck className="w-3.5 h-3.5" />
                <span>All prices above INCLUDE doorstep delivery</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Free Delivery Campuses */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white block">
              Free Delivery Campuses
            </span>
            <ul className="space-y-1.5 text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>JKUAT (Juja & Hostels)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Karatina University (All Campuses)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Mount Kenya University (MKU Thika)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>DeKUT (Dedan Kimathi Nyeri)</span>
              </li>
            </ul>
            <div className="pt-1 text-emerald-400 text-[11px] font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Strictly Pay After Physical Delivery</span>
            </div>
          </div>

          {/* Col 4: Rapid WhatsApp Dispatch */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white block">
              Order Dispatch
            </span>
            <p className="text-xs text-slate-400">
              Call or message our WhatsApp line for immediate loading and campus dispatch.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`https://wa.me/${STORE_PHONE_DIGITS}?text=${encodeURIComponent(
                  'Hello Juja Office Hub, I want to order desks/chairs with payment after delivery.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Order on WhatsApp</span>
              </a>
              <a
                href={`tel:${STORE_PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium transition-colors border border-slate-700"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call {STORE_PHONE_NUMBER}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quiet Copyright Row */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Juja Office Hub. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Location: Juja, Kiambu County</span>
            <span aria-hidden="true">·</span>
            <span>Hotline: {STORE_PHONE_NUMBER}</span>
            <span aria-hidden="true">·</span>
            <span>Payment After Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
