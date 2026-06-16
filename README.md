# **Conté UI**
**A Dynamic CSS System**

![Conté Logo](docs/assets/Cover.png)

_Traditional frameworks often lock you into predefined scales. Conté UI breaks these limits with a breakthrough approach to building modern UIs with fully dynamic values, Extensive support for major CSS properties, and intuitive class conventions.
Redefines how UI is built — faster, lighter, and more flexible than traditional frameworks._

---

## Release Info
- Released on **May 1, 2026**
- Current version: ![status](https://img.shields.io/badge/status-beta-orange) **Beta 0.1.2**


## Installation

## Option 1: Bundle File (Recommended) 
containing the complete framework.

```html
<script src="https://cdn.jsdelivr.net/gh/Conte-UI/ConteUI@main/dist/bundle/conteui-v0.1.2-beta.min.js"></script>
```

## Option 2: Separate CSS and JavaScript Files

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Conte-UI/ConteUI@main/dist/standalone/conteui-v0.1.2-beta.min.css">

<script src="https://cdn.jsdelivr.net/gh/Conte-UI/ConteUI@main/ConteUI/dist/conte-ui-v0.1.1-beta.min.js"></script>
```

## Option 3: Clone the repository

```bash
git clone https://github.com/Conte-UI/ConteUI.git
cd ConteUI
```

##  Documentation

**Layout**
- [Grid System](docs/Grid.md)
- [FlexBox System](docs/FlexBox.md)
- [Alignment](docs/Alignment.md)
- [Positioning](docs/Positioning.md)
- [Display](docs/Display.md)
- [Breakpoints](docs/Breakpoints.md)

**Styling**
- [Sizing](docs/Sizing.md)
- [Spacing](docs/Spacing.md)
- [Coloring](docs/Coloring.md)
- [Border](docs/Border.md)
- [Typography](docs/Typography.md)
- [Theming System](docs/Theming.md)

**Behavior**
- [Pseudo States](docs/Pseudo.md)
- [Misc](docs/Misc.md)


## **Why Conté UI?**

-  **Lightweight** with powerful capabilities
-  **100% dynamic values** (no predefined limits)
-  **Flexible responsive designs** — static, or breakpoints, or fluid scaling, or a mixture of them.
- Powerful **Layout Engine:** A robust system for building complex page structures with high flexibility.
- Robust **Dynamic Coloring System** with full support for CSS color functions, alongside seamless integration with Material Design standards.
- Comprehensive **Writing Mode** Support: Full support for various writing modes, including horizontal and vertical orientations (e.g., Japanese and Chinese).
- **Logical & Physical Properties:** Seamless handling of Directionality (LTR/RTL) using CSS Logical Properties to ensure layouts adapt automatically to any language.
-  **Smart and intuitive class conventions**.
-  **Raw CSS in classes**
-  **More flexibility** than traditional CSS frameworks.
- Designed to operate independently or integrate seamlessly as an add-on layer to enhance existing css frameworks.

---

## Core Features:

### Structure & Layout

- **Flexbox** utilities for building flexible interfaces
- Powerful **Grid system** for advanced layouts

### Responsive Engine

Conté UI provides a **flexible responsive system** with four modes:

- **Static Mode** → Traditional single screen design.
- **Breakpoints Mode** → Classic breakpoint-based responsive design.
- **Fluid Mode** → Fully fluid scaling across all screen sizes.
- **Hybrid Mode** → Combine static and fluid values, inside or outside breakpoints.

**Flexibility highlights:**

- Switch between modes globally
- Use fluid values inside static layouts
- Override behavior per utility when needed

### Coloring
- Supports all CSS color formats (rgb, hsl, hex...)
- Built-in Material Design palette.
- Apply either a gradient or an image colors.

### Typography
- Dynamic font sizing.
- Safe Fonts integration.
- **Google Fonts** support.

### Borders / Outline / Radius
- Full border control with dynamic values


### Full Pseudo Support
- Pseudo classes (:hover, :focus...)
- Pseudo elements (::before, ::after)


### Other Advanced Features
- 6 predefined breakpoints
- **RTL** support for right-to-left languages
- Dark mode, exclusively through the light-dark() function.
- Custom themes creation

  ## Class Naming Convention
Conté UI’s introduces flexible class naming system is designed to be developer‑friendly, with clear and consistent patterns. where designer can write exactly what he need.
It also allows direct use of raw CSS values inside class names, giving developers more freedom than traditional frameworks.

---

### Examples

```txt
bg:rgb(120,120,130)
text-size:20px
text-color:hsla(200,50%,50%,0.5)
b:1px_solid_green
```

### Shortcuts:

bl   → border-left  
br   → border-right  

blw  → border-left-width  
brs  → border-right-style  

gr-tr → grid-template-rows

---

## Conté UI Philosophy

Conté UI is built on one idea:

> "CSS should be dynamic, not restricted."

Instead of memorizing predefined classes, you write what you actually need — directly and freely.

---

## 🛠️ Coming Soon

- Ready-to-use utility presets (Component system)
- Conté UI Dev-Tool
- Performance optimizations

---

## Status
Conté UI is currently in beta.
The naming system is evolving and may change in future versions.

---

## Contributing
Contributions are welcome!
Feel free to open issues or submit pull requests to improve ConteUI.

---

## Credits & Licenses
This project uses [Material Design](https://m3.material.io/) and 
[Material Color Utilities](https://github.com/material-foundation/material-color-utilities) 
by Google, licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). 
The color roles (primary, onPrimary, etc.) and color generation algorithms are 
based on the Material 3 design system.

