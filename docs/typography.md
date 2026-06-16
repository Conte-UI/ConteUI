
# Typography

Helix UI provides a flexible typography system based on **dynamic values** and direct CSS control.

---

## Text Properties

text-color      → color  
text-size       → font-size (supports fluid values)  
text-weight     → font-weight  
text-style      → font-style  
text-align      → text-align  
text-height     → line-height  
text-shadow     → text-shadow  
text-transform  → text-transform  
text-decoration → text-decoration  
text-stretch    → font-stretch  
text-spacing    → letter-spacing  
word-spacing    → word-spacing  
text-orientation → text-orientation  
w-mode          → writing-mode  

---

## Examples

```html
<div class="text-size:18px text-weight:600 text-color:#333">
  Helix Typography
</div>

<div class="text-size:clamp(16px,2vw,24px) text-height:1.6">
  Fluid text example
</div>
````

---

## Font Family

font → font-family

Helix UI supports both:

* System fonts
* Custom fonts (including Google Fonts)

**Examples:**

```html
<div class="font-arial"></div>

<div class="font-tahoma"></div>
```

---

## Writing Mode

w-mode → writing-mode

Supports advanced layout directions.

**Example:**

```html
<div class="w-mode:vertical-rl">
  Vertical text
</div>
```

---

## Notes

* `text-size` supports fluid scaling when enabled.
* All values are dynamic and accept raw CSS syntax.
* Font loading (e.g., Google Fonts) must be handled online.
* Typography system is designed to stay flexible and unopinionated.

---

## List of currently supported safe fonts

    font-sans
    font-serif
    font-mono
    font-cursive
    font-fantasy
    font-system
    font-rounded
    font-math
    font-arial
    font-tahoma
    font-verdana
    font-helvetica
    font-trebuchet
    font-times
    font-georgia
    font-cambria
    font-palatino
    font-garamond
    font-courier
    font-consolas
    font-monaco
    font-lucida
    font-dejaVu
    font-bradley
    font-comic
    font-brush
    font-handwriting
    font-apple-cursive
    font-impact
    font-luminari
    font-chalkduster
    font-jazz
    font-blippo
    font-stencil
    font-marker
    font-trattatello
    
    ## List of currently supported Google Fonts
    
    font-archivo
    font-roboto
    font-montserrat
    font-open-sans
    font-mozilla-headline
    font-cinzel
    font-playfair
    font-lora
    font-space-mono
    font-plex-mono
    font-great-vibes
    font-dancing-script
    font-medievalsharp
    font-uncial-antiqua

````

---

