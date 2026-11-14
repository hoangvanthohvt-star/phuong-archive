# Phuong Archive Fine Art — Canvas Painting Gallery

A static, no-build-tools website for showcasing original canvas paintings, styled after a minimal gallery/print-shop aesthetic (cream background, serif headings, hairline dividers).

The site now ships with 4 real paintings (photographed from the "Phuong Duc Gallery" Drive folder) instead of placeholders — whimsical mini cat portraits in costume. Categories are **Cat Portraits** (the main focus), **Animals**, and **Landscape** (the latter two are empty for now, ready for whenever an occasional non-cat piece gets added).

## Structure

```
canvas-gallery/
├── index.html      Home page (hero, category tiles, featured work, about teaser)
├── gallery.html     Full gallery grid with filter + sort
├── about.html       Artist bio / process page
├── contact.html      Contact form (placeholder, not wired to send yet)
├── css/style.css     All styling
├── js/paintings.js   ← YOUR PAINTING DATA lives here
└── js/main.js        Rendering, filtering, lightbox logic
```

## How to view it

Just open `index.html` in a browser — no server or build step required.

## Adding a new painting

1. Drop the photo in `images/` (resize it first — see "Image size" below).
2. Open `js/paintings.js` and copy one of the existing objects.
3. Edit `title`, `size`, `medium`, `price`, `year`, `tag`, `sold`, and `image` to match the real piece. `tag` should be `Cat Portraits`, `Animals`, or `Landscape` — or your own new category, just add a matching filter button in `gallery.html` (`#category-filter`) too.
4. Add or remove painting objects from the array freely — the gallery grid, homepage featured section, and lightbox all pull from this one file automatically.

The hero image on `index.html` and the category tile images are separate `<img>` tags / entries in `CATEGORY_TILES` — update those directly when you want a different photo representing a category or the homepage hero.

## Image size

Photos straight off a phone are typically 2000px+ per side and several MB — too large for fast page loads. Before adding a new photo, resize it on a Mac with:

```bash
sips --resampleHeightWidthMax 1100 -s formatOptions 65 your-photo.jpg --out images/your-photo.jpg
```

That caps the longest side at 1100px and compresses to ~65% JPEG quality, which keeps most photos under 500KB without a visible quality loss at the sizes this site displays them.

## Pricing

Every piece currently shows "Inquire for Pricing" instead of a dollar amount, since these are small one-of-a-kind commissions. To sell at a fixed price instead, just replace the `price` field with a value like `"$45"` — the gallery's price-sort options will then work for that piece too.

## Marking a piece as sold

Each painting in `js/paintings.js` has a `sold` field — set it to `true` once a piece sells, `false` while it's still available. Sold pieces stay in the same grid alongside everything else (so visitors get the full sense of your body of work in one place, not a separate "sold" section), but their status shows inline:

- their badge and price area read "Sold" instead of a price,
- the lightbox's call-to-action switches to "Ask About a Commission" instead of "Inquire About This Piece," steering interest toward commissioning something similar.

## Renaming the studio/artist

"Phuong Archive" is a placeholder name used in the logo, page titles, and footer across all four HTML files. Find-and-replace "Phuong Archive" with your own name/brand in each file.

## Contact form

The form on `contact.html` currently just shows a confirmation message locally — it does not send email. To make it functional, connect it to a service like Formspree, Netlify Forms, or your own backend, and point the `<form>` tag's `action`/`method` at it.
