import { productImg } from "@/data/images";
import { useSectionLink } from "./Navbar";
import { Section, SectionHeading } from "./ui";

const CATEGORIES = [
  {
    name: "Shafts and pins",
    img: "shafts",
    use: "Industrial machinery, drive and linkage systems",
    send: "Drawing, material, heat treatment and tolerances",
  },
  {
    name: "Bushes, sleeves and spacers",
    img: "bushings",
    use: "Wear interfaces, alignment and mechanical assemblies",
    send: "Dimensions, material and surface finish",
  },
  {
    name: "Rollers and roller parts",
    img: "rollers",
    use: "Rolling-mill and material-handling equipment",
    send: "Drawing, hardness and finish requirements",
  },
  {
    name: "Custom CNC-turned components",
    img: "threaded",
    use: "OEM machinery and industrial equipment",
    send: "Approved drawing or sample and batch quantity",
  },
  {
    name: "Conventional machined parts",
    img: "flanges",
    use: "Maintenance spares and job-work requirements",
    send: "Operation details, dimensions and delivery",
  },
];

export const WhatWeMake = () => {
  const toSection = useSectionLink();
  return (
    <Section id="what-we-make" data-testid="what-we-make-section">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          title="What we make"
          intro="Machined components made to your drawing, sample or specification, from a single prototype to repeat batches."
        />
        <a
          href="#/"
          onClick={toSection("products")}
          className="shrink-0 text-[16px] font-medium text-copper underline-offset-4 hover:underline"
        >
          See 20 example parts
        </a>
      </div>

      <ul className="mt-12 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {CATEGORIES.map((c) => (
          <li key={c.name} data-testid={`make-${c.img}`}>
            <figure className="relative aspect-[4/3] overflow-hidden rounded-xl bg-ink sm:aspect-[4/5]">
              <img
                src={productImg(c.img)}
                alt={c.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-5 pb-5 pt-16 text-[21px] font-semibold leading-tight tracking-[-0.015em] text-white">
                {c.name}
              </figcaption>
            </figure>
            <dl className="mt-4 space-y-2 text-[15px] leading-relaxed">
              <div>
                <dt className="text-[13px] text-graphite">Used in</dt>
                <dd className="text-ink">{c.use}</dd>
              </div>
              <div>
                <dt className="text-[13px] text-graphite">Send with your RFQ</dt>
                <dd className="text-ink">{c.send}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>

      <p className="mt-12 max-w-2xl text-[15px] leading-relaxed text-graphite">
        Material grades, including alloy steels, are taken on after technical
        review of sourcing, machining, heat-treatment and inspection
        requirements.
      </p>
    </Section>
  );
};
