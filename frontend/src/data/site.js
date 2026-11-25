import { PUB } from "./images";

export const CONTACT = {
  email: "contact@luckyengineeringwork.com",
  phones: [
    { label: "+91 82752 92405", href: "tel:+918275292405" },
    { label: "+91 80073 99813", href: "tel:+918007399813" },
  ],
  addressLines: [
    "A-15, Arihant Industrials Estate,",
    "Techno Parmar Business Center, Vasai Phata,",
    "Vasai East, Maharashtra – 401208, India.",
  ],
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=A-15+Arihant+Industrials+Estate+Techno+Parmar+Business+Center+Vasai+Phata+Vasai+East+Maharashtra+401208",
};

export const DOWNLOADS = {
  profile: `${PUB}/downloads/Lucky-Engineering-Works-Profile.pdf`,
  productRange: `${PUB}/downloads/Lucky-Engineering-Product-Range.pdf`,
};

// Sections on the home page that the navigation can jump to.
export const SECTIONS = [
  { label: "What we make", id: "what-we-make" },
  { label: "Services", id: "services" },
  { label: "How it works", id: "process" },
  { label: "Quality", id: "quality" },
  { label: "Vendor registration", id: "vendor-registration" },
];

export const RFQ_NOTE =
  "Product acceptance, material sourcing, tolerances and delivery commitments are confirmed individually for each RFQ.";
