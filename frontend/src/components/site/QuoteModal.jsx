import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { EASE } from "./ui";
import { CONTACT } from "@/data/site";

const inputCls =
  "w-full rounded-lg bg-white border border-hairline focus:border-copper focus:outline-none px-4 py-3 text-[15px] text-ink placeholder:text-graphite/70 transition-colors duration-200";
const labelCls = "block text-[14px] font-medium text-ink mb-2";

const SCRIPT_URL = process.env.REACT_APP_APPS_SCRIPT_URL;

const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

export const QuoteModal = ({ open, onClose }) => {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (open) {
      setSent(false);
      setError("");
      setFile(null);
    }
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const payload = {
      name: fd.get("name"),
      company: fd.get("company"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      requirement: fd.get("requirement"),
    };
    if (!SCRIPT_URL) {
      setSent(true);
      return;
    }
    setSending(true);
    setError("");
    try {
      if (file) {
        payload.fileName = file.name;
        payload.fileData = await fileToBase64(file);
      }
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      setSent(true);
    } catch (err) {
      setError(`Your RFQ was not sent. Check your connection and try again, or email it to ${CONTACT.email}.`);
    } finally {
      setSending(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
            data-testid="quote-modal-backdrop"
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.4, ease: EASE }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-title"
            className="relative w-full max-w-xl rounded-2xl bg-paper p-7 md:p-10 max-h-[90vh] overflow-y-auto"
            data-testid="quote-modal"
          >
            <button
              onClick={onClose}
              data-testid="quote-close-button"
              aria-label="Close"
              className="absolute top-5 right-5 rounded-full p-1.5 text-graphite hover:text-ink transition-colors duration-200"
            >
              <X size={20} />
            </button>

            {sent ? (
              <div className="py-10 text-center" data-testid="quote-success-message">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-copper/10">
                  <Check size={26} className="text-copper" />
                </span>
                <h3 className="mt-6 text-[26px] font-semibold tracking-[-0.02em] text-ink">
                  RFQ sent
                </h3>
                <p className="mt-3 text-[16px] text-graphite max-w-xs mx-auto leading-relaxed">
                  We will review your requirement and reply with any technical
                  clarifications before we quote.
                </p>
                {!SCRIPT_URL && (
                  <p className="mt-6 text-[13px] text-graphite">
                    Demo mode: the form goes live once it is connected to Google Sheets.
                  </p>
                )}
                <button
                  onClick={onClose}
                  data-testid="quote-success-close-button"
                  className="mt-8 inline-flex items-center rounded-full bg-copper hover:bg-copper-hover text-white text-[15px] font-semibold px-7 py-3 transition-colors duration-200"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <h3 id="quote-title" className="pr-8 text-[28px] font-semibold leading-tight tracking-[-0.02em] text-ink">
                  Send an RFQ
                </h3>
                <p className="mt-2 text-[16px] text-graphite leading-relaxed">
                  Attach your drawing and tell us the material, quantity and
                  delivery date.
                </p>

                <form
                  className="mt-8 grid sm:grid-cols-2 gap-5"
                  onSubmit={handleSubmit}
                  data-testid="quote-form"
                >
                  <div>
                    <label className={labelCls} htmlFor="q-name">Name *</label>
                    <input id="q-name" name="name" required placeholder="Your name" className={inputCls} data-testid="quote-name-input" />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="q-company">Company *</label>
                    <input id="q-company" name="company" required placeholder="Company name" className={inputCls} data-testid="quote-company-input" />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="q-email">Email *</label>
                    <input id="q-email" name="email" type="email" required placeholder="you@company.com" className={inputCls} data-testid="quote-email-input" />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="q-phone">Phone *</label>
                    <input
                      id="q-phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      required
                      placeholder="+91 98765 43210"
                      pattern="[0-9+\-\s]{10,16}"
                      title="Please enter a valid phone number (10–15 digits)"
                      onChange={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9+\-\s]/g, "");
                      }}
                      className={inputCls}
                      data-testid="quote-phone-input"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelCls} htmlFor="q-message">Requirement</label>
                    <textarea
                      id="q-message"
                      name="requirement"
                      rows={4}
                      placeholder="Component, material grade, quantity, required processes, inspection needs and target date"
                      className={`${inputCls} resize-none`}
                      data-testid="quote-message-input"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelCls} htmlFor="q-file">Drawing (PDF, optional)</label>
                    <label
                      htmlFor="q-file"
                      className="flex items-center justify-between gap-4 rounded-lg border border-dashed border-ink/25 bg-white hover:border-copper [&:has(+input:focus-visible)]:border-copper [&:has(+input:focus-visible)]:ring-2 [&:has(+input:focus-visible)]:ring-copper/30 px-4 py-3.5 cursor-pointer transition-colors duration-200"
                    >
                      <span className="text-[15px] text-graphite truncate">
                        {file ? file.name : "Choose a PDF drawing to attach"}
                      </span>
                      <span className="text-[14px] text-copper font-semibold shrink-0">
                        Choose file
                      </span>
                    </label>
                    <input
                      id="q-file"
                      type="file"
                      accept="application/pdf,.pdf"
                      className="peer sr-only"
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                      data-testid="quote-file-input"
                    />
                  </div>
                  {error && (
                    <p className="sm:col-span-2 text-[15px] text-red-700" data-testid="quote-error-message">
                      {error}
                    </p>
                  )}
                  <div className="sm:col-span-2 flex items-center justify-between gap-4 flex-wrap">
                    <p className="text-[13px] text-graphite">
                      {SCRIPT_URL ? "Goes straight to our team." : "Demo mode: not connected yet."}
                    </p>
                    <button
                      type="submit"
                      disabled={sending}
                      data-testid="quote-submit-button"
                      className="inline-flex items-center rounded-full bg-copper hover:bg-copper-hover disabled:opacity-60 text-white text-[15px] font-semibold px-7 py-3 transition-colors duration-200"
                    >
                      {sending ? "Sending…" : "Send RFQ"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
