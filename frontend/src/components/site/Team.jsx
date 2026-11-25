import { Section, SectionHeading } from "./ui";

const PEOPLE = [
  { name: "Dilip Singh", role: "Managing Director", cred: "Founder, has led the works since 2010", tone: "bg-copper text-white", id: "dilip" },
  { name: "Aman Singh", role: "Quality and production", cred: "BE Mechanical", tone: "bg-ink text-white", id: "aman" },
  { name: "Gaurav Singh", role: "Accounts", cred: "BSc IT", tone: "bg-graphite text-white", id: "gaurav" },
];

export const Team = () => (
  <Section id="team" className="border-t border-hairline" data-testid="team-section">
    <SectionHeading
      title="The team"
      intro="A small, hands-on team. Leadership, quality and production work together under one roof in Vasai."
    />
    <ul className="mt-12 grid gap-4 sm:grid-cols-3">
      {PEOPLE.map((p) => (
        <li
          key={p.id}
          className="flex flex-col rounded-xl border border-hairline bg-white p-7"
          data-testid={`team-member-${p.id}`}
        >
          <span
            aria-hidden
            className={`grid h-14 w-14 place-items-center rounded-full text-[22px] font-semibold ${p.tone}`}
          >
            {p.name[0]}
          </span>
          <h3 className="mt-6 text-[20px] font-semibold tracking-[-0.01em] text-ink">{p.name}</h3>
          <p className="mt-1 text-[15px] font-medium text-copper">{p.role}</p>
          <p className="mt-3 text-[15px] leading-relaxed text-graphite">{p.cred}</p>
        </li>
      ))}
    </ul>
    <p className="mt-8 text-[16px] text-graphite" data-testid="team-operators">
      Supported on the shop floor by 10 CNC operators and 6 conventional machine operators.
    </p>
  </Section>
);
