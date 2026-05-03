
# Flexbox

Helix UI Flexbox system provides a **predictable core API** with optional **RTL-aware auto modes** for row direction only.

---

## Display

d-flex         → display: flex  
d-inline-flex  → display: inline-flex  

**Example:**
```html
<div class="d-flex"></div>
````

---

## Flex Property

fx → flex shorthand

**Example:**

```html
<div class="fx:1"></div>
<div class="fx:1_0_auto"></div>
```

---

## Flex Direction (Static)

Static direction utilities behave exactly like native CSS.

fx-row    → flex-direction: row
fx-row-r  → flex-direction: row-reverse
fx-col    → flex-direction: column
fx-col-r  → flex-direction: column-reverse

**Example:**

```html
<div class="d-flex fx-row"></div>
```

---

## Flex Direction (Auto Mode)

Auto mode adapts only **row-based layouts** according to document direction (LTR / RTL).

fx-row-auto    → row (LTR) / row-reverse (RTL)
fx-row-auto-r  → row-reverse (LTR) / row (RTL)

⚠️ Note:

* Auto mode applies only to `row` direction.
* Column direction is not affected by RTL.

**Example:**

```html
<div class="d-flex fx-row-auto"></div>
```

---

## Flex Wrap

fx-wrap          → flex-wrap: wrap
fx-nowrap        → flex-wrap: nowrap
fx-wrap-reverse  → flex-wrap: wrap-reverse

**Example:**

```html
<div class="d-flex fx-wrap"></div>
```

---

## Flex Growth

fx-grow   → flex-grow
fx-shrink → flex-shrink
fx-basis  → flex-basis

**Example:**

```html
<div class="fx-grow:1"></div>
<div class="fx-basis:200px"></div>
```

---

## Combined Example

```html
<div class="d-flex fx-row-auto fx-wrap g:20px jc:center ai:center">
  <div class="fx:1">Item 1</div>
  <div class="fx:1">Item 2</div>
</div>
```

---

## Design Principles

* Static utilities = predictable CSS behavior
* Auto mode = optional RTL-aware enhancement
* Column layouts are not affected by RTL by design
* Flex system prioritizes clarity over implicit behavior

---

## Notes

* Use `fx-row` when layout order must remain fixed.
* Use `fx-row-auto` when layout should adapt to RTL.
* Avoid relying on auto mode for critical UI ordering (e.g., actions/buttons).

```
