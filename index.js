/* global motext */

motext('#target', tl => {
  console.log('one')
  tl.play()
})

motext('.newTarget', tl => {
  console.log('two')
  tl.play()
})
