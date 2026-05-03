
# Base Rule

[property][-sub][-type]:value  

**Note:** Values use `_` instead of spaces.

**Example:**
b:1px_solid_red

---

# Border

b        → border  

b-w      → border-width  
b-s      → border-style  
b-c      → border-color  

b-img    → border-image  
Primarily designed for creating gradient borders.

**Example:**
```html
<div class="b-img:linear-gradient(#f6b73c,#4d9f0c)_30"></div>
````

---

## Physical

b-l      → border-left
b-t      → border-top
b-r      → border-right
b-b      → border-bottom

b-l-w    → border-left-width
b-t-w    → border-top-width
b-r-w    → border-right-width
b-b-w    → border-bottom-width

b-l-s    → border-left-style
b-t-s    → border-top-style
b-r-s    → border-right-style
b-b-s    → border-bottom-style

b-l-c    → border-left-color
b-t-c    → border-top-color
b-r-c    → border-right-color
b-b-c    → border-bottom-color

---

## Logical

b-is     → border-inline-start
b-bs     → border-block-start
b-ie     → border-inline-end
b-be     → border-block-end

b-is-w   → border-inline-start-width
b-bs-w   → border-block-start-width
b-ie-w   → border-inline-end-width
b-be-w   → border-block-end-width

b-is-s   → border-inline-start-style
b-bs-s   → border-block-start-style
b-ie-s   → border-inline-end-style
b-be-s   → border-block-end-style

b-is-c   → border-inline-start-color
b-bs-c   → border-block-start-color
b-ie-c   → border-inline-end-color
b-be-c   → border-block-end-color

---

## Examples

```html
<div class="b:1px_solid_red"></div>
<div class="b-l-w:4px b-l-c:blue b-l-s:dashed"></div>
```

---

# Radius

r → border-radius

---

## Physical

r-tl → border-top-left-radius
r-tr → border-top-right-radius
r-bl → border-bottom-left-radius
r-br → border-bottom-right-radius

---

## Logical

r-ss → border-start-start-radius
r-se → border-start-end-radius
r-es → border-end-start-radius
r-ee → border-end-end-radius

---

## Examples

```html
<div class="r:10px"></div>
<div class="r-tl:20px r-br:20px"></div>
```

---

# Outline

o → outline

o-w   → outline-width
o-s   → outline-style
o-c   → outline-color
o-off → outline-offset

---

## Examples

```html
<div class="o:2px_solid_green"></div>
<div class="o-w:3px o-c:red o-off:5px"></div>
```

---

# Combined Example

```html
<div class="b:1px_solid_gray r:10px p:20px o:2px_solid_blue">
  Helix UI Card
</div>
```

```

---

