import React, { useState } from 'react';
import { GraduationCap, Building2, FileCheck, Check, Send, Phone, MessageCircle } from 'lucide-react';
import { STORE_PHONE_NUMBER, STORE_PHONE_DIGITS } from '../data/products';

export const UniversityInstitutionalSection: React.FC = () => {
  const [inquiryType, setInquiryType] = useState<'department' | 'student' | 'boardroom'>('department');
  const [deptName, setDeptName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [estimatedQuantity, setEstimatedQuantity] = useState('5-15 units');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Format WhatsApp inquiry for quick response
    const msg = encodeURIComponent(
      `*Institutional Quote Request - Karatina University*\nType: ${inquiryType}\nDepartment/School: ${deptName || 'Karatina University'}\nContact Person: ${contactName}\nPhone: ${phone}\nEstimated Units: ${estimatedQuantity}`
    );
    window.open(`https://wa.me/${STORE_PHONE_DIGITS}?text=${msg}`, '_blank');
  };

  return (
    <section id="institutional-section" className="py-16 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading (Clean unboxed style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
              Institutional & Campus Programs
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              Karatina University School Procurement & Student Offers
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Direct institutional pricing, official LPO billing, and free on-campus white-glove setup for university departments and students.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Departments & Faculty */}
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Faculty & Dean Offices
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Executive L-shaped desks, motorized sit-stand workstations, and high-back orthopedic chairs with locking file storage.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Accepts Official Karatina Univ LPOs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>30-Day Payment Terms for Approved Offices</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Dedicated technician assembly on campus</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => setInquiryType('department')}
              className={`w-full py-2.5 text-xs font-semibold rounded-lg border transition-colors ${
                inquiryType === 'department'
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              Request Department Quote
            </button>
          </div>

          {/* Card 2: Student & Hostel Packages */}
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Student & Scholar Discount
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Compact study desks and student task chairs tailored for university hostels, off-campus bedsitters, and revision corners.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Special 10% discount with Student ID</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Free delivery to internal & external hostels</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Instant M-Pesa Buy Goods Till payment</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => setInquiryType('student')}
              className={`w-full py-2.5 text-xs font-semibold rounded-lg border transition-colors ${
                inquiryType === 'student'
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              Select Student Package
            </button>
          </div>

          {/* Card 3: Boardrooms & Labs */}
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Labs & Boardroom Fitouts
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Senate tables, high-density computer lab benching, acoustic partitions, and cantilever visitor seating sets.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Volume tier discounts for 10+ units</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Integrated HDMI / power popup wiring</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Sample units brought for committee review</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => setInquiryType('boardroom')}
              className={`w-full py-2.5 text-xs font-semibold rounded-lg border transition-colors ${
                inquiryType === 'boardroom'
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              Request Fitout Proposal
            </button>
          </div>
        </div>

        {/* Quick Institutional RFP / Quote Form */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm max-w-4xl mx-auto">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
            <div>
              <h4 className="text-lg font-bold text-slate-900 font-display">
                Instant Karatina Campus Quotation Dispatch
              </h4>
              <p className="text-xs text-slate-500">
                Specify your department or room requirements to receive an official formal quote within 15 minutes.
              </p>
            </div>
            <a
              href={`tel:${STORE_PHONE_NUMBER}`}
              className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-amber-800"
            >
              <Phone className="w-3.5 h-3.5 text-amber-700" />
              <span>{STORE_PHONE_NUMBER}</span>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-slate-700 block mb-1">
                Department / School / Hostel
              </label>
              <input
                type="text"
                required
                value={deptName}
                onChange={(e) => setDeptName(e.target.value)}
                placeholder="e.g. School of Pure & Applied Sciences / Hostel 3"
                className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-slate-700 block mb-1">
                Contact Person Name & Title
              </label>
              <input
                type="text"
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="e.g. Dr. Jane Kariuki / Student Rep"
                className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-slate-700 block mb-1">
                Phone Number (WhatsApp Active)
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

            <div>
              <label className="text-xs font-medium text-slate-700 block mb-1">
                Estimated Units Needed
              </label>
              <select
                value={estimatedQuantity}
                onChange={(e) => setEstimatedQuantity(e.target.value)}
                className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900 bg-white"
              >
                <option value="1-2 units (Individual / Hostel)">1–2 units (Individual / Hostel)</option>
                <option value="3-8 units (Faculty Suite)">3–8 units (Faculty Suite)</option>
                <option value="10-25 units (Department Office)">10–25 units (Department Office)</option>
                <option value="30+ units (Complete Lab / Senate Hall)">30+ units (Complete Lab / Senate Hall)</option>
              </select>
            </div>

            <div className="sm:col-span-2 pt-2 flex items-center justify-between gap-4">
              <span className="text-[11px] text-slate-500">
                Direct procurement inquiries are routed instantly to our Karatina campus desk.
              </span>
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shrink-0 shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Submit & Open WhatsApp</span>
              </button>
            </div>
          </form>

          {submitted && (
            <div className="mt-4 p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg text-xs flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Inquiry dispatched! Opening WhatsApp with quotation details for +254776816433.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
