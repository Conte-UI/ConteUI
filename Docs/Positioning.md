
# Positioning

## Position Values

p-static       → position: static  
p-relative     → position: relative  
p-absolute     → position: absolute  
p-fixed        → position: fixed  
p-sticky       → position: sticky  

### Global Values

p-inherit      → position: inherit  
p-initial      → position: initial  
p-revert       → position: revert  
p-revert-layer → position: revert-layer  
p-unset        → position: unset  

---

## Helper Properties

Helix UI supports both **logical** and **physical** positioning.

- Logical properties adapt to writing mode and direction (RTL / vertical text).
- Physical properties always refer to fixed directions (top, left, etc).

---

### Logical Properties

inset     → inset  
inset-x   → sets inline-start and inline-end  
inset-y   → sets block-start and block-end  

inset-is  → inset-inline-start  
inset-ie  → inset-inline-end  
inset-bs  → inset-block-start  
inset-be  → inset-block-end  

---

### Physical Properties

top       → top  
right     → right  
bottom    → bottom  
left      → left  

---

## Examples

### Basic Absolute Position

```html
<div class="p-absolute top:10px left:20px"></div>
```
