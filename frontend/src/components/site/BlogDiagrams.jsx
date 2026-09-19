import { ArrowDown, ArrowRight, Check } from "lucide-react";

const Frame = ({ label, children, testId }) => (
  <figure
    className="my-10 border border-dashed border-line-strong bg-surface/40 p-6 md:p-8"
    data-testid={testId}
  >
    <span className="block text-[10px] tracking-[0.35em] uppercase text-ash font-semibold mb-6">
      {label}
    </span>
    {children}
  </figure>
);

export const FitDiagram = () => (
  <Frame label="Diagram — Pin & Bush Fit (Why Tolerance Matters)" testId="blog-diagram-fit">
    <svg viewBox="0 0 560 260" className="w-full max-w-xl mx-auto" fill="none">
      <circle cx="150" cy="130" r="95" stroke="#4A4D54" strokeWidth="2" />
      <circle cx="150" cy="130" r="66" stroke="#78828A" strokeWidth="1.5" strokeDasharray="5 6" />
      <circle cx="150" cy="130" r="58" fill="#1A1C20" stroke="#E65C24" strokeWidth="2" />
      <line x1="150" y1="130" x2="150" y2="72" stroke="#E65C24" strokeWidth="1.5" />
      <path d="M146 72 L150 64 L154 72" stroke="#E65C24" strokeWidth="1.5" fill="none" />
      <line x1="245" y1="35" x2="208" y2="62" stroke="#4A4D54" strokeWidth="1" />
      <circle cx="208" cy="62" r="3" fill="#78828A" />
      <text x="255" y="40" fill="#F3F4F0" fontSize="13" fontFamily="Oswald, sans-serif" letterSpacing="2">BUSHING</text>
      <text x="255" y="58" fill="#78828A" fontSize="11" fontFamily="Manrope, sans-serif">Bore Ø50 H7 (+0.025 / 0)</text>
      <line x1="245" y1="120" x2="186" y2="122" stroke="#4A4D54" strokeWidth="1" />
      <circle cx="186" cy="122" r="3" fill="#78828A" />
      <text x="255" y="124" fill="#F3F4F0" fontSize="13" fontFamily="Oswald, sans-serif" letterSpacing="2">CLEARANCE ZONE</text>
      <text x="255" y="142" fill="#78828A" fontSize="11" fontFamily="Manrope, sans-serif">0.02 – 0.05 mm keeps the grease film alive</text>
      <line x1="245" y1="205" x2="168" y2="178" stroke="#4A4D54" strokeWidth="1" />
      <circle cx="168" cy="178" r="3" fill="#E65C24" />
      <text x="255" y="209" fill="#E65C24" fontSize="13" fontFamily="Oswald, sans-serif" letterSpacing="2">PIN</text>
      <text x="255" y="227" fill="#78828A" fontSize="11" fontFamily="Manrope, sans-serif">Shaft Ø50 h8 (0 / −0.039), ground finish</text>
    </svg>
  </Frame>
);

export const CostCurveDiagram = () => (
  <Frame label="Diagram — Cost per Part vs. Quantity" testId="blog-diagram-cost">
    <svg viewBox="0 0 560 280" className="w-full max-w-xl mx-auto" fill="none">
      <line x1="60" y1="230" x2="520" y2="230" stroke="#4A4D54" strokeWidth="1.5" />
      <line x1="60" y1="230" x2="60" y2="25" stroke="#4A4D54" strokeWidth="1.5" />
      {[80, 130, 180].map((y) => (
        <line key={y} x1="60" y1={y} x2="520" y2={y} stroke="#2A2D33" strokeWidth="1" strokeDasharray="3 8" />
      ))}
      <polyline
        points="70,120 180,140 300,155 420,168 510,178"
        stroke="#78828A"
        strokeWidth="2.5"
        fill="none"
      />
      <polyline
        points="70,190 180,150 300,105 420,70 510,55"
        stroke="#E65C24"
        strokeWidth="2.5"
        fill="none"
      />
      <circle cx="195" cy="143" r="4" fill="#0F1012" stroke="#F3F4F0" strokeWidth="1.5" />
      <text x="205" y="128" fill="#F3F4F0" fontSize="11" fontFamily="Manrope, sans-serif">break-even point</text>
      <text x="430" y="200" fill="#78828A" fontSize="12" fontFamily="Oswald, sans-serif" letterSpacing="2">CONVENTIONAL</text>
      <text x="440" y="45" fill="#E65C24" fontSize="12" fontFamily="Oswald, sans-serif" letterSpacing="2">CNC</text>
      <text x="60" y="262" fill="#78828A" fontSize="11" fontFamily="Manrope, sans-serif" letterSpacing="2">QUANTITY →</text>
      <text x="30" y="40" fill="#78828A" fontSize="11" fontFamily="Manrope, sans-serif" transform="rotate(-90 30 40)" letterSpacing="2">COST PER PART →</text>
    </svg>
  </Frame>
);

const CHECKS = [
  "Inspection before dispatch — measured and documented",
  "Process range under one roof — turning, milling, finishing",
  "Questions on the drawing before cutting metal",
  "Honest lead times you can plan around",
  "Continuity — a partner who keeps your setups and knowledge",
];

export const ChecklistDiagram = () => (
  <Frame label="Checklist — The Five Checks" testId="blog-diagram-checklist">
    <div className="max-w-xl mx-auto space-y-3">
      {CHECKS.map((c, i) => (
        <div key={c} className="flex items-center gap-4 border border-line px-4 py-3">
          <span className="w-6 h-6 border border-copper flex items-center justify-center shrink-0">
            <Check size={13} className="text-copper" />
          </span>
          <span className="font-display text-copper text-xs w-7 shrink-0">{String(i + 1).padStart(2, "0")}</span>
          <span className="text-sm text-bone/80">{c}</span>
        </div>
      ))}
    </div>
  </Frame>
);

const STEPS = ["Drawing", "Planning", "Machining", "Inspection", "Dispatch"];

export const ProcessFlowDiagram = () => (
  <Frame label="Diagram — Drawing to Delivery Flow" testId="blog-diagram-flow">
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto">
      {STEPS.map((s, i) => (
        <div key={s} className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <div className="border border-dashed border-line-strong px-5 py-3.5 text-center w-full sm:w-auto hover:border-copper transition-colors duration-300">
            <span className="block font-display text-copper text-[10px] tracking-[0.2em]">{String(i + 1).padStart(2, "0")}</span>
            <span className="block mt-1 font-display uppercase tracking-[0.1em] text-sm text-bone">{s}</span>
          </div>
          {i < STEPS.length - 1 && (
            <>
              <ArrowRight size={15} className="text-copper hidden sm:block shrink-0" />
              <ArrowDown size={15} className="text-copper sm:hidden shrink-0" />
            </>
          )}
        </div>
      ))}
    </div>
  </Frame>
);
