// Mobile nav toggle
document.addEventListener('click', (e) => {
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.mobile-menu');
  if (!toggle || !menu) return;
  if (e.target === toggle) {
    menu.classList.toggle('open');
  } else if (!menu.contains(e.target)) {
    menu.classList.remove('open');
  }
});

function cardTemplate(p) {
  const badge = p.sold
    ? '<span class="card-badge sold">Sold</span>'
    : (p.featured ? '<span class="card-badge">Featured</span>' : '');
  const price = p.sold
    ? '<div class="price sold-label">Sold</div>'
    : `<div class="price">${p.price}</div>`;
  return `
    <div class="card" data-id="${p.id}">
      <div class="card-image">
        ${badge}
        <img src="${p.image}" alt="${p.title}" loading="lazy">
      </div>
      <div class="card-info">
        <h3>${p.title}</h3>
        <div class="meta">${p.size} &middot; ${p.medium}</div>
        ${price}
      </div>
    </div>
  `;
}

function renderGrid(container, items) {
  container.innerHTML = items.map(cardTemplate).join('');
  container.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      const id = Number(card.getAttribute('data-id'));
      const painting = PAINTINGS.find((p) => p.id === id);
      if (painting) openLightbox(painting);
    });
  });
}

function openLightbox(p) {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  lightbox.querySelector('.lightbox-img img').src = p.image;
  lightbox.querySelector('.lightbox-img img').alt = p.title;
  lightbox.querySelector('.lb-tag').textContent = `${p.tag} · ${p.year}`;
  lightbox.querySelector('.lb-title').textContent = p.title;
  lightbox.querySelector('.lb-meta').textContent = `${p.size} · ${p.medium}`;

  const priceEl = lightbox.querySelector('.lb-price');
  priceEl.textContent = p.sold ? 'Sold' : p.price;
  priceEl.classList.toggle('sold-label', !!p.sold);

  const ctaEl = lightbox.querySelector('.lb-cta');
  if (ctaEl) {
    ctaEl.textContent = p.sold ? 'Ask About a Commission' : 'Inquire About This Piece';
  }

  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  // Homepage featured strip
  const featuredGrid = document.getElementById('featured-grid');
  if (featuredGrid) {
    renderGrid(featuredGrid, PAINTINGS.filter((p) => p.featured));
  }

  // Homepage category tiles
  const tilesGrid = document.getElementById('tiles-grid');
  if (tilesGrid) {
    tilesGrid.innerHTML = CATEGORY_TILES.map((t) => `
      <a class="tile" href="gallery.html?tag=${encodeURIComponent(t.tag)}">
        <img src="${t.image}" alt="${t.label}" loading="lazy">
        <span>${t.label}</span>
      </a>
    `).join('');
  }

  // Gallery page
  const galleryGrid = document.getElementById('gallery-grid');
  if (galleryGrid) {
    const params = new URLSearchParams(window.location.search);
    const initialTag = params.get('tag') || 'All';

    const filterButtons = document.querySelectorAll('#category-filter button');
    const sortSelect = document.getElementById('sort-select');

    function currentFilter() {
      const active = document.querySelector('#category-filter button.active');
      return active ? active.getAttribute('data-tag') : 'All';
    }

    function applyFilterAndSort() {
      const tag = currentFilter();
      let items = tag === 'All' ? [...PAINTINGS] : PAINTINGS.filter((p) => p.tag === tag);

      const sortVal = sortSelect ? sortSelect.value : 'featured';
      if (sortVal === 'price-low') {
        items.sort((a, b) => parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, '')));
      } else if (sortVal === 'price-high') {
        items.sort((a, b) => parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, '')));
      } else if (sortVal === 'newest') {
        items.sort((a, b) => b.year.localeCompare(a.year));
      } else if (sortVal === 'az') {
        items.sort((a, b) => a.title.localeCompare(b.title));
      } else {
        items.sort((a, b) => (b.featured === a.featured) ? 0 : b.featured ? 1 : -1);
      }

      renderGrid(galleryGrid, items);
      const countEl = document.getElementById('result-count');
      if (countEl) countEl.textContent = `${items.length} piece${items.length === 1 ? '' : 's'}`;
    }

    filterButtons.forEach((btn) => {
      if (btn.getAttribute('data-tag') === initialTag) btn.classList.add('active');
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        applyFilterAndSort();
      });
    });

    if (sortSelect) sortSelect.addEventListener('change', applyFilterAndSort);

    applyFilterAndSort();
  }
});
