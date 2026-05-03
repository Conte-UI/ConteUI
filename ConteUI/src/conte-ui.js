/* 
# Copyright [2024] [Conté UI]
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://apache.org
*/

class Config {
  constructor() {
    console.log('Config class initialized');
  }
  static measurement = 'isStatic'; // or 'isFluid'
  static materialDesignSeedColor = "#673ab7";
  static setColor(newColor) {
    this.materialDesignSeedColor = newColor;
  };
  static setMeasure(val) {
    this.measurement = val;
  };
  static BreakPoints = {
    xs: {min: 0, max: 319.98},
    sm: {min: 320, max: 767.98},
    md: {min: 768, max: 1151.98},
    lg: {min: 1152, max: 1535.98},
    xl: {min: 1536, max: 3071.98},
    xxl: {min: 3072, max: Infinity}
  };
  static PreConfiguredMap = {
    "dir": { properties: ['direction'], valueCount: 1, fluid: false },
    "bg": { properties: ['background'], valueCount: 1, fluid: false },
    "b": { properties: ['border'], valueCount: 3, fluid: false },
    "b-l": { properties: ['border-left'], valueCount: 3, fluid: false },
    "b-t": { properties: ['border-top'], valueCount: 3, fluid: false },
    "b-r": { properties: ['border-right'], valueCount: 3, fluid: false },
    "b-b": { properties: ['border-bottom'], valueCount: 3, fluid: false },
    "b-w": { properties: ['border-width'], valueCount: 4, fluid: false },
    "b-s": { properties: ['border-style'], valueCount: 4, fluid: false },
    "b-c": { properties: ['border-color'], valueCount: 4, fluid: false },
    "b-img": { properties: ['border-image'], valueCount: 6, fluid: false },
    "b-l-w": { properties: ['border-left-width'], valueCount: 1, fluid: false },
    "b-t-w": { properties: ['border-top-width'], valueCount: 1, fluid: false },
    "b-r-w": { properties: ['border-right-width'], valueCount: 1, fluid: false },
    "b-b-w": { properties: ['border-bottom-width'], valueCount: 1, fluid: false },
    "b-l-s": { properties: ['border-left-style'], valueCount: 1, fluid: false },
    "b-t-s": { properties: ['border-top-style'], valueCount: 1, fluid: false },
    "b-r-s": { properties: ['border-right-style'], valueCount: 1, fluid: false },
    "b-b-s": { properties: ['border-bottom-style'], valueCount: 1, fluid: false },
    "b-l-c": { properties: ['border-left-color'], valueCount: 1, fluid: false },
    "b-t-c": { properties: ['border-top-color'], valueCount: 1, fluid: false },
    "b-r-c": { properties: ['border-right-color'], valueCount: 1, fluid: false },
    "b-b-c": { properties: ['border-bottom-color'], valueCount: 1, fluid: false },
    "r": { properties: ['border-radius'], valueCount: 4, fluid: false },
    "r-tl": { properties: ['border-top-left-radius'], valueCount: 1, fluid: false },
    "r-tr": { properties: ['border-top-right-radius'], valueCount: 1, fluid: false },
    "r-bl": { properties: ['border-bottom-left-radius'], valueCount: 1, fluid: false },
    "r-br": { properties: ['border-bottom-right-radius'], valueCount: 1, fluid: false },
    "o": { properties: ['outline'], valueCount: 3, fluid: false },
    "o-w": { properties: ['outline-width'], valueCount: 1, fluid: false },
    "o-s": { properties: ['outline-style'], valueCount: 1, fluid: false },
    "o-c": { properties: ['outline-color'], valueCount: 1, fluid: false },
    "o-off": { properties: ['outline-offset'], valueCount: 1, fluid: false },
    "b-is": { properties: ['border-inline-start'], valueCount: 3, fluid: false },
    "b-bs": { properties: ['border-block-start'], valueCount: 3, fluid: false },
    "b-ie": { properties: ['border-inline-end'], valueCount: 3, fluid: false },
    "b-be": { properties: ['border-block-end'], valueCount: 3, fluid: false },
    "b-is-w": { properties: ['border-inline-start-width'], valueCount: 1, fluid: false },
    "b-bs-w": { properties: ['border-block-start-width'], valueCount: 1, fluid: false },
    "b-ie-w": { properties: ['border-inline-end-width'], valueCount: 1, fluid: false },
    "b-be-w": { properties: ['border-block-end-width'], valueCount: 1, fluid: false },
    "b-is-s": { properties: ['border-inline-start-style'], valueCount: 1, fluid: false },
    "b-bs-s": { properties: ['border-block-start-style'], valueCount: 1, fluid: false },
    "b-ie-s": { properties: ['border-inline-end-style'], valueCount: 1, fluid: false },
    "b-be-s": { properties: ['border-block-end-style'], valueCount: 1, fluid: false },
    "b-is-c": { properties: ['border-inline-start-color'], valueCount: 1, fluid: false },
    "b-bs-c": { properties: ['border-block-start-color'], valueCount: 1, fluid: false },
    "b-ie-c": { properties: ['border-inline-end-color'], valueCount: 1, fluid: false },
    "b-be-c": { properties: ['border-block-end-color'], valueCount: 1, fluid: false },
    "r-ss": { properties: ['border-start-start-radius'], valueCount: 1, fluid: false },
    "r-se": { properties: ['border-start-end-radius'], valueCount: 1, fluid: false },
    "r-es": { properties: ['border-end-start-radius'], valueCount: 1, fluid: false },
    "r-ee": { properties: ['border-end-end-radius'], valueCount: 1, fluid: false },
    "text-color": { properties: ['color'], valueCount: 1, fluid: false },
    "text-size": { properties: ['font-size'], valueCount: 1, fluid: true, strategy: 'text' },
    "text-weight": { properties: ['font-weight'], valueCount: 1, fluid: false },
    "text-style": { properties: ['font-style'], valueCount: 1, fluid: false },
    "text-align": { properties: ['text-align'], valueCount: 1, fluid: false },
    "text-height": { properties: ['line-height'], valueCount: 1, fluid: false },
    "text-shadow": { properties: ['text-shadow'], valueCount: 1, fluid: false },
    "text-transform": { properties: ['text-transform'], valueCount: 1, fluid: false },
    "text-decoration": { properties: ['text-decoration'], valueCount: 1, fluid: false },
    "text-stretch": { properties: ['text-stretch'], valueCount: 1, fluid: false },
    "text-spacing": { properties: ['letter-spacing'], valueCount: 1, fluid: false },
    "word-spacing": { properties: ['word-spacing'], valueCount: 1, fluid: false },
    "text-orientation": { properties: ['text-orientation'], valueCount: 1, fluid: false },
    "w-mode": { properties: ['writing-mode'], valueCount: 1, fluid: false },
    "w": { properties: ['width'], valueCount: 1, fluid: true, axis: 'x', strategy: 'size' },
    "max-w": { properties: ['max-width'], valueCount: 1, fluid: true, axis: 'x', strategy: 'size' },
    "min-w": { properties: ['min-width'], valueCount: 1, fluid: true, axis: 'x', strategy: 'size' },
    "h": { properties: ['height'], valueCount: 1, fluid: true, axis: 'y', strategy: 'size' },
    "max-h": { properties: ['max-height'], valueCount: 1, fluid: true, axis: 'y', strategy: 'size' },
    "min-h": { properties: ['min-height'], valueCount: 1, fluid: true, axis: 'y', strategy: 'size' },
    "is": { properties: ['inline-size'], valueCount: 1, fluid: true, axis: 'x', strategy: 'size' },
    "max-is": { properties: ['max-inline-size'], valueCount: 1, fluid: true, axis: 'x', strategy: 'size' },
    "min-is": { properties: ['min-inline-size'], valueCount: 1, fluid: true, axis: 'x', strategy: 'size' },
    "bs": { properties: ['block-size'], valueCount: 1, fluid: true, axis: 'y', strategy: 'size' },
    "max-bs": { properties: ['max-block-size'], valueCount: 1, fluid: true, axis: 'y', strategy: 'size' },
    "min-bs": { properties: ['min-block-size'], valueCount: 1, fluid: true, axis: 'y', strategy: 'size' },
    "inset": { properties: ['inset'], valueCount: 4, fluid: false, strategy: 'inset' },
    "inset-is": { properties: ['inset-inline-start'], valueCount: 1, fluid: false, strategy: 'inset' },
    "inset-ie": { properties: ['inset-inline-end'], valueCount: 1, fluid: false, strategy: 'inset' },
    "inset-bs": { properties: ['inset-block-start'], valueCount: 1, fluid: false, strategy: 'inset' },
    "inset-be": { properties: ['inset-block-end'], valueCount: 1, fluid: false, strategy: 'inset' },
    "inset-x": { properties: ['inset-inline-start', 'inset-inline-end'], valueCount: 2, fluid: false, strategy: 'inset' },
    "inset-y": { properties: ['inset-block-start', 'inset-block-end'], valueCount: 2, fluid: false, strategy: 'inset' },
    "left": { properties: ['inset-inline-start'], valueCount: 1, fluid: false, strategy: 'inset' },
    "top": { properties: ['inset-block-start'], valueCount: 1, fluid: false, strategy: 'inset' },
    "right": { properties: ['inset-inline-end'], valueCount: 1, fluid: false, strategy: 'inset' },
    "bottom": { properties: ['inset-block-end'], valueCount: 1, fluid: false, strategy: 'inset' },
    "m": { properties: ['margin'], valueCount: 4, fluid: true, strategy: 'spacing' },
    "m-is": { properties: ['margin-inline-start'], valueCount: 1, fluid: true, axis: 'x', strategy: 'spacing' },
    "m-ie": { properties: ['margin-inline-end'], valueCount: 1, fluid: true, axis: 'x', strategy: 'spacing' },
    "m-bs": { properties: ['margin-block-start'], valueCount: 1, fluid: true, axis: 'y', strategy: 'spacing' },
    "m-be": { properties: ['margin-block-end'], valueCount: 1, fluid: true, axis: 'y', strategy: 'spacing' },
    "ml": { properties: ['margin-left'], valueCount: 1, fluid: true, axis: 'x', strategy: 'spacing' },
    "mr": { properties: ['margin-right'], valueCount: 1, fluid: true, axis: 'x', strategy: 'spacing' },
    "mt": { properties: ['margin-top'], valueCount: 1, fluid: true, axis: 'y', strategy: 'spacing' },
    "mb": { properties: ['margin-bottom'], valueCount: 1, fluid: true, axis: 'y', strategy: 'spacing' },
    "mx": { properties: ['margin-inline-start', 'margin-inline-end'], valueCount: 2, fluid: true, axis: 'x', strategy: 'spacing' },
    "my": { properties: ['margin-block-start', 'margin-block-end'], valueCount: 2, fluid: true, axis: 'y', strategy: 'spacing' },
    "p": { properties: ['padding'], valueCount: 4, fluid: true, strategy: 'spacing' },
    "p-is": { properties: ['padding-inline-start'], valueCount: 1, fluid: true, axis: 'x', strategy: 'spacing' },
    "p-ie": { properties: ['padding-inline-end'], valueCount: 1, fluid: true, axis: 'x', strategy: 'spacing' },
    "p-bs": { properties: ['padding-block-start'], valueCount: 1, fluid: true, axis: 'y', strategy: 'spacing' },
    "p-be": { properties: ['padding-block-end'], valueCount: 1, fluid: true, axis: 'y', strategy: 'spacing' },
    "pl": { properties: ['padding-left'], valueCount: 1, fluid: true, axis: 'x', strategy: 'spacing' },
    "pr": { properties: ['padding-right'], valueCount: 1, fluid: true, axis: 'x', strategy: 'spacing' },
    "pt": { properties: ['padding-top'], valueCount: 1, fluid: true, axis: 'y', strategy: 'spacing' },
    "pb": { properties: ['padding-bottom'], valueCount: 1, fluid: true, axis: 'y', strategy: 'spacing' },
    "px": { properties: ['padding-inline-start', 'padding-inline-end'], valueCount: 2, fluid: true, axis: 'x', strategy: 'spacing' },
    "py": { properties: ['padding-block-start', 'padding-block-end'], valueCount: 2, fluid: true, axis: 'y', strategy: 'spacing' },
    "fx": { properties: ['flex'], valueCount: 3, fluid: false },
    "fx-grow": { properties: ['flex-grow'], valueCount: 1, fluid: false },
    "fx-basis": { properties: ['flex-basis'], valueCount: 1, fluid: false },
    "fx-shrink": { properties: ['flex-shrink'], valueCount: 1, fluid: false },
    "gr-t": { properties: ['grid-template'], valueCount: 64, fluid: false },
    "gr-tr": { properties: ['grid-template-rows'], valueCount: 64, fluid: false },
    "gr-tc": { properties: ['grid-template-columns'], valueCount: 64, fluid: false },
    "gr-ta": { properties: ['grid-template-areas'], valueCount: 64, fluid: false },
    "gr-row": { properties: ['grid-row'], valueCount: 1, fluid: false },
    "gr-col": { properties: ['grid-column'], valueCount: 1, fluid: false },
    "gr-area": { properties: ['grid-area'], valueCount: 1, fluid: false },
    "gr-flow": { properties: ['grid-auto-flow'], valueCount: 1, fluid: false  },
    "gr-auto-r": { properties: ['grid-auto-rows'], valueCount: 1, fluid: false  },
    "gr-auto-c": { properties: ['grid-auto-columns'], valueCount: 1, fluid: false  },
    "g": { properties: ['gap'], valueCount: 1, fluid: true, strategy: 'spacing' },
    "g-row": { properties: ['row-gap'], valueCount: 1, fluid: true, axis: 'y', strategy: 'spacing' },
    "g-col": { properties: ['column-gap'], valueCount: 1, fluid: true, axis: 'x', strategy: 'spacing' },
    "order": {  properties: ['order'], valueCount: 1,  fluid: false },
    "jc": { properties: ['justify-content'], valueCount: 1, fluid: false },
    "ac": { properties: ['align-content'], valueCount: 1, fluid: false },
    "pc": { properties: ['place-content'], valueCount: 1, fluid: false },
    "js": { properties: ['justify-self'], valueCount: 1, fluid: false },
    "as": { properties: ['align-self'], valueCount: 1, fluid: false },
    "ps": { properties: ['place-self'], valueCount: 1, fluid: false },
    "ji": { properties: ['justify-items'], valueCount: 1, fluid: false },
    "ai": { properties: ['align-items'], valueCount: 1, fluid: false },
    "pi": { properties: ['place-items'], valueCount: 1, fluid: false },
    "v-align": { properties: ['vertical-align'], valueCount: 1, fluid: false },
    "shadow": { properties: ['box-shadow'], valueCount: 64, fluid: false },
    "overflow": { properties: ['overflow'], valueCount: 1, fluid: false },
    "transform": { properties: ['transform'], valueCount: 1, fluid: false },
    "transition": { properties: ['transition'], valueCount: 1, fluid: false },
    "animation": { properties: ['animation'], valueCount: 1, fluid: false },
    "scroll": { properties: ['scroll-behavior'], valueCount: 1, fluid: false },
    "filter": { properties: ['filter'], valueCount: 1, fluid: false },
    "float": { properties: ['float'], valueCount: 1, fluid: false },
    "scale": { properties: ['scale'], valueCount: 1, fluid: false },
    "box": { properties: ['box-sizing'], valueCount: 1, fluid: false },
    "fill": { properties: ['fill'], valueCount: 1, fluid: false },
    "stroke": { properties: ['stroke'], valueCount: 1, fluid: false },
    "caret": { properties: ['caret-color'], valueCount: 1, fluid: false },
    "ratio": { properties: ['aspect-ratio'], valueCount: 1, fluid: false },
    "opacity": { properties: ['opacity'], valueCount: 1, fluid: false },
    "z-index": { properties: ['z-index'], valueCount: 1, fluid: false }
  };
  static GetActivePreConfiguredMap(dir = 'ltr') {
    const base = this.PreConfiguredMap;
    const isRTL = String(dir).toLowerCase() === 'rtl';
    const rtlOverrides = {};
    const ltrOverrides = {};
    const map = {
      ...base,
      ...(isRTL ? rtlOverrides: ltrOverrides),
    };
    return map;
  };
  static PreDefinedMap(dir = 'ltr') {
    const base = {
      'fx-row-auto': {
        ltr: 'flex-direction: row;',
        rtl: 'flex-direction: row-reverse;'
      },
      'fx-row-auto-r': {
        ltr: 'flex-direction: row-reverse;',
        rtl: 'flex-direction: row;'
      },
    };
    return Object.fromEntries(
      Object.entries(base).map(([key, val]) => [key, val[dir]])
    );
  };
  static cssUtilityMap = {
    "fluid-container": 'width:calc(100vw - ((100vw - 300px)/ 10));margin-inline:auto;padding-block:calc(1.5svh + 0.5vw);padding-inline:clamp(1rem,5%,3rem);box-sizing:border-box;display:flow-root',
    "d-none": 'display: none;',
    "d-grid": 'display: grid;',
    "d-flex": 'display: flex;',
    "d-block": 'display: block;',
    "d-inline": 'display: inline;',
    "d-inline-grid": 'display: inline-grid;',
    "d-inline-flex": 'display: inline-flex;',
    "d-inline-block": 'display: inline-block;',
    "d-contents": 'display: contents;',
    "d-table": 'display: table;',
    "d-ruby": 'display: ruby;',
    "d-inherit": 'display: inherit;',
    "d-initial": 'display: initial;',
    "d-revert": 'display: revert;',
    "d-revert-layer": 'display: revert-layer;',
    "d-unset": 'display: unset;',
    "p-static": 'position: static;',
    "p-relative": 'position: relative;',
    "p-absolute": 'position: absolute;',
    "p-fixed": 'position: fixed;',
    "p-sticky": 'position: sticky;',
    "p-inherit": 'position: inherit;',
    "p-initial": 'position: initial;',
    "p-revert": 'position: revert;',
    "p-revert-layer": 'position: revert-layer;',
    "p-unset": 'position: unset;',
    "fx-row": 'flex-direction: row;',
    "fx-row-r": 'flex-direction: row-reverse;',
    "fx-col": 'flex-direction: column;',
    "fx-col-r": 'flex-direction: column-reverse;',
    "fx-wrap": 'flex-wrap: wrap;',
    "fx-nowrap": 'flex-wrap: nowrap;',
    "fx-wrap-reverse": 'flex-wrap: wrap-reverse;',
    "font-sans": 'font-family: ui-sans-serif, sans-serif;',
    "font-serif": 'font-family: Georgia, "Times New Roman", Times, serif;',
    "font-mono": 'font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;',
    "font-cursive": 'font-family: "Segoe Script", "Brush Script MT", "Comic Sans MS", cursive;',
    "font-fantasy": 'font-family: Impact, "Copperplate", fantasy;',
    "font-system": 'font-family: system-ui, sans-serif;',
    "font-rounded": 'font-family: ui-rounded, system-ui, sans-serif;',
    "font-math": 'font-family: math, serif;',
    "font-arial": 'font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;',
    "font-tahoma": 'font-family: Tahoma, Verdana, Segoe UI, sans-serif;',
    "font-verdana": 'font-family: Verdana, Tahoma, Segoe UI, sans-serif;',
    "font-helvetica": 'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;',
    "font-trebuchet": 'font-family: "Trebuchet MS", Verdana, Arial, sans-serif;',
    "font-times": 'font-family: "Times New Roman", Times, serif;',
    "font-georgia": 'font-family: Georgia, "Times New Roman", Times, serif;',
    "font-cambria": 'font-family: Cambria, Georgia, "Times New Roman", serif;',
    "font-palatino": 'font-family: "Palatino Linotype", Palatino, Georgia, serif;',
    "font-garamond": 'font-family: Garamond, Baskerville, "Times New Roman", serif;',
    "font-courier": 'font-family: "Courier New", Courier, monospace;',
    "font-consolas": 'font-family: Consolas, "Liberation Mono", "Courier New", monospace;',
    "font-monaco": 'font-family: Monaco, Menlo, Consolas, monospace;',
    "font-lucida": 'font-family: "Lucida Console", Monaco, monospace;',
    "font-dejaVu": 'font-family: "DejaVu Sans Mono", "Liberation Mono", Consolas, monospace;',
    "font-bradley": 'font-family: "Bradley Hand", Segoe Script", "Brush Script MT", "Comic Sans MS", cursive;',
    "font-comic": 'font-family: "Comic Sans MS", "Segoe Script", cursive;',
    "font-brush": 'font-family: "Brush Script MT", "Lucida Handwriting", cursive;',
    "font-handwriting": 'font-family: "Lucida Handwriting", "Segoe Script", cursive;',
    "font-apple-cursive": 'font-family: "Apple Chancery", "Brush Script MT", cursive;',
    "font-impact": 'font-family: Impact, fantasy;',
    "font-luminari": 'font-family: Luminari, fantasy;',
    "font-chalkduster": 'font-family: Chalkduster, fantasy;',
    "font-jazz": 'font-family: "Jazz LET", fantasy;',
    "font-blippo": 'font-family: Blippo, fantasy;',
    "font-stencil": 'font-family: "Stencil Std", fantasy;',
    "font-marker": 'font-family: "Marker Felt", fantasy;',
    "font-trattatello": 'font-family: Trattatello, fantasy;',
    
    "font-archivo": 'font-family: "Archivo Black", sans-serif;',
    "font-roboto": 'font-family: "Roboto", sans-serif;',
    "font-montserrat": 'font-family: "Montserrat", sans-serif;',
    "font-open-sans": 'font-family: "Open Sans", sans-serif;font-optical-sizing: auto;font-weight: <weight>;font-style: normal;font-variation-settings:"wdth" 100;',
    "font-mozilla-headline": 'font-family: "Mozilla Headline", sans-serif;',
    "font-cinzel": 'font-family: "Cinzel", serif;',
    "font-playfair": 'font-family: "Playfair", serif;font-optical-sizing: auto;font-weight: <weight>;font-style: normal;font-variation-settings:"wdth" 100;',
    "font-lora": 'font-family: "Lora", serif;font-optical-sizing: auto;font-weight: <weight>;font-style: normal;',
    "font-space-mono": 'font-family: "Space Mono", monospace;',
    "font-plex-mono": 'font-family: "IBM Plex Mono", monospace;',
    "font-great-vibes": 'font-family: "Great Vibes", cursive;',
    "font-dancing-script": 'font-family: "Dancing Script", cursive;',
    "font-medievalsharp": 'font-family: "MedievalSharp", cursive;',
    "font-uncial-antiqua": 'font-family: "Uncial Antiqua", system-ui;',
  };
  static ImportFontUrlMap = {
    "archivo": '@import url("https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap");',
    "roboto": '@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");',
    "montserrat": '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");',
    "open-sans": '@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");',
    "mozilla-headline": '@import url("https://fonts.googleapis.com/css2?family=Mozilla+Headline:wght@200..700&display=swap");',
    "cinzel": '@import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap");',
    "playfair": '@import url("https://fonts.googleapis.com/css2?family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap");',
    "lora": '@import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap");',
    "space-mono": '@import url("https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap");',
    "plex-mono": '@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");',
    "great-vibes": '@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");',
    "dancing-script": '@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap");',
    "medievalsharp": '@import url("https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap");',
    "uncial-antiqua": '@import url("https://fonts.googleapis.com/css2?family=Uncial+Antiqua&display=swap");',
  };
  static mediaRules = {
    "(max-width: 768px)": {
      "navbar": `
      `,
      "sidebar": `
      `
    },
    "(max-width: 480px)": {
      "navbar": `
      `
    }
  };
} /* Config */
class Conte extends Config {
  constructor() {
    super();
    this.items = [];
    this.themes = new Set();
    this.init();
  }
  init() {
    console.log('Conte init started');
    const elements = document.querySelectorAll('[class]');
    if (elements.length === 0) {
      console.warn("⚠️ No html elements found with a class.");
    }
    elements.forEach((el, i) => {
      const elId = `el-id-${i+1}`;
      el.classList.add(elId);
      el.classList.forEach(cls => {
        if (!cls) {
          console.warn("⚠️ Skipped empty class:", cls);
          return null;
        }
        const item = clsManager(cls, el, elId);
        generateCss(item);
        this.items.push(item);
        if (item.hasTheme) {
          this.themes.add(item.themeName);
        }
      });
    });
  }
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
        entity.newClass = cls.slice(open+1, close);
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
        entity.newClass = cls.slice(open+1, close);
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

function cssUtilities (cls) {
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
  const utilities = cls.split(";").map(u => u.trim()).filter(Boolean);

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
    result.hasImportant[i] = value && value.endsWith("!") ? true: false;
    if (result.hasImportant[i]) value = value.replace(/!+$/, "").trim();
    result.hasFluid[i] = value && value.includes("-fluid") ? true: false;
    if (result.hasFluid[i]) value = value.replace("-fluid", "").trim();
    result.hasStatic[i] = value && value.includes("-static") ? true: false;
    if (result.hasStatic[i]) value = value.replace("-static", "").trim();
    result.property = property;
    result.value = value;
    const Configured = Config.GetActivePreConfiguredMap();
    if (Configured[property]) {
      result.preConfigured[i] = true;
      let ConfiguredCss = {};
      const processSpacingValues = (values, strategy) => {
        if (values.length === 1) {
          return [makeFluidValue(values[0], {
            axis: 'x', strategy
          })];
        }
        if (values.length === 2) {
          return [
            makeFluidValue(values[0], {
              axis: 'y', strategy
            }),
            makeFluidValue(values[1], {
              axis: 'x', strategy
            })
          ];
        }
        if (values.length === 3) {
          return [
            makeFluidValue(values[0], {
              axis: 'y', strategy
            }),
            makeFluidValue(values[1], {
              axis: 'x', strategy
            }),
            makeFluidValue(values[2], {
              axis: 'y', strategy
            })
          ];
        }
        if (values.length === 4) {
          return [
            makeFluidValue(values[0], {
              axis: 'y', strategy
            }),
            makeFluidValue(values[1], {
              axis: 'x', strategy
            }),
            makeFluidValue(values[2], {
              axis: 'y', strategy
            }),
            makeFluidValue(values[3], {
              axis: 'x', strategy
            })
          ];
        }
        return values;
      };
      ['ltr', 'rtl'].forEach(dir => {
        const configMap = Config.GetActivePreConfiguredMap(dir);
        const preConfigMap = configMap[property];
        if (!preConfigMap) return;
        let {
          properties,
          valueCount,
          fluid,
          axis,
          strategy
        } = preConfigMap;
        if (Config.mode === 'isStatic') fluid = result.hasFluid[i] ? true: false;
        if (Config.mode === 'isFluid') fluid = result.hasStatic[i] ? false: true;
        let normalizedValue = value.includes('_') ? value.replace(/_/g, ' '): value;
        let finalValues = normalizedValue.split(/\s+/);
        if (finalValues.length > valueCount) {
          console.warn('too many values for', property);
          return;
        }
        const fluidTransform = val => makeFluidValue(val, {
          axis, strategy
        });
        const generateCss = (properties, finalValues, fluid, strategy) => {
          let cssValues;

          if (fluid && strategy === 'spacing') {
            cssValues = processSpacingValues(finalValues, strategy);
          } else {
            cssValues = fluid
            ? finalValues.map(fluidTransform): finalValues;
          }

          const mappedValues = cssValues.map(val => {
            const color = MaterialDesign.getColor(val);
            if (color) {
              result.materialColor = true;
              return color;
            }
            return val;
          });

          return properties
          .map(propName =>
            `$ {
              propName
            }: $ {
              mappedValues.join(' ')}$ {
              result.hasImportant[i] ? ' !important': ''
            };`
          )
          .join('\n') + '\n';
        };

        ConfiguredCss[dir] = generateCss(
          properties,
          finalValues,
          fluid,
          strategy
        );
      });

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
    } // preConfiguredRtl

    if (result.preConfiguredLtr[i]) {
      result.finalCssLtr += result.preConfiguredLtr[i] + "\n";
    }

    if (result.preConfiguredRtl[i]) {
      result.finalCssRtl += result.preConfiguredRtl[i] + "\n";
    }

    const Defined = Config.PreDefinedMap();
    if (Defined[result.property]) {
      result.preDefined[i] = true;
      let DefinedCss = {};
      ['ltr',
        'rtl'].forEach(dir => {
          let preDefinedCls = Config.PreDefinedMap(dir)[result.property];
          if (!preDefinedCls) return;

          if (preDefinedCls.endsWith(';')) {
            preDefinedCls = preDefinedCls.slice(0, -1);
          }

          const importantFlag = !!result.hasImportant[i];
          DefinedCss[dir] = `$ {
            preDefinedCls
          }$ {
            importantFlag ? ' !important': ''
          };`;
        });

      result.preDefinedCss[i] = {
        ltr: DefinedCss.ltr,
        rtl: DefinedCss.rtl
      };

      result.preDefinedLtr[i] = DefinedCss.ltr || "";
      result.preDefinedRtl[i] = DefinedCss.rtl || "";

    } // predefined

    if (result.preDefinedLtr[i]) result.finalCssLtr += result.preDefinedLtr[i] + "\n";
    if (result.preDefinedRtl[i]) result.finalCssRtl += result.preDefinedRtl[i] + "\n";

    const Pared = Config.cssUtilityMap;
    if (Pared[result.property]) {
      result.prepared[i] = true;
      let PreParedCls = Pared[result.property];

      if (PreParedCls.endsWith(';')) {
        PreParedCls = PreParedCls.slice(0, -1);
      }

      const cssLine = `$ {
        PreParedCls
      }$ {
        result.hasImportant[i] ? ' !important': ''
      };`;

      result.preparedCss[i] = {
        ltr: cssLine,
        rtl: cssLine
      };
      result.preparedLtr[i] = cssLine;
      result.preparedRtl[i] = cssLine;

      if (result.property.startsWith('font-')) {
        const fontKey = result.property.replace('font-', '');
        if (Config.ImportFontUrlMap && fontKey in Config.ImportFontUrlMap) {
          const url = Config.ImportFontUrlMap[fontKey];
          result.importFont[i] = true;
          result.importFontUrl[i] = url;
          result.importFontUrlLtr[i] = url;
          result.importFontUrlRtl[i] = url;
        }
      }
    }
    if (result.preparedLtr[i]) result.finalCssLtr += result.preparedLtr[i] + "\n";
    if (result.preparedRtl[i]) result.finalCssRtl += result.preparedRtl[i] + "\n";
    if (result.importFontUrlLtr[i]) result.UrlLtr += result.importFontUrlLtr[i] + "\n";
    if (result.importFontUrlRtl[i]) result.UrlRtl += result.importFontUrlRtl[i] + "\n";

    // media
    for (const [query, rules] of Object.entries(Config.mediaRules)) {

      if (rules[cls]) {

        result.hasMedia[i] = true;

        const mediaBlock = `@media $ {
          query
        } {
          .$ {
            cls
          } {
            $ {
              rules[cls].trim()}
          }
        }\n`;

        if (!result.mediaCss) result.mediaCss = [];

        if (!result.mediaCss[i]) result.mediaCss[i] = "";

        result.mediaCss[i] += mediaBlock;

      }
    } // media

    if (result.mediaCss[i]) result.finalCssLtr += result.mediaCss[i] + "\n";
    if (result.mediaCss[i]) result.finalCssRtl += result.mediaCss[i] + "\n";
    //
    const isConfigured = !!result.preConfigured[i];
    const isPredefined = !!result.preDefined[i];
    const isPrepared = !!result.prepared[i];
    const isMedia = !!result.mediaCss[i];
    if (!isConfigured && !isPredefined && !isPrepared && !isMedia) {
      if (result.property && result.value) {
        if (result.value.includes('_')) result.value = result.value.replace(/_/g, ' ');
        const fallbackCss = `$ {
          result.property
        }: $ {
          result.value
        };`;
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
  const { axis = 'x', strategy } = options;

  const match = /^(-?\d*\.?\d+)([a-zA-Z%]*)$/.exec(value.trim());
  if (!match) return value;

  const [, num, unit] = match;
  const numeric = parseFloat(num);
  const safeUnit = unit || 'px';

  const finalStrategy = strategy || inferStrategy(axis);

  // skip inset (for now)
  if (finalStrategy === 'inset') return value;

  switch (finalStrategy) {
    case 'text':
      return fluidText(numeric, safeUnit);

    case 'size-y':
      return fluidSize(numeric, safeUnit, 'vh');

    case 'size-x':
      return fluidSize(numeric, safeUnit, 'vw');

    default:
      return value;
  }
}

function inferStrategy(axis) {
  if (axis === 'y') return 'size-y';
  return 'size-x';
}

function fluidSize(num, unit, viewportUnit) {
  return `clamp(${num}${unit}, calc(${num}${unit} + ((100${viewportUnit} - 300px)/3)/100), ${num * 2}${unit})`;
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
      light: 'rgb(104 84 142)',
      dark: 'rgb(211 188 253)'
    },
    surfaceTint: {
      light: 'rgb(104 84 142)',
      dark: 'rgb(211 188 253)'
    },
    onPrimary: {
      light: 'rgb(255 255 255)',
      dark: 'rgb(56 38 92)'
    },
    primaryContainer: {
      light: 'rgb(235 221 255)',
      dark: 'rgb(79 61 116)'
    },
    onPrimaryContainer: {
      light: 'rgb(79 61 116)',
      dark: 'rgb(235 221 255)'
    },
    secondary: {
      light: 'rgb(99 91 112)',
      dark: 'rgb(205 194 219)'
    },
    onSecondary: {
      light: 'rgb(255 255 255)',
      dark: 'rgb(52 45 64)'
    },
    secondaryContainer: {
      light: 'rgb(233 222 248)',
      dark: 'rgb(75 67 88)'
    },
    onSecondaryContainer: {
      light: 'rgb(75 67 88)',
      dark: 'rgb(233 222 248)'
    },
    tertiary: {
      light: 'rgb(126 82 93)',
      dark: 'rgb(240 183 197)'
    },
    onTertiary: {
      light: 'rgb(255 255 255)',
      dark: 'rgb(74 37 48)'
    },
    tertiaryContainer: {
      light: 'rgb(255 217 225)',
      dark: 'rgb(100 59 70)'
    },
    onTertiaryContainer: {
      light: 'rgb(100 59 70)',
      dark: 'rgb(255 217 225)'
    },
    error: {
      light: 'rgb(186 26 26)',
      dark: 'rgb(255 180 171)'
    },
    onError: {
      light: 'rgb(255 255 255)',
      dark: 'rgb(105 0 5)'
    },
    errorContainer: {
      light: 'rgb(255 218 214)',
      dark: 'rgb(147 0 10)'
    },
    onErrorContainer: {
      light: 'rgb(147 0 10)',
      dark: 'rgb(255 218 214)'
    },
    background: {
      light: 'rgb(254 247 255)',
      dark: 'rgb(21 18 24)'
    },
    onBackground: {
      light: 'rgb(29 27 32)',
      dark: 'rgb(231 224 232)'
    },
    surface: {
      light: 'rgb(254 247 255)',
      dark: 'rgb(21 18 24)'
    },
    onSurface: {
      light: 'rgb(29 27 32)',
      dark: 'rgb(231 224 232)'
    },
    surfaceVariant: {
      light: 'rgb(231 224 235)',
      dark: 'rgb(73 69 78)'
    },
    onSurfaceVariant: {
      light: 'rgb(73 69 78)',
      dark: 'rgb(203 196 207)'
    },
    outline: {
      light: 'rgb(122 117 127)',
      dark: 'rgb(148 143 153)'
    },
    outlineVariant: {
      light: 'rgb(203 196 207)',
      dark: 'rgb(73 69 78)'
    },
    shadow: {
      light: 'rgb(0 0 0)',
      dark: 'rgb(0 0 0)'
    },
    scrim: {
      light: 'rgb(0 0 0)',
      dark: 'rgb(0 0 0)'
    },
    inverseSurface: {
      light: 'rgb(50 47 53)',
      dark: 'rgb(231 224 232)'
    },
    inverseOnSurface: {
      light: 'rgb(245 239 247)',
      dark: 'rgb(50 47 53)'
    },
    inversePrimary: {
      light: 'rgb(211 188 253)',
      dark: 'rgb(104 84 142)'
    },
    primaryFixed: {
      light: 'rgb(235 221 255)',
      dark: 'rgb(235 221 255)'
    },
    onPrimaryFixed: {
      light: 'rgb(35 15 70)',
      dark: 'rgb(35 15 70)'
    },
    primaryFixedDim: {
      light: 'rgb(211 188 253)',
      dark: 'rgb(211 188 253)'
    },
    onPrimaryFixedVariant: {
      light: 'rgb(79 61 116)',
      dark: 'rgb(79 61 116)'
    },
    secondaryFixed: {
      light: 'rgb(233 222 248)',
      dark: 'rgb(233 222 248)'
    },
    onSecondaryFixed: {
      light: 'rgb(31 24 43)',
      dark: 'rgb(31 24 43)'
    },
    secondaryFixedDim: {
      light: 'rgb(205 194 219)',
      dark: 'rgb(205 194 219)'
    },
    onSecondaryFixedVariant: {
      light: 'rgb(75 67 88)',
      dark: 'rgb(75 67 88)'
    },
    tertiaryFixed: {
      light: 'rgb(255 217 225)',
      dark: 'rgb(255 217 225)'
    },
    onTertiaryFixed: {
      light: 'rgb(49 16 27)',
      dark: 'rgb(49 16 27)'
    },
    tertiaryFixedDim: {
      light: 'rgb(240 183 197)',
      dark: 'rgb(240 183 197)'
    },
    onTertiaryFixedVariant: {
      light: 'rgb(100 59 70)',
      dark: 'rgb(100 59 70)'
    },
    surfaceDim: {
      light: 'rgb(222 216 224)',
      dark: 'rgb(21 18 24)'
    },
    surfaceBright: {
      light: 'rgb(254 247 255)',
      dark: 'rgb(59 56 62)'
    },
    surfaceContainerLowest: {
      light: 'rgb(255 255 255)',
      dark: 'rgb(15 13 19)'
    },
    surfaceContainerLow: {
      light: 'rgb(248 241 250)',
      dark: 'rgb(29 27 32)'
    },
    surfaceContainer: {
      light: 'rgb(242 236 244)',
      dark: 'rgb(33 31 36)'
    },
    surfaceContainerHigh: {
      light: 'rgb(237 230 238)',
      dark: 'rgb(44 41 47)'
    },
    surfaceContainerHighest: {
      light: 'rgb(231 224 232)',
      dark: 'rgb(54 52 58)'
    }
  };
  static isReady = false;

  static loadMaterial() {
    if (!this.useMaterialDesign) return;
    if (this._loading) return;
    this._loading = true;

    const materialUrl = document.createElement('script');
    materialUrl.src = "https://cdn.jsdelivr.net/npm/@material/material-color-utilities/dist/index.umd.js";
    materialUrl.onload = () => {
      this.getMaterialColor();
      this.isReady = true;

      // callback
      if (window.regenerateCss) window.regenerateCss();
    };
    document.body.appendChild(materialUrl);
  }

  static getMaterialColor() {
    const {
      argbFromHex,
      themeFromSourceColor,
      hexFromArgb
    } = window.materialColorUtilities;

    this.themeMaterial = themeFromSourceColor(argbFromHex(this.seedColor));

    const light = this.themeMaterial.schemes.light;
    const dark = this.themeMaterial.schemes.dark;

    this.materialColorMap.primary.light = hexFromArgb(light.primary);
    this.materialColorMap.primary.dark = hexFromArgb(dark.primary);
    this.materialColorMap.surfaceTint.light = hexFromArgb(light.surfaceTint);
    this.materialColorMap.surfaceTint.dark = hexFromArgb(dark.surfaceTint);
    this.materialColorMap.onPrimary.light = hexFromArgb(light.onPrimary);
    this.materialColorMap.onPrimary.dark = hexFromArgb(dark.onPrimary);
    this.materialColorMap.primaryContainer.light = hexFromArgb(light.primaryContainer);
    this.materialColorMap.primaryContainer.dark = hexFromArgb(dark.primaryContainer);
    this.materialColorMap.onPrimaryContainer.light = hexFromArgb(light.onPrimaryContainer);
    this.materialColorMap.onPrimaryContainer.dark = hexFromArgb(dark.onPrimaryContainer);
    this.materialColorMap.secondary.light = hexFromArgb(light.secondary);
    this.materialColorMap.secondary.dark = hexFromArgb(dark.secondary);
    this.materialColorMap.onSecondary.light = hexFromArgb(light.onSecondary);
    this.materialColorMap.onSecondary.dark = hexFromArgb(dark.onSecondary);
    this.materialColorMap.secondaryContainer.light = hexFromArgb(light.secondaryContainer);
    this.materialColorMap.secondaryContainer.dark = hexFromArgb(dark.secondaryContainer);
    this.materialColorMap.onSecondaryContainer.light = hexFromArgb(light.onSecondaryContainer);
    this.materialColorMap.onSecondaryContainer.dark = hexFromArgb(dark.onSecondaryContainer);
    this.materialColorMap.tertiary.light = hexFromArgb(light.tertiary);
    this.materialColorMap.tertiary.dark = hexFromArgb(dark.tertiary);
    this.materialColorMap.onTertiary.light = hexFromArgb(light.onTertiary);
    this.materialColorMap.onTertiary.dark = hexFromArgb(dark.onTertiary);
    this.materialColorMap.tertiaryContainer.light = hexFromArgb(light.tertiaryContainer);
    this.materialColorMap.tertiaryContainer.dark = hexFromArgb(dark.tertiaryContainer);
    this.materialColorMap.onTertiaryContainer.light = hexFromArgb(light.onTertiaryContainer);
    this.materialColorMap.onTertiaryContainer.dark = hexFromArgb(dark.onTertiaryContainer);
    this.materialColorMap.error.light = hexFromArgb(light.error);
    this.materialColorMap.error.dark = hexFromArgb(dark.error);
    this.materialColorMap.onError.light = hexFromArgb(light.onError);
    this.materialColorMap.onError.dark = hexFromArgb(dark.onError);
    this.materialColorMap.errorContainer.light = hexFromArgb(light.errorContainer);
    this.materialColorMap.errorContainer.dark = hexFromArgb(dark.errorContainer);
    this.materialColorMap.onErrorContainer.light = hexFromArgb(light.onErrorContainer);
    this.materialColorMap.onErrorContainer.dark = hexFromArgb(dark.onErrorContainer);
    this.materialColorMap.background.light = hexFromArgb(light.background);
    this.materialColorMap.background.dark = hexFromArgb(dark.background);
    this.materialColorMap.onBackground.light = hexFromArgb(light.onBackground);
    this.materialColorMap.onBackground.dark = hexFromArgb(dark.onBackground);
    this.materialColorMap.surface.light = hexFromArgb(light.surface);
    this.materialColorMap.surface.dark = hexFromArgb(dark.surface);
    this.materialColorMap.onSurface.light = hexFromArgb(light.onSurface);
    this.materialColorMap.onSurface.dark = hexFromArgb(dark.onSurface);
    this.materialColorMap.surfaceVariant.light = hexFromArgb(light.surfaceVariant);
    this.materialColorMap.surfaceVariant.dark = hexFromArgb(dark.surfaceVariant);
    this.materialColorMap.onSurfaceVariant.light = hexFromArgb(light.onSurfaceVariant);
    this.materialColorMap.onSurfaceVariant.dark = hexFromArgb(dark.onSurfaceVariant);
    this.materialColorMap.outline.light = hexFromArgb(light.outline);
    this.materialColorMap.outline.dark = hexFromArgb(dark.outline);
    this.materialColorMap.outlineVariant.light = hexFromArgb(light.outlineVariant);
    this.materialColorMap.outlineVariant.dark = hexFromArgb(dark.outlineVariant);
    this.materialColorMap.shadow.light = hexFromArgb(light.shadow);
    this.materialColorMap.shadow.dark = hexFromArgb(dark.shadow);
    this.materialColorMap.scrim.light = hexFromArgb(light.scrim);
    this.materialColorMap.scrim.dark = hexFromArgb(dark.scrim);
    this.materialColorMap.inverseSurface.light = hexFromArgb(light.inverseSurface);
    this.materialColorMap.inverseSurface.dark = hexFromArgb(dark.inverseSurface);
    this.materialColorMap.inverseOnSurface.light = hexFromArgb(light.inverseOnSurface);
    this.materialColorMap.inverseOnSurface.dark = hexFromArgb(dark.inverseOnSurface);
    this.materialColorMap.inversePrimary.light = hexFromArgb(light.inversePrimary);
    this.materialColorMap.inversePrimary.dark = hexFromArgb(dark.inversePrimary);
    this.materialColorMap.primaryFixed.light = hexFromArgb(light.primaryFixed);
    this.materialColorMap.primaryFixed.dark = hexFromArgb(dark.primaryFixed);
    this.materialColorMap.onPrimaryFixed.light = hexFromArgb(light.onPrimaryFixed);
    this.materialColorMap.onPrimaryFixed.dark = hexFromArgb(dark.onPrimaryFixed);
    this.materialColorMap.primaryFixedDim.light = hexFromArgb(light.primaryFixedDim);
    this.materialColorMap.primaryFixedDim.dark = hexFromArgb(dark.primaryFixedDim);
    this.materialColorMap.onPrimaryFixedVariant.light = hexFromArgb(light.onPrimaryFixedVariant);
    this.materialColorMap.onPrimaryFixedVariant.dark = hexFromArgb(dark.onPrimaryFixedVariant);
    this.materialColorMap.secondaryFixed.light = hexFromArgb(light.secondaryFixed);
    this.materialColorMap.secondaryFixed.dark = hexFromArgb(dark.secondaryFixed);
    this.materialColorMap.onSecondaryFixed.light = hexFromArgb(light.onSecondaryFixed);
    this.materialColorMap.onSecondaryFixed.dark = hexFromArgb(dark.onSecondaryFixed);
    this.materialColorMap.secondaryFixedDim.light = hexFromArgb(light.secondaryFixedDim);
    this.materialColorMap.secondaryFixedDim.dark = hexFromArgb(dark.secondaryFixedDim);
    this.materialColorMap.onSecondaryFixedVariant.light = hexFromArgb(light.onSecondaryFixedVariant);
    this.materialColorMap.onSecondaryFixedVariant.dark = hexFromArgb(dark.onSecondaryFixedVariant);
    this.materialColorMap.tertiaryFixed.light = hexFromArgb(light.tertiaryFixed);
    this.materialColorMap.tertiaryFixed.dark = hexFromArgb(dark.tertiaryFixed);
    this.materialColorMap.onTertiaryFixed.light = hexFromArgb(light.onTertiaryFixed);
    this.materialColorMap.onTertiaryFixed.dark = hexFromArgb(dark.onTertiaryFixed);
    this.materialColorMap.tertiaryFixedDim.light = hexFromArgb(light.tertiaryFixedDim);
    this.materialColorMap.tertiaryFixedDim.dark = hexFromArgb(dark.tertiaryFixedDim);
    this.materialColorMap.onTertiaryFixedVariant.light = hexFromArgb(light.onTertiaryFixedVariant);
    this.materialColorMap.onTertiaryFixedVariant.dark = hexFromArgb(dark.onTertiaryFixedVariant);
    this.materialColorMap.surfaceDim.light = hexFromArgb(light.surfaceDim);
    this.materialColorMap.surfaceDim.dark = hexFromArgb(dark.surfaceDim);
    this.materialColorMap.surfaceBright.light = hexFromArgb(light.surfaceBright);
    this.materialColorMap.surfaceBright.dark = hexFromArgb(dark.surfaceBright);
    this.materialColorMap.surfaceContainerLowest.light = hexFromArgb(light.surfaceContainerLowest);
    this.materialColorMap.surfaceContainerLowest.dark = hexFromArgb(dark.surfaceContainerLowest);
    this.materialColorMap.surfaceContainerLow.light = hexFromArgb(light.surfaceContainerLow);
    this.materialColorMap.surfaceContainerLow.dark = hexFromArgb(dark.surfaceContainerLow);
    this.materialColorMap.surfaceContainer.light = hexFromArgb(light.surfaceContainer);
    this.materialColorMap.surfaceContainer.dark = hexFromArgb(dark.surfaceContainer);
    this.materialColorMap.surfaceContainerHigh.light = hexFromArgb(light.surfaceContainerHigh);
    this.materialColorMap.surfaceContainerHigh.dark = hexFromArgb(dark.surfaceContainerHigh);
    this.materialColorMap.surfaceContainerHighest.light = hexFromArgb(light.surfaceContainerHighest);
    this.materialColorMap.surfaceContainerHighest.dark = hexFromArgb(dark.surfaceContainerHighest);
  }

  static getColor(token) {
    const color = this.materialColorMap[token];
    if (!color) return token; // fallback hex أو rgb إذا لم يكن token موجود
    return `light-dark($ {
      color.light
    }, $ {
      color.dark
    })`;
  }
  //
  static applyMaterialColors() {
    let css = `:root {
      \n`;
      for (const key in this.materialColorMap) {
        css += `  --$ {
          key
        }: $ {
          this.materialColorMap[key].light
        };\n`;
      }
      css += `
    }\n\n@media (prefers-color-scheme: dark) {
      \n  :root {
        \n`;
        for (const key in this.materialColorMap) {
          css += `    --$ {
            key
          }: $ {
            this.materialColorMap[key].dark
          };\n`;
        }
        css += `
      }\n
    }\n\n[theme="dark"] {
      \n`;
      for (const key in this.materialColorMap) {
        css += `  --$ {
          key
        }: $ {
          this.materialColorMap[key].dark
        };\n`;
      }
      css += `
    }\n`;
    return css;
  }
}

MaterialDesign.loadMaterial();

function shouldApply(item, options = {}) {
  if (!item.hasTheme) return true;
  if (options.theme) {
    return item.themeName === options.theme;
  }
  const currentTheme = document.documentElement.getAttribute("data-theme");
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
  const baseDirection = document.documentElement.getAttribute("dir") || getComputedStyle(document.body).direction || "ltr";
  const finalCss = baseDirection === "rtl" ? item.cssRtl: item.cssLtr;
  const font = baseDirection === "rtl" ? item.urlFontLtr: item.urlFontRtl;
  const selector = buildSelector(item);
  const mediaQuery = buildMedia(item);

  let css = "";

  if (font) {
    css += font + "\n";
  }

  css += buildBlock(selector, finalCss, mediaQuery);
  applyRuntime(css);
}

function applyRuntime(css) {
  const style = document.createElement("style");
  style.textContent = "";
  style.textContent += MaterialDesign.applyMaterialColors();
  style.textContent += rootVariables();
  if (css) {
    style.textContent += css;
  }
  document.head.appendChild(style);
}

function rootVariables() {
  return `
  *, *::before, *::after {box-sizing: border-box;}
  html {
  scroll-behavior: smooth;
}
  body {
  margin: 0;
  padding: 0;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
  font-size: clamp(1rem, 1.2vw + 0.5rem, 1.5rem); 
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
  img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
  h1, h2, h3, h4, p, figure, blockquote, dl, dd {
  margin: 0;
}
`;
}
