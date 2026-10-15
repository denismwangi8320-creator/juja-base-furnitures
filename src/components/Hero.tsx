import React from 'react';
import { Phone, MessageCircle, ShieldCheck, Truck, Check, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { STORE_PHONE_NUMBER, STORE_PHONE_DIGITS, STORE_LOCATION, FREE_DELIVERY_CAMPUSES } from '../data/products';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pt-14 lg:pb-16">
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & Direct Conversion */}
          <div className="lg:col-span-7 space-y-6">
            {/* Location & Payment Security Badge (Zero-pill discipline, clean text) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider text-slate-600 uppercase">
              <span className="flex items-center gap-1 text-amber-900">
                <MapPin className="w-3.5 h-3.5 text-amber-700" />
                <span>Based in {STORE_LOCATION}</span>
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-emerald-700 font-bold">100% Payment After Delivery</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display text-balance leading-[1.12]">
              Quality Office Desks & Ergonomic Chairs. Pay Strictly After Delivery.
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Heavy-duty study desks with 3 lockable drawers and ergonomic breathable mesh chairs. We deliver directly to your hostel, office, or apartment with <strong>zero advance payment</strong> — inspect your furniture on arrival before paying!
            </p>

            {/* Explicit Transparent Pricing Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="space-y-0.5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  All Office Desks
                </span>
                <p className="text-xl font-bold font-mono text-slate-900 tabular-nums">
                  KSh 6,000
                </p>
                <p className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  <span>Delivery fee included</span>
                </p>
              </div>

              <div className="space-y-0.5 sm:border-l sm:border-slate-200 sm:pl-3">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  Chair with Headrest
                </span>
                <p className="text-xl font-bold font-mono text-slate-900 tabular-nums">
                  KSh 7,500
                </p>
                <p className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  <span>Delivery fee included</span>
                </p>
              </div>

              <div className="space-y-0.5 sm:border-l sm:border-slate-200 sm:pl-3">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  Chair without Headrest
                </span>
                <p className="text-xl font-bold font-mono text-slate-900 tabular-nums">
                  KSh 5,500
                </p>
                <p className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  <span>Delivery fee included</span>
                </p>
              </div>
            </div>

            {/* Fast Actions */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${STORE_PHONE_DIGITS}?text=${encodeURIComponent(
                  'Hello! I would like to order an office desk (KSh 6,000) or chair from Juja. Please confirm free delivery to my location.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-all hover:translate-y-[-1px] whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp (+254 776 816 433)</span>
              </a>

              <a
                href={`tel:${STORE_PHONE_NUMBER}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <span>Call {STORE_PHONE_NUMBER}</span>
              </a>

              <a
                href="#desks-section"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap"
              >
                <span>View Photos</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Universities Free Delivery Promise Tagline */}
            <div className="pt-1 text-xs text-slate-600 flex flex-wrap items-center gap-1.5">
              <span className="font-bold text-emerald-800 uppercase tracking-wide">Free Campus Delivery:</span>
              <span className="text-slate-700">Karatina University</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-700">Mount Kenya (MKU)</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-700">JKUAT</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-700">DeKUT</span>
            </div>
          </div>

          {/* Right Column: Admirable Studio Showcase Anchor */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-4/3 bg-slate-100">
              <img
                src="/src/assets/images/desk_beech_chair_headrest_1792063603865.jpg"
                alt="Light beech 3-drawer study desk with lock and high-back ergonomic mesh chair with headrest"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Highlight badge overlay */}
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-xs text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm">
                <span>Desk KSh 6,000 · Chair KSh 7,500</span>
              </div>

              {/* Bottom Scrim with trust details */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-5 text-white">
                <p className="text-xs font-semibold tracking-wide uppercase text-amber-300">
                  Ready Assembled with 3 Drawers & Keys
                </p>
                <p className="text-sm font-medium text-slate-100 mt-0.5">
                  Inspect upon delivery before sending payment!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Pillar Trust Strip (Clean hairline dividers) */}
        <div id="payment-terms" className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Strictly Pay After Delivery</span>
            </div>
            <p className="text-xs text-slate-500">
              Zero advance payment or deposit required. Check the desk & chair before paying via M-Pesa.
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
              <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Free Delivery Included</span>
            </div>
            <p className="text-xs text-slate-500">
              The stated prices (KSh 6,000, 7,500, 5,500) already cover full delivery to your gate or room.
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
              <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>4 University Hubs</span>
            </div>
            <p className="text-xs text-slate-500">
              Daily routes to Karatina University, Mount Kenya University, JKUAT, and DeKUT.
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Fully Assembled & Keys</span>
            </div>
            <p className="text-xs text-slate-500">
              Delivered complete with 3 drawers, black handles, and working lock with 2 keys.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
