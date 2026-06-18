/* 
# Copyright [2026] [ContéUI]
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://apache.org
*/
function rootVariables() {
    return '\n  *, *::before, *::after {box-sizing: border-box;}\n  html {scroll-behavior: smooth;}\n body{margin:0;line-height:1.5;font-family:"Segoe UI Variable","Segoe UI",system-ui,sans-serif}img,picture,video,canvas,svg{display:block;max-width:100%}img{height:auto}h1,h2,h3,h4,h5,h6,p,figure,blockquote,dl,dd{margin:0}\n :root {\n    color-scheme: light dark;\n    --ct-btn-height-scale: clamp(36px, calc(.7svh + 45px), 96px);\n    --ct-badge-height: calc(var(--ct-btn-height-scale) * .4);\n    --ct-badge-inset-factor: -.5;\n}\n @media screen and (max-height: 600px) {\n    :root {\n        --ct-btn-height-scale: clamp(20px, calc(48px - .7vh), 48px);\n    }\n}\n .ct-btn,.ct-btn-xl,.ct-btn-lg,.ct-btn-md,.ct-btn-sm,.ct-btn-xs{display:grid;place-items:center;place-content:center;grid-auto-flow:column;position:relative;margin:4px;padding:0;background:light-dark(#f7f8fc,#0f172a);color:light-dark(#374151,#d1d5db);box-shadow:0 0 2px 0 currentColor;border:none;outline:none;text-decoration:none;transition:transform 0.3s,opacity 0.3s,filter 0.3s,box-shadow 0.3s;line-height:1;overflow:visible;appearance:none;-webkit-appearance:none;user-select:none;isolation:isolate;box-sizing:border-box;cursor:none}.ct-btn.btn-vertical,.ct-btn-xl.btn-vertical,.ct-btn-lg.btn-vertical,.ct-btn-md.btn-vertical,.ct-btn-sm.btn-vertical,.ct-btn-xs.btn-vertical{grid-auto-flow:row}.ct-btn{--ct-btn-height:var(--ct-btn-height-scale);block-size:var(--ct-btn-height);inline-size:calc(var(--ct-btn-height) * 3.1);max-inline-size:calc(var(--ct-btn-height) * 3.1);min-inline-size:calc(var(--ct-btn-height) * 3.1);--ct-badge-height:calc(var(--ct-btn-height-scale) * 0.4)}.ct-btn-xl{--ct-btn-height:calc(var(--ct-btn-height-scale) * 1.2);block-size:var(--ct-btn-height);inline-size:calc(var(--ct-btn-height) * 5.75);max-inline-size:calc(var(--ct-btn-height) * 5.75);min-inline-size:calc(var(--ct-btn-height) * 5.75);--ct-badge-height:calc(var(--ct-btn-height-scale) * 0.48)}.ct-btn-lg{--ct-btn-height:calc(var(--ct-btn-height-scale) * 0.8);block-size:var(--ct-btn-height);inline-size:calc(var(--ct-btn-height) * 6.5);max-inline-size:calc(var(--ct-btn-height) * 6.5);min-inline-size:calc(var(--ct-btn-height) * 6.5);--ct-badge-height:calc(var(--ct-btn-height-scale) * 0.32)}.ct-btn-md{--ct-btn-height:calc(var(--ct-btn-height-scale) * 0.8);block-size:var(--ct-btn-height);inline-size:calc(var(--ct-btn-height) * 2);max-inline-size:calc(var(--ct-btn-height) * 2);min-inline-size:calc(var(--ct-btn-height) * 2);--ct-badge-height:calc(var(--ct-btn-height-scale) * 0.32)}.ct-btn-sm{--ct-btn-height:calc(var(--ct-btn-height-scale) * 0.5);block-size:var(--ct-btn-height);inline-size:calc(var(--ct-btn-height) * 3);max-inline-size:calc(var(--ct-btn-height) * 3);min-inline-size:calc(var(--ct-btn-height) * 3);--ct-badge-height:calc(var(--ct-btn-height-scale) * 0.2)}.ct-btn-xs{--ct-btn-height:calc(var(--ct-btn-height-scale) * 0.33);block-size:var(--ct-btn-height);inline-size:calc(var(--ct-btn-height) * 3);max-inline-size:calc(var(--ct-btn-height) * 3);min-inline-size:calc(var(--ct-btn-height) * 3);--ct-badge-height:calc(var(--ct-btn-height-scale) * 0.132)}.ct-btn,.ct-btn-xl,.ct-btn-lg,.ct-btn-md,.ct-btn-sm,.ct-btn-xs{gap:calc(var(--ct-btn-height) * 0.12);padding-inline:calc(var(--ct-btn-height) * 0.12);padding-block:calc(var(--ct-btn-height) * 0.12);font-size:calc(var(--ct-btn-height) * 0.5);border-radius:calc(var(--ct-btn-height) * 0.2)}.ct-btn.btn-vertical,.ct-btn-xl.btn-vertical,.ct-btn-lg.btn-vertical,.ct-btn-md.btn-vertical,.ct-btn-sm.btn-vertical,.ct-btn-xs.btn-vertical{gap:calc(var(--ct-btn-height) * 0.04);padding-block:calc(var(--ct-btn-height) * 0.04);font-size:calc(var(--ct-btn-height) * 0.4)}.ct-btn .btn-graphic,.ct-btn>svg,.ct-btn>img,.ct-btn-xl .btn-graphic,.ct-btn-xl>svg,.ct-btn-xl>img,.ct-btn-lg .btn-graphic,.ct-btn-lg>svg,.ct-btn-lg>img,.ct-btn-md .btn-graphic,.ct-btn-md>svg,.ct-btn-md>img,.ct-btn-sm .btn-graphic,.ct-btn-sm>svg,.ct-btn-sm>img,.ct-btn-xs .btn-graphic,.ct-btn-xs>svg,.ct-btn-xs>img{block-size:calc(var(--ct-btn-height) * 0.5);inline-size:calc(var(--ct-btn-height) * 0.5)}.ct-btn.btn-vertical .btn-graphic,.ct-btn.btn-vertical>svg,.ct-btn.btn-vertical>img,.ct-btn-xl.btn-vertical .btn-graphic,.ct-btn-xl.btn-vertical>svg,.ct-btn-xl.btn-vertical>img,.ct-btn-lg.btn-vertical .btn-graphic,.ct-btn-lg.btn-vertical>svg,.ct-btn-lg.btn-vertical>img,.ct-btn-md.btn-vertical .btn-graphic,.ct-btn-md.btn-vertical>svg,.ct-btn-md.btn-vertical>img,.ct-btn-sm.btn-vertical .btn-graphic,.ct-btn-sm.btn-vertical>svg,.ct-btn-sm.btn-vertical>img,.ct-btn-xs.btn-vertical .btn-graphic,.ct-btn-xs.btn-vertical>svg,.ct-btn-xs.btn-vertical>img{block-size:calc(var(--ct-btn-height) * 0.4);inline-size:calc(var(--ct-btn-height) * 0.4)}.ct-btn .btn-glyph,.ct-btn>i,.ct-btn-xl .btn-glyph,.ct-btn-xl>i,.ct-btn-lg .btn-glyph,.ct-btn-lg>i,.ct-btn-md .btn-glyph,.ct-btn-md>i,.ct-btn-sm .btn-glyph,.ct-btn-sm>i,.ct-btn-xs .btn-glyph,.ct-btn-xs>i{font-size:calc(var(--ct-btn-height) * 0.5);block-size:1.2em;inline-size:1.2em}.ct-btn.btn-vertical>i,.ct-btn.btn-vertical .btn-glyph .ct-btn-xl.btn-vertical>i,.ct-btn-xl.btn-vertical .btn-glyph,.ct-btn-lg.btn-vertical>i,.ct-btn-lg.btn-vertical .btn-glyph,.ct-btn-md.btn-vertical>i,.ct-btn-md.btn-vertical .btn-glyph,.ct-btn-sm.btn-vertical>i,.ct-btn-sm.btn-vertical .btn-glyph,.ct-btn-xs.btn-vertical>i,.ct-btn-xs.btn-vertical .btn-glyph{font-size:calc(var(--ct-btn-height) * 0.4)}.ct-btn .btn-label,.ct-btn-xl .btn-label,.ct-btn-lg .btn-label,.ct-btn-md .btn-label,.ct-btn-sm .btn-label,.ct-btn-xs .btn-label{font-size:calc(var(--ct-btn-height) * 0.3);font-weight:550;inline-size:100%}.ct-btn.btn-vertical .btn-label,.ct-btn-xl.btn-vertical .btn-label,.ct-btn-lg.btn-vertical .btn-label,.ct-btn-md.btn-vertical .btn-label,.ct-btn-sm.btn-vertical .btn-label,.ct-btn-xs.btn-vertical .btn-label{font-size:calc(var(--ct-btn-height) * 0.28);font-weight:650}.ct-btn .btn-label{max-inline-size:calc((3.1 - 0.86) * var(--ct-btn-height))}.ct-btn.btn-vertical .btn-label{max-inline-size:calc(var(--ct-btn-height) * 3)}.ct-btn-xl .btn-label{max-inline-size:calc((5.75 - 0.86) * var(--ct-btn-xl-height))}.ct-btn-xl.btn-vertical .btn-label{max-inline-size:calc(var(--ct-btn-xl-height) * 5.5)}.ct-btn-lg .btn-label{max-inline-size:calc((6 - 0.86) * var(--ct-btn-height))}.ct-btn-lg.btn-vertical .btn-label{max-inline-size:calc(var(--ct-btn-height) * 5.5)}.ct-btn-md .btn-label{max-inline-size:calc((3 - 0.86) * var(--ct-btn-height))}.ct-btn-md.btn-vertical .btn-label{max-inline-size:calc(var(--ct-btn-height) * 2.5)}.ct-btn-sm .btn-label{max-inline-size:calc((3 - 0.86) * var(--ct-btn-height))}.ct-btn-sm.btn-vertical .btn-label{max-inline-size:calc(var(--ct-btn-height) * 2.5)}.ct-btn-xs .btn-label{max-inline-size:calc((3 - 0.86) * var(--ct-btn-height))}.ct-btn-xs.btn-vertical .btn-label{max-inline-size:calc(var(--ct-btn-height) * 2.5)}.ct-icon,.ct-icon-xl,.ct-icon-lg,.ct-icon-md,.ct-icon-sm,.ct-icon-xs{display:flex;justify-content:center;align-items:center;flex-shrink:0;flex-grow:0;position:relative;margin:4px;padding:0;background:none;box-shadow:0 0 2px 0 currentColor;border:none;border-radius:20%;outline:none;text-decoration:none;line-height:1;user-select:none;appearance:none;-webkit-appearance:none;box-sizing:border-box;cursor:none;--ct-badge-inset-factor:.5}.ct-icon{font-size:calc(var(--ct-btn-height-scale) * 0.55);--ct-badge-height:calc(var(--ct-btn-height-scale) * 0.22)}.ct-icon-xl{font-size:calc(var(--ct-btn-height-scale) * 1.5);--ct-badge-height:calc(var(--ct-btn-height-scale) * 0.6)}.ct-icon-lg{font-size:calc(var(--ct-btn-height-scale) * 1);--ct-badge-height:calc(var(--ct-btn-height-scale) * 0.4)}.ct-icon-md{font-size:calc(var(--ct-btn-height-scale) * 0.45);--ct-badge-height:calc(var(--ct-btn-height-scale) * 0.18)}.ct-icon-sm{font-size:calc(var(--ct-btn-height-scale) * 0.35);--ct-badge-height:calc(var(--ct-btn-height-scale) * 0.14)}.ct-icon-xs{font-size:calc(var(--ct-btn-height-scale) * 0.25);--ct-badge-height:calc(var(--ct-btn-height-scale) * 0.01)}.ct-icon,.ct-icon-xl,.ct-icon-lg,.ct-icon-md,.ct-icon-sm,.ct-icon-xs{block-size:1.4em;inline-size:1.4em}.ct-icon svg,.ct-icon img,.ct-icon i,.ct-icon-xl svg,.ct-icon-xl img,.ct-icon-xl i,.ct-icon-lg svg,.ct-icon-lg img,.ct-icon-lg i,.ct-icon-md svg,.ct-icon-md img,.ct-icon-md i,.ct-icon-sm svg,.ct-icon-sm img,.ct-icon-sm i,.ct-icon-xs svg,.ct-icon-xs img,.ct-icon-xs i{block-size:1em;inline-size:1em}.btn-radius-pill{border-radius:100rem}.ct-icon svg,.ct-icon-xl svg,.ct-icon-lg svg,.ct-icon-md svg,.ct-icon-sm svg,.ct-icon-xs svg,.btn-graphic svg,.ct-btn>svg,.ct-btn-xl>svg,.ct-btn-lg>svg,.ct-btn-md>svg,.ct-btn-sm>svg,.ct-btn-xs>svg{display:block;min-inline-size:0;margin:0;padding:0;fill:currentColor;stroke:currentColor;pointer-events:none}.ct-icon img,.ct-icon-xl img,.ct-icon-lg img,.ct-icon-md img,.ct-icon-sm img,.ct-icon-xs img,.btn-graphic img,.ct-btn>img,.ct-btn-xl>img,.ct-btn-lg>img,.ct-btn-md>img,.ct-btn-sm>img,.ct-btn-xs>img{display:block;min-inline-size:0;margin:0;padding:0;object-fit:cover;object-position:center;pointer-events:none}.ct-icon i,.ct-icon-xl i,.ct-icon-lg i,.ct-icon-md i,.ct-icon-sm i,.ct-icon-xs i,.btn-glyph>i,.ct-btn>i,.ct-btn-xl>i,.ct-btn-lg>i,.ct-btn-md>i,.ct-btn-sm>i,.ct-btn-xs>i{display:inline-block;min-inline-size:0;margin:0;padding:0;line-height:1;font-style:normal;speak:none;pointer-events:none}.btn-glyph{display:inline-block;min-inline-size:0;margin:0;padding:0;line-height:1;color:currentColor;speak:none;pointer-events:none}.btn-label{display:inline-block;min-inline-size:0;margin:0;padding:0;text-align:center;vertical-align:middle;line-height:1;letter-spacing:-.02em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:"Segoe UI",Arial,sans-serif;pointer-events:none}.ct-icon[class*="icon-shape-"],.ct-icon-xl[class*="icon-shape-"],.ct-icon-lg[class*="icon-shape-"],.ct-icon-md[class*="icon-shape-"],.ct-icon-sm[class*="icon-shape-"],.ct-icon-xs[class*="icon-shape-"]{inline-size:unset;border:none;outline:none;border-radius:unset;box-shadow:unset;}[class*="icon-shape-"]{background:light-dark(#B0B0B0,#4A4A4A);}[class*="ct-icon"].icon-shape-circle{-webkit-clip-path:circle(50% at 50% 50%);clip-path:circle(50% at 50% 50%);aspect-ratio:1/1}[class*="ct-icon"].icon-shape-ellipse{-webkit-clip-path:ellipse(50% 60% at 50% 50%);clip-path:ellipse(50% 60% at 50% 50%);aspect-ratio:1.4/1}[class*="ct-icon"].icon-shape-square{aspect-ratio:1/1}[class*="ct-icon"].icon-shape-leaf{clip-path:inset(0 0 0 0 round 40% 0);aspect-ratio:1/1}[class*="ct-icon"].icon-shape-rounded{clip-path:inset(0 0 0 0 round 15%);aspect-ratio:1/1}[class*="ct-icon"].icon-shape-arch{border-radius:50% 50% 0 0;aspect-ratio:1/1}[class*="ct-icon"].icon-shape-rhombus{-webkit-clip-path:polygon(50% 0%,100% 50%,50% 100%,0% 50%);clip-path:polygon(50% 0%,100% 50%,50% 100%,0% 50%);aspect-ratio:1/1}[class*="ct-icon"].icon-shape-pentagon{-webkit-clip-path:polygon(50% 0%,100% 38%,82% 100%,18% 100%,0% 38%);clip-path:polygon(50% 0%,100% 38%,82% 100%,18% 100%,0% 38%);aspect-ratio:1/1}[class*="ct-icon"].icon-shape-hexagon{-webkit-clip-path:polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%);clip-path:polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%);aspect-ratio:1/1}[class*="ct-icon"].icon-shape-octagon{-webkit-clip-path:polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%);clip-path:polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%);aspect-ratio:1/1}[class*="ct-icon"].icon-shape-decagon{-webkit-clip-path:polygon(50% 0%,80% 10%,100% 35%,100% 70%,80% 90%,50% 100%,20% 90%,0% 70%,0% 35%,20% 10%);clip-path:polygon(50% 0%,80% 10%,100% 35%,100% 70%,80% 90%,50% 100%,20% 90%,0% 70%,0% 35%,20% 10%);aspect-ratio:1/1}[class*="ct-icon"].icon-shape-trapezium{-webkit-clip-path:polygon(20% 0%,80% 0%,100% 100%,0% 100%);clip-path:polygon(20% 0%,80% 0%,100% 100%,0% 100%);aspect-ratio:1/1}[class*="ct-icon"].icon-shape-bevel{-webkit-clip-path:polygon(20% 0%,80% 0%,100% 20%,100% 80%,80% 100%,20% 100%,0% 80%,0% 20%);clip-path:polygon(20% 0%,80% 0%,100% 20%,100% 80%,80% 100%,20% 100%,0% 80%,0% 20%);aspect-ratio:1/1}[class*="ct-icon"].icon-shape-rebate{-webkit-clip-path:polygon(0% 15%,15% 15%,15% 0%,85% 0%,85% 15%,100% 15%,100% 85%,85% 85%,85% 100%,15% 100%,15% 85%,0% 85%);clip-path:polygon(0% 15%,15% 15%,15% 0%,85% 0%,85% 15%,100% 15%,100% 85%,85% 85%,85% 100%,15% 100%,15% 85%,0% 85%);aspect-ratio:1/1}*:has(>.ct-badge){position:relative}.ct-badge{position:absolute;inset-inline-end:calc(var(--ct-badge-height) * var(--ct-badge-inset-factor));inset-block-start:calc(var(--ct-badge-height) * var(--ct-badge-inset-factor));inset-inline-start:auto;inset-block-end:auto;block-size:calc(var(--ct-badge-height));aspect-ratio:1/1;font-size:calc(var(--ct-badge-height) * 0.4);font-weight:800;border-radius:50%;display:inline-block;text-align:center;align-content:center;line-height:1;border:1px solid currentColor;color:light-dark(#fff,#000);background-color:light-dark(rgb(255 15 15),rgb(255 15 15 / .5));white-space:nowrap;text-overflow:ellipsis;overflow:hidden;z-index:10}.badge-top-start{inset-inline-start:calc(var(--ct-badge-height) * var(--ct-badge-inset-factor));inset-block-start:calc(var(--ct-badge-height) * var(--ct-badge-inset-factor));inset-inline-end:auto;inset-block-end:auto}.badge-top-end{inset-inline-end:calc(var(--ct-badge-height) * var(--ct-badge-inset-factor));inset-block-start:calc(var(--ct-badge-height) * var(--ct-badge-inset-factor));inset-inline-start:auto;inset-block-end:auto}.badge-bottom-start{inset-inline-start:calc(var(--ct-badge-height) * var(--ct-badge-inset-factor));inset-block-end:calc(var(--ct-badge-height) * var(--ct-badge-inset-factor));inset-inline-end:auto;inset-block-start:auto}.badge-bottom-end{inset-inline-end:calc(var(--ct-badge-height) * var(--ct-badge-inset-factor));inset-block-end:calc(var(--ct-badge-height) * var(--ct-badge-inset-factor));inset-inline-start:auto;inset-block-start:auto}.ct-btn::after,.ct-btn-xl::after,.ct-btn-lg::after,.ct-btn-md::after,.ct-btn-sm::after,.ct-btn-xs::after{content:"";width:inherit;height:inherit;position:absolute;inset:0;border:none;border-radius:inherit;pointer-events:none;background:radial-gradient(circle,transparent 1%,rgb(0 0 0 / .05) 1%) center / 15000%;background-size:15000%;opacity:0;transition:background-size 0.3s,opacity 0.3s,transform 0.2s;overflow:hidden}.ct-btn:hover::after,.ct-btn-xl:hover::after,.ct-btn-lg:hover::after,.ct-btn-md:hover::after,.ct-btn-sm:hover::after,.ct-btn-xs:hover::after{opacity:1}.ct-btn:active::after,.ct-btn-xl:active::after,.ct-btn-lg:active::after,.ct-btn-md:active::after,.ct-btn-sm:active::after,.ct-btn-xs:active::after{background-size:100%}.ct-btn:disabled::after,.ct-btn-xl:disabled::after,.ct-btn-lg:disabled::after,.ct-btn-md:disabled::after,.ct-btn-sm:disabled::after,.ct-btn-xs:disabled::after,.ct-btn[disabled]::after,.ct-btn-xl[disabled]::after,.ct-btn-lg[disabled]::after,.ct-btn-md[disabled]::after,.ct-btn-sm[disabled]::after,.ct-btn-xs[disabled]::after,a.ct-btn[aria-disabled="true"]::after,a.ct-btn-xl[aria-disabled="true"]::after,a.ct-btn-lg[aria-disabled="true"]::after,a.ct-btn-md[aria-disabled="true"]::after,a.ct-btn-sm[aria-disabled="true"]::after,a.ct-btn-xs[aria-disabled="true"]::after{opacity:0}.ct-btn:hover,.ct-btn-xl:hover,.ct-btn-lg:hover,.ct-btn-md:hover,.ct-btn-sm:hover,.ct-btn-xs:hover{opacity:.9;filter:brightness(.97)}.ct-btn:active,.ct-btn-xl:active,.ct-btn-lg:active,.ct-btn-md:active,.ct-btn-sm:active,.ct-btn-xs:active{transform:scale(1);filter:brightness(.9);box-shadow:0 0 4px 0 currentColor}.ct-btn:focus-visible,.ct-btn-xl:focus-visible,.ct-btn-lg:focus-visible,.ct-btn-md:focus-visible,.ct-btn-sm:focus-visible,.ct-btn-xs:focus-visible{outline:3px solid currentColor;outline-offset:3px}a[href]:hover{text-decoration:underline}a:visited{color:purple}:disabled,[disabled],a[aria-disabled="true"]{opacity:.5}\n';
}
const style = document.createElement("style");
((style.textContent += rootVariables()), document.head.appendChild(style));
class Config {
    constructor() {
        console.log("Config class initialized");
    }
    static measurement = "isStatic"; // 'isStatic' or 'isFluid'
    static materialDesignSeedColor = "#673ab7";
    static setColor(newColor) {
        this.materialDesignSeedColor = newColor;
    }
    static BreakPoints = {
        xs: { min: 0, max: 319.98 },
        sm: { min: 320, max: 767.98 },
        md: { min: 768, max: 1151.98 },
        lg: { min: 1152, max: 1535.98 },
        xl: { min: 1536, max: 3071.98 },
        xxl: { min: 3072, max: Infinity }
    };
    static PreConfiguredMap = {
        dir: { properties: ["direction"], valueCount: 1, fluid: false },
        bg: {
            properties: ["background"],
            valueCount: 64,
            fluid: false
        },
        b: { properties: ["border"], valueCount: 3, fluid: false },
        "b-l": { properties: ["border-left"], valueCount: 3, fluid: false },
        "b-t": { properties: ["border-top"], valueCount: 3, fluid: false },
        "b-r": { properties: ["border-right"], valueCount: 3, fluid: false },
        "b-b": { properties: ["border-bottom"], valueCount: 3, fluid: false },
        "b-w": { properties: ["border-width"], valueCount: 4, fluid: false },
        "b-s": { properties: ["border-style"], valueCount: 4, fluid: false },
        "b-c": { properties: ["border-color"], valueCount: 4, fluid: false },
        "b-img": { properties: ["border-image"], valueCount: 6, fluid: false },
        "b-l-w": {
            properties: ["border-left-width"],
            valueCount: 1,
            fluid: false
        },
        "b-t-w": {
            properties: ["border-top-width"],
            valueCount: 1,
            fluid: false
        },
        "b-r-w": {
            properties: ["border-right-width"],
            valueCount: 1,
            fluid: false
        },
        "b-b-w": {
            properties: ["border-bottom-width"],
            valueCount: 1,
            fluid: false
        },
        "b-l-s": {
            properties: ["border-left-style"],
            valueCount: 1,
            fluid: false
        },
        "b-t-s": {
            properties: ["border-top-style"],
            valueCount: 1,
            fluid: false
        },
        "b-r-s": {
            properties: ["border-right-style"],
            valueCount: 1,
            fluid: false
        },
        "b-b-s": {
            properties: ["border-bottom-style"],
            valueCount: 1,
            fluid: false
        },
        "b-l-c": {
            properties: ["border-left-color"],
            valueCount: 1,
            fluid: false
        },
        "b-t-c": {
            properties: ["border-top-color"],
            valueCount: 1,
            fluid: false
        },
        "b-r-c": {
            properties: ["border-right-color"],
            valueCount: 1,
            fluid: false
        },
        "b-b-c": {
            properties: ["border-bottom-color"],
            valueCount: 1,
            fluid: false
        },
        r: { properties: ["border-radius"], valueCount: 4, fluid: false },
        "r-tl": {
            properties: ["border-top-left-radius"],
            valueCount: 1,
            fluid: false
        },
        "r-tr": {
            properties: ["border-top-right-radius"],
            valueCount: 1,
            fluid: false
        },
        "r-bl": {
            properties: ["border-bottom-left-radius"],
            valueCount: 1,
            fluid: false
        },
        "r-br": {
            properties: ["border-bottom-right-radius"],
            valueCount: 1,
            fluid: false
        },
        o: { properties: ["outline"], valueCount: 3, fluid: false },
        "o-w": { properties: ["outline-width"], valueCount: 1, fluid: false },
        "o-s": { properties: ["outline-style"], valueCount: 1, fluid: false },
        "o-c": { properties: ["outline-color"], valueCount: 1, fluid: false },
        "o-off": {
            properties: ["outline-offset"],
            valueCount: 1,
            fluid: false
        },
        "b-is": {
            properties: ["border-inline-start"],
            valueCount: 3,
            fluid: false
        },
        "b-bs": {
            properties: ["border-block-start"],
            valueCount: 3,
            fluid: false
        },
        "b-ie": {
            properties: ["border-inline-end"],
            valueCount: 3,
            fluid: false
        },
        "b-be": {
            properties: ["border-block-end"],
            valueCount: 3,
            fluid: false
        },
        "b-is-w": {
            properties: ["border-inline-start-width"],
            valueCount: 1,
            fluid: false
        },
        "b-bs-w": {
            properties: ["border-block-start-width"],
            valueCount: 1,
            fluid: false
        },
        "b-ie-w": {
            properties: ["border-inline-end-width"],
            valueCount: 1,
            fluid: false
        },
        "b-be-w": {
            properties: ["border-block-end-width"],
            valueCount: 1,
            fluid: false
        },
        "b-is-s": {
            properties: ["border-inline-start-style"],
            valueCount: 1,
            fluid: false
        },
        "b-bs-s": {
            properties: ["border-block-start-style"],
            valueCount: 1,
            fluid: false
        },
        "b-ie-s": {
            properties: ["border-inline-end-style"],
            valueCount: 1,
            fluid: false
        },
        "b-be-s": {
            properties: ["border-block-end-style"],
            valueCount: 1,
            fluid: false
        },
        "b-is-c": {
            properties: ["border-inline-start-color"],
            valueCount: 1,
            fluid: false
        },
        "b-bs-c": {
            properties: ["border-block-start-color"],
            valueCount: 1,
            fluid: false
        },
        "b-ie-c": {
            properties: ["border-inline-end-color"],
            valueCount: 1,
            fluid: false
        },
        "b-be-c": {
            properties: ["border-block-end-color"],
            valueCount: 1,
            fluid: false
        },
        "r-ss": {
            properties: ["border-start-start-radius"],
            valueCount: 1,
            fluid: false
        },
        "r-se": {
            properties: ["border-start-end-radius"],
            valueCount: 1,
            fluid: false
        },
        "r-es": {
            properties: ["border-end-start-radius"],
            valueCount: 1,
            fluid: false
        },
        "r-ee": {
            properties: ["border-end-end-radius"],
            valueCount: 1,
            fluid: false
        },
        "text-color": { properties: ["color"], valueCount: 1, fluid: false },
        "text-size": {
            properties: ["font-size"],
            valueCount: 1,
            fluid: true,
            strategy: "text"
        },
        "text-weight": {
            properties: ["font-weight"],
            valueCount: 1,
            fluid: false
        },
        "text-style": {
            properties: ["font-style"],
            valueCount: 1,
            fluid: false
        },
        "text-align": {
            properties: ["text-align"],
            valueCount: 1,
            fluid: false
        },
        "text-height": {
            properties: ["line-height"],
            valueCount: 1,
            fluid: false
        },
        "text-shadow": {
            properties: ["text-shadow"],
            valueCount: 1,
            fluid: false
        },
        "text-transform": {
            properties: ["text-transform"],
            valueCount: 1,
            fluid: false
        },
        "text-decoration": {
            properties: ["text-decoration"],
            valueCount: 1,
            fluid: false
        },
        "text-stretch": {
            properties: ["text-stretch"],
            valueCount: 1,
            fluid: false
        },
        "text-spacing": {
            properties: ["letter-spacing"],
            valueCount: 1,
            fluid: false
        },
        "word-spacing": {
            properties: ["word-spacing"],
            valueCount: 1,
            fluid: false
        },
        "text-orientation": {
            properties: ["text-orientation"],
            valueCount: 1,
            fluid: false
        },
        "w-mode": { properties: ["writing-mode"], valueCount: 1, fluid: false },
        w: {
            properties: ["width"],
            valueCount: 1,
            fluid: true,
            axis: "x",
            strategy: "size"
        },
        "max-w": {
            properties: ["max-width"],
            valueCount: 1,
            fluid: true,
            axis: "x",
            strategy: "size"
        },
        "min-w": {
            properties: ["min-width"],
            valueCount: 1,
            fluid: true,
            axis: "x",
            strategy: "size"
        },
        h: {
            properties: ["height"],
            valueCount: 1,
            fluid: true,
            axis: "y",
            strategy: "size"
        },
        "max-h": {
            properties: ["max-height"],
            valueCount: 1,
            fluid: true,
            axis: "y",
            strategy: "size"
        },
        "min-h": {
            properties: ["min-height"],
            valueCount: 1,
            fluid: true,
            axis: "y",
            strategy: "size"
        },
        is: {
            properties: ["inline-size"],
            valueCount: 1,
            fluid: true,
            axis: "x",
            strategy: "size"
        },
        "max-is": {
            properties: ["max-inline-size"],
            valueCount: 1,
            fluid: true,
            axis: "x",
            strategy: "size"
        },
        "min-is": {
            properties: ["min-inline-size"],
            valueCount: 1,
            fluid: true,
            axis: "x",
            strategy: "size"
        },
        bs: {
            properties: ["block-size"],
            valueCount: 1,
            fluid: true,
            axis: "y",
            strategy: "size"
        },
        "max-bs": {
            properties: ["max-block-size"],
            valueCount: 1,
            fluid: true,
            axis: "y",
            strategy: "size"
        },
        "min-bs": {
            properties: ["min-block-size"],
            valueCount: 1,
            fluid: true,
            axis: "y",
            strategy: "size"
        },
        inset: {
            properties: ["inset"],
            valueCount: 4,
            fluid: false,
            strategy: "inset"
        },
        "inset-is": {
            properties: ["inset-inline-start"],
            valueCount: 1,
            fluid: false
        },
        "inset-ie": {
            properties: ["inset-inline-end"],
            valueCount: 1,
            fluid: false
        },
        "inset-bs": {
            properties: ["inset-block-start"],
            valueCount: 1,
            fluid: false
        },
        "inset-be": {
            properties: ["inset-block-end"],
            valueCount: 1,
            fluid: false
        },
        "inset-x": {
            properties: ["inset-inline-start", "inset-inline-end"],
            valueCount: 2,
            fluid: false
        },
        "inset-y": {
            properties: ["inset-block-start", "inset-block-end"],
            valueCount: 2,
            fluid: false
        },
        left: {
            properties: ["inset-inline-start"],
            valueCount: 1,
            fluid: false
        },
        top: { properties: ["inset-block-start"], valueCount: 1, fluid: false },
        right: {
            properties: ["inset-inline-end"],
            valueCount: 1,
            fluid: false
        },
        bottom: {
            properties: ["inset-block-end"],
            valueCount: 1,
            fluid: false
        },
        m: {
            properties: ["margin"],
            valueCount: 4,
            fluid: true,
            strategy: "spacing"
        },
        "m-is": {
            properties: ["margin-inline-start"],
            valueCount: 1,
            fluid: true,
            axis: "x",
            strategy: "spacing"
        },
        "m-ie": {
            properties: ["margin-inline-end"],
            valueCount: 1,
            fluid: true,
            axis: "x",
            strategy: "spacing"
        },
        "m-bs": {
            properties: ["margin-block-start"],
            valueCount: 1,
            fluid: true,
            axis: "y",
            strategy: "spacing"
        },
        "m-be": {
            properties: ["margin-block-end"],
            valueCount: 1,
            fluid: true,
            axis: "y",
            strategy: "spacing"
        },
        ml: {
            properties: ["margin-left"],
            valueCount: 1,
            fluid: true,
            axis: "x",
            strategy: "spacing"
        },
        mr: {
            properties: ["margin-right"],
            valueCount: 1,
            fluid: true,
            axis: "x",
            strategy: "spacing"
        },
        mt: {
            properties: ["margin-top"],
            valueCount: 1,
            fluid: true,
            axis: "y",
            strategy: "spacing"
        },
        mb: {
            properties: ["margin-bottom"],
            valueCount: 1,
            fluid: true,
            axis: "y",
            strategy: "spacing"
        },
        mx: {
            properties: ["margin-inline-start", "margin-inline-end"],
            valueCount: 2,
            fluid: true,
            axis: "x",
            strategy: "spacing"
        },
        my: {
            properties: ["margin-block-start", "margin-block-end"],
            valueCount: 2,
            fluid: true,
            axis: "y",
            strategy: "spacing"
        },
        p: {
            properties: ["padding"],
            valueCount: 4,
            fluid: true,
            strategy: "spacing"
        },
        "p-is": {
            properties: ["padding-inline-start"],
            valueCount: 1,
            fluid: true,
            axis: "x",
            strategy: "spacing"
        },
        "p-ie": {
            properties: ["padding-inline-end"],
            valueCount: 1,
            fluid: true,
            axis: "x",
            strategy: "spacing"
        },
        "p-bs": {
            properties: ["padding-block-start"],
            valueCount: 1,
            fluid: true,
            axis: "y",
            strategy: "spacing"
        },
        "p-be": {
            properties: ["padding-block-end"],
            valueCount: 1,
            fluid: true,
            axis: "y",
            strategy: "spacing"
        },
        pl: {
            properties: ["padding-left"],
            valueCount: 1,
            fluid: true,
            axis: "x",
            strategy: "spacing"
        },
        pr: {
            properties: ["padding-right"],
            valueCount: 1,
            fluid: true,
            axis: "x",
            strategy: "spacing"
        },
        pt: {
            properties: ["padding-top"],
            valueCount: 1,
            fluid: true,
            axis: "y",
            strategy: "spacing"
        },
        pb: {
            properties: ["padding-bottom"],
            valueCount: 1,
            fluid: true,
            axis: "y",
            strategy: "spacing"
        },
        px: {
            properties: ["padding-inline-start", "padding-inline-end"],
            valueCount: 2,
            fluid: true,
            axis: "x",
            strategy: "spacing"
        },
        py: {
            properties: ["padding-block-start", "padding-block-end"],
            valueCount: 2,
            fluid: true,
            axis: "y",
            strategy: "spacing"
        },
        fx: { properties: ["flex"], valueCount: 3, fluid: false },
        "fx-grow": { properties: ["flex-grow"], valueCount: 1, fluid: false },
        "fx-basis": { properties: ["flex-basis"], valueCount: 1, fluid: false },
        "fx-shrink": {
            properties: ["flex-shrink"],
            valueCount: 1,
            fluid: false
        },
        "gr-t": { properties: ["grid-template"], valueCount: 64, fluid: false },
        "gr-tr": {
            properties: ["grid-template-rows"],
            valueCount: 64,
            fluid: false
        },
        "gr-tc": {
            properties: ["grid-template-columns"],
            valueCount: 64,
            fluid: false
        },
        "gr-ta": {
            properties: ["grid-template-areas"],
            valueCount: 64,
            fluid: false
        },
        "gr-row": { properties: ["grid-row"], valueCount: 1, fluid: false },
        "gr-col": { properties: ["grid-column"], valueCount: 1, fluid: false },
        "gr-area": { properties: ["grid-area"], valueCount: 1, fluid: false },
        "gr-flow": {
            properties: ["grid-auto-flow"],
            valueCount: 1,
            fluid: false
        },
        "gr-auto-r": {
            properties: ["grid-auto-rows"],
            valueCount: 1,
            fluid: false
        },
        "gr-auto-c": {
            properties: ["grid-auto-columns"],
            valueCount: 1,
            fluid: false
        },
        g: {
            properties: ["gap"],
            valueCount: 1,
            fluid: true,
            strategy: "spacing"
        },
        "g-row": {
            properties: ["row-gap"],
            valueCount: 1,
            fluid: true,
            axis: "y",
            strategy: "spacing"
        },
        "g-col": {
            properties: ["column-gap"],
            valueCount: 1,
            fluid: true,
            axis: "x",
            strategy: "spacing"
        },
        order: { properties: ["order"], valueCount: 1, fluid: false },
        jc: { properties: ["justify-content"], valueCount: 1, fluid: false },
        ac: { properties: ["align-content"], valueCount: 1, fluid: false },
        pc: { properties: ["place-content"], valueCount: 1, fluid: false },
        js: { properties: ["justify-self"], valueCount: 1, fluid: false },
        as: { properties: ["align-self"], valueCount: 1, fluid: false },
        ps: { properties: ["place-self"], valueCount: 1, fluid: false },
        ji: { properties: ["justify-items"], valueCount: 1, fluid: false },
        ai: { properties: ["align-items"], valueCount: 1, fluid: false },
        pi: { properties: ["place-items"], valueCount: 1, fluid: false },
        "v-align": {
            properties: ["vertical-align"],
            valueCount: 1,
            fluid: false
        },
        shadow: { properties: ["box-shadow"], valueCount: 64, fluid: false },
        overflow: { properties: ["overflow"], valueCount: 1, fluid: false },
        transform: { properties: ["transform"], valueCount: 1, fluid: false },
        transition: { properties: ["transition"], valueCount: 1, fluid: false },
        animation: { properties: ["animation"], valueCount: 1, fluid: false },
        scroll: {
            properties: ["scroll-behavior"],
            valueCount: 1,
            fluid: false
        },
        filter: { properties: ["filter"], valueCount: 1, fluid: false },
        float: { properties: ["float"], valueCount: 1, fluid: false },
        scale: { properties: ["scale"], valueCount: 1, fluid: false },
        box: { properties: ["box-sizing"], valueCount: 1, fluid: false },
        fill: { properties: ["fill"], valueCount: 1, fluid: false },
        stroke: { properties: ["stroke"], valueCount: 1, fluid: false },
        caret: { properties: ["caret-color"], valueCount: 1, fluid: false },
        ratio: { properties: ["aspect-ratio"], valueCount: 1, fluid: false },
        opacity: { properties: ["opacity"], valueCount: 1, fluid: false },
        "z-index": { properties: ["z-index"], valueCount: 1, fluid: false }
    };
    static GetActivePreConfiguredMap(dir = "ltr") {
        const base = this.PreConfiguredMap;
        const isRTL = String(dir).toLowerCase() === "rtl";
        const rtlOverrides = {};
        const ltrOverrides = {};
        const map = {
            ...base,
            ...(isRTL ? rtlOverrides : ltrOverrides)
        };
        return map;
    }
    static PreDefinedMap(dir = "ltr") {
        const base = {
            "fx-row-auto": {
                ltr: "flex-direction: row;",
                rtl: "flex-direction: row-reverse;"
            },
            "fx-row-auto-r": {
                ltr: "flex-direction: row-reverse;",
                rtl: "flex-direction: row;"
            }
        };
        return Object.fromEntries(
            Object.entries(base).map(([key, val]) => [key, val[dir]])
        );
    }
    static cssUtilityMap = {
        "fluid-container":
            "width:calc(100vw - ((100vw - 300px)/ 10));margin-inline:auto;padding-block:calc(1.5svh + 0.5vw);padding-inline:clamp(1rem,5%,3rem);box-sizing:border-box;display:flow-root",
        "d-none": "display: none;",
        "d-grid": "display: grid;",
        "d-flex": "display: flex;",
        "d-block": "display: block;",
        "d-inline": "display: inline;",
        "d-inline-grid": "display: inline-grid;",
        "d-inline-flex": "display: inline-flex;",
        "d-inline-block": "display: inline-block;",
        "d-contents": "display: contents;",
        "d-table": "display: table;",
        "d-ruby": "display: ruby;",
        "d-inherit": "display: inherit;",
        "d-initial": "display: initial;",
        "d-revert": "display: revert;",
        "d-revert-layer": "display: revert-layer;",
        "d-unset": "display: unset;",
        "p-static": "position: static;",
        "p-relative": "position: relative;",
        "p-absolute": "position: absolute;",
        "p-fixed": "position: fixed;",
        "p-sticky": "position: sticky;",
        "p-inherit": "position: inherit;",
        "p-initial": "position: initial;",
        "p-revert": "position: revert;",
        "p-revert-layer": "position: revert-layer;",
        "p-unset": "position: unset;",
        "fx-row": "flex-direction: row;",
        "fx-row-r": "flex-direction: row-reverse;",
        "fx-col": "flex-direction: column;",
        "fx-col-r": "flex-direction: column-reverse;",
        "fx-wrap": "flex-wrap: wrap;",
        "fx-nowrap": "flex-wrap: nowrap;",
        "fx-wrap-reverse": "flex-wrap: wrap-reverse;",
        "font-sans": "font-family: ui-sans-serif, sans-serif;",
        "font-serif": 'font-family: Georgia, "Times New Roman", Times, serif;',
        "font-mono":
            'font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;',
        "font-cursive":
            'font-family: "Segoe Script", "Brush Script MT", "Comic Sans MS", cursive;',
        "font-fantasy": 'font-family: Impact, "Copperplate", fantasy;',
        "font-system": "font-family: system-ui, sans-serif;",
        "font-rounded": "font-family: ui-rounded, system-ui, sans-serif;",
        "font-math": "font-family: math, serif;",
        "font-arial":
            'font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;',
        "font-tahoma": "font-family: Tahoma, Verdana, Segoe UI, sans-serif;",
        "font-verdana": "font-family: Verdana, Tahoma, Segoe UI, sans-serif;",
        "font-helvetica":
            'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;',
        "font-trebuchet":
            'font-family: "Trebuchet MS", Verdana, Arial, sans-serif;',
        "font-times": 'font-family: "Times New Roman", Times, serif;',
        "font-georgia":
            'font-family: Georgia, "Times New Roman", Times, serif;',
        "font-cambria":
            'font-family: Cambria, Georgia, "Times New Roman", serif;',
        "font-palatino":
            'font-family: "Palatino Linotype", Palatino, Georgia, serif;',
        "font-garamond":
            'font-family: Garamond, Baskerville, "Times New Roman", serif;',
        "font-courier": 'font-family: "Courier New", Courier, monospace;',
        "font-consolas":
            'font-family: Consolas, "Liberation Mono", "Courier New", monospace;',
        "font-monaco": "font-family: Monaco, Menlo, Consolas, monospace;",
        "font-lucida": 'font-family: "Lucida Console", Monaco, monospace;',
        "font-dejaVu":
            'font-family: "DejaVu Sans Mono", "Liberation Mono", Consolas, monospace;',
        "font-bradley":
            'font-family: "Bradley Hand", Segoe Script", "Brush Script MT", "Comic Sans MS", cursive;',
        "font-comic": 'font-family: "Comic Sans MS", "Segoe Script", cursive;',
        "font-brush":
            'font-family: "Brush Script MT", "Lucida Handwriting", cursive;',
        "font-handwriting":
            'font-family: "Lucida Handwriting", "Segoe Script", cursive;',
        "font-apple-cursive":
            'font-family: "Apple Chancery", "Brush Script MT", cursive;',
        "font-impact": "font-family: Impact, fantasy;",
        "font-luminari": "font-family: Luminari, fantasy;",
        "font-chalkduster": "font-family: Chalkduster, fantasy;",
        "font-jazz": 'font-family: "Jazz LET", fantasy;',
        "font-blippo": "font-family: Blippo, fantasy;",
        "font-stencil": 'font-family: "Stencil Std", fantasy;',
        "font-marker": 'font-family: "Marker Felt", fantasy;',
        "font-trattatello": "font-family: Trattatello, fantasy;",

        "font-archivo": 'font-family: "Archivo Black", sans-serif;',
        "font-roboto": 'font-family: "Roboto", sans-serif;',
        "font-montserrat": 'font-family: "Montserrat", sans-serif;',
        "font-open-sans":
            'font-family: "Open Sans", sans-serif;font-optical-sizing: auto;font-weight: <weight>;font-style: normal;font-variation-settings:"wdth" 100;',
        "font-mozilla-headline": 'font-family: "Mozilla Headline", sans-serif;',
        "font-cinzel": 'font-family: "Cinzel", serif;',
        "font-playfair":
            'font-family: "Playfair", serif;font-optical-sizing: auto;font-weight: <weight>;font-style: normal;font-variation-settings:"wdth" 100;',
        "font-lora":
            'font-family: "Lora", serif;font-optical-sizing: auto;font-weight: <weight>;font-style: normal;',
        "font-space-mono": 'font-family: "Space Mono", monospace;',
        "font-plex-mono": 'font-family: "IBM Plex Mono", monospace;',
        "font-great-vibes": 'font-family: "Great Vibes", cursive;',
        "font-dancing-script": 'font-family: "Dancing Script", cursive;',
        "font-medievalsharp": 'font-family: "MedievalSharp", cursive;',
        "font-uncial-antiqua": 'font-family: "Uncial Antiqua", system-ui;'
    };
    static ImportFontUrlMap = {
        archivo:
            '@import url("https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap");',
        roboto: '@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");',
        montserrat:
            '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");',
        "open-sans":
            '@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");',
        "mozilla-headline":
            '@import url("https://fonts.googleapis.com/css2?family=Mozilla+Headline:wght@200..700&display=swap");',
        cinzel: '@import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap");',
        playfair:
            '@import url("https://fonts.googleapis.com/css2?family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap");',
        lora: '@import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap");',
        "space-mono":
            '@import url("https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap");',
        "plex-mono":
            '@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");',
        "great-vibes":
            '@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");',
        "dancing-script":
            '@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap");',
        medievalsharp:
            '@import url("https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap");',
        "uncial-antiqua":
            '@import url("https://fonts.googleapis.com/css2?family=Uncial+Antiqua&display=swap");'
    };
    static mediaRules = {
        "(max-width: 768px)": {
            navbar: ``,
            sidebar: ``
        },
        "(max-width: 480px)": {
            navbar: ``
        }
    };
} /* Config */
class Conte extends Config {
    constructor() {
        super();
        this.init();
    }
    init() {
        console.log("ConteUI init started");
        const elements = document.querySelectorAll("[class]");
        if (elements.length === 0) {
            console.warn("⚠️ No html elements found with a class.");
        }
        elements.forEach((el, i) => {
            const elId = `el-id-${i + 1}`;
            el.classList.add(elId);
            el.classList.forEach(cls => {
                if (!cls) {
                    console.warn("⚠️ Skipped empty class:", cls);
                    return null;
                }
                const item = clsManager(cls, el, elId);
                generateCss(item);
            });
        });
    } // init
} /* Conte */
window.addEventListener("DOMContentLoaded", () => {
    new Conte();
});
function clsManager(cls, el, elId) {
    if (!cls || typeof cls !== "string") return null;
    const entity = {
        element: el,
        originalClass: cls,
        clsId: elId || null,
        hasTheme: false,
        themeName: null,
        hasPseudoClass: false,
        pseudoClass: null,
        hasPseudoElement: false,
        pseudoElement: null,
        hasBreakpoint: false,
        breakpointName: null,
        newClass: null,
        hasExternalId: false,
        externalId: null,
        importFont: false,
        urlFontLtr: "",
        urlFontRtl: "",
        cssLtr: "",
        cssRtl: ""
    };
    try {
        // theme>name(css-prop:css-val)
        if (cls.startsWith("theme>")) {
            entity.hasTheme = true;
            cls = cls.slice(6);
            const open = cls.indexOf("(");
            const close = cls.lastIndexOf(")");
            if (open === -1 || close === -1) return;
            entity.themeName = cls.slice(0, open);
            entity.newClass = cls.slice(open + 1, close);
            cls = entity.newClass;
        }
        // @bp|css-prop:css-val
        if (cls.startsWith("@")) {
            const sep = cls.indexOf("|");
            if (sep === -1) return;
            const bp = cls.slice(1, sep);
            if (!(bp in Config.BreakPoints)) return;
            entity.hasBreakpoint = true;
            entity.breakpointName = bp;
            cls = cls.slice(sep + 1).trim();
            entity.newClass = cls;
        }
        // ~:hover:focus(css-prop:css-val)
        if (cls.startsWith("~:")) {
            entity.hasPseudoClass = true;
            const open = cls.indexOf("(");
            const close = cls.lastIndexOf(")");
            if (open !== -1 && close !== -1 && close > open) {
                entity.pseudoClass = cls.slice(1, open);
                entity.newClass = cls.slice(open + 1, close);
                cls = entity.newClass;
            }
        }
        // ::placeholder(css-prop:css-val)
        if (cls.startsWith("::")) {
            entity.hasPseudoElement = true;
            const open = cls.indexOf("(");
            const close = cls.lastIndexOf(")");
            if (open !== -1 && close !== -1 && close > open) {
                entity.pseudoElement = cls.slice(0, open);
                entity.newClass = cls.slice(open + 1, close);
                cls = entity.newClass;
            }
        }
        // external element id
        if (cls.startsWith("ui-")) {
            entity.hasExternalId = true;
            entity.externalId = cls.trim();
        }
        cls = cls.trim().replace(/;$/, "");

        util = cssUtilities(cls) || "";
        if (util) {
            entity.cssLtr = util.finalCssLtr || "";
            entity.cssRtl = util.finalCssRtl || "";
            entity.importFont = util.importFont || false;
            entity.urlFontLtr = util.UrlLtr || "";
            entity.urlFontRtl = util.UrlRtl || "";
        }
        return entity;
    } catch (e) {
        console.error("Error in clsManager:", e);
        return null;
    }
} // clsManager
function cssUtilities(cls) {
    let result = {
        property: null,
        value: null,
        hasImportant: [],
        hasFluid: [],
        hasStatic: [],
        preConfigured: [],
        preConfiguredCss: [],
        preConfiguredLtr: [],
        preConfiguredRtl: [],
        materialColor: false,
        preDefined: [],
        preDefinedCss: [],
        preDefinedLtr: [],
        preDefinedRtl: [],
        prepared: [],
        preparedCss: [],
        preparedLtr: [],
        preparedRtl: [],
        importFont: [],
        importFontUrl: [],
        importFontUrlLtr: [],
        importFontUrlRtl: [],
        hasMedia: [],
        mediaCss: [],
        rawCss: [],
        rawCssLtr: [],
        rawCssRtl: [],
        UrlLtr: "",
        UrlRtl: "",
        finalCssLtr: "",
        finalCssRtl: ""
    };
    const utilities = cls
        .split(";")
        .map(u => u.trim())
        .filter(Boolean);

    utilities.forEach((prop, i) => {
        cls = prop.trim();
        if (!cls) return;
        let property = null;
        let value = null;
        if (cls.includes(":")) {
            [property, value] = cls.split(":", 2);
            property = property.trim();
            value = value.trim();
        } else {
            property = cls.trim();
            value = null;
        }
        result.hasImportant[i] = value && value.endsWith("!") ? true : false;
        if (result.hasImportant[i]) value = value.replace(/!+$/, "").trim();
        result.hasFluid[i] = value && value.includes("-fluid") ? true : false;
        if (result.hasFluid[i]) value = value.replace("-fluid", "").trim();
        result.hasStatic[i] = value && value.includes("-static") ? true : false;
        if (result.hasStatic[i]) value = value.replace("-static", "").trim();
        result.property = property;
        result.value = value;
        const Configured = Config.GetActivePreConfiguredMap();
        if (Configured[property]) {
            result.preConfigured[i] = true;
            let ConfiguredCss = {};
            ["ltr", "rtl"].forEach(dir => {
                const configMap = Config.GetActivePreConfiguredMap(dir);
                const preConfigMap = configMap[property];
                if (!preConfigMap) return;
                let { properties, valueCount, fluid, axis, strategy } =
                    preConfigMap;
                if (Config.measurement === "isStatic")
                    fluid = result.hasFluid[i] ? true : false;
                if (Config.measurement === "isFluid")
                    fluid = result.hasStatic[i] ? false : true;
                const isFunction =
                    typeof value === "string" &&
                    value.includes("(") &&
                    value.endsWith(")");

                let finalValues;

                if (value && value.includes("(") && value.includes(")")) {
                    finalValues = [value.replace(/_/g, " ")];
                } else {
                    finalValues = value.split("_");

                    finalValues = finalValues.map(v => {
                        return MaterialDesign.hasColor(v)
                            ? MaterialDesign.getColor(v)
                            : v;
                    });
                }

                const transformFluidValues = (values, axis, strategy) => {
                    if (values.length === 1) {
                        return [
                            makeFluidValue(values[0], {
                                axis: axis || "x",
                                strategy
                            })
                        ];
                    }
                    if (values.length === 2) {
                        return [
                            makeFluidValue(values[0], { axis: "y", strategy }),
                            makeFluidValue(values[1], { axis: "x", strategy })
                        ];
                    }
                    if (values.length === 3) {
                        return [
                            makeFluidValue(values[0], { axis: "y", strategy }),
                            makeFluidValue(values[1], { axis: "x", strategy }),
                            makeFluidValue(values[2], { axis: "y", strategy })
                        ];
                    }
                    if (values.length === 4) {
                        return [
                            makeFluidValue(values[0], { axis: "y", strategy }),
                            makeFluidValue(values[1], { axis: "x", strategy }),
                            makeFluidValue(values[2], { axis: "y", strategy }),
                            makeFluidValue(values[3], { axis: "x", strategy })
                        ];
                    }
                    return values;
                }; // transformFluidValues

                let cssValues;

                if (fluid) {
                    cssValues = transformFluidValues(
                        finalValues,
                        axis,
                        strategy
                    );
                } else {
                    cssValues = finalValues;
                }

                ConfiguredCss[dir] =
                    properties
                        .map(
                            propName =>
                                `${propName}: ${cssValues.join(" ")}${result.hasImportant[i] ? " !important" : ""};`
                        )
                        .join("\n") + "\n";
            }); // foreach

            result.preConfiguredCss[i] = ConfiguredCss || {};
            result.preConfiguredLtr[i] = ConfiguredCss.ltr || "";
            result.preConfiguredRtl[i] = ConfiguredCss.rtl || "";
        } else {
            result.preConfigured[i] = false;
            result.preConfiguredCss[i] = {
                ltr: "",
                rtl: ""
            };
            result.preConfiguredLtr[i] = "";
            result.preConfiguredRtl[i] = "";
        }

        if (result.preConfiguredLtr[i]) {
            result.finalCssLtr += result.preConfiguredLtr[i] + "\n";
        }
        if (result.preConfiguredRtl[i]) {
            result.finalCssRtl += result.preConfiguredRtl[i] + "\n";
        } // preConfigured

        const Defined = Config.PreDefinedMap();
        if (Defined[result.property]) {
            result.preDefined[i] = true;
            let DefinedCss = {};
            ["ltr", "rtl"].forEach(dir => {
                let preDefinedCls = Config.PreDefinedMap(dir)[result.property];
                if (!preDefinedCls) return;

                if (preDefinedCls.endsWith(";")) {
                    preDefinedCls = preDefinedCls.slice(0, -1);
                }

                const importantFlag = !!result.hasImportant[i];
                DefinedCss[dir] =
                    `${preDefinedCls}${importantFlag ? " !important" : ""};`;
            });

            result.preDefinedCss[i] = {
                ltr: DefinedCss.ltr,
                rtl: DefinedCss.rtl
            };

            result.preDefinedLtr[i] = DefinedCss.ltr || "";
            result.preDefinedRtl[i] = DefinedCss.rtl || "";
        } // predefined

        if (result.preDefinedLtr[i])
            result.finalCssLtr += result.preDefinedLtr[i] + "\n";
        if (result.preDefinedRtl[i])
            result.finalCssRtl += result.preDefinedRtl[i] + "\n";

        const Pared = Config.cssUtilityMap;
        if (Pared[result.property]) {
            result.prepared[i] = true;
            let PreParedCls = Pared[result.property];

            if (PreParedCls.endsWith(";")) {
                PreParedCls = PreParedCls.slice(0, -1);
            }

            const cssLine = `${PreParedCls}${result.hasImportant[i] ? " !important" : ""};`;

            result.preparedCss[i] = {
                ltr: cssLine,
                rtl: cssLine
            };
            result.preparedLtr[i] = cssLine;
            result.preparedRtl[i] = cssLine;

            if (result.property.startsWith("font-")) {
                const fontKey = result.property.replace("font-", "");
                if (
                    Config.ImportFontUrlMap &&
                    fontKey in Config.ImportFontUrlMap
                ) {
                    const url = Config.ImportFontUrlMap[fontKey];
                    result.importFont[i] = true;
                    result.importFontUrl[i] = url;
                    result.importFontUrlLtr[i] = url;
                    result.importFontUrlRtl[i] = url;
                }
            }
        }
        if (result.preparedLtr[i])
            result.finalCssLtr += result.preparedLtr[i] + "\n";
        if (result.preparedRtl[i])
            result.finalCssRtl += result.preparedRtl[i] + "\n";
        if (result.importFontUrlLtr[i])
            result.UrlLtr += result.importFontUrlLtr[i] + "\n";
        if (result.importFontUrlRtl[i])
            result.UrlRtl += result.importFontUrlRtl[i] + "\n";

        // media
        for (const [query, rules] of Object.entries(Config.mediaRules)) {
            if (rules[cls]) {
                result.hasMedia[i] = true;

                const mediaBlock = `@media ${query} {
        .${cls} {
        ${rules[cls].trim()}
        }
        }\n`;

                if (!result.mediaCss) result.mediaCss = [];

                if (!result.mediaCss[i]) result.mediaCss[i] = "";

                result.mediaCss[i] += mediaBlock;
            }
        } // media

        if (result.mediaCss[i]) result.finalCssLtr += result.mediaCss[i] + "\n";
        if (result.mediaCss[i]) result.finalCssRtl += result.mediaCss[i] + "\n";
        
        const isConfigured = !!result.preConfigured[i];
        const isPredefined = !!result.preDefined[i];
        const isPrepared = !!result.prepared[i];
        const isMedia = !!result.mediaCss[i];
        if (!isConfigured && !isPredefined && !isPrepared && !isMedia) {
            if (result.property && result.value) {
                if (result.value.includes("_"))
                    result.value = result.value.replace(/_/g, " ");
                const fallbackCss = `${result.property}: ${result.value};`;
                result.rawCss[i] = fallbackCss;
                result.rawCssRtl[i] = fallbackCss;
                result.rawCssLtr[i] = fallbackCss;
                if (result.rawCss[i]) {
                    result.finalCssLtr += fallbackCss + "\n";
                    result.finalCssRtl += fallbackCss + "\n";
                }
            }
        }
    }); // foreach
    return result;
} // cssUtilities
function makeFluidValue(value, options = {}) {
    const { axis = "x", strategy } = options;

    const match = /^(-?\d*\.?\d+)([a-zA-Z%]*)$/.exec(value.trim());
    if (!match) return value;

    const [, num, unit] = match;
    const numeric = parseFloat(num);
    const safeUnit = unit || "px";

    const finalStrategy = strategy;

    switch (finalStrategy) {
        case "size":
            return fluidSize(numeric, safeUnit, axis === "x" ? "vw" : "vh");

        case "spacing":
            return fluidSpacing(numeric, safeUnit, axis === "x" ? "vw" : "vh");

        case "text":
            return fluidText(numeric, safeUnit);

        default:
            return value;
    }
}
function fluidSize(num, unit, viewportUnit) {
    return `clamp(${num}${unit}, calc(${num}${unit} + ((100${viewportUnit} - 300px) / 3) / 100), ${num * 2}${unit})`;
}
function fluidSpacing(num, unit, viewportUnit) {
    return `clamp(${num}${unit}, calc(${num}${unit} + ((100${viewportUnit} - 300px) * 0.0025)), ${num * 1.5}${unit})`;
}
function fluidText(num, unit) {
    return `clamp(${num * 0.875}${unit}, calc(${num}${unit} + 1vw), ${num * 1.25}${unit})`;
} // makeFluidValue
class MaterialDesign {
    static get useMaterialDesign() {
        return Config.materialDesign;
    }
    static get seedColor() {
        return Config.materialDesignSeedColor;
    }
    static themeMaterial = null;
    static materialColorMap = {
        primary: {
            light: "rgb(104 84 142)",
            dark: "rgb(211 188 253)"
        },
        surfaceTint: {
            light: "rgb(104 84 142)",
            dark: "rgb(211 188 253)"
        },
        onPrimary: {
            light: "rgb(255 255 255)",
            dark: "rgb(56 38 92)"
        },
        primaryContainer: {
            light: "rgb(235 221 255)",
            dark: "rgb(79 61 116)"
        },
        onPrimaryContainer: {
            light: "rgb(79 61 116)",
            dark: "rgb(235 221 255)"
        },
        secondary: {
            light: "rgb(99 91 112)",
            dark: "rgb(205 194 219)"
        },
        onSecondary: {
            light: "rgb(255 255 255)",
            dark: "rgb(52 45 64)"
        },
        secondaryContainer: {
            light: "rgb(233 222 248)",
            dark: "rgb(75 67 88)"
        },
        onSecondaryContainer: {
            light: "rgb(75 67 88)",
            dark: "rgb(233 222 248)"
        },
        tertiary: {
            light: "rgb(126 82 93)",
            dark: "rgb(240 183 197)"
        },
        onTertiary: {
            light: "rgb(255 255 255)",
            dark: "rgb(74 37 48)"
        },
        tertiaryContainer: {
            light: "rgb(255 217 225)",
            dark: "rgb(100 59 70)"
        },
        onTertiaryContainer: {
            light: "rgb(100 59 70)",
            dark: "rgb(255 217 225)"
        },
        error: {
            light: "rgb(186 26 26)",
            dark: "rgb(255 180 171)"
        },
        onError: {
            light: "rgb(255 255 255)",
            dark: "rgb(105 0 5)"
        },
        errorContainer: {
            light: "rgb(255 218 214)",
            dark: "rgb(147 0 10)"
        },
        onErrorContainer: {
            light: "rgb(147 0 10)",
            dark: "rgb(255 218 214)"
        },
        background: {
            light: "rgb(254 247 255)",
            dark: "rgb(21 18 24)"
        },
        onBackground: {
            light: "rgb(29 27 32)",
            dark: "rgb(231 224 232)"
        },
        surface: {
            light: "rgb(254 247 255)",
            dark: "rgb(21 18 24)"
        },
        onSurface: {
            light: "rgb(29 27 32)",
            dark: "rgb(231 224 232)"
        },
        surfaceVariant: {
            light: "rgb(231 224 235)",
            dark: "rgb(73 69 78)"
        },
        onSurfaceVariant: {
            light: "rgb(73 69 78)",
            dark: "rgb(203 196 207)"
        },
        outline: {
            light: "rgb(122 117 127)",
            dark: "rgb(148 143 153)"
        },
        outlineVariant: {
            light: "rgb(203 196 207)",
            dark: "rgb(73 69 78)"
        },
        shadow: {
            light: "rgb(0 0 0)",
            dark: "rgb(0 0 0)"
        },
        scrim: {
            light: "rgb(0 0 0)",
            dark: "rgb(0 0 0)"
        },
        inverseSurface: {
            light: "rgb(50 47 53)",
            dark: "rgb(231 224 232)"
        },
        inverseOnSurface: {
            light: "rgb(245 239 247)",
            dark: "rgb(50 47 53)"
        },
        inversePrimary: {
            light: "rgb(211 188 253)",
            dark: "rgb(104 84 142)"
        },
        primaryFixed: {
            light: "rgb(235 221 255)",
            dark: "rgb(235 221 255)"
        },
        onPrimaryFixed: {
            light: "rgb(35 15 70)",
            dark: "rgb(35 15 70)"
        },
        primaryFixedDim: {
            light: "rgb(211 188 253)",
            dark: "rgb(211 188 253)"
        },
        onPrimaryFixedVariant: {
            light: "rgb(79 61 116)",
            dark: "rgb(79 61 116)"
        },
        secondaryFixed: {
            light: "rgb(233 222 248)",
            dark: "rgb(233 222 248)"
        },
        onSecondaryFixed: {
            light: "rgb(31 24 43)",
            dark: "rgb(31 24 43)"
        },
        secondaryFixedDim: {
            light: "rgb(205 194 219)",
            dark: "rgb(205 194 219)"
        },
        onSecondaryFixedVariant: {
            light: "rgb(75 67 88)",
            dark: "rgb(75 67 88)"
        },
        tertiaryFixed: {
            light: "rgb(255 217 225)",
            dark: "rgb(255 217 225)"
        },
        onTertiaryFixed: {
            light: "rgb(49 16 27)",
            dark: "rgb(49 16 27)"
        },
        tertiaryFixedDim: {
            light: "rgb(240 183 197)",
            dark: "rgb(240 183 197)"
        },
        onTertiaryFixedVariant: {
            light: "rgb(100 59 70)",
            dark: "rgb(100 59 70)"
        },
        surfaceDim: {
            light: "rgb(222 216 224)",
            dark: "rgb(21 18 24)"
        },
        surfaceBright: {
            light: "rgb(254 247 255)",
            dark: "rgb(59 56 62)"
        },
        surfaceContainerLowest: {
            light: "rgb(255 255 255)",
            dark: "rgb(15 13 19)"
        },
        surfaceContainerLow: {
            light: "rgb(248 241 250)",
            dark: "rgb(29 27 32)"
        },
        surfaceContainer: {
            light: "rgb(242 236 244)",
            dark: "rgb(33 31 36)"
        },
        surfaceContainerHigh: {
            light: "rgb(237 230 238)",
            dark: "rgb(44 41 47)"
        },
        surfaceContainerHighest: {
            light: "rgb(231 224 232)",
            dark: "rgb(54 52 58)"
        }
    };
    static isReady = false;

