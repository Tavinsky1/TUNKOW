/**
 * TUNKOW BRAND & VISUAL DIRECTION STUDIO — LOGIC & ENGINE
 * Powers real-time theme swapping, SVG generation, 30-photo gallery grading,
 * live poster/vinyl/web mockups, and merch visualization.
 */

// 1. EMBEDDED PHOTO CATALOG (Works offline and over HTTP)
const PHOTOS = [
  { filename: "IMG_9324.jpg", thumb: "thumbnails/IMG_9324.jpg", aspect: "portrait", w: 3872, h: 5808, tag: "vocals" },
  { filename: "IMG_9336.jpg", thumb: "thumbnails/IMG_9336.jpg", aspect: "portrait", w: 4160, h: 6240, tag: "brass" },
  { filename: "IMG_9349.jpg", thumb: "thumbnails/IMG_9349.jpg", aspect: "portrait", w: 3821, h: 5731, tag: "stage" },
  { filename: "IMG_9355.jpg", thumb: "thumbnails/IMG_9355.jpg", aspect: "portrait", w: 3537, h: 5305, tag: "brass" },
  { filename: "IMG_9357.jpg", thumb: "thumbnails/IMG_9357.jpg", aspect: "portrait", w: 4001, h: 6001, tag: "brass" },
  { filename: "IMG_9369.jpg", thumb: "thumbnails/IMG_9369.jpg", aspect: "landscape", w: 5105, h: 3403, tag: "stage" },
  { filename: "IMG_9374.jpg", thumb: "thumbnails/IMG_9374.jpg", aspect: "landscape", w: 6240, h: 4160, tag: "trumpet" },
  { filename: "IMG_9391.jpg", thumb: "thumbnails/IMG_9391.jpg", aspect: "landscape", w: 4745, h: 3163, tag: "horns" },
  { filename: "IMG_9399.jpg", thumb: "thumbnails/IMG_9399.jpg", aspect: "landscape", w: 6240, h: 4160, tag: "stage" },
  { filename: "IMG_9400.jpg", thumb: "thumbnails/IMG_9400.jpg", aspect: "landscape", w: 6240, h: 4160, tag: "stage" },
  { filename: "IMG_9412.jpg", thumb: "thumbnails/IMG_9412.jpg", aspect: "landscape", w: 6240, h: 4160, tag: "crowd" },
  { filename: "IMG_9423.jpg", thumb: "thumbnails/IMG_9423.jpg", aspect: "portrait", w: 4073, h: 6109, tag: "percussion" },
  { filename: "IMG_9429.jpg", thumb: "thumbnails/IMG_9429.jpg", aspect: "portrait", w: 4160, h: 6240, tag: "bass" },
  { filename: "IMG_9436.jpg", thumb: "thumbnails/IMG_9436.jpg", aspect: "portrait", w: 4160, h: 6240, tag: "keys" },
  { filename: "IMG_9446.jpg", thumb: "thumbnails/IMG_9446.jpg", aspect: "portrait", w: 4160, h: 6240, tag: "guitar" },
  { filename: "IMG_9466.jpg", thumb: "thumbnails/IMG_9466.jpg", aspect: "portrait", w: 3486, h: 5229, tag: "brass" },
  { filename: "IMG_9471.jpg", thumb: "thumbnails/IMG_9471.jpg", aspect: "portrait", w: 3523, h: 5285, tag: "brass" },
  { filename: "IMG_9477.jpg", thumb: "thumbnails/IMG_9477.jpg", aspect: "portrait", w: 4160, h: 6240, tag: "energy" },
  { filename: "IMG_9486.jpg", thumb: "thumbnails/IMG_9486.jpg", aspect: "portrait", w: 3504, h: 5256, tag: "harmonica" },
  { filename: "IMG_9490.jpg", thumb: "thumbnails/IMG_9490.jpg", aspect: "portrait", w: 3619, h: 5429, tag: "brass" },
  { filename: "IMG_9493.jpg", thumb: "thumbnails/IMG_9493.jpg", aspect: "portrait", w: 3602, h: 5403, tag: "sax" },
  { filename: "IMG_9494.jpg", thumb: "thumbnails/IMG_9494.jpg", aspect: "portrait", w: 3795, h: 5692, tag: "brass" },
  { filename: "IMG_9504.jpg", thumb: "thumbnails/IMG_9504.jpg", aspect: "portrait", w: 3463, h: 5194, tag: "drums" },
  { filename: "IMG_9505.jpg", thumb: "thumbnails/IMG_9505.jpg", aspect: "portrait", w: 3669, h: 5503, tag: "drums" },
  { filename: "IMG_9513.jpg", thumb: "thumbnails/IMG_9513.jpg", aspect: "portrait", w: 3039, h: 4558, tag: "energy" },
  { filename: "IMG_9517.jpg", thumb: "thumbnails/IMG_9517.jpg", aspect: "portrait", w: 4160, h: 6240, tag: "brass" },
  { filename: "IMG_9522.jpg", thumb: "thumbnails/IMG_9522.jpg", aspect: "portrait", w: 3921, h: 5882, tag: "strings" },
  { filename: "IMG_9532.jpg", thumb: "thumbnails/IMG_9532.jpg", aspect: "portrait", w: 3837, h: 5756, tag: "brass" },
  { filename: "IMG_9548.jpg", thumb: "thumbnails/IMG_9548.jpg", aspect: "portrait", w: 3928, h: 5892, tag: "stage" },
  { filename: "IMG_9560.jpg", thumb: "thumbnails/IMG_9560.jpg", aspect: "landscape", w: 6240, h: 4160, tag: "full-band" }
];

