![Motext.js](motext.gif)

Motext.js is a simple to use Javascript SVG text animation library. The quickest way to see exactly what you can do with it is to [try out the motext.js editor](https://themarkappleby.github.io/motext/).

[![motext editor](motext-editor.jpg)](https://themarkappleby.github.io/motext/)

## Quick Overview

```html
<!-- Add an element with some text -->
<h1 id="target">Hello World</h1>

<!-- Load GreenSock (this is a dependancy of Motext) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.4/gsap.min.js"></script>

<!-- Load Motext -->
<script src="https://unpkg.com/motext@1.3.15/dist/motext.js"></script>

<script type="text/javascript">
  // Load the Motext font
  motext.loadFont('https://unpkg.com/motext@1.3.15/dist/fonts/nunito.svg').then(() => {
    // Initialize and play the Motext animation
    // Optionally pass in some parameters
    motext.init('#target', {
      color: 'blue',
      revealProperty: 'scale'
    }).play()
  })
</script>
```

## Getting Started

Though you *can* import Motext via a CDN like in the example above, you can alternatively add Motext as a dependancy to your project via `npm install motext --save` or `yarn add motext`. You can then import Motext with `import motext from 'motext'` in your Javascript.

## Methods

### loadFont(path)

**path**: A string path to a Motext SVG font. At the moment there is only one font, but in theory more fonts could be added in the future. This method returns a promise that will resolve once the font has been loaded and injected into the DOM.

### init(element, options | optional)

The init method takes two parameters with the second one being optional.

**element**: Either a string in the form of a CSS selector or an actual DOM element(s)/NodeList. For example, the following would all be valid: `'.target'`, `'#target'`, `document.getElementById('#target')`, or `document.querySelectorAll('#target')`.

**options**: An object specifying the parameters that Motext should apply to the text animation. See below for more details or [try out the Motext.js editor](https://themarkappleby.github.io/motext/) to experiment with them in real-time.

The init method returns an instance of Motext with the following structure:
```
{
  el: [String | HTMLElement | Nodelist] The element you original passed into the init method.
  collection: [Array] The above element(s) separated into a JS array.
  options: [Object] The options object you originally passed into the init method.
  timelines: [Array] An array of GreenSock timelines (one for each item in the collection).
  play: [Function] A method which plays all timelines in the timelines array when invoked. This method returns a promise that resolves once the Motext animation has completed.
}
```

## Options

### color
The main text color. This is the color that the text will display in once the animation has completed.
Default: `#000000'`

### colors
An array of colors to use during the Motext animation. These colors will be applied in the order specified. Motext will loop back to the color in the first position of this array once it reaches the end.
Default: `['#0dafb7', '#eabc36', '#e154ed', '#62d628']`

### revealProperty
The CSS property to effect when animating in each character.
Default: `'y'

### revealAmount
The "from" value to use when animating in each character.
Default: `-6`

### revealDuration
The speed at which each character will animate in.
Default: `0.8`

### revealEase
The easing to apply when animating in each character. See the [GreenSock easing documentation](https://greensock.com/docs/v3/Eases) for the full list of supported easing methods.
Default: `'elastic'`

### font
The typeface to display. At present there is only one font and weight supported, which is Nunito Sans Semi-bold.
Default: `'nunito'`

### strokeDuration
The amount of time it takes for a single character stroke to animate.
Default: `1`

### strokeEase
The easing to apply when animating each character stroke. See the [GreenSock easing documentation](https://greensock.com/docs/v3/Eases) for the full list of supported easing methods.
Default: `'slow'`

### offsetDuration
The amount of time between when the colored text animated begins vs when the main text color animation begins.
Default: `0.15`

### staggerAmount
The amount of time between when each character is animated in sequence.
Default: `0.1`

### staggerEase
The easing to apply when sequencing the character animations. See the [GreenSock easing documentation](https://greensock.com/docs/v3/Eases) for the full list of supported easing methods.
Default: `'none'`

## Changing the Font Size and Spacing

The Motext font size corresponds with whatever font size you apply to your target element via CSS. Motext also accounts for media queries with regards to font-size with a built-in window resize listener. You can also change various font spacing properties via CSS (default values are listed below):

```
.motext-word {
  margin-right: 0.4em; /* controls space between words */
  margin-bottom: 0.4em; /* controls line-height */
}

.motext-letter {
  margin-right: 0.04em; /* controls letter-spacing */
}

.motext-letter--descend {
  margin-bottom: -0.22em; /* controls how far character with descenders (like j, p and q) drop */
}
```

## Changing the Font

At the moment, Motext only comes with a single font, which can be found in `/dist/fonts/nunito.svg`. You can edit this SVG directly to change the look of the typeface.

The Motext typeface supports a subset of characters. These include: `A-Z a-z 0-9 ! ? & . , " '`. If your text contains a character not found in that list, Motext will omitted the character(s) and display a warning in the console. Support for additional characters can be added by altering motext.svg as noted above.

Unfortunately you cannot load any typeface into Motext. The reason for this is that Motext works on the assumption that each character is made up of one ore more strokes within a mask, rather than filled shapes which traditional typefaces use.