    static loadMaterial() {
        if (!this.useMaterialDesign) return;
        if (this._loading) return;
        this._loading = true;

        const materialUrl = document.createElement("script");
        materialUrl.src =
            "https://cdn.jsdelivr.net/npm/@material/material-color-utilities/dist/index.umd.js";
        materialUrl.onload = () => {
            this.getMaterialColor();
            this.isReady = true;
            // callback
            if (window.regenerateCss) window.regenerateCss();
        };
        document.body.appendChild(materialUrl);
    }

    static getMaterialColor() {
        const { argbFromHex, themeFromSourceColor, hexFromArgb } =
            window.materialColorUtilities;

        this.themeMaterial = themeFromSourceColor(argbFromHex(this.seedColor));

        const light = this.themeMaterial.schemes.light;
        const dark = this.themeMaterial.schemes.dark;

        this.materialColorMap.primary.light = hexFromArgb(light.primary);
        this.materialColorMap.primary.dark = hexFromArgb(dark.primary);
        this.materialColorMap.surfaceTint.light = hexFromArgb(
            light.surfaceTint
        );
        this.materialColorMap.surfaceTint.dark = hexFromArgb(dark.surfaceTint);
        this.materialColorMap.onPrimary.light = hexFromArgb(light.onPrimary);
        this.materialColorMap.onPrimary.dark = hexFromArgb(dark.onPrimary);
        this.materialColorMap.primaryContainer.light = hexFromArgb(
            light.primaryContainer
        );
        this.materialColorMap.primaryContainer.dark = hexFromArgb(
            dark.primaryContainer
        );
        this.materialColorMap.onPrimaryContainer.light = hexFromArgb(
            light.onPrimaryContainer
        );
        this.materialColorMap.onPrimaryContainer.dark = hexFromArgb(
            dark.onPrimaryContainer
        );
        this.materialColorMap.secondary.light = hexFromArgb(light.secondary);
        this.materialColorMap.secondary.dark = hexFromArgb(dark.secondary);
        this.materialColorMap.onSecondary.light = hexFromArgb(
            light.onSecondary
        );
        this.materialColorMap.onSecondary.dark = hexFromArgb(dark.onSecondary);
        this.materialColorMap.secondaryContainer.light = hexFromArgb(
            light.secondaryContainer
        );
        this.materialColorMap.secondaryContainer.dark = hexFromArgb(
            dark.secondaryContainer
        );
        this.materialColorMap.onSecondaryContainer.light = hexFromArgb(
            light.onSecondaryContainer
        );
        this.materialColorMap.onSecondaryContainer.dark = hexFromArgb(
            dark.onSecondaryContainer
        );
        this.materialColorMap.tertiary.light = hexFromArgb(light.tertiary);
        this.materialColorMap.tertiary.dark = hexFromArgb(dark.tertiary);
        this.materialColorMap.onTertiary.light = hexFromArgb(light.onTertiary);
        this.materialColorMap.onTertiary.dark = hexFromArgb(dark.onTertiary);
        this.materialColorMap.tertiaryContainer.light = hexFromArgb(
            light.tertiaryContainer
        );
        this.materialColorMap.tertiaryContainer.dark = hexFromArgb(
            dark.tertiaryContainer
        );
        this.materialColorMap.onTertiaryContainer.light = hexFromArgb(
            light.onTertiaryContainer
        );
        this.materialColorMap.onTertiaryContainer.dark = hexFromArgb(
            dark.onTertiaryContainer
        );
        this.materialColorMap.error.light = hexFromArgb(light.error);
        this.materialColorMap.error.dark = hexFromArgb(dark.error);
        this.materialColorMap.onError.light = hexFromArgb(light.onError);
        this.materialColorMap.onError.dark = hexFromArgb(dark.onError);
        this.materialColorMap.errorContainer.light = hexFromArgb(
            light.errorContainer
        );
        this.materialColorMap.errorContainer.dark = hexFromArgb(
            dark.errorContainer
        );
        this.materialColorMap.onErrorContainer.light = hexFromArgb(
            light.onErrorContainer
        );
        this.materialColorMap.onErrorContainer.dark = hexFromArgb(
            dark.onErrorContainer
        );
        this.materialColorMap.background.light = hexFromArgb(light.background);
        this.materialColorMap.background.dark = hexFromArgb(dark.background);
        this.materialColorMap.onBackground.light = hexFromArgb(
            light.onBackground
        );
        this.materialColorMap.onBackground.dark = hexFromArgb(
            dark.onBackground
        );
        this.materialColorMap.surface.light = hexFromArgb(light.surface);
        this.materialColorMap.surface.dark = hexFromArgb(dark.surface);
        this.materialColorMap.onSurface.light = hexFromArgb(light.onSurface);
        this.materialColorMap.onSurface.dark = hexFromArgb(dark.onSurface);
        this.materialColorMap.surfaceVariant.light = hexFromArgb(
            light.surfaceVariant
        );
        this.materialColorMap.surfaceVariant.dark = hexFromArgb(
            dark.surfaceVariant
        );
        this.materialColorMap.onSurfaceVariant.light = hexFromArgb(
            light.onSurfaceVariant
        );
        this.materialColorMap.onSurfaceVariant.dark = hexFromArgb(
            dark.onSurfaceVariant
        );
        this.materialColorMap.outline.light = hexFromArgb(light.outline);
        this.materialColorMap.outline.dark = hexFromArgb(dark.outline);
        this.materialColorMap.outlineVariant.light = hexFromArgb(
            light.outlineVariant
        );
        this.materialColorMap.outlineVariant.dark = hexFromArgb(
            dark.outlineVariant
        );
        this.materialColorMap.shadow.light = hexFromArgb(light.shadow);
        this.materialColorMap.shadow.dark = hexFromArgb(dark.shadow);
        this.materialColorMap.scrim.light = hexFromArgb(light.scrim);
        this.materialColorMap.scrim.dark = hexFromArgb(dark.scrim);
        this.materialColorMap.inverseSurface.light = hexFromArgb(
            light.inverseSurface
        );
        this.materialColorMap.inverseSurface.dark = hexFromArgb(
            dark.inverseSurface
        );
        this.materialColorMap.inverseOnSurface.light = hexFromArgb(
            light.inverseOnSurface
        );
        this.materialColorMap.inverseOnSurface.dark = hexFromArgb(
            dark.inverseOnSurface
        );
        this.materialColorMap.inversePrimary.light = hexFromArgb(
            light.inversePrimary
        );
        this.materialColorMap.inversePrimary.dark = hexFromArgb(
            dark.inversePrimary
        );
        this.materialColorMap.primaryFixed.light = hexFromArgb(
            light.primaryFixed
        );
        this.materialColorMap.primaryFixed.dark = hexFromArgb(
            dark.primaryFixed
        );
        this.materialColorMap.onPrimaryFixed.light = hexFromArgb(
            light.onPrimaryFixed
        );
        this.materialColorMap.onPrimaryFixed.dark = hexFromArgb(
            dark.onPrimaryFixed
        );
        this.materialColorMap.primaryFixedDim.light = hexFromArgb(
            light.primaryFixedDim
        );
        this.materialColorMap.primaryFixedDim.dark = hexFromArgb(
            dark.primaryFixedDim
        );
        
        this.materialColorMap.onPrimaryFixedVariant.light = hexFromArgb(
            light.onPrimaryFixedVariant
        );
        this.materialColorMap.onPrimaryFixedVariant.dark = hexFromArgb(
            dark.onPrimaryFixedVariant
        );
        this.materialColorMap.secondaryFixed.light = hexFromArgb(
            light.secondaryFixed
        );
        this.materialColorMap.secondaryFixed.dark = hexFromArgb(
            dark.secondaryFixed
        );
        this.materialColorMap.onSecondaryFixed.light = hexFromArgb(
            light.onSecondaryFixed
        );
        this.materialColorMap.onSecondaryFixed.dark = hexFromArgb(
            dark.onSecondaryFixed
        );
        this.materialColorMap.secondaryFixedDim.light = hexFromArgb(
            light.secondaryFixedDim
        );
        this.materialColorMap.secondaryFixedDim.dark = hexFromArgb(
            dark.secondaryFixedDim
        );
        this.materialColorMap.onSecondaryFixedVariant.light = hexFromArgb(
            light.onSecondaryFixedVariant
        );
        this.materialColorMap.onSecondaryFixedVariant.dark = hexFromArgb(
            dark.onSecondaryFixedVariant
        );
        this.materialColorMap.tertiaryFixed.light = hexFromArgb(
            light.tertiaryFixed
        );
        this.materialColorMap.tertiaryFixed.dark = hexFromArgb(
            dark.tertiaryFixed
        );
        this.materialColorMap.onTertiaryFixed.light = hexFromArgb(
            light.onTertiaryFixed
        );
        this.materialColorMap.onTertiaryFixed.dark = hexFromArgb(
            dark.onTertiaryFixed
        );
        this.materialColorMap.tertiaryFixedDim.light = hexFromArgb(
            light.tertiaryFixedDim
        );
        this.materialColorMap.tertiaryFixedDim.dark = hexFromArgb(
            dark.tertiaryFixedDim
        );
        this.materialColorMap.onTertiaryFixedVariant.light = hexFromArgb(
            light.onTertiaryFixedVariant
        );
        this.materialColorMap.onTertiaryFixedVariant.dark = hexFromArgb(
            dark.onTertiaryFixedVariant
        );
        this.materialColorMap.surfaceDim.light = hexFromArgb(light.surfaceDim);
        this.materialColorMap.surfaceDim.dark = hexFromArgb(dark.surfaceDim);
        this.materialColorMap.surfaceBright.light = hexFromArgb(
            light.surfaceBright
        );
        this.materialColorMap.surfaceBright.dark = hexFromArgb(
            dark.surfaceBright
        );
        this.materialColorMap.surfaceContainerLowest.light = hexFromArgb(
            light.surfaceContainerLowest
        );
        this.materialColorMap.surfaceContainerLowest.dark = hexFromArgb(
            dark.surfaceContainerLowest
        );
        this.materialColorMap.surfaceContainerLow.light = hexFromArgb(
            light.surfaceContainerLow
        );
        this.materialColorMap.surfaceContainerLow.dark = hexFromArgb(
            dark.surfaceContainerLow
        );
        this.materialColorMap.surfaceContainer.light = hexFromArgb(
            light.surfaceContainer
        );
        this.materialColorMap.surfaceContainer.dark = hexFromArgb(
            dark.surfaceContainer
        );
        this.materialColorMap.surfaceContainerHigh.light = hexFromArgb(
            light.surfaceContainerHigh
        );
        this.materialColorMap.surfaceContainerHigh.dark = hexFromArgb(
            dark.surfaceContainerHigh
        );
        this.materialColorMap.surfaceContainerHighest.light = hexFromArgb(
            light.surfaceContainerHighest
        );
        this.materialColorMap.surfaceContainerHighest.dark = hexFromArgb(
            dark.surfaceContainerHighest
        );
    }