// 2. VECTOR SVGS FOR EACH DIRECTION
const LOGOS = {
  // DIRECTION A: El Lek Urbano (Riso / Stencil Brutalist)
  a: {
    crest: `<svg viewBox="0 0 100 100" class="svg-crest" fill="currentColor">
      <!-- Distressed Stencil Tunqui Crest -->
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" stroke-width="4" stroke-dasharray="14 4" />
      <!-- Disc crest of Cock-of-the-rock -->
      <path d="M50 20 C68 20 80 32 80 50 C80 64 68 76 52 78 L52 86 L44 86 L44 76 C32 72 24 62 24 50 C24 33 36 20 50 20 Z" fill="currentColor" />
      <!-- Negative beak cut -->
      <polygon points="50,44 72,52 50,60" fill="#0D0E11" />
      <circle cx="42" cy="40" r="4.5" fill="#0D0E11" />
      <!-- Punk lightning cut across crest -->
      <polygon points="46,26 54,34 48,37 56,47 48,46 44,38 48,35" fill="#0D0E11" />
    </svg>`,
    wordmark: `<svg viewBox="0 0 460 90" class="svg-wordmark">
      <defs>
        <!-- Riso offset shadow effect -->
        <filter id="riso-offset" x="-10%" y="-10%" width="120%" height="120%">
          <feOffset in="SourceGraphic" dx="-3" dy="3" result="offset" />
          <feColorMatrix in="offset" type="matrix" values="0 0 0 0 0.9 0 0 0 0 0.1 0 0 0 0 0.1 1 0" result="redShadow"/>
          <feMerge>
            <feMergeNode in="redShadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <text x="230" y="70" text-anchor="middle" font-family="'Anton', 'Bebas Neue', sans-serif" font-size="86" font-weight="900" letter-spacing="4" fill="#F4EFEA" filter="url(#riso-offset)">TUNKOW</text>
    </svg>`,
    badge: `<svg viewBox="0 0 160 50" class="svg-badge">
      <rect x="2" y="2" width="156" height="46" fill="#0D0E11" stroke="#E62419" stroke-width="3" />
      <text x="80" y="34" text-anchor="middle" font-family="'Space Mono', monospace" font-size="20" font-weight="700" fill="#E62419" letter-spacing="2">TUNKOW</text>
    </svg>`
  },

  // DIRECTION B: Tropical Post-Punk (Neon Brass / Saturated)
  b: {
    crest: `<svg viewBox="0 0 100 100" class="svg-crest" fill="none">
      <!-- Aerodynamic Tunqui crest with 3 horn soundwave blades -->
      <path d="M22 68 C22 45 40 24 64 24 C78 24 88 32 90 46 C76 46 64 54 58 68 Z" fill="#FF1E27" />
      <path d="M14 62 C14 46 26 34 44 32 C38 42 38 52 42 62 Z" fill="#FFAA00" />
      <path d="M8 58 C8 48 16 40 26 38 C22 44 22 52 26 58 Z" fill="#00E5FF" opacity="0.85" />
      <!-- Bird eye -->
      <circle cx="58" cy="40" r="4.5" fill="#FFFFFF" />
      <circle cx="59" cy="40" r="2" fill="#0A0B10" />
      <!-- Sleek beak outline -->
      <polygon points="76,46 94,52 74,58" fill="#FFAA00" />
    </svg>`,
    wordmark: `<svg viewBox="0 0 460 90" class="svg-wordmark">
      <text x="230" y="68" text-anchor="middle" font-family="'Syne', 'Outfit', sans-serif" font-size="76" font-weight="800" font-style="italic" letter-spacing="2" fill="#FFFFFF">
        TUN<tspan fill="#FF1E27">KOW</tspan>
      </text>
      <!-- Horizontal horn flare streak -->
      <rect x="70" y="76" width="320" height="3" fill="#FF1E27" />
    </svg>`,
    badge: `<svg viewBox="0 0 160 50" class="svg-badge">
      <rect x="0" y="0" width="160" height="50" rx="25" fill="#FF1E27" />
      <text x="80" y="32" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="22" font-weight="900" fill="#FFFFFF" letter-spacing="1">TUNKOW</text>
    </svg>`
  },

  // DIRECTION C: Andean Modernist (Geometric Monolith)
  c: {
    crest: `<svg viewBox="0 0 100 100" class="svg-crest">
      <!-- Pure circular disc crest emblem (Bauhaus + Pre-Columbian) -->
      <circle cx="50" cy="50" r="44" fill="#141518" stroke="#D81616" stroke-width="4" />
      <!-- The round disc head -->
      <circle cx="50" cy="46" r="26" fill="#D81616" />
      <!-- Clean geometric beak quadrant -->
      <polygon points="56,46 84,52 56,60" fill="#FAFAFA" />
      <!-- Minimalist eye -->
      <circle cx="44" cy="44" r="5" fill="#141518" />
    </svg>`,
    wordmark: `<svg viewBox="0 0 460 90" class="svg-wordmark">
      <text x="230" y="66" text-anchor="middle" font-family="'Unbounded', 'Space Grotesk', sans-serif" font-size="54" font-weight="800" letter-spacing="8" fill="#FAFAFA">
        T U N K O W
      </text>
      <circle cx="230" cy="80" r="4" fill="#D81616" />
    </svg>`,
    badge: `<svg viewBox="0 0 160 50" class="svg-badge">
      <rect x="2" y="2" width="156" height="46" fill="none" stroke="#D81616" stroke-width="2" />
      <text x="80" y="32" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="700" fill="#FAFAFA" letter-spacing="4">TUNKOW</text>
    </svg>`
  }
};

