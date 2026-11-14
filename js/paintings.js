/*
  PAINTINGS DATA
  --------------
  This is the real body of work, photographed from the "Phuong Duc Gallery"
  Drive folder. Mostly whimsical cat portraits for now — occasional other
  animals or landscapes can be added later under those same tags.

  Adding a new piece:
    1. Drop the photo in images/ (e.g. images/your-file-name.jpg).
    2. Copy one of the objects below and edit title / size / medium / price /
       year / tag / sold / image to match.
  Nothing else needs to change — the gallery grid, homepage featured
  section, and lightbox all pull from this one file automatically.

  SOLD PIECES
  -----------
  Set "sold: true" once a piece sells, "false" while still available. Sold
  pieces stay in the same grid as everything else, but their badge/price
  read "Sold" and the lightbox CTA switches to "Ask About a Commission."

  PRICING
  -------
  Each piece currently reads "Inquire for Pricing" rather than a fixed
  number, since these are small one-of-a-kind commissions — replace the
  "price" field with a real number (e.g. "$45") once you've settled on
  pricing, for any piece you'd rather sell at a fixed price.
*/

const PAINTINGS = [
  {
    id: 1,
    title: "Hairy Pawter",
    tag: "Cat Portraits",
    size: "4 x 4\"",
    medium: "Acrylic on canvas panel",
    price: "Inquire for Pricing",
    year: "2026",
    featured: true,
    sold: false,
    image: "images/wizard-cat.jpg"
  },
  {
    id: 2,
    title: "Cozy by the Tree",
    tag: "Cat Portraits",
    size: "4 x 4\"",
    medium: "Acrylic on canvas panel",
    price: "Inquire for Pricing",
    year: "2026",
    featured: true,
    sold: false,
    image: "images/sweater-cat.jpg"
  },
  {
    id: 3,
    title: "Merry & Bright",
    tag: "Cat Portraits",
    size: "4 x 4\"",
    medium: "Acrylic on canvas panel",
    price: "Inquire for Pricing",
    year: "2026",
    featured: true,
    sold: false,
    image: "images/santa-cat.jpg"
  },
  {
    id: 4,
    title: "La Gioconda, Reimagined",
    tag: "Cat Portraits",
    size: "4 x 4\"",
    medium: "Acrylic on canvas panel",
    price: "Inquire for Pricing",
    year: "2026",
    featured: true,
    sold: false,
    image: "images/mona-lisa-cat.jpg"
  },
  {
    id: 5,
    title: "The Costume Cat Collection",
    tag: "Cat Portraits",
    size: "Set of 4 — 4 x 4\" each",
    medium: "Acrylic on canvas panel",
    price: "Inquire for Pricing",
    year: "2026",
    featured: false,
    sold: false,
    bundle: true,
    image: "images/bundle-of-4.jpg"
  }
];

const CATEGORY_TILES = [
  { label: "Cat Portraits", tag: "Cat Portraits", image: "images/wizard-cat.jpg" },
  { label: "All Originals", tag: "All", image: "images/santa-cat.jpg" }
];
