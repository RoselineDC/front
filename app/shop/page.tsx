"use client";

import { useState } from "react";
import EnquiryModal from "@/components/EnquiryModal";
import { PRODUCTS } from "@/data/products";
import { Product, ProductCategory } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CATEGORIES: { label: string; value: "all" | ProductCategory }[] = [
  { label: "All", value: "all" },
  { label: "Networking", value: "Networking" },
  { label: "Security", value: "Security" },
  { label: "Power & Solar", value: "Power" },
  { label: "IT Hardware", value: "Hardware" },
  { label: "Software", value: "Software" },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | ProductCategory>(
    "all"
  );
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <>
    <Navbar />
      <main className="shop-page">
        {/* Hero */}
        <section className="shop-hero">
          <h1>Our products</h1>
          <p>
            Browse our range of technology solutions. Click enquire on any
            product and our sales team will get back to you.
          </p>
        </section>

        {/* Category filter */}
        <div className="filter-bar" role="group" aria-label="Filter by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              className={`filter-btn${activeCategory === cat.value ? " active" : ""}`}
              onClick={() => setActiveCategory(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <section className="products-grid" aria-label="Products">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onEnquire={setSelectedProduct}
            />
          ))}
        </section>
      </main>

      {/* Enquiry modal */}
      <EnquiryModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      <Footer />
    </>
  );
}