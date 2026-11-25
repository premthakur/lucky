import { useEffect } from "react";
import { IMAGES } from "@/data/images";
import { RFQ_NOTE } from "@/data/site";
import { ClosingCTA } from "@/components/site/FinalCTA";
import { Team } from "@/components/site/Team";
import { Container, RuledList, Section, SectionHeading } from "@/components/site/ui";

const SUPPORT = [
  "Manufacturing to customer-approved drawings, samples and specifications.",
  "CNC-turned and conventionally machined components.",
  "Shafts, pins, bushes, sleeves, spacers and other components, subject to machine capacity and drawing review.",
  "Prototype, small-batch and repeat production enquiries.",
  "Coordination of specialist outsourced processes where required and approved by the customer.",
];

const APPROACH = [
  ["Technical review", "We review drawings, material grades, tolerances and quantity before we quote."],
  ["Flexible production", "We combine our in-house operations with approved specialist subcontractors where appropriate."],
  ["Customer coordination", "We clarify specifications, inspection expectations and delivery requirements before we accept an order."],
];

export const AboutPage = () => {
  useEffect(() => {
    document.title = "About | Lucky Engineering Works";
  }, []);

  return (
    <>
      <section className="pb-12 pt-14 lg:pb-16 lg:pt-24" data-testid="about-intro">
        <Container>
          <h1 className="max-w-4xl text-[clamp(2.4rem,5.4vw,4.2rem)] font-semibold leading-[1.03] tracking-[-0.035em] text-ink">
            A machining partner for drawing-based parts, replacement spares and repeat production.
          </h1>
          <p className="mt-7 max-w-2xl text-[19px] leading-relaxed text-graphite">
            Lucky Engineering Works has made CNC and conventionally machined
            components in Vasai, Maharashtra since 2010.
          </p>
          <img
            src={IMAGES.lathe}
            alt="Machinist working at a conventional lathe"
            className="mt-12 aspect-[16/10] w-full rounded-xl object-cover sm:aspect-[21/9]"
          />
        </Container>
      </section>

      <Section id="overview" data-testid="about-overview">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-ink lg:col-span-5">
            Company overview
          </h2>
          <div className="space-y-5 text-[18px] leading-relaxed text-ink lg:col-span-7">
            <p>
              Lucky Engineering Works is a precision engineering and machining
              business established in 2010. We manufacture and supply CNC
              precision components, and support industrial customers with CNC
              turning, conventional lathe work and related machining operations.
            </p>
            <p>
              We work as a third-party manufacturing partner to L&amp;T, JCB and
              Dynabac, and are now building supplier relationships with steel
              plants, rolling-mill manufacturers and industrial OEMs for
              drawing-based components, replacement parts and repeat production.
            </p>
          </div>
        </div>
      </Section>

      <Section className="border-t border-hairline" data-testid="about-support">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <SectionHeading className="lg:col-span-5" title="What we can support" />
          <RuledList items={SUPPORT} className="lg:col-span-7" />
        </div>
      </Section>

      <Section className="bg-surface" data-testid="about-approach">
        <SectionHeading title="Our working approach" />
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {APPROACH.map(([title, text]) => (
            <div key={title} className="border-t border-ink/80 pt-5">
              <h3 className="text-[20px] font-semibold tracking-[-0.01em] text-ink">{title}</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-graphite">{text}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-2xl text-[15px] leading-relaxed text-graphite">{RFQ_NOTE}</p>
      </Section>

      <Team />
      <ClosingCTA />
    </>
  );
};
