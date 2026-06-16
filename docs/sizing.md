# **Sizing**
Note: Sizing is based on logical properties (inline-size / block-size),
which adapt automatically to writing mode.
w → width (mapped to inline-size internally)

## Width

w      → width
max-w  → max-width
min-w  → min-width

## Height

h      → height
max-h  → max-height
min-h  → min-height

**example**
```html
<div class="w:100% h:200px"></div>
<div class="w:80vw max-w:600px h:clamp(60px,calc(10svh),90px)"></div>
```
