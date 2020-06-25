![motext.js](motext.gif)

motext.js is a simple to use Javascript SVG text animation library. The quickest way to see exactly what you can do with it is to [try out the motext.js editor](https://themarkappleby.github.io/motext/).

[![motext editor](motext-editor.jpg)](https://themarkappleby.github.io/motext/)

## Quick Overview

```html
<!-- Add an element with some text -->
<h1 id="target">Hello World</h1>

<!-- Load Greensock (this is a dependancy of motext) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.4/gsap.min.js"></script>

<!-- Load motext -->
<script src="https://unpkg.com/motext@1.2.0/dist/motext.js"></script>

<script type="text/javascript">
  // Load the motext font
  motext.loadFont('https://unpkg.com/motext@1.2.0/dist/fonts/motext.svg').then(() => {
    // Initialize and play the motext animation
    // Optionally pass in some paramaters
    motext.init('#target', {
      color: 'blue',
      revealProperty: 'scale'
    }).play()
  })
</script>
```

## Getting Started

Though you *can* import motext via CDN like in the example above, most users will likely want to bring in motext as a project dependancy which you can do via `npm install motext --save` for NPM or `yarn add motext` for Yarn.

You can then import motext with `import motext from 'motext'` in your Javascript.

## Methods

### loadFont(path)

**path**: A string path to a motext SVG font. At the moment there is only the single font but in theory more fonts could be added in the future. This method returns a promise that will resolve once the font has been loaded and injected into the DOM.

### init(element, options | optional)

The init methods takes two paramaters with the second one being optional.

**element**: Either a string in the form of a CSS selector or an actual DOM element(s)/NodeList. For example, the following would all be valid: `'.target'`, `'#target'`, `document.getElementById('#target')`, or `document.querySelectorAll('#target')`.

**options**: An object specifiying the paramaters that motext should apply to the text animation. See below for more details or [try out the motext.js editor](https://themarkappleby.github.io/motext/) to experiment with them in real-time.

## Options

### color 
The main text color. This is the color that the text will display in once the animation has completed. Default: `#000000'`.

### colors
Default: `['#0dafb7', '#eabc36', '#e154ed', '#62d628']`.

### revealProperty
Default: `'y'

### revealAmount
Default: `-6`

### revealDuration
Default: `0.8`

### revealEase
Default: `'elastic'`

### strokeWidth
Default: `8`

### strokeLinecap
Default: `'square'`

### strokeLinejoin
Default: `'bevel'`

### strokeDuration
Default: `1`

### strokeEase
Default: `'slow'`

### offsetDuration
Default: `0.15`

### staggerAmount
Default: `0.1`

### staggerEase
Default: `'none'`

