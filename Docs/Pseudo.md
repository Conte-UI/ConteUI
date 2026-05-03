# Pseudo

Contéx UI provides a simple and powerful way to work with **pseudo states** directly inside class names.

---

# Pseudo Classes

Pseudo classes are applied using the `~:` prefix.

Syntax:
~:pseudo-class(utilities)

**Examples:**

```html
<div class="~:hover(bg:green)"></div>

<div class="~:focus(b:2px_solid_blue)"></div>
````

---

## Multiple Utilities

You can apply multiple utilities inside the same pseudo:

```html
<div class="~:hover(bg:green;text-color:white)"></div>
```

---

# Pseudo Elements

Pseudo elements use the `::` prefix.

Syntax:
::pseudo-element(utilities)

**Examples:**

```html
<input class="::placeholder(text-color:gray)" />

<div class="::before(bg:red;w:10px;h:10px)"></div>
```

---

## Notes

* Use `;` to separate multiple values inside utilities.
* Pseudo system works with all Helix utilities.
* Keeps styles scoped and readable inside class names.

---
