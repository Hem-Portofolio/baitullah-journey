---
name: Majestic Sanctuary
colors:
  surface: '#fff8f6'
  surface-dim: '#f8d2c4'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ec'
  surface-container: '#ffe9e2'
  surface-container-high: '#ffe2d8'
  surface-container-highest: '#ffdbce'
  on-surface: '#2a170f'
  on-surface-variant: '#3f4942'
  inverse-surface: '#422b22'
  inverse-on-surface: '#ffede7'
  outline: '#6f7a71'
  outline-variant: '#bfc9bf'
  surface-tint: '#1b6b45'
  primary: '#005231'
  on-primary: '#ffffff'
  primary-container: '#1b6b45'
  on-primary-container: '#9be9b9'
  inverse-primary: '#8ad7a8'
  secondary: '#7e5700'
  on-secondary: '#ffffff'
  secondary-container: '#fec564'
  on-secondary-container: '#765100'
  tertiary: '#484642'
  on-tertiary: '#ffffff'
  tertiary-container: '#605e59'
  on-tertiary-container: '#dcd8d1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a5f3c3'
  primary-fixed-dim: '#8ad7a8'
  on-primary-fixed: '#002111'
  on-primary-fixed-variant: '#005231'
  secondary-fixed: '#ffdeac'
  secondary-fixed-dim: '#f5bd5d'
  on-secondary-fixed: '#281900'
  on-secondary-fixed-variant: '#604100'
  tertiary-fixed: '#e7e2db'
  tertiary-fixed-dim: '#cac6bf'
  on-tertiary-fixed: '#1d1c17'
  on-tertiary-fixed-variant: '#494742'
  background: '#fff8f6'
  on-background: '#2a170f'
  surface-variant: '#ffdbce'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  grid-margin: 24px
  grid-gutter: 24px
---

## Brand & Style

The design system is centered on the concept of "Sacred Hospitality." It balances the profound spiritual significance of the Umrah and Hajj pilgrimage with the high-touch service of a premium travel agency. The brand personality is serene, authoritative, and deeply respectful, catering to a discerning Indonesian clientele who seek both religious fulfillment and physical comfort.

The visual style is **Luxury Modern**, blending classical Islamic aesthetics with contemporary UI precision. It utilizes heavy whitespace, intentional high-contrast serif typography, and subtle ornamental details to create an atmosphere of tranquility and trust. Every interaction should feel deliberate and graceful, moving away from the cluttered layouts often found in travel booking to a more curated, editorial experience.

## Colors

The palette is rooted in the "Deep Forest Green," symbolizing both the Islamic faith and life. This is complemented by "Burnished Gold," used exclusively for high-value actions and premium indicators to maintain its perceived worth.

- **Primary (Deep Forest Green):** Used for navigation bars, headers, and primary branding elements. It provides a grounding, spiritual foundation.
- **Accent (Burnished Gold):** Reserved for Call-to-Action (CTA) buttons, active states, and decorative borders.
- **Background (Soft Cream):** The primary canvas for the application. It is softer on the eyes than pure white and enhances the "premium" feel.
- **Neutral (Ebony Brown):** Used for all body text and headings to ensure maximum legibility while maintaining a warmer, more organic tone than pure black.

## Typography

This design system uses a sophisticated typographic scale that pairs the grace of **Playfair Display** with the modern efficiency of **Montserrat**.

- **Headlines:** Use Playfair Display for all headings (H1-H4). It communicates heritage and tradition. Use "Display" sizes for hero sections with tight letter spacing.
- **Body Text:** Use Montserrat for all long-form content, descriptions, and lists. Its geometric clarity ensures that logistical details are easy to read.
- **Labels & Captions:** Use Montserrat in semi-bold or bold weights with slight tracking (letter-spacing) for a professional, organized look on buttons and metadata.

## Layout & Spacing

The design system employs a **12-column Fixed Grid** for desktop (max-width: 1280px) and a **4-column Fluid Grid** for mobile. 

The layout philosophy emphasizes "Breathable Luxury." Large vertical gaps (120px on desktop) separate distinct service offerings to prevent the user from feeling overwhelmed. Padding within cards and containers should be generous (minimum 32px) to maintain a sense of space. Elements should often be centered to create a formal, symmetrical composition typical of Islamic architecture.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Soft Ambient Shadows**. 

1.  **Base Layer:** The Cream background (#F8F3EC).
2.  **Surface Layer:** White or slightly lighter cream cards use a very soft, diffused shadow (15% opacity of Dark Brown) to appear as if resting gently on the surface.
3.  **Accent Depth:** Components like "Package Cards" feature a 1px Gold border to distinguish them from standard informational content.
4.  **Backdrop Blurs:** Use subtle background blurs on navigation bars to maintain context of the photography beneath while ensuring the Green/Gold elements remain legible.

## Shapes

The shape language combines the stability of rectangles with the softness of **rounded corners (8px default)**. This prevents the UI from feeling too sharp or clinical. 

A unique "Sacred Motif" shape should be used for image masks or icon containers—specifically an 8-pointed star (Khatim) or a soft pointed arch (Mihrab) silhouette. These should be used sparingly to frame the most important visual content, such as the Prophet's Mosque or the Kaaba.

## Components

- **Primary Buttons:** Solid Burnished Gold (#C9963A) with Dark Brown text. These should have a slight "lift" on hover to feel tactile.
- **Secondary Buttons:** Transparent background with a 1px Dark Green border and Green text.
- **Package Cards:** Cream background, 1px Gold border, and a soft shadow. The price should be prominently displayed in Playfair Display.
- **Stats Bar:** A full-width Deep Green strip with Gold-tinted icons and White/Gold text for key metrics (e.g., "10,000+ Pilgrims").
- **Input Fields:** Minimalist style with a bottom-only border in Dark Brown (20% opacity), shifting to a Gold border on focus.
- **Dividers:** Use thin, horizontal lines with a centered Islamic geometric motif (arabesque) in 10% opacity Gold to separate major page sections.
- **Chips/Badges:** Small, pill-shaped tags used for "Limited Seats" or "VIP" indicators, utilizing the Primary Green with Gold text.