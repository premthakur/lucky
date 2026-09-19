import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import { Chapter, EASE, Reveal } from "./Reveal";
import { ChecklistDiagram, CostCurveDiagram, FitDiagram, ProcessFlowDiagram } from "./BlogDiagrams";
import { PUB } from "@/data/images";

const DIAGRAMS = {
  fit: FitDiagram,
  cost: CostCurveDiagram,
  checklist: ChecklistDiagram,
  flow: ProcessFlowDiagram,
};

const POSTS = [
  {
    slug: "precision-machining-heavy-equipment",
    tag: "Industry",
    date: "Feb 2026",
    read: "5 min read",
    title: "Why Precision Machining Matters in Heavy Equipment",
    cover: PUB + "/images/blog/blog-1.jpg",
    excerpt:
      "An excavator pin that is off by a fraction of a millimetre doesn't just wear out early — it takes the bushing, the joint and the whole work schedule down with it.",
    body: [
      { t: "p", text: "Heavy construction equipment lives a hard life. Every cycle of an excavator arm, every loaded bucket, every hour on a rocky site puts enormous force through pins, bushings, shafts and couplings. These parts look simple — a turned pin, a bored bush — but they carry the machine." },
      { t: "h", text: "A Fraction of a Millimetre Is Not a Small Thing", id: "tolerance" },
      { t: "p", text: "When a pin is machined even slightly out of tolerance, the fit inside the bushing changes. Clearance that should be measured in hundredths of a millimetre becomes play. Play becomes impact. Impact becomes oval bores, cracked bosses and a machine standing idle waiting for a repair that costs many times the price of the original component." },
      { t: "img", src: PUB + "/images/slide-excavator.jpg", cap: "Pins, bushes and shafts carry every load cycle of a working machine." },
      { t: "h", text: "What the Tolerance Actually Does", id: "fit" },
      { t: "p", text: "This is why OEMs and their supply chains are uncompromising about machining quality. A precision-turned pin with the correct diameter, surface finish and hardness doesn't just fit — it distributes load the way the design engineer intended. The grease film holds. Wear stays even. Service intervals stretch." },
      { t: "diagram", id: "fit" },
      { t: "p", text: "As a third-party manufacturer to brands like L&T, JCB and Dynabac, we see this from the shop-floor side. The drawing is never a suggestion. Tolerance, concentricity and finish are what separate a component that lasts a season from one that lasts the life of the machine." },
      { t: "p", text: "The lesson for buyers is simple: in heavy equipment, the cheapest component is the one you fit once. Precision is not a premium — it is the baseline that keeps machines earning." },
    ],
  },
  {
    slug: "cnc-turning-vs-conventional-lathe",
    tag: "Engineering",
    date: "Jan 2026",
    read: "6 min read",
    title: "CNC Turning vs. Conventional Lathe: Choosing the Right Process",
    cover: PUB + "/images/blog/blog-2.jpg",
    excerpt:
      "Both machines remove metal. The difference is in repeatability, volume and where each one saves you money — a practical view from a shop that runs both.",
    body: [
      { t: "p", text: "Walk into our Vasai works and you will see CNC lathes running next to conventional machines and Traub automats. That mix is deliberate. No single machine is the right answer for every job — choosing the process is part of engineering the component." },
      { t: "h", text: "Where CNC Wins", id: "cnc" },
      { t: "p", text: "CNC turning earns its place when tolerances are tight and quantities are real. Once the program is proven, part one and part ten-thousand are twins. Complex profiles, threads, tapers and grooves are produced in one setup, and the machine doesn't get tired at 6 pm. For production batches of shafts, pins, couplings and flanges, CNC is almost always the economical choice." },
      { t: "img", src: PUB + "/images/cnc.jpg", cap: "A CNC lathe holds tolerance across the whole batch — not just the first part." },
      { t: "h", text: "Where the Conventional Lathe Still Wins", id: "lathe" },
      { t: "p", text: "The conventional lathe still wins more often than people expect. A one-off repair shaft, an oversized diameter, a job that needs a machinist's judgement at every pass — these belong to an experienced hand. Setup is quick, there's no programming overhead, and for a single component the total cost is frequently lower." },
      { t: "p", text: "Traub automats occupy the middle ground: high-volume small parts, produced fast, with mechanical reliability that has made them workshop workhorses for decades." },
      { t: "diagram", id: "cost" },
      { t: "p", text: "Our advice to customers is to stay process-agnostic. Send the drawing and the quantity, and let the manufacturer match the machine to the job. The right process is the one that holds the tolerance at the lowest total cost — not the newest machine in the shop." },
    ],
  },
  {
    slug: "choosing-manufacturing-partner",
    tag: "Buying Guide",
    date: "Jan 2026",
    read: "5 min read",
    title: "5 Things to Check Before Choosing a Component Manufacturing Partner",
    cover: PUB + "/images/blog/blog-3.jpg",
    excerpt:
      "Price is the easiest thing to compare and the least reliable indicator of what a machined component will actually cost you. Here is what to look at instead.",
    body: [
      { t: "p", text: "Every buyer has a story about a cheap quote that became an expensive problem. After fifteen years of making components for construction, mining, automotive and industrial customers, these are the five checks we would run before trusting a machine shop with a drawing." },
      { t: "img", src: PUB + "/images/quality.jpg", cap: "Measurement, documented — the habit that separates a manufacturing partner from a vendor." },
      { t: "h", text: "The Five Checks", id: "checks" },
      { t: "diagram", id: "checklist" },
      { t: "p", text: "One — inspection before dispatch. Ask how parts are checked and whether measurement is documented. A shop that measures and records is a shop that holds tolerance. Verbal assurance is not a quality system." },
      { t: "p", text: "Two — process range. A partner with turning, milling, drilling and finishing under one roof controls the whole journey of your component. Every time a part leaves for an outside operation, you add handling risk, lead time and a new place for accountability to blur." },
      { t: "p", text: "Three — communication on the drawing. A good manufacturer asks questions before cutting metal: which dimensions are critical, what the part mates with, where it will be used. Silence after sending a drawing is rarely a good sign." },
      { t: "p", text: "Four — honest lead times. Dependable delivery beats optimistic delivery. A partner who says three weeks and delivers in three weeks lets you plan. One who promises one week and delivers in four quietly damages your own commitments." },
      { t: "p", text: "Five — continuity. Component manufacturing rewards relationships. A shop that knows your parts keeps setups, programs and knowledge ready — your repeat orders get faster, cheaper and more consistent every year you work together." },
    ],
  },
  {
    slug: "drawing-to-delivery",
    tag: "Process",
    date: "Dec 2025",
    read: "6 min read",
    title: "From Drawing to Delivery: The Journey of a Precision Component",
    cover: PUB + "/images/blog/blog-4.jpg",
    excerpt:
      "What actually happens between the moment you email a drawing and the day a finished component reaches your gate — a walk through our shop floor.",
    body: [
      { t: "p", text: "It starts with the drawing. Before any metal is cut, we study the geometry, tolerances, material and finish requirements. If something is ambiguous — a missing chamfer note, an unclear thread callout — we ask. Ten minutes of clarification saves days of rework." },
      { t: "diagram", id: "flow" },
      { t: "h", text: "Planning Before Metal", id: "planning" },
      { t: "p", text: "Next comes process planning: which machine, which sequence, which tooling. A stepped shaft might run on a CNC lathe with a finishing pass to hold its tolerance band; a small high-volume pin might go to a Traub automat. Material is cut to size on the bandsaw, and the job card follows the metal." },
      { t: "img", src: PUB + "/images/components.jpg", cap: "Raw stock becomes finished components — every step of the journey is documented." },
      { t: "h", text: "Machining With Discipline", id: "machining" },
      { t: "p", text: "Machining is where discipline shows. First-article inspection confirms the setup before the batch runs. Operators check dimensions at intervals, not just at the end, because drift caught early is a cheap correction and drift caught late is scrap." },
      { t: "p", text: "Finishing and inspection close the loop. Deburring, surface finish checks, final dimensional verification against the drawing — every batch leaves with the measurements behind it. With component capacity up to 40 tons, the same care applies whether the part fits in a palm or needs a crane." },
      { t: "p", text: "Finally, packing and dispatch — protected against transit damage, documented, and out the gate on the committed date. From drawing to delivery, the goal never changes: the component you receive is the component you drew." },
    ],
  },
];

