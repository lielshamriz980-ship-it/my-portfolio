# Service Pages - Design Pattern Specification

## 🎯 Design System Overview

All 10 service pages follow a unified, professional design pattern with consistent structure, spacing, and visual hierarchy.

## 📐 Layout Architecture

### Common Page Structure

```
┌─────────────────────────────────────────────┐
│          HERO SECTION (40% height)          │
│  - Category Badge (pill, colored)           │
│  - Large RTL Title (clamp 48-88px)         │
│  - Subtitle (xl text, gray)                │
│  - Two CTAs (Primary + Outline)            │
│  - Background gradient + blur circles      │
│  - 3 Stat Cards (below, floating)          │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│      FEATURE SECTION (30% height)           │
│  - White background                         │
│  - Title (clamp 36-56px)                   │
│  - 2-4 Column Grid                         │
│  - Card items with numbers/icons           │
│  - Rounded borders, colored accents        │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│   ADDITIONAL SECTIONS (20% height each)     │
│  - Alternate white/light backgrounds       │
│  - Different grid layouts (2, 3, 4 cols)   │
│  - Mockups, case studies, features         │
│  - Diverse content per service             │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│       FINAL CTA SECTION (15% height)        │
│  - Full-width gradient background          │
│  - Large white centered text               │
│  - Primary CTA button                      │
└─────────────────────────────────────────────┘
```

## 🎨 Typography Scale

```
Hero Title:        clamp(48px, 7vw, 88px)   | font-black
Section Title:     clamp(36px, 5vw, 56px)   | font-black
Heading 3:         text-3xl                  | font-black
Heading 4:         text-lg                   | font-bold
Body Large:        text-xl                   | font-medium
Body Regular:      text-base                 | default
Body Small:        text-sm                   | default
Label/Badge:       text-sm                   | font-bold
```

## 🎯 Spacing Standards

```
Section Padding:           py-20 md:py-32        | 80-128px
Container Padding:         px-6 lg:px-10         | 24-40px
Max Container Width:       max-w-6xl             | 1152px
Card Padding:             p-8                    | 32px
Item Gap:                 gap-8                  | 32px
Small Gap:                gap-4                  | 16px
Large Gap:                gap-12                 | 48px
```

## 🎨 Color Architecture

### Primary Colors (Per Service)
- Analytics:              #2563EB (Blue)
- Intl Contracts:         #059669 (Emerald)
- Alerts:                 #F97316 (Orange)
- Security:               #DC2626 (Red)
- API:                    #3B82F6 (Blue)
- Integrations:           #0891B2 (Cyan)
- Lex AI:                 #7C3AED (Purple)
- Digital Signature:      #4F46E5 (Indigo)
- Contract Management:    #2563EB (Blue)
- Client Management:      #D97706 (Amber)

### Secondary Colors (Consistent)
- Dark Text:              #1E1B4B
- Gray Text:              #6B7280
- Light Background:       #F9FAFB / #F3F4F6
- White:                  #FFFFFF
- Borders:                #E5E7EB

### Gradient Patterns
```
Hero:                Linear 135deg (color → 0%, lighter → 100%)
Light sections:      from-[color]-50 to-white
Dark sections:       from-[color]-900 to-[color]-800
CTA sections:        135deg gradient (primary → darker)
```

## 📦 Component Pattern

### Standard Card Structure
```jsx
<div 
  className="p-8 rounded-2xl" 
  style={{ 
    background: "white", 
    border: "2px solid #COLOR" 
  }}
>
  <Icon size={32} color="#COLOR" className="mb-4" />
  <div className="text-sm font-black mb-4" style={{ color: "#COLOR" }}>
    01
  </div>
  <h4 className="font-bold text-lg mb-3" style={{ color: "#1E1B4B" }}>
    Title
  </h4>
  <p style={{ color: "#6B7280" }}>
    Description text
  </p>
</div>
```

### Standard Button Pattern
```jsx
<button 
  className="px-8 py-4 text-lg font-bold rounded-2xl flex items-center gap-2" 
  style={{ background: "#COLOR" }}
>
  Button Text
  <ArrowRight size={20} />
</button>
```

