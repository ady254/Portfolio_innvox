"use client";
import React, { useEffect } from "react";
import { X } from "lucide-react";

interface Testimonial {
  name: string;
  company: string;
  text: string;
  image: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  testimonial: Testimonial | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, testimonial }) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  if (!isOpen || !testimonial) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()} role="dialog" aria-modal="true">
        <div className="p-8 md:p-12">
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-4 flex-1">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-lg text-gray-900">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.company}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">"{testimonial.text}"</p>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">Trusted by {testimonial.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
