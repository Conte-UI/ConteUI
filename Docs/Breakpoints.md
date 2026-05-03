
# Responsive Breakpoints

Responsive utilities use the `@` prefix.

Syntax:
@breakpoint|utility

---

## Available Breakpoints

xs  → 0px → 319.98px
sm  → 320px → 767.98px
md  → 768px → 1151.98px
lg  → 1152px → 1535.98px
xl  → 1536px → 3071.98px
xxl → 3072px and above

---

## Examples

```html
<div class="@sm|w:120px @md|w:220px"></div>
```

---

## Combining with Other Utilities

```html
<div class="@md|d-flex @lg|fx-row"></div>
```

---

## Combining with Pseudo

```html
<div class="@md|~:hover(bg:red)"></div>
```

---

# Design Notes

* Breakpoints are mobile-first.
* Each breakpoint defines a range using min/max width.
* Utilities can be combined freely with pseudo and layout systems.

---

# Future Improvements

* Custom breakpoints
* Container queries support
* Advanced responsive conditions

````

---
