"use client";

import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onEnquire: (product: Product) => void;
}

export default function ProductCard({ product, onEnquire }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-img">
        <span className="product-emoji">{product.emoji}</span>
      </div>

      <div className="product-body">
        <div className="product-meta">
          <span className="product-category">{product.category}</span>
          {product.badge && (
            <span className="product-badge">{product.badge}</span>
          )}
        </div>

        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <p className="product-price">{product.price}</p>

        <button
          className="enquire-btn"
          onClick={() => onEnquire(product)}
        >
          Enquire →
        </button>
      </div>
    </div>
  );
}