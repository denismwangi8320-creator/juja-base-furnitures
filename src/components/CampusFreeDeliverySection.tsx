import React from 'react';
import { Truck, CheckCircle2, MapPin, Phone, MessageCircle } from 'lucide-react';
import { FREE_DELIVERY_CAMPUSES, STORE_PHONE_NUMBER, STORE_PHONE_DIGITS } from '../data/products';

export const CampusFreeDeliverySection: React.FC = () => {
  return (
    <section id="campuses-section" className="py-14 bg-emerald-950 text-white border-y border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-emerald-800/80 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              <Truck className="w-4 h-4" />
              <span>Free Campus Delivery Guaranteed</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              We Deliver to Karatina University, Mount Kenya, JKUAT & DeKUT for FREE
            </h2>
            <p className="text-sm text-emerald-200 max-w-2xl leading-relaxed">
              No extra transport fee added to your bill! The price you see (Desks: KSh 6,000, Chairs: KSh 5,500 / 7,500) is the complete final price delivered directly to your doorstep.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href={`https://wa.me/${STORE_PHONE_DIGITS}?text=${encodeURIComponent(
                'Hello! Please confirm free delivery schedule to my campus (Karatina / MKU / JKUAT / DeKUT).'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-lg text-xs font-bold transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book Campus Delivery</span>
            </a>
          </div>
        </div>

        {/* 4 Campus Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FREE_DELIVERY_CAMPUSES.map((campus, index) => (
            <div
              key={campus.name}
              className="bg-emerald-900/60 p-5 rounded-xl border border-emerald-800/80 hover:border-emerald-500 transition-colors space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-800/80 px-2 py-0.5 rounded">
                    {campus.badge}
                  </span>
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold font-display text-white">
                  {campus.name}
                </h3>
                <p className="text-xs text-emerald-100/80 leading-relaxed">
                  {campus.description}
                </p>
              </div>

              <div className="pt-3 border-t border-emerald-800/60 flex items-center gap-1.5 text-xs font-semibold text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Delivery: KSh 0 (FREE)</span>
              </div>
            </div>
          ))}
        </div>

        {/* Payment After Delivery Assurance Box */}
        <div className="bg-emerald-900/90 rounded-xl p-5 border border-emerald-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs sm:text-sm">
            <div className="w-9 h-9 rounded-full bg-emerald-800 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <p className="font-bold text-white">Zero Deposit Required</p>
              <p className="text-emerald-200 text-xs">
                We bring the furniture to your campus gate or room first. You inspect everything before paying.
              </p>
            </div>
          </div>

          <a
            href={`tel:${STORE_PHONE_NUMBER}`}
            className="text-xs font-bold text-emerald-200 hover:text-white flex items-center gap-1.5 shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Questions? Call {STORE_PHONE_NUMBER}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
