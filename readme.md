![motext.js](motext.gif)

motext.js is a simple to use Javascript SVG text animation library. The quickest way to see exactly what you can do with it is to [try out the motext.js editor](https://themarkappleby.github.io/motext/).

## Getting started

Add motext.js as a dependancy to your project:

`npm install motext --save` or `yarn add motext`

In your HTML, simply add an element with some text:
`<h1 id="myText">My Site Title</h1>`

And then tell motext.js to transform that text in SVG and play the animation:
`motext('#myText', options).play()`
