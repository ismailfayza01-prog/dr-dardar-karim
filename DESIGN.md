# High-End Dental Management Design System: The Editorial Clinic

This design system is a bespoke visual language crafted for a high-end dental management platform in the Moroccan market. It merges the clinical precision of a modern medical practice with the refined hospitality of a 5-star Marrakech riad.

---

## 1. Creative North Star: "The Digital Concierge"
The "Digital Concierge" philosophy treats every pixel as a high-touch service point. We move away from the "software-as-a-grid" approach and toward an editorial experience. 

**The Aesthetic Pillar:**
- **Intentional Asymmetry:** Use the spacing scale to create rhythmic imbalances (e.g., a wide left margin for Arabic typography vs. a compact action cluster) to feel custom-built, not templated.
- **Cinematic Pacing:** Large `display` type and generous `16` or `20` spacing units create a sense of calm and authority, mirroring the quiet halls of a luxury clinic.
- **Bi-Directional Elegance:** Whether in French (LTR) or Arabic (RTL), the layout maintains its visual weight and prestige through fluid, token-based positioning.

---

## 2. Color & Atmospheric Theory
We utilize a sophisticated palette where "Teal" represents medical trust and "Gold" represents the premium nature of the service.

### The "No-Line" Rule
**Standard 1px borders are strictly prohibited for sectioning.** To separate a sidebar from a main content area, or a card from a background, use tonal shifts:
- Place a `surface_container_low` element on a `surface` background.
- Use `surface_container_highest` for interactive hover states.
*Lines create visual noise; tonal shifts create depth.*

### Surface Hierarchy & Nesting
Treat the interface as a series of stacked, fine papers.
1.  **Level 0 (Base):** `surface` (#fbf9f8) – The foundation.
2.  **Level 1 (Sections):** `surface_container_low` (#f6f3f2) – Used for grouping secondary content.
3.  **Level 2 (Active Cards):** `surface_container_lowest` (#ffffff) – Reserved for the most important data points to make them "pop" against the off-white base.

### The Glass & Gradient Rule
For "floating" elements like modal headers or top navigation, use a **Glassmorphism effect**:
- **Background:** `rgba(251, 249, 248, 0.8)`
- **Backdrop Blur:** `12px`
- **Gradient Accent:** Apply a subtle linear gradient `primary` to `primary_container` on primary CTAs to avoid the "flat" look of generic SaaS.

---

## 3. Typography: Linguistic Authority
We use a dual-font strategy to handle French/Arabic with equal prestige.

| Level | Token | Font Family | Size | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Plus Jakarta Sans | 3.5rem | Hero stats, "Welcome" headers |
| **Headline**| `headline-md` | Plus Jakarta Sans | 1.75rem | Section titles, Patient names |
| **Title** | `title-sm` | Inter / System-ui | 1rem | Sub-headings, Card titles |
| **Body** | `body-md` | Inter / System-ui | 0.875rem | Main text, Medical notes |
| **Label** | `label-sm` | Inter / System-ui | 0.6875rem | Metadata, Input labels |

**Editorial Note:** For Arabic (RTL), ensure line-height is increased by 15% compared to French (LTR) to accommodate the taller script ascenders and descenders.

---

## 4. Elevation & Depth
We define hierarchy through **Tonal Layering** rather than structural scaffolding.

- **The Layering Principle:** To lift a patient record, place a `surface_container_lowest` card on a `surface_container` background.
- **Ambient Shadows:** Shadows must be felt, not seen. Use `on_surface` color at 4% opacity with a `20px` blur. 
- **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline_variant` at **15% opacity**. 
- **Corner Radii:** Use the `xl` (0.75rem) radius for main containers to soften the medical "edge," and `md` (0.375rem) for interactive elements like buttons.

---

## 5. Components: The Signature Primitives

### Buttons: The "Jeweled" Action
- **Primary:** Gradient from `primary` to `primary_container`. White text. No border.
- **Secondary:** `surface_container_highest` background with `on_surface` text.
- **Interactive States:** On hover, increase the elevation using a `surface_bright` tint rather than a shadow.

### Cards: The "Seamless" Container
- **Rule:** Forbid divider lines. 
- **Structure:** Use `spacing.6` (2rem) padding. Separate the "Header" from "Body" by using a `surface_container_low` background for the header and `surface_container_lowest` for the body. This creates a natural "tabbed" feel without lines.

### Inputs: The "Quiet" Field
- **Default:** `surface_container_low` background with a `Ghost Border` (outline-variant at 10%).
- **Focus:** Transition the background to `surface_container_lowest` and change the border to `primary` at 100% opacity.
- **Arabic Support:** Icons must flip (mirror) for RTL, while text-alignment shifts to the right.

### Custom Component: The "Cinematic Patient Timeline"
- Instead of a standard vertical line, use a series of `surface_container_high` dots.
- Active milestones use the `tertiary` (Gold) color to signify high-value events (e.g., Surgery, Consultation).

---

## 6. Do’s and Don’ts

### Do
- **Do** use `tertiary` (Gold) sparingly—only for high-prestige actions or success states.
- **Do** use `spacing.20` for margins between major sections to let the UI "breathe" like a luxury editorial.
- **Do** ensure all interactive elements have a minimum touch target of 44px, despite the "minimal" look.

### Don’t
- **Don’t** use black (#000000). Use `on_surface` (#1b1c1c) for text to maintain a softer, high-end feel.
- **Don’t** use shadows on every card. Reserve them only for floating overlays (Modals, Popovers).
- **Don’t** use "default" blue links. Use `primary` for all interactive navigation.
- **Don’t** crowd the interface. If a screen feels full, increase the `surface_container` spacing rather than adding borders.

---

## 7. Spacing & Rhythm Scale
Maintain a strict 0.35rem base unit (as per the requested scale) to ensure mathematical harmony.

- **Layout Padding:** `8` (2.75rem) or `10` (3.5rem)
- **Component Internal Gap:** `3` (1rem)
- **Inline Element Gap:** `1.5` (0.5rem)