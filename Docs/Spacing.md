# Spacing

Helix UI provides a flexible spacing system supporting both **logical** and **physical** directions.

Values are dynamic and can use any CSS unit.

---

## Base

m  → margin  
p  → padding  

**Example:**
```html
<div class="m:20px p:10px"></div>
````

---

## Axis (Recommended)

mx → margin-inline (start + end)
my → margin-block (top + bottom)

px → padding-inline
py → padding-block

**Example:**

```html 
<div class="mx:20px my:10px"></div>
```

---

## Logical (Direction Aware)

m-is → margin-inline-start
m-ie → margin-inline-end
m-bs → margin-block-start
m-be → margin-block-end

p-is → padding-inline-start
p-ie → padding-inline-end
p-bs → padding-block-start
p-be → padding-block-end

**Example:**

```html id="k4s8dn"
<div class="m-is:20px p-be:10px"></div>
```

---

## Physical (Fixed Direction)

ml → margin-left
mr → margin-right
mt → margin-top
mb → margin-bottom

pl → padding-left
pr → padding-right
pt → padding-top
pb → padding-bottom

**Example:**

```html id="v8q2xz"
<div class="ml:20px mt:10px"></div>
```

---

## Gap

g      → gap
g-row  → row-gap
g-col  → column-gap

**Example:**

```html id="x7m1pz"
<div class="d-grid g:20px"></div>
```

---

## Notes

* Logical properties adapt automatically to RTL and writing modes.
* Physical properties remain fixed regardless of direction.
* Axis utilities (`mx`, `my`, `px`, `py`) are recommended for most layouts.

```