// 3. DIRECTION DETAILED DATA
const DIRECTIONS = {
  a: {
    id: "a",
    name: "El Lek Urbano",
    subtitle: "Berlin Riso / Gig-Poster / Raw Cutout",
    conceptTag: "DIRECTION A &bull; BERLIN UNDERGROUND RIOT",
    lead: "Raw Berlin underground counter-culture meets the feral mating ritual of the Tunqui. A high-contrast risograph aesthetic built for paste-ups on Kreuzberg walls, cassette J-cards, and sweaty DIY venues.",
    birdMetaphor: "The male Andean Cock-of-the-rock (*Tunqui*) gathers in raucous communal leks, frantically flashing scarlet crests and jumping in unison to overpower the cloud forest. That is exactly what a 9-piece brass ensemble does on the SO36 stage.",
    attributes: [
      { label: "Sonic Energy", val: "Punk-Ska Riot" },
      { label: "Aesthetic", val: "Risograph Duotone" },
      { label: "Typography", val: "Industrial Condensed" },
      { label: "Target Stage", val: "SO36, Cassiopeia, Fusion" }
    ],
    palette: [
      { name: "Tunqui Vermilion", role: "Primary Ink", hex: "#E62419" },
      { name: "Carbon Black", role: "Base Shadow", hex: "#0D0E11" },
      { name: "Newsprint Bone", role: "Paper Substrate", hex: "#F4EFEA" },
      { name: "Sulphur Tape", role: "Gig Highlight", hex: "#FFE600" },
      { name: "Dark Concrete", role: "Surface", hex: "#16171C" }
    ],
    typeDisplay: "Bebas Neue / Anton (Condensed Sans)",
    typeSub: "Space Mono (Bold Monospace)",
    typeBody: "Plus Jakarta Sans (Clean Modern Body)",
    headlineDemo: "TUNKOW LIVE AT SO36 BERLIN",
    subDemo: "LATIN SKA RIOT &bull; 9-PIECE BRASS FORCE &bull; TOUR 2024",
    bodyDemo: "Uncompromising offbeat velocity, raw tape saturation, and brass hooks screaming across the underground. Direct from the Andean slopes to the Kreuzberg night.",
    crestTitle: "The Stencil Tunqui Crest",
    crestDesc: "Designed for rough screenprinting, stenciling on flight cases, and xerox photocopiers. Features the iconic disk-crest silhouette intersected by a punk bolt cut.",
    specGeo: "Distressed Stencil & Beak Notch",
    defaultPhoto: "IMG_9374.jpg",
    albumTitle: "EL LEK URBANO (LIVE IN BERLIN)",
    filterName: "Direction A: Risograph Duotone (Scarlet & Carbon)"
  },

  b: {
    id: "b",
    name: "Tropical Post-Punk",
    subtitle: "Neon Brass / Saturated Glow / Modern Festival",
    conceptTag: "DIRECTION B &bull; CONTEMPORARY FESTIVAL FORCE",
    lead: "A high-octane celebration of modern Latin ska and brass culture. Saturated stage neon, deep velvety blacks, and electric scarlet accents built for massive international festival stages like Primavera Sound, Roskilde, and Boomtown.",
    birdMetaphor: "Captures the Tunqui's blindingly bright plumage under electric spotlights. Combining the warmth of horn metal, deep tropical moisture, and modern European club illumination.",
    attributes: [
      { label: "Sonic Energy", val: "Euphoric Brass Groove" },
      { label: "Aesthetic", val: "Neon Stage Saturation" },
      { label: "Typography", val: "Dynamic Neo-Grotesque" },
      { label: "Target Stage", val: "Primavera, Roskilde, Lido" }
    ],
    palette: [
      { name: "Electric Tunqui Red", role: "Primary Neon", hex: "#FF1E27" },
      { name: "Midnight Stage", role: "Concert Black", hex: "#08090E" },
      { name: "Brass Amber", role: "Horn Warmth", hex: "#FFAA00" },
      { name: "Cyan Spark", role: "Accent Glow", hex: "#00E5FF" },
      { name: "Pure White", role: "Editorial Type", hex: "#FFFFFF" }
    ],
    typeDisplay: "Syne / Outfit (Italic Neo-Grotesque)",
    typeSub: "Outfit 800 Bold",
    typeBody: "Inter / Plus Jakarta Sans",
    headlineDemo: "TUNKOW: HIGH ENERGY BRASS TOUR",
    subDemo: "PRIMAVERA SOUND &bull; PARC DEL FÒRUM &bull; MAIN STAGE",
    bodyDemo: "A tsunami of brass harmony and infectious ska groove. 9 musicians driving thousands into a kinetic frenzy under the Mediterranean and Berlin summer skies.",
    crestTitle: "The Aerodynamic Horn Crest",
    crestDesc: "A streamlined crest silhouette with three soundwave plumage blades radiating outward like sound waves erupting from a trumpet bell.",
    specGeo: "Aerodynamic Soundwave Blades",
    defaultPhoto: "IMG_9560.jpg",
    albumTitle: "FIEBRE ROJA &bull; SUMMER SESSIONS",
    filterName: "Direction B: Neon Stage Saturation"
  },

  c: {
    id: "c",
    name: "Andean Modernist",
    subtitle: "Geometric Crest / Swiss Grid / Monolith",
    conceptTag: "DIRECTION C &bull; ARCHITECTURAL & TIMELESS",
    lead: "Museum-grade modernism inspired by pre-Columbian Andean monoliths and Swiss International Style. Monochromatic high-contrast photography disrupted by a single surgical scarlet graphic cut. Pure distinction and permanence.",
    birdMetaphor: "The Tunqui distilled down to its fundamental geometric archetype: the sacred circle of its crest, balanced with architectural weight and pristine negative space.",
    attributes: [
      { label: "Sonic Energy", val: "Latin Avant-Garde Ska" },
      { label: "Aesthetic", val: "Swiss Minimalist Grid" },
      { label: "Typography", val: "Geometric Monolith" },
      { label: "Target Stage", val: "Philharmonie, Jazzfest, ECM" }
    ],
    palette: [
      { name: "Cinnabar Blood", role: "Surgical Accent", hex: "#D81616" },
      { name: "Basalt Monolith", role: "Obsidian Base", hex: "#0C0D0F" },
      { name: "Andean Mist Grey", role: "Secondary", hex: "#9A9FA8" },
      { name: "Chalk White", role: "Negative Space", hex: "#FAFAFA" },
      { name: "Deep Charcoal", role: "Surface", hex: "#141518" }
    ],
    typeDisplay: "Unbounded (Wide Architectural Sans)",
    typeSub: "Space Grotesk (700 Geometric)",
    typeBody: "Plus Jakarta Sans (Balanced Sans)",
    headlineDemo: "T U N K O W &bull; ARCHITECTURE OF RHYTHM",
    subDemo: "SERIES 01: RECORDED AT HANSA STUDIOS BERLIN",
    bodyDemo: "Every note deliberate. Every brass blast structured with architectural precision. An ancient Andean spirit codified through modern European vanguard design.",
    crestTitle: "The Pure Circular Crest Emblem",
    crestDesc: "A circle intersecting an arc with a sharp diagonal beak cut. Minimal, timeless, and immediately recognizable at any scale from 16px to massive festival banners.",
    specGeo: "Golden Ratio Concentric Disc",
    defaultPhoto: "IMG_9446.jpg",
    albumTitle: "TUNKOW &bull; OPUS 01",
    filterName: "Direction C: Monolith B&W + Surgical Red"
  }
};

