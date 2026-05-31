"use client";

import { FaWhatsapp } from "react-icons/fa";

const PHONE_NUMBER = "27679001246";

const MESSAGE = encodeURIComponent(
  "Hello, I need assistance with your services. Please assist."
);

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${PHONE_NUMBER}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}