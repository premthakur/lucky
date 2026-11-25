import { IMAGES, STOCK, productImg } from "@/data/images";
import { Section, SectionHeading } from "./ui";

const SERVICES = [
  {
    name: "CNC turning",
    img: IMAGES.galComponent,
    text: "Shafts, pins, bushes and stepped parts turned to drawing tolerances.",
    machines: "4 CNC lathes, 250 × 500",
  },
  {
    name: "Traub automat turning",
    img: productImg("connectors"),
    text: "Small precision turned parts in repeat batches.",
    machines: "5 Traub machines",
  },
  {
    name: "VMC machining and CNC milling",
    img: STOCK.faceMill,
    text: "Slots, flats, pockets and hole patterns on turned or prismatic parts.",
    machines: "1 VMC machine",
  },
  {
    name: "Conventional turning",
    img: STOCK.greenLathe,
    text: "Larger parts, one-offs, maintenance spares and job work.",
    machines: "7 conventional lathes",
  },
  {
    name: "Drilling, tapping and cutting",
    img: STOCK.drillTap,
    text: "Secondary operations, and bar cutting to length before machining.",
    machines: "4 drilling, 2 tapping and 2 bandsaw machines",
  },
];

const MACHINES = [
  ["CNC lathe, 250 × 500", 4],
  ["Traub machine", 5],
  ["VMC machine", 1],
  ["CNC bandsaw machine", 1],
  ["Conventional lathe machine", 7],
  ["Conventional drilling machine", 4],
  ["Conventional tapping machine", 2],
  ["Conventional bandsaw machine", 1],
];
const TOTAL = MACHINES.reduce((n, [, q]) => n + q, 0);

export const Services = () => (
  <Section id="services" className="bg-surface" data-testid="services-section">
    <SectionHeading
      title="Our machining services"
      intro="Turning, milling and conventional machining on one shop floor in Vasai East. Each service shows the machines that do the work."
    />

    <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((s) => (
        <li key={s.name} className="flex flex-col overflow-hidden rounded-xl bg-white" data-testid="service-card">
          <img src={s.img} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover" />
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-[21px] font-semibold leading-snug tracking-[-0.015em] text-ink">{s.name}</h3>
            <p className="mt-2 flex-1 text-[16px] leading-relaxed text-graphite">{s.text}</p>
            <p className="mt-5 border-t border-hairline pt-4 text-[15px] font-medium text-copper">{s.machines}</p>
          </div>
        </li>
      ))}

      <li id="infrastructure" className="flex flex-col rounded-xl bg-ink p-6 text-white sm:col-span-2 lg:col-span-1" data-testid="machine-list">
        <p className="text-[clamp(3rem,5vw,4rem)] font-semibold leading-none tracking-[-0.03em]">{TOTAL}</p>
        <h3 className="mt-2 text-[18px] font-semibold">Machines on our shop floor</h3>
        <table className="mt-4 w-full text-left text-[13.5px]">
          <caption className="sr-only">Machines and their quantity</caption>
          <tbody>
            {MACHINES.map(([name, qty]) => (
              <tr key={name} className="border-t border-white/15">
                <th scope="row" className="py-1.5 font-normal text-white/80">{name}</th>
                <td className="py-1.5 text-right tabular-nums">{qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-auto pt-5 text-[14px] leading-relaxed text-white/60">
          Heat treatment, grinding and other specialist processes are arranged
          through approved partners when you agree.
        </p>
      </li>
    </ul>
  </Section>
);