## 📊 Grid Layouts

### Grid Variations Used
```
1 Column (Mobile)
2 Columns (md: breakpoint)
3 Columns (lg: breakpoint)
4 Columns (max: analytics stats)
Custom (2x2 grids, alternating layouts)
```

### Stat Card Layout
```
┌──────────────────────────────┐
│   Icon + Label (colored)     │
│                              │
│   Large Number (font-black)  │
│                              │
│   Description (gray, small)  │
└──────────────────────────────┘
```

## 🎭 Visual Hierarchy

1. **Hero Section** - Largest typography, most attention
2. **Main Feature Section** - Medium typography, clear cards
3. **Secondary Sections** - Varied content, different backgrounds
4. **CTA Section** - High contrast, action-oriented

## 🔄 Responsive Behavior

### Mobile (< 768px)
- Single column layouts
- Full-width containers (px-6)
- Larger touch targets (py-4)
- Stacked stat cards

### Tablet (768px - 1024px)
- 2-column grids
- Medium padding
- md: responsive classes active

### Desktop (> 1024px)
- 3-4 column grids
- lg: responsive classes active
- Full max-width container (1152px)
- Optimal spacing

## ✨ Visual Effects

### Blur Circles (Hero Background)
```jsx
<div className="absolute inset-0 opacity-20">
  <div 
    className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full blur-3xl" 
    style={{ background: "#COLOR" }} 
  />
  <div 
    className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-3xl" 
    style={{ background: "#COLOR15" }} 
  />
</div>
```

### Rounded Corners
- Large containers: `rounded-2xl` (16px)
- Medium containers: `rounded-lg` (8px)
- Small elements: `rounded-full` (pill shapes)

### Border Styles
- Thick colored borders: `border: 2px solid #COLOR`
- Thin gray borders: `border: 1px solid #E5E7EB`
- No border for white backgrounds in light sections

## 🌍 RTL Support

### Implementation
```jsx
<section style={{ direction: "rtl" }}>
  {/* All content automatically RTL */}
</section>
```

### Text Alignment
- Headlines: `text-right`
- Body text: `text-right`
- Lists: `justify-end` with gap-3

### Flex Direction
- Default: LTR flex-row-reverse used with `justify-end`
- Lists: Items flex with `justify-end`

## 🎬 Animation-Ready Structure

Components are structured to easily add:
- Scroll animations (Framer Motion)
- Fade-in effects
- Hover transitions
- Button hover states

Current CSS-only capabilities:
- Hover backgrounds (can be added)
- Transition delays (easily added)
- Transform effects (ready to implement)

## ♿ Accessibility Features

- Semantic HTML (section, h1-h4)
- Color contrast ratios meet WCAG AA
- Icons paired with text labels
- Proper button elements
- RTL language support

## 📱 Mobile-First Approach

```
1. Design base (mobile)
2. Add md: media queries
3. Add lg: media queries
4. Test responsiveness
```

## 🔧 Customization Points

### Easy to Modify
1. Color scheme - Replace hex values
2. Text content - Direct in JSX
3. Icons - Swap lucide-react components
4. Spacing - Adjust Tailwind classes
5. Grid layout - Change col numbers

### Hard to Break
- Structure follows consistent pattern
- All components self-contained
- No external dependencies (except icons)
- No state management needed

## 📋 Checklist for New Services

When adding new service pages:
- ✅ Use consistent color per service
- ✅ Follow hero → features → secondary → CTA
- ✅ Add RTL direction to hero
- ✅ Include 3 stat cards in hero
- ✅ Use numbered badges (01, 02, etc.)
- ✅ Include icon in stat/feature cards
- ✅ Maintain 32px padding on cards
- ✅ Use rounded-2xl for containers
- ✅ Test on mobile, tablet, desktop
- ✅ Verify color contrast

---

**Design Pattern Version:** 1.0
**Last Updated:** June 8, 2026
**Components Following This Pattern:** 10/10 ✅
