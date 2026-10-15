import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, FileText, CheckCircle2, ShieldCheck, MapPin, Truck } from 'lucide-react';
import { CartItem, OrderCustomerInfo } from '../types';
import { STORE_PHONE_DIGITS, STORE_LOCATION } from '../data/products';

interface CartQuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, colorName: string, newQty: number) => void;
  onRemoveItem: (productId: string, colorName: string) => void;
  onClearCart: () => void;
  onGenerateInvoice: (customerInfo: OrderCustomerInfo) => void;
}

export const CartQuoteDrawer: React.FC<CartQuoteDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onGenerateInvoice,
}) => {
  if (!isOpen) return null;

  const [customerInfo, setCustomerInfo] = useState<OrderCustomerInfo>({
    fullName: '',
    phoneNumber: '',
    locationDepartment: 'JKUAT (Juja)',
    notes: '',
    paymentMethod: 'mpesa',
  });

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;

    const itemsSummary = cart
      .map(
        (item, idx) =>
          `${idx + 1}. *${item.product.name}*\n   - Finish: ${item.selectedColor.name}\n   - Qty: ${item.quantity} × KSh ${item.product.price.toLocaleString()} = KSh ${(item.product.price * item.quantity).toLocaleString()} (Delivery Included)`
      )
      .join('\n\n');

    const message = encodeURIComponent(
      `*NEW FURNITURE ORDER (JUJA STORE)*\n*Customer:* ${customerInfo.fullName || 'Customer'}\n*Phone:* ${customerInfo.phoneNumber || 'Provided on WhatsApp'}\n*Campus / Destination:* ${customerInfo.locationDepartment}\n*Payment Policy:* STRICTLY AFTER DELIVERY (Pay upon physical inspection)\n\n*ORDERED ITEMS:*\n${itemsSummary}\n\n*TOTAL AMOUNT: KSh ${subtotal.toLocaleString()}*\n_Note: Delivery fee is 100% FREE to Karatina University, Mount Kenya, JKUAT, and DeKUT._\n${customerInfo.notes ? `*Special Notes:* ${customerInfo.notes}` : ''}`
    );

    window.open(`https://wa.me/${STORE_PHONE_DIGITS}?text=${message}`, '_blank');
  };

  const handleInvoiceClick = () => {
    if (cart.length === 0) return;
    onGenerateInvoice(customerInfo);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/50 backdrop-blur-xs flex justify-end">
      <div 
        className="w-full max-w-lg bg-white h-full shadow-2xl border-l border-slate-200 flex flex-col justify-between overflow-hidden animate-slide-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="text-base font-bold text-slate-900 font-display">
              Your Order Bag
            </h3>
            <p className="text-xs text-slate-500">
              {totalItems} item{totalItems !== 1 ? 's' : ''} selected · Payment After Delivery
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-200/60 transition-colors"
            aria-label="Close cart drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {cart.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-center space-y-3 text-slate-500">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <FileText className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium text-slate-700">Your Order Bag is empty</p>
              <p className="text-xs text-slate-400 max-w-xs">
                Select your preferred desk finish (KSh 6,000) and ergonomic chair (KSh 5,500 – 7,500). Delivery is free!
              </p>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-600 uppercase tracking-wider pb-1 border-b border-slate-100">
                  <span>Selected Furniture</span>
                  <button
                    onClick={onClearCart}
                    className="text-red-600 hover:text-red-700 text-[11px] font-normal normal-case"
                  >
                    Clear All
                  </button>
                </div>

                {cart.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedColor.name}`}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center gap-3"
                  >
                    {/* Thumbnail */}
                    <div className="w-16 h-16 rounded-lg bg-white border border-slate-200 overflow-hidden shrink-0">
                      {item.product.image ? (
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-700 text-xs font-bold">
                          {item.product.name.charAt(0)}
                        </div>
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-slate-900 truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                        <span className={`w-2.5 h-2.5 rounded-full ${item.selectedColor.tailwindClass}`} />
                        <span>{item.selectedColor.name}</span>
                      </p>
                      <p className="text-xs font-bold text-slate-900 font-mono tabular-nums mt-1">
                        KSh {(item.product.price * item.quantity).toLocaleString()}
                        <span className="text-[10px] text-emerald-700 font-semibold ml-1.5">
                          (Delivery Included)
                        </span>
                      </p>
                    </div>

                    {/* Stepper & Delete */}
                    <div className="flex flex-col items-end gap-2">
                      <button
                        onClick={() => onRemoveItem(item.product.id, item.selectedColor.name)}
                        className="text-slate-400 hover:text-red-600 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center border border-slate-300 rounded bg-white text-xs">
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.product.id, item.selectedColor.name, item.quantity - 1)
                          }
                          className="px-2 py-0.5 text-slate-600 hover:text-slate-900"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 py-0.5 font-mono font-semibold tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.product.id, item.selectedColor.name, item.quantity + 1)
                          }
                          className="px-2 py-0.5 text-slate-600 hover:text-slate-900"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery Details Form */}
              <div className="space-y-3 pt-2 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Free Delivery Destination
                  </span>
                  <span className="text-[11px] text-emerald-700 font-bold">KSh 0 Transport</span>
                </div>

                <div>
                  <label className="text-[11px] font-medium text-slate-600 block mb-1">
                    Select University or Location
                  </label>
                  <select
                    value={customerInfo.locationDepartment}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, locationDepartment: e.target.value })
                    }
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900 bg-white"
                  >
                    <option value="JKUAT (Juja) - Main Campus / Hostels">JKUAT (Juja) - Main Campus / Hostels</option>
                    <option value="Karatina University - Main Campus / Town">Karatina University - Main Campus / Town</option>
                    <option value="Mount Kenya University (MKU) - Thika">Mount Kenya University (MKU) - Thika</option>
                    <option value="DeKUT (Dedan Kimathi University) - Nyeri">DeKUT (Dedan Kimathi University) - Nyeri</option>
                    <option value="Juja Town & Environs">Juja Town & Environs</option>
                    <option value="Thika Town & Environs">Thika Town & Environs</option>
                    <option value="Nairobi / Along Superhighway">Nairobi / Along Superhighway</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-medium text-slate-600 block mb-1">
                    Full Name / Student Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dennis Mwangi"
                    value={customerInfo.fullName}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, fullName: e.target.value })
                    }
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-medium text-slate-600 block mb-1">
                    Phone / WhatsApp Number (For Delivery Call)
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +254 7XX XXX XXX"
                    value={customerInfo.phoneNumber}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, phoneNumber: e.target.value })
                    }
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-medium text-slate-600 block mb-1">
                    Specific Hostel / Room / Gate Info
                  </label>
                  <input
                    type="text"
                    value={customerInfo.notes || ''}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, notes: e.target.value })
                    }
                    placeholder="e.g. Gate C, Sunrise Hostels Room 12"
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>

                {/* Explicit Payment After Delivery Notice */}
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-900">
                    <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Payment Policy: Pay Strictly After Delivery</span>
                  </div>
                  <p className="text-[11px] text-emerald-800 leading-relaxed">
                    No deposit needed. The driver will deliver to your room or gate. Inspect the drawers and test the chair, then send payment via M-Pesa.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer with totals and action buttons */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Total Items ({totalItems}):</span>
                <span className="font-mono tabular-nums font-semibold text-slate-900">
                  KSh {subtotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-emerald-700">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5" />
                  <span>Delivery to Karatina / MKU / JKUAT / DeKUT:</span>
                </span>
                <span className="font-bold uppercase tracking-wider text-[11px]">FREE (KSh 0)</span>
              </div>
              <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline text-sm">
                <span className="font-bold text-slate-900">Amount Due Upon Delivery:</span>
                <span className="text-lg font-bold text-slate-900 font-mono tabular-nums">
                  KSh {subtotal.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              {/* Primary Action: WhatsApp Order */}
              <button
                type="button"
                onClick={handleWhatsAppOrder}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-colors uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Order via WhatsApp (+254 776 816 433)</span>
              </button>

              {/* Secondary Action: Proforma Invoice */}
              <button
                type="button"
                onClick={handleInvoiceClick}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>Print Order Receipt / Invoice</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