// 4. APPLICATION STATE
let state = {
  currentDir: "c",
  currentSection: "overview",
  currentMockTab: "poster",
  selectedPhoto: "IMG_9446.jpg",
  galleryFilter: "all",
  galleryLayout: "masonry",
  photosList: [...PHOTOS],
  adjustments: {
    grain: 70,
    red: 100,
    contrast: 120
  }
};

// 5. INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  initDirectionButtons();
  initSubnavPills();
  initMockupTabs();
  initMockupControls();
  initGalleryControls();
  initLightbox();
  initCompareMatrix();
  initSvgDownload();
  initThemeToggle();

  // Populate Photo Select in Mockup controls
  populateMockupPhotoSelect();

  // Render initial direction
  renderDirection(state.currentDir);

  // Render Photo Gallery
  renderGallery();
});

// --------------------------------------------------------------------------
// Core Direction Switcher & Rendering
// --------------------------------------------------------------------------
function initDirectionButtons() {
  document.querySelectorAll(".dir-tab[data-dir]").forEach(btn => {
    btn.addEventListener("click", () => {
      const dir = btn.dataset.dir;
      setDirection(dir);
    });
  });

  const compareTab = document.querySelector(".compare-tab");
  if (compareTab) {
    compareTab.addEventListener("click", () => {
      openCompareMatrix();
    });
  }
}

