import React from 'react';
import { X, Printer, MapPin, Phone, ShieldCheck, Truck } from 'lucide-react';
import { CartItem, OrderCustomerInfo } from '../types';
import { STORE_PHONE_NUMBER, STORE_LOCATION } from '../data/products';

interface ProformaInvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  customerInfo: OrderCustomerInfo;
}

export const ProformaInvoiceModal: React.FC<ProformaInvoiceModalProps> = ({
  isOpen,
  onClose,
  cart,
  customerInfo,
}) => {
  if (!isOpen) return null;

  const invoiceNumber = `JOH-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div 
        className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls bar (Hidden during print) */}
        <div className="no-print p-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Order Receipt & Proforma Invoice
            </span>
            <span className="text-xs text-slate-400">· Payment is Strictly After Delivery</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-900 rounded-lg text-xs font-bold transition-colors shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
              aria-label="Close invoice preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Invoice Sheet */}
        <div className="p-8 sm:p-10 overflow-y-auto font-sans text-slate-800 space-y-8 bg-white">
          {/* Header section */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 border-b border-slate-200 pb-6">
            <div>
              <h1 className="text-2xl font-bold font-display text-slate-900 tracking-tight">
                Juja Office Hub
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                Dealers in 3-Drawer Office Desks (KSh 6,000) & Ergonomic Mesh Chairs (KSh 5,500 – 7,500)
              </p>
              <div className="text-xs text-slate-600 mt-2 space-y-0.5">
                <p className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                  <span>{STORE_LOCATION}</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                  <span>{STORE_PHONE_NUMBER}</span>
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right space-y-1">
              <span className="inline-block px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 rounded">
                Payment After Delivery
              </span>
              <p className="text-xs font-mono tabular-nums text-slate-600 mt-1">
                Order Ref: <strong className="text-slate-900">{invoiceNumber}</strong>
              </p>
              <p className="text-xs text-slate-500">Date: {today}</p>
            </div>
          </div>

          {/* Client & Destination Information */}
          <div className="grid grid-cols-2 gap-6 bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-xs">
            <div>
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                Customer / Bill To:
              </span>
              <p className="font-bold text-slate-900 text-sm">
                {customerInfo.fullName || 'Valued Customer'}
              </p>
              <p className="text-slate-600 mt-0.5">{customerInfo.phoneNumber || 'Contact on file'}</p>
              <p className="text-emerald-700 font-semibold mt-1">Terms: Pay Strictly After Delivery</p>
            </div>

            <div>
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                Delivery Destination:
              </span>
              <p className="font-bold text-slate-900 text-sm">
                {customerInfo.locationDepartment || 'JKUAT / Karatina / MKU / DeKUT'}
              </p>
              <p className="text-slate-600 mt-0.5">Assembly: Fully assembled with keys included</p>
              <p className="text-emerald-700 font-medium">Campus Delivery Fee: FREE (KSh 0)</p>
            </div>
          </div>

          {/* Itemized Table */}
          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4">Item & Specifications</th>
                  <th className="py-3 px-4 text-center">Qty</th>
                  <th className="py-3 px-4 text-right">Unit Price (KSh)</th>
                  <th className="py-3 px-4 text-right">Total (KSh)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {cart.map((item, idx) => (
                  <tr key={`${item.product.id}-${item.selectedColor.name}`} className="hover:bg-slate-50/50">
                    <td className="py-3.5 px-4 font-mono text-slate-400">{idx + 1}</td>
                    <td className="py-3.5 px-4">
                      <p className="font-bold text-slate-900">{item.product.name}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Finish: {item.selectedColor.name} · {item.product.dimensions} · Delivery Included
                      </p>
                    </td>
                    <td className="py-3.5 px-4 text-center font-mono tabular-nums font-semibold text-slate-800">
                      {item.quantity}
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono tabular-nums text-slate-700">
                      {item.product.price.toLocaleString()}
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono tabular-nums font-bold text-slate-900">
                      {(item.product.price * item.quantity).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Calculations & Terms */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 pt-2">
            <div className="text-xs text-slate-500 space-y-1 max-w-sm">
              <span className="font-semibold text-slate-800 uppercase tracking-wider block">
                Delivery & Payment Notice:
              </span>
              <p>• Zero advance payment required.</p>
              <p>• Delivery is 100% free to Karatina University, Mount Kenya, JKUAT & DeKUT.</p>
              <p>• Please test drawers, locks, and chair gas-lift upon arrival before paying.</p>
            </div>

            <div className="w-full sm:w-64 space-y-1.5 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal:</span>
                <span className="font-mono tabular-nums">KSh {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Campus Delivery Fee:</span>
                <span className="font-semibold text-emerald-700 uppercase">INCLUDED (KSh 0)</span>
              </div>
              <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline">
                <span className="font-bold text-slate-900 text-sm">Pay on Delivery:</span>
                <span className="font-bold text-slate-900 font-mono text-base tabular-nums">
                  KSh {subtotal.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Signoff stamp */}
          <div className="pt-8 border-t border-slate-200 grid grid-cols-2 gap-8 text-xs text-slate-500">
            <div>
              <p className="font-semibold text-slate-800">Dispatched From:</p>
              <p className="mt-4 border-b border-slate-300 w-48 pb-1 font-display font-medium text-slate-700">
                Juja Office Hub Dispatch Team
              </p>
              <p className="text-[11px] text-slate-400 mt-1">Juja, Along Thika Superhighway</p>
            </div>

            <div className="text-right">
              <p className="font-semibold text-slate-800">Customer Inspection & Receipt:</p>
              <div className="mt-4 border-b border-slate-300 w-48 ml-auto pb-1"></div>
              <p className="text-[11px] text-slate-400 mt-1">Signed upon satisfied physical receipt</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
