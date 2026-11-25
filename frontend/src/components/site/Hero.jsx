import { motion } from "framer-motion";
import { IMAGES } from "@/data/images";
import { DOWNLOADS } from "@/data/site";
import { Container, EASE, useQuote } from "./ui";

const rise = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

const FACTS = [
  ["Established", "2010, Vasai East"],
  ["Shop floor", "25 CNC, VMC, Traub and conventional machines"],
  ["Order size", "Prototype, small batch or repeat"],
  ["Manufacturing partner to", "L&T, JCB and Dynabac"],
];

export const Hero = () => {
  const onQuote = useQuote();
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-ink text-white"
      data-testid="hero-section"
    >
      <motion.img
        src={IMAGES.inspection}
        alt=""
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: EASE }}
        className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/10" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/90 to-transparent" />

      <Container className="relative flex w-full flex-1 flex-col justify-center py-20">
        <motion.h1
          {...rise(0.1)}
          className="max-w-3xl text-[clamp(2.8rem,6.4vw,5.6rem)] font-semibold leading-[1.0] tracking-[-0.035em]"
          data-testid="hero-headline"
        >
          Precision machined components, made to your drawing.
        </motion.h1>
        <motion.p
          {...rise(0.25)}
          className="mt-7 max-w-xl text-[19px] leading-relaxed text-white/80 sm:text-[20px]"
          data-testid="hero-subtext"
        >
          We machine shafts, pins, bushes, sleeves, rollers and custom turned
          parts by CNC turning, VMC milling and conventional machining, for
          steel plants, rolling mills and industrial OEMs.
        </motion.p>
        <motion.div {...rise(0.4)} className="mt-10 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onQuote}
            data-testid="hero-quote-button"
            className="rounded-full bg-copper px-7 py-3.5 text-[16px] font-semibold text-white transition-colors duration-200 hover:bg-copper-hover"
          >
            Send an RFQ
          </button>
          <a
            href={DOWNLOADS.profile}
            download
            data-testid="hero-profile-link"
            className="rounded-full border border-white/40 px-7 py-3.5 text-[16px] font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
          >
            Download company profile
          </a>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative border-t border-white/15 bg-ink/50 backdrop-blur-md"
      >
        <Container>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-5 py-6 lg:grid-cols-4 lg:py-7" data-testid="hero-facts">
            {FACTS.map(([label, value]) => (
              <div key={label}>
                <dt className="text-[13px] text-white/60">{label}</dt>
                <dd className="mt-1 text-[16px] font-semibold leading-snug sm:text-[17px]">{value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </motion.div>
    </section>
  );
};
