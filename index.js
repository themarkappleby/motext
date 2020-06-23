/* global motext */

motext('#singleTarget', tl => tl.play())

motext('.multiTarget', tl => tl.play(), {
  colors: ['red', 'green', 'yellow'],
  revealProperty: 'scale',
  revealAmount: 0,
  staggerAmount: 0.2
})
