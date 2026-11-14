/*
  PAINTINGS DATA
  --------------
  Placeholder images use picsum.photos (free stock photos) as random stand-ins.
  To swap in your own work later:
    1. Put your image files in an /images folder next to this file.
    2. Change each "image" value below to "images/your-file-name.jpg".
    3. Edit title / size / medium / price / description / tag as needed.
  Nothing else in the site needs to change — the gallery and homepage
  are both generated from this array automatically.

  SOLD PIECES
  -----------
  Set "sold: true" on any piece that's already been sold. It still shows up
  in the gallery (so visitors get the full sense of your range), but its
  badge and price area read "Sold" instead of a price, and the lightbox
  CTA switches to "Ask About a Commission" instead of "Inquire About This
  Piece". Set "sold: false" for anything still available to buy.
*/

const PAINTINGS = [
  {
    id: 1,
    title: "Morning Marigold",
    tag: "Botanical",
    size: "24 x 30\"",
    medium: "Oil on canvas",
    price: "$680",
    year: "2024",
    featured: true,
    sold: false,
    image: "https://picsum.photos/seed/canvas-marigold/900/1125"
  },
  {
    id: 2,
    title: "Quiet Coastline",
    tag: "Landscape",
    size: "30 x 40\"",
    medium: "Acrylic on canvas",
    price: "$960",
    year: "2024",
    featured: true,
    sold: false,
    image: "https://picsum.photos/seed/canvas-coastline/900/1125"
  },
  {
    id: 3,
    title: "Terracotta Vessel No. 2",
    tag: "Still Life",
    size: "18 x 24\"",
    medium: "Oil on canvas",
    price: "$480",
    year: "2023",
    featured: true,
    sold: true,
    image: "https://picsum.photos/seed/canvas-vessel/900/1125"
  },
  {
    id: 4,
    title: "Wild Meadow",
    tag: "Botanical",
    size: "20 x 20\"",
    medium: "Acrylic on canvas",
    price: "$420",
    year: "2024",
    featured: false,
    sold: false,
    image: "https://picsum.photos/seed/canvas-meadow/900/1125"
  },
  {
    id: 5,
    title: "Blue Hour, Lakeside",
    tag: "Landscape",
    size: "24 x 36\"",
    medium: "Oil on canvas",
    price: "$820",
    year: "2023",
    featured: false,
    sold: true,
    image: "https://picsum.photos/seed/canvas-lakeside/900/1125"
  },
  {
    id: 6,
    title: "Citrus Grove",
    tag: "Still Life",
    size: "16 x 20\"",
    medium: "Oil on canvas",
    price: "$390",
    year: "2024",
    featured: false,
    sold: false,
    image: "https://picsum.photos/seed/canvas-citrus/900/1125"
  },
  {
    id: 7,
    title: "Golden Fields No. 3",
    tag: "Landscape",
    size: "30 x 30\"",
    medium: "Acrylic on canvas",
    price: "$740",
    year: "2023",
    featured: true,
    sold: false,
    image: "https://picsum.photos/seed/canvas-goldenfields/900/1125"
  },
  {
    id: 8,
    title: "Peony Study",
    tag: "Botanical",
    size: "12 x 16\"",
    medium: "Oil on canvas board",
    price: "$260",
    year: "2024",
    featured: false,
    sold: true,
    image: "https://picsum.photos/seed/canvas-peony/900/1125"
  },
  {
    id: 9,
    title: "Harbor Light",
    tag: "Landscape",
    size: "24 x 30\"",
    medium: "Oil on canvas",
    price: "$690",
    year: "2022",
    featured: false,
    sold: true,
    image: "https://picsum.photos/seed/canvas-harbor/900/1125"
  },
  {
    id: 10,
    title: "Kitchen Table Still Life",
    tag: "Still Life",
    size: "18 x 18\"",
    medium: "Acrylic on canvas",
    price: "$340",
    year: "2024",
    featured: false,
    sold: false,
    image: "https://picsum.photos/seed/canvas-kitchen/900/1125"
  },
  {
    id: 11,
    title: "Windswept Dune",
    tag: "Landscape",
    size: "24 x 36\"",
    medium: "Oil on canvas",
    price: "$860",
    year: "2023",
    featured: false,
    sold: false,
    image: "https://picsum.photos/seed/canvas-dune/900/1125"
  },
  {
    id: 12,
    title: "Sunroom Orchids",
    tag: "Botanical",
    size: "20 x 24\"",
    medium: "Oil on canvas",
    price: "$520",
    year: "2024",
    featured: false,
    sold: false,
    image: "https://picsum.photos/seed/canvas-orchids/900/1125"
  }
];

const CATEGORY_TILES = [
  { label: "Landscape", tag: "Landscape", image: "https://picsum.photos/seed/canvas-cat-landscape/700/900" },
  { label: "Botanical", tag: "Botanical", image: "https://picsum.photos/seed/canvas-cat-botanical/700/900" },
  { label: "Still Life", tag: "Still Life", image: "https://picsum.photos/seed/canvas-cat-stilllife/700/900" },
  { label: "All Originals", tag: "All", image: "https://picsum.photos/seed/canvas-cat-all/700/900" }
];