function setDirection(dirKey) {
  if (!DIRECTIONS[dirKey]) return;
  state.currentDir = dirKey;
  document.documentElement.setAttribute("data-direction", dirKey);

  // Update header tab active states
  document.querySelectorAll(".dir-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.dir === dirKey);
  });

  // Default photo for direction if user hasn't explicitly customized
  state.selectedPhoto = DIRECTIONS[dirKey].defaultPhoto;
  document.getElementById("mockupPhotoSelect").value = state.selectedPhoto;

  renderDirection(dirKey);
  renderGallery();
}

function renderDirection(dirKey) {
  const data = DIRECTIONS[dirKey];
  const logos = LOGOS[dirKey];

  // Update header title styling
  const appBrandTitle = document.getElementById("appBrandTitle");
  if (appBrandTitle) {
    appBrandTitle.style.fontFamily = `var(--font-display)`;
  }

  // Update Mini Crest in Header
  const miniCrest = document.getElementById("miniCrest");
  if (miniCrest) miniCrest.innerHTML = logos.crest;

  // Subnav Badge
  const badgeText = document.getElementById("badgeText");
  if (badgeText) badgeText.textContent = `Direction ${dirKey.toUpperCase()} Active: ${data.name}`;

  // DNA Section
  document.getElementById("dirConceptTag").innerHTML = data.conceptTag;
  document.getElementById("dirTitle").textContent = data.name;
  document.getElementById("dirLead").textContent = data.lead;
  document.getElementById("birdMetaphorText").textContent = data.birdMetaphor;
  document.getElementById("dnaBirdBox").innerHTML = logos.crest;

  // Attributes
  const attrBox = document.getElementById("dirAttributes");
  attrBox.innerHTML = data.attributes.map(a => `
    <div class="attr-box">
      <span class="attr-label">${a.label}</span>
      <span class="attr-val">${a.val}</span>
    </div>
  `).join("");

  // Color Swatches
  const paletteGrid = document.getElementById("paletteGrid");
  paletteGrid.innerHTML = data.palette.map(p => `
    <div class="swatch-item" onclick="copyHex('${p.hex}')" title="Click to copy ${p.hex}">
      <div class="swatch-color" style="background-color: ${p.hex};"></div>
      <div class="swatch-info">
        <span class="swatch-role">${p.role}</span>
        <span class="swatch-name">${p.name}</span>
        <span class="swatch-hex">${p.hex}</span>
      </div>
    </div>
  `).join("");

  // Typography Hierarchy
  document.getElementById("typeHeadlineDemo").innerHTML = data.headlineDemo;
  document.getElementById("typeSubDemo").innerHTML = data.subDemo;
  document.getElementById("typeBodyDemo").innerHTML = data.bodyDemo;
  document.getElementById("typeFontDisplayInfo").textContent = data.typeDisplay;
  document.getElementById("typeFontSubInfo").textContent = data.typeSub;
  document.getElementById("typeFontBodyInfo").textContent = data.typeBody;

  // Logos Section
  document.getElementById("activeLogoRender").innerHTML = logos.wordmark;
  document.getElementById("variantDark").innerHTML = logos.wordmark;
  document.getElementById("variantRed").innerHTML = logos.wordmark;
  document.getElementById("variantLight").innerHTML = logos.wordmark;

  // Photo variant background
  const photoCard = document.getElementById("variantPhotoCard");
  photoCard.style.backgroundImage = `url('thumbnails/${state.selectedPhoto}')`;
  document.getElementById("variantPhoto").innerHTML = logos.wordmark;

  // Crest Breakdown
  document.getElementById("crestLargeDisplay").innerHTML = logos.crest;
  document.getElementById("crestNameTitle").textContent = data.crestTitle;
  document.getElementById("crestExplanation").textContent = data.crestDesc;
  document.getElementById("specGeometry").textContent = data.specGeo;

  // Mockups: Poster
  updatePosterMockup();

  // Mockups: Vinyl
  updateVinylMockup();

  // Mockups: Website
  updateWebsiteMockup();

  // Merch Studio
  updateMerchStudio();

  // Filter Name in Gallery
  document.getElementById("filterNameDisplay").textContent = data.filterName;
}

