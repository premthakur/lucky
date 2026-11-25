import { createContext, useContext } from "react";

export const EASE = [0.22, 1, 0.36, 1];

// Opens the RFQ modal from anywhere in the page tree.
export const QuoteContext = createContext(() => {});
export const useQuote = () => useContext(QuoteContext);

export const Container = ({ className = "", children }) => (
  <div className={`mx-auto max-w-shell px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

export const Section = ({ id, className = "", children, ...rest }) => (
  <section id={id} className={`py-16 lg:py-24 ${className}`} {...rest}>
    <Container>{children}</Container>
  </section>
);

export const SectionHeading = ({ title, intro, className = "" }) => (
  <div className={`max-w-2xl ${className}`}>
    <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-ink">
      {title}
    </h2>
    {intro && <p className="mt-5 text-[18px] leading-relaxed text-graphite">{intro}</p>}
  </div>
);

const BTN =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold transition-colors duration-200";

export const PrimaryButton = ({ className = "", children, ...rest }) => (
  <button type="button" className={`${BTN} bg-copper text-white hover:bg-copper-hover ${className}`} {...rest}>
    {children}
  </button>
);

export const SecondaryLink = ({ className = "", children, ...rest }) => (
  <a className={`${BTN} border border-ink/15 text-ink hover:border-ink/40 ${className}`} {...rest}>
    {children}
  </a>
);

// A plain list with hairline separators; used for the profile's bullet lists.
export const RuledList = ({ items, columns = 1, className = "" }) => (
  <ul className={`grid gap-x-10 ${columns === 2 ? "sm:grid-cols-2" : ""} ${className}`}>
    {items.map((item) => (
      <li key={item} className="border-t border-hairline py-4 text-[16px] leading-relaxed text-ink">
        {item}
      </li>
    ))}
  </ul>
);
