"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Star,
  Search,
  CheckCircle,
  Truck,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  Eye,
} from "lucide-react";
import { SHOP_PRODUCTS, ShopProduct } from "@/data/shop";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JerseyCustomizerPreview } from "@/components/shop/JerseyCustomizerPreview";

export default function ShopPage() {
  const { addItem, totalCount, setIsCartOpen } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"FEATURED" | "LOW_HIGH" | "HIGH_LOW" | "RATING">("FEATURED");
  const [quickViewProduct, setQuickViewProduct] = useState<ShopProduct | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("L");

  // Customizer state for hero jersey
  const [customName, setCustomName] = useState("GALAXY");
  const [customNumber, setCustomNumber] = useState("07");

  const categories = [
    { id: "ALL", label: "ALL GEAR" },
    { id: "JERSEYS", label: "PRO JERSEYS" },
    { id: "OUTERWEAR", label: "JACKETS & HOODIES" },
    { id: "HEADWEAR", label: "CAPS & HATS" },
    { id: "ACCESSORIES", label: "GAMING HARDWARE" },
    { id: "FAN GEAR", label: "COLLECTIBLES" },
  ];

  const filteredProducts = SHOP_PRODUCTS.filter((product) => {
    const matchesCat =
      selectedCategory === "ALL" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === "LOW_HIGH") return a.price - b.price;
    if (sortBy === "HIGH_LOW") return b.price - a.price;
    if (sortBy === "RATING") return b.rating - a.rating;
    return 0;
  });

  const handleAddToCart = (product: ShopProduct, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const size = product.sizes ? product.sizes[0] : "STANDARD";
    if (product.id === "jersey-custom-pro") {
      addItem(product, size, 1, customName.toUpperCase(), customNumber);
    } else {
      addItem(product, size, 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#060a1a] text-white flex flex-col font-['Rajdhani',sans-serif]">
      {/* Top Fixed Navbar */}
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-16">
        
        {/* Breadcrumbs & Cart Status Bar (Properly spaced clear of 80px Navbar) */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Link href="/" className="hover:text-[#FFC107] transition-colors">
                HOME
              </Link>
              <span>/</span>
              <span className="text-[#FFC107] font-bold">OFFICIAL STORE</span>
            </div>

            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2.5 px-4 py-2 rounded-sm bg-[#081026] border border-amber-500/60 hover:border-amber-400 text-white font-bold transition-all shadow-[0_0_15px_rgba(255,193,7,0.25)] cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-[#FFC107]" />
              <span className="text-xs uppercase tracking-wider">VIEW CART</span>
              <span className="bg-[#FFC107] text-black text-xs font-black px-2 py-0.2 rounded-full">
                {totalCount}
              </span>
            </button>
          </div>
        </div>

        {/* 1. Sci-Fi Pro Jersey Interactive Customizer Banner */}
        <section className="relative pb-10 sm:pb-14 border-b border-slate-800/80 overflow-hidden bg-gradient-to-b from-[#091232]/60 to-transparent">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

            {/* Sci-Fi Interactive Customizer Box */}
            <div
              className="p-6 sm:p-10 bg-[#050b1d] border-2 border-amber-500/70 rounded-sm shadow-[0_0_40px_rgba(255,193,7,0.25)] relative overflow-hidden"
              style={{
                clipPath:
                  "polygon(0 16px, 16px 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 16px))",
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Customizer Controls */}
                <div className="lg:col-span-7 space-y-5">
                  <span className="font-mono text-xs font-bold text-[#FFC107] uppercase tracking-[0.25em] block">
                    {"// 2026 OFFICIAL PRO KIT CUSTOMIZER"}
                  </span>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight uppercase tracking-tight">
                    CUSTOMIZE YOUR <span className="text-[#FFC107]">PRO JERSEY</span>
                  </h1>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl font-medium">
                    Wear the official colors of Myanmar’s champion MLBB roster. Enter your custom player gamer tag and jersey number with metallic gold tournament lettering.
                  </p>

                  {/* Interactive Inputs */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-bold uppercase mb-1">
                        PLAYER IGN / GAMER TAG:
                      </span>
                      <input
                        type="text"
                        maxLength={12}
                        value={customName}
                        onChange={(e) => setCustomName(e.target.value.toUpperCase())}
                        placeholder="e.g. GALAXY"
                        className="bg-[#081026] border border-amber-500/50 rounded-sm px-3.5 py-2.5 text-sm text-[#FFC107] font-bold uppercase font-mono focus:outline-none focus:border-[#FFC107] shadow-inner"
                      />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-bold uppercase mb-1">
                        NUMBER:
                      </span>
                      <input
                        type="text"
                        maxLength={2}
                        value={customNumber}
                        onChange={(e) => setCustomNumber(e.target.value)}
                        placeholder="07"
                        className="w-20 bg-[#081026] border border-amber-500/50 rounded-sm px-3.5 py-2.5 text-sm text-[#FFC107] font-bold uppercase font-mono focus:outline-none focus:border-[#FFC107] text-center shadow-inner"
                      />
                    </div>

                    <div className="flex flex-col justify-end pt-5">
                      <button
                        onClick={() =>
                          addItem(
                            SHOP_PRODUCTS[1],
                            "L",
                            1,
                            customName.toUpperCase(),
                            customNumber
                          )
                        }
                        className="btn-scifi-primary"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>ORDER CUSTOM (48,000 MMK)</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right: Live Vector Jersey Customizer Preview */}
                <div className="lg:col-span-5 relative flex items-center justify-center">
                  <JerseyCustomizerPreview
                    customName={customName}
                    customNumber={customNumber}
                    className="w-full max-w-sm"
                  />
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* 2. Trust Badges Row */}
        <section className="py-6 border-b border-slate-800 bg-[#050b1d]/70">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex items-center justify-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#FFC107]" />
              <span className="font-bold">100% Authentic Pro Kit</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-slate-300">
              <Truck className="w-4 h-4 text-cyan-400" />
              <span className="font-bold">Nationwide Myanmar Delivery</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-slate-300">
              <Sparkles className="w-4 h-4 text-[#FFC107]" />
              <span className="font-bold">10% Off via KBZ Pay (KBZPAY10)</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-slate-300">
              <RotateCcw className="w-4 h-4 text-emerald-400" />
              <span className="font-bold">Hassle-Free Size Exchange</span>
            </div>
          </div>
        </section>

        {/* 3. Sci-Fi Store Catalog & Product Grid */}
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Filter Bar */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
            
            {/* Sci-Fi Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? "bg-[#FFC107] text-black shadow-[0_0_15px_rgba(255,193,7,0.4)] scale-105"
                      : "bg-[#081026] text-slate-400 hover:text-white border border-slate-800"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search & Sort Controls */}
            <div className="flex items-center gap-3">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search merchandise..."
                  className="w-full bg-[#081026] border border-slate-700 rounded-sm pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FFC107]"
                />
              </div>

              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target.value as
                      | "FEATURED"
                      | "LOW_HIGH"
                      | "HIGH_LOW"
                      | "RATING"
                  )
                }
                className="bg-[#081026] border border-slate-700 rounded-sm px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-[#FFC107]"
              >
                <option value="FEATURED">Featured</option>
                <option value="LOW_HIGH">Price: Low to High</option>
                <option value="HIGH_LOW">Price: High to Low</option>
                <option value="RATING">Highest Rated</option>
              </select>
            </div>

          </div>

          {/* Sci-Fi Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  setQuickViewProduct(product);
                  if (product.sizes) setSelectedSize(product.sizes[0]);
                }}
                className="group rounded-sm overflow-hidden border border-slate-800/90 hover:border-amber-500/80 bg-[#050b1d] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,193,7,0.25)] hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Product Thumbnail */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-950">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-106 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050b1d] via-transparent to-transparent" />

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-[#FFC107] text-black font-['Rajdhani',sans-serif] text-[10px] font-black uppercase px-2.5 py-1 rounded shadow">
                        {product.badge}
                      </div>
                    )}

                    {/* Quick View Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                      <span className="px-4 py-2 rounded-sm bg-slate-900 border border-amber-400 text-xs font-bold text-[#FFC107] flex items-center gap-1.5 shadow-lg">
                        <Eye className="w-3.5 h-3.5" /> QUICK VIEW
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-cyan-400 font-bold uppercase tracking-wider">
                        {product.category}
                      </span>
                      <div className="flex items-center gap-1 text-amber-400 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span>{product.rating}</span>
                        <span className="text-slate-500 font-normal">
                          ({product.reviewCount})
                        </span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-[#FFC107] transition-colors leading-snug line-clamp-2">
                      {product.name}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Price & Add to Cart */}
                <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-800/80 mt-4">
                  <div className="space-y-0.5">
                    <div className="text-base sm:text-lg font-black text-[#FFC107] font-mono">
                      {product.price.toLocaleString()} MMK
                    </div>
                    {product.originalPrice && (
                      <div className="text-xs text-slate-500 line-through font-mono">
                        {product.originalPrice.toLocaleString()} MMK
                      </div>
                    )}
                  </div>

                  <button
                    onClick={(e) => handleAddToCart(product, e)}
                    className="btn-scifi-primary !py-2 !px-4 text-xs"
                  >
                    <span>ADD TO CART</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </section>

      </main>

      {/* Quick View Product Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#060c22] border-2 border-amber-500/80 rounded-sm overflow-hidden shadow-[0_0_50px_rgba(255,193,7,0.35)] max-h-[90vh] flex flex-col font-['Rajdhani',sans-serif]">
            
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-amber-500/30 bg-[#040817]">
              <span className="text-xs font-bold text-[#FFC107] uppercase tracking-wider">
                {quickViewProduct.category} • PRODUCT SPECIFICATION
              </span>

              <button
                onClick={() => setQuickViewProduct(null)}
                className="p-1.5 rounded bg-slate-900 border border-slate-700 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                <div className="md:col-span-5 relative aspect-square rounded-sm overflow-hidden border border-slate-700 bg-slate-950">
                  <Image
                    src={quickViewProduct.image}
                    alt={quickViewProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="md:col-span-7 space-y-4">
                  <div>
                    <h2 className="text-xl font-bold text-white uppercase">
                      {quickViewProduct.name}
                    </h2>
                    <div className="text-2xl font-black text-[#FFC107] mt-1 font-mono">
                      {quickViewProduct.price.toLocaleString()} MMK
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {quickViewProduct.description}
                  </p>

                  {/* Size selection */}
                  {quickViewProduct.sizes && (
                    <div className="space-y-1.5">
                      <span className="text-xs font-bold text-slate-300 uppercase block">
                        SELECT SIZE:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {quickViewProduct.sizes.map((s) => (
                          <button
                            key={s}
                            onClick={() => setSelectedSize(s)}
                            className={`px-3 py-1.5 rounded-sm text-xs font-bold border transition-colors ${
                              selectedSize === s
                                ? "bg-[#FFC107] text-black border-[#FFC107]"
                                : "bg-slate-900 text-slate-300 border-slate-700"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Features list */}
                  <ul className="space-y-1 text-xs text-slate-400 border-t border-slate-800 pt-3">
                    {quickViewProduct.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      addItem(quickViewProduct, selectedSize);
                      setQuickViewProduct(null);
                    }}
                    className="btn-scifi-primary w-full !py-3 mt-2"
                  >
                    <span>ADD TO CART ({quickViewProduct.price.toLocaleString()} MMK)</span>
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
