import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X, ZoomIn } from "lucide-react";
import { Chapter, EASE, Reveal } from "./Reveal";
import { PUB } from "@/data/images";

const CATEGORIES = [
  {
    n: "01",
    name: "CNC Turned Components",
    items: [
      ["Precision Shafts", "shafts"],
      ["Threaded Components", "threaded"],
      ["Bushings & Couplings", "bushings"],
      ["Spacers & Sleeves", "spacers"],
      ["Pins & Studs", "pins"],
    ],
  },
  {
    n: "02",
    name: "Automotive Machined Parts",
    items: [
      ["Engine Components", "engine"],
      ["Transmission Shafts", "transmission"],
      ["Gearbox Components", "gearbox"],
      ["Steering Components", "steering"],
      ["Suspension Parts", "suspension"],
    ],
  },
  {
    n: "03",
    name: "Hydraulic & Pneumatic Components",
    items: [
      ["Hydraulic Fittings", "hydraulic-fittings"],
      ["Valve Components", "valve"],
      ["Cylinder Parts", "cylinder"],
      ["Adapter Fittings", "adapters"],
      ["Connector Components", "connectors"],
    ],
  },
  {
    n: "04",
    name: "Industrial Machine Components",
    items: [
      ["Machine Shafts", "machine-shafts"],
      ["Rollers", "rollers"],
      ["Bearing Housings", "bearing-housings"],
      ["Coupling Hubs", "coupling-hubs"],
      ["Mounting Flanges", "flanges"],
    ],
  },
];

const FLAT = CATEGORIES.flatMap((c) =>
  c.items.map(([name, key]) => ({ name, key, category: c.name, img: `${PUB}/images/products/${key}.jpg` }))
);

const ProductCard = ({ name, img, testId, onOpen }) => (
  <div className="group cursor-pointer" data-testid={testId} onClick={onOpen}>
    <div className="relative overflow-hidden aspect-square border border-line group-hover:border-copper/60 transition-colors duration-500 bg-coal-deep">
      <img
        src={img}
        alt={name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-[900ms] ease-out"
      />
      <span className="absolute top-3 right-3 w-8 h-8 bg-coal/70 backdrop-blur border border-line flex items-center justify-center text-bone/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ZoomIn size={14} />
      </span>
    </div>
    <p className="mt-3 text-[12px] tracking-[0.14em] uppercase text-steel group-hover:text-bone transition-colors duration-300 font-medium">
      {name}
    </p>
  </div>
);

export const Manufacture = ({ onQuote }) => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    document.body.style.overflow = active !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((a) => (a + 1) % FLAT.length);
      if (e.key === "ArrowLeft") setActive((a) => (a - 1 + FLAT.length) % FLAT.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const current = active !== null ? FLAT[active] : null;

  return (
    <section id="manufacture" className="py-24 lg:py-36" data-testid="manufacture-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <Reveal>
            <Chapter index="03" label="What We Manufacture" />
            <h2 className="font-display font-semibold uppercase leading-[1.02] text-4xl sm:text-5xl lg:text-6xl text-bone">
              Components Made <span className="text-steel">to Drawing,</span>{" "}
              Made to Last
            </h2>
            <p className="mt-6 text-[11px] tracking-[0.3em] uppercase text-ash">
              Representative examples of our manufacturing scope · Click any photo to enlarge
            </p>
          </Reveal>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {CATEGORIES.map((cat, ci) => (
            <Reveal key={cat.n}>
              <div data-testid={`manufacture-category-${cat.n}`}>
                <div className="flex items-baseline gap-5 mb-8">
                  <span className="font-display text-copper text-sm tracking-[0.3em]">{cat.n}</span>
                  <h3 className="font-display font-semibold uppercase text-2xl lg:text-3xl text-bone">
                    {cat.name}
                  </h3>
                  <span className="hidden sm:block flex-1 h-px bg-line" />
                  <span className="hidden sm:block text-[11px] tracking-[0.25em] uppercase text-ash">
                    {cat.items.length} Product Lines
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
                  {cat.items.map(([name, key]) => (
                    <ProductCard
                      key={key}
                      name={name}
                      img={`${PUB}/images/products/${key}.jpg`}
                      testId={`product-card-${key}`}
                      onOpen={() =>
                        setActive(FLAT.findIndex((f) => f.key === key))
                      }
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div
            className="mt-20 lg:mt-24 border border-line px-8 py-10 lg:px-12 flex flex-col lg:flex-row lg:items-center gap-8 justify-between"
            data-testid="custom-cnc-strip"
          >
            <div>
              <span className="text-[10px] tracking-[0.35em] uppercase text-copper font-semibold">
                Custom CNC Machined Parts
              </span>
              <p className="mt-3 font-display uppercase text-xl lg:text-2xl text-bone leading-snug max-w-2xl">
                Prototype Development · Tight-Tolerance Machining · Batch
                Production · OEM Custom Parts
              </p>
            </div>
            <button
              onClick={onQuote}
              data-testid="manufacture-quote-button"
              className="group inline-flex items-center gap-3 bg-copper hover:bg-copper-hover text-white text-sm font-semibold tracking-[0.12em] uppercase px-8 py-4 transition-colors duration-300 shrink-0"
            >
              Request a Quote
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {current && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActive(null)}
              className="absolute inset-0 bg-coal/92 backdrop-blur-md"
              data-testid="product-lightbox-backdrop"
            />
            <motion.div
              key={current.key}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="relative z-10 w-full max-w-4xl"
              data-testid="product-lightbox"
            >
              <div className="img-frame">
                <img
                  src={current.img}
                  alt={current.name}
                  className="w-full max-h-[70vh] object-contain bg-coal-deep"
                  data-testid="product-lightbox-image"
                />
              </div>
              <div className="mt-5 flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-copper font-semibold">
                    {current.category}
                  </p>
                  <h3
                    className="mt-1 font-display font-semibold uppercase text-2xl text-bone"
                    data-testid="product-lightbox-title"
                  >
                    {current.name}
                  </h3>
                </div>
                <span className="text-[11px] tracking-[0.25em] uppercase text-ash">
                  {String(active + 1).padStart(2, "0")} / {String(FLAT.length).padStart(2, "0")}
                </span>
              </div>
            </motion.div>

            <button
              onClick={() => setActive(null)}
              data-testid="product-lightbox-close"
              aria-label="Close"
              className="absolute top-5 right-5 z-20 w-11 h-11 border border-line-strong flex items-center justify-center text-bone/70 hover:text-copper hover:border-copper transition-colors duration-300"
            >
              <X size={18} />
            </button>
            <button
              onClick={() => setActive((a) => (a - 1 + FLAT.length) % FLAT.length)}
              data-testid="product-lightbox-prev"
              aria-label="Previous product"
              className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-bone/25 flex items-center justify-center text-bone/60 hover:border-copper hover:text-copper transition-colors duration-300"
            >
              <ArrowLeft size={17} />
            </button>
            <button
              onClick={() => setActive((a) => (a + 1) % FLAT.length)}
              data-testid="product-lightbox-next"
              aria-label="Next product"
              className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-bone/25 flex items-center justify-center text-bone/60 hover:border-copper hover:text-copper transition-colors duration-300"
            >
              <ArrowRight size={17} />
            </button>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
