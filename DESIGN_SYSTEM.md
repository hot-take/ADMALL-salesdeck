# American Dream Design System — "Elegant Luminescence"

This document serves as the source of truth for the design language of the American Dream Interactive Sales Deck. Every update to the codebase should adhere to these principles to maintain a consistent, premium, and sophisticated user experience.

## 1. Core Philosophy: "Elegant Luminescence"
The design should feel **light, airy, and high-end**. It avoids heavy shadows and dark blocks in favor of transparency, subtle glows, and refined typography. It is inspired by modern luxury retail and high-end editorial design.

---

## 2. Color Palette

### Primary Colors
| Color | Hex | Usage |
| :--- | :--- | :--- |
| **Pristine White** | `#FFFFFF` | Main backgrounds, cards, and modal containers. |
| **Champagne Gold** | `#B5945F` | Primary accent, highlights, call-to-action borders, and emphasized text. |
| **Slate Blue** | `#3E5C76` | Secondary accent, used for subtle data points or alternate tags. |

### Neutrals
| Color | Hex | Usage |
| :--- | :--- | :--- |
| **Onyx** | `#1A1A1A` | Primary headings and important body text. |
| **Steel** | `#555555` | Secondary body text and labels. |
| **Mist** | `#999999` | Muted information, captions, and disabled states. |
| **Glass** | `rgba(255, 255, 255, 0.7)` | Backdrop for frosted glass components. |

---

## 3. Typography

### Headings: EB Garamond
- **Style**: Serif, Classical, Sophisticated.
- **Usage**: Main titles (`h1`, `h2`), large hero statements.
- **Attributes**: `font-weight: 400`, `letter-spacing: 0.02em` to `0.05em`.
- **Special**: Use *Italics* for emphasis to add an editorial feel.

### Body & UI: Manrope
- **Style**: Sans-Serif, Modern, Clean.
- **Usage**: Paragraphs, navigation, buttons, and labels.
- **Weights**: 
    - `300 (Light)`: Main body text for readability.
    - `500 (Medium)`: Buttons and navigation.
    - `700 (Bold)`: Small labels and numbers.
- **Letter Spacing**: `0.1em` to `0.25em` for all-caps UI elements (eyebrows, navigation).

---

## 4. UI Components & Patterns

### 4.1 Glassmorphism
- Use `backdrop-filter: blur(15px)` for headers, sidebars, and modals.
- Backgrounds should be semi-transparent white: `rgba(255, 255, 255, 0.8)`.

### 4.2 Borders & Lines
- Keep lines extremely thin: `1px solid rgba(0, 0, 0, 0.06)`.
- Avoid heavy borders. Gold borders should be used sparingly for primary actions.

### 4.3 Cards & Grids
- **Padding**: Generous whitespace.
- **Shadows**: Avoid large, dark shadows. Use extremely soft, wide-dispersion shadows: `box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03)`.
- **Transitions**: Every interaction (hover, click) should have a smooth transition (`0.6s cubic-bezier(0.2, 0, 0.2, 1)`).

### 4.4 Buttons
- **Primary**: All-caps, tracked-out text. Thin border or solid soft black.
- **Secondary**: Gold border, transparent background, white text on hover.

---

## 5. Animation Principles
1. **Staggered Entry**: Content should slide up and fade in sequentially (GSAP staggers).
2. **Smooth Parallax**: Background images should have a subtle scale or translation effect on scroll.
3. **Micro-interactions**: Subtle hover states (scaling arrows, shifting text) to provide feedback without being distracting.

---

## 6. Interaction Rules
- **Scroll**: Use the custom scroll progress bar to give the user a sense of location.
- **Navigation**: The sidebar should be easily accessible but hidden by default to keep the interface clean.
- **Modals**: Use for deep-dives into specific attractions or brands to keep the main deck focused.
