"use client";

import { useState, useEffect, useRef } from "react";
import { X, Loader2 } from "lucide-react";
import { Product } from "@/types/product";

interface EnquiryModalProps {
  product: Product | null;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  quantity: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  quantity: "",
  message: "",
};

export default function EnquiryModal({ product, onClose }: EnquiryModalProps) {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Reset state when a new product is selected
  useEffect(() => {
    if (product) {
      setForm(INITIAL_FORM);
      setErrors({});
      setSubmitted(false);
      setSubmitError(null);
    }
  }, [product]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Trap focus inside modal
  useEffect(() => {
    if (product) {
      modalRef.current?.focus();
    }
  }, [product]);

  if (!product) return null;

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setSubmitError(null);
    setLoading(true);

    // Build a message body that carries the product context, since
    // /api/contact only has name/email/company/service/message fields.
    const message = [
      `Product: ${product.name}`,
      `Category: ${product.category}`,
      `Listed price: ${product.price}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Quantity needed: ${form.quantity || "Not specified"}`,
      ``,
      form.message || "No additional message.",
    ].join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: "",
          service: `Product Enquiry — ${product.name}`,
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal" ref={modalRef} tabIndex={-1}>
        {/* Header */}
        <div className="modal-header">
          <div>
            <h2 id="modal-title" className="modal-title">
              Enquire about product
            </h2>
            <p className="modal-product-name">{product.name}</p>
          </div>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Success state */}
        {submitted ? (
          <div className="modal-success">
            <div className="success-icon">✅</div>
            <p className="success-heading">Enquiry sent!</p>
            <p className="success-sub">
              Our sales team will contact you within 1 business day.
            </p>
            <button className="enquire-btn" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          /* Form */
          <div className="modal-form">
            {submitError && (
              <p className="form-error" role="alert" style={{ marginBottom: "0.5rem" }}>
                {submitError}
              </p>
            )}

            <div className="form-group">
              <label htmlFor="enq-name">Full name *</label>
              <input
                id="enq-name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange("name")}
                autoComplete="name"
                disabled={loading}
              />
              {errors.name && (
                <span className="form-error">{errors.name}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="enq-email">Email address *</label>
              <input
                id="enq-email"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange("email")}
                autoComplete="email"
                disabled={loading}
              />
              {errors.email && (
                <span className="form-error">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="enq-phone">Phone number</label>
              <input
                id="enq-phone"
                type="tel"
                placeholder="+27 ..."
                value={form.phone}
                onChange={handleChange("phone")}
                autoComplete="tel"
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="enq-qty">Quantity / units needed</label>
              <input
                id="enq-qty"
                type="text"
                placeholder="e.g. 5 units"
                value={form.quantity}
                onChange={handleChange("quantity")}
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="enq-msg">Message</label>
              <textarea
                id="enq-msg"
                placeholder="Any additional details, specs or questions..."
                value={form.message}
                onChange={handleChange("message")}
                rows={4}
                disabled={loading}
              />
            </div>

            <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
              {loading ? (
                <>
                  <Loader2 size={16} className="spin" /> Sending...
                </>
              ) : (
                "Send enquiry"
              )}
            </button>

            <p className="modal-footer-note">
              Your enquiry goes directly to info@nobstechnologies.co.za
            </p>
          </div>
        )}
      </div>
    </div>
  );
}