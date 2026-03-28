"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DisclaimerModal({ isOpen, onClose }: DisclaimerModalProps) {
  const { t } = useLanguage();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => onClose();
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      className="w-full max-w-2xl rounded-sm border border-marine/10 bg-white p-0 shadow-xl backdrop:bg-black/50"
      aria-label={t.contact.footer.disclaimerTitle}
    >
      <div className="p-6 md:p-10">
        <div className="mb-6 flex items-center justify-between">
          <h2
            className="text-xl font-light text-marine md:text-2xl"
            style={{ fontFamily: "var(--font-heading), 'Cormorant Garamond', serif" }}
          >
            {t.contact.footer.disclaimerTitle}
          </h2>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-marine/40 transition-colors hover:bg-marine/5 hover:text-marine/70"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
        <p className="text-sm leading-relaxed font-light text-marine/60 md:text-base">
          {t.contact.footer.disclaimerText}
        </p>
      </div>
    </dialog>
  );
}
