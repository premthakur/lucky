import { DOWNLOADS } from "@/data/site";
import { RuledList, Section, SectionHeading } from "./ui";

const SUPPORT = [
  "Company profile and machine capability information.",
  "Business registration, PAN, GST and Udyam documents, as applicable.",
  "Bank details and commercial references, as requested by the buyer.",
  "Sample inspection report and material or process documentation, where available.",
  "Technical review of drawings, quantities, tolerances and delivery schedules.",
  "Trial-part manufacturing and approval, subject to agreed commercial and technical terms.",
];

export const VendorRegistration = () => (
  <Section id="vendor-registration" className="border-t border-hairline" data-testid="vendor-section">
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <SectionHeading
          title="OEM and vendor registration"
          intro="We welcome evaluation as a manufacturing supplier by steel plants, rolling-mill manufacturers, industrial equipment OEMs and engineering companies."
        />
        <ul className="mt-8 space-y-3 text-[16px]">
          <li>
            <a href={DOWNLOADS.profile} download className="font-medium text-copper underline-offset-4 hover:underline">
              Download company profile (PDF)
            </a>
          </li>
          <li>
            <a href={DOWNLOADS.productRange} download className="font-medium text-copper underline-offset-4 hover:underline">
              Download product range (PDF)
            </a>
          </li>
        </ul>
      </div>
      <div className="lg:col-span-7">
        <h3 className="text-[18px] font-semibold text-ink">Supplier onboarding support</h3>
        <RuledList items={SUPPORT} className="mt-4" />
      </div>
    </div>
  </Section>
);
