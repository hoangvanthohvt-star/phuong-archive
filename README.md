# Phuong Archive Fine Art — Canvas Painting Gallery

A static, no-build-tools website for showcasing original canvas paintings, styled after a minimal gallery/print-shop aesthetic (cream background, serif headings, hairline dividers).

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

## Replacing the placeholder photos with your paintings

All placeholder images currently come from picsum.photos (random stock photos) so the layout has something to show. To swap in your real work:

1. Create an `images/` folder inside `canvas-gallery/` and drop your painting photos in there (e.g. `morning-marigold.jpg`).
2. Open `js/paintings.js`.
3. For each painting object, change the `image` field from a picsum URL to your local path, e.g.:
   ```js
   image: "images/morning-marigold.jpg"
   ```
4. Update `title`, `size`, `medium`, `price`, `year`, and `tag` (`Landscape`, `Botanical`, or `Still Life` — or add your own category, just make sure to also add a matching filter button in `gallery.html`) to match the real piece.
5. Add or remove painting objects from the array freely — the gallery grid, homepage featured section, and lightbox all pull from this one file automatically.

The hero images and category tile images near the top of `index.html` / `about.html` are separate `<img>` tags — replace those `src` values directly with your own photos when ready.

## Marking a piece as sold

Each painting in `js/paintings.js` has a `sold` field — set it to `true` once a piece sells, `false` while it's still available. Sold pieces stay in the same grid alongside everything else (so visitors get the full sense of your body of work in one place, not a separate "sold" section), but their status shows inline:

- their badge and price area read "Sold" instead of a price,
- the lightbox's call-to-action switches to "Ask About a Commission" instead of "Inquire About This Piece," steering interest toward commissioning something similar.

## Renaming the studio/artist

"Phuong Archive" is a placeholder name used in the logo, page titles, and footer across all four HTML files. Find-and-replace "Phuong Archive" with your own name/brand in each file.

## Contact form

The form on `contact.html` currently just shows a confirmation message locally — it does not send email. To make it functional, connect it to a service like Formspree, Netlify Forms, or your own backend, and point the `<form>` tag's `action`/`method` at it.
