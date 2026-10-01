# TUNKOW — Official Band Website & Brand Identity
> **Latin Ska & Brass Vanguard from Berlin**  
> *Rebranding evolution from Bodgo Skatz &rarr; TUNKOW*

---

## 🏛️ Brand Identity: Andean Modernism (Option C)

- **The Tunqui Metaphor:** *Tunkow* derives from the **Tunqui** (*Rupicola peruvianus*, the Andean Cock-of-the-rock), Peru's national bird. Known for its intense scarlet disc crest and hypnotic communal mating dances (*leks*) in the Andean cloud forests, it represents the exact live frequency of this 9-piece brass ensemble: explosive, synchronized, and impossible to ignore.
- **Visual Language:** Architectural, minimalist, high contrast. Combines Swiss International Style grid precision with the raw, sweaty energy of Berlin live venues.
- **Luminous Light Gallery Balance:** Designed to thrive on crisp gallery white (`#FAFAFA`) as well as stage basalt black (`#0C0D0F`), highlighted with surgical **Tunqui Scarlet (`#D81616`)**.

---

## 🎨 Master Color Palette & Design Tokens

```css
--tunkow-red-cinnabar:  #D81616; /* Primary Accent / Surgical Strike */
--tunkow-black-basalt:  #0C0D0F; /* Midnight Stage & Obsidian */
--tunkow-black-surface: #141518; /* Surface Panel Container */
--tunkow-grey-mist:     #9A9FA8; /* Metadata / Venue Dates / Subheads */
--tunkow-white-chalk:   #FAFAFA; /* Crisp Typographic Negative Space */
```

### Typography Hierarchy
* **Display / Brand Headline:** `Unbounded` (800 ExtraBold, wide tracking)
* **Subtitles & Navigation:** `Space Grotesk` (700 Bold, uppercase)
* **Body & Press Bios:** `Plus Jakarta Sans` (400 Regular / 600 SemiBold)
* **Metadata & Tour Dates:** `Space Mono` (700 Monospace)

---

## 📁 Repository Structure

```
├── assets/
│   ├── tunkow-logo.svg           # Primary architectural wordmark
│   ├── tunkow-crest.svg          # Tunqui circular disc crest emblem
│   ├── tokens.css                # CSS variables for web and apps
│   └── tunkow-brand-tokens.json  # Design tokens (HEX, RGB, CMYK, Pantone)
├── thumbnails/                   # Web-optimized concert photography (1200px)
├── photos.json                   # Photography catalog & metadata
├── index.html                    # Interactive Brand Direction & Moodboard Studio
├── styles.css                    # Studio styling with Light/Dark Gallery modes
├── app.js                        # Studio interactive logic & live photo grading
└── IMG_*.jpg                     # Original 30 full-resolution band concert photos
```

---

## 🚀 Lovable.dev Integration Guide

To import and build with **Lovable.dev**:
1. Connect your GitHub account and select this repository: `https://github.com/Tavinsky1/TUNKOW`.
2. Use the **Lovable Master Prompt** located in [`LOVABLE_PROMPT.md`](./LOVABLE_PROMPT.md) to generate full-stack components (Audio Player, Tour Date Dispatch, 9-Piece Musician Roster, Merch Preview, and EPK).
3. The repo's vector SVGs in `assets/` and photos in `thumbnails/` are ready to be referenced directly.
