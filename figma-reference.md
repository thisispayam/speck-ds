# Figma Design Reference

**Last fetched:** January 16, 2026  
**File ID:** Th7UVyk0UGSWZW1Yx7sRu3  
**File Name:** Speck DS

## Color Palette

### Purple
- `purple-500`: #1F035B
- `purple-400`: #3E06B6
- `purple-300`: #C5B4E9
- `purple-200`: #8B6AD3
- `purple-100`: #ECE6F8

### Grey
- `grey-700`: #000000
- `grey-600`: #1A1A1A
- `grey-500`: #656565
- `grey-400`: #8D8D8D
- `grey-300`: #C4C4C4
- `grey-200`: #E5E5E5
- `grey-100`: #FFFFFF

## Spacing
- `space.1`: 4px
- `space.2`: 8px
- `space.3`: 12px
- `space.4`: 16px
- `space.5`: 24px
- `space.6`: 32px
- `space.7`: 48px
- `space.8`: 64px

## Border Radius
- `radius.none`: 0px
- `radius.sm`: 8px
- `radius.md`: 16px
- `radius.lg`: 24px
- `radius.full`: 999px

## Typography

### Font Families
- `font.family.serif`: "Noe Display", Merriweather, Georgia, serif
- `font.family.sans`: "Avenir", "Helvetica Neue", sans-serif

### Font Sizes
- `font.size.xs`: 10px
- `font.size.sm`: 14px
- `font.size.md`: 16px
- `font.size.lg`: 20px
- `font.size.xl`: 24px
- `font.size.2xl`: 36px

### Font Weights
- `font-weight.400`: 400
- `font-weight.500`: 500
- `font-weight.600`: 600
- `font-weight.700`: 700

### Line Heights
- `lineHeight.tight`: 1.15
- `lineHeight.standard`: 1.35
- `lineHeight.relaxed`: 1.6
- `lineHeight.reader`: 1.75

---

## Icons

### Chevron/down/16
- **Size:** 16x16px
- **Type:** COMPONENT
- **Node ID:** 46:35
- **Vector:** Polygon with stroke (black), strokeWeight: 1, strokeCap: ROUND

### Chevron/down/12
- **Size:** 12x12px
- **Type:** COMPONENT
- **Node ID:** 46:40
- **Vector:** Polygon with stroke (black), strokeWeight: 1, strokeCap: ROUND

---

## Light Theme Components

### Button
- **Border radius:** 999px (pill)
- **Primary:** fill #3E06B6 (purple-400), text #FFFFFF
- **Secondary:** fill #FFFFFF, stroke #3E06B6, text #3E06B6
- **Disabled Primary:** fill #C4C4C4, text #FFFFFF
- **Disabled Secondary:** fill #FFFFFF, stroke #C4C4C4, text #C4C4C4
- **Focus ring:** stroke #8A38F5

### Chip
- **Border radius:** 999px (pill)
- **Unselected:** fill #FFFFFF, stroke #C4C4C4 (grey-300), text #000000
- **Selected:** fill #000000 (grey-700), text #FFFFFF

### Dropdown
- **Border radius:** 8px (radius.sm)
- **Normal:** fill #FFFFFF, stroke #E5E5E5 (grey-200)
- **Active:** fill #FFFFFF, stroke #E5E5E5
- **Label color:** #6C6A6A (active), #C4C4C4 (disabled)
- **Value color:** #000000 (active), #C4C4C4 (disabled)
- **Chevron stroke:** #767676 (active), #C4C4C4 (disabled)

### Text Area
- **Border radius:** 8px (radius.sm)
- **Background:** #FFFFFF
- **Border:** stroke (from component)
- **Label:** purple-400 color

---

## Dark Theme Components

### Button (Dark)
- **Primary:** fill #3E06B6, text #FFFFFF
- **Secondary:** fill #FFFFFF, stroke #3E06B6, text #3E06B6
- **Disabled Primary:** fill #C4C4C4, text #FFFFFF
- **Disabled Secondary:** fill #FFFFFF, stroke #C4C4C4, text #C4C4C4

### Chip (Dark)
- Same structure as Light (not explicitly different)

### Dropdown (Dark)
- **Background:** fill #000000
- **Border:** stroke #4A4A4A (grey-500)
- **Label color:** #C4C4C4 (grey-300)
- **Value color:** #FFFFFF (active), #C4C4C4 (disabled)
- **Chevron stroke:** #767676 (active), #C4C4C4 (disabled)

### Text Area (Dark)
- **Border:** stroke #4A4A4A (grey-500)
- **Value text:** #FFFFFF
- **Helper/instruction text:** #C4C4C4
- **Character count:** #C4C4C4

---

## Semantic Color Tokens (from Page 1 text)

### Light Mode
- `color.background.primary`: grey-100 (#FFFFFF)
- `color.background.secondary`: grey-200 (#E5E5E5)
- `color.background.tertiary`: grey-300 (#C4C4C4)
- `color.foreground.primary`: grey-600 (#1A1A1A)
- `color.foreground.secondary`: grey-500 (#656565)
- `color.foreground.tertiary`: grey-400 (#8D8D8D)
- `color.border.subtle`: grey-200 (#E5E5E5)
- `color.border.strong`: grey-300 (#C4C4C4)
- `color.accent.primary`: purple-400 (#3E06B6)
- `color.accent.primary.hover`: purple-400 (#3E06B6)
- `color.accent.primary.active`: purple-400 (#3E06B6)

### Dark Mode (Inferred from component colors)
- `color.background.primary`: #000000 (black)
- `color.background.secondary`: #1A1A1A (grey-600)
- `color.border.subtle`: #4A4A4A (grey-500)
- `color.foreground.primary`: #FFFFFF
- `color.foreground.secondary`: #C4C4C4
