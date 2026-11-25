import { IMAGES } from "@/data/images";
import { Container, SectionHeading } from "./ui";

const ITEMS = [
  { img: IMAGES.cnc, caption: "Milling a steel block" },
  { img: IMAGES.galOperator, caption: "Machining operations" },
  { img: IMAGES.galFactory, caption: "Steel plant and rolling-mill applications" },
];

// Full-bleed photo row: the images run edge to edge across the screen.
export const Gallery = () => (
  <section id="gallery" className="border-t border-hairline pt-16 lg:pt-24" data-testid="gallery-section">
    <Container>
      <SectionHeading
        title="From the shop floor"
        intro="Turning, milling and conventional machining for the plants and OEMs we supply."
      />
    </Container>
    <ul className="mt-12 grid gap-1 md:grid-cols-3">
      {ITEMS.map((item, i) => (
        <li key={item.caption} className="relative" data-testid={`gallery-item-${i}`}>
          <img
            src={item.img}
            alt={item.caption}
            loading="lazy"
            className="h-[280px] w-full object-cover md:h-[420px] xl:h-[480px]"
          />
          <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-4 pt-12 text-[15px] font-medium text-white">
            {item.caption}
          </p>
        </li>
      ))}
    </ul>
  </section>
);
