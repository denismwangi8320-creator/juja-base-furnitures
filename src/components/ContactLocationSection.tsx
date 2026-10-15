import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Send, Check, ChevronDown, Navigation, ShieldCheck, Truck } from 'lucide-react';
import { STORE_PHONE_NUMBER, STORE_PHONE_DIGITS, STORE_LOCATION, STORE_HOURS, FAQ_ITEMS } from '../data/products';

export const ContactLocationSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState('JKUAT (Juja)');
  const [furnitureType, setFurnitureType] = useState('Mahogany Desk (KSh 6,000)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const text = encodeURIComponent(
      `*Order Inquiry (Payment After Delivery)*\n*Name:* ${name}\n*Phone:* ${phone}\n*Delivery Campus:* ${destination}\n*Selected Item:* ${furnitureType}\n*Notes:* ${message || 'Please dispatch to my location. I will pay after inspecting the goods.'}`
    );
    window.open(`https://wa.me/${STORE_PHONE_DIGITS}?text=${text}`, '_blank');
  };

  return (
    <section id="contact-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
            Juja Workshop & Campus Distribution
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
            Based in Juja · Free Delivery to Karatina, MKU, JKUAT & DeKUT
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Order online or via phone/WhatsApp. We deliver directly to your gate or hostel room with <strong>zero upfront payment</strong>.
          </p>
        </div>

        {/* Contact Information & Interactive Order Dispatch Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact & Campus Location Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Phone & WhatsApp Card */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100/80 text-amber-900 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-display">
                Call & WhatsApp Order Hotline
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect directly with our delivery dispatch team to place your order or schedule your campus delivery slot.
              </p>
              <div className="pt-1 flex flex-wrap gap-2">
                <a
                  href={`tel:${STORE_PHONE_NUMBER}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call {STORE_PHONE_NUMBER}</span>
                </a>
                <a
                  href={`https://wa.me/${STORE_PHONE_DIGITS}?text=${encodeURIComponent(
                    'Hello Juja Office Hub! I want to order a desk (KSh 6,000) or chair (KSh 5,500/7,500) for delivery.'
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp (+254 776 816 433)</span>
                </a>
              </div>
            </div>

            {/* Workshop Location Card */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-slate-200 text-slate-800 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-amber-800" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-display">
                Location & Workshop
              </h3>
              <p className="text-sm font-semibold text-slate-800">
                {STORE_LOCATION}
              </p>
              <p className="text-xs text-slate-500">
                Centrally located along Thika Superhighway in Juja. We run daily delivery trucks along the Nairobi – Thika – Murang&apos;a – Karatina – Nyeri transit corridor.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-600 pt-1">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{STORE_HOURS}</span>
              </div>
            </div>

            {/* Payment After Delivery Guarantee Card */}
            <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-2">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
                <span>Payment Policy: Pay Strictly After Delivery</span>
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed">
                Inspect your desk drawers, test the key locks, check the chair height gas lift and smooth rolling wheels. Once satisfied, send payment via M-Pesa to our driver.
              </p>
            </div>
          </div>

          {/* Right Column: Instant Order Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Quick Order Dispatch (Zero Deposit)
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill in your delivery details below to immediately trigger delivery scheduling via WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Dennis Mwangi"
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1">
                    Phone / WhatsApp (+254...)
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+254 7XX XXX XXX"
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1">
                    Select University / Campus
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900 bg-white"
                  >
                    <option value="JKUAT (Juja) - Free Delivery">JKUAT (Juja) - Free Delivery</option>
                    <option value="Karatina University - Free Delivery">Karatina University - Free Delivery</option>
                    <option value="Mount Kenya University (MKU) - Free Delivery">Mount Kenya University (MKU) - Free Delivery</option>
                    <option value="DeKUT (Dedan Kimathi) - Free Delivery">DeKUT (Dedan Kimathi) - Free Delivery</option>
                    <option value="Juja Town / Surroundings - Free Delivery">Juja Town / Surroundings - Free Delivery</option>
                    <option value="Thika Town / Surroundings - Free Delivery">Thika Town / Surroundings - Free Delivery</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1">
                    Item Desired (Delivery Included)
                  </label>
                  <select
                    value={furnitureType}
                    onChange={(e) => setFurnitureType(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900 bg-white"
                  >
                    <option value="Mahogany Desk (KSh 6,000)">Mahogany 3-Drawer Desk — KSh 6,000</option>
                    <option value="Ash Grey Desk (KSh 6,000)">Ash Grey Desk with Cable Port — KSh 6,000</option>
                    <option value="Teak Wood Desk (KSh 6,000)">Golden Teak Wood Desk — KSh 6,000</option>
                    <option value="Alpine White Desk (KSh 6,000)">Alpine White Desk — KSh 6,000</option>
                    <option value="Chair with Headrest (KSh 7,500)">Ergonomic Chair WITH Headrest — KSh 7,500</option>
                    <option value="Chair without Headrest (KSh 5,500)">Ergonomic Chair WITHOUT Headrest — KSh 5,500</option>
                    <option value="Combo: Desk + Chair with Headrest (KSh 13,500)">Desk + Chair WITH Headrest — KSh 13,500</option>
                    <option value="Combo: Desk + Chair without Headrest (KSh 11,500)">Desk + Chair WITHOUT Headrest — KSh 11,500</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-700 block mb-1">
                  Specific Hostel, Room Number, or Landmark
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. Karatina Univ Main Campus Gate, or JKUAT Gate C High Point hostel, Room 20..."
                  className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>No deposit · Pay after inspection</span>
                </span>

                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-xs"
                >
                  <Send className="w-3.5 h-3.5 text-amber-400" />
                  <span>Send Order to WhatsApp</span>
                </button>
              </div>
            </form>

            {submitted && (
              <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Order details formatted! Opening WhatsApp directly with +254776816433.</span>
              </div>
            )}
          </div>
        </div>

        {/* Frequently Asked Questions Accordion */}
        <div className="pt-8 border-t border-slate-200">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
              Customer Support & Delivery Policy
            </div>
            <h3 className="text-xl font-bold font-display text-slate-900">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="py-4">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left text-sm font-semibold text-slate-900 hover:text-amber-800 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        isOpen ? 'rotate-180 text-amber-800' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
