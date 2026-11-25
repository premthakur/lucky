import { Section, SectionHeading } from "./ui";

const STEPS = [
  ["Send your RFQ", "Share the drawing and revision, material, quantity, processes, inspection needs and target date."],
  ["Technical review", "We check geometry, material, tolerances and machine capacity, and raise any clarifications."],
  ["Quotation", "You receive a quotation once the technical points are agreed."],
  ["Trial part", "Where required, we make trial parts for your approval before the batch."],
  ["Production and inspection", "Parts are machined and checked dimensionally against the agreed drawing."],
  ["Dispatch", "Parts are dispatched with the inspection report and documents agreed with you."],
];

export const Process = () => (
  <Section id="process" data-testid="process-section">
    <SectionHeading
      title="How an order works"
      intro="From your drawing to dispatched parts, every requirement goes through the same six steps."
    />
    <ol className="relative mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6">
      <span aria-hidden className="absolute left-5 right-5 top-5 hidden h-px bg-copper/30 lg:block" />
      {STEPS.map(([title, text], i) => (
        <li key={title} className="relative">
          <span className="relative grid h-10 w-10 place-items-center rounded-full bg-copper text-[16px] font-semibold text-white">
            {i + 1}
          </span>
          <h3 className="mt-5 text-[19px] font-semibold leading-snug tracking-[-0.01em] text-ink">{title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-graphite">{text}</p>
        </li>
      ))}
    </ol>
  </Section>
);