const Block = ({ block }) => {
  if (block.t === "h") {
    return (
      <h3
        id={block.id}
        className="font-display font-semibold uppercase text-2xl md:text-3xl text-bone pt-8 scroll-mt-24"
      >
        <span className="text-copper mr-3">/</span>
        {block.text}
      </h3>
    );
  }
  if (block.t === "img") {
    return (
      <figure className="my-10">
        <div className="img-frame">
          <img src={block.src} alt={block.cap} loading="lazy" className="w-full max-h-[420px] object-cover" />
        </div>
        <figcaption className="mt-3 text-xs text-ash tracking-[0.1em] text-center">{block.cap}</figcaption>
      </figure>
    );
  }
  if (block.t === "diagram") {
    const D = DIAGRAMS[block.id];
    return D ? <D /> : null;
  }
  return <p className="text-sm md:text-base text-bone/75 leading-relaxed">{block.text}</p>;
};

export const Blog = ({ onQuote }) => {
  const [active, setActive] = useState(null);
  const articleRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = active !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  useEffect(() => {
    articleRef.current?.scrollTo(0, 0);
  }, [active]);

  const post = active !== null ? POSTS[active] : null;
  const next = active !== null ? POSTS[(active + 1) % POSTS.length] : null;
  const toc = post ? post.body.filter((b) => b.t === "h") : [];

  return (
    <section id="blog" className="py-24 lg:py-36 bg-coal-deep" data-testid="blog-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <Chapter index="09" label="From the Workshop — Blog" />
              <h2 className="font-display font-semibold uppercase leading-[1.02] text-4xl sm:text-5xl lg:text-6xl text-bone">
                Notes on <span className="text-copper">Precision</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="lg:col-span-4">
            <p className="text-sm text-steel leading-relaxed lg:text-right">
              Practical writing on machining, manufacturing and buying
              components well — from fifteen years on the shop floor.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POSTS.map((p, i) => (
            <Reveal key={p.slug} delay={0.07 * i}>
              <article
                className="group cursor-pointer h-full flex flex-col"
                onClick={() => setActive(i)}
                data-testid={`blog-card-${i}`}
              >
                <div className="relative overflow-hidden aspect-[16/10] border border-line group-hover:border-copper/60 transition-colors duration-500">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-[900ms] ease-out"
                  />
                  <span className="absolute top-4 left-4 bg-copper text-coal text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5">
                    {p.tag}
                  </span>
                </div>
                <div className="pt-5 flex flex-col flex-1">
                  <span className="text-[11px] tracking-[0.25em] uppercase text-ash">
                    {p.date} · {p.read}
                  </span>
                  <h3 className="mt-3 font-display font-semibold uppercase text-lg lg:text-xl text-bone leading-snug group-hover:text-copper transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-steel leading-relaxed line-clamp-3">
                    {p.excerpt}
                  </p>
                  <span
                    className="mt-auto pt-5 inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.18em] uppercase text-bone/70 group-hover:text-copper transition-colors duration-300"
                    data-testid={`blog-read-${i}`}
                  >
                    Read Article
                    <ArrowUpRight size={14} className="text-copper transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {post && (
          <motion.article
            ref={articleRef}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="fixed inset-0 z-[110] bg-coal overflow-y-auto"
            data-testid="blog-article-overlay"
          >
            <div className="sticky top-0 z-20 bg-coal/85 backdrop-blur-xl border-b border-line">
              <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-2 h-2 bg-copper shrink-0" />
                  <span className="font-display font-semibold text-xs tracking-[0.22em] text-bone truncate">
                    LUCKY ENGINEERING
                    <span className="hidden sm:inline text-steel font-normal"> — NOTES ON PRECISION</span>
                  </span>
                </div>
                <button
                  onClick={() => setActive(null)}
                  data-testid="blog-article-close"
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-steel hover:text-copper transition-colors duration-300 shrink-0"
                >
                  Close
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="relative h-[46vh] min-h-[320px] overflow-hidden">
              <img src={post.cover} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/55 to-coal/20" />
              <div className="absolute bottom-0 left-0 right-0">
                <div className="max-w-3xl mx-auto px-6 pb-10">
                  <span className="inline-block bg-copper text-coal text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5">
                    {post.tag}
                  </span>
                  <h1 className="mt-5 font-display font-semibold uppercase text-3xl sm:text-4xl lg:text-5xl text-bone leading-[1.08]" data-testid="blog-article-title">
                    {post.title}
                  </h1>
                  <p className="mt-4 text-[11px] tracking-[0.25em] uppercase text-bone/60">
                    Lucky Engineering Works · {post.date} · {post.read}
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto px-6 py-14">
              {toc.length > 0 && (
                <div className="mb-12 border border-line p-6" data-testid="blog-article-toc">
                  <span className="text-[10px] tracking-[0.35em] uppercase text-ash font-semibold">
                    In This Article
                  </span>
                  <ul className="mt-4 space-y-2.5">
                    {toc.map((h, i) => (
                      <li key={h.id}>
                        <button
                          onClick={() =>
                            articleRef.current?.querySelector(`#${h.id}`)?.scrollIntoView({ behavior: "smooth" })
                          }
                          data-testid={`blog-toc-link-${i}`}
                          className="text-sm text-steel hover:text-copper transition-colors duration-300 text-left"
                        >
                          <span className="font-display text-copper text-xs mr-3">{String(i + 1).padStart(2, "0")}</span>
                          {h.text}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-6" data-testid="blog-article-body">
                {post.body.map((b, i) => (
                  <Block key={i} block={b} />
                ))}
              </div>

              <div className="mt-16 border border-line px-8 py-10 flex flex-col sm:flex-row sm:items-center gap-7 justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.35em] uppercase text-copper font-semibold">
                    Have a Drawing Ready?
                  </span>
                  <p className="mt-3 font-display uppercase text-xl text-bone leading-snug max-w-md">
                    Send it over — we'll come back with a quote and a delivery date.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setActive(null);
                    onQuote?.();
                  }}
                  data-testid="blog-article-quote-button"
                  className="group inline-flex items-center gap-3 bg-copper hover:bg-copper-hover text-white text-[13px] font-semibold tracking-[0.12em] uppercase px-7 py-3.5 transition-colors duration-300 shrink-0"
                >
                  Request a Quote
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

              {next && (
                <button
                  onClick={() => setActive((active + 1) % POSTS.length)}
                  data-testid="blog-next-article"
                  className="mt-8 w-full border border-line hover:border-copper/60 p-7 text-left group transition-colors duration-300"
                >
                  <span className="text-[10px] tracking-[0.35em] uppercase text-ash font-semibold">
                    Read Next
                  </span>
                  <span className="mt-3 flex items-center justify-between gap-6">
                    <span className="font-display font-semibold uppercase text-xl md:text-2xl text-bone group-hover:text-copper transition-colors duration-300 leading-snug">
                      {next.title}
                    </span>
                    <ArrowRight size={20} className="text-copper shrink-0 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </button>
              )}
            </div>
          </motion.article>
        )}
      </AnimatePresence>
    </section>
  );
};
