# Theming

Helix UI provides a flexible theming system using the `theme>` prefix.

Themes allow you to define scoped styles that are applied based on the current active theme.

---

## Important Note on Dark Mode

By default, Helix UI supports dark mode using the CSS `light-dark()` function.  
This is the recommended way to define both light and dark themes with minimal code.

---

## Basic Syntax

theme>themeName(utilities)

---

## Example

```html
<div class="theme>green(bg:green;text-color:white)"></div>
```

## How It Works

Themes are activated using the `data-theme` attribute:

```html
<body data-theme="green">
```

When the theme matches, the associated utilities are applied.

---

## Multiple Utilities

You can combine multiple utilities inside a theme:

```html
<div class="theme>green(bg:green;text-color:white_b:1px_solid_black)"></div>
```

---

## Combining with Pseudo

```html
<div class="theme>blue(~:hover(bg:yellow))"></div>
```

---

## Combining with Breakpoints

```html
<div class="theme>blue(@sm|w:120px)"></div>
```

---

## Full Combination

```html
<div class="theme>dark(@md|~:hover(bg:black_text-color:white))"></div>
```

---

## Use Cases

* Dark mode
* Color themes
* Brand customization
* User preferences

---

## Dark Mode Example

```html
<body data-theme="dark">

<div class="theme>dark(bg:black;text-color:white)">
  Dark Mode Content
</div>
```

---

## Notes

* Themes are applied only when `data-theme` matches.
* Works with all utilities (layout, spacing, colors, etc.).
* Can be combined with pseudo and responsive rules.

---


````

---