// --------------------------------------------------------------------------
// Sub-navigation Pills
// --------------------------------------------------------------------------
function initSubnavPills() {
  document.querySelectorAll(".subnav-pills .pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".subnav-pills .pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");

      const targetSec = pill.dataset.section;
      state.currentSection = targetSec;

      document.querySelectorAll(".studio-section").forEach(sec => {
        sec.classList.remove("active");
      });
      const activeEl = document.getElementById(`sec-${targetSec}`);
      if (activeEl) activeEl.classList.add("active");
    });
  });
}

// --------------------------------------------------------------------------
// Mockup Tabs & Updates
// --------------------------------------------------------------------------
function initMockupTabs() {
  document.querySelectorAll(".mock-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".mock-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const mock = tab.dataset.mock;
      state.currentMockTab = mock;

      document.querySelectorAll(".mock-panel").forEach(p => p.classList.remove("active"));
      if (mock === "poster") document.getElementById("mockPanelPoster").classList.add("active");
      if (mock === "vinyl") document.getElementById("mockPanelVinyl").classList.add("active");
      if (mock === "website") document.getElementById("mockPanelWebsite").classList.add("active");
    });
  });
}

function initMockupControls() {
  const photoSelect = document.getElementById("mockupPhotoSelect");
  photoSelect.addEventListener("change", (e) => {
    state.selectedPhoto = e.target.value;
    updateAllMockupPhotos();
  });

  document.getElementById("btnShuffleMockupPhoto").addEventListener("click", () => {
    const randomIdx = Math.floor(Math.random() * PHOTOS.length);
    state.selectedPhoto = PHOTOS[randomIdx].filename;
    photoSelect.value = state.selectedPhoto;
    updateAllMockupPhotos();
  });

  // Poster Inputs
  document.getElementById("inputVenue").addEventListener("input", (e) => {
    document.getElementById("posterVenue").textContent = e.target.value.toUpperCase();
  });
  document.getElementById("inputDate").addEventListener("input", (e) => {
    document.getElementById("posterDateTop").textContent = e.target.value.toUpperCase();
  });
  document.getElementById("inputTagline").addEventListener("input", (e) => {
    document.getElementById("posterSubtag").textContent = e.target.value.toUpperCase();
  });

  document.getElementById("btnExportPosterPng").addEventListener("click", () => {
    window.print();
  });
}

function populateMockupPhotoSelect() {
  const sel = document.getElementById("mockupPhotoSelect");
  sel.innerHTML = PHOTOS.map(p => `
    <option value="${p.filename}">${p.filename} (${p.aspect.toUpperCase()})</option>
  `).join("");
}

function updateAllMockupPhotos() {
  updatePosterMockup();
  updateVinylMockup();
  updateWebsiteMockup();
  // also update logo photo card
  const photoCard = document.getElementById("variantPhotoCard");
  if (photoCard) {
    photoCard.style.backgroundImage = `url('thumbnails/${state.selectedPhoto}')`;
  }
}

function updatePosterMockup() {
  const logos = LOGOS[state.currentDir];
  const bg = document.getElementById("posterBgImg");
  if (bg) {
    bg.style.backgroundImage = `url('thumbnails/${state.selectedPhoto}')`;
  }
  const logoArea = document.getElementById("posterLogoArea");
  if (logoArea) {
    logoArea.innerHTML = logos.wordmark;
  }
}

function updateVinylMockup() {
  const logos = LOGOS[state.currentDir];
  const data = DIRECTIONS[state.currentDir];

  const sleeveArt = document.getElementById("vinylSleeveArt");
  if (sleeveArt) {
    sleeveArt.style.backgroundImage = `url('thumbnails/${state.selectedPhoto}')`;
  }

  const sleeveCrest = document.getElementById("sleeveCrest");
  if (sleeveCrest) sleeveCrest.innerHTML = logos.crest;

  const vinylCrest = document.getElementById("vinylCrest");
  if (vinylCrest) vinylCrest.innerHTML = logos.crest;

  document.getElementById("sleeveAlbumTitle").textContent = data.albumTitle;
}

function updateWebsiteMockup() {
  const logos = LOGOS[state.currentDir];
  const data = DIRECTIONS[state.currentDir];

  const webBg = document.getElementById("webHeroBg");
  if (webBg) {
    webBg.style.backgroundImage = `url('thumbnails/${state.selectedPhoto}')`;
  }

  const webBrand = document.getElementById("webNavBrand");
  if (webBrand) {
    webBrand.innerHTML = logos.badge;
  }

  const webTitle = document.getElementById("webHeroTitle");
  if (webTitle) {
    webTitle.textContent = "TUNKOW";
    webTitle.style.fontFamily = `var(--font-display)`;
  }

  document.getElementById("webHeroDesc").textContent = data.lead;
}

