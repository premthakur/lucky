export const PUB = process.env.PUBLIC_URL || "";

const S = (name) => `${PUB}/images/stock/${name}.jpg`;

export const IMAGES = {
  hero: `${PUB}/images/hero.jpg`,
  about: `${PUB}/images/about.jpg`,
  components: `${PUB}/images/components.jpg`,
  quality: `${PUB}/images/quality.jpg`,
  cnc: `${PUB}/images/cnc.jpg`,
  rail: `${PUB}/images/rail.jpg`,
  indHeavy: S("indHeavy"),
  indRail: S("indRail"),
  indPharma: S("indPharma"),
  indEng: S("indEng"),
  galFactory: S("galFactory"),
  galLaser: S("galLaser"),
  galOperator: S("galOperator"),
  galCnc: S("galCnc"),
  galComponent: S("galComponent"),
  galPipes: S("galPipes"),
};