    static hasColor(token) {
        return !!this.materialColorMap[token];
    }

    static getColor(token) {
        const color = this.materialColorMap[token];
        if (!color) {
            return token;
        }
        return `light-dark(${color.light}, ${color.dark})`;
    }
    
    static applyMaterialColors() {
        let css = `:root {\n`;
        for (const key in this.materialColorMap) {
            css += `  --${key}: ${this.materialColorMap[key].light};\n`;
        }
        css += `}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n`;
        for (const key in this.materialColorMap) {
            css += `    --${key}: ${this.materialColorMap[key].dark};\n`;
        }
        css += `  }\n}\n\n[theme="dark"] {\n`;
        for (const key in this.materialColorMap) {
            css += `  --${key}: ${this.materialColorMap[key].dark};\n`;
        }
        css += `}\n`;
        return css;
    }
}

MaterialDesign.loadMaterial();
function shouldApply(item, options = {}) {
    if (!item.hasTheme) return true;

    if (options.theme) {
        return item.themeName === options.theme;
    }

    const currentTheme = document.documentElement.getAttribute("theme");

    return currentTheme === item.themeName;
}
function buildSelector(item) {
    return `.${item.clsId}${item.pseudoClass || ""}${item.pseudoElement || ""}`;
}
function buildMedia(item) {
    if (!item.hasBreakpoint || !item.breakpointName) return null;

    const bp = Config.BreakPoints[item.breakpointName];
    return `(min-width:${bp.min}px) and (max-width:${bp.max}px)`;
}
function buildBlock(selector, css, mediaQuery) {
    if (mediaQuery) {
        return `@media ${mediaQuery} {\n${selector} {\n${css}\n}\n}`;
    }

    return `${selector} {\n${css}\n}`;
}
function generateCss(item) {
    if (!shouldApply(item)) return;

    const baseDirection = document.documentElement.getAttribute("dir") || "ltr";

    const finalCss = baseDirection === "ltr" ? item.cssLtr : item.cssRtl;

    const font = baseDirection === "ltr" ? item.urlFontLtr : item.urlFontRtl;

    const selector = buildSelector(item);
    const mediaQuery = buildMedia(item);

    let css = "";

    if (font) {
        createFontUrl(font);
    }

    css += buildBlock(selector, finalCss, mediaQuery);

    applyRuntime(css);
}
function applyRuntime(css) {
    const style = document.createElement("style");
    style.textContent = "";
    style.textContent += MaterialDesign.applyMaterialColors();
    if (css) {
        style.textContent += css;
    }
    document.head.appendChild(style);
}
const loadedFonts = new Set();

function createFontUrl(url) {
    if (!url || loadedFonts.has(url)) return;
    loadedFonts.add(url);
    const style = document.createElement("style");
    style.textContent = url;
    document.head.appendChild(style);
}