function updateMerchStudio() {
  const logos = LOGOS[state.currentDir];
  document.getElementById("teeBlackPrint").innerHTML = logos.crest + `<div style="font-family: var(--font-display); font-size: 1.4rem; color: #FFF; margin-top: 6px;">TUNKOW</div>`;
  document.getElementById("teeWhitePrint").innerHTML = logos.crest + `<div style="font-family: var(--font-display); font-size: 1.4rem; color: #000; margin-top: 6px;">TUNKOW</div>`;
  document.getElementById("totePrint").innerHTML = logos.crest + `<div style="font-family: var(--font-display); font-size: 1.2rem; color: #111; margin-top: 4px;">TUNKOW</div>`;
  document.getElementById("pinBadge").innerHTML = logos.crest;
  document.getElementById("dieCutSticker").innerHTML = logos.crest;
}

// --------------------------------------------------------------------------
// 30-Photo Gallery & Real-Time Grading Lab
// --------------------------------------------------------------------------
function initGalleryControls() {
  // Filter pills
  document.querySelectorAll(".g-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".g-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      state.galleryFilter = pill.dataset.filter;
      renderGallery();
    });
  });

  // Shuffle button
  document.getElementById("btnShufflePhotos").addEventListener("click", () => {
    // Fisher-Yates shuffle
    for (let i = state.photosList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [state.photosList[i], state.photosList[j]] = [state.photosList[j], state.photosList[i]];
    }
    renderGallery();
  });

  // Layout toggles
  document.querySelectorAll(".l-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".l-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const layout = btn.dataset.layout;
      state.galleryLayout = layout;

      const grid = document.getElementById("moodboardGrid");
      grid.className = `moodboard-grid layout-${layout}`;
    });
  });

  // Adjustment Sliders
  const sliderGrain = document.getElementById("sliderGrain");
  const sliderRed = document.getElementById("sliderRed");
  const sliderContrast = document.getElementById("sliderContrast");

  const applySliders = () => {
    state.adjustments.grain = sliderGrain.value;
    state.adjustments.red = sliderRed.value;
    state.adjustments.contrast = sliderContrast.value;

    const satVal = (sliderRed.value / 100).toFixed(2);
    const contVal = (sliderContrast.value / 100).toFixed(2);

    let filterExpr = "";
    if (state.currentDir === "a") {
      filterExpr = `contrast(${contVal}) grayscale(0.2) saturate(${satVal}) drop-shadow(0 0 1px rgba(230,36,25,0.4))`;
    } else if (state.currentDir === "b") {
      filterExpr = `saturate(${satVal * 1.3}) contrast(${contVal}) brightness(1.05)`;
    } else {
      filterExpr = `grayscale(1) contrast(${contVal * 1.15}) brightness(0.9)`;
    }

    document.documentElement.style.setProperty("--filter-photo", filterExpr);
  };

  sliderGrain.addEventListener("input", applySliders);
  sliderRed.addEventListener("input", applySliders);
  sliderContrast.addEventListener("input", applySliders);

  document.getElementById("btnResetAdjust").addEventListener("click", () => {
    sliderGrain.value = 70;
    sliderRed.value = 100;
    sliderContrast.value = 120;
    applySliders();
  });
}

function renderGallery() {
  const grid = document.getElementById("moodboardGrid");
  if (!grid) return;

  const filtered = state.photosList.filter(p => {
    if (state.galleryFilter === "landscape") return p.aspect === "landscape";
    if (state.galleryFilter === "portrait") return p.aspect === "portrait";
    return true;
  });

  grid.innerHTML = filtered.map((p, idx) => `
    <div class="photo-card ${p.aspect === 'landscape' ? 'is-landscape' : ''}" onclick="openLightbox('${p.filename}', '${p.aspect}', ${p.w}, ${p.h})">
      <img src="${p.thumb}" alt="Tunkow Concert ${p.filename}" class="photo-card-img" loading="lazy">
      <div class="photo-card-overlay">
        <span class="card-num">${p.filename}</span>
        <span class="card-badge">${p.tag.toUpperCase()}</span>
      </div>
    </div>
  `).join("");
}

// --------------------------------------------------------------------------
// Lightbox Modal
// --------------------------------------------------------------------------
let currentLbPhoto = "";

