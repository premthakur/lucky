import { CONTACT, RFQ_NOTE } from "@/data/site";
import { useSectionLink } from "./Navbar";
import { Container, PrimaryButton, SecondaryLink, useQuote } from "./ui";

// What a buyer should include, laid out like the fields of a drawing title block.
const FIELDS = [
  ["Drawing", "Component drawing and revision"],
  ["Material", "Material grade"],
  ["Quantity", "Batch or repeat quantity"],
  ["Processes", "Required processes, such as heat treatment or grinding"],
  ["Inspection", "Inspection requirements and report format"],
  ["Delivery location", "Plant or site address"],
  ["Target date", "Required delivery date"],
  ["Our reply", "Technical clarifications first, then a quotation"],
];

const Cell = ({ label, children, className = "" }) => (
  <div className={`flex flex-col justify-between gap-4 bg-paper p-4 sm:p-5 ${className}`}>
    <span className="text-[13px] text-graphite">{label}</span>
    <span className="text-[15px] leading-snug text-ink">{children}</span>
  </div>
);

export const RfqSection = () => {
  const onQuote = useQuote();
  return (
    <section id="rfq" className="py-16 lg:py-24" data-testid="rfq-section">
      <Container>
        <div className="overflow-hidden rounded-xl border-[1.5px] border-ink bg-ink">
          <div className="grid gap-[1.5px] lg:grid-cols-12">
            <div className="flex flex-col gap-[1.5px] lg:col-span-8">
              <div className="bg-paper p-6 sm:p-8 lg:p-10">
                <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-ink">
                  How to send an RFQ
                </h2>
                <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-graphite">
                  Share the details below with your drawing. We review the
                  requirement and come back with any technical clarifications
                  before we quote.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-[1.5px] sm:grid-cols-4">
                {FIELDS.map(([label, text], i) => (
                  <Cell key={label} label={label} className={i === FIELDS.length - 1 ? "!bg-surface" : ""}>
                    {text}
                  </Cell>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8 bg-paper p-6 sm:p-8 lg:col-span-4 lg:p-10">
              <div>
                <p className="text-[20px] font-semibold leading-snug text-ink">
                  Have a drawing or component requirement?
                </p>
                <PrimaryButton onClick={onQuote} className="mt-6 w-full sm:w-auto" data-testid="rfq-quote-button">
                  Send an RFQ
                </PrimaryButton>
              </div>
              <ul className="space-y-2 text-[15px]">
                {CONTACT.phones.map((p) => (
                  <li key={p.href}>
                    <a href={p.href} className="text-ink hover:text-copper">{p.label}</a>
                  </li>
                ))}
                <li>
                  <a href={`mailto:${CONTACT.email}`} className="break-all text-ink hover:text-copper">
                    {CONTACT.email}
                  </a>
                </li>
              </ul>
            </div>

            <p className="bg-paper px-6 py-4 text-[14px] leading-relaxed text-graphite sm:px-8 lg:col-span-12 lg:px-10">
              {RFQ_NOTE}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export const ClosingCTA = () => {
  const onQuote = useQuote();
  const toSection = useSectionLink();
  return (
    <section className="border-t border-hairline py-20 lg:py-28" data-testid="closing-cta">
      <Container>
        <h2 className="max-w-3xl text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
          Have a drawing or component requirement? Let's discuss your RFQ.
        </h2>
        <div className="mt-9 flex flex-wrap gap-3">
          <PrimaryButton onClick={onQuote} data-testid="closing-quote-button">
            Send an RFQ
          </PrimaryButton>
          <SecondaryLink href="#/" onClick={toSection("rfq")}>
            What to include in an RFQ
          </SecondaryLink>
        </div>
      </Container>
    </section>
  );
};
