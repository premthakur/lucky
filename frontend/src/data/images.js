export const PUB = process.env.PUBLIC_URL || "";

const S = (name) => `${PUB}/images/stock/${name}.jpg`;

export const IMAGES = {
  inspection: `${PUB}/images/quality.jpg`,
  lathe: `${PUB}/images/about.jpg`,
  cnc: `${PUB}/images/cnc.jpg`,
  shopFloor: `${PUB}/images/hero-factory.jpg`,
  galFactory: S("galFactory"),
  galOperator: S("galOperator"),
  galCnc: S("galCnc"),
  galComponent: S("galComponent"),
};

export const productImg = (key) => `${PUB}/images/products/${key}.jpg`;

// CC0 public-domain photos from rawpixel (via Openverse): greenLathe 6075509, faceMill 5959231, drillTap 5941409.
export const STOCK = {
  greenLathe: S("greenLathe"),
  faceMill: S("faceMill"),
  drillTap: S("drillTap"),
};