function initLightbox() {
  const modal = document.getElementById("lightboxModal");
  document.getElementById("btnCloseLightbox").addEventListener("click", () => modal.close());

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.close();
  });

  document.getElementById("lbSetPoster").addEventListener("click", () => {
    state.selectedPhoto = currentLbPhoto;
    document.getElementById("mockupPhotoSelect").value = currentLbPhoto;
    updatePosterMockup();
    showToast(`Set ${currentLbPhoto} as Gig Poster Photo!`);
    modal.close();
  });

  document.getElementById("lbSetVinyl").addEventListener("click", () => {
    state.selectedPhoto = currentLbPhoto;
    document.getElementById("mockupPhotoSelect").value = currentLbPhoto;
    updateVinylMockup();
    showToast(`Set ${currentLbPhoto} as Vinyl Sleeve Photo!`);
    modal.close();
  });

  document.getElementById("lbSetWeb").addEventListener("click", () => {
    state.selectedPhoto = currentLbPhoto;
    document.getElementById("mockupPhotoSelect").value = currentLbPhoto;
    updateWebsiteMockup();
    showToast(`Set ${currentLbPhoto} as Website Hero Photo!`);
    modal.close();
  });
}

window.openLightbox = function(filename, aspect, w, h) {
  currentLbPhoto = filename;
  const modal = document.getElementById("lightboxModal");
  const img = document.getElementById("lightboxImg");
  img.src = `thumbnails/${filename}`;
  document.getElementById("lbFilename").textContent = filename;
  document.getElementById("lbDimensions").textContent = `${w} × ${h} px (${aspect.toUpperCase()})`;
  document.getElementById("lbOpenOriginal").href = filename;
  modal.showModal();
};

// --------------------------------------------------------------------------
// 3-Way Comparison Matrix View
// --------------------------------------------------------------------------
function initCompareMatrix() {
  document.getElementById("btnCloseCompare").addEventListener("click", () => {
    closeCompareMatrix();
  });

  document.querySelectorAll(".select-dir-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const chosen = btn.dataset.choose;
      setDirection(chosen);
      closeCompareMatrix();
    });
  });
}

function openCompareMatrix() {
  document.getElementById("mainStudio").style.display = "none";
  document.getElementById("compareView").style.display = "block";

  // Render 3 columns
  document.getElementById("compareLogoA").innerHTML = LOGOS.a.wordmark;
  document.getElementById("compareLogoB").innerHTML = LOGOS.b.wordmark;
  document.getElementById("compareLogoC").innerHTML = LOGOS.c.wordmark;

  // Swatches
  renderCompareSwatches("compareSwatchesA", DIRECTIONS.a.palette);
  renderCompareSwatches("compareSwatchesB", DIRECTIONS.b.palette);
  renderCompareSwatches("compareSwatchesC", DIRECTIONS.c.palette);

  // Photos using the same selected photo for true comparison
  const photoA = document.getElementById("comparePhotoA");
  const photoB = document.getElementById("comparePhotoB");
  const photoC = document.getElementById("comparePhotoC");

  const sampleUrl = `url('thumbnails/${state.selectedPhoto}')`;
  photoA.style.backgroundImage = sampleUrl;
  photoB.style.backgroundImage = sampleUrl;
  photoC.style.backgroundImage = sampleUrl;
}

function closeCompareMatrix() {
  document.getElementById("compareView").style.display = "none";
  document.getElementById("mainStudio").style.display = "block";
}

function renderCompareSwatches(containerId, palette) {
  const container = document.getElementById(containerId);
  container.innerHTML = palette.map(p => `
    <div style="flex: 1; background-color: ${p.hex};" title="${p.name} (${p.hex})"></div>
  `).join("");
}

// --------------------------------------------------------------------------
// Utilities: Copy HEX & SVG Download
// --------------------------------------------------------------------------
window.copyHex = function(hex) {
  navigator.clipboard.writeText(hex).then(() => {
    showToast(`Copied ${hex} to clipboard!`);
  }).catch(() => {
    showToast(`Color: ${hex}`);
  });
};

function showToast(msg) {
  const toast = document.getElementById("toastNotice");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

function initSvgDownload() {
  const btn = document.getElementById("btnDownloadLogoSvg");
  btn.addEventListener("click", () => {
    const activeSvg = LOGOS[state.currentDir].wordmark;
    const blob = new Blob([activeSvg], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `tunkow_logo_direction_${state.currentDir}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Downloaded Direction ${state.currentDir.toUpperCase()} Logo SVG!`);
  });
}

function initThemeToggle() {
  const btn = document.getElementById("btnToggleTheme");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    if (isLight) {
      document.documentElement.removeAttribute("data-theme");
      document.getElementById("themeIcon").textContent = "☀️";
      document.getElementById("themeLabel").textContent = "Light Gallery";
      showToast("Dark Stage Mode Activated");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      document.getElementById("themeIcon").textContent = "🌙";
      document.getElementById("themeLabel").textContent = "Dark Stage";
      showToast("Light Editorial Gallery Mode Activated");
    }
  });
}

