/* global motext */

const options = {
  color: '#000000',
  colors: ['#0dafb7', '#eabc36', '#e154ed', '#62d628'],
  revealProperty: 'y',
  revealAmount: -10,
  revealDuration: 0.8,
  revealEase: 'elastic',
  strokeDuration: 1,
  strokeEase: 'slow',
  offsetDuration: 0.15,
  staggerAmount: 0.1,
  staggerEase: 'none',
  font: 'nunito'
}
motext.loadFont('dist/fonts/nunito.svg').then(() => {
  document.getElementById('target').style.opacity = 1
  play()
})

function play () {
  const el = document.getElementById('target')
  const previewText = document.querySelector('#text').value
  el.innerHTML = previewText
  motext.init(el, options).play()
}

document.getElementById('replay').addEventListener('click', () => {
  play()
})

Array.from(document.querySelectorAll('.controls input, .controls select')).forEach(input => {
  input.addEventListener('change', e => {
    const id = e.target.id
    const val = e.target.value
    if (id === 'text') {
      document.getElementById('target').innerHTML = e.target.value
    } else if (id === 'fontSize') {
      document.getElementById('target').style.fontSize = val
    } else if (id === 'color1') {
      options.colors[0] = val
    } else if (id === 'color2') {
      options.colors[1] = val
    } else if (id === 'color3') {
      options.colors[2] = val
    } else if (id === 'color4') {
      options.colors[3] = val
    } else {
      options[id] = val
    }
    play()
  })
})
