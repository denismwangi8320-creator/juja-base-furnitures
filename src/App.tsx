import React, { useState, useMemo, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CampusFreeDeliverySection } from './components/CampusFreeDeliverySection';
import { ProductCard } from './components/ProductCard';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { ErgonomicSpacePlanner } from './components/ErgonomicSpacePlanner';
import { CartQuoteDrawer } from './components/CartQuoteDrawer';
import { ProformaInvoiceModal } from './components/ProformaInvoiceModal';
import { ContactLocationSection } from './components/ContactLocationSection';
import { Footer } from './components/Footer';
import { PRODUCTS, TESTIMONIALS, STORE_PHONE_NUMBER, STORE_PHONE_DIGITS, STORE_LOCATION } from './data/products';
import { Product, ProductColor, CartItem, OrderCustomerInfo, ProductCategory } from './types';
import { Search, SlidersHorizontal, Quote, Check, ArrowRight, ShieldCheck, Sparkles, MessageCircle, Truck } from 'lucide-react';

export default function App() {
  // Cart state with localStorage persistence
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('juja_office_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('juja_office_cart', JSON.stringify(cart));
    } catch {
      // Storage error fallback
    }
  }, [cart]);

  // UI state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);
  const [invoiceCustomerInfo, setInvoiceCustomerInfo] = useState<OrderCustomerInfo>({
    fullName: '',
    phoneNumber: '',
    locationDepartment: 'JKUAT (Juja)',
    paymentMethod: 'cash_on_delivery',
  });

  // Filter & Search state
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  // Cart Handlers
  const handleAddToCart = (product: Product, color: ProductColor, quantity = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedColor.name === color.name
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        };
        return next;
      }
      return [...prev, { product, selectedColor: color, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, colorName: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(productId, colorName);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.selectedColor.name === colorName
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveItem = (productId: string, colorName: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.selectedColor.name === colorName)
      )
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleGenerateInvoice = (info: OrderCustomerInfo) => {
    setInvoiceCustomerInfo(info);
    setIsCartOpen(false);
    setIsInvoiceOpen(true);
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    // Category filter
    if (selectedCategory === 'desks') {
      list = list.filter((p) => p.category === 'desks');
    } else if (selectedCategory === 'chairs') {
      list = list.filter((p) => p.category === 'chairs');
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q) ||
          p.features.some((f) => f.toLowerCase().includes(q))
      );
    }

    // Sorting
    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Top Banner (Slim payment after delivery & campus delivery announcement) */}
      <div className="no-print bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
              PAYMENT AFTER DELIVERY
            </span>
            <span className="text-slate-300">
              Inspect on arrival before paying! Free delivery to <strong>Karatina, MKU, JKUAT & DeKUT</strong>
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <span>Hotline: <strong className="text-white">{STORE_PHONE_NUMBER}</strong></span>
            <span aria-hidden="true">·</span>
            <span>Based in {STORE_LOCATION}</span>
          </div>
        </div>
      </div>

      {/* Top Bar Navigation (Strict 3-zone contract) */}
      <Navbar cart={cart} onOpenCart={() => setIsCartOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with Admirable Visual Showcase & Pricing */}
        <Hero />

        {/* Free Delivery to Karatina, MKU, JKUAT & DeKUT Section */}
        <CampusFreeDeliverySection />

        {/* Product Catalog Section */}
        <section id="catalog-section" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Section Header with pricing and delivery terms */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1 flex items-center gap-2">
                <span>Admirable Factory Direct Stock</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-700 font-bold">Delivery Fee Included in All Prices</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                All Desks KSh 6,000 · Chairs from KSh 5,500
              </h2>
            </div>
            <div className="text-xs sm:text-sm text-slate-600 max-w-md space-y-1">
              <p>
                <strong>Desks:</strong> KSh 6,000 (3 Drawers + Keys) · <strong>Chair with Headrest:</strong> KSh 7,500 · <strong>Chair without Headrest:</strong> KSh 5,500.
              </p>
              <p className="text-emerald-700 font-semibold flex items-center gap-1">
                <Truck className="w-3.5 h-3.5" />
                <span>Price includes delivery to Karatina, MKU, JKUAT & DeKUT!</span>
              </p>
            </div>
          </div>

          {/* Interactive Filter Toolbar */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-4">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
              {/* Segmented Category Buttons */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg overflow-x-auto">
                {[
                  { id: 'all', label: 'All Furniture' },
                  { id: 'desks', label: 'Office Desks (KSh 6,000)' },
                  { id: 'chairs', label: 'Ergo Chairs (KSh 5,500 – 7,500)' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSelectedCategory(tab.id as ProductCategory)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                      selectedCategory === tab.id
                        ? 'bg-white text-slate-900 shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative min-w-[240px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search finish (Mahogany, Grey, White, Teak)..."
                  className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Sub-toolbar: Sort & Status */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-100 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span>Showing <strong>{filteredProducts.length}</strong> available products</span>
                <span className="text-slate-400">·</span>
                <span className="text-emerald-700 font-semibold">Payment strictly after arrival</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="py-1 px-2 border border-slate-200 rounded text-xs text-slate-700 bg-white focus:outline-none focus:ring-1 focus:ring-slate-900"
                  >
                    <option value="featured">Sort: Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Product Cards Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={(p, c) => handleAddToCart(p, c, 1)}
                  onQuickView={(p) => setQuickViewProduct(p)}
                />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center space-y-3 bg-white rounded-2xl border border-slate-200 p-8">
              <p className="text-base font-bold text-slate-800">No products found</p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try searching for Mahogany, Ash Grey, White, Teak or Mesh Chair.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-4 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

        {/* Anchors for Nav links */}
        <div id="desks-section" />
        <div id="chairs-section" />

        {/* Interactive Posture & Height Calculator */}
        <ErgonomicSpacePlanner
          products={PRODUCTS}
          onSelectProduct={(p) => setQuickViewProduct(p)}
        />

        {/* Customer Proof & Campus Testimonials */}
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
                  Verified Campus Deliveries
                </div>
                <h3 className="text-2xl font-bold font-display text-slate-900">
                  What Students & Staff Say About Payment After Delivery
                </h3>
              </div>
              <p className="text-xs text-slate-500 max-w-sm">
                Real customer experiences from JKUAT, Karatina University, Mount Kenya University, and DeKUT.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <Quote className="w-5 h-5 text-amber-700/60" />
                    <p className="text-xs text-slate-700 leading-relaxed italic">
                      &quot;{t.quote}&quot;
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 text-xs">
                    <p className="font-bold text-slate-900">{t.author}</p>
                    <p className="text-slate-500">{t.role} · <strong className="text-emerald-800">{t.institution}</strong></p>
                    <p className="text-amber-800 font-medium text-[11px] mt-1">
                      Received: {t.productOrdered}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location (Juja), Showroom, Contact & FAQs */}
        <ContactLocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Fast WhatsApp Order Bubble */}
      <aside aria-label="Quick WhatsApp Order" className="no-print fixed bottom-6 right-6 z-30">
        <a
          href={`https://wa.me/${STORE_PHONE_DIGITS}?text=${encodeURIComponent(
            'Hello! I want to order a desk (KSh 6,000) or chair (KSh 5,500/7,500) for delivery. I understand payment is after delivery.'
          )}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all text-xs font-bold"
          aria-label="Order on WhatsApp with Payment After Delivery"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp Order (+254 776 816 433)</span>
          <span className="sm:hidden">Order</span>
        </a>
      </aside>

      {/* Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Cart & Order Bag Drawer */}
      <CartQuoteDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onGenerateInvoice={handleGenerateInvoice}
      />

      {/* Proforma Invoice / Order Receipt Modal */}
      <ProformaInvoiceModal
        isOpen={isInvoiceOpen}
        onClose={() => setIsInvoiceOpen(false)}
        cart={cart}
        customerInfo={invoiceCustomerInfo}
      />
    </div>
  );
}
