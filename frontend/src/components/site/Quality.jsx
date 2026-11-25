import { RuledList, Section, SectionHeading } from "./ui";

const CHECKS = [
  "Drawing and revision review before production.",
  "Dimensional checks against the agreed drawing requirements.",
  "Material certificates and traceability, where specified and available from the material source.",
  "Heat-treatment, grinding or other specialist process records, where applicable, from the service provider.",
  "Inspection report format and acceptance criteria agreed with the customer.",
];

export const Quality = () => (
  <Section id="quality" className="bg-surface" data-testid="quality-section">
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <SectionHeading
        className="lg:col-span-5"
        title="Quality and inspection"
        intro="Dimensional inspection is done in-house. Inspection resources and documented procedures are shared against the requirements of each RFQ or vendor assessment."
      />
      <RuledList items={CHECKS} className="lg:col-span-7" />
    </div>
  </Section>
);
