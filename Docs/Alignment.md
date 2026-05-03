# Alignment

Conté UI provides a unified alignment system that works across Flexbox and Grid layouts.

---

## Core Alignment Groups

### 1. Content Alignment (containers)

Used to align the entire content inside a container.

- jc → justify-content  
- ac → align-content  
- pc → place-content  

---

### 2. Items Alignment (all children)

Used to align all children inside a container.

- ji → justify-items  
- ai → align-items  
- pi → place-items  

---

### 3. Item Alignment (single item)

Used to align a specific item.

- js → justify-self  
- as → align-self  
- ps → place-self  

---

## Flexbox Alignment

Flexbox uses two main axes:

- **Main axis** → controlled by `jc`
- **Cross axis** → controlled by `ai`

### Core Properties

- **jc** → Main axis alignment  
  Values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`

- **ai** → Cross axis alignment  
  Values: `stretch`, `flex-start`, `flex-end`, `center`, `baseline`

- **ac** → Multi-line alignment  
  Only works when wrapping is enabled (`fx-wrap`)
  Values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`

- **as** → Align a single item on the cross axis  
  Values: `stretch`, `flex-start`, `flex-end`, `center`, `baseline`

---

## Grid Alignment

Grid separates alignment into two dimensions:

### 1. Whole Grid Alignment

- jc → horizontal alignment  
- ac → vertical alignment  

---

### 2. Items Inside Grid Cells

- ji → horizontal alignment inside cells  
- ai → vertical alignment inside cells  

---

### 3. Single Grid Item

- js → horizontal alignment  
- as → vertical alignment  

---

### 4. Shorthand Properties

- pc → place-content  
- pi → place-items  
- ps → place-self  

---

Substantially, Alignment in Conté UI follows CSS behavior:

- Use `justify-*` for the main/inline axis  
- Use `align-*` for the cross/block axis  
- Use `place-*` as shorthand  

For advanced cases, refer to MDN documentation.

---

## Example

### Flexbox Centering

```html
<div class="d-flex jc:center ai:center h:100vh">
  Centered Content
</div>
```

## References

For deeper understanding of alignment behavior:

- MDN Web Docs — practical guides and examples  
- W3C CSS Specifications — official standard definitions
