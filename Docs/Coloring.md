
# Coloring

Conté UI provides a fully dynamic coloring system with support for both raw CSS values and Material Design colors.

---

## Dynamic Colors

You can use any valid CSS color directly inside classes.

Supported formats:
- rgb()
- rgba()
- hsl()
- hsla()
- hex
- named colors

**Examples:**

```html
<div class="bg:rgb(120,120,120)"></div>

<div class="text-color:hsla(200,50%,50%,0.5)">Conté UI</div>

<div class="b:1px_solid_green"></div>

<div class="o:blue"></div>
````

---

## Material Design Colors

Conté UI supports Material Design color tokens for quick and consistent theming.

### Examples

```html id="lx9e1s"
<div class="bg:primary text-color:onPrimary"></div>

<div class="bg:secondary text-color:onSecondary"></div>
```

---

## How It Works

### Online Mode

When connected to the internet:

* You can define a **seed color**
* Conté UI generates a full Material color system dynamically
* All tokens (primary, secondary, surface, etc.) become available

---

### Offline Mode

When offline:

* A default Material color palette is used
* All Material tokens still work out of the box

---

## Available Tokens (examples)

primary
onPrimary
secondary
onSecondary
surface
onSurface
background
error

---

## Mixing Dynamic + Material

You can freely mix both systems:

```html 
<div class="bg:primary b:2px_solid_rgb(120,120,120)"></div>
```

---

## Notes

* Dynamic values give you full freedom without limits.
* Material tokens provide structure and consistency.
* You are free to use either approach or combine both.

---

## Future Improvements

* Custom theme generation
* Advanced color palettes
* Design token system

````

---
