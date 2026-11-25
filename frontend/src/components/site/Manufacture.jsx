import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { EASE, Section, SectionHeading } from "./ui";
import { PUB } from "@/data/images";

const CATEGORIES = [
  {
    name: "CNC turned components",
    items: [
      ["Precision shafts", "shafts"],
      ["Threaded components", "threaded"],
      ["Bushings & couplings", "bushings"],
      ["Spacers & sleeves", "spacers"],
      ["Pins & studs", "pins"],
    ],
  },
  {
    name: "Automotive machined parts",
    items: [
      ["Engine components", "engine"],
      ["Transmission shafts", "transmission"],
      ["Gearbox components", "gearbox"],
      ["Steering components", "steering"],
      ["Suspension parts", "suspension"],
    ],
  },
  {
    name: "Hydraulic & pneumatic components",
    items: [
      ["Hydraulic fittings", "hydraulic-fittings"],
      ["Valve components", "valve"],
      ["Cylinder parts", "cylinder"],
      ["Adapter fittings", "adapters"],
      ["Connector components", "connectors"],
    ],
  },
  {
    name: "Industrial machine components",
    items: [
      ["Machine shafts", "machine-shafts"],
      ["Rollers", "rollers"],
      ["Bearing housings", "bearing-housings"],
      ["Coupling hubs", "coupling-hubs"],
      ["Mounting flanges", "flanges"],
    ],
  },
];

const FLAT = CATEGORIES.flatMap((c) =>
  c.items.map(([name, key]) => ({ name, key, category: c.name, img: `${PUB}/images/products/${key}.jpg` }))
);

const ProductCard = ({ name, img, testId, onOpen }) => (
  <li>
    <button
      type="button"
      onClick={onOpen}
      data-testid={testId}
      className="group block w-full text-left"
      aria-label={`Enlarge photo: ${name}`}
    >
      <span className="block overflow-hidden rounded-lg bg-surface">
        <img
          src={img}
          alt=""
          loading="lazy"
          className="aspect-square w-full object-cover transition-opacity duration-200 group-hover:opacity-90"
        />
      </span>
      <span className="mt-3 block text-[15px] leading-snug text-ink">{name}</span>
    </button>
  </li>
);

const NavButton = ({ className = "", ...rest }) => (
  <button
    type="button"
    className={`absolute z-20 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white/20 ${className}`}
    {...rest}
  />
);

export const Manufacture = () => {
  const [active, setActive] = useState(null);
  const [tab, setTab] = useState(0);

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
    <Section id="products" className="border-t border-hairline" data-testid="manufacture-section">
      <SectionHeading
        title="Product range"
        intro="Example parts from our machining scope, grouped by type. Select a photo to see it larger."
      />

      <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Product categories">
        {CATEGORIES.map((cat, i) => (
          <button
            key={cat.name}
            type="button"
            role="tab"
            aria-selected={tab === i}
            onClick={() => setTab(i)}
            data-testid={`product-tab-${i}`}
            className={`rounded-full px-4 py-2 text-[15px] font-medium transition-colors duration-200 ${
              tab === i ? "bg-ink text-white" : "bg-surface text-ink hover:bg-hairline"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <ul
        role="tabpanel"
        aria-label={CATEGORIES[tab].name}
        className="mt-8 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-5"
      >
        {CATEGORIES[tab].items.map(([name, key]) => (
          <ProductCard
            key={key}
            name={name}
            img={`${PUB}/images/products/${key}.jpg`}
            testId={`product-card-${key}`}
            onOpen={() => setActive(FLAT.findIndex((f) => f.key === key))}
          />
        ))}
      </ul>

      <AnimatePresence>
        {current && (
          <div
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-10"
            role="dialog"
            aria-modal="true"
            aria-label={current.name}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setActive(null)}
              className="absolute inset-0 bg-ink/90 backdrop-blur-sm"
              data-testid="product-lightbox-backdrop"
            />
            <motion.figure
              key={current.key}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="relative z-10 w-full max-w-3xl"
              data-testid="product-lightbox"
            >
              <img
                src={current.img}
                alt={current.name}
                className="max-h-[70vh] w-full rounded-xl object-contain"
                data-testid="product-lightbox-image"
              />
              <figcaption className="mt-4 flex items-baseline justify-between gap-4 text-white">
                <span>
                  <span className="block text-[14px] text-white/60">{current.category}</span>
                  <span className="text-[20px] font-semibold" data-testid="product-lightbox-title">
                    {current.name}
                  </span>
                </span>
                <span className="text-[14px] text-white/60">
                  {active + 1} of {FLAT.length}
                </span>
              </figcaption>
            </motion.figure>

            <NavButton
              onClick={() => setActive(null)}
              aria-label="Close"
              data-testid="product-lightbox-close"
              className="right-4 top-4"
            >
              <X size={18} />
            </NavButton>
            <NavButton
              onClick={() => setActive((a) => (a - 1 + FLAT.length) % FLAT.length)}
              aria-label="Previous product"
              data-testid="product-lightbox-prev"
              className="left-3 top-1/2 -translate-y-1/2 lg:left-8"
            >
              <ArrowLeft size={17} />
            </NavButton>
            <NavButton
              onClick={() => setActive((a) => (a + 1) % FLAT.length)}
              aria-label="Next product"
              data-testid="product-lightbox-next"
              className="right-3 top-1/2 -translate-y-1/2 lg:right-8"
            >
              <ArrowRight size={17} />
            </NavButton>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
};
